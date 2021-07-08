function keydown(key) {
	//const keycap = document.querySelector(`#key-${key}`);
}

function keyup(key) {
	//const keycap = document.querySelector(`#key-${key}`);
}

function documentStat(value){
	var elems = document.getElementsByClassName('box-container');
	for (var i=0;i<elems.length;i+=1){
		elems[i].style.display = value;
	}
}

// electron0
function run() {
	const electron = require('electron');
	const ipcRenderer = electron.ipcRenderer;

  	// 기본 히든
 	documentStat('none');
	/*
	9 : 탭키
	32 : 스페이스
	160 : 슆트
	162 : 컨트롤 
	*/
    document.getElementsByClassName('key-top-d');

	ipcRenderer.on('keydown', (event, data) => {
		switch (data) {
		case 9:
			return  documentStat('flex');
		default:
			break;
		}

		const key = String.fromCharCode(data);
		keydown(key);
	});

	ipcRenderer.on('keyup', (event, data) => {
		switch (data) {
			case 9:
				return documentStat('none');
			case 32:
				return keyup('space');
			case 160:
				return keyup('shift');
			case 162:
				return keyup('ctrl');
			default:
				break;
		}

		const key = String.fromCharCode(data);
		keyup(key);
	});

	ipcRenderer.on('mousedown', (event, data) => {
		//마우스클릭
	});
}

run();
