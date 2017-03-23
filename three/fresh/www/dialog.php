<?php
	$user = $_GET["user"];
	$list = json_decode($user);
	$conn=mysqli_connect("10.31.158.198","root","123456","dalei");
	mysqli_query($conn,"set names 'utf8'");		
	$sql = "insert into dialog(name, pwd, email) values('$list->name', '$list->pwd', '$list->email')";
	$rest = $conn->query($sql);	
//	echo $list->name;

	$output;
	if ($rest) {
		$output = array("state"=>"success");
	} else {
		$output = array("state"=>"fail","errMsg"=>"该用户名已存在！");
	}	
	echo json_encode($output);  
	
?>