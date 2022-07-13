
    const tWords = JSON.parse(window.localStorage.getItem('tWordsJ')) || [];
    const nWords = JSON.parse(window.localStorage.getItem('nWordsJ')) || [];
    const tImagesSrc = JSON.parse(window.localStorage.getItem('tImagesJ')) || [];
    const nImagesSrc = JSON.parse(window.localStorage.getItem('nImagesJ')) || [];
    const tAudioSrc = JSON.parse(window.localStorage.getItem('tAudioJ')) || [];
    const nAudioSrc = JSON.parse(window.localStorage.getItem('nAudioJ')) || [];
    const tVideo = [];
    const nVideo = [];
    const combinedTArray = [];
    const combinedNArray = [];

    var progressdone = false

    var caratStatus = "opened"

    var hoverAudio = $("#hoverNoise")[0];
    $(".button, input, #expandButton").mouseover(function() {
    hoverAudio.play();
    });

    var clickAudio = $("#clickNoise")[0];
    $(".button, input, #expandButton").click(function() {
    clickAudio.play();
    });

    var randomizeCB = document.getElementById("randomize");
    var selectCB = document.getElementById("select");

    var checkBoxStatus = localStorage.getItem("checkBoxStatus");

    //puzzle maker vars

    var canvas = document.createElement('canvas')
    var ctx = canvas.getContext('2d')
    var parts = []
    // var img = new Image();
    var img = document.getElementById("image");

    img.style.maxWidth = "60vw"
    img.style.maxHeight = "60vh"

    img.crossOrigin="anonymous"

    function refreshPage() {
        location.reload();
    }


    tWords.forEach((item, index) => {
            combinedTArray.push("tWord");
    });

    tImagesSrc.forEach((item, index) => {
            combinedTArray.push("tImage");
    });

    tAudioSrc.forEach((item, index) => {
            combinedTArray.push("tAudio");
    });

    nWords.forEach((item, index) => {
            combinedNArray.push("nWord");
    });

    nImagesSrc.forEach((item, index) => {
            combinedNArray.push("nImage");
    });

    nAudioSrc.forEach((item, index) => {
            combinedNArray.push("nAudio");
    });

    function updateArrays() {

        tVideo.forEach((item, index) => {
                combinedTArray.push("tVideo");
        });

        nVideo.forEach((item, index) => {
                combinedNArray.push("nVideo");
        });
    }

    function showInstructions() {
        
        document.getElementById("questionText").classList.remove("hidden"); 
        document.getElementById("questionText").classList.remove("smallScale");
        document.getElementById("question").style.zIndex = "0";
        document.getElementById("backButton").style.zIndex = "0";
        document.getElementById("expandButton").style.zIndex = "2";    
        document.getElementById("questionText").classList.remove("scaleDown");
        document.getElementById("questionText").classList.add("scaleUp");   
        

        setTimeout(function() {
        document.getElementById("questionText").style.display = "block";
        }, 3000);
    }

    function hideInstructions() {
        document.getElementById("questionText").classList.add("scaleDown");
        document.getElementById("questionText").classList.remove("scaleUp");
        setTimeout(function() {
            document.getElementById("question").style.zIndex = "10";
            document.getElementById("questionText").classList.add("hidden");
            document.getElementById("questionText").classList.add("smallScale");
            document.getElementById("backButton").style.zIndex = "10";
            document.getElementById("expandButton").style.zIndex = "5"; 
        }, 2000);
    }

    function hideStart() {
        document.getElementById("start").classList.add("fadeOut");
        setTimeout(function() {
            document.getElementById("start").classList.add("hidden");
        }, 2000);
    };

    function determineStart() {
        if (tImagesSrc.length !== 0 || tVideo.length !==0) {
            hideStart();
            beginTraining();
        } else {
            alert("Insufficient trigger images/videos. Please enter some trigger images in the Triggers List and/or upload trigger videos on this page.")
        }
    }

    function showVideos() {
        document.getElementById("videoTriggers").classList.remove("hidden"); 
        document.getElementById("videoTriggers").classList.remove("smallScale");
        document.getElementById("question").style.zIndex = "0";
        document.getElementById("backButton").style.zIndex = "0";    
        document.getElementById("videoTriggers").classList.remove("scaleDown");
        document.getElementById("videoTriggers").classList.add("scaleUp");
    }

    function hideVideos() {
        document.getElementById("videoTriggers").classList.add("scaleDown");
        document.getElementById("videoTriggers").classList.remove("scaleUp");
        setTimeout(function() {
            document.getElementById("question").style.zIndex = "10";
            document.getElementById("videoTriggers").classList.add("hidden");
            document.getElementById("videoTriggers").classList.add("smallScale");
            document.getElementById("backButton").style.zIndex = "10";
        }, 2000);
    }

