var fullscreen_off_height = $(window).height();
var current_menu_id = 1;
var cur_percentage_left = 0;
var cur_volume_right = 0;
//panels
var cur_value_panels_left_left_part1_metre = 0;
var cur_value_panels_left_right_part1_metre = 0;
var cur_value_panels_left_right_part2_metre = 0;
var cur_bit_relative_position = 0;
//end

//29.03.2016
var cur_value_pvo_left_left_top_metre = 0;
var cur_value_pvo_left_right_top_metre = 0;
var cur_value_pvo_right_left_metre = 0;
var cur_value_pvo_right_right_metre = 0;
var lever_head_dragging = false;
var pvo_left_right_bottom_ellipse_switcher_is_on = 0;

var pvo_switchers = [0, 1, 1, 1, 1, 0, 0];
var pvo_clickable = false;
// preventer timer
var tp = 0;
// handler
var preventer_timer;
var prev_sec = 1;

// graph timer handler;
var graph_timer;
var graph_sec = 1;

var tk1_timer = 0;
var tk1_timer_started = false;
var tk1_sec = 1;

var tk2_timer = 0;
var tk2_started = false;
var tk2_sec = 1;

var tChg_timer = 0;
var tChg_sec = 1;
var tChg_started = false;
var qChgcum = 0;
var qicumiw = -1;
var qChwp = 0;

var prev_tk2_av = -1;
var prev_tk2_hinf = -1;
var prev_tk2_qicum = -1;
var prev_tk2_SIDPP = -1;

var ChPos = 0;
var tCho_timer;
var qChcum = 0;
var tCho_sec = 1;
var mw_changed = false;
var prevMW = -1;
// INFLUX VOLUME VARS
var qi = 0;
var aV = 0;
var prev_tcbop_av = -1;
var prev_tcbop_BHPd = -1;
var prev_tcbop_qi_sum = 0;
var prev_tcbop_qi = -1;

var prev_tcho_aV = -1;
var prev_tcho_SICP = -1;
var prev_tcho_SIDPP = -1;

var tcbop_timer;
var tcbop_sec = 4;
var tinf_timer;
var tinf_sec = 0;
var qicum = 0;
var qicum_close = 0;
var qi_sum = 0;
var DPP = 0;
var SIDPP = 0;
var SICP = 0;
var hinf = 0;
var Boinf = 0;
var Toinf = 1;

var pitv_timer;
var pitv_timer_started = false;
var pitv_sec = 1;
var Vcum = 0;
var Vdis = 0;
var deltaSpm = 0;
var prevSpm = 0;
var prevSpm2 = 0;
var Vsch = 0;
var PitVal = null;
var PitVah = null;

var is_bit_moving = false;
var is_drilling = false;
var influx_started = false;

var tcum_timer;
var time_handler;
var d = new Date();

//29.03.2016

var lever_head_level_fullscreen_on_off = -1;
var lever_images = [];//used to cache rotor area lever background images 
var left_metre_on_off = 1;
var right_metre_on_off = 1;

var isSlider_1_active = 0;
var slider_left_range = 0;
var slider_right_range;
var sliderFraction = 0;
var slider_1_value = 0;

var isSlider_2_active = 0;
var slider_1_left_range = 0;
var slider_1_right_range;
var sliderFraction_1 = 0;
var slider_2_value = 0;

var isSlider_3_active = 0;
var slider_2_left_range = 0;
var slider_2_right_range;
var sliderFraction_2 = 0;
var slider_3_value = 0;


var rotorIsOn = 0;
var pumpIsOn_1 = 0;
var pumpIsOn_2 = 0;
var bit_move_speed = 0.3281;
var drill_device_2_height_change_rate = 0.005, hose_2_height_change_rate = 0.005, drill_device_3_pos_change_rate = 0.815, drill_device_4_pos_change_rate = 0.1075;
var fast = 1;
// MAY 30
var pump_switchers = [0, 0, 0, 0, 0, 0, 0, 0];
//slugging
var slugging_switcher_1 = 0;
var slugging_switcher_2 = 0;
var slugging_switcher_3 = 0;
var slugging_switcher_4 = 0;
var slugging_switcher_5 = 0;
//end

//panels
var slider_3_left_range = 0;
var slider_3_right_range = 0;
var sliderFraction_3 = 0;
var slider_4_value = 0;
//end

/*28.03.2016*/
var dragging_panel_left_middle_bottom_regulator_head = false
/*28.03.2016*/

/*02.04.2016*/
var cur_values_valves_metre = [0, 0, 0];
var valves_switchers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
/*02.04.2016*/

/* constants */
var gravity = 9.8;
// reynolds num
var fdp, fhwdp, fdc, fdca;
// dannie o PLASTE
var ht = [0, 27, 50, 1500, 2500, 3500, 4500, 4900, 5248, 5626, 5638];
var fs = [0, 5, 4, 3, 3, 3, 3, 3, 4, 5, 5];
var FPgr = [0, 0.4653, 0.4653, 0.4653, 0.4653, 0.4653, 0.4653, 0.4653, 0.4653, 0.6043, 0.4653];
var a = [0, 2.8, 2.7, 2.2, 2.1, 2, 1.9, 1.6, 1.4];

// ves nagruzka prohodka v dinamike global vars
var deltaBitPos = 0.3281;
var dMD = 0.3281; // fut
var dWOB = 0.1; // s.Bitpos <= MD

var kLadc = 0, kLahwdp = 0, kLadpo = 0, kLadpc = 0, DCaPLL = 0, HWDPaPLL = 0, DPaPLLo = 0, DPaPLLc = 0;
// local vars for turbulent type of flow
var kT1adc = 0, kT2adc = 0, kT3adc = 0, kT4adc = 0, kT5adc = 0, kT1ahwdp = 0, kT2ahwdp = 0, kT3ahwdp = 0, kT4ahwdp = 0, kT5ahwdp = 0,
    kT1adpo = 0, kT2adpo = 0, kT3adpo = 0, kT4adpo = 0, kT5adpo = 0, kT1adpc = 0, kT2adpc = 0, kT3adpc = 0, kT4adpc = 0, kT5adpc = 0;

// local vars for kill mud
var kT1adc2 = 0, kT2adc2 = 0, kT3adc2 = 0, kT4adc2 = 0, kT5adc2 = 0, kT1ahwdp2 = 0, kT2ahwdp2 = 0, kT3ahwdp2 = 0, kT4ahwdp2 = 0, kT5ahwdp2 = 0,
    kT1adpo2 = 0, kT2adpo2 = 0, kT3adpo2 = 0, kT4adpo2 = 0, kT5adpo2 = 0, kT1adpc2 = 0, kT2adpc2 = 0, kT3adpc2 = 0, kT4adpc2 = 0, kT5adpc2 = 0;

var imagePath = 'http://localhost:52863/Content/Images/';
var soundPath = 'http://localhost:52863/Content/sounds/';
var role = "undefined";
// influx volume
var FP = 0;
// snapshot object,
var s = null;
// Reference the auto-generated proxy for the hub.
var socket = null;
var roomName = null;
var snp_id = null;


function Graphics() {
    this.DPP = new Array();
    this.SICP = new Array();
    this.PitVa = new Array();
    this.ChPos = new Array();
    this.spm = new Array();
    this.BHPd = new Array();
    this.FP = new Array();
    this.CSHP = new Array();
}

var Graphs = new Graphics();

// SOCKET JS BEGIN

$(function () {

    // Create a function that the hub can call back to display messages.

    socket = $.connection.trackHub;
    socket.client.notify = function (name) {
        start_timers();
    }

    socket.client.updateBitPos = function (val) {
        updateBitPos(val);
    };

    socket.client.setSnpId = function (id) {
        console.log("SOCKET: setting snp id: " + id);
        snp_id = id;
        if (snp_id != null) {
            socket.server.getSnapshot(snp_id).done(function (snp) {
                s = snp;
                console.log("driller received snapshot: " + s.MD);
                s.BitPos = 5625;
                stopLoadingAnimation();
                graph_timer = setInterval(graph_store_statistics, 1 * 1000);
                do_preliminary();
            }).fail(function (error) {
                console.log('Error: ' + error);
            });
        }
    };

    // to est' znachenie v method send peredaem (name, message)
    // kotorie on ispoluzet kak argumenti dlya funkcii na cliente.
    // Start the connection.
    $.connection.hub.start().done(function () {
        initialize_practice();
        // TODO: connection started pass values between clients now
    });
});

// SOCKET JS END

/*
FOR DEBUG PURPOSES
*/
var logger = function () {
    var oldConsoleLog = null;
    var pub = {};

    pub.enableLogger = function enableLogger() {
        if (oldConsoleLog == null)
            return;

        window['console']['log'] = oldConsoleLog;
    };

    pub.disableLogger = function disableLogger() {
        oldConsoleLog = console.log;
        window['console']['log'] = function () { };
    };

    return pub;
}();


function startLoadingAnimation() {
    $('.loader_div').show();
    $('.main_container').css('-webkit-filter', 'blur(7px)').css('-moz-filter', 'blur(7px)').css('-o-filter', 'blur(7px)').css('-ms-filter', 'blur(7px)').css('filter', 'blur(7px)');
}

function stopLoadingAnimation() {
    $('.loader_div').hide();
    $('.main_container').css('-webkit-filter', 'none').css('-moz-filter', 'none').css('-o-filter', 'none').css('-ms-filter', 'none').css('filter', 'none');
}

function graph_store_statistics() {
    Graphs.DPP.push(DPP);
    Graphs.SICP.push(SICP);
    Graphs.PitVa.push(s.PitVa);
    Graphs.ChPos.push(s.ChPos);
    Graphs.FP.push(FP);
    Graphs.spm.push(obs.spm);
    Graphs.BHPd.push(s.BHPd);
    Graphs.CSHP.push((Math.random() * 100) + 1); // cassing shoe pressure not calculated
    console.log(DPP + " " + SICP + " " + s.PitVa + " " + s.ChPos + " " + FP + " " + obs.spm + " " + s.BHPd);
}

function initialize_practice() {
    if ($('#partner_uid').val() == '') {
        roomName = $('#uid').val();
        socket.server.joinRoom(roomName, role);
    } else {
        roomName = $('#partner_uid').val();
        socket.server.joinRoom(roomName, role);
        start_timers();
        // remove driller from available to join list // online drillers
        socket.server.occupy(roomName);
    }
    if (role == "supervisor" || role == "universal") {
        snp_id = $('#snp_id').val();
        socket.server.shareSnapshotId(snp_id, roomName);
        socket.server.getSnapshot(snp_id).done(function (snp) {
            console.log("supervisor received snapshot");
            s = snp;
            do_preliminary();
        });
    }
}

//menu
function changeMenuDivForSpecificRole(menuID) {
    if (current_menu_id != menuID) {

        $("#menu-" + menuID).find('.unselected').show();
        $("#menu-" + menuID).css("background-color", "transparent");
        $("#menu-" + menuID).find("#menu_" + menuID + "_icon").attr("src", imagePath + "menu_" + menuID + "_icon" + "_on.svg");
        $("#menu-" + menuID).find("#menu_" + menuID + "_text").css("color", "#ffffff");

        $("#menu-" + current_menu_id).find('.unselected').hide();
        $("#menu-" + current_menu_id).css("background-color", "#2D2D32");
        $("#menu-" + current_menu_id).find("#menu_" + current_menu_id + "_icon").attr("src", imagePath + "menu_" + current_menu_id + "_icon" + "_off.svg");
        $("#menu-" + current_menu_id).find("#menu_" + current_menu_id + "_text").css("color", "#b3b3b3");

        current_menu_id = menuID;

        switch (current_menu_id) {

            case '1':
                $(".rotor_area").css("display", "block");
                $(".slugging_group,.supervisor_panel,.pvo_equipment,.valves_group,.pumps").css("display", "none");
                if (rotorIsOn) repaintRotor(1);
                break;

            case '2':
                $(".valves_group").css("display", "block");
                $(".rotor_area,.supervisor_panel,.pvo_equipment,.slugging_group,.pumps").css("display", "none");
                if (!rotorIsOn) repaintRotor(0);
                break;

            case '3':
                $(".supervisor_panel").css("display", "block");
                $(".rotor_area,.valves_group,.pvo_equipment,.slugging_group,.pumps").css("display", "none");
                if (!rotorIsOn) repaintRotor(0);
                break;

            case '4':
                $(".pvo_equipment").css("display", "block");
                $(".rotor_area,.valves_group,.supervisor_panel,.slugging_group,.pumps").css("display", "none");
                if (!rotorIsOn) repaintRotor(0);
                break;

            case '5':
                $(".slugging_group").css("display", "block");
                $(".rotor_area,.valves_group,.supervisor_panel,.pvo_equipment,.pumps").css("display", "none");
                if (!rotorIsOn) repaintRotor(0);
                break;

            case '6':
                $(".pumps").css("display", "block");
                $(".rotor_area,.valves_group,.supervisor_panel,.pvo_equipment,.slugging_group").css("display", "none");
                if (!rotorIsOn) repaintRotor(0);
                break;
        }
    }
}

function changeMenuDiv(menuID) {
    switch (role) {
        case 'universal':
            changeMenuDivForSpecificRole(menuID);
            break;

        case 'supervisor':
            if (menuID == 3) {
                changeMenuDivForSpecificRole(menuID);
            }
            break;

        case 'driller':
            if (menuID != 3) {
                changeMenuDivForSpecificRole(menuID);
            }
            break;
    }
}
//end

//pvo metres arrows rotate functions
function rotate_pvo_left_metre1_arrow(value) {
    var angle;
    angle = value * 243 / 210;
    $('.pvo_left_left_top_arrow_icon').rotate({ animateTo: angle, duration: 2000 });
    animateTextNumber(0, '.pvo_left_left_top_indicator_text', cur_value_pvo_left_left_top_metre, value);
    cur_value_pvo_left_left_top_metre = value;
}

function rotate_pvo_left_metre2_arrow(value) {
    var angle;
    angle = value * 243 / 210;
    $('.pvo_left_right_top_arrow_icon').rotate({ animateTo: angle, duration: 2000 });
    animateTextNumber(0, '.pvo_left_right_top_indicator_text', cur_value_pvo_right_left_metre, value);
    cur_value_pvo_right_left_metre = value;
}

function rotate_pvo_right_metre1_arrow(value) {
    var angle;
    angle = value * 243 / 200;
    $('.pvo_right_left_arrow_icon').rotate({ animateTo: angle, duration: 2000 });
    animateTextNumber(0, '.pvo_right_left_indicator_text', cur_value_pvo_left_right_top_metre, value);
    cur_value_pvo_left_right_top_metre = value;
}

function rotate_pvo_right_metre2_arrow(value) {
    var angle;
    angle = value * 243 / 40;
    $('.pvo_right_right_arrow_icon').rotate({ animateTo: angle, duration: 2000 });
    animateTextNumber(0, '.pvo_right_right_indicator_text', cur_value_pvo_right_right_metre, value);
    cur_value_pvo_right_right_metre = value;
}
//end

//valves metres arrow rotate function
function rotate_valves_metre_arrows(value, id) {
    var angle;
    angle = (value * 100) * 180 / 100;
    $('.valves_metre_part_' + id + '_metre_arrow_icon').rotate({ animateTo: angle, duration: 2000 });
    animateTextNumber(1, '.valves_metre_part_' + id + '_metre_indicator_text', cur_values_valves_metre[id], value);
    cur_values_valves_metre[id] = value;
}
//end
function set_pvo_timer() {
    var pressTimer;

    $('#click_and_hold').mouseup(function () {
        clearTimeout(pressTimer)
        // Clear timeout

        return false;
    }).mousedown(function () {
        // Set timeout
        pressTimer = window.setTimeout(function () {
            pvo_clickable = true;
            var audio = new Audio(soundPath + 'bleep_sound.mp3');
            audio.play();
        }, 1000)
        return false;
    });
}

function repaintRotor(type) {
    if (type == 0) {
        $(".rotor_slider_div").html("");
    } else {
        $(".rotor_slider_div").html("<div class=" + "rotor_slider" + "><img class=" + "rotor" + " src=" + imagePath + "rotor.svg" + "><img class=" + "rotor" + " src=" + imagePath + "rotor.svg" + "></div>");
        var rotor_slider = $('.rotor_slider').slick({
            accessibility: true,
            autoplay: true,
            autoplaySpeed: 0,
            pauseOnHover: false,
            fade: false,
            speed: 1500,
            arrows: false
        });
    }
}

//panels metres arrow rotate functions
function rotate_supervisor_panel_left_metre_arrow(value) {
    var angle;
    angle = value * 243 / 200;
    $('.panel_left_left_part1_metre_arrow_icon').rotate({ animateTo: angle, duration: 2000 });
    animateTextNumber(0, '.panel_left_left_part1_indicator_text', cur_value_panels_left_left_part1_metre, value);
    cur_value_panels_left_left_part1_metre = value;
}

function rotate_supervisor_panel_right_metre1_arrow(value) {
    var angle;
    angle = value * 243 / 200;
    $('.panel_left_right_part1_metre_arrow_icon').rotate({ animateTo: angle, duration: 2000 });
    animateTextNumber(0, '.panel_left_right_part1_indicator_text', cur_value_panels_left_right_part1_metre, value);
    cur_value_panels_left_right_part1_metre = value;
}

function rotate_supervisor_panel_right_metre2_arrow(value) {
    var angle;
    angle = (value * 100) * 180 / 100;
    $('.panel_left_right_part2_metre_arrow_icon').rotate({ animateTo: angle, duration: 2000 });
    animateTextNumber(1, '.panel_left_right_part2_indicator_text', cur_value_panels_left_right_part2_metre, value);
    cur_value_panels_left_right_part2_metre = value;
}
//end

function animateTextNumber(decimal_places, text_class_id, fromValue, toValue) {
    switch (decimal_places) {
        case 1:
        case 0:
            var decimal_factor = decimal_places === 0 ? 1 : decimal_places * 10;
            break;

        case 3:
            var decimal_factor = decimal_places === 1 ? 2 : decimal_places * 1000;
            break;
    }

    $(text_class_id)
    .prop('number', fromValue * decimal_factor)
    .animateNumber(
      {
          number: toValue * decimal_factor,
          numberStep: function (now, tween) {
              var floored_number = Math.floor(now) / decimal_factor,
                  target = $(tween.elem);
              if (decimal_places > 0) {
                  floored_number = floored_number.toFixed(decimal_places);
              }
              target.text(floored_number);
          }
      },
      1500
    );
}

// observer object class
var obs = {
    rotor_state: rotorIsOn,
    rpm: 0,
    spm: 0,
    init_MD: 0
}
//  constants object class
var constants = {
    gravity: 9.8,
    pops: 0,
    pops2: 0,
    An: 0,
    N_med: 0,
    K_med: 0,
    T170: 0,
    N_low: 0,
    K_low: 0,
    e: 2.71828
}

function draw_left_range(startAng, endAng) {
    var tx = $('#left_range').height() * 0.5026;
    var ty = $('#left_range').height() * 0.4833;
    var innerR = $('#left_range').width() * 0.4140;
    var outerR = $('#left_range').width() * 0.4753;

    var vis = d3.select("#left_range");
    vis.selectAll("*").remove();

    var arc = d3.svg.arc().innerRadius(innerR).outerRadius(outerR).startAngle((startAng * Math.PI / 75) + (-2 * Math.PI / 3)).endAngle((endAng * Math.PI / 75) + (-2 * Math.PI / 3));
    vis.append("path").attr("d", arc).attr("transform", "translate(" + tx + "," + ty + ")").attr("fill", "#009933");
}

function draw_right_range(startAng, endAng) {
    var tx_r = $('#right_range').height() * 0.5026;
    var ty_r = $('#right_range').height() * 0.4833;
    var innerR_r = $('#right_range').width() * 0.4145;
    var outerR_r = $('#right_range').width() * 0.4762;

    var vis_r = d3.select("#right_range");
    vis_r.selectAll("*").remove();

    var arc = d3.svg.arc().innerRadius(innerR_r).outerRadius(outerR_r).startAngle((startAng * Math.PI / 12)).endAngle((endAng * Math.PI / 12));
    vis_r.append("path").attr("d", arc).attr("transform", "translate(" + tx_r + "," + ty_r + ")").attr("fill", "#009933");
}

//rotor area metres arrow rotate functions
function rotate_rotor_area_left_arrow(value_percentage) {
    var angle;
    angle = value_percentage * 2.43;
    $('.left_arrow_icon').rotate({ animateTo: angle, duration: 2000 });
    animateTextNumber(1, '.left_indicator_text', cur_percentage_left, value_percentage);
    cur_percentage_left = value_percentage;
}

function rotate_rotor_area_right_arrow(value_volume) {
    var angle;
    if (value_volume <= 0) {
        angle = value_volume * 15.25;
    } else angle = value_volume * 14.875;
    $('.right_arrow_icon').rotate({ animateTo: angle, duration: 2000 });
    animateTextNumber(3, '.right_indicator_text', cur_volume_right, value_volume);
    cur_volume_right = value_volume;
}
//end

