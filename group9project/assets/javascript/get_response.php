<?php 
	$query = urlencode($_GET['query']);
    $queryURL = "https://api.walmartlabs.com/v1/search?&apiKey=vng9pukufs97mcyyjs5ps266&query=".$query."&format=json";
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $queryURL);
	curl_exec($ch);
	curl_close($ch);
?>