// advances progress bar if answer was correct, determines if training is done

    function progress() {
        var v1=document.getElementById("progress").value;
        if (v1 < 199) {
            document.getElementById("progress").value= v1 + 1;
        }

        else {
            document.getElementById("progress").value= v1 + 1;
            progressdone = true
            finishTraining();
        }
    };

    function finishTraining() {
        document.getElementById("displayedMedia").style.visibility = "hidden";
        document.getElementById("letter").style.visibility = "hidden";

        document.getElementById("finished").classList.remove("hidden");
        document.getElementById("finished").classList.add("fadeIn");
    }

 
    //tVideos

    function redrawTVideo(file) {
        const tVideoDiv = document.getElementById('tVideoDiv')
        const vid = document.createElement('video');
        vid.controls = 'controls';
        vid.src = URL.createObjectURL(file);
        vid.style.width = "400px"
        vid.style.margin = "5px"
        vid.style.marginTop = "30px"
        tVideoDiv.appendChild(vid);

    }

    function addTVideoAndRedraw() {
      const tVideoInput = document.getElementById('tVideoInput');
      if (tVideoInput.files.length === 1) {
        addTVideo(tVideoInput.files[0]);
        redrawTVideo(tVideoInput.files[0])
      } else {
        alert('No file selected. Select a file and try again.');
      }
    }

    function addTVideo(TVideoBlob) {
      tVideo.push(TVideoBlob);
    }

    const tVideoButton = document.getElementById('tVideoButton');
    tVideoButton.addEventListener('click', addTVideoAndRedraw);

    //nVideos

    function redrawNVideo(file) {
        const nVideoDiv = document.getElementById('nVideoDiv')
        const vid = document.createElement('video');
        vid.controls = 'controls';
        vid.src = URL.createObjectURL(file);
        vid.style.width = "400px"
        vid.style.margin = "5px"
        vid.style.marginTop = "30px"
        nVideoDiv.appendChild(vid);

    }

    function addNVideoAndRedraw() {
      const nVideoInput = document.getElementById('nVideoInput');
      if (nVideoInput.files.length === 1) {
        addNVideo(nVideoInput.files[0]);
        redrawNVideo(nVideoInput.files[0]);
      } else {
        alert('No file selected. Select a file and try again.');
      }
    }

    function addNVideo(NVideoBlob) {
      nVideo.push(NVideoBlob);
    }

    const nVideoButton = document.getElementById('nVideoButton');
    nVideoButton.addEventListener('click', addNVideoAndRedraw);

    function showHideSide() {
    	var carat = document.getElementById("expandCarat")
    	var leftContainer = document.getElementById("leftContainer")
    	var expandButton = document.getElementById("expandButton")
    	if (caratStatus == "opened") {
    		carat.innerHTML = "&#8250;";
    		caratStatus = "closed";
    		leftContainer.classList.add("hidden");
    		expandButton.style.left = "0px"


    	} else {
    		carat.innerHTML = "&#8249;"
    		caratStatus = "opened"
    		leftContainer.classList.remove("hidden");
    		expandButton.style.left = "330px"
    	}
    }

    function checkSwitch(obj) {
    	var cbs = document.getElementsByClassName("puzzleCb");
    	for (var i = 0; i < cbs.length; i++) {
        cbs[i].checked = false;
    	}
    	obj.checked = true;
    }

    function checkBoxStatusFinder() {

        if (randomizeCB.checked == true) {
            checkBoxStatus = "randomize"
            localStorage.setItem("checkBoxStatus", checkBoxStatus);
        } else if (selectCB.checked == true) {
            checkBoxStatus = "select"
            localStorage.setItem("checkBoxStatus", checkBoxStatus);
        } else {
            checkBoxStatus = "randomize"
            localStorage.setItem("checkBoxStatus", checkBoxStatus);
        }
    }

    //changes puzzle selection mode

    window.onload = onPageLoad();

    function onPageLoad() {

        if (checkBoxStatus == "randomize") {
            img.src = tImagesSrc[Math.floor(Math.random() * tImagesSrc.length)];
            randomizeCB.checked = true;
            selectCB.checked = false;
        } else {
            console.log("selectedImage")
            selectCB.checked = true;
            randomizeCB.checked = false;
        }
    };

    //puzzle piece maker

    function startPuzzle() {
        split();
    }

    function split() {
        var numRows = 8;
        var numCols = 8;
        var pieceWidth = img.width / numCols;
        var pieceHeight = img.height / numRows;

        for (var x = 0; x < numRows; x++) {
            for (var y = 0; y < numCols; y++) {

                canvas.width = pieceWidth;
                canvas.height = pieceHeight;

                ctx.drawImage(img, x*pieceWidth, y*pieceHeight, pieceWidth, pieceHeight, 0, 0, pieceWidth, pieceHeight);

                parts.push(canvas.toDataURL());

            }

        }

            //for test div

        for (var i = 0; i < numRows*numCols; i++) {
            var slicedImage = document.createElement('img')
            slicedImage.src = parts[i];
            var div = document.getElementById('puzzlePieces');
            div.appendChild(slicedImage);
        }
    }

    //background grid maker

    var frame = document.getElementById("puzzleFrame")