function drawSlider() {

    $('.slider_runner_div').draggable({
        axis: "x",
        containment: ".slider_track",
        drag: function () {
            var offset = $(this).offset();
            var xPos = offset.left;
            if (xPos >= slider_left_range && xPos <= slider_right_range) {
                slider_1_value = Math.round(((xPos - slider_left_range) / sliderFraction));
                obs.spm = slider_1_value;
                $('#pump_regulator_turning,.panel_left_left_pump_part2_regulator_turning').rotate((270 / 120) * Math.round((xPos - slider_left_range) / sliderFraction));
                $("#regulator_indicator_text,.panel_left_left_pump_part2_indicator_text").text(Math.round((xPos - slider_left_range) / sliderFraction));
                $(".slider_runner_tooltip_text").text(Math.round((xPos - slider_left_range) / sliderFraction));
            }
        }
    });

    $('.slider_runner_div').mouseup(function () {
        setTimeout(function () { calculate_pogpm_new() }, 2 * 1000);
    });
    $('.slider_runner_div_1').mouseup(function () {
        setTimeout(function () { calculate_pogpm_new() }, 2 * 1000);
    });
}


function drawSlider_1() {

    $('.slider_runner_div_1').draggable({
        axis: "x",
        containment: ".slider_track_1",
        drag: function () {
            var offset = $(this).offset();
            var xPos = offset.left;
            if (xPos >= slider_1_left_range && xPos <= slider_1_right_range) {
                slider_2_value = ((xPos - slider_1_left_range) / sliderFraction_1);
                $('#pump_regulator_turning_1,.panel_left_left_pump_part3_regulator_turning').rotate((270 / 120) * Math.round((xPos - slider_1_left_range) / sliderFraction_1));
                $("#regulator_indicator_text_1,.panel_left_left_pump_part3_indicator_text").text(Math.round((xPos - slider_1_left_range) / sliderFraction_1));
                $(".slider_runner_tooltip_text_1").text(Math.round((xPos - slider_1_left_range) / sliderFraction_1));
            }
        }
    });
}

// **** CHANGED FUNCTION
function drawSlider_2() {
    $('.slider_runner_div_2').draggable({
        axis: "x",
        containment: ".slider_track_2",
        drag: function () {
            var offset = $(this).offset();
            var xPos = offset.left;
            if (xPos >= slider_2_left_range && xPos <= slider_2_right_range) {
                slider_3_value = ((xPos - slider_2_left_range) / sliderFraction_2);
                $('#pump_regulator_turning_2').rotate((270 / 300) * Math.round((xPos - slider_2_left_range) / sliderFraction_2));
                $("#regulator_indicator_text_2").text(Math.round((xPos - slider_2_left_range) / sliderFraction_2));
                obs.rpm = parseFloat($("#regulator_indicator_text_2").html());
                $(".slider_runner_tooltip_text_2").text(Math.round((xPos - slider_2_left_range) / sliderFraction_2));
            }
        }
    });
    $('.slider_runner_div_2').mouseup(function () {
        setTimeout(function () {
            var rpm = $('#regulator_indicator_text_2').html();
            console.log("rpm: " + rpm);
            if (obs.rpm != 0) { // rotor is On, rpm changed
                calc_Nx1();
                calc_Mvs();
            }
            if (obs.rpm == 0) {
                s.Nx1 = 0; // rotor is off
            }
        }, 2 * 1000);
    });
}

//panels
function drawSlider_3() {

    $('.slider_runner_div_3').draggable({
        axis: "x",
        containment: ".slider_track_3",
        drag: function () {
            var offset = $(this).offset();
            var xPos = offset.left;
            if (xPos >= slider_3_left_range && xPos <= slider_3_right_range) {
                slider_4_value = ((xPos - slider_3_left_range) / sliderFraction_3);
                $('.panel_left_right_pump_part3_regulator_turning').rotate((270 / 30) * Math.round((xPos - slider_3_left_range) / sliderFraction_3));
            }
        }
    });
}
//end

function cache_lever_images() {
    for (i = 1; i <= 24; i++) {
        lever_images[i] = new Image();
        lever_images[i].src = imagePath + "lever_images/lever_" + (parseInt(i, 10)) + ".png";
    }
}

function repaint_window(onOff) {
    var width = $(window).width();
    var height = $(window).height();


    $('body').css('font-size', (width * 18) / 1920);

    if (onOff == 'on' || onOff == 'ready') {
        if ((width / height) <= (16 / 9)) {
            $(".container").width(width).height(width / (16 / 9));
        } else $(".container").width(height * (16 / 9)).height(height);
    } else {
        if ((width / fullscreen_off_height) <= (16 / 9)) {
            $(".container").width(width).height(width / (16 / 9));
        } else $(".container").width(fullscreen_off_height * (16 / 9)).height(fullscreen_off_height);
    }

    content_width = $(".container").width();

    var brake_fraction = ($('.brake_back').height() - $('.lever_head').height()) / 13;
    var down_range = ($('.brake_back').position().top + $('.brake_back').height()) - $('.lever_head').height();
    var up_range = $('.brake_back').position().top;

    if (onOff == 'on' || onOff == 'off') {
        if (lever_head_level_fullscreen_on_off == 1) {
            $('.lever_head').css('top', ((down_range) + (down_range - 0.5 * brake_fraction)) / 2);
        } else if (lever_head_level_fullscreen_on_off == 2) {
            $('.lever_head').css('top', ((down_range - 0.5 * brake_fraction) + (down_range - brake_fraction)) / 2);
        } else if (lever_head_level_fullscreen_on_off == 3) {
            $('.lever_head').css('top', ((down_range - brake_fraction) + (down_range - 1.5 * brake_fraction)) / 2);
        } else if (lever_head_level_fullscreen_on_off == 4) {
            $('.lever_head').css('top', ((down_range - 1.5 * brake_fraction) + (down_range - 2 * brake_fraction)) / 2);
        } else if (lever_head_level_fullscreen_on_off == 5) {
            $('.lever_head').css('top', ((down_range - 2 * brake_fraction) + (down_range - 2.5 * brake_fraction)) / 2);
        } else if (lever_head_level_fullscreen_on_off == 6) {
            $('.lever_head').css('top', ((down_range - 2.5 * brake_fraction) + (down_range - 3 * brake_fraction)) / 2);
        } else if (lever_head_level_fullscreen_on_off == 7) {
            $('.lever_head').css('top', ((down_range - 3 * brake_fraction) + (down_range - 3.5 * brake_fraction)) / 2);
        } else if (lever_head_level_fullscreen_on_off == 8) {
            $('.lever_head').css('top', ((down_range - 3.5 * brake_fraction) + (down_range - 4 * brake_fraction)) / 2);
        } else if (lever_head_level_fullscreen_on_off == 9) {
            $('.lever_head').css('top', ((down_range - 4 * brake_fraction) + (down_range - 4.5 * brake_fraction)) / 2);
        } else if (lever_head_level_fullscreen_on_off == 10) {
            $('.lever_head').css('top', ((down_range - 4.5 * brake_fraction) + (down_range - 5 * brake_fraction)) / 2);
        } else if (lever_head_level_fullscreen_on_off == 11) {
            $('.lever_head').css('top', ((down_range - 5 * brake_fraction) + (down_range - 5.5 * brake_fraction)) / 2);
        } else if (lever_head_level_fullscreen_on_off == 12) {
            $('.lever_head').css('top', ((down_range - 5.5 * brake_fraction) + (down_range - 6 * brake_fraction)) / 2);
        } else if (lever_head_level_fullscreen_on_off == 13) {
            $('.lever_head').css('top', ((down_range - 6 * brake_fraction) + (down_range - 7 * brake_fraction)) / 2);
        } else if (lever_head_level_fullscreen_on_off == 14) {
            $('.lever_head').css('top', ((down_range - 7 * brake_fraction) + (down_range - 8 * brake_fraction)) / 2);
        } else if (lever_head_level_fullscreen_on_off == 15) {
            $('.lever_head').css('top', ((down_range - 8 * brake_fraction) + (down_range - 8.5 * brake_fraction)) / 2);
        } else if (lever_head_level_fullscreen_on_off == 16) {
            $('.lever_head').css('top', ((down_range - 8.5 * brake_fraction) + (down_range - 9 * brake_fraction)) / 2);
        } else if (lever_head_level_fullscreen_on_off == 17) {
            $('.lever_head').css('top', ((down_range - 9 * brake_fraction) + (down_range - 9.5 * brake_fraction)) / 2);
        } else if (lever_head_level_fullscreen_on_off == 18) {
            $('.lever_head').css('top', ((down_range - 9.5 * brake_fraction) + (down_range - 10 * brake_fraction)) / 2);
        } else if (lever_head_level_fullscreen_on_off == 19) {
            $('.lever_head').css('top', ((down_range - 10 * brake_fraction) + (down_range - 10.5 * brake_fraction)) / 2);
        } else if (lever_head_level_fullscreen_on_off == 20) {
            $('.lever_head').css('top', ((down_range - 10.5 * brake_fraction) + (down_range - 11 * brake_fraction)) / 2);
        } else if (lever_head_level_fullscreen_on_off == 21) {
            $('.lever_head').css('top', ((down_range - 11 * brake_fraction) + (down_range - 11.5 * brake_fraction)) / 2);
        } else if (lever_head_level_fullscreen_on_off == 22) {
            $('.lever_head').css('top', ((down_range - 11.5 * brake_fraction) + (down_range - 12 * brake_fraction)) / 2);
        } else if (lever_head_level_fullscreen_on_off == 23) {
            $('.lever_head').css('top', ((down_range - 12 * brake_fraction) + (down_range - 12.5 * brake_fraction)) / 2);
        } else if (lever_head_level_fullscreen_on_off == 24) {
            $('.lever_head').css('top', ((down_range - 12.5 * brake_fraction) + (down_range - 13 * brake_fraction)) / 2);
        }
    }

    $('.lever_head').on('mousedown', function (e) {
        e.preventDefault();
        lever_head_dragging = true;
    });

    $(document).on('mousemove', function (me) {
        if (lever_head_dragging == true) {
            if ($('.lever_head').position().top <= down_range + 10 && $('.lever_head').position().top >= (down_range - brake_fraction / 2)) {
                $('img[class="lever"]').attr({ src: lever_images[1].src });
                lever_head_level_fullscreen_on_off = 1;
            }

            if ($('.lever_head').position().top <= (down_range - brake_fraction / 2) && $('.lever_head').position().top >= (down_range - brake_fraction)) {
                $('img[class="lever"]').attr({ src: lever_images[2].src });
                lever_head_level_fullscreen_on_off = 2;
            }

            if ($('.lever_head').position().top < (down_range - brake_fraction) && $('.lever_head').position().top >= (down_range - 1.5 * brake_fraction)) {
                $('img[class="lever"]').attr({ src: lever_images[3].src });
                lever_head_level_fullscreen_on_off = 3;
            }

            if ($('.lever_head').position().top < (down_range - 1.5 * brake_fraction) && $('.lever_head').position().top >= (down_range - 2 * brake_fraction)) {
                $('img[class="lever"]').attr({ src: lever_images[4].src });
                lever_head_level_fullscreen_on_off = 4;
            }

            if ($('.lever_head').position().top < (down_range - 2 * brake_fraction) && $('.lever_head').position().top >= (down_range - 2.5 * brake_fraction)) {
                $('img[class="lever"]').attr({ src: lever_images[5].src });
                lever_head_level_fullscreen_on_off = 5;
            }

            if ($('.lever_head').position().top < (down_range - 2.5 * brake_fraction) && $('.lever_head').position().top >= (down_range - 3 * brake_fraction)) {
                $('img[class="lever"]').attr({ src: lever_images[6].src });
                lever_head_level_fullscreen_on_off = 6;
            }

            if ($('.lever_head').position().top < (down_range - 3 * brake_fraction) && $('.lever_head').position().top >= (down_range - 3.5 * brake_fraction)) {
                $('img[class="lever"]').attr({ src: lever_images[7].src });
                lever_head_level_fullscreen_on_off = 7;
            }

            if ($('.lever_head').position().top < (down_range - 3.5 * brake_fraction) && $('.lever_head').position().top >= (down_range - 4 * brake_fraction)) {
                $('img[class="lever"]').attr({ src: lever_images[8].src });
                lever_head_level_fullscreen_on_off = 8;
            }

            if ($('.lever_head').position().top < (down_range - 4 * brake_fraction) && $('.lever_head').position().top >= (down_range - 4.5 * brake_fraction)) {
                $('img[class="lever"]').attr({ src: lever_images[9].src });
                lever_head_level_fullscreen_on_off = 9;
            }

            if ($('.lever_head').position().top < (down_range - 4.5 * brake_fraction) && $('.lever_head').position().top >= (down_range - 5 * brake_fraction)) {
                $('img[class="lever"]').attr({ src: lever_images[10].src });
                lever_head_level_fullscreen_on_off = 10;
            }

            if ($('.lever_head').position().top < (down_range - 5 * brake_fraction) && $('.lever_head').position().top >= (down_range - 5.5 * brake_fraction)) {
                $('img[class="lever"]').attr({ src: lever_images[11].src });
                lever_head_level_fullscreen_on_off = 11;
            }

            if ($('.lever_head').position().top < (down_range - 5.5 * brake_fraction) && $('.lever_head').position().top >= (down_range - 6 * brake_fraction)) {
                $('img[class="lever"]').attr({ src: lever_images[12].src });
                lever_head_level_fullscreen_on_off = 12;
            }

            if ($('.lever_head').position().top < (down_range - 6 * brake_fraction) && $('.lever_head').position().top >= (down_range - 7 * brake_fraction)) {
                $('img[class="lever"]').attr({ src: lever_images[13].src });
                lever_head_level_fullscreen_on_off = 13;
            }

            if ($('.lever_head').position().top < (down_range - 7 * brake_fraction) && $('.lever_head').position().top >= (down_range - 8 * brake_fraction)) {
                $('img[class="lever"]').attr({ src: lever_images[14].src });
                lever_head_level_fullscreen_on_off = 14;
            }

            if ($('.lever_head').position().top < (down_range - 8 * brake_fraction) && $('.lever_head').position().top >= (down_range - 8.5 * brake_fraction)) {
                $('img[class="lever"]').attr({ src: lever_images[15].src });
                lever_head_level_fullscreen_on_off = 15;
            }

            if ($('.lever_head').position().top < (down_range - 8.5 * brake_fraction) && $('.lever_head').position().top >= (down_range - 9 * brake_fraction)) {
                $('img[class="lever"]').attr({ src: lever_images[16].src });
                lever_head_level_fullscreen_on_off = 16;
            }

            if ($('.lever_head').position().top < (down_range - 9 * brake_fraction) && $('.lever_head').position().top >= (down_range - 9.5 * brake_fraction)) {
                $('img[class="lever"]').attr({ src: lever_images[17].src });
                lever_head_level_fullscreen_on_off = 17;
            }

            if ($('.lever_head').position().top < (down_range - 9.5 * brake_fraction) && $('.lever_head').position().top >= (down_range - 10 * brake_fraction)) {
                $('img[class="lever"]').attr({ src: lever_images[18].src });
                lever_head_level_fullscreen_on_off = 18;
            }

            if ($('.lever_head').position().top < (down_range - 10 * brake_fraction) && $('.lever_head').position().top >= (down_range - 10.5 * brake_fraction)) {
                $('img[class="lever"]').attr({ src: lever_images[19].src });
                lever_head_level_fullscreen_on_off = 19;
            }

            if ($('.lever_head').position().top < (down_range - 10.5 * brake_fraction) && $('.lever_head').position().top >= (down_range - 11 * brake_fraction)) {
                $('img[class="lever"]').attr({ src: lever_images[20].src });
                lever_head_level_fullscreen_on_off = 20;
            }

            if ($('.lever_head').position().top < (down_range - 11 * brake_fraction) && $('.lever_head').position().top >= (down_range - 11.5 * brake_fraction)) {
                $('img[class="lever"]').attr({ src: lever_images[21].src });
                lever_head_level_fullscreen_on_off = 21;
            }

            if ($('.lever_head').position().top < (down_range - 11.5 * brake_fraction) && $('.lever_head').position().top >= (down_range - 12 * brake_fraction)) {
                $('img[class="lever"]').attr({ src: lever_images[22].src });
                lever_head_level_fullscreen_on_off = 22;
            }

            if ($('.lever_head').position().top < (down_range - 12 * brake_fraction) && $('.lever_head').position().top >= (down_range - 12.5 * brake_fraction)) {
                $('img[class="lever"]').attr({ src: lever_images[23].src });
                lever_head_level_fullscreen_on_off = 23;
            }

            if ($('.lever_head').position().top < (down_range - 12.5 * brake_fraction) && $('.lever_head').position().top >= (down_range - 13 * brake_fraction)) {
                $('img[class="lever"]').attr({ src: lever_images[24].src });
                lever_head_level_fullscreen_on_off = 24;
            }
        }
    });

    draw_left_range($('#left_up_range_text').text(), $('#left_down_range_text').text());
    draw_right_range($('#right_up_range_text').text(), $('#right_down_range_text').text());

    $(".slider_regulator").css("display", "block");
    slider_left_range = $('.slider_track').offset().left;
    sliderFraction = ($('.slider_track').width() - $('.slider_runner_div').width()) / 120;
    slider_right_range = $('.slider_track').offset().left + $('.slider_track').width() - $('.slider_runner_div').width();
    $('.slider_runner_div').css("left", sliderFraction * slider_1_value);
    $(".slider_regulator").css("display", "none");

    $(".slider_regulator_1").css("display", "block");
    slider_1_left_range = $('.slider_track_1').offset().left;
    sliderFraction_1 = ($('.slider_track_1').width() - $('.slider_runner_div_1').width()) / 120;
    slider_1_right_range = $('.slider_track_1').offset().left + $('.slider_track_1').width() - $('.slider_runner_div_1').width();
    $('.slider_runner_div_1').css("left", sliderFraction_1 * slider_2_value);
    $(".slider_regulator_1").css("display", "none");

    $(".slider_regulator_2").css("display", "block");
    slider_2_left_range = $('.slider_track_2').offset().left;
    sliderFraction_2 = ($('.slider_track_2').width() - $('.slider_runner_div_2').width()) / 300;
    slider_2_right_range = $('.slider_track_2').offset().left + $('.slider_track_2').width() - $('.slider_runner_div_2').width();
    $('.slider_runner_div_2').css("left", sliderFraction_2 * slider_3_value);
    $(".slider_regulator_2").css("display", "none");

    //panels
    $(".supervisor_panel,.slider_regulator_3").css("display", "block");
    slider_3_left_range = $('.slider_track_3').offset().left;
    sliderFraction_3 = ($('.slider_track_3').width() - $('.slider_runner_div_3').width()) / 30;
    slider_3_right_range = $('.slider_track_3').offset().left + $('.slider_track_3').width() - $('.slider_runner_div_3').width();
    $('.slider_runner_div_3').css("left", sliderFraction_3 * slider_4_value);
    //end

    $(".slider_regulator_3").css("display", "none");
    if (current_menu_id != 3) $(".slider_regulator_3,.supervisor_panel").css("display", "none");
}

//slugging
function change_slugging_level_of_auqa_in_pipe(value) {
    $('.slugging_level_if_aqua_in_pipe_left_div').css("height", "" + value + "%");
    $('.slugging_level_if_aqua_in_pipe_left_text').text(value + "%");
}

function change_slugging_level_of_auqa_in_reservoir(value) {
    $('.slugging_level_of_aqua_in_reservoir_div,#pumps_level_of_aqua_in_reservoir_text').css("height", "" + value + "%");
    var rotor_aqua_level_in_reservior_ranges_top = 84 - value * 0.08;
    var pumps_aqua_level_in_reservior_ranges_top = 88.5 - value * 0.16;
    $('.rotor_aqua_level_in_reservior_ranges').css("top", "" + rotor_aqua_level_in_reservior_ranges_top + "%");
    $('.pumps_aqua_level_in_reservior_ranges').css("top", "" + pumps_aqua_level_in_reservior_ranges_top + "%");
    $('.slugging_level_of_aqua_in_reservoir_text,#pumps_level_of_aqua_in_reservoir_text').text(value + "%");
}
//end



