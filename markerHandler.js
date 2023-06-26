AFRAME.registerComponent('markerHandler',{
    init:function(){
        this.el.addEventListener('markerfound',()=>
        {
            this.handleMarkerFound();
        })
        this.el.addEventListener('markerlost',()=>
        {
            this.handleMarkerFound();
        })
    },
    handleMarkerFound:function(){

    },
    handleMarkerLost:function(){
        swal({
            title:"thanks for order!",
            text:'your order will be served soon at the table!'
        });
    },
})

