// shows media buttons

    function showmedia() {

        document.getElementById("words").setAttribute("style", "display: block");
        document.getElementById("pictures").setAttribute("style", "display: block");
        document.getElementById("videos").setAttribute("style", "display: block");
        document.getElementById("audio").setAttribute("style", "display: block");    
    }

    function showpictures() {

            var x = document.getElementById("imagecontain");

            if (x.style.display === "none") {
            x.style.display = "block";
            }

            else {
            x.style.display = "none";
            }
        }

    function shownpictures() {

            var x = document.getElementById("nimagecontain");

            if (x.style.display === "none") {
            x.style.display = "block";
            }

            else {
            x.style.display = "none";
            }
        }

    function showtaudio() {

            var x = document.getElementById("taudiocontain");

            if (x.style.display === "none") {
            x.style.display = "block";
            }

            else {
            x.style.display = "none";
            }
        }

    function shownaudio() {

            var x = document.getElementById("naudiocontain");

            if (x.style.display === "none") {
            x.style.display = "block";
            }

            else {
            x.style.display = "none";
            }
        }

    function showtvideo() {

            var x = document.getElementById("tvideocontain");

            if (x.style.display === "none") {
            x.style.display = "block";
            }

            else {
            x.style.display = "none";
            }
        }

    function shownvideo() {

            var x = document.getElementById("nvideocontain");

            if (x.style.display === "none") {
            x.style.display = "block";
            }

            else {
            x.style.display = "none";
            }
        }

