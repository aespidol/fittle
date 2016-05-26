workoutApp.controller("workoutController", function($location){
	var that = this
	that.workout = [1];
	that.edit = function(){
		$location.path('/edit')
	}
})