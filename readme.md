main- route : wallpaper-main/api/v1/

user : 
signup - /user/signup 
req = userName , userEmail, userPassword, userRole res =
success = status(201).json({success : true, data : userInsertedData}) 

failed = status(400).json({success : false, name : 'validation_error', message : error.array(), data : []})

failed = status(409).json({success : false, name : 'USER_ALEADY_EXISTED', message : "user already existed", data : []}) 

failed = status(500).json({success : false, name : 'internal_server_error' message : 'something went wrong', data : []})


signin - /user/signin
req = userEmail, userPassword res = success = status(200).json({success : true, data : userExsited}) 

failed = status(400).json({success : false, name : 'validation_error', message : error.array(), data : []}) 

failed = status(404).json({success :false, name : 'user_not_found', message : "user not found", data : []}) 

failed = status(401).json({success : false, name : 'incorrect_password', message : "user unauthorized due to incorrect password", data : []}) 

failed = status(500).json({success : false, name : 'internal_server_error' message : 'something went wrong'})