// toggles word input

    function unhidewords() {

        var x = document.getElementById("hiddenwords");

        if (x.style.display === "none") {
        x.style.display = "block";
        }

        else {
        x.style.display = "none";
        }
    }

    const twords = JSON.parse(window.localStorage.getItem('twordsj')) || [];
    const nwords = JSON.parse(window.localStorage.getItem('nwordsj')) || [];
    const myImages = [];
    var myImagesSrc = JSON.parse(window.localStorage.getItem('timagesj')) || [];
    const myNImages = [];
    const myNImagesSrc = JSON.parse(window.localStorage.getItem('nimagesj')) || [];
    const taudio = [];
    const taudioSrc = JSON.parse(window.localStorage.getItem('taudioj')) || [];
    const naudio = [];
    const naudioSrc = JSON.parse(window.localStorage.getItem('naudioj')) || [];
    const tvideo = [];
    const nvideo = [];
    var combinedtarray = [];
    var combinednarray = [];
        
    function begintraining(){

        var ogmedia = Math.random();
        var nothing = ""


        if (ogmedia <= .5) {
        var tarraytype = combinedtarray[Math.floor(Math.random() * combinedtarray.length)]
            switch (tarraytype) {
                case "tword":
                    setTimeout(mediatime, 600) 
                    setTimeout(lettertime, 1100) 
                    setTimeout(removeword, 1100)

                    document.getElementById("trainingletter").innerHTML = nothing;

                    function mediatime() {
                
                        document.getElementById("trainingmedia").innerHTML = twords[Math.floor(Math.random() * twords.length)];
                    }

                    function lettertime() {
                        document.getElementById("trainingletter").innerHTML = letter;
                    }

                    function removeword() {
                        document.getElementById("trainingmedia").innerHTML = nothing;
                    }
                break;

                case "timage":

                    document.getElementById("trainingletter").innerHTML = nothing;

                    setTimeout(imagetime, 600) 
                    setTimeout(lettertime, 1100) 
                    setTimeout(removeimage, 1100)

                    function imagetime() {
                        var finaltimage = myImagesSrc[Math.floor(Math.random() * myImagesSrc.length)];
                        const img = document.getElementById('imageteste');
                        fetch( "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png" )
                        .then( (resp) => resp.arrayBuffer() )
                        .then( (buf) => {
                          const blob = new Blob( [buf], { type: 'image/png' } );
                          img.src = finaltimage;
                        } );
                    }

                    function lettertime() {
                        document.getElementById("trainingletter").innerHTML = letter;
                    }

                    function removeimage() {
                        image = document.getElementById('imageteste');
                        image.src = "/Users/annikachavez/Library/Mobile Documents/com~apple~CloudDocs/code/ocdapp/assets/images/transparent.png";
                    }
                break;

                case "taudio":

                    var finaltaudio = taudioSrc[Math.floor(Math.random() * taudioSrc.length)]
                    var taudcount = Math.floor(Math.random() * taudioSrc.length)
                        var audio = document.getElementById("audiotest");

                        document.getElementById("trainingletter").innerHTML = nothing;

                        setTimeout(audiotime, 600) 

                        function audiotime() {

                            if (progressdone == true)
                            return;
                            var image = document.getElementById('imageteste');
                            image.src = "/Users/annikachavez/Library/Mobile Documents/com~apple~CloudDocs/code/ocdapp/assets/images/giphy.gif"
                            var snd = new Audio(finaltaudio);
                            snd.play();
                            snd.onended = function() {removeaudio(); lettertime();};
                        };

                        function lettertime() {
                            document.getElementById("trainingletter").innerHTML = letter;
                        }

                        function removeaudio() {
                            var image = document.getElementById('imageteste');
                            image.src = "/Users/annikachavez/Library/Mobile Documents/com~apple~CloudDocs/code/ocdapp/assets/images/transparent.png";
                        };
                    break;

                case "tvideo":

                var finaltvideo = tvideo[Math.floor(Math.random() * tvideo.length)]
                    var tvidcount = Math.floor(Math.random() * tvideo.length)
                        var video = document.getElementById("videotest");

                        document.getElementById("trainingletter").innerHTML = nothing;

                        setTimeout(videotime, 600) 

                        function videotime() {

                            if (progressdone == true)
                            return;
                            var vid = document.getElementById("videotest");
                            vid.style.visibility = "visible"; 
                            vid.src = URL.createObjectURL(finaltvideo);
                            vid.onended = function() {removevideo(); lettertime();};
                        };

                        function lettertime() {
                            document.getElementById("trainingletter").innerHTML = letter;
                        }

                        function removevideo() {
                            document.getElementById("videotest").style.visibility = "hidden";
                        };
                break;
            }
        }

        else {
        var narraytype = combinednarray[Math.floor(Math.random() * combinednarray.length)]
            switch (narraytype) {
                case "nword":

                    setTimeout(mediatime, 600) 
                    setTimeout(lettertime, 1100) 
                    setTimeout(removeword, 1100)

                    document.getElementById("trainingletter").innerHTML = nothing;

                    function mediatime() {
                
                        document.getElementById("trainingmedia").innerHTML = nwords[Math.floor(Math.random() * nwords.length)];
                    }

                    function lettertime() {
                        document.getElementById("trainingletter").innerHTML = letter;
                    }

                    function removeword() {
                        document.getElementById("trainingmedia").innerHTML = nothing;
                    }
                break;

                case "nimage":

                    document.getElementById("trainingletter").innerHTML = nothing;

                    setTimeout(imagetime, 600) 
                    setTimeout(lettertime, 1100) 
                    setTimeout(removeimage, 1100)

                    function imagetime() {
                        var finalnimage = myNImagesSrc[Math.floor(Math.random() * myNImagesSrc.length)];
                        const img = document.getElementById('imageteste');
                        fetch( "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png" )
                        .then( (resp) => resp.arrayBuffer() )
                        .then( (buf) => {
                          const blob = new Blob( [buf], { type: 'image/png' } );
                          img.src = finalnimage;
                        } );
                    }

                    function lettertime() {
                        document.getElementById("trainingletter").innerHTML = letter;
                    }

                    function removeimage() {
                        image = document.getElementById('imageteste');
                        image.src = "/Users/annikachavez/Library/Mobile Documents/com~apple~CloudDocs/code/ocdapp/assets/images/transparent.png";
                    }
                break;

                case "naudio":

                    var finalnaudio = naudioSrc[Math.floor(Math.random() * naudioSrc.length)]
                    var naudcount = Math.floor(Math.random() * naudioSrc.length)
                        var audio = document.getElementById("audiotest");

                        document.getElementById("trainingletter").innerHTML = nothing;

                        setTimeout(audiotime, 600) 

                        function audiotime() {

                            if (progressdone == true)
                            return;
                            var image = document.getElementById('imageteste');
                            image.src = "/Users/annikachavez/Library/Mobile Documents/com~apple~CloudDocs/code/ocdapp/assets/images/giphy.gif"
                            var snd = new Audio(finalnaudio);
                            snd.play();
                            snd.onended = function() {removeaudio(); lettertime();};
                        };

                        function lettertime() {
                            document.getElementById("trainingletter").innerHTML = letter;
                        }

                        function removeaudio() {
                            var image = document.getElementById('imageteste');
                            image.src = "/Users/annikachavez/Library/Mobile Documents/com~apple~CloudDocs/code/ocdapp/assets/images/transparent.png";
                        };
                    break;

                case "nvideo":

                var finalnvideo = nvideo[Math.floor(Math.random() * nvideo.length)]
                    var nvidcount = Math.floor(Math.random() * nvideo.length)
                        var video = document.getElementById("videotest");

                        document.getElementById("trainingletter").innerHTML = nothing;

                        setTimeout(videotime, 600) 

                        function videotime() {

                            if (progressdone == true)
                            return;
                            var vid = document.getElementById("videotest");
                            vid.style.visibility = "visible"; 
                            vid.src = URL.createObjectURL(finalnvideo);
                            vid.onended = function() {removevideo(); lettertime();};
                        };

                        function lettertime() {
                            document.getElementById("trainingletter").innerHTML = letter;
                        }

                        function removevideo() {
                            document.getElementById("videotest").style.visibility = "hidden";
                        };
                break;
            }
        }

//determines letter shown

        var letter = Math.random();

        if (letter <= .5) {
            letter = "E"
            newletter = "E"
        }

        else {
            letter = "F"
            newletter = "F"
        }

//switches words and letters from top to bottom

        var style = Math.random();

        if (style <= .5) {

            document.getElementById('trainingmedia').style.top ="400px";
            document.getElementById('imageteste').style.top ="400px";
            document.getElementById('videotest').style.top ="400px";
            document.getElementById('trainingletter').style.top ="50px";
        }

           
        else {
    
            document.getElementById('trainingmedia').style.top ="50px";
            document.getElementById('imageteste').style.top ="50px";
            document.getElementById('videotest').style.top ="50px";
            document.getElementById('trainingletter').style.top ="400px";
        }
    }; 

