var gotg_price = 0;

// https://www.bw.com/api/data/v1/trades?marketId=4330&dataSize=2
// https://www.bw.com/api/data/v1/entrusts?marketId=4330&dataSize=1
// https://www.bw.com/api/data/v1/klines?marketId=4330&type=1M&dataSize=1
// https://cors-anywhere.herokuapp.com/https://www.bw.com/api/data/v1/klines?marketId=4330&type=1M&dataSize=1

// $.ajax({
//     url: "https://cors-anywhere.herokuapp.com/https://api.mexc.com/api/v3/avgPrice?symbol=GOTGUSDT", // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소
//     method: "GET",
// })

$.ajax({
    url: "https://hsh-proxy-server.herokuapp.com/https://api.mexc.com/api/v3/avgPrice?symbol=GOTGUSDT", // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소
    method: "GET",
})

// HTTP 요청이 성공하면 요청한 데이터가 done() 메소드로 전달됨.
.done(function(json) {
    resdata = json
    //console.log(resdata.datas.slice(-1)[0])
	//gotg_price = resdata.datas[0][4];
    //gotg_price = resdata.datas.slice(-1)[0];
    gotg_price = resdata.price
    console.log(gotg_price)
//	$("#gotg_price").val(json);
	setPrice(gotg_price);
})

// HTTP 요청이 실패하면 오류와 상태에 관한 정보가 fail() 메소드로 전달됨.
.fail(function(xhr, status, errorThrown) {
	console.log(errorThrown + " : " + status);
});


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
/*
$({ val : 0 }).animate({ val : 1.5 }, {
    duration: 1000,
    step: function() {
        var num = numberWithCommas(this.val.toFixed(1));
        $(".count_num2").text(num);
    },
    complete: function() {
        var num = numberWithCommas(this.val.toFixed(1));
        $(".count_num2").text(num);
    }
});


$({ val : 0 }).animate({ val : 0.1 }, {
    duration: 1000,
    step: function() {
        var num = numberWithCommass(this.val.toFixed(1));
        $(".count_num1").text(num);
    },
    complete: function() {
        var num = numberWithCommass(this.val.toFixed(1));
        $(".count_num1").text(num);
    }
});
*/
function numberWithCommass(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//function setPrice2(gotg_price){
	$({ val : 0 }).animate({ val : 1.8 }, {
		duration: 1000,
		step: function() {
			var num = numberWithCommas(this.val.toFixed(1));
			$(".count_num2").text(num);
		},
		complete: function() {
			var num = numberWithCommas(this.val.toFixed(1));
			$(".count_num2").text(num);
		}
	});
//}
/*
$({ val : 0 }).animate({ val : 0.1 }, {
    duration: 1000,
    step: function() {
        var num = numberWithCommas(this.val.toFixed(1));
        $(".count_num1").text(num);
    },
    complete: function() {
        var num = numberWithCommas(this.val.toFixed(1));
        $(".count_num1").text(num);
    }
});
*/
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$({ val : 0 }).animate({ val : 0.08 }, {
    duration: 1000,
    step: function() {
        var num = numberWithCommas(this.val.toFixed(2));
        $(".count_num3").text(num);
    },
    complete: function() {
        var num = numberWithCommas(this.val.toFixed(2));
        $(".count_num3").text(num);
    }
});

$({ val : 0 }).animate({ val : 1.6 }, {
    duration: 1000,
    step: function() {
        var num = numberWithCommas(this.val.toFixed(1));
        $(".count_num6").text(num);
    },
    complete: function() {
        var num = numberWithCommas(this.val.toFixed(1));
        $(".count_num6").text(num);
    }
});

function setPrice(gotg_price){
	$({ val : 0 }).animate({ val : gotg_price }, {
		duration: 1000,
		step: function() {
			var num = numberWithCommass(this.val.toFixed(2));
            console.log(num)
			$(".count_num1").text(num);
		},
		complete: function() {
			var num = numberWithCommass(this.val.toFixed(2));
			$(".count_num1").text(num);
		}
	});
    //$(".count_num1").text(Math.floor(gotg_price));
//	setPrice2(gotg_price);
}


function numberWithCommass(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$({ val : 0 }).animate({ val : 1.5 }, {
    duration: 1000,
    step: function() {
        var num = numberWithCommas(this.val.toFixed(1));
        $(".count_num4").text(num);
    },
    complete: function() {
        var num = numberWithCommas(this.val.toFixed(1));
        $(".count_num4").text(num);
    }
});

$({ val : 0 }).animate({ val : 0 }, {
    duration: 1000,
    step: function() {
        var num = numberWithCommas(this.val.toFixed(1));
        $(".count_num5").text(num);
    },
    complete: function() {
        var num = numberWithCommas(this.val.toFixed(1));
        $(".count_num5").text(num);
    }
});

$({ val : 0 }).animate({ val : 0.3 }, {
    duration: 1000,
    step: function() {
        var num = numberWithCommas(this.val.toFixed(1));
        $(".count_num7").text(num);
    },
    complete: function() {
        var num = numberWithCommas(this.val.toFixed(1));
        $(".count_num7").text(num);
    }
});