$(document).click(function (event) {
    if (event.target !== $('#pump_regulator_turning')[0] && event.target !== $('.slider_regulator')[0] && event.target !== $('.slider_track')[0]
        && event.target !== $('.slider_runner_div')[0] && event.target !== $('.slider_runner')[0] && event.target !== $('.slider_runner_popup')[0])
        if (isSlider_1_active == 1) {
            $(".slider_regulator").css("display", "none");
            isSlider_1_active = 0;
        }

    if (event.target !== $('#pump_regulator_turning_1')[0] && event.target !== $('.slider_regulator_1')[0] && event.target !== $('.slider_track_1')[0]
        && event.target !== $('.slider_runner_div_1')[0] && event.target !== $('.slider_runner_1')[0] && event.target !== $('.slider_runner_popup')[0])
        if (isSlider_2_active == 1) {
            $(".slider_regulator_1").css("display", "none");
            isSlider_2_active = 0;
        }

    if (event.target !== $('#pump_regulator_turning_2')[0] && event.target !== $('.slider_regulator_2')[0] && event.target !== $('.slider_track_2')[0]
        && event.target !== $('.slider_runner_div_2')[0] && event.target !== $('.slider_runner_2')[0] && event.target !== $('.slider_runner_popup')[0])
        if (isSlider_3_active == 1) {
            $(".slider_regulator_2").css("display", "none");
            isSlider_3_active = 0;
        }

    //panels
    if (event.target !== $('.panel_left_right_pump_part3_regulator_turning')[0] && event.target !== $('.slider_regulator_3')[0] && event.target !== $('.slider_track_3')[0]
        && event.target !== $('.slider_runner_div_3')[0] && event.target !== $('.slider_runner_3')[0])
        $(".slider_regulator_3").css("display", "none");
    //end 
    if (event.target !== $('.pumps_aqua_level_in_reservior')[0] && event.target !== $('.pumps_aqua_level_in_reservior_ranges')[0]
            && event.target !== $('#pumps_level_of_aqua_in_reservoir_text')[0] && event.target !== $('.pumps_aqua_features')[0] && event.target !== $('.pumps_aqua_features_down')[0] && event.target !== $('.pumps_aqua_features_up')[0]
            && event.target.id !== 'pumps_part_text' && event.target.id !== 'pumps_part_indicator_input' && event.target.id !== 'part_indicator_input'
            && event.target.id !== 'pumps_part_unit' && event.target.id !== 'pumps_aqua_utilization_text') {
        $(".pumps_aqua_features").css("display", "none");
        $('.pumps_elements,.pumps_background').css("opacity", 1);
        $('.pumps_elements').css("pointer-events", "auto");
        $('.pumps_fil1-reservior').css("fill", "#B3B3B3");
    }
});


// Socket shared js functions 17 June

function updateBitPos(val) {
    $('#panel_right_part_indicator_text_7').text(val.toFixed(3).replace(".", ","));
}

/**
 * Helper function to output a value in the console. Value will be formatted.
 * @param {*} value
 */
function print(value) {
    var precision = 14;
    console.log(math.format(value, precision));
}

function print_color(valname, val) {
    console.log("%cBeauty val: " + valname + " " + val, "background: yellow, color: red");
}

function do_preliminary() {
    // MD to foots
    if (s != null) {
        $('#right_up_part_indicator_text1').html((s.MD).toFixed(3).replace(".", ","));
        // set to init val
        // setting long click to pvo_apply
        calc_pitrange();
        set_pvo_timer();
        rotate_pvo_left_metre1_arrow(s.APMPi);
        // in case move_up, move_down not called even once, calc dplen before calculating pogpm
        calc_dplen();
        // shitaem faktor plavuchesti and pervonachalniy ves na kruke bez dinamiki
        calc_bf();
        calc_shl();
        // calc moshnost' holostogo vrasheniya if rotor is on

        // predvaritelnie vi4isleniya dlya davleniy na stoyake, dplen poshitano
        set_init();
        do_precalculations();
        rotate_pvo_left_metre2_arrow(s.MPi);
    }
}

// drill math
function set_init() {
    s.init_MD = s.MD;
    var init_bitpos = s.BitPos;
    $("#right_up_part_indicator_text2").html((init_bitpos + "").replace(".", ","));
    $("#slugging_right_content_part_4_indicator_text").html((init_bitpos + "").replace(".", ","));
    // set supervisor indicator to init bitpos value as well
}

// faktor plavu4esti
function calc_bf() {
    s.BF = (65.5 - s.MW) / 65.5;
}

// dp.len zavisit ot bitpos, to est' kogda opuskaem trubu bitpos += 0.1, recalculate(dp.len), if dp len val changed calculate calc_shl
function calc_dplen() {
    s.DpLength = s.BitPos - s.DC_len - s.HWDP_len;
}

function calc_shl() {
    s.SHL = (s.TrBlockW + s.KellyW + (s.DpWeight * s.DpLength + s.HWDP_weight * s.HWDP_len + s.DC_weight * s.DC_len) / 2204.62) * s.BF;
    console.log(s.SHL);
    console.log(s.KellyW);
    $("#part_indicator_text2").html((s.SHL.toFixed(3) + "").replace(".", ","));
}

function calc_Nx1() {
    var rpm = $('#regulator_indicator_text_2').html();
    s.Nx1 = 13.5 * Math.pow(10, -8) * s.MD * Math.pow(s.DPOD * 0.0254, 2) * Math.pow(obs.rpm, 1.5) * Math.pow(s.DPID * 0.0254, 0.5) * s.MWkm3 * gravity;
}

// Moment sil soprotivleniya vrasheniyu burilnoy kolonni na vertikalnom
function calc_Mvs() {
    var rpm = $('#regulator_indicator_text_2').html();
    s.Mvs = s.Nx1 * 1 / 2 * obs.rpm * Math.PI;
}

function getqCh() {
    //some Formulas
    return 2;
}

function normalize(val) {
    return val.replace(/ /g, '');
}

function getKHID() {
    return 4;
}

function print_krasivo(name, val) {
    console.log("%c" + name + " : " + val, "background:yellow; color:red; font-size:16px;");
}