// upon pressing the E or F button, determines whether answer was correct

    function checkE() {

        switch (newletter) {

            case "E":
            progress();
            begintraining();
            break;

            case "F":
            begintraining();
            break;
        }
    } 

    function checkF() {

        switch (newletter) {

            case "F":
            progress();
            begintraining();
            break;

            case "E":
            begintraining();
            break;
        } 
    }

//keyboard input for E and F buttons

    document.onkeydown = function (e) {

        e = e || window.event;

        switch (e.which || e.keyCode) {
            case 69 : checkE()
                break;
            case 70 : checkF()
                break;
        }
    }

// advances progress bar if answer was correct, determines if training is done
    var progressdone = false

    function progress() {
        var v1=document.getElementById('p1').value;
        if (v1 < 319) {
            document.getElementById("p1").value= v1 + 1;
        }

        else {
            document.getElementById("p1").value= v1 + 1;
            progressdone = true
            finishtraining();
        }
    };

//displays done with training message

    function finishtraining() {
        document.getElementById("trainingmedia").style.visibility = "hidden";
        document.getElementById("trainingletter").style.visibility = "hidden";
        document.getElementById("plus").style.visibility = "hidden";
        document.getElementById("imageteste").style.visibility = "hidden";

        document.getElementById("finished").innerHTML = "You are done with training. Congrats!"
    }

// word input and word arrays

//twords

displayPreviousTWords();

    function displayPreviousTWords() {
        twords.forEach((item, index) => {
            var divForWords = document.getElementById("divForWords")
            divForWords.innerHTML = twords.join('<br/>');
            combinedtarray.push("tword");



    });
    };

    function addtword(){

        var tword = document.getElementById("divForWords");
        combinedtarray.push("tword");
        twords.push(document.getElementById("input").value);
        window.localStorage.setItem('twordsj', JSON.stringify(twords));
        tword.innerHTML = twords.join('<br/>');
        document.getElementById("input").value = ""
    };

    function removetwordsj() {
        window.localStorage.removeItem('twordsj');
    }

//nwords

    displayPreviousNWords();

    function displayPreviousNWords() {
        nwords.forEach((item, index) => {
            var divForNWords = document.getElementById("divForNWords")
            divForNWords.innerHTML = nwords.join('<br/>');
            combinednarray.push("nword");



    });
    };


    function addnword(){
        var nword = document.getElementById("divForNWords");
        combinednarray.push("nword");
        nwords.push(document.getElementById("input2").value);
        window.localStorage.setItem('nwordsj', JSON.stringify(nwords));
        nword.innerHTML = nwords.join('<br/>');
        document.getElementById("input2").value = "" 
    };

    function removenwordsj() {
        window.localStorage.removeItem('nwordsj');
    }


