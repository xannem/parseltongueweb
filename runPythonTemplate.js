const spawn = require("child_process").spawn;


// NOTE: Change test.py to the file of the python file 
const python  = spawn("python", ["test.py"]);
python.stdout.on('data', (data) => {
	i = 0;
	str = "";
	while (data.hasOwnProperty(i)) {
		str += (String.fromCharCode(data[i]));
		i++;
	}
	console.log(str);
});