function tk2_calculations() {
    var scope = null;
    if (tk2_sec == 1) {
        Toinf = s.MD - hinf;
        prev_tk2_hinf = hinf;
        prev_tk2_qicum = qicum;
        prev_tk2_SIDPP = SIDPP;
    } else {
        Toinf = Boinf - prev_tk2_hinf;
        var cur_qCh = getqCh();
        scope = { pSIDPP: prev_tk2_SIDPP, TaV: aV, qCh: cur_qCh, POgpm: s.POgpm };
        SIDPP = math.eval("pSIDPP*(TaV/(TaV+qCh-POgpm/60))", scope);
        //
        scope = { SIDPP: SIDPP, Toinf: Toinf, MW: s.MW, phinf: prev_tk2_hinf, MWgas: 2, Boinf: Boinf };
        SICP = math.eval("SIDPP-Toinf*MW*0.052-phinf*MWgas*0.052+Boinf*MW*0.052", scope);
        set_dpp_display_value(SICP);
        console.log("SICP: " + SICP);
        scope = { pqicum: prev_tk2_qicum, FP: FP, MW: s.MW, Toinf: Toinf, SICP: SICP };
        qicum = math.eval("pqicum*FP/(MW*Toinf*0.052+SICP)", scope);
        if (qicum + s.CumMV2 < s.DCaV) {
            scope = { qicum: qicum, CumMV2: s.CumMV2, DCAcap: s.DCAcap, MD: s.MD, Boinf: Boinf };
            hinf = math.eval("(qicum+CumMV2)/DCAcap-(MD-Boinf)", scope);
        } else if (qicum + s.CumMV2 > s.DCaV && qicum + s.CumMV2 < s.HWDPaV) { //If (qicumcur+CumMV2) > DCaV and (qicumcur+CumMV2)< HWDPaV then
            scope = { DC_len: s.DC_len, qicum: qicum, CumMV2: s.CumMV2, DCaV: s.DCaV, HWDPAccap: s.HWDPAccap, MD: s.MD, Boinf: Boinf };
            hinf = math.eval("DC_len+(qicum+CumMV2-DCaV)/HWDPAccap-(MD-Boinf)", scope);
        } else if (qicum + s.CumMV2 > (s.DCaV + s.HWDPaV) && qicum + s.CumMV2 < s.DCaV) {
            scope = { DC_len: s.DC_len, HWDP_len: s.HWDP_len, qicumcur: qicum, CumMV2: s.CumMV2, DCaV: s.DCaV, HWDPaV: s.HWDPaV, DPAccap: s.DPAccap, MD: s.MD, Boinf: Boinf };
            hinf = math.eval("DC_len+HWDP_len+(qicumcur+CumMV2-DCaV-HWDPaV)/DPAccap-(MD-Boinf)", scope);
        }
        s.BHPd = SIDPP + s.MW * s.MD * 0.052;
        scope = { SICPcur: SICP, MW: s.MW, MD: s.MD, hinf: hinf, MWgas: 2 };
        s.BHPd = math.eval("SICPcur+MW*(MD-hinf)*0.052+MWgas*hinf*0.052", scope);
        console.log("tk2_timer Boinf val and BHPD: " + Boinf + " " + s.BHPd);
        console.log("Toinf and hinf and SICP: " + Toinf + " " + hinf + " " + SICP);
        prev_tk2_hinf = hinf;
        prev_tk2_qicum = qicum;
        prev_tk2_SIDPP = SIDPP;
    }

    // circulate out with kill mud
    scope = { MW: s.MW, POgpm: s.POgpm, PV: s.PV }
    s.Ki1 = math.eval("0.000077*MW^0.8*POgpm^1.8*PV^0.2", scope);
    scope = { MW2: s.MW, POgpm: s.POgpm, PV: s.PV };
    s.Ki2 = math.eval("0.000077*MW2^0.8*POgpm^1.8*PV^0.2", scope);

    var zahodi = true;
    if (s.CumMV2 < s.SLV) {
        console.log("%cs.CumMV2 < s.SLV", "background: red, color: yellow, font-size: 16px;");
        scope = { MW: s.MW, POgpm: s.POgpm, PV: s.PV }
        s.Ki1 = math.eval("0.000077*MW^0.8*POgpm^1.8*PV^0.2", scope);
        scope = { MW2: prevMW, POgpm: s.POgpm, PV: s.PV };
        s.Ki2 = math.eval("0.000077*MW2^0.8*POgpm^1.8*PV^0.2", scope);
        console.log("%cIn tk2 calculations", "background: yellow, font: red");
        console.log("IMPORTANT: " + s.Ki1 + " " + s.Ki2 + " " + getKHID() + " " + s.CumMV2 + " " + getKHL());
        scope = { Ki1: s.Ki1, Ki2: s.Ki2, KHID: getKHID(), CumMV2: s.CumMV2, KHL: getKHL() };
        s.SPL = math.eval(normalize("Ki2/(KHID^4.8)*CumMV2/(KHID^2/24.51)+Ki1/(KHID^4.8)*(KHL-CumMV2/(KHID^2/24.51))"), scope);
        console.log("%cSPL VALUE: " + s.SPL);
    } else if (s.CumMV2 >= s.SLV && s.CumMV2 < (s.DPV + s.SLV)) {
        scope = { Ki2: s.Ki2, KHID: getKHID(), KHL: getKHL() };
        s.SPL = math.eval("Ki2/(KHID^4.8)*KHL", scope);
        s.hmv2 = s.CumMV2 / s.DPAccap;
        scope = { MW: s.MW, POgpm: s.POgpm, PV: s.PV }
        s.Ki1 = math.eval("0.000077*MW^0.8*POgpm^1.8*PV^0.2", scope);
        scope = { MW2: s.MW, POgpm: s.POgpm, PV: s.PV };
        s.Ki2 = math.eval("0.000077*MW2^0.8*POgpm^1.8*PV^0.2", scope);
        scope = { Ki1: s.Ki1, Ki2: s.Ki2, DPID: s.DPID, DpLength: s.DpLength, hmv2: s.hmv2 };
        s.DPiPL = math.eval("(Ki1/(DPID^4.8)*(DpLength-hmv2)*0.92)+(Ki1/(DPID^4.8)*(DpLength-hmv2)*0.08)+(Ki2/(DPID^4.8)*hmv2*0.92)+(Ki2/(DPID^4.8)*hmv2*0.08)", scope);
    } else if (s.CumMV2 > (s.DPV + s.SLV) && s.CumMV2 < (s.DPV + s.HWDPV + s.SLV)) {
        console.log("%cs.CumMV2 > (s.DPV + s.SLV) && s.CumMV2 < (s.DPV + s.HWDPV + s.SLV)", "background: red, color: yellow, font-size: 16px;");
        scope = { DpLength: s.DpLength, CumMV2: s.CumMV2, DPV: s.DPV, SLV: s.SLV, HWDPAccap: s.HWDPAccap };
        s.hmv2 = math.eval("DpLength+(CumMV2-DPV-SLV)/HWDPAccap", scope);
        scope = { Ki2: s.Ki2, DPID: s.DPID, DpLength: s.DpLength, DpLength: s.DpLength };
        s.DPiPL = math.eval("(Ki2/(DPID^4.8)*DpLength*0.92)+(Ki2/(DPID^4.8)*DpLength*0.08)", scope);
        scope = { Ki1: s.Ki1, HWDPID: s.HWDPID, DpLength: s.DpLength, HWDP_len: s.HWDP_len, hmv2: s.hmv2, Ki2: s.Ki2 };
        s.HWDPiPL = math.eval("(Ki1/(HWDPID^4.8)*(DpLength+HWDP_len-hmv2)*0.87)+(Ki1/(HWDPID^4.8)*(DpLength+HWDP_len-hmv2)*0.13)+(Ki2/(HWDPID^4.8)*(hmv2-DpLength)*0.87)+(Ki2/(HWDPID^4.8)*(hmv2-DpLength)*0.13)", scope);
    } else if (s.CumMV2 > (s.DPV + s.HWDPV + s.SLV) && s.CumMV2 < (s.DPV + s.HWDPV + s.DCV + s.SLV)) {
        console.log("%cs.CumMV2 > (s.DPV + s.HWDPV + s.SLV) && s.CumMV2 < (s.DPV + s.HWDPV + s.DCV + s.SLV)", "background: red, color: yellow, font-size: 16px;");
        scope = { DpLength: s.DpLength, HWDP_len: s.HWDP_len, CumMV2: s.CumMV2, DPV: s.DPV, HWDPV: s.HWDPV, SLV: s.SLV, DCcap: s.DCcap };
        s.hmv2 = math.eval("DpLength+HWDP_len+(CumMV2-DPV-HWDPV-SLV)/DCcap", scope);
        scope = { Ki2: s.Ki2, HWDPID: s.HWDPID, HWDP_len: s.HWDP_len, Ki2: s.Ki2, HWDP_len: s.HWDP_len };
        s.HWDPiPL = math.eval("(Ki2/(HWDPID^4.8)*HWDP_len*0.87)+(Ki2/(HWDPID^4.8)*HWDP_len*0.13)", scope);
        scope = { Ki1: s.Ki1, DCID: s.DCID, DpLength: s.DpLength, HWDP_len: s.HWDP_len, DC_len: s.DC_len, Ki2: s.Ki2, DCID: s.DCID, hmv2: s.hmv2 };
        s.DCiPL = math.eval("(Ki1/(DCID^4.8)*( DpLength+HWDP_len +DC_len-hmv2)) + (Ki2/(DCID^4.8)*( hmv2 -DpLength+HWDP_len))", scope);
    } else if (s.CumMV2 > (s.DPV + s.HWDPV + s.DCV + s.SLV)) {
        console.log("%cs.CumMV2 > (s.DPV + s.HWDPV + s.DCV + s.SLV)", "background: red, color: yellow, font-size: 16px;");
        s.hmv2 = s.DpLength + s.HWDP_len + s.DC_len;
        scope = { Ki2: s.Ki2, DCID: s.DCID, DC_len: s.DC_len };
        s.DCiPL = math.eval("(Ki2/(DCID^4.8)*DC_len)", scope);
        scope = { Vn: s.Vn, MW2: s.MW };
        s.BPL = math.eval("Vn^2*MW2/1120", scope);
        s.DSiPL = s.DPiPL + s.HWDPiPL + s.DCiPL;
        scope = { FP: FP, hmv2: s.hmv2, MW2: s.MW, MD: s.MD };
        SIDPP = math.eval("FP-hmv2*0.052*MW2-(MD-hmv2)*MW*0.052", scope);
        DPP = SIDPP + s.SPL + s.APL + s.DSiPL + s.BPL;
        set_dpp_display_value(DPP);
    } else if (s.CumMV2 > (s.DSV + s.SLV) && s.CumMV2 <= (s.DSV + s.SLV + s.DCaV)) {
        console.log("%cCalculating hmva2 val: " + s.hmva2, "color: red; font-size: 16px; background: yellow;");
        scope = { CumMV2: s.CumMV2, DSV: s.DSV, SLV: s.SLV, DCAcap: s.DCAcap };
        s.hmva2 = math.eval("(CumMV2-DSV-SLV)/DCAcap", scope);
    } else if (s.CumMV2 > (s.DSV + s.SLV + s.DCaV) && s.CumMV2 <= s.DSV + s.SLV + s.DCaV + s.HWDPaV) {
        scope = { DC_len: s.DC_len, CumMV2: s.CumMV2, DSV: s.DSV, DCaV: s.DCaV, SLV: s.SLV, HWDPAccap: s.HWDPAccap };
        s.hmva2 = math.eval("DC_len+(CumMV2-DSV-DCaV-SLV)/HWDPAccap", scope);
    } else if (s.CumMV2 > (s.DSV + s.DCaV + s.HWDPaV) && s.CumMV2 <= (s.DSV + s.SLV + s.DCaV + s.HWDPaV + s.DPaoV)) {
        scope = { DC_len: s.DC_len, HWDP_len: s.HWDP_len, CumMV2: s.CumMV2, DSV: s.DSV, DCaV: s.DCaV, HWDPaV: s.HWDPaV, DPAocap: s.DPAocap };
        s.hmva2 = math.eval("DC_len + HWDP_len + (CumMV2-DSV-DCaV-HWDPaV)/DPAocap", scope);
    } else if (s.CumMV2 > s.DSV + s.DCaV + s.HWDPaV + s.DPaoV && s.CumMV2 < (s.DSV + s.SLV + s.DCaV + s.HWDPaV + s.DPaoV + s.DPacV)) {
        scope = { MD: s.MD, CassetMD: s.CassetMD, CumMV2: s.CumMV2, DSV: s.DSV, DCaV: s.DCaV, HWDPaV: s.HWDPaV, DPaoV: s.DPaoV, DPAocap: s.DPAocap };
        s.hmva2 = math.eval("MD-CassetMD+(CumMV2-DSV-DCaV-HWDPaV+DPaoV)/DPAocap", scope);
    } else if (s.CumMV2 >= (s.DSV + s.SLV + s.DCaV + s.HWDPaV + s.DPaoV + s.DPacV)) {
        s.hmva2 = s.MD;
    }
    var a = (s.DSV + s.SLV); var b = (s.DSV + s.SLV + s.DCaV);
    console.log("%cCummv2: a and b: " + s.CumMV2 + " " + a + " " + b, "color: blue; background:yellow; font-size:18px;");
    console.log("%cHmva2: " + s.hmva2, "color: blue; background:yellow; font-size:18px;");

    /* WELL killing second part */
    if (s.hmva2 > 0 && s.hmva2 < s.DC_len) {
        scope = { Dwell: s.Dwell, DCOD: s.DCOD, Nmadc: s.Nmadc, Vadc: s.Vadc, MW: s.MW, Kmadc: s.Kmadc, Nmadc: s.Nmadc };
        s.Zadc = math.eval("(((Dwell-DCOD)^Nmadc*Vadc^(2-Nmadc)*MW)/(Kmadc*102*Nmadc^0.387))", scope);;
        print_krasivo("Zadc", s.Zadc);
        scope.MW2 = s.MW;
        s.Zadc2 = math.eval("(((Dwell-DCOD)^Nmadc*Vadc^(2- Nmadc)*MW2)/(Kmadc*102*Nmadc^0.387))", scope);
        if (s.Zadc < 800 && s.Zadc2 < 800) {
            scope.Kmadc = s.Kmadc; scope.SRaDC = s.SRaDC; scope.Nmadc = s.Nmadc;
            kLadc = math.eval("Kmadc*SRaDC^Nmadc", scope);
            scope.kLadc = kLadc; scope.DC_len = s.DC_len;
            s.DCaPL = math.eval("((3.33*kLadc)/(Dwell-DCOD)*(DC_len /1000))", scope);
        } else if (s.Zadc > 800 && s.Zadc2 > 800) {
            scope = { Kmadc: s.Kmadc, Nmadc: s.Nmadc, MW: s.MW, Dwell: s.Dwell, DCOD: s.DCOD };
            scope.MW = prevMW > 0 ? prevMW : s.MW;
            kT1adc = math.eval("2.4*((81600*Kmadc*Nmadc^0.387)/(MW*(Dwell-DCOD)^2))^(1/(2-Nmadc))", scope)
            scope.MW2 = s.MW;
            kT1adc2 = math.eval("2.4*((81600*Kmadc*Nmadc^0.387)/(MW2*(Dwell-DCOD)^2))^(1/(2-Nmadc))", scope)
            scope.kT1adc = kT1adc;
            kT2adc = math.eval("(1-(Nmadc/4))*kT1adc", scope);
            scope.kT1adc2 = kT1adc2;
            kT2adc2 = math.eval("(1-(Nmadc/4))*kT1adc2", scope);
            scope.Nmadc = s.Nmadc;
            kT3adc = math.eval("1.7*Nmadc^0.2", scope);
            scope.kT2adc = kT2adc; scope.kT3adc = kT3adc;
            kT4adc = math.eval("Kmadc*kT2adc^(Nmadc-kT3adc)", scope);
            scope.kT2adc2 = kT2adc2; scope.kT3adc = kT3adc;
            kT4adc2 = math.eval("Kmadc*kT2adc2^(Nmadc-kT3adc)", scope);
            scope.kT4adc = kT4adc; scope.SRaDC = s.SRaDC; scope.kT3adc = kT3adc;
            kT5adc = math.eval("kT4adc* SRaDC^ kT3adc", scope);
            scope.kT4adc2 = kT4adc2; scope.kT3adc = kT3adc;
            kT5adc2 = math.eval("kT4adc2*SRaDC^kT3adc", scope);
            scope = { kT5adc: kT5adc, Dwell: s.Dwell, DCOD: s.DCOD, DC_len: s.DC_len, hmva2: s.hmva2, kT5adc2: kT5adc2, };
            s.DCaPL = math.eval("((3.33* kT5adc)/(Dwell-DCOD)*((DC_len-hmva2)/1000)) + ((3.33* kT5adc2)/(Dwell-DCOD)*(hmva2/1000))", scope);
        } else if (s.Zadc < 800 && s.Zadc2 > 800) {
            scope = { Dwell: s.Dwell, DCOD: s.DCOD, DC_len: s.DC_len, hmva2: s.hmva2, kT5adc2: kT5adc2, kLadc: kLadc };
            s.DCaPL = math.eval("((3.33*kLadc)/(Dwell-DCOD)*((DC_len-hmva2)/1000)) + ((3.33* kT5adc2)/(Dwell-DCOD)*(hmva2/1000))", scope);
        } else if (s.Zadc > 800 && s.Zadc2 < 800) {
            scope = { Dwell: s.Dwell, DCOD: s.DCOD, DC_len: s.DC_len, hmva2: s.hmva2, kT5adc: kT5adc, kT5adc2: kT5adc2, kLadc: kLadc };
            s.DCaPL = math.eval("((3.33*kLadc)/(Dwell-DCOD)*(hmva2/1000)) + ((3.33* kT5adc)/(Dwell-DCOD)*((DC_len - hmva2)/1000))", scope);
        }
    } else if (s.hmva2 >= s.DC_len && s.hmva2 < (s.DC_len + s.HWDP_len)) {
        scope = { Dwell: s.Dwell, DCOD: s.DCOD, DC_len: s.DC_len, hmva2: s.hmva2, kT5adc: kT5adc, kT5adc2: kT5adc2, kLadc: kLadc };
        s.DCaPL = s.Zadc < 800 ? math.eval("((3.33*kLadc)/(Dwell-DCOD)*( DC_len /1000))", scope) : math.eval("((3.33* kT5adc2)/(Dwell-DCOD)*(DC_len/1000))", scope);
        scope.HWDPOD = s.HWDPOD; scope.Nmahwdp = s.Nmahwdp; scope.Vahwdp = s.Vahwdp; scope.MW = prevMW; scope.Kmahwdp = s.Kmahwdp;
        s.Zahwdp = math.eval("(((Dwell-HWDPOD)^Nmahwdp*Vahwdp^(2-Nmahwdp)*MW)/(Kmahwdp*102*Nmahwdp^0.387))", scope);
        scope.Zahwdp2 = s.Zahwdp2; scope.MW2 = s.MW;
        s.Zahwdp2 = math.eval("(((Dwell-HWDPOD)^Nmahwdp*Vahwdp^(2-Nmahwdp)*MW2)/(Kmahwdp*102*Nmahwdp^0.387))", scope);

        if (s.Zahwdp < 800 && s.Zahwdp2 < 800) {
            scope = { Kmahwdp: s.Kmahwdp, SRaHWDP: s.SRaHWDP, Nmahwdp: s.Nmahwdp };
            s.kLahwdp = math.eval("Kmahwdp*SRaHWDP^Nmahwdp", scope);
            scope.kLahwdp = s.kLahwdp; scope.Dwell = s.Dwell; scope.HWDPOD = s.HWDPOD; scope.HWDP_len = s.HWDP_len;
            s.HWDPaPL = math.eval("((3.33*kLahwdp)/(Dwell-HWDPOD)*(HWDP_len/1000))", scope);
        } else if (s.Zahwdp > 800 && s.Zahwdp2 > 800) {
            scope = { Kmahwdp: s.Kmahwdp, Nmahwdp: s.Nmahwdp, MW: prevMW, Dwell: s.Dwell, HWDPOD: s.HWDPOD };
            kT1ahwdp = math.eval("2.4*((81600*Kmahwdp*Nmahwdp^0.387)/(MW*(Dwell-HWDPOD)^2))^(1/(2-Nmahwdp))", scope);
            scope.MW2 = s.MW;
            kT1ahwdp2 = math.eval("2.4*((81600*Kmahwdp*Nmahwdp^0.387)/(MW2*(Dwell-HWDPOD)^2))^(1/(2-Nmahwdp))", scope);
            scope.kT1ahwdp = kT1ahwdp;
            kT2ahwdp = math.eval("(1-(Nmahwdp/4))*kT1ahwdp", scope);
            scope.kT1ahwdp = kT1ahwdp;
            kT2ahwdp2 = math.eval("(1-(Nmahwdp/4))*kT1ahwdp", scope);
            kT3ahwdp = math.eval("1.7*Nmahwdp^0.2", scope);
            scope.kT2ahwdp = kT2ahwdp; scope.kT3ahwdp = kT3ahwdp;
            kT4ahwdp = math.eval("Kmahwdp * kT2ahwdp ^ (Nmahwdp - kT3ahwdp)", scope);
            scope.kT2ahwdp2 = kT2ahwdp2; scope.kT3ahwdp = kT3ahwdp;
            kT4ahwdp2 = math.eval("Kmahwdp * kT2ahwdp2 ^ (Nmahwdp - kT3ahwdp)", scope)
            scope.kT4ahwdp = kT4ahwdp; scope.kT3ahwdp = kT3ahwdp; scope.SRaHWDP = s.SRaHWDP;
            kT5ahwdp = math.eval("kT4ahwdp * SRaHWDP ^ kT3ahwdp", scope);
            scope.kT4ahwdp2 = kT4ahwdp2; scope.kT3ahwdp = kT3ahwdp
            kT5ahwdp2 = math.eval("kT4ahwdp2 * SRaHWDP ^ kT3ahwdp", scope);
            scope.kT5ahwdp = kT5ahwdp; scope.DC_len = s.DC_len; scope.HWDP_len = s.HWDP_len; scope.hmva2 = s.hmva2; scope.kT5ahwdp2 = kT5ahwdp2;
            s.HWDPaPL = math.eval("((3.33 * kT5ahwdp) / (Dwell - HWDPOD) * ((DC_len + HWDP_len - hmva2) / 1000)) + ((3.33 *kT5ahwdp2) / (Dwell - HWDPOD) * ((hmva2 - DC_len) / 1000))", scope);
        } else  if ( s.Zahwdp < 800 && s.Zahwdp2 > 800) {
            scope = { kT5ahwdp: kT5ahwdp, Dwell: s.Dwell, HWDPOD: s.HWDPOD, DC_len: s.DC_len, hmva2: s.hmva2, kLahwdp: s.kLahwdp, HWDP_len: s.HWDP_len, kT5ahwdp2: kT5ahwdp2 };
            s.HWDPaPL = math.eval("((3.33*kLahwdp)/(Dwell-HWDPOD)*((DC_len+HWDP_len-hmva2)/1000))+((3.33* kT5ahwdp2)/(Dwell-HWDPOD)*((hmva2-DC_len)/1000))", scope);
        } else if (s.Zahwdp > 800 && s.Zahwdp2 < 800) {
            scope = { kT5ahwdp: kT5ahwdp, Dwell: s.Dwell, HWDPOD: s.HWDPOD, DC_len: s.DC_len, hmva2: s.hmva2, kLahwdp: s.kLahwdp, HWDP_len: s.HWDP_len };
            s.HWDPaPL = math.eval("((3.33* kT5ahwdp)/(Dwell-HWDPOD)*((DC_len+HWDP_len-hmva2)/1000))+((3.33* kLahwdp)/(Dwell-HWDPOD)*((hmva2-DC_len)/1000))", scope);
        }
    } else if (s.hmva2 >= (s.DC_len + s.HWDP_len) && s.hmva2 < (s.MD - s.CassetMD)) {
        scope = { kLahwdp: kLahwdp, Dwell: s.Dwell, HWDPOD: s.HWDPOD, HWDP_len: s.HWDP_len, kT5ahwdp2: kT5ahwdp2 };
        s.HWDPaPL = s.Zahwdp2 < 800 ? math.eval("((3.33*kLahwdp)/(Dwell-HWDPOD)*(HWDP_len/1000))", scope) : math.eval("((3.33*kT5ahwdp2)/(Dwell-HWDPOD)*( HWDP_len/1000))", scope);
        scope.Nmadpo = s.Nmadpo; scope.Vadpo = s.Vadpo; scope.MW = prevMW; scope.Kmadpo = s.Kmadpo; scope.DPOD = s.DPOD;
        s.Zadpo = math.eval("(((Dwell-DPOD)^Nmadpo*Vadpo^(2-Nmadpo)*MW)/(Kmadpo*102*Nmadpo^0.387))", scope);
        scope.MW2 = s.MW;
        s.Zadpo2 = math.eval("(((Dwell-DPOD)^Nmadpo*Vadpo^(2- Nmadpo)*MW2)/(Kmadpo*102*Nmadpo^0.387))", scope);
        print_krasivo("HWDPaPL", s.HWDPaPL); print_krasivo("Zadpo", s.Zadpo); print_krasivo("Zadpo2", s.Zadpo2);
        if (s.Zadpo < 800 && s.Zadpo2 < 800) {
            scope = { Kmadpo: s.Kmadpo, SRaDPo: s.SRaDPo, Nmadpo: s.Nmadpo };
            kLadpo = math.eval("Kmadpo*SRaDPo^Nmadpo", scope);
            scope.kLadpo = kLadpo; scope.Dwell = s.Dwell; scope.DPOD = s.DPOD; scope.DpLength = s.DpLength; scope.CassetMD = s.CassetMD;
            s.DPaPLo = math.eval("((3.33 * kLadpo) / (Dwell - DPOD) * ((DpLength - CassetMD) / 1000))", scope);
            print_krasivo("kLadpo", kLadpo); print_krasivo("DPaPLo", s.DPaPLo);
        } else if (s.Zadpo > 800 && s.Zadpo2 > 800) {
            scope = { Kmadpo: s.Kmadpo, Nmadpo: s.Nmadpo, MW: prevMW, Dwell: s.Dwell, DPOD: s.DPOD, MW2: s.MW };
            kT1adpo = math.eval("2.4 * ((81600 * Kmadpo * Nmadpo ^ 0.387) / (MW * (Dwell - DPOD) ^ 2)) ^ (1 / (2 - Nmadpo))", scope);
            kT1adpo2 = math.eval("2.4 * ((81600 * Kmadpo * Nmadpo ^ 0.387) / (MW2 * (Dwell - DPOD) ^ 2)) ^ (1 / (2 - Nmadpo))", scope);
            scope.kT1adpo = kT1adpo;
            kT2adpo = math.eval("(1 - (Nmadpo / 4)) * kT1adpo", scope);
            scope.kT1adpo2 = kT1adpo2;
            kT2adpo2 = math.eval("(1 - (Nmadpo / 4)) * kT1adpo2", scope);
            kT3adpo = math.eval("1.7 * Nmadpo ^ 0.2", scope);
            scope.kT2adpo = kT2adpo; scope.kT3adpo = kT3adpo;
            kT4adpo = math.eval("Kmadpo * kT2adpo ^ (Nmadpo - kT3adpo)", scope);
            scope.kT2adpo2 = kT2adpo2; scope.kT3adpo = kT3adpo;
            kT4adpo2 = math.eval("Kmadpo * kT2adpo2 ^ (Nmadpo - kT3adpo)", scope);
            scope.kT4adpo = kT4adpo; scope.kT3adpo = kT3adpo; scope.SRaDPo = s.SRaDPo;
            kT5adpo = math.eval("kT4adpo * SRaDPo ^ kT3adpo", scope);
            scope.kT4adpo2 = kT4adpo2; scope.kT3adpo = kT3adpo;
            kT5adpo2 = math.eval("kT4adpo2 * SRaDPo ^ kT3adpo", scope);
            scope.kT5adpo = kT5adpo; scope.DpLength = s.DpLength; scope.CassetMD = s.CassetMD; scope.HWDP_len = s.HWDP_len; scope.hmva2 = s.hmva2; scope.kT5adpo2 = kT5adpo2; scope.DC_len = s.DC_len;
            s.DPaPLo = math.eval("((3.33* kT5adpo)/(Dwell-DPOD)*((DpLength - CassetMD+ DC_len+HWDP_len-hmva2)/1000)) + ((3.33* kT5adpo2)/(Dwell-DPOD)*(( hmva2- (DC_len+HWDP_len))/1000))", scope);
            print_krasivo("kt5adpo", kT5adpo); print_krasivo("kt5adpo2", kT5adpo2); print_krasivo("DPaPLo", s.DPaPLo);
        } else if (s.Zadpo < 800 && s.Zadpo2 > 800) {
            scope = { kLadpo: kLadpo, Dwell: s.Dwell, DPOD: s.DPOD, DpLength: s.DpLength, CassetMD: s.CassetMD, DC_len: s.DC_len, HWDP_len: s.HWDP_len, hmva2: s.hmva2, kT5adpo2: kT5adpo2 };
            s.DPaPLo = math.eval("((3.33* kLadpo)/(Dwell-DPOD)*(( DpLength - CassetMD+ DC_len+HWDP_len-hmva2)/1000)) + ((3.33* kT5adpo2)/(Dwell-DPOD)*(( hmva2- (DC_len+HWDP_len))/1000))", scope);
        } else if (s.Zadpo > 800 && s.Zadpo2 < 800) {
            scope = { kT5adpo: kT5adpo, Dwell: s.Dwell, DPOD: s.DPOD, DpLength: s.DpLength, DC_len: s.DC_len, HWDP_len: s.HWDP_len, hmva2: s.hmva2, kLadpo: kladpo , CassetMD: s.CassetMD};
            s.DPaPLo = math.eval("((3.33* kT5adpo)/(Dwell-DPOD)*(( DpLength - CassetMD+ DC_len+HWDP_len-hmva2)/1000)) + ((3.33* kLadpo)/(Dwell-DPOD)*(( hmva2- (DC_len+HWDP_len))/1000))", scope);
        }
        // test zahodi
    } else if (s.hmva2 >= (s.MD - s.CassetMD) && s.hmva2 < s.MD) {
        scope = { kLadpo: kLadpo, Dwell: s.Dwell, DPOD: s.DPOD, DpLength: s.DpLength, CassetMD: s.CassetMD, kT5adpo2: kT5adpo2 };
        s.DPaPLo = s.Zadpo2 < 800 ? math.eval("((3.33* kLadpo)/(Dwell-DPOD)*((DpLength-CassetMD)/1000))", scope) : math.eval("((3.33*kT5adpo2)/(Dwell-DPOD)*((DpLength-CassetMD)/1000))", scope);
        scope.CasID = s.CasID; scope.DPOD = s.DPOD; scope.Nmadpc = s.Nmadpc; scope.Vadpc = s.Vadpc; scope.MW = prevMW; scope.Kmadpc = s.Kmadpc;
        s.Zadpc = math.eval("(((CasID-DPOD)^Nmadpc*Vadpc^(2- Nmadpc)*MW)/(Kmadpc*102*Nmadpc^0.387))", scope);
        scope.MW2 = s.MW;
        s.Zadpc2 = math.eval("(((CasID-DPOD)^Nmadpc*Vadpc^(2- Nmadpc)*MW2)/(Kmadpc*102*Nmadpc^0.387))", scope);
        print_krasivo("DPaPLo", s.DPaPLo); print_krasivo("Zadpc", s.Zadpc); print_krasivo("Zadpc2", s.Zadpc2);
        if ((zahodi) || s.Zadpc < 800 && s.Zadpc2 < 800) {
            scope = { Kmadpc: s.Kmadpc, SRaDPc: s.SRaDPc, Nmadpc: s.Nmadpc };
            kLadpc = math.eval("Kmadpc*SRaDPc^Nmadpc", scope);
            scope.kLadpc = kLadpc; scope.CasID = s.CasID; scope.DPOD = s.DPOD; scope.CassetMD = s.CassetMD;
            s.DPaPLc = math.eval("((3.33*kLadpc)/(CasID-DPOD)*(CassetMD/1000))", scope);
        } else if (s.Zadpc > 800 && s.Zadpc2 > 800) {
            scope = { Kmadpc: s.Kmadpc, Nmadpc: s.Nmadpc, MW: prevMW, CasID: s.CasID, DPOD: s.DPOD };
            s.kT1adpc = math.eval("2.4 * ((81600 * Kmadpc * Nmadpc ^ 0.387) / (MW * (CasID - DPOD) ^ 2)) ^ (1 / (2 - Nmadpc))", scope);
            scope.MW2 = s.MW;
            s.kT1adpc2 = math.eval("2.4 * ((81600 * Kmadpc * Nmadpc ^ 0.387) / (MW2 * (CasID - DPOD) ^ 2)) ^ (1 / (2 - Nmadpc))", scope);
            scope.kT1adpc = kT1adpc;
            s.kT2adpc = math.eval("(1 - (Nmadpc / 4)) * kT1adpc", scope);
            scope.kT1adpc2 = kT1adpc2;
            s.kT2adpc2 = math.eval("(1 - (Nmadpc / 4)) * kT1adpc2", scope);
            s.kT3adpc = math.eval("1.7 * Nmadpc ^ 0.2", scope);
            scope.kT2adpc = kT2adpc; scope.kT3adpc = kT3adpc;
            s.kT4adpc = math.eval("Kmadpc * kT2adpc ^ (Nmadpc - kT3adpc)", scope);
            scope.kT2adpc2 = kT2adpc2; scope.kT3adpc = kT3adpc;
            s.kT4adpc2 = math.eval("Kmadpc * kT2adpc2 ^ (Nmadpc - kT3adpc)", scope);
            scope.kT4adpc = kT4adpc; scope.SRaDPc = s.SRaDPc; scope.kT3adpc = kT3adpc;
            s.kT5adpc = math.eval("kT4adpc * SRaDPc ^ kT3adpc", scope);
            scope.kT4adpc2 = kT4adpc2; scope.kT3adpc = kT3adpc;
            s.kT5adpc2 = math.eval("kT4adpc2 * SRaDPc ^ kT3adpc", scope);
            scope.kT5adpc2 = kT5adpc2; scope.kT5adpc = kT5adpc; scope.MD = s.MD; scope.hmva2 = s.hmva2; scope.CassetMD = s.CassetMD;
            s.DPaPLc = math.eval("((3.33 * kT5adpc2) / (CasID - DPOD) * ((hmva2 - (MD - CassetMD)) / 1000)) + ((3.33 * kT5adpc) /(CasID - DPOD) * ((MD - hmva2) / 1000))", scope);
        } else if (s.Zadpc < 800 && s.Zadpc2 > 800) {
            scope = { kLadpo: kLadpo, Dwell: s.Dwell, DPOD: s.DPOD, MD: s.MD, hmva2: s.hmva2, kT5adpo2: kT5adpo2, CassetMD: s.CassetMD };
            s.DPaPLc = math.eval("((3.33 * kLadpo) / (Dwell - DPOD) * (MD - hmva2)) + ((3.33 * kT5adpo2) / (Dwell - DPOD) * ((hmva2 - MD + CassetMD) / 1000))", scope);
        } else if (s.Zadpc > 800 && s.Zadpc2 < 800) {
            scope = { kT5adpo: kT5adpo, Dwell: s.Dwell, DPOD: s.DPOD, MD: s.MD, hmva2: s.hmva2, kT5adpo2: kT5adpo2, CassetMD: s.CassetMD, kLadpo: kLadpo };
            s.DPaPLc = math.eval("((3.33 * kT5adpo) / (Dwell - DPOD) * (MD - hmva2)) + ((3.33 * kLadpo) / (Dwell - DPOD) * ((hmva2 - MD + CassetMD) / 1000))", scope);
        }
    } else if (s.hmva2 >= s.MD) {
        scope = { kT5adpo2: kT5adpo2, kLadpo: kLadpo, Dwell: s.Dwell, DPOD: s.DPOD, MD: s.MD, hmva2: s.hmva2, kT5adpo2: kT5adpo2, CassetMD: s.CassetMD };
        s.DPaPLc = s.Zadpc2 < 800 ? math.eval("((3.33* kLadpo)/(Dwell-DPOD)*(CassetMD/1000))", scope) : math.eval("((3.33* kT5adpo2)/(Dwell-DPOD)*(CassetMD/1000))", scope);
    }
    s.APL = s.DCaPL + s.HWDPaPL + s.DPaPLo + s.DPaPLc;
    DPP = SIDPP + s.SPL + s.APL + s.DSiPL + s.BPL;
    set_dpp_display_value(DPP);
    var ds_len = s.DpLength + s.HWDP_len + s.DC_len;
    if (s.hmv2 > ds_len && s.hmva2 > 0) {
        SICP = s.FP - s.MW * s.hmva2 * 0.052 - s.MW * (s.MD - s.hmva2) * 0.052;
    }

    if (s.hmv2 > ds_len && s.hmva2 > ds_len) {
        SICP = 0; SIDPP = 0;
        clearInterval(tk2_timer);
        set_dpp_display_value(0);
        alert("Well has been killed!!!");
    }
    print_krasivo("hmv2", s.hmv2); print_krasivo("ds_len", ds_len); print_krasivo("hmva2", s.hmva2);
    console.log("Dcapl and Zadpc2 and Zadc2 and dpaplo " + s.DCaPL + " " + s.Zadpc2 + " " + s.Zadc2 + " " + s.DPaPLo);

    tk2_sec++;
}