//images
const divForImages = document.getElementById('divForImages');
  divForImages.innerHTML = '';

showPreviousImages();

function addTimageUrl(item) {
    var url = document.getElementById("timageUrl").value
    myImagesSrc.push(url)
    window.localStorage.setItem('timagesj', JSON.stringify(myImagesSrc));
    const img = document.createElement('img');
    img.src = url
    img.style.maxWidth = "200px"
    divForImages.appendChild(img);
    combinedtarray.push('timage')
    document.getElementById("timageUrl").value = ""

};

function showPreviousImages() {
    myImagesSrc.forEach((item, index) => {
    const img = document.createElement('img');
    img.src = myImagesSrc[index]
    img.style.maxWidth = "200px"
    divForImages.appendChild(img);
    combinedtarray.push('timage')
  });
}

function addImage(imageBlob) {
  myImages.push(imageBlob);
  combinedtarray.push("timage");

}

function redrawImages(imageBlob) {
    const divForImages = document.getElementById('divForImages')
    const img = document.createElement('img');
    img.src = URL.createObjectURL(imageBlob);
    img.style.maxWidth = "200px"
    divForImages.appendChild(img);
  };

function addImageAndRedraw() {
  const fileInput = document.getElementById('fileInput');
  if (fileInput.files.length > 0) {
    addImage(fileInput.files[0]);
    redrawImages(fileInput.files[0]);
  } else {
    alert('No file selected. Select a file and try again.');
  }
}

function removetimagesj() {
        window.localStorage.removeItem('timagesj');
        var images = document.getElementById('divForImages')
        images.innerHTML = '';

    }


const button = document.getElementById('button');
button.addEventListener('click', addImageAndRedraw);

// base 64 image conversion

button.addEventListener('click', function() {
  var files = document.getElementById('fileInput').files;
  if (files.length > 0) {
    getBase64(files[0]);
  }
});

function getBase64(file) {
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     myImagesSrc.push(reader.result)
     window.localStorage.setItem('timagesj', JSON.stringify(myImagesSrc));
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}

//nimages

const divForNImages = document.getElementById('divForNImages');
  divForNImages.innerHTML = '';

showPreviousNImages();

function addNimageUrl() {
    var url = document.getElementById("nimageUrl").value
    myNImagesSrc.push(url)
    window.localStorage.setItem('nimagesj', JSON.stringify(myNImagesSrc));
    const img = document.createElement('img');
    img.src = url
    img.style.maxWidth = "200px"
    divForNImages.appendChild(img);
    combinednarray.push('nimage')
    document.getElementById("nimageUrl").value = ""
};

function showPreviousNImages() {
    myNImagesSrc.forEach((item, index) => {
    const img = document.createElement('img');
    img.src = myNImagesSrc[index]
    img.style.maxWidth = "200px"
    divForNImages.appendChild(img);
    combinednarray.push('nimage')
  });
}

function addNImage(imageBlob) {
  myNImages.push(imageBlob);
  combinednarray.push("nimage");

}

function redrawNImages(imageBlob) {
    const divForNImages = document.getElementById('divForNImages')
    const img = document.createElement('img');
    img.src = URL.createObjectURL(imageBlob);
    img.style.maxWidth = "200px"
    divForNImages.appendChild(img);
  };

function addNImageAndRedraw() {
  const nFileInput = document.getElementById('nFileInput');
  if (nFileInput.files.length > 0) {
    addNImage(nFileInput.files[0]);
    redrawNImages(nFileInput.files[0]);
  } else {
    alert('No file selected. Select a file and try again.');
  }
}

function removenimagesj() {
        window.localStorage.removeItem('nimagesj');
        var images = document.getElementById('divForNImages')
        images.innerHTML = '';

    }


const nButton = document.getElementById('nButton');
nButton.addEventListener('click', addNImageAndRedraw);

// base 64 image conversion for N images

nButton.addEventListener('click', function() {
  var files = document.getElementById('nFileInput').files;
  if (files.length > 0) {
    getNBase64(files[0]);
  }
});

function getNBase64(file) {
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     myNImagesSrc.push(reader.result)
     window.localStorage.setItem('nimagesj', JSON.stringify(myNImagesSrc));
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}

//audio files

