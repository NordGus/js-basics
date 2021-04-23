const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        // const self = this; // Do not use
        // self.tags.forEach(tag => {
        //     console.log(self.title, tag);
        // });
        // this.tags.forEach(function(tag) {
        //     console.log(this.title, tag);
        // }.bind(this));
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
}

video.showTags();

function playVideo(a, b) {
    console.log(this, a, b);
}

playVideo.call({ name: 'Gustavo' }, 1, 2);
playVideo.apply({ name: 'Gustavo' }, [1, 2]);
playVideo.bind({ name: 'Gustavo' })();


playVideo();