// modify qChg
function getqChg() {
    return 3;
}

function set_dpp_display_value(val) {
    $('#part_indicator_text4').html((val.toFixed(3)).replace(".", ","));
    $('.rotor_hose_pressure_text_number').html(Math.round(val));
    $('.rotor_pump_pressure_text_number_1').html(obs.spm);
    $('.rotor_pump_pressure_text_number_2').html(Math.round(val));;
}

function tChg_calculations() {
    qChgcum += getqChg();
    qicumiw = qicum - qChgcum;
    if (obs.spm == 0) {
        SIDPP = FP - s.MW * s.MD * 0.052;
        set_dpp_display_value(SIDPP);
        // set_pump_pressure val
    } else if (obs.spm == 0 && qicumiw <= 0) {
        SICP = FP - s.MW * s.MD * 0.052;
        set_dpp_displayy_value(SICP);
    }
    qChwp = s.POgpm / 60 - getqChg();
    // Terminate condition
    if (Boinf <= 0) {
        clearInterval(tChg_timer);
    }
    tChg_sec++;
}

var prev_tk1_hinf = 0; var prev_tk1_qicum = 0; var prev_tk1_SIDPP = 0;

// circulate out with old mud
function tk1_calculations() {
    var scope = null;
    if (tk1_sec == 1) {
        Toinf = s.MD - hinf;
        prev_tk1_hinf = hinf;
        prev_tk1_qicum = qicum;
        prev_tk1_SIDPP = SIDPP;
    } else {
        Toinf = Boinf - prev_tk1_hinf;
        var cur_qCh = getqCh();
        scope = { pSIDPP: prev_tk1_SIDPP, TaV: aV, qCh: cur_qCh, POgpm: s.POgpm };
        SIDPP = math.eval("pSIDPP*(TaV/(TaV+qCh-POgpm/60))", scope);
        scope = { SIDPP: SIDPP, Toinf: Toinf, MW: s.MW, phinf: prev_tk1_hinf, MWgas: 2, Boinf: Boinf };
        SICP = math.eval("SIDPP-Toinf*MW*0.052-phinf*MWgas*0.052+Boinf*MW*0.052", scope);
        set_dpp_display_value(SICP);
        console.log("SICP: " + SICP);
        scope = { pqicum: prev_tk1_qicum, FP: FP, MW: s.MW, Toinf: Toinf, SICP: SICP };
        qicum = math.eval("pqicum*FP/(MW*Toinf*0.052+SICP)", scope);
        if (qicum + s.CumMV1 < s.DCaV) {
            scope = { qicum: qicum, CumMV1: s.CumMV1, DCAcap: s.DCAcap, MD: s.MD, Boinf: Boinf };
            hinf = math.eval("(qicum+CumMV1)/DCAcap-(MD-Boinf)", scope);
        } else if (qicum + s.CumMV1 > s.DCaV && qicum + s.CumMV1 < s.HWDPaV) { //If (qicumcur+CumMV1) > DCaV and (qicumcur+CumMV1)< HWDPaV then
            scope = { DClenght: s.DC_len, qicum: qicum, CumMV1: s.CumMV1, DCaV: s.DCaV, HWDPAccap: s.HWDPAccap, MD: s.MD, Boinf: Boinf };
            hinf = math.eval("DClenght+(qicum+CumMV1-DCaV)/HWDPAccap-(MD-Boinf)", scope);
        } else if (qicum + s.CumMV1 > (s.DCaV + s.HWDPaV) && qicum + s.CumMV1 < s.DCaV) {
            scope = { DClenght: s.DC_len, HWDPlength: s.HWDP_len, qicumcur: qicum, CumMV1: s.CumMV1, DCaV: s.DCaV, HWDPaV: s.HWDPaV, DPAccap: s.DPAccap, MD: s.MD, Boinf: Boinf };
            hinf = math.eval("DClenght+HWDPlength+(qicumcur+CumMV1-DCaV-HWDPaV)/DPAccap-(MD-Boinf)", scope);
        }
        s.BHPd = SIDPP + s.MW * s.MD * 0.052;
        scope = { SICPcur: SICP, MW: s.MW, MD: s.MD, hinf: hinf, MWgas: 2 };
        s.BHPd = math.eval("SICPcur+MW*(MD-hinf)*0.052+MWgas*hinf*0.052", scope);
        console.log("tk1_timer Boinf val and BHPD: " + Boinf + " " + s.BHPd);
        console.log("Toinf and hinf and SICP: " + Toinf + " " + hinf + " " + SICP);
        prev_tk1_hinf = hinf;
        prev_tk1_qicum = qicum;
        prev_tk1_sidpp = SIDPP;
    }

    tk1_sec++;
    if (mw_changed) {
        clearInterval(tk1_timer);
    }
}

function tCho_calculations() {
    var qCh = getqCh();
    if (tCho_sec == 1) {
        qChcum = qCh * tCho_sec;
        aV = aV + qChcum;
        SICP = SICP * aV / aV;
        SIDPP = SIDPP * aV / aV;
        prev_tcho_aV = aV;
        prev_tcho_SICP = SICP;
        prev_tcho_SIDPP = SIDPP;
    } else {
        qChcum = qCh * tCho_sec;
        aV = prev_tcho_aV + qChcum;
        SICP = prev_tcho_SICP * prev_tcho_aV / aV;
        SIDPP = prev_tcho_SIDPP * prev_tcho_aV / aV;
        console.log("SICP VAL: " + SICP);
        console.log("SIDPP VAL: " + SIDPP);
        if (SIDPP > 0 && ChPos > 0 && pvo_switchers[6] == 1 && pvo_switchers[1] == 0) {
            // set pump pressure val
            DPP = SIDPP + s.SPL + s.APL + s.DSiPL + s.BPL;
            console.log("Setting new pump pressure DPPcur: " + DPP);
            set_dpp_display_value(DPP / 14.45);
        }
    }



    if (mw_changed) {
        s.CumMV2 += s.POgpm / 60;

        if (s.CumMV2 < s.DCaV) {
            console.log("CuMV2 < s.DCaV");
            Boinf = s.MD - s.CumMV2 / s.DCAcap;
        } else if (s.CumMV2 > s.DCaV && s.CumMV2 < s.HWDPaV + s.DCaV) {
            var scope = { MD: s.MD, DC_len: s.DC_len, CumMV2: s.CumMV2, DCaV: s.DCaV, HWDPAccap: s.HWDPAccap };
            Boinf = math.eval("MD - (DC_len + (CumMV2 - DCaV) / HWDPAccap)", scope);
        } else if (s.CumMV2 > s.DCaV + s.HWDPaV && s.CumMV2 < (s.DCaV + s.HWDPaV + s.DPaoV)) {
            var scope = { MD: s.MD, DC_len: s.DC_len, HWDP_len: s.HWDP_len, CumMV2: s.CumMV2, DCaV: s.DCaV, HWDPaV: s.HWDPaV, DPAocap: s.DPAocap };
            Boinf = math.eval("MD-(DC_len + HWDP_len +(CumMV2-DCaV-HWDPaV)/DPAocap)", scope);
        } else if (s.CumMV2 > (s.DCaV + s.HWDPaV + s.DPaoV) && s.CumMV2 < (s.DCaV + s.HWDPaV + s.DPaoV + s.DPacV)) {
            var scope = { CassetMD: s.CassetMD, CumMV2: s.CumMV2, DCaV: s.DCaV, HWDPaV: s.HWDPaV, DPacV: s.DPacV, DPAccap: s.DPAccap };
            Boinf = math.eval("CassetMD - (CumMV2-DCaV-HWDPaV-DPacV)/DPAccap", scope);
        } else if (s.CumMV2 < (s.DCaV + s.HWDPaV + s.DPaoV) && s.CumMV2 < (s.DCaV + s.HWDPaV + s.DPaoV + s.DPacV)) {
            var scope = { CassetMD: s.CassetMD, CumMV2: s.CumMV2, DCaV: s.DCaV, HWDPaV: s.HWDPaV, DPacV: s.DPacV, DPAccap: s.DPAccap };
            Boinf = math.eval("CassetMD - (CumMV2 - DCaV - HWDPaV - DPacV) / DPAccap", scope);
        } else if (s.CumMV2 >= (s.DCaV + s.HWDPaV + s.DPaoV + s.DPacV)) {
            Boinf = 0;
        }
    } else {
        s.CumMV1 += s.POgpm / 60;

        if (s.CumMV1 < s.DCaV) {
            console.log("CuMV2 < s.DCaV");
            Boinf = s.MD - s.CumMV1 / s.DCAcap;
        } else if (s.CumMV1 > s.DCaV && s.CumMV1 < s.HWDPaV + s.DCaV) {
            var scope = { MD: s.MD, DC_len: s.DC_len, CumMV1: s.CumMV1, DCaV: s.DCaV, HWDPAccap: s.HWDPAccap };
            Boinf = math.eval("MD - (DC_len + (CumMV1 - DCaV) / HWDPAccap)", scope);
        } else if (s.CumMV1 > s.DCaV + s.HWDPaV && s.CumMV1 < (s.DCaV + s.HWDPaV + s.DPaoV)) {
            var scope = { MD: s.MD, DC_len: s.DC_len, HWDP_len: s.HWDP_len, CumMV1: s.CumMV1, DCaV: s.DCaV, HWDPaV: s.HWDPaV, DPAocap: s.DPAocap };
            Boinf = math.eval("MD-(DC_len + HWDP_len +(CumMV1-DCaV-HWDPaV)/DPAocap)", scope);
        } else if (s.CumMV1 > (s.DCaV + s.HWDPaV + s.DPaoV) && s.CumMV1 < (s.DCaV + s.HWDPaV + s.DPaoV + s.DPacV)) {
            var scope = { CassetMD: s.CassetMD, CumMV1: s.CumMV1, DCaV: s.DCaV, HWDPaV: s.HWDPaV, DPacV: s.DPacV, DPAccap: s.DPAccap };
            Boinf = math.eval("CassetMD - (CumMV1-DCaV-HWDPaV-DPacV)/DPAccap", scope);
        } else if (s.CumMV1 < (s.DCaV + s.HWDPaV + s.DPaoV) && s.CumMV1 < (s.DCaV + s.HWDPaV + s.DPaoV + s.DPacV)) {
            var scope = { CassetMD: s.CassetMD, CumMV1: s.CumMV1, DCaV: s.DCaV, HWDPaV: s.HWDPaV, DPacV: s.DPacV, DPAccap: s.DPAccap };
            Boinf = math.eval("CassetMD - (CumMV1 - DCaV - HWDPaV - DPacV) / DPAccap", scope);
        } else if (s.CumMV1 >= (s.DCaV + s.HWDPaV + s.DPaoV + s.DPacV)) {
            Boinf = 0;
        }
    }

    if (!mw_changed && !tk1_timer_started) {// circulate out with old mud
        // boinf and toinf
        tk1_timer_started = true;
        tk1_timer = setInterval(tk1_calculations, 1000);
    }

    //if qicum>0 and SIDPP>0, SICP>0, MWpit=MW2, and spm>0
    if (qicum > 0 && SIDPP > 0 && SICP > 0 && mw_changed == true && !tk2_started) {
        tk2_started = true;
        tk2_timer = setInterval(tk2_calculations, 1000);
    }
    if (Toinf <= 0 && !tChg_started) {
        console.log("TOINF STARTED");
        tChg_started = true;
        tChg_timer = setInterval(tChg_calculations, 1000);
    };
    console.log("Cummv2 and Boinf: " + s.CumMV2 + " " + Boinf);
    // circulate out with kill mud calculations;
    if (ChPos == 0) {
        clearInterval(tCho_timer);
    }
    tCho_sec++;
}


// start when chPos > 0
function wait_and_weight() {
    // tCho
    tCho_timer = setInterval(tCho_calculations, 1000);
}

// start tCho
function resume_tcho() {
    if (ChPos > 0) {
        tCho_timer = setInterval(tCho_calculations, 1000);
    }
}

function tinf_calculations() {
    var scope = { pi: Math.PI, k: 200, MD: s.MD, ht9: ht[9], FP: FP, BHPd: s.BHPd, mu: 10 };
    qi = math.eval("4 * pi * k * (MD - ht9) * (FP - BHPd) / mu / 45 / 2784", scope);
    //console.log("qi increasing: " + qi);
    //console.log("tinf_sec: " + tinf_sec);
    console.log("qicum: " + qicum);
    qicum += qi;
    tinf_sec++;
    // conditions terminate
    if (FP <= s.BHPd + 0.01) {
        clearInterval(tinf_timer);
        clearInterval(tcbop_timer);
        // if chPos > 0
        if (ChPos > 0) {
            wait_and_weight();
        }
        console.log("TINF AND TCBOP TIMER TERMINATED!");
    }
}

function tcbop_calculations() {
    console.log("TCBOP AT time: " + tcbop_sec);
    if (tcbop_sec == 4) { // 1 iteraciya
        aV = aV - qi;
        s.BHPd = s.BHPd * (aV + qi) / aV;
        qi_sum += qi * tcbop_sec;
        prev_tcbop_av = aV;
        prev_tcbop_BHPd = s.BHPd;
        prev_tcbop_qi = qi;
    } else { // tcbop + 5 ... n
        /*
            var prev_tcbop_av = -1;
            var prev_tcbop_BHPd = -1;
            var prev_tcbop_qi_sum = -1;
            var prev_tcbop_qi = -1;
        */
        var scope = { pi: Math.PI, k: 200, MD: s.MD, ht9: ht[9], FP: FP, BHPd: s.BHPd, mu: 10 };
        qi = math.eval("4 * pi * k * (MD - ht9) * (FP - BHPd) / mu / 45 / 2784", scope);
        qi_sum += qi * tcbop_sec;
        aV = aV - qi_sum;
        //Calculate BHPd=BHPd(tcbop+4)*aV(tcbop+4)/aV(tcbop+5)
        scope = { pBHPd: prev_tcbop_BHPd, paV: prev_tcbop_av, aV: aV };
        s.BHPd = math.eval("pBHPd*paV/aV", scope);
        if (qicum < s.DCaV) {
            console.log("qicum < DCaV");
            console.log("qicum: " + qicum);
            console.log("DCAcap: " + s.DCAcap);
            hinf = qicum / s.DCAcap;
        }
        if (qicum > s.DCaV && qicum < (s.DCaV + s.HWDPaV) && obs.spm == 0) {
            hinf = s.DC_len + (qicum - s.DCaV) / s.HWDPAccap;
        }
        console.log("HINF IMPORTANT: " + hinf);
        SIDPP = s.BHPd - s.HPml;
        if (SIDPP > 0 && obs.spm == 0 && pvo_switchers[1] == 0) {
            $('#part_indicator_text4').html(((SIDPP / 14.45).toFixed(3) + "").replace(".", ","));
        }
        SICP = SIDPP + (s.MW - 2) * hinf * 0.052;
        console.log("BHPD SIDPP SICPP: " + s.BHPd + " " + SIDPP + " " + SICP);
        prev_tcbop_av = aV;
        prev_tcbop_BHPd = s.BHPd;
    }
    tcbop_sec++;
}

// ROP based on MD val, when BitPos 
function calculate_rop() {
    var cur_pos = s.MD;
    var cur_ht = -1; var cur_fs = -1; var cur_fpgr = -1; var a1k = -1;
    for (var i = 1; i <= ht.length - 2; i++) {
        if (cur_pos >= ht[i] && cur_pos <= ht[i + 1]) {
            cur_ht = i;
            break;
        }
    }
    // out of range >= 10
    if (cur_ht == -1) {
        cur_ht = 10; cur_fs = fs[cur_ht]; cur_fpgr = FPgr[cur_ht];
    } else {
        cur_fs = fs[cur_ht]; cur_fpgr = FPgr[cur_ht];
    }
    console.log("Current ht: " + cur_ht);
    FP = FPgr[cur_ht] * s.MD; // TODO: fps.push(FP); // build graph on FP
    if (cur_ht == 9) { // md in range [ht9, ht10]
        FP = FPgr[9] * s.MD;
        console.log("FP and BHPd val: " + FP + " " + s.BHPd);
        if (FP > s.BHPd && !influx_started) {
            // influx rate // add to snapshot s.K, s.mu
            influx_started = true;
            tinf_timer = setInterval(tinf_calculations, 1 * 1000);
        }
    }
    s.HPml = s.MD * s.MW * 0.052;
    print("MD val: " + s.MD);
    print("MW val: " + s.MW);
    s.BHPd = s.APL + s.HPml;
    //console.log("BHPd val: " + s.BHPd);
    s.ECD = s.BHPd / s.init_MD / 0.052;
    print("HPml val: " + s.HPml);
    print("bhpd val: " + s.BHPd);
    print("ECD val: " + s.ECD);
    a1k = a[cur_fs];
    var a1; var a2; var a3; var a4; var a5; var a6; var a7; var a8;
    a1 = Math.pow(constants.e, a1k);
    var scope = {
        e: constants.e,
        MDcur: s.MD
    };
    a2 = math.eval('e^(0.0004*(10000-MDcur))', scope);
    scope = { e: constants.e, MDcur: s.MD, FPgppg: 11.62 };
    a3 = math.eval('e^(0.0005*(MDcur^0.69)*(FPgppg-9))', scope);
    scope = { e: constants.e, MDcur: s.MD, FPgppg: 11.62, ECD: s.ECD };
    a4 = math.eval('e^(2.303*0.00005* MDcur*(FPgppg-ECD))', scope);
    scope = { WOB: s.WOB, Dwell: s.Dwell };
    a5 = math.eval('((WOB/Dwell)/(4-1.8))^0.3', scope);
    var cur_rpm = $('#regulator_indicator_text_2').html();
    scope = { RPM: obs.rpm };
    a6 = math.eval('(RPM/100)^0.1', scope);
    scope = { e: constants.e };
    a7 = math.eval('e^(-1.1*0.8)', scope);
    a8 = 0.3;
    print("a vals: " + a1 + " " + a2 + " " + a3 + " " + a4 + " " + a5 + " " + a6 + " " + a7 + " " + a8);
    s.ROP = (a1 * a2 * a3 * a4 * a5 * a6 * a7 * a8) / 3.28;
    dMD = s.ROP / 3600; // metri v sekundu
    $('#part_indicator_text5').html(s.ROP.toFixed(3));
}

function in_range(flal, low, high) {
    if (flal >= low && flal <= high) {
        return 1;
    }
    return -1;
}

function getKHL() {
    return 190;
}

// off pitva
function turn_off_pitva_alarm() {
    $('.right_alert').attr("src", imagePath + "off_state_alert.svg").css("-webkit-animation", "none");
}

// on pitva
function turn_on_pitva_alarm() {
    $('.right_alert').attr("src", imagePath + "on_state_alert.svg").css("-webkit-animation", "1s rotate360 infinite linear").css("-moz-animation", "1s rotate360 infinite linear").css("-ms-animation", "1s rotate360 infinite linear").css("animation", "1s rotate360 infinite linear");
}

