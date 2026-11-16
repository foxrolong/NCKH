(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.')['map'](function (r) {
                        return r['trim']();
                    }), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"xrPanelsEnabled":true,"defaultMenu":["fullscreen","mute","rotation"],"hash": "d8156c8bb25fa7c3bb83d5c47e7b5cc409c89b858cab6ae8088fcb3fb2779638", "definitions": [{"id":"MainViewerModel3DPlayer","class":"Model3DPlayer","viewerArea":"this.MainViewer"},{"progressBarBorderSize":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"toolTipFontColor":"#606060","playbackBarHeadShadowColor":"#000000","vrThumbstickRotationStep":20,"progressBorderRadius":2,"playbackBarHeight":10,"data":{"name":"Main Viewer"},"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesFontFamily":"Arial","playbackBarHeadShadowHorizontalLength":0,"subtitlesTextShadowHorizontalLength":1,"toolTipTextShadowColor":"#000000","playbackBarProgressBorderSize":0,"vrPointerColor":"#FFFFFF","progressLeft":"33%","playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"playbackBarHeadWidth":6,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBorderRadius":0,"toolTipBackgroundColor":"#F6F6F6","toolTipBorderColor":"#767676","firstTransitionDuration":0,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","surfaceReticleColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","toolTipPaddingLeft":6,"class":"ViewerArea","subtitlesTextShadowOpacity":1,"vrPointerSelectionColor":"#FF6600","toolTipPaddingTop":4,"playbackBarHeadShadowVerticalLength":0,"progressBackgroundColorRatios":[0],"playbackBarHeadBorderColor":"#000000","propagateClick":false,"toolTipPaddingBottom":4,"progressRight":"33%","playbackBarHeadBorderRadius":0,"playbackBarBorderSize":0,"id":"MainViewer","subtitlesTop":0,"progressOpacity":0.7,"vrPointerSelectionTime":2000,"subtitlesTextShadowColor":"#000000","progressBarBackgroundColorDirection":"horizontal","subtitlesFontSize":"3vmin","progressBarBackgroundColorRatios":[0],"subtitlesFontColor":"#FFFFFF","progressBarBorderColor":"#000000","toolTipFontSize":"1.11vmin","subtitlesBackgroundOpacity":0.2,"progressBorderColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowVerticalLength":1,"subtitlesBorderColor":"#FFFFFF","playbackBarLeft":0,"playbackBarHeadHeight":15,"minHeight":50,"toolTipPaddingRight":6,"subtitlesBottom":50,"minWidth":100,"toolTipFontFamily":"Arial","progressBackgroundColor":["#000000"],"width":"100%","playbackBarHeadShadow":true,"progressBottom":10,"playbackBarHeadBorderSize":0,"progressBarBackgroundColor":["#3399FF"],"progressHeight":2,"height":"100%","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipShadowColor":"#333138","progressBarBorderRadius":2,"progressBorderSize":0},{"id":"mainPlayList","items":[{"media":"this.model_E9EC20BD_E2EF_8884_41C3_BD4B2B9FD923","end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","class":"Model3DPlayListItem","player":"this.MainViewerModel3DPlayer"}],"class":"PlayList"},{"objects":[],"model":"this.res_E9E830C0_E2EF_88FC_41E7_256C0D2D7BF3","lights":["this.light_E9B6C99E_E2EF_7884_41E0_B4A27CFCCF98"],"surfaceSelectionCoef":2,"backgroundColor":"#333333","id":"model_E9EC20BD_E2EF_8884_41C3_BD4B2B9FD923","surfaceReticleRadius":0.02,"environmentURL":"media/model_E9EC20BD_E2EF_8884_41C3_BD4B2B9FD923/bg_E9B5999F_E2EF_7884_41DD_0CB954BAEFE0.jpg","floorRadius":45.88,"environmentIntensity":0.5,"data":{"showOnlyHotspotsLineSightInPanoramas":true,"keepModel3DLoadedWithoutLocation":true,"panoramaToPanoramaModelTransitionEnabled":true,"showOnlyHotspotsLineSight":true,"label":"G\u1ed0C"},"antialiasingLevel":0.3,"worldUnitToMeters":0.2,"surfaceReticleMaxRadius":50,"camera":"this.cam_E9BD499C_E2EF_7884_41E0_8413B1F6841E","surfaceReticleMinRadius":15,"label":trans('model_E9EC20BD_E2EF_8884_41C3_BD4B2B9FD923.label'),"sphericalHarmonicsMaxDegree":3,"class":"Model3D","thumbnailUrl":"media/model_E9EC20BD_E2EF_8884_41C3_BD4B2B9FD923_t.jpg"},{"levels":[{"class":"Model3DResourceLevel","url":"media/model_E9EC20BD_E2EF_8884_41C3_BD4B2B9FD923/scene.glb"},{"class":"Model3DResourceLevel","url":"media/model_E9EC20BD_E2EF_8884_41C3_BD4B2B9FD923/scene_mobile.glb","tags":"mobile"}],"id":"res_E9E830C0_E2EF_88FC_41E7_256C0D2D7BF3","class":"Model3DResource"},{"id":"light_E9B6C99E_E2EF_7884_41E0_B4A27CFCCF98","class":"AmbientLight","intensity":0.5},{"minZ":-64.14,"autoNearFar":true,"maxY":16.55,"class":"FirstPersonModel3DCamera","initialZ":4.43,"maxZ":73.01,"id":"cam_E9BD499C_E2EF_7884_41E0_8413B1F6841E","vrEnabled":true,"initialX":4.1,"minX":-64.71,"initialY":3.01,"initialPitch":-30,"maxX":72.92,"minY":-2.1}],"children":["this.MainViewer"],"id":"rootPlayer","start":"this.init()","data":{"history":{},"defaultLocale":"en","displayTooltipInTouchScreens":true,"name":"Player428","textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"rate":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"volume":1},"locales":{"en":"locale/en.txt"}},"backgroundColor":["#FFFFFF"],"scrollBarMargin":2,"layout":"absolute","backgroundColorRatios":[0],"scripts":{"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"isPanorama":TDV.Tour.Script.isPanorama,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"clone":TDV.Tour.Script.clone,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"openLink":TDV.Tour.Script.openLink,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"mixObject":TDV.Tour.Script.mixObject,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setValue":TDV.Tour.Script.setValue,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getKey":TDV.Tour.Script.getKey,"initQuiz":TDV.Tour.Script.initQuiz,"getPixels":TDV.Tour.Script.getPixels,"cloneBindings":TDV.Tour.Script.cloneBindings,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"initAnalytics":TDV.Tour.Script.initAnalytics,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMainViewer":TDV.Tour.Script.getMainViewer,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"init":TDV.Tour.Script.init,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"historyGoForward":TDV.Tour.Script.historyGoForward,"historyGoBack":TDV.Tour.Script.historyGoBack,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setMapLocation":TDV.Tour.Script.setMapLocation,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"playAudioList":TDV.Tour.Script.playAudioList,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getComponentByName":TDV.Tour.Script.getComponentByName,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"existsKey":TDV.Tour.Script.existsKey,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"registerKey":TDV.Tour.Script.registerKey,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"toggleVR":TDV.Tour.Script.toggleVR,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"disableVR":TDV.Tour.Script.disableVR,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"showWindowBase":TDV.Tour.Script.showWindowBase,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"createTween":TDV.Tour.Script.createTween,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"executeJS":TDV.Tour.Script.executeJS,"quizFinish":TDV.Tour.Script.quizFinish,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"enableVR":TDV.Tour.Script.enableVR,"showPopupImage":TDV.Tour.Script.showPopupImage,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"downloadFile":TDV.Tour.Script.downloadFile,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"showWindow":TDV.Tour.Script.showWindow,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getOverlays":TDV.Tour.Script.getOverlays,"translate":TDV.Tour.Script.translate,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"resumePlayers":TDV.Tour.Script.resumePlayers,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizStart":TDV.Tour.Script.quizStart,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"shareSocial":TDV.Tour.Script.shareSocial,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"textToSpeech":TDV.Tour.Script.textToSpeech,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setLocale":TDV.Tour.Script.setLocale,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"unloadViewer":TDV.Tour.Script.unloadViewer,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"startMeasurement":TDV.Tour.Script.startMeasurement},"minHeight":0,"minWidth":0,"width":"100%","scrollBarColor":"#000000","gap":10,"class":"Player","height":"100%","propagateClick":false};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.1.2, Mon Nov 16 2026