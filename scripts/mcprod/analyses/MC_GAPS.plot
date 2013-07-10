# BEGIN PLOT /MC_GAPS/fs-fmax
Title=max(etaF, etaB)
XLabel=$\Delta\eta^{F}$
YLabel=$\mathrm{d}\sigma/\mathrm{d}\Delta\eta^{F}$ [mb]
FullRange=1
# END PLOT

# BEGIN PLOT /MC_GAPS/fs-cmax
Title=max(etaC)
XLabel=$\Delta\eta^{C}$
YLabel=$\mathrm{d}\sigma/\mathrm{d}\Delta\eta^{C}$ [mb]
FullRange=1
# END PLOT

# BEGIN PLOT /MC_GAPS/fs-gapmax
Title=max(max(etaF, etaB), etaC)
XLabel=$\Delta\eta$
YLabel=$\mathrm{d}\sigma/\mathrm{d}\Delta\eta$ [mb]
FullRange=1
# END PLOT

# BEGIN PLOT /MC_GAPS/fs-fmin
Title=min(etaF, etaB)
XLabel=$\Delta\eta^{F}$
YLabel=$\mathrm{d}\sigma/\mathrm{d}\Delta\eta^{F}$ [mb]
FullRange=1
# END PLOT

# BEGIN PLOT /MC_GAPS/fs-minfmaxc
Title=min(max(etaF, etaB), etaC)
XLabel=$\Delta\eta$
YLabel=$\mathrm{d}\sigma/\mathrm{d}\Delta\eta$ [mb]
FullRange=1
# END PLOT

# BEGIN PLOT /MC_GAPS/detfs-fmax
Title=max(etaF, etaB) in $|\eta|<5.2$
XLabel=$\Delta\eta^{F}$
YLabel=$\mathrm{d}\sigma/\mathrm{d}\Delta\eta^{F}$ [mb]
FullRange=1
# END PLOT

# BEGIN PLOT /MC_GAPS/detfs-cmax
Title=max(etaC) in $|\eta|<5.2$
XLabel=$\Delta\eta^{C}$
YLabel=$\mathrm{d}\sigma/\mathrm{d}\Delta\eta^{C}$ [mb]
FullRange=1
# END PLOT

# BEGIN PLOT /MC_GAPS/detfs-gapmax
Title=max(max(etaF, etaB), etaC) in $|\eta|<5.2$
XLabel=$\Delta\eta$
YLabel=$\mathrm{d}\sigma/\mathrm{d}\Delta\eta$ [mb]
FullRange=1
# END PLOT

# BEGIN PLOT /MC_GAPS/detfs-fmin
Title=min(etaF, etaB) in $|\eta|<5.2$
XLabel=$\Delta\eta^{F}$
YLabel=$\mathrm{d}\sigma/\mathrm{d}\Delta\eta^{F}$ [mb]
FullRange=1
# END PLOT

# BEGIN PLOT /MC_GAPS/detfs-minfmaxc
Title=min(max(etaF, etaB), etaC) in $|\eta|<5.2$
XLabel=$\Delta\eta$
YLabel=$\mathrm{d}\sigma/\mathrm{d}\Delta\eta$ [mb]
FullRange=1
# END PLOT

# BEGIN PLOT /MC_GAPS/detfs-eta
Title=$\eta$ distribution of final state particles in $|\eta|<5.2$
XLabel=$\eta$
YLabel=$1/N_{ev}, \mathrm{d}N/\mathrm{d}\eta$
FullRange=1
# END PLOT

# BEGIN PLOT /MC_GAPS/detfs-eflow
Title=Energy flow in $|\eta|<5.2$
XLabel=$\eta$
YLabel=$1/N_{ev}, \mathrm{d}{E}/\mathrm{d}\eta$ [GeV]
FullRange=1
# END PLOT

# BEGIN PLOT /MC_GAPS/detfs-etflow
Title=Transverse energy flow in $|\eta|<5.2$
XLabel=$\eta$
YLabel=$1/N_{ev}, \mathrm{d}E_{\perp}/\mathrm{d}\eta$ [GeV]
FullRange=1
# END PLOT