// create var Vdis
function pitva_calculations() {
    logger.enableLogger();
    if (obs.spm == 0) {
        clearInterval(pitv_timer);
        pitv_timer_started = false;
    }
    var scope = null;
    Vcum += s.POgpm / 60;
    var pitvi = s.PitVi / 3.785;
    s.Vr = 1600 / 3.875;
    if (Vcum > s.Vr) {
        s.PitVa = pitvi - Vcum;
    } else {
        s.PitVa = pitvi - s.Vr;
    }
    if (!is_bit_moving) {
        s.PitVa = pitvi - s.Vr;
    }
    if (is_bit_moving) {
        // Vdis=(DPOD^2-DPID^2)*deltaBitPos/(24.5),
        scope = { DPOD: s.DPOD, DPID: s.DPID, dbp: deltaBitPos };
        Vdis = math.eval("(DPOD^2-DPID^2)*dbp/(24.5)", scope);
        s.PitVa = pitvi - s.Vr + Vdis;
    }
    deltaSpm = Math.abs(prevSpm - obs.spm); // delta spm
    if (deltaSpm != 0) {
        Vsch = s.Pops * deltaSpm;
        s.PitVa = pitvi - s.Vr + Vdis + Vsch;
    }
    // is_drilling
    if (is_drilling) {
        scope = { Dwell: s.Dwell, DCOD: s.DCOD, deltaMD: dMD };
        Vda = math.eval("(Dwell^2-DCOD^2)*deltaMD/(24.5)", scope);
        s.PitVa = pitvi - s.Vr + Vdis + Vsch - Vda;
    }
    if (s.PitVa >= (PitVal / 3.875) && s.PitVa <= (s.Pitvah / 3.875)) {
        // turn off budilniki
        turn_off_pitva_alarm();
    } else {
        // turn on budilniki
        turn_on_pitva_alarm();
    }
    // rotate right alarm
    console.log("PitVa val: " + s.PitVa + " " + PitVal + " " + PitVah);
    // calc vdis depending on moving bitpos
    prevSpm = obs.spm;
}

// using math.js for complex expr

function calculate_pogpm_new() {
    var spm1 = parseInt($('#regulator_indicator_text').html());
    var spm2 = parseInt($('#regulator_indicator_text_1').html());
    if (!pumpIsOn_1) { spm1 = 0; } if (!pumpIsOn_2) { spm2 = 0; }
    $('#pump_indicators_down_1').html(spm1); $('#pump_indicators_up_1').html(spm2);
    $('#pump_indicators_down_2').html(Math.round(constants.pops * spm1)); $('#pump_indicators_up_2').html(Math.round(constants.pops2 * spm2));
    obs.spm = spm1 + spm2;
    s.POgpm = constants.pops * spm1 + constants.pops2 * spm2;

    if (!pitv_timer_started && obs.spm > 0) {
        pitv_timer = setInterval(pitva_calculations, 1000);
        pitv_timer_started = true;
    }
    console.log("spm and pogpm: " + obs.spm + " " + s.POgpm);
    //console.log("%cPogpm val: " + s.POgpm, "background: red, font: white");
    s.FLAL = s.POgpm / 5.28;
    // postavit strelky na flal;
    rotate_rotor_area_left_arrow(s.FLAL);
    var low = $('#left_down_range_text').html(); var high = $('#left_up_range_text').html();
    //console.log("LOW AND HIGH: " + low + " " + high);
    var res = in_range(s.FLAL, low, high);
    if (res > 0) {
        $('.left_alert').attr("src", imagePath + "off_state_alert.svg").css("-webkit-animation", "none");
        // turn off budilniki
    } else {
        $('.left_alert').attr("src", imagePath + "on_state_alert.svg").css("-webkit-animation", "1s rotate360 infinite linear").css("-moz-animation", "1s rotate360 infinite linear").css("-ms-animation", "1s rotate360 infinite linear").css("animation", "1s rotate360 infinite linear");
        // turn on budilniki
    }

    s.Vn = s.POgpm * 0.32 / constants.An;
    s.BPL = Math.pow(s.Vn, 2) * s.MW / 1120;
    s.Vadc = 24 * s.POgpm / (Math.pow(s.Dwell, 2) - Math.pow(s.DCOD, 2));
    s.Vahwdp = 24 * s.POgpm / (Math.pow(s.Dwell, 2) - Math.pow(s.HWDPOD, 2))
    s.Vadpo = 24 * s.POgpm / (Math.pow(s.Dwell, 2) - Math.pow(s.DPOD, 2));
    s.Vadpc = 24 * s.POgpm / (Math.pow(s.CasID, 2) - Math.pow(s.DPOD, 2));

    s.SRaDC = (2.4 * s.Vadc) / (s.Dwell - s.DCOD);
    s.SRaHWDP = (2.4 * s.Vahwdp) / (s.Dwell - s.HWDPOD);
    s.SRaDPo = (2.4 * s.Vadpo) / (s.Dwell - s.DPOD);
    s.SRaDPc = (2.4 * s.Vadpc) / (s.CasID - s.DPOD);
    // Shear Rate
    s.Nmadc = s.SRaDC < 170 ? constants.N_low : constants.N_med;
    s.Nmahwdp = s.SRaHWDP < 170 ? constants.N_low : constants.N_med;
    s.Nmadpo = s.SRaDPo < 170 ? constants.N_low : constants.N_med;
    s.Nmadpc = s.SRaDPc < 170 ? constants.N_low : constants.N_med;

    s.Kmadc = s.SRaDC < 170 ? constants.K_low : constants.K_med;
    s.Kmahwdp = s.SRaHWDP < 170 ? constants.K_low : constants.K_med;
    s.Kmadpo = s.SRaDPo < 170 ? constants.K_low : constants.K_med;
    s.Kmadpc = s.Sradpc < 170 ? constants.K_low : constants.K_med;

    // Critical velocity
    var scope = { Kmadc: s.Kmadc, Nmadc: s.Nmadc, Dwell: s.Dwell, DCOD: s.DCOD, MW: s.MW };
    s.Vcadc = math.eval('((((81600*Kmadc*Nmadc^0.387)/((Dwell-DCOD)^Nmadc*MW))))^(1/(2- Nmadc))', scope);
    scope = { Kmahwdp: s.Kmahwdp, Nmahwdp: s.Nmahwdp, Dwell: s.Dwell, HWDPOD: s.HWDPOD, MW: s.MW };
    s.Vcahwdp = math.eval('((((81600*Kmahwdp*Nmahwdp^0.387)/((Dwell-HWDPOD)^Nmahwdp*MW))))^(1/(2- Nmahwdp))', scope);
    scope = { Kmadpo: s.Kmadpo, Nmadpo: s.Nmadpo, Dwell: s.Dwell, DPOD: s.DPOD, MW: s.MW }
    s.Vcadpo = math.eval('((((81600*Kmadpo*Nmadpo^0.387)/((Dwell-DPOD)^Nmadpo*MW))))^(1/(2- Nmadpo))', scope);
    scope = { Kmadpc: s.Kmadpc, Nmadpc: s.Nmadpc, CasID: s.CasID, DPOD: s.DPOD, MW: s.MW };
    s.Vcadpc = math.eval('((((81600*Kmadpc*Nmadpc^0.387)/((CasID-DPOD)^Nmadpc*MW))))^(1/(2- Nmadpc))', scope);
    scope = { Dwell: s.Dwell, DCOD: s.DCOD, Nmadc: s.Nmadc, Vadc: s.Vadc, MW: s.MW, Kmadc: s.Kmadc, Nmadc: s.Nmadc };
    s.Zadc = math.eval('(((Dwell-DCOD)^Nmadc*Vadc^(2- Nmadc)*MW)/(Kmadc*102*Nmadc^0.387))', scope);
    scope = { Dwell: s.Dwell, HWDPOD: s.HWDPOD, Nmahwdp: s.Nmahwdp, Vahwdp: s.Vahwdp, MW: s.MW, Kmahwdp: s.Kmahwdp };
    s.Zahwdp = math.eval('(((Dwell-HWDPOD)^Nmahwdp*Vahwdp^(2- Nmahwdp)*MW)/(Kmahwdp*102*Nmahwdp^0.387))', scope);
    scope = { Dwell: s.Dwell, DPOD: s.DPOD, Nmadpo: s.Nmadpo, Vadpo: s.Vadpo, MW: s.MW, Kmadpo: s.Kmadpo };
    s.Zadpo = math.eval('(((Dwell-DPOD)^Nmadpo*Vadpo^(2- Nmadpo)*MW)/(Kmadpo*102*Nmadpo^0.387))', scope);
    scope = { CasID: s.CasID, DCOD: s.DCOD, Nmadpc: s.Nmadpc, Vadpc: s.Vadpc, MW: s.MW, Kmadpc: s.Kmadpc };
    s.Zadpc = math.eval('(((CasID-DCOD)^Nmadpc*Vadpc^(2- Nmadpc)*MW)/(Kmadpc*102*Nmadpc^0.387))', scope);

    //Вид потока If(Zadc<800; “Laminar”;”Turbulent”)
    if (s.Zadc < 800) {
        kLadc = s.Kmadc * Math.pow(s.SRaDC, s.Nmadc);
        kLahwdp = s.Kmahwdp * Math.pow(s.SRaHWDP, s.Nmahwdp);
        kLadpo = s.Kmadpo * Math.pow(s.SRaDPo, s.Nmadpo);
        kLadpc = s.Kmadpc * Math.pow(s.SRaDPc, s.Nmadpc);

        scope = { kLadc: kLadc, Dwell: s.Dwell, DCOD: s.DCOD, DClenght: s.DC_len };
        DCaPLL = math.eval('((3.33*kLadc)/(Dwell-DCOD)*(DClenght/1000))', scope);
        scope = { kLahwdp: kLahwdp, Dwell: s.Dwell, HWDPOD: s.HWDPOD, HWDPlenght: s.HWDP_len };
        HWDPaPL = math.eval('((3.33*kLahwdp)/(Dwell-HWDPOD)*(HWDPlenght/1000))', scope);
        scope = { kLadpo: kLadpo, Dwell: s.Dwell, DPOD: s.DPOD, DPlenght: s.DpLength, CassetMD: s.CassetMD };
        DPaPLLo = math.eval('((3.33*kLadpo)/(Dwell-DPOD)*((DPlenght-CassetMD)/1000))', scope);
        scope = { kLadpc: kLadpc, CasID: s.CasID, DPOD: s.DPOD, CassetMD: s.CassetMD };
        DPaPLLc = math.eval('((3.33*kLadpc)/(CasID-DPOD)*(CassetMD/1000))', scope);
    }

    if (s.Zadc > 800) {
        scope = { Kmadc: s.Kmadc, Nmadc: s.Nmadc, MW: s.MW, Dwell: s.Dwell, DCOD: s.DCOD };
        kT1adc = math.eval('2.4*((81600*Kmadc*Nmadc^0.387)/(MW*(Dwell-DCOD)^2))^(1/(2-Nmadc))', scope);
        scope = { Kmahwdp: s.Kmahwdp, Nmahwdp: s.Nmahwdp, MW: s.MW, Dwell: s.Dwell, HWDPOD: s.HWDPOD };
        kT1ahwdp = math.eval('2.4*((81600*Kmahwdp*Nmahwdp^0.387)/(MW*(Dwell-HWDPOD)^2))^(1/(2-Nmahwdp))', scope);
        scope = { Kmadpo: s.Kmadpo, Nmadpo: s.Nmadpo, MW: s.MW, Dwell: s.Dwell, DPOD: s.DPOD };
        kT1adpo = math.eval('2.4*((81600*Kmadpo*Nmadpo^0.387)/(MW*(Dwell-DPOD)^2))^(1/(2-Nmadpo))', scope);
        scope = { Kmadpc: s.Kmadpc, Nmadpc: s.Nmadpc, MW: s.MW, CasID: s.CasID, DPOD: s.DPOD, Nmadpc: s.Nmadpc };
        kT1adpc = math.eval('2.4*((81600*Kmadpc*Nmadpc^0.387)/(MW*(CasID-DPOD)^2))^(1/(2-Nmadpc))', scope);

        scope = { Nmadc: s.Nmadc, kT1adc: kT1adc };
        kT2adc = math.eval('(1-(Nmadc/4))*kT1adc', scope);
        scope = { Nmahwdp: s.Nmahwdp, kT1ahwdp: kT1ahwdp };
        kT2ahwdp = math.eval('(1-(Nmahwdp/4))*kT1ahwdp', scope);
        scope = { Nmadpo: s.Nmadpo, kT1adpo: kT1adpo };
        kT2adpo = math.eval('(1-(Nmadpo/4))*kT1adpo', scope);
        scope = { Nmadpc: s.Nmadpc, kT1adpc: kT1adpc };
        kT2adpc = math.eval('(1-(Nmadpc/4))*kT1adpc', scope);

        scope = { Nmadc: s.Nmadc };
        kT3adc = math.eval('1.7*Nmadc^0.2', scope);
        scope = { Nmahwdp: s.Nmahwdp };
        kT3ahwdp = math.eval('1.7*Nmahwdp^0.2', scope);
        scope = { Nmadpo: s.Nmadpo };
        kT3adpo = math.eval('1.7*Nmadpo^0.2', scope);
        scope = { Nmadpc: s.Nmadpc };
        kT3adpc = math.eval('1.7*Nmadpc^0.2', scope)

        scope = { Kmadc: s.Kmadc, kT2adc: kT2adc, Nmadc: s.Nmadc, kT3adc: kT3adc };
        kT4adc = math.eval('Kmadc*kT2adc^(Nmadc-kT3adc)', scope);
        scope = { Kmahwdp: s.Kmahwdp, kT2ahwdp: kT2ahwdp, Nmahwdp: s.Nmahwdp, kT3ahwdp: kT3ahwdp };
        kT4ahwdp = math.eval('Kmahwdp*kT2ahwdp^(Nmahwdp-kT3ahwdp)', scope)
        scope = { Kmadpo: s.Kmadpo, kT2adpo: kT2adpo, Nmadpo: s.Nmadpo, kT3adpo: kT3adpo };
        kT4adpo = math.eval('Kmadpo*kT2adpo^(Nmadpo-kT3adpo)', scope)
        scope = { Kmadpc: s.Kmadpc, kT2adpc: kT2adpc, Nmadpc: s.Nmadpc, kT3adpc: kT3adpc };
        kT4adpc = math.eval('Kmadpc*kT2adpc^(Nmadpc-kT3adpc)', scope);

        scope = { kT4adc: kT4adc, SRaDC: s.SRaDC, kT3adc: kT3adc };
        kT5adc = math.eval('kT4adc* SRaDC^ kT3adc', scope);
        scope = { kT4ahwdp: kT4ahwdp, SRaHWDP: s.SRaHWDP, kT3ahwdp: kT3ahwdp };
        kT5ahwdp = math.eval('kT4ahwdp* SRaHWDP^ kT3ahwdp', scope);
        scope = { kT4adpo: kT4adpo, SRaDPo: s.SRaDPo, kT3adpo: kT3adpo };
        kT5adpo = math.eval('kT4adpo* SRaDPo^ kT3adpo', scope);
        scope = { kT4adpc: kT4adpc, SRaDPc: s.SRaDPc, kT3adpc: kT3adpc };
        kT5adpc = math.eval('kT4adpc* SRaDPc^ kT3adpc', scope);

        scope = { kT5adc: kT5adc, Dwell: s.Dwell, DCOD: s.DCOD, DClenght: s.DC_len };
        s.DCaPLT = math.eval('((3.33* kT5adc)/(Dwell-DCOD)*(DClenght/1000))', scope);
        scope = { kT5ahwdp: kT5ahwdp, Dwell: s.Dwell, HWDPOD: s.HWDPOD, HWDPlenght: s.HWDP_len };
        s.HWDPaPLT = math.eval('((3.33* kT5ahwdp)/(Dwell-HWDPOD)*(HWDPlenght/1000))', scope);
        scope = { kT5adpo: kT5adpo, Dwell: s.Dwell, DPOD: s.DPOD, DPlenght: s.DpLength, CassetMD: s.CassetMD };
        s.DPaPLTo = math.eval('((3.33* kT5adpo)/(Dwell-DPOD)*(( DPlenght-CassetMD)/1000))', scope);
        scope = { kT5adpc: kT5adpc, CasID: s.CasID, DPOD: s.DPOD, CassetMD: s.CassetMD };
        s.DPaPLTc = math.eval('((3.33* kT5adpc)/(CasID-DPOD)*(CassetMD/1000))', scope);
    }
    s.DCaPL = s.Zadc < 800 ? DCaPLL : s.DCaPLT;
    s.HWDPaPL = s.Zahwdp < 800 ? HWDPaPLL : s.HWDPaPLT;
    s.DPaPLo = s.Zadpo < 800 ? DPaPLLo : s.DPaPLTo;
    s.DPaPLc = s.Zadpc < 800 ? DPaPLLc : s.DPaPLTc;
    s.APL = s.DCaPL + s.HWDPaPL + s.DPaPLo + s.DPaPLc;
    s.BHPd = s.APL + s.HPml; // bhpds.push(bhpd);

    scope = { MW: s.MW, POgpm: s.POgpm, PV: s.PV };
    s.Ki1 = math.eval('0.000077*MW^0.8*POgpm^1.8*PV^0.2', scope)
    var KHID = getKHID(), KHL = getKHL();
    scope = { Ki1: s.Ki1, KHID: KHID, KHL: KHL };
    s.SPL = math.eval('Ki1/(KHID^4.8)*KHL', scope);
    scope = { Ki1: s.Ki1, DPID: s.DPID, DPlength: s.DpLength, DPtjD: s.DPID };
    s.DPiPL = math.eval('(Ki1 / (DPID ^ 4.8) * DPlength * 0.92) + (Ki1 / (DPtjD ^ 4.8) * DPlength * 0.08)', scope);
    scope = { Ki1: s.Ki1, HWDPID: s.HWDPID, HWDPlength: s.HWDP_len, HWDPtjD: s.HWDPID };
    s.HWDPiPL = math.eval('(Ki1 / (HWDPID ^ 4.8) * HWDPlength * 0.87) + (Ki1 / (HWDPtjD ^ 4.8) * HWDPlength * 0.08)', scope);
    scope = { Ki1: s.Ki1, DCID: s.DCID, DClength: s.DC_len };
    s.DCiPL = math.eval('(Ki1 / (DCID ^ 4.8) * DClength)', scope);
    s.DSiPL = s.DPiPL + s.HWDPiPL + s.DCiPL;
    DPP = (s.SPL + s.APL + s.DSiPL + s.BPL) / 14.45;
    set_dpp_display_value(DPP);
}

function open_chpos() {

}

function close_chpos() {

}


// Davlenie na stoyake, precalculations
function do_precalculations() {
    constants.pops = (Math.pow(s.Liner, 2) * s.Stroke * s.Eff) / 98;
    constants.pops2 = (Math.pow(s.Liner2, 2) * s.Stroke2 * s.Eff2) / 98;
    console.log("POps val: " + constants.pops);
    // summarnaya ploshad' nasadok dolota
    for (var i = 0; i < s.Nozzle_num; i++) {
        constants.An += 16 * 16;
    }
    constants.An *= 0.000767;
    ChPos = $('.panel_left_right_part2_indicator_text').html();
    console.log("An val: " + constants.An);

    s.HPml = s.MD * s.MW * 0.052;

    s.DPV = (Math.pow(s.DPID, 2) / 2.28) * s.DpLength;
    s.HWDPV = (Math.pow(s.HWDPID, 2) / 2.28) * s.HWDP_len;
    s.DCV = (Math.pow(s.DCID, 2) / 2.28) * s.DC_len;
    s.DSV = s.DPV + s.HWDPV + s.DCV;
    // Volume Kolcevoe prostranstvo
    s.DCaV = ((Math.pow(s.Dwell, 2) - Math.pow(s.DCOD, 2)) / 24.51) * s.DC_len;
    s.HWDPaV = ((Math.pow(s.Dwell, 2) - Math.pow(s.HWDPOD, 2)) / 24.51) * s.HWDP_len;
    s.DPaoV = ((Math.pow(s.Dwell, 2) - Math.pow(s.DPOD, 2)) / 24.51) * (s.BitPos - s.CassetMD - s.DC_len - s.HWDP_len);
    s.DPacV = ((Math.pow(s.CasID, 2) - Math.pow(s.DPOD, 2)) / 24.51) * s.CassetMD;
    aV = s.DCaV + s.HWDPaV + s.DPaoV + s.DPacV;
    // Udelniy ob'em trub
    s.DPcap = Math.pow(s.DPID, 2) / 24.53;
    s.HWDPcap = Math.pow(s.HWDPID, 2) / 24.53;
    s.DCcap = Math.pow(s.DCID, 2) / 24.53;
    // Udelniy ob'em v kp
    s.DCAcap = ((Math.pow(s.Dwell, 2) - Math.pow(s.DCOD, 2)) / 24.53);
    console.log("DCAcap val: " + s.DCAcap);
    s.HWDPAccap = ((Math.pow(s.Dwell, 2) - Math.pow(s.HWDPOD, 2)) / 24.53);
    s.DPAocap = ((Math.pow(s.Dwell, 2) - Math.pow(s.DPOD, 2)) / 24.53);
    s.DPAccap = ((Math.pow(s.CasID, 2) - Math.pow(s.DPOD, 2)) / 24.53);
    console.log("DPAccap: " + s.DPAccap);
    console.log("An val: " + constants.An);
    // override np last excel file constants
    /*
    var temp = ((s.PV + s.YP) + s.PV) / (s.PV + s.YP);
    constants.np = 3.32 * Math.log10(temp);
    constants.Kp = ((s.PV + s.YP) + s.PV) / (Math.pow(1022, constants.np));
    constants.T170 = constants.Kp * Math.pow(170, constants.np);
    constants.na = 0.657 * Math.log10(constants.T170 / s.O3);
    constants.Ka = constants.T170 / Math.pow(170, constants.na);
    */
    // precalculations, indexy potoka // TO PROCEED
    constants.N_med = 3.32 * Math.log10(((s.PV + s.YP) + s.PV) / (s.PV + s.YP));
    constants.K_med = ((s.PV + s.YP) + s.PV) / (Math.pow(1022, constants.N_med));
    constants.T170 = constants.K_med * (Math.pow(170, constants.N_med));
    constants.N_low = 0.657 * Math.log10(constants.T170 / s.O3);
    constants.K_low = constants.T170 / (Math.pow(170, constants.N_low));
}