displayPreviousTAudio();

function displayPreviousTAudio() {
    taudioSrc.forEach((item, index) => {
    const aud = document.createElement('audio');
    aud.controls = 'controls';
    aud.src = taudioSrc[index]
    divForTAudio.appendChild(aud);
    combinedtarray.push('taudio')
  });
}
function getTAudioBase64(file) {
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     taudioSrc.push(reader.result)
     window.localStorage.setItem('taudioj', JSON.stringify(taudioSrc));
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}

function redrawTAudio(file) {
    const divForTAudio = document.getElementById('divForTAudio')
    const aud = document.createElement('audio');
    aud.controls = 'controls';
    aud.src = URL.createObjectURL(file);
    divForTAudio.appendChild(aud);
  };

function addTAudioAndRedraw() {
  const tAudioInput = document.getElementById('tAudioInput');
  if (tAudioInput.files.length === 1) {
    addTAudio(tAudioInput.files[0]);
    redrawTAudio(tAudioInput.files[0]);
  } else {
    alert('No file selected. Select a file and try again.');
  }
}

function addTAudio(TAudioBlob) {
  taudio.push(TAudioBlob);
  combinedtarray.push("taudio");
}

const tAudioButton = document.getElementById('tAudioButton');
tAudioButton.addEventListener('click', addTAudioAndRedraw);
tAudioButton.addEventListener('click', function() {
  var files = document.getElementById('tAudioInput').files;
  if (files.length > 0) {
    getTAudioBase64(files[0]);
  }
});

function removetaudioj() {
        window.localStorage.removeItem('taudioj');
        var audio = document.getElementById('divForTAudio')
        audio.innerHTML = '';

    }


//naudio

displayPreviousNAudio();

function displayPreviousNAudio() {
    naudioSrc.forEach((item, index) => {
    const aud = document.createElement('audio');
    aud.controls = 'controls';
    aud.src = naudioSrc[index]
    divForNAudio.appendChild(aud);
    combinednarray.push('naudio')
  });
}
function getNAudioBase64(file) {
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     naudioSrc.push(reader.result)
     window.localStorage.setItem('naudioj', JSON.stringify(naudioSrc));
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}

function redrawNAudio(file) {
    const divForNAudio = document.getElementById('divForNAudio')
    const aud = document.createElement('audio');
    aud.controls = 'controls';
    aud.src = URL.createObjectURL(file);
    divForNAudio.appendChild(aud);
  };

function addNAudioAndRedraw() {
  const nAudioInput = document.getElementById('nAudioInput');
  if (nAudioInput.files.length === 1) {
    addNAudio(nAudioInput.files[0]);
    redrawNAudio(nAudioInput.files[0]);
  } else {
    alert('No file selected. Select a file and try again.');
  }
}

function addNAudio(NAudioBlob) {
  naudio.push(NAudioBlob);
  combinedtarray.push("naudio");
}

const nAudioButton = document.getElementById('nAudioButton');
nAudioButton.addEventListener('click', addNAudioAndRedraw);
nAudioButton.addEventListener('click', function() {
  var files = document.getElementById('nAudioInput').files;
  if (files.length > 0) {
    getNAudioBase64(files[0]);
  }
});

function removenaudioj() {
        window.localStorage.removeItem('naudioj');
        var audio = document.getElementById('divForNAudio')
        audio.innerHTML = '';


    }

//trigger video files

function redrawTVideo(file) {
    const divForTVideo = document.getElementById('divForTVideo')
    const vid = document.createElement('video');
    vid.controls = 'controls';
    vid.src = URL.createObjectURL(file);
    vid.style.width = "200px"
    divForTVideo.appendChild(vid);

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
  tvideo.push(TVideoBlob);
  combinedtarray.push("tvideo");
}

const tVideoButton = document.getElementById('tVideoButton');
tVideoButton.addEventListener('click', addTVideoAndRedraw);


//neutral video

function redrawNVideo(file) {
    const divForNVideo = document.getElementById('divForNVideo')
    const vid = document.createElement('video');
    vid.controls = 'controls';
    vid.src = URL.createObjectURL(file);
    vid.style.width = "200px"
    divForNVideo.appendChild(vid);

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
  nvideo.push(NVideoBlob);
  combinednarray.push("nvideo");
}

const nVideoButton = document.getElementById('nVideoButton');
nVideoButton.addEventListener('click', addNVideoAndRedraw);