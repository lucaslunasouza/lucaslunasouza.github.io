
$(document).ready(function () {
	$("#id1").change(function () { 
		$("#p_name").text("MineGame");    
		$("#p_desc").html("Voxel based game written in Java and Processing.");
	});
	$("#id2").change(function () {      
		$("#p_name").text("Atlas of Worlds Map");    
		$("#p_desc").html("A tool for Path of Exile, an online Action RPG.");
	});
	$("#id3").change(function () {      
		$("#p_name").text("Pathfinder");    
		$("#p_desc").html("Visualization of a pathfinding algorithm for a rectangular grid.");
	});	
});