//calc every second in preventer handler
function preventer_calculations() {
    var vgi = 0.33 * s.Vmi;
    tp += 1;

    var vgi = 0.33 * s.Vmi;

    s.Vmap = s.Pmrt * tp;
    s.Vma = (s.Vmi - s.VCls1) + s.Vmap;
    s.Vga = (vgi + s.VCls1) - s.Vmap;
    s.APMPa = vgi * s.APMPi / s.Vga;
    if (prev_sec % 3 == 0) {
        rotate_pvo_left_metre1_arrow(s.APMPa);
    }
    s.APa = vgi * s.APi / s.Vga;
    // na sApa крутить 3 спидомоетр
    console.log("vmap vma vga: " + s.Vmap + " " + s.Vma + " " + s.Vga);
    console.log("vmi vaL: " + s.Vmi);
    if (s.Vma >= s.Vmi) {
        console.log("STOP PREVENTER TIMER");
        clearInterval(preventer_timer);
    }
    prev_sec++;
}
// drill math end

function calc_pitrange() {
    var low = $('.right_up_range_input').val(); var high = $('.right_down_range_input').val();
    PitVal = s.PitVi - (Math.abs(low) * 1000) / 3.785;
    PitVah = s.PitVi + (Math.abs(high) * 1000) / 3.785;
    console.log("PITVIWKA: " + s.PitVi);
    console.log("PITVAL AND PITVAH: " + PitVal + " " + PitVah);
}

function breakOrRestorPump(pumpID, action) {
    if (action == 'break') {
        $('.pumps_element_icon_' + (parseInt(pumpID, 10) + 7)).attr('src', imagePath + 'instructor_pump_inactive.svg');
        $('.rotor_pump_' + pumpID + '_indicator').css('background-color', '#ff0000').css('border-color', '#ff0000').css('color', '#ffffff');
    } else {
        $('.pumps_element_icon_' + (parseInt(pumpID, 10) + 7)).attr('src', imagePath + 'instructor_pump_active.svg');
        $('.rotor_pump_' + pumpID + '_indicator').css('background-color', 'transparent').css('border-color', '#4d4d4d').css('color', '#4d4d4d');
    }
}

function start_timers() {
    var totalSeconds = 0;
    setInterval(setTime, 1000);

    function setTime() {
        ++totalSeconds;
        var a; var b; var c;
        a = pad(totalSeconds % 60);
        b = pad(parseInt(totalSeconds / 60));
        c = pad(parseInt(totalSeconds / 3600));
        $('.timer_text').html(c + ":" + b + ":" + a);
    }

    function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        }
        else {
            return valString;
        }
    }
}

