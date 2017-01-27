
$(document).ready(function () {
	$("#id1").change(function () { 
		$("#p_name").text("Cordially");    
		$("#p_desc").html("Calendar web app that allows users to manage their calendar and share it with others.");
	});
	$("#id2").change(function () { 
		$("#p_name").text("MineGame");    
		$("#p_desc").html("Voxel based game written in Java and Processing.");
	});
	$("#id3").change(function () {      
		$("#p_name").text("Atlas of Worlds Map");    
		$("#p_desc").html("A tool for Path of Exile, an online Action RPG.");
	});
	$("#id4").change(function () {      
		$("#p_name").text("Pathfinder");    
		$("#p_desc").html("Visualization of a pathfinding algorithm for a rectangular grid.");
	});	
	$("#id5").change(function () {      
		$("#p_name").text("Lancebotics");    
		$("#p_desc").html("Built a robot to compete in the VEX Robotics World Championship.");
	});	
});