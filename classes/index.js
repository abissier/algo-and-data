let House = function(floors) {
    this.floors = floors;
};

House.prototype.countWindows = function(){
    console.log(10);
}

const audreyHouse = new House(1);

audreyHouse.countWindows();
