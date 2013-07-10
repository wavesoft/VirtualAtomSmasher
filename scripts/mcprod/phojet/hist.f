      SUBROUTINE PHO_PHIST(IMODE,WEIGHT)
C**********************************************************************
C
C     example histrograms using PHOJET /POHEP1/ and /POHEP2/
C
C     input:  IMODE      -1  initialization
C                        -2  output of results
C                         1  take event statistics
C             WEIGHT     weight of event (if necessary)
C                        for final output: corresponding cross section
C
C**********************************************************************
      IMPLICIT DOUBLE PRECISION(A-H,O-Z)
      SAVE

C  event debugging information
      INTEGER NMAXD
      PARAMETER (NMAXD=100)
      INTEGER IDEB,KSPOM,KHPOM,KSREG,KHDIR,KACCEP,KSTRG,KHTRG,KSLOO,
     &        KHLOO,KSDPO,KHDPO,KEVENT,KSOFT,KHARD
      COMMON /PODEBG/ IDEB(NMAXD),KSPOM,KHPOM,KSREG,KHDIR,KACCEP,KSTRG,
     &                KHTRG,KSLOO,KHLOO,KSDPO,KHDPO,KEVENT,KSOFT,KHARD

C  global event kinematics and particle IDs
      INTEGER IFPAP,IFPAB
      DOUBLE PRECISION ECM,PCM,PMASS,PVIRT
      COMMON /POGCMS/ ECM,PCM,PMASS(2),PVIRT(2),IFPAP(2),IFPAB(2)

C  general process information
      INTEGER IPROCE,IDNODF,IDIFR1,IDIFR2,IDDPOM,IPRON
      COMMON /POPRCS/ IPROCE,IDNODF,IDIFR1,IDIFR2,IDDPOM,IPRON(15,4)

C  standard particle data interface
      INTEGER NMXHEP
      PARAMETER (NMXHEP=10000)
      INTEGER NEVHEP,NHEP,ISTHEP,IDHEP,JMOHEP,JDAHEP
      DOUBLE PRECISION PHEP,VHEP
      COMMON /POEVT1/ NEVHEP,NHEP,ISTHEP(NMXHEP),IDHEP(NMXHEP),
     &                JMOHEP(2,NMXHEP),JDAHEP(2,NMXHEP),PHEP(5,NMXHEP),
     &                VHEP(4,NMXHEP)
C  extension to standard particle data interface (PHOJET specific)
      INTEGER IMPART,IPHIST,ICOLOR
      COMMON /POEVT2/ IMPART(NMXHEP),IPHIST(2,NMXHEP),ICOLOR(2,NMXHEP)

C  event weights and generated cross section
      INTEGER IPOWGC,ISWCUT,IVWGHT
      DOUBLE PRECISION SIGGEN,HSWGHT,HSWCUT,EVWGHT
      COMMON /POWGHT/ SIGGEN(4),HSWGHT(0:10),HSWCUT(20),EVWGHT(0:10),
     &                IPOWGC(0:10),ISWCUT(20),IVWGHT(0:10)


c     Pythia6 event record (see "5.2 The Event Record" in pythia6 manual)
      INTEGER N,NPAD,K
      DOUBLE PRECISION P,V
      COMMON/PYJETS/N,NPAD,K(4000,5),P(4000,5),V(4000,5)

c      WRITE(6,*) 'debug =  ',ECM,PCM,PMASS,PVIRT,IFPAP,IFPAB,WEIGHT,SIGGEN

C     process event
      IF(IMODE.EQ.1) THEN
c       shift event record by two positions to make place for beam particles
        do i = N,1,-1
c         update pointers to parent K(i,3) and daughters K(i,4) and K(i,5)
          do j = 3,5
            if (K(i,j) .gt. 0) then
              K(i,j) = K(i,j) + 2
            endif
          enddo
          
c         move particle records by two positions
          do j = 1,5
            K(i+2,j) = K(i,j)
            P(i+2,j) = P(i,j)
            V(i+2,j) = V(i,j)
          enddo
        enddo
        
c       beam A
        K(1,1) = 21
        K(1,2) = IFPAP(1)
        K(1,3) = 0
        K(1,4) = 0
        K(1,5) = 0
        
        P(1,1) = 0.
        P(1,2) = 0.
        P(1,3) = PCM
        P(1,4) = ECM / 2.
        P(1,5) = PMASS(1)
        
        V(1,1) = 0
        V(1,2) = 0
        V(1,3) = 0
        V(1,4) = 0
        V(1,5) = 0
        
c       beam B
        K(2,1) = 21
        K(2,2) = IFPAP(2)
        K(2,3) = 0
        K(2,4) = 0
        K(2,5) = 0
        
        P(2,1) = 0.
        P(2,2) = 0.
        P(2,3) = -PCM
        P(2,4) = ECM / 2.
        P(2,5) = PMASS(2)
        
        V(2,1) = 0
        V(2,2) = 0
        V(2,3) = 0
        V(2,4) = 0
        V(2,5) = 0
        
        N = N + 2
        
c        if (NEVHEP .le. 1) then
c          CALL PYLIST(1)
c        endif
        
        call convhepmc(SIGGEN(4), 0)


C     initialization
      ELSE IF(IMODE.EQ.-1) THEN

C     final output
      ELSE IF(IMODE.EQ.-2) THEN
c       WEIGHT is the cross section of the generated events
        call convhepmc(WEIGHT, 1)
      
      ENDIF

      END



      SUBROUTINE PHO_LHIST(IMODE,WEIGHT)
      IMPLICIT DOUBLE PRECISION (A-H,O-Z)
      END
