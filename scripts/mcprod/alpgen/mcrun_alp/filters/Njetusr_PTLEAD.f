c-------------------------------------------------------------------
      subroutine alshis
c-------------------------------------------------------------------
      include 'alpgen.inc'
      include 'Njet.inc'
      integer i,j
      ptbin=10e0
      ptmax=400e0
      xmbin=4e0
      xmmax=400e0
      do i=1,njets
        call mbook(i,'pt_jet',ptbin,0e0,ptmax)
      enddo
      do i=1,njets-1
        do j=i+1,njets
          call mbook(i*10+j,'dR',0.1,0e0,5e0)
        enddo
      enddo
      end

      subroutine usrcut(lnot,weight)
cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
c     c
c     Applies kinematical cuts to the final state during the phase
c     -space generation                                          c
c                                                                c
cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
      implicit none
      include 'alpgen.inc'
      include 'Njet.inc'
      integer lnot
      double precision cutkin(10)
      common/loccut/cutkin
      double precision weight
C-----------------------------------------------------------------
C MCPLOTS: filter on hardest jet in event
      integer i,ISTART
      double precision ptmax_leadjet,PTLEAD_MIN,PTLEAD_MAX
       DATA ISTART/0/
      IF(ISTART.EQ.0) THEN
C LM: cannot read since integrated in Njetgen execut.;
C        WRITE(*,*)'INPUT PTLEAD_MIN'
C        READ(*,*) PTLEAD_MIN
C replace from MCPLOTS .ini file
        PTLEAD_MIN=%PTLEAD_MIN%
        PTLEAD_MAX=%PTLEAD_MAX%
        ISTART=1
      ENDIF

      weight= 1.d0
      lnot= 0
      
      ptmax_leadjet=0d0
      do i=1,njets
        ptmax_leadjet=max(ptmax_leadjet,ptj(i))
      enddo
      if(ptmax_leadjet.lt.PTLEAD_MIN) goto 10
      if(ptmax_leadjet.gt.PTLEAD_MAX) goto 10
 20   return
 10   lnot= 1
      return
      end
c-------------------------------------------------------------------
      subroutine alfhis
c-------------------------------------------------------------------
      implicit none
      include 'alpgen.inc'
      include 'Njet.inc'
      integer i,j
      real  xnorm
      character *1 jet(9)
      data jet/'1','2','3','4','5','6','7','8','9'/
      open(unit=99,file=topfile,err=101,status='unknown')
      if(imode.le.1) then
         xnorm=sngl(avgwgt/totwgt)
      elseif(imode.eq.2) then
         xnorm=1e0/real(unwev)
      else
         write(*,*) 'imode type not allowed, stop'
         stop
      endif
      do i=1,200
         call mopera(i,'F',i,i,xnorm,1.)
         call mfinal(i)
      enddo 
      do i=1,njets
         call mtop(i,99,'pt'//jet(i),' ','LOG')
      enddo
      do i=1,njets-1
        do j=i+1,njets
          call mtop(i*10+j,99,'dR['//jet(i)//jet(j)//']',' ','LIN')
        enddo
      enddo
c
      close(99)
 101  return
      end

      subroutine monitor(n,mon_fname)
c     This routine is called by default every 100K events.
c     The user can use it to get regular updates on the run
c     while this is progressing. Textual output can be written to file
c     fname, where partial cross-sections and and generation
c     efficiencies have already been printed by default
      implicit none
      include 'alpgen.inc'
      include 'Njet.inc'
      integer n
      character *15 mon_fname
c
      if(evgen) then
         if(mod(n,100000).eq.0) then
c     save histograms' contents
            call msave
c     print out histograms
            call alfhis
c     restore original contents, to proceed with analysis
            call mrestore
         endif 
      endif 
      end

c-------------------------------------------------------------------
      subroutine aleana(jproc,wgt)
c     analyse event, fill histograms
c-------------------------------------------------------------------
      implicit none
      include 'alpgen.inc'
      include 'Njet.inc'
      real*8 mQQ,wgt
      real rwgt
      integer i,j,jproc,ord(10)
c
      rwgt=real(wgt)
      if(rwgt.lt.0e0) then
         write(*,*) 'negative wgt=',wgt
         return
      elseif (rwgt.eq.0e0) then
         return
      endif
c
c     reordering according to pt
      call alusor(ptj,njets,ord,2)              
      do i=1,njets
         call mfill(i,real(ptj(ord(njets+1-i))),rwgt)
      enddo
c
      do i=1,njets-1
        do j=i+1,njets
          call mfill(i*10+j,real(drjj(ord(njets+1-i),ord(njets+1-j)))
     $         ,rwgt)
        enddo
      enddo
c     
      end
