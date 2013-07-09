
_NS_.Clip = function() {
    
    this.objects = [];
    this.keyframes = [];
    this.tweens = [];
    this.frameScript = [];
    this.frame = 0;
    this.loop = true;
    
};

_NS_.Clip.prototype.nextFrame = function() {
    if (++this.frame >= this.frames.length) {
        if (this.loop) {
            frame=0;
        } else {
            return;
        }
    }
    this.updateVisibility();
};

_NS_.Clip.prototype.updateVisibility = function() {
    
}

_NS_.Clip.prototype.nextFrame = function() {

}