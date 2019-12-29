warning: LF will be replaced by CRLF in assets/css/src/components/_buttons.scss.
The file will have its original line endings in your working directory
[1mdiff --git a/assets/css/src/components/_buttons.scss b/assets/css/src/components/_buttons.scss[m
[1mindex 5b0a79d..498dc25 100644[m
[1m--- a/assets/css/src/components/_buttons.scss[m
[1m+++ b/assets/css/src/components/_buttons.scss[m
[36m@@ -1,38 +1,114 @@[m
 .intro-button {[m
 [m
[31m-	//box-shadow: 0px 6px 8px 0px #a9d6ef;[m
[31m-	background:linear-gradient(to bottom, #fa3319 5%, #c02c3d 100%);[m
[31m-	background-color:#fa3319;[m
[31m-	border-radius:18px;[m
[31m-	border:1px solid #d02718;[m
[31m-	display:inline-block;[m
[31m-	cursor:pointer;[m
[31m-	color:#ffffff;[m
[31m-	font-family:Arial;[m
[31m-	font-size:17px;[m
[31m-	padding:2rem;[m
[31m-	text-decoration:none;[m
[31m-	//text-shadow:0px 1px 0px #810e05;[m
[31m-	//position: absolute;[m
[32m+[m[32m    //box-shadow: 0px 6px 8px 0px #a9d6ef;[m
[32m+[m[32m    background: linear-gradient(to bottom, #fa3319 5%, #c02c3d 100%);[m
[32m+[m[32m    background-color: #fa3319;[m
[32m+[m[32m    border-radius: 18px;[m
[32m+[m[32m    border: 1px solid #d02718;[m
[32m+[m[32m    display: inline-block;[m
[32m+[m[32m    cursor: pointer;[m
[32m+[m[32m    color: #ffffff;[m
[32m+[m[32m    font-family: Arial;[m
[32m+[m[32m    font-size: 17px;[m
[32m+[m[32m    padding: 2rem;[m
[32m+[m[32m    text-decoration: none;[m
[32m+[m[32m    //text-shadow:0px 1px 0px #810e05;[m
[32m+[m[32m    //position: absolute;[m
     font-weight: 800;[m
     font-size: 20px;[m
     white-space: nowrap;[m
     cursor: pointer;[m
     text-transform: uppercase;[m
     position: relative;[m
[32m+[m[41m    [m
[32m+[m[32m    // color: green; // JUST FOR TESTING![m
 [m
     &:hover {[m
[31m-	    background:linear-gradient(to bottom, #c02c3d 5%, #fa3319 100%);[m
[31m-		background-color:#c02c3d;[m
[32m+[m[32m        background: linear-gradient(to bottom, #c02c3d 5%, #fa3319 100%);[m
[32m+[m[32m        background-color: #c02c3d;[m
     }[m
 [m
     &:active {[m
[31m-	    position:relative;[m
[31m-		top:1px;[m
[32m+[m[32m        position: relative;[m
[32m+[m[32m        top: 1px;[m
     }[m
 [m
     &:focus {[m
[31m-	    position:relative;[m
[31m-		top:1px;[m
[32m+[m[32m        position: relative;[m
[32m+[m[32m        top: 1px;[m
     }[m
 }[m
[32m+[m
[32m+[m[32m/* Ripple effect */[m
[32m+[m[32m.edfx-ripple {[m
[32m+[m
[32m+[m[32m    background-position: center;[m
[32m+[m[32m    transition: background 0.8s;[m
[32m+[m
[32m+[m[32m    position:relative;[m
[32m+[m
[32m+[m[32m    left: 50%;[m
[32m+[m[32m    transform: translateX(-50%);[m
[32m+[m
[32m+[m[32m    & > a {[m
[32m+[m[41m            [m
[32m+[m[32m        color: #fff !important;[m
[32m+[m[32m        text-decoration: none;[m
[32m+[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    &--blue {[m
[32m+[m[41m        [m
[32m+[m[41m        [m
[32m+[m
[32m+[m[32m        background: #00a0ff !important;[m
[32m+[m[41m        [m
[32m+[m[32m        &:hover {[m
[32m+[m
[32m+[m[32m            background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%;[m
[32m+[m
[32m+[m[32m        }[m
[32m+[m
[32m+[m[32m    }[m
[32m+[m[41m    [m
[32m+[m[32m    &--red {[m
[32m+[m
[32m+[m[41m       [m
[32m+[m
[32m+[m[32m        background: #fd3819;[m[41m [m
[32m+[m[41m        [m
[32m+[m[32m        &:hover {[m
[32m+[m[41m    [m
[32m+[m[32m            background: #e01e00 radial-gradient(circle, transparent 1%, #e01e00 1%) center/15000%;[m
[32m+[m[41m    [m
[32m+[m[32m        }[m
[32m+[m
[32m+[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    //[m[41m [m
[32m+[m
[32m+[m
[32m+[m
[32m+[m[32m    &:active {[m
[32m+[m
[32m+[m[32m        background-color: #6eb9f7;[m
[32m+[m[32m        background-size: 100%;[m
[32m+[m[32m        transition: background 0s;[m
[32m+[m
[32m+[m[32m    }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m/* Button style */[m
[32m+[m[32mbutton {[m
[32m+[m[32m    border: none;[m
[32m+[m[32m    border-radius: 2px;[m
[32m+[m[32m    padding: 12px 18px;[m
[32m+[m[32m    font-size: 16px;[m
[32m+[m[32m    text-transform: uppercase;[m
[32m+[m[32m    cursor: pointer;[m
[32m+[m[32m    color: white;[m
[32m+[m[32m    background-color: #2196f3;[m
[32m+[m[32m    box-shadow: 0 0 4px #999;[m
[32m+[m[32m    outline: none;[m
[32m+[m[32m}[m
\ No newline at end of file[m
