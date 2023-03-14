
module.exports = {
    run: function (creep) {
            //if creep is bringing energy to the spawn but has no energy left
    if (creep.memory.working == true && creep.carry.energy == 0) {
        //switch state
        creep.memory.working = false;
    } 
    //if creep is harvesting but is full
    else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
        //switch state
        creep.memory.working = true;
    }
    //if creep is supposed to transfer energy to the spawn
        if (creep.memory.working == true) {
            //try to transfer energy but the spawn is not in range
            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            //if (creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                //move towwards the spawn
                creep.moveTo(creep.room.controller);
            }
                //if the creep is supposed to harvest energy from the source
            } else {
                var source = creep.pos.findClosestByPath(FIND_SOURCES);
                //if the creep is out of range of the source
                if (creep.harvest(source) ==ERR_NOT_IN_RANGE) {
                    //move towards the source
                    creep.moveTo(source);
                }
            }
    }
    };