$(document).ready(function () {

    if (role == "universal") {
        start_timers();
    }
    /*
    space key listener for testing CumMV2, hmva2
    */
    time_handler = setInterval(function () { $('.date_text').html(moment().format('LT')); }, 1 * 1000);
    window.onkeyup = function (e) {
        if (e.keyCode == 32) {
            s.CumMV2 = 1000;
            console.log("%cSpace bar presssed", "color: blue; font-size: 15px;");
            prevMW = s.MW;
            s.MW = 1.40 * 8.345;
            mw_changed = true;
            console.log("cur mw: " + s.MW);
            logger.enableLogger(); console.log("mw changed"); logger.disableLogger();
        }
    }

    if ($('#role').val() == "driller") {
        role = "driller";
    } else if ($('#role').val() == "supervisor") {
        role = "supervisor";
    } else {
        role = "universal";
    }

    if (role == "driller") {
        startLoadingAnimation();
    }

    if (role == "supervisor" || role == "universal") {
        s = null;
    } else {
        s = null;
    }

    //TODO: Modify
    // onclick listener 
    $('.right_apply').click(function () {
        // right_up_range_input LOW // right_down_range_input //  right_apply => classes
        var low = $('.right_up_range_input').val(); var high = $('right_down_range_input').val();
        PitVal = s.PitVi - low * 1000; PitVah = high * 1000 + PiTvi;
    });

    $('.pumps_aqua_level_in_reservior').click(function () {
        prevMW = s.MW;
        s.MW = 1.40 * 8.345;
        mw_changed = true;
        console.log("cur mw: " + s.MW);
    });

    cache_lever_images();
    repaint_window('ready');

    if (role == 'supervisor') {
        changeMenuDiv('3');
    }

    rotate_rotor_area_left_arrow(100);
    rotate_rotor_area_right_arrow(-8);

    $('.lever_head').draggable({
        axis: "y",
        containment: ".brake_back",
    });

    //$('.drill_device_2').setAttribute("transform", "translate(0,500)");  
    //$('.drill_device_2').css({"-webkit-transform":"translate(100px,100px)"});

    var longpress = false;
    var interv;
    var drill_device_2_height = 1.17;
    var hose_2_height = 1.17;
    var drill_device_3_pos = 0;
    var drill_device_4_pos = 0;

    // *** CHANGED FUNCTION
    function move_down() {
        drill_device_2_height -= drill_device_2_height_change_rate;
        hose_2_height -= hose_2_height_change_rate;
        drill_device_3_pos += drill_device_3_pos_change_rate;
        drill_device_4_pos += drill_device_4_pos_change_rate;
        cur_bit_relative_position = (drill_device_4_pos - 18.167500000000025) / (-0.63210000000000475);
        $('.drill_device_2').css({ "-webkit-transform": "scale(1," + drill_device_2_height + ")" });
        $('.hose_2').css({ "-webkit-transform": "scale(1," + hose_2_height + ")" });
        $('.drill_device_3').css({ "-webkit-transform": "translateY(" + drill_device_3_pos + "%" + ")" });
        $('.drill_device_4').css({ "-webkit-transform": "translateY(" + drill_device_4_pos + "%" + ")" });
        // Длина бурильных труб //recalc
        calc_dplen();
        if (pumpIsOn_1 && ($('#regulator_indicator_text').html() != '0')) {
            calculate_pogpm_new();
        }
        if (s.BitPos >= s.MD) {
            is_drilling = true;
            // calculate rop
            s.MD = s.BitPos;
            calculate_rop();
            if (Boolean(fast)) {
                drill_device_2_height_change_rate /= 10;
                hose_2_height_change_rate /= 10;
                drill_device_3_pos_change_rate /= 10;
                drill_device_4_pos_change_rate /= 10;
                fast = 0;
            }
            console.log("DMD VAL: " + dMD);
            deltaBitPos = dMD * 3.281;
            s.BitPos += deltaBitPos;
            s.MD += (dMD * 3.281);
            // recalc dWOB
            dWOB = 5 * dMD;
            s.WOB += dWOB;
            s.DHL = s.SHL - s.WOB;
            // nagruzka i ves
            $('#part_indicator_text1').html((s.WOB.toFixed(3) + "").replace(".", ","));
            $('#part_indicator_text2').html((s.DHL.toFixed(3) + "").replace(".", ","));
        } else { // ne burim fast animation, const dWOB, dSHL, dMD
            is_drilling = false;
            dMD = 0;
            if (!Boolean(fast)) {
                drill_device_2_height_change_rate *= 10;
                hose_2_height_change_rate *= 10;
                drill_device_3_pos_change_rate *= 10;
                drill_device_4_pos_change_rate *= 10;
                fast = 1;
            }
            s.WOB += 0.1;
            if (s.SHL + 0.1 >= 0) {
                s.SHL -= 0.1;
            }
            deltaBitPos = 0.3281;
            s.BitPos += deltaBitPos; // if not >= MD, fut za sek
            $('#part_indicator_text1').html((s.WOB.toFixed(3) + "").replace(".", ","));
            $('#part_indicator_text2').html((s.SHL.toFixed(3) + "").replace(".", ","));
        }
        $("#right_up_part_indicator_text2").html((s.BitPos.toFixed(3) + "").replace(".", ","));
        $("#slugging_right_content_part_4_indicator_text").html((s.BitPos.toFixed(3) + "").replace(".", ","));
        s.Mbit = s.Mbitspf * s.WOB / 10;
        // Krutyashiy moment na dolote
        s.Mtotal = s.Mbit + s.Mvs;
        console.log("Mtotal Mbit Mvs vals: " + s.Mtotal + " " + s.Mbit + " " + s.Mvs);
        $("#part_indicator_text3").html((s.Mtotal.toFixed(3) + "").replace(".", ","));
        console.log("%cBITPOS position: " + s.BitPos + " MD pos: " + s.MD, "background: yellow, color: red");
        // update bitpos in Group = roomName
        socket.server.updateBitPos(s.BitPos, roomName);
    }

    var startTime, endTime;

    $(".descent").on('mousedown', function () {
        startTime = new Date().getTime();
        $(".descent").css("background-color", "#CCCCCC");
        $(".ascent").css("background-color", "#1A1A1A");
        $(".brake_arrow").rotate(180);
        interv = setInterval(function () {
            move_down();
            is_bit_moving = true;
        }, 150);
    });

    $(".descent").on('mouseup', function () {
        endTime = new Date().getTime();
        longpress = (endTime - startTime < 500) ? false : true;
        clearInterval(interv);
        is_bit_moving = false;
    });

    // *** CHANGED FUNCTION
    function move_up() {
        drill_device_2_height += 0.005;
        hose_2_height += 0.005;
        drill_device_3_pos -= 0.815;
        drill_device_4_pos -= 0.1075;
        cur_bit_relative_position = (drill_device_4_pos - 18.167500000000025) / (-0.63210000000000475);
        $('.drill_device_2').css({ "-webkit-transform": "scale(1," + drill_device_2_height + ")" });
        $('.hose_2').css({ "-webkit-transform": "scale(1," + hose_2_height + ")" });
        $('.drill_device_3').css({ "-webkit-transform": "translateY(" + drill_device_3_pos + "%" + ")" });
        $('.drill_device_4').css({ "-webkit-transform": "translateY(" + drill_device_4_pos + "%" + ")" });
        s.BitPos -= 0.3281;
        // Длина бурильных труб // recalc
        calc_dplen();
        calc_shl();
        if (pumpIsOn_1 && ($('#regulator_indicator_text').html() != '0')) {
            calculate_pogpm_new();
        }
        s.WOB = 0;
        $('#part_indicator_text1').html((s.WOB.toFixed(3) + "").replace(".", ","));
        $('#part_indicator_text2').html((s.SHL.toFixed(3) + "").replace(".", ","));
        $("#right_up_part_indicator_text2").html((s.BitPos.toFixed(3) + "").replace(".", ","));
        s.Mbit = s.Mbitspf * s.WOB / 10;
        // krutyashiy moment na dolote
        s.Mtotal = s.Mbit + s.Mvs;
        $("#part_indicator_text3").html((s.Mtotal.toFixed(3) + "").replace(".", ","));
    }

    var startTime, endTime;

    $(".ascent").on('mousedown', function () {
        startTime = new Date().getTime();
        $(".descent").css("background-color", "#1A1A1A");
        $(".ascent").css("background-color", "#CCCCCC");
        $(".brake_arrow").rotate(0);
        interv = setInterval(function () {
            move_up();
            is_bit_moving = true;
        }, 150);
    });

    $(".ascent").on('mouseup', function () {
        endTime = new Date().getTime();
        longpress = (endTime - startTime < 500) ? false : true;
        clearInterval(interv);
        is_bit_moving = false;
    });


    $(".left_ranges").click(function () {
        if (left_metre_on_off == 1) {
            $('.left_metre,.left_ranges,.left_restart').css({
                display: 'none'
            });
            $('.left_ranges_settings').css({
                display: 'block'
            });
        }
    });

    $(".right_ranges").click(function () {
        if (right_metre_on_off == 1) {
            $('.right_metre,.right_ranges,.right_restart').css({
                display: 'none'
            });
            $('.right_ranges_settings').css({
                display: 'block'
            });
        }
    });

    $(".left_cancel").click(function () {
        $('.left_metre,.left_ranges').css({
            display: 'block'
        });
        $('.left_restart').css({
            display: 'table'
        });
        $('.left_ranges_settings').css({
            display: 'none'
        });
    });

    $(".right_cancel").click(function () {
        $('.right_metre,.right_ranges').css({
            display: 'block'
        });
        $('.right_restart').css({
            display: 'table'
        });
        $('.right_ranges_settings').css({
            display: 'none'
        });
    });



    jQuery(".left_up_range_input,.left_down_range_input,.right_up_range_input,.right_down_range_input").keydown(function (event) {
        // Allow: backspace, delete, tab, escape, enter and .

        if (($(this).attr('class') == 'right_up_range_input') || ($(this).attr('class') == 'right_down_range_input')) {
            if (event.keyCode == 109 || event.keyCode == 189 || event.keyCode == 173) return;
        }

        if (jQuery.inArray(event.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
            // Allow: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Allow: home, end, left, right
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        else {
            // Ensure that it is a number and stop the keypress
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }


    });


    $(".left_apply").click(function () {

        $('.left_metre,.left_ranges').css({
            display: 'block'
        });
        $('.left_restart').css({
            display: 'table'
        });
        $('.left_ranges_settings').css({
            display: 'none'
        });

        $('#left_up_range_text').text($('.left_down_range_input').val());
        $('#left_down_range_text').text($('.left_up_range_input').val());

        draw_left_range($('.left_up_range_input').val(), $('.left_down_range_input').val());

    });

    $(".right_apply").click(function () {
        $('.right_metre,.right_ranges').css({
            display: 'block'
        });
        $('.right_restart').css({
            display: 'table'
        });
        $('.right_ranges_settings').css({
            display: 'none'
        });

        $('#right_up_range_text').text($('.right_down_range_input').val());
        $('#right_down_range_text').text($('.right_up_range_input').val());

        draw_right_range($('.right_up_range_input').val(), $('.right_down_range_input').val());


    });

    $(".left_restart").click(function () {
        if (left_metre_on_off == 1) {
            var vis = d3.select("#left_range");
            vis.selectAll("*").remove();
            rotate_rotor_area_left_arrow(0);
            $(".left_metre").css("background-image", "url(" + imagePath + "left_metre_1_off.svg)");
            $(".left_metre_switch").text("ВЫКЛ").css("background-color", "#2D2D32").css("color", "#808080");
            $(".left_ranges").css("cursor", "default");
            left_metre_on_off = 0;
        } else {
            draw_left_range($('#left_up_range_text').text(), $('#left_down_range_text').text());
            $(".left_metre").css("background-image", "url(" + imagePath + "left_metre_1.svg)");
            $(".left_metre_switch").text("ВКЛ").css("background-color", "#CCCCCC").css("color", "#232328");
            $(".left_ranges").css("cursor", "pointer");
            left_metre_on_off = 1;
        }
    });

    $(".right_restart").click(function () {
        if (right_metre_on_off == 1) {
            var vis = d3.select("#right_range");
            vis.selectAll("*").remove();
            rotate_rotor_area_right_arrow(0);
            $(".right_metre").css("background-image", "url(" + imagePath + "right_metre_1_off.svg)");
            $(".right_metre_switch").text("ВЫКЛ").css("background-color", "#2D2D32").css("color", "#808080");
            $(".right_ranges").css("cursor", "default");
            right_metre_on_off = 0;
        } else {
            draw_right_range($('#right_up_range_text').text(), $('#right_down_range_text').text());
            $(".right_metre").css("background-image", "url(" + imagePath + "right_metre_1.svg)");
            $(".right_metre_switch").text("ВКЛ").css("background-color", "#CCCCCC").css("color", "#232328");
            $(".right_ranges").css("cursor", "pointer");
            right_metre_on_off = 1;
        }
    });



    $("#pump_regulator_turning").click(function () {
        if (pumpIsOn_1 == 1) {
            $(".slider_regulator").css("display", "block");
            isSlider_1_active = 1;
            drawSlider();
        }
    });

    $("#pump_regulator_turning_1").click(function () {
        if (pumpIsOn_2 == 1) {
            $(".slider_regulator_1").css("display", "block");
            isSlider_2_active = 1;
            drawSlider_1();
        }
    });

    $("#pump_regulator_turning_2").click(function () {
        if (rotorIsOn == 1) {
            $(".slider_regulator_2").css("display", "block");
            isSlider_3_active = 1;
            drawSlider_2();
        }
    });

    $("#on_green_1,.panel_left_left_pump_part2_on_green_1").click(function () {
        if (pumpIsOn_1 == 1) {
            $("#on_green_1").animate({
                "top": "62%",
                "background-color": "#BA0000"
            }, 700);
            $(".panel_left_left_pump_part2_on_green_1").animate({
                "top": "59%",
                "background-color": "#BA0000"
            }, 700);
            pumpIsOn_1 = 0;
            obs.spm = 0;
            calculate_pogpm_new();
            $('#pump_on_text,#pump_on_text_3').css("color", "#666666");
            $('#pump_off_text,#pump_off_text_3').css("color", "#b3b3b3");
            $("#pump_regulator,.panel_left_left_pump_part2").css("background-image", "url(" + imagePath + "pump_regulator_off.svg)");
            $("#regulator_indicator_background").css("background-image", "url(" + imagePath + "regulator_indicator_background_off.svg)");
            $(".panel_left_left_pump_part2_indicator_div").css("background-image", "url(" + imagePath + "panel_left_left_pump_part2_indicator.svg)");
            $('#regulator_indicator_unit,.panel_left_left_pump_part2_indicator_text').css("color", "#4D4D4D");
        } else {
            $("#on_green_1").animate({ // vklyu4enie nasosa
                "top": "14%",
                "background-color": "#009933"
            }, 700);
            $(".panel_left_left_pump_part2_on_green_1").animate({
                "top": "18.5%",
                "background-color": "#009933"
            }, 700);
            obs.spm = $('#regulator_indicator_text').html();
            pumpIsOn_1 = 1;
            calculate_pogpm_new();
            // take value into spm, count POGPM
            $('#pump_on_text,#pump_on_text_3').css("color", "#b3b3b3");
            $('#pump_off_text,#pump_off_text_3').css("color", "#666666");
            $("#pump_regulator,.panel_left_left_pump_part2").css("background-image", "url(" + imagePath + "pump_regulator_active.svg)");
            $("#regulator_indicator_background").css("background-image", "url(" + imagePath + "regulator_indicator_background.svg)");
            $(".panel_left_left_pump_part2_indicator_div").css("background-image", "url(" + imagePath + "panel_left_left_pump_part2_indicator_on.svg)");
            $('#regulator_indicator_unit').css("color", "#808080");
            $('.panel_left_left_pump_part2_indicator_text').css("color", "#999999");
        }
    });

    // 2nd pump
    $("#on_green_2,.panel_left_left_pump_part3_on_green_2").click(function () {
        if (pumpIsOn_2 == 1) {
            $("#on_green_2").animate({
                "top": "62%",
                "background-color": "red"
            }, 700);
            pumpIsOn_2 = 0;
            calculate_pogpm_new();
            $(".panel_left_left_pump_part3_on_green_2").animate({
                "top": "59%",
                "background-color": "#BA0000"
            }, 700);
            $('#pump_on_text_1,#pump_on_text_4').css("color", "#666666");
            $('#pump_off_text_1,#pump_off_text_4').css("color", "#b3b3b3");
            $("#pump_regulator_1,.panel_left_left_pump_part3").css("background-image", "url(" + imagePath + "pump_regulator_off.svg)");
            $("#regulator_indicator_background_1").css("background-image", "url(" + imagePath + "regulator_indicator_background_off.svg)");
            $('#regulator_indicator_unit_1,.panel_left_left_pump_part3_indicator_text').css("color", "#4D4D4D");
            $(".panel_left_left_pump_part3_indicator_div").css("background-image", "url(" + imagePath + "panel_left_left_pump_part2_indicator.svg)");
        } else {
            $("#on_green_2").animate({
                "top": "14%",
                "background-color": "#009933"
            }, 700);
            pumpIsOn_2 = 1;
            $(".panel_left_left_pump_part3_on_green_2").animate({
                "top": "18.5%",
                "background-color": "#009933"
            }, 700);
            calculate_pogpm_new();
            $('#pump_on_text_1,#pump_on_text_4').css("color", "#b3b3b3");
            $('#pump_off_text_1,#pump_off_text_4').css("color", "#666666");
            $("#pump_regulator_1,.panel_left_left_pump_part3").css("background-image", "url(" + imagePath + "pump_regulator_active.svg)");
            $("#regulator_indicator_background_1").css("background-image", "url(" + imagePath + "regulator_indicator_background.svg)");
            $('#regulator_indicator_unit_1').css("color", "#808080");
            $(".panel_left_left_pump_part3_indicator_div").css("background-image", "url(" + imagePath + "panel_left_left_pump_part2_indicator_on.svg)");
            $('.panel_left_left_pump_part3_indicator_text').css("color", "#999999");
        }
    });

    // *** CHANGED FUNCTION ROTOR VAL TO 0
    $("#on_green_3").click(function () {
        if (rotorIsOn == 1) {
            repaintRotor(0);
            $("#on_green_3").animate({
                "top": "62%",
                "background-color": "red"
            }, 700);
            rotorIsOn = 0;
            obs.rpm = 0;
            $('#pump_on_text_2').css("color", "#666666");
            $('#pump_off_text_2').css("color", "#b3b3b3");
            $("#pump_regulator_rotor").css("background-image", "url" + imagePath + "pump_regulator_off_rotor.svg)");
            $("#regulator_indicator_background_2").css("background-image", "url" + imagePath + "regulator_indicator_background_off.svg)");
            $('#regulator_indicator_unit_2').css("color", "#4D4D4D");
        } else {
            repaintRotor(1);
            $("#on_green_3").animate({
                "top": "14%",
                "background-color": "#009933"
            }, 700);
            rotorIsOn = 1;
            $('#pump_on_text_2').css("color", "#b3b3b3");
            $('#pump_off_text_2').css("color", "#666666");
            $("#pump_regulator_rotor").css("background-image", "url" + imagePath + "pump_regulator_active_rotor.svg)");
            $("#regulator_indicator_background_2").css("background-image", "url" + imagePath + "regulator_indicator_background.svg)");
            $('#regulator_indicator_unit_2').css("color", "#808080");
        }
    });

    //slugging & menu
    $("#menu-" + current_menu_id).find('.unselected').css("display", "block");

    $("#menu-1,#menu-2,#menu-3,#menu-4,#menu-5,#menu-6").click(function () {
        changeMenuDiv($(this).attr('id').substr($(this).attr('id').length - 1));
    });

    $("#fil8-1,#fil1").click(function () {
        if (!slugging_switcher_1) {
            $(".fil4-1,.fil2-1").css("fill", "#B3B3B3");
            $(".str2-1").css("stroke", "#B3B3B3");
            $(".fil9-1").css("fill", "#333333");
            $("#fil8-1").css("fill", "#33CC33");
            slugging_switcher_1 = 1;
        } else {
            $(".fil4-1,.fil2-1").css("fill", "#666666");
            $(".str2-1").css("stroke", "#666666");
            $(".fil9-1").css("fill", "#CCCCCC");
            $("#fil8-1").css("fill", "#FF0000");
            slugging_switcher_1 = 0;
        }
    });

    $("#fil5-2,#fil1-2").click(function () {
        if (!slugging_switcher_2) {
            $(".fil4-2,.fil6-2,.fil2-2").css("fill", "#B3B3B3");
            $(".str1-2").css("stroke", "#B3B3B3");
            $(".fil7-2").css("fill", "#333333");
            $("#fil5-2").css("fill", "#33CC33");
            slugging_switcher_2 = 1;
        } else {
            $(".fil4-2,.fil6-2,.fil2-2").css("fill", "#666666");
            $(".str1-2").css("stroke", "#666666");
            $(".fil7-2").css("fill", "#CCCCCC");
            $("#fil5-2").css("fill", "#FF0000");
            slugging_switcher_2 = 0;
        }
    });


    $("#fil5-3,#fil1-3").click(function () {
        // if(slugging_switcher_1==1 || slugging_switcher_2==1){ 
        if (!slugging_switcher_3) {
            $(".fil2-3,.fil6-3").css("fill", "#B3B3B3");
            $("#fil5-3").css("fill", "#33CC33");
            slugging_switcher_3 = 1;
        } else {
            $(".fil2-3,.fil6-3").css("fill", "#666666");
            $("#fil5-3").css("fill", "#FF0000");
            slugging_switcher_3 = 0;
        }
        /* if(slugging_switcher_1==1){ 
        $(".fil6-2").css("fill","#B3B3B3"); 
        $(".fil7-2").css("fill","#333333"); 
        } 
        if(slugging_switcher_2==1){ 
        $(".fil2-1").css("fill","#B3B3B3"); 
        $(".fil9-1").css("fill","#333333"); 
        } 
        */ // } 

    });



    $("#fil5-4,#fil1-4").click(function () {
        if (!slugging_switcher_4) {
            $(".fil2-4,.fil6-4,.fil4-4").css("fill", "#B3B3B3");
            $(".str1-4").css("stroke", "#B3B3B3");
            $("#fil5-4").css("fill", "#33CC33");
            slugging_switcher_4 = 1;
        } else {
            $(".fil2-4,.fil6-4,.fil4-4").css("fill", "#666666");
            $(".str1-4").css("stroke", "#666666");
            $("#fil5-4").css("fill", "#FF0000");
            slugging_switcher_4 = 0;
        }
    });

    $("#fil5-5,#fil1-5").click(function () {
        if (!slugging_switcher_5) {
            $(".fil2-5,.fil4-5").css("fill", "#B3B3B3");
            $(".str1-5").css("stroke", "#B3B3B3");
            $("#fil5-5").css("fill", "#33CC33");
            slugging_switcher_5 = 1;
        } else {
            $(".fil2-5,.fil4-5").css("fill", "#666666");
            $(".str1-5").css("stroke", "#666666");
            $("#fil5-5").css("fill", "#FF0000");
            slugging_switcher_5 = 0;
        }
    });

    change_slugging_level_of_auqa_in_pipe(70);
    change_slugging_level_of_auqa_in_reservoir(80);

    //end




    //panels

    rotate_supervisor_panel_left_metre_arrow(170);
    rotate_supervisor_panel_right_metre1_arrow(150);
    rotate_supervisor_panel_right_metre2_arrow(0.5);

    $(".panel_left_right_pump_part3_regulator_turning").click(function () {
        $(".slider_regulator_3").css("display", "block");
        drawSlider_3();
    });

    //end

    /*28.03.2016*/

    var target = $('.panel_left_middle_bottom_regulator_div')

    $('.panel_left_middle_bottom_regulator_head').mousedown(function (e) {
        e.preventDefault();
        dragging_panel_left_middle_bottom_regulator_head = true;
    });

    $(document).mouseup(function (e) {
        if (dragging_panel_left_middle_bottom_regulator_head == true) {
            var defaultDegree = ((-1.5655738700138055 * (180 / Math.PI) * -1) - 90) * -1;
            target.css('-moz-transform', 'rotate(' + defaultDegree + 'deg)');
            target.css('-webkit-transform', 'rotate(' + defaultDegree + 'deg)');
            target.css('-o-transform', 'rotate(' + defaultDegree + 'deg)');
            target.css('-ms-transform', 'rotate(' + defaultDegree + 'deg)');
            target.css('-transform', 'rotate(' + defaultDegree + 'deg)');
            dragging_panel_left_middle_bottom_regulator_head = false;
        }
        if (lever_head_dragging == true) {
            lever_head_dragging = false;
        }
    });

    $(document).mousemove(function (e) {
        if (dragging_panel_left_middle_bottom_regulator_head) {
            var mouse_x = e.pageX;
            var mouse_y = e.pageY;
            var radians = Math.atan2(mouse_y - $('.wrapper').height() * 0.8553, mouse_x - $('.wrapper').width() * 0.4289);
            var degree = ((radians * (180 / Math.PI) * -1) - 90) * -1;
            if (radians >= -2.0689718614556813 && radians <= -1.0621758785719297) {
                target.css('-moz-transform', 'rotate(' + degree + 'deg)');
                target.css('-webkit-transform', 'rotate(' + degree + 'deg)');
                target.css('-o-transform', 'rotate(' + degree + 'deg)');
                target.css('-ms-transform', 'rotate(' + degree + 'deg)');
                target.css('-transform', 'rotate(' + degree + 'deg)');
            }

        }
    })

    /*28.03.2016*/


    /*29.03.2016*/

    //rotate_pvo_left_metre1_arrow(0);
    rotate_pvo_right_metre1_arrow(200);
    rotate_pvo_right_metre2_arrow(40);



    $(".pvo_left_right_bottom_ellipse_switcher").click(function () {
        if (pvo_left_right_bottom_ellipse_switcher_is_on == 0) {
            $(this).animate({
                "left": "55%",
                "background-color": "#009933"
            }, 700);
            pvo_left_right_bottom_ellipse_switcher_is_on = 1;
        } else {
            $(this).animate({
                "left": "32%",
                "background-color": "#FF00000"
            }, 700);
            pvo_left_right_bottom_ellipse_switcher_is_on = 0;
        }
    });


    $("#pvo_equipment_switcher_1,#pvo_equipment_switcher_2,#pvo_equipment_switcher_3,#pvo_equipment_switcher_4,#pvo_equipment_switcher_5,#pvo_equipment_switcher_6").click(function () {
        var index = $(this).attr('id').substr($(this).attr('id').length - 1);
        if (index >= 1 && index <= 4 && pvo_clickable) {
            if (pvo_switchers[index] == 0) {
                $(this).animate({
                    "left": "52.15%",
                    "background-color": "#009933"
                }, 700);
                $('.pvo_fil0-' + index + '').css("fill", "#B3B3B3");
                $('.pvo_fil2-' + index + ',.pvo_fil4-' + index + '').css("fill", "#2D2D32");
                $('.pvo_fil2-' + index + '-1').css("fill", "#666666");

                pvo_switchers[index] = 1;
                pvo_clickable = false;
            } else {
                $(this).animate({
                    "left": "42.8%",
                    "background-color": "#FF00000"
                }, 700);

                $('.pvo_fil0-' + index + '').css("fill", "#666666");
                $('.pvo_fil2-' + index + ',.pvo_fil2-' + index + '-1').css("fill", "#E6E6E6");
                $('.pvo_fil4-' + index + '').css("fill", "#999999");

                pvo_switchers[index] = 0;
                pvo_clickable = false;
                // TODO: calc-s: zakrytie preventora
                if (index == 1) {
                    console.log("closing preventer: ");
                    // influx volume tcbop starting
                    tcbop_timer = setInterval(tcbop_calculations, 1000);
                    s.Vma = s.Vmi - s.VCls1;
                    // take vgi as 20% of 946, vgi = 0.2 * s.Vmi
                    // temporary var VGI
                    var vgi = 0.33 * s.Vmi;
                    s.Vga = vgi + s.VCls1;
                    console.log("s.Vma: " + s.Vma + " : " + "s.Vga: " + s.Vga);
                    s.APMPa = vgi * s.APMPi / s.Vga;
                    rotate_pvo_left_metre1_arrow(s.APMPa);
                    s.APa = vgi * s.APi / s.Vga;
                    console.log("APMPa and APa: " + s.APMPa + "  " + s.APa);
                    if (s.APa < s.APi && s.APMPa < s.APMPi) {
                        // starting pump //terminate thread inside method
                        preventer_timer = setInterval(preventer_calculations, 1000);
                    }
                }
            }
        } else if (index == 5 && pvo_clickable) {
            if (pvo_switchers[index] == 0) {
                $(this).animate({
                    "left": "17.15%",
                    "background-color": "#009933"
                }, 700);
                alert("CLICKED ME");
                $('.pvo_fil0-' + index + '').css("fill", "#B3B3B3");
                $('.pvo_fil2-' + index + ',.pvo_fil4-' + index + '').css("fill", "#2D2D32");
                $('.pvo_fil2-' + index + '-1').css("fill", "#666666");
                pvo_switchers[index] = 1;
                pvo_clickable = false;
            } else {
                $(this).animate({
                    "left": "7.8%",
                    "background-color": "#FF00000"
                }, 700);
                $('.pvo_fil0-' + index + '').css("fill", "#666666");
                $('.pvo_fil2-' + index + ',.pvo_fil2-' + index + '-1').css("fill", "#E6E6E6");
                $('.pvo_fil4-' + index + '').css("fill", "#999999");
                pvo_switchers[index] = 0;
                pvo_clickable = false;
            }
        } else if (index == 6 && pvo_clickable) {
            if (pvo_switchers[index] == 0) {
                $(this).animate({
                    "left": "87.25%",
                    "background-color": "#009933"
                }, 700);
                $('.pvo_fil0-' + index + '').css("fill", "#B3B3B3");
                $('.pvo_fil2-' + index + ',.pvo_fil4-' + index + '').css("fill", "#2D2D32");
                $('.pvo_fil2-' + index + '-1').css("fill", "#666666");
                pvo_switchers[index] = 1;
                pvo_clickable = false;
                // TODO: calc-s
                s.Vma = (s.Vmi - s.VCls1) + s.Vmap - s.VOpn6;
                // temp var VGI
                var vgi = 0.2 * s.Vmi;
                s.Vga = (vgi + s.VCls1) - s.Vmap + s.VOpn6;
                s.Mpa = vgi * s.MPi / s.Vga;
                s.APa = vgi * s.APi / s.Vga;
                rotate_pvo_left_metre2_arrow(s.Mpa);
                console.log("vga mpa apa: " + s.Vga + " " + s.Mpa + " " + s.APa);
                if (s.APa < s.APi && s.Mpa < s.MPi) {
                    // start pump
                    var tp = 5;
                    s.Vmap = s.Pmrt * tp;
                    s.Vma = (s.Vmi - s.VCls1 - s.VOpn6) + s.Vmap;
                    s.Vga = (vgi + s.VCls1 + s.VOpn6) - s.Vmap;
                    // if vma == vmi (stop pump)
                }
            } else {
                $(this).animate({
                    "left": "77.9%",
                    "background-color": "#FF00000"
                }, 700);
                $('.pvo_fil0-' + index + '').css("fill", "#666666");
                $('.pvo_fil2-' + index + ',.pvo_fil2-' + index + '-1').css("fill", "#E6E6E6");
                $('.pvo_fil4-' + index + '').css("fill", "#999999");
                pvo_switchers[index] = 0;
                pvo_clickable = false;
            }
        }
    });

    /*02.04.2016*/

    rotate_valves_metre_arrows(0.7, 1);
    rotate_valves_metre_arrows(1, 2);
    //$('.left_alert').attr("src", imagePath + "left_alert.svg").css("-webkit-animation", "1s rotate360 infinite linear").css("-moz-animation", "1s rotate360 infinite linear").css("-ms-animation", "1s rotate360 infinite linear").css("animation", "1s rotate360 infinite linear");
    //$('.right_alert').attr("src", imagePath + "left_alert.svg").css("-webkit-animation", "1s rotate360 infinite linear").css("-moz-animation", "1s rotate360 infinite linear").css("-ms-animation", "1s rotate360 infinite linear").css("animation", "1s rotate360 infinite linear");

    $(".valves_metre_element_1,.valves_metre_element_2,.valves_metre_element_3,.valves_metre_element_4,.valves_metre_element_5,.valves_metre_element_6,.valves_metre_element_7,.valves_metre_element_8,.valves_metre_element_9,.valves_metre_element_10,.valves_metre_element_11,.valves_metre_element_12,.valves_metre_element_13,.valves_metre_element_14").click(function () {
        if ($(this).attr('class').length == 22)
            var index = $(this).attr('class').substr($(this).attr('class').length - 1);
        else var index = $(this).attr('class').substr($(this).attr('class').length - 2);
        console.log("index: " + index);
        if (valves_switchers[index] == 0) {
            var valves_color = "#B3B3B3";
            $(this).attr('src', imagePath + 'valves_metre_switcher_on.svg');
            valves_switchers[index] = 1;
        } else {
            var valves_color = "#666666";
            $(this).attr('src', imagePath + 'valves_metre_switcher_off.svg');
            valves_switchers[index] = 0;
        }
        $('.valves_fil-' + index + '').css("fill", valves_color);
        $('.valves_str-' + index + '').css("stroke", valves_color);

        if ((index == 11 || index == 12)) {
            $('.valves_fil-11-12').css("fill", valves_color);
            $('.valves_str-11-12').css("stroke", valves_color);
        }

        if (index == 9 || index == 10 || index == 14) {
            $('.valves_fil-9-10-14').css("fill", valves_color);
        }

        if (index == 13 || index == 14) {
            $('.valves_fil-13-14').css("fill", valves_color);
            $('.valves_str-13-14').css("stroke", valves_color);
        }

        if (index == 5 || index == 6) {
            $('.valves_fil-5-6').css("fill", valves_color);
        }

        if (index == 1 || index == 2 || index == 3) {
            $('.valves_fil-1-2-3').css("fill", valves_color);
            $('.valves_str-1-2-3').css("stroke", valves_color);
            $('.valves_metre_element_15').css("color", valves_color);
        }

        if (index == 11) $('.valves_metre_element_16').css("color", valves_color);

    });


    // new pumps DIV
    $(".pumps_element_switcher_1,.pumps_element_switcher_2,.pumps_element_switcher_3,.pumps_element_switcher_4,.pumps_element_switcher_5,.pumps_element_switcher_6,.pumps_element_switcher_7").click(function () {
        var index = $(this).attr('class').substr($(this).attr('class').length - 1);
        var left = 0;
        var top = 0;
        if (pump_switchers[index] == 0) {
            switch (index) {
                case '1':
                    left = 53.65;
                    break;

                case '2':
                    left = 6.13;
                    break;

                case '3':
                    left = 45.06;
                    break;

                case '4':
                    top = 50.35;
                    break;

                case '5':
                    top = 47.58;
                    break;

                case '6':
                    left = 17.69;
                    break;

                case '7':
                    left = 64.49;
                    break;
            }

            if (index == 4 || index == 5) {
                $(this).animate({
                    "top": top + '%',
                    "background-color": "#009933"
                }, 700);
            } else {
                $(this).animate({
                    "left": left + '%',
                    "background-color": "#009933"
                }, 700);
            }
            pump_switchers[index] = 1;
            $('.pumps_element_icon_' + index + '').attr('src', imagePath + "valves_metre_switcher_on.svg");
            $('.pumps_str-' + index + '').css("stroke", "#B3B3B3");
            $('.pumps_fil-' + index + '').css("fill", "#B3B3B3");
            $('.pumps_fil-' + index + '-off').css("fill", "#666666");
            $('.pumps_fil-' + index + '-on').css("fill", "#E6E6E6");
            if (index == 6 || index == 7) {
                $('.pumps_fil-' + index + '-text').css("fill", "#333333");
            }
        } else {
            switch (index) {
                case '1':
                    left = 50.7;
                    break;

                case '2':
                    left = 3.18;
                    break;

                case '3':
                    left = 42.11;
                    break;

                case '4':
                    top = 55.58;
                    break;

                case '5':
                    top = 52.78;
                    break;

                case '6':
                    left = 14.75;
                    break;

                case '7':
                    left = 61.55;
                    break;
            }

            if (index == 4 || index == 5) {
                $(this).animate({
                    "top": top + '%',
                    "background-color": "#FF0000"
                }, 700);
            } else {
                $(this).animate({
                    "left": left + '%',
                    "background-color": "#FF0000"
                }, 700);
            }
            pump_switchers[index] = 0;
            $('.pumps_element_icon_' + index + '').attr('src', imagePath + "valves_metre_switcher_off.svg");
            $('.pumps_str-' + index + '').css("stroke", "#666666");
            $('.pumps_fil-' + index + '').css("fill", "#666666");
            $('.pumps_fil-' + index + '-off').css("fill", "#E6E6E6");
            $('.pumps_fil-' + index + '-on').css("fill", "#666666");
            if (index == 6 || index == 7) {
                $('.pumps_fil-' + index + '-text').css("fill", "#CCCCCC");
            }
        }
    });

    $('.pumps_aqua_level_in_reservior,.pumps_aqua_level_in_reservior_ranges,.pumps_level_of_aqua_in_reservoir_text').click(function () {
        $('.pumps_elements,.pumps_background').css("opacity", 0.2);
        $('.pumps_elements').css("pointer-events", "none");
        $('.pumps_fil1-reservior').css("fill", "white");
        $('.pumps_aqua_features').css("display", "block");
    });
});

/*02.04.2016*/

/*$(window).bind("resize", function(){
    var width = $(window).width();
    var height = $(window).height();
    if((width/height)<=(16/9)){
        $(".container").width(width).height(width/(16/9));	
    }else $(".container").width(height*(16/9)).height(height);
});*/


$(window).on("fullscreen-on", function () {
    repaint_window('on');

});

$(window).on("fullscreen-off", function () {
    repaint_window('off');
});
