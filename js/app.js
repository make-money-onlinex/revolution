(window.webpackJsonp = window.webpackJsonp || []).push([
	["theme/default/js/app"], {
		0: function (d, t, e) {
			d.exports = e("brQC")
		},
		BfO1: function (d, t, e) {
			d.exports = e("yNCV")
		},
		NNxN: function (d, t, e) {
			(function (d) {
				! function (d) {
					"use strict";
					var t = {
						url: null,
						values: null,
						method: "POST",
						target: null,
						traditional: !1,
						redirectTop: !1
					};
					d.redirect = function (e, i, n, o, s, r) {
						var a = e;
						if ("object" != typeof e) a = {
							url: e,
							values: i,
							method: n,
							target: o,
							traditional: s,
							redirectTop: r
						};
						var l = d.extend({}, t, a),
							$ = d.redirect.getForm(l.url, l.values, l.method, l.target, l.traditional);
						d("body", l.redirectTop ? window.top.document : void 0).append($.form), $.submit(), $.form.remove()
					}, d.redirect.getForm = function (t, n, o, s, r) {
						o = o && -1 !== ["GET", "POST", "PUT", "DELETE"].indexOf(o.toUpperCase()) ? o.toUpperCase() : "POST";
						var a = (t = t.split("#"))[1] ? "#" + t[1] : "";
						if (t = t[0], !n) {
							var l = d.parseUrl(t);
							t = l.url, n = l.params
						}
						n = i(n);
						var $ = d("<form>").attr("method", o).attr("action", t + a);
						s && $.attr("target", s);
						var u = $[0].submit;
						return e(n, [], $, null, r), {
							form: $,
							submit: function () {
								u.call($[0])
							}
						}
					}, d.parseUrl = function (d) {
						if (-1 === d.indexOf("?")) return {
							url: d,
							params: {}
						};
						var t = d.split("?"),
							e = t[1].split("&");
						d = t[0];
						var i, n, o = {};
						for (i = 0; i < e.length; i += 1) o[(n = e[i].split("="))[0]] = n[1];
						return {
							url: d,
							params: o
						}
					};
					var e = function (t, i, n, o, s) {
							var r = [];
							Object.keys(t).forEach(function (a) {
								"object" == typeof t[a] ? ((r = i.slice()).push(a), e(t[a], r, n, Array.isArray(t[a]), s)) : n.append(function (t, e, i, n, o) {
									var s;
									if (i.length > 0) {
										var r;
										for (s = i[0], r = 1; r < i.length; r += 1) s += "[" + i[r] + "]";
										t = n && o ? s : s + "[" + t + "]"
									}
									return d("<input>").attr("type", "hidden").attr("name", t).attr("value", e)
								}(a, t[a], i, o, s))
							})
						},
						i = function (d) {
							for (var t = Object.getOwnPropertyNames(d), e = 0; e < t.length; e++) {
								var n = t[e];
								null === d[n] || void 0 === d[n] ? delete d[n] : "object" == typeof d[n] ? d[n] = i(d[n]) : d[n].length < 1 && delete d[n]
							}
							return d
						}
				}(d || window.Zepto || window.jqlite)
			}).call(this, e("EVdn"))
		},
		"Zej/": function (d, t, e) {
			var i, n, o;
			! function (s) {
				"use strict";
				n = [e("EVdn")], void 0 === (o = "function" == typeof (i = function (d) {
					var t = window.Slick || {};
					(t = function () {
						var t = 0;
						return function (e, i) {
							var n, o = this;
							o.defaults = {
								accessibility: !0,
								adaptiveHeight: !1,
								appendArrows: d(e),
								appendDots: d(e),
								arrows: !0,
								asNavFor: null,
								prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
								nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
								autoplay: !1,
								autoplaySpeed: 3e3,
								centerMode: !1,
								centerPadding: "50px",
								cssEase: "ease",
								customPaging: function (t, e) {
									return d('<button type="button" />').text(e + 1)
								},
								dots: !1,
								dotsClass: "slick-dots",
								draggable: !0,
								easing: "linear",
								edgeFriction: .35,
								fade: !1,
								focusOnSelect: !1,
								focusOnChange: !1,
								infinite: !0,
								initialSlide: 0,
								lazyLoad: "ondemand",
								mobileFirst: !1,
								pauseOnHover: !0,
								pauseOnFocus: !0,
								pauseOnDotsHover: !1,
								respondTo: "window",
								responsive: null,
								rows: 1,
								rtl: !1,
								slide: "",
								slidesPerRow: 1,
								slidesToShow: 1,
								slidesToScroll: 1,
								speed: 500,
								swipe: !0,
								swipeToSlide: !1,
								touchMove: !0,
								touchThreshold: 5,
								useCSS: !0,
								useTransform: !0,
								variableWidth: !1,
								vertical: !1,
								verticalSwiping: !1,
								waitForAnimate: !0,
								zIndex: 1e3
							}, o.initials = {
								animating: !1,
								dragging: !1,
								autoPlayTimer: null,
								currentDirection: 0,
								currentLeft: null,
								currentSlide: 0,
								direction: 1,
								$dots: null,
								listWidth: null,
								listHeight: null,
								loadIndex: 0,
								$nextArrow: null,
								$prevArrow: null,
								scrolling: !1,
								slideCount: null,
								slideWidth: null,
								$slideTrack: null,
								$slides: null,
								sliding: !1,
								slideOffset: 0,
								swipeLeft: null,
								swiping: !1,
								$list: null,
								touchObject: {},
								transformsEnabled: !1,
								unslicked: !1
							}, d.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = d(e), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, n = d(e).data("slick") || {}, o.options = d.extend({}, o.defaults, i, n), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, void 0 !== document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange");
							o.autoPlay = d.proxy(o.autoPlay, o), o.autoPlayClear = d.proxy(o.autoPlayClear, o), o.autoPlayIterator = d.proxy(o.autoPlayIterator, o), o.changeSlide = d.proxy(o.changeSlide, o), o.clickHandler = d.proxy(o.clickHandler, o), o.selectHandler = d.proxy(o.selectHandler, o), o.setPosition = d.proxy(o.setPosition, o), o.swipeHandler = d.proxy(o.swipeHandler, o), o.dragHandler = d.proxy(o.dragHandler, o), o.keyHandler = d.proxy(o.keyHandler, o), o.instanceUid = t++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
						}
					}()).prototype.activateADA = function () {
						this.$slideTrack.find(".slick-active").attr({
							"aria-hidden": "false"
						}).find("a, input, button, select").attr({
							tabindex: "0"
						})
					}, t.prototype.addSlide = t.prototype.slickAdd = function (t, e, i) {
						var n = this;
						if ("boolean" == typeof e) i = e, e = null;
						else if (e < 0 || e >= n.slideCount) return !1;
						n.unload(), "number" == typeof e ? 0 === e && 0 === n.$slides.length ? d(t).appendTo(n.$slideTrack) : i ? d(t).insertBefore(n.$slides.eq(e)) : d(t).insertAfter(n.$slides.eq(e)) : !0 === i ? d(t).prependTo(n.$slideTrack) : d(t).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function (t, e) {
							d(e).attr("data-slick-index", t)
						}), n.$slidesCache = n.$slides, n.reinit()
					}, t.prototype.animateHeight = function () {
						var d = this;
						if (1 === d.options.slidesToShow && !0 === d.options.adaptiveHeight && !1 === d.options.vertical) {
							var t = d.$slides.eq(d.currentSlide).outerHeight(!0);
							d.$list.animate({
								height: t
							}, d.options.speed)
						}
					}, t.prototype.animateSlide = function (t, e) {
						var i = {},
							n = this;
						n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (t = -t), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
							left: t
						}, n.options.speed, n.options.easing, e) : n.$slideTrack.animate({
							top: t
						}, n.options.speed, n.options.easing, e) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), d({
							animStart: n.currentLeft
						}).animate({
							animStart: t
						}, {
							duration: n.options.speed,
							easing: n.options.easing,
							step: function (d) {
								d = Math.ceil(d), !1 === n.options.vertical ? (i[n.animType] = "translate(" + d + "px, 0px)", n.$slideTrack.css(i)) : (i[n.animType] = "translate(0px," + d + "px)", n.$slideTrack.css(i))
							},
							complete: function () {
								e && e.call()
							}
						})) : (n.applyTransition(), t = Math.ceil(t), !1 === n.options.vertical ? i[n.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + t + "px, 0px)", n.$slideTrack.css(i), e && setTimeout(function () {
							n.disableTransition(), e.call()
						}, n.options.speed))
					}, t.prototype.getNavTarget = function () {
						var t = this.options.asNavFor;
						return t && null !== t && (t = d(t).not(this.$slider)), t
					}, t.prototype.asNavFor = function (t) {
						var e = this.getNavTarget();
						null !== e && "object" == typeof e && e.each(function () {
							var e = d(this).slick("getSlick");
							e.unslicked || e.slideHandler(t, !0)
						})
					}, t.prototype.applyTransition = function (d) {
						var t = this,
							e = {};
						!1 === t.options.fade ? e[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : e[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(e) : t.$slides.eq(d).css(e)
					}, t.prototype.autoPlay = function () {
						var d = this;
						d.autoPlayClear(), d.slideCount > d.options.slidesToShow && (d.autoPlayTimer = setInterval(d.autoPlayIterator, d.options.autoplaySpeed))
					}, t.prototype.autoPlayClear = function () {
						this.autoPlayTimer && clearInterval(this.autoPlayTimer)
					}, t.prototype.autoPlayIterator = function () {
						var d = this,
							t = d.currentSlide + d.options.slidesToScroll;
						d.paused || d.interrupted || d.focussed || (!1 === d.options.infinite && (1 === d.direction && d.currentSlide + 1 === d.slideCount - 1 ? d.direction = 0 : 0 === d.direction && (t = d.currentSlide - d.options.slidesToScroll, d.currentSlide - 1 == 0 && (d.direction = 1))), d.slideHandler(t))
					}, t.prototype.buildArrows = function () {
						var t = this;
						!0 === t.options.arrows && (t.$prevArrow = d(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = d(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
							"aria-disabled": "true",
							tabindex: "-1"
						}))
					}, t.prototype.buildDots = function () {
						var t, e, i = this;
						if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
							for (i.$slider.addClass("slick-dotted"), e = d("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) e.append(d("<li />").append(i.options.customPaging.call(this, i, t)));
							i.$dots = e.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
						}
					}, t.prototype.buildOut = function () {
						var t = this;
						t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, e) {
							d(e).attr("data-slick-index", t).data("originalStyling", d(e).attr("style") || "")
						}), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? d('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), d("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
					}, t.prototype.buildRows = function () {
						var d, t, e, i, n, o, s, r = this;
						if (i = document.createDocumentFragment(), o = r.$slider.children(), r.options.rows > 0) {
							for (s = r.options.slidesPerRow * r.options.rows, n = Math.ceil(o.length / s), d = 0; d < n; d++) {
								var a = document.createElement("div");
								for (t = 0; t < r.options.rows; t++) {
									var l = document.createElement("div");
									for (e = 0; e < r.options.slidesPerRow; e++) {
										var $ = d * s + (t * r.options.slidesPerRow + e);
										o.get($) && l.appendChild(o.get($))
									}
									a.appendChild(l)
								}
								i.appendChild(a)
							}
							r.$slider.empty().append(i), r.$slider.children().children().children().css({
								width: 100 / r.options.slidesPerRow + "%",
								display: "inline-block"
							})
						}
					}, t.prototype.checkResponsive = function (t, e) {
						var i, n, o, s = this,
							r = !1,
							a = s.$slider.width(),
							l = window.innerWidth || d(window).width();
						if ("window" === s.respondTo ? o = l : "slider" === s.respondTo ? o = a : "min" === s.respondTo && (o = Math.min(l, a)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
							for (i in n = null, s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[i] && (n = s.breakpoints[i]) : o > s.breakpoints[i] && (n = s.breakpoints[i]));
							null !== n ? null !== s.activeBreakpoint ? (n !== s.activeBreakpoint || e) && (s.activeBreakpoint = n, "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = d.extend({}, s.originalSettings, s.breakpointSettings[n]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), r = n) : (s.activeBreakpoint = n, "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = d.extend({}, s.originalSettings, s.breakpointSettings[n]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), r = n) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), r = n), t || !1 === r || s.$slider.trigger("breakpoint", [s, r])
						}
					}, t.prototype.changeSlide = function (t, e) {
						var i, n, o, s = this,
							r = d(t.currentTarget);
						switch (r.is("a") && t.preventDefault(), r.is("li") || (r = r.closest("li")), o = s.slideCount % s.options.slidesToScroll != 0, i = o ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
							case "previous":
								n = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - n, !1, e);
								break;
							case "next":
								n = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + n, !1, e);
								break;
							case "index":
								var a = 0 === t.data.index ? 0 : t.data.index || r.index() * s.options.slidesToScroll;
								s.slideHandler(s.checkNavigable(a), !1, e), r.children().trigger("focus");
								break;
							default:
								return
						}
					}, t.prototype.checkNavigable = function (d) {
						var t, e;
						if (t = this.getNavigableIndexes(), e = 0, d > t[t.length - 1]) d = t[t.length - 1];
						else
							for (var i in t) {
								if (d < t[i]) {
									d = e;
									break
								}
								e = t[i]
							}
						return d
					}, t.prototype.cleanUpEvents = function () {
						var t = this;
						t.options.dots && null !== t.$dots && (d("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", d.proxy(t.interrupt, t, !0)).off("mouseleave.slick", d.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), d(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && d(t.$slideTrack).children().off("click.slick", t.selectHandler), d(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), d(window).off("resize.slick.slick-" + t.instanceUid, t.resize), d("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), d(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
					}, t.prototype.cleanUpSlideEvents = function () {
						var t = this;
						t.$list.off("mouseenter.slick", d.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", d.proxy(t.interrupt, t, !1))
					}, t.prototype.cleanUpRows = function () {
						var d, t = this;
						t.options.rows > 0 && ((d = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(d))
					}, t.prototype.clickHandler = function (d) {
						!1 === this.shouldClick && (d.stopImmediatePropagation(), d.stopPropagation(), d.preventDefault())
					}, t.prototype.destroy = function (t) {
						var e = this;
						e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), d(".slick-cloned", e.$slider).detach(), e.$dots && e.$dots.remove(), e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()), e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()), e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
							d(this).attr("style", d(this).data("originalStyling"))
						}), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), e.$list.detach(), e.$slider.append(e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.$slider.removeClass("slick-dotted"), e.unslicked = !0, t || e.$slider.trigger("destroy", [e])
					}, t.prototype.disableTransition = function (d) {
						var t = this,
							e = {};
						e[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(e) : t.$slides.eq(d).css(e)
					}, t.prototype.fadeSlide = function (d, t) {
						var e = this;
						!1 === e.cssTransitions ? (e.$slides.eq(d).css({
							zIndex: e.options.zIndex
						}), e.$slides.eq(d).animate({
							opacity: 1
						}, e.options.speed, e.options.easing, t)) : (e.applyTransition(d), e.$slides.eq(d).css({
							opacity: 1,
							zIndex: e.options.zIndex
						}), t && setTimeout(function () {
							e.disableTransition(d), t.call()
						}, e.options.speed))
					}, t.prototype.fadeSlideOut = function (d) {
						var t = this;
						!1 === t.cssTransitions ? t.$slides.eq(d).animate({
							opacity: 0,
							zIndex: t.options.zIndex - 2
						}, t.options.speed, t.options.easing) : (t.applyTransition(d), t.$slides.eq(d).css({
							opacity: 0,
							zIndex: t.options.zIndex - 2
						}))
					}, t.prototype.filterSlides = t.prototype.slickFilter = function (d) {
						var t = this;
						null !== d && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(d).appendTo(t.$slideTrack), t.reinit())
					}, t.prototype.focusHandler = function () {
						var t = this;
						t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (e) {
							e.stopImmediatePropagation();
							var i = d(this);
							setTimeout(function () {
								t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
							}, 0)
						})
					}, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
						return this.currentSlide
					}, t.prototype.getDotCount = function () {
						var d = this,
							t = 0,
							e = 0,
							i = 0;
						if (!0 === d.options.infinite)
							if (d.slideCount <= d.options.slidesToShow) ++i;
							else
								for (; t < d.slideCount;) ++i, t = e + d.options.slidesToScroll, e += d.options.slidesToScroll <= d.options.slidesToShow ? d.options.slidesToScroll : d.options.slidesToShow;
						else if (!0 === d.options.centerMode) i = d.slideCount;
						else if (d.options.asNavFor)
							for (; t < d.slideCount;) ++i, t = e + d.options.slidesToScroll, e += d.options.slidesToScroll <= d.options.slidesToShow ? d.options.slidesToScroll : d.options.slidesToShow;
						else i = 1 + Math.ceil((d.slideCount - d.options.slidesToShow) / d.options.slidesToScroll);
						return i - 1
					}, t.prototype.getLeft = function (d) {
						var t, e, i, n, o = this,
							s = 0;
						return o.slideOffset = 0, e = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, n = -1, !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? n = -1.5 : 1 === o.options.slidesToShow && (n = -2)), s = e * o.options.slidesToShow * n), o.slideCount % o.options.slidesToScroll != 0 && d + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (d > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (d - o.slideCount)) * o.slideWidth * -1, s = (o.options.slidesToShow - (d - o.slideCount)) * e * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, s = o.slideCount % o.options.slidesToScroll * e * -1))) : d + o.options.slidesToShow > o.slideCount && (o.slideOffset = (d + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (d + o.options.slidesToShow - o.slideCount) * e), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, s = 0), !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? d * o.slideWidth * -1 + o.slideOffset : d * e * -1 + s, !0 === o.options.variableWidth && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(d) : o.$slideTrack.children(".slick-slide").eq(d + o.options.slidesToShow), t = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === o.options.centerMode && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(d) : o.$slideTrack.children(".slick-slide").eq(d + o.options.slidesToShow + 1), t = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (o.$list.width() - i.outerWidth()) / 2)), t
					}, t.prototype.getOption = t.prototype.slickGetOption = function (d) {
						return this.options[d]
					}, t.prototype.getNavigableIndexes = function () {
						var d, t = this,
							e = 0,
							i = 0,
							n = [];
						for (!1 === t.options.infinite ? d = t.slideCount : (e = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, d = 2 * t.slideCount); e < d;) n.push(e), e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
						return n
					}, t.prototype.getSlick = function () {
						return this
					}, t.prototype.getSlideCount = function () {
						var t, e, i = this;
						return e = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function (n, o) {
							if (o.offsetLeft - e + d(o).outerWidth() / 2 > -1 * i.swipeLeft) return t = o, !1
						}), Math.abs(d(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
					}, t.prototype.goTo = t.prototype.slickGoTo = function (d, t) {
						this.changeSlide({
							data: {
								message: "index",
								index: parseInt(d)
							}
						}, t)
					}, t.prototype.init = function (t) {
						var e = this;
						d(e.$slider).hasClass("slick-initialized") || (d(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots(), e.checkResponsive(!0), e.focusHandler()), t && e.$slider.trigger("init", [e]), !0 === e.options.accessibility && e.initADA(), e.options.autoplay && (e.paused = !1, e.autoPlay())
					}, t.prototype.initADA = function () {
						var t = this,
							e = Math.ceil(t.slideCount / t.options.slidesToShow),
							i = t.getNavigableIndexes().filter(function (d) {
								return d >= 0 && d < t.slideCount
							});
						t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
							"aria-hidden": "true",
							tabindex: "-1"
						}).find("a, input, button, select").attr({
							tabindex: "-1"
						}), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (e) {
							var n = i.indexOf(e);
							if (d(this).attr({
									role: "tabpanel",
									id: "slick-slide" + t.instanceUid + e,
									tabindex: -1
								}), -1 !== n) {
								var o = "slick-slide-control" + t.instanceUid + n;
								d("#" + o).length && d(this).attr({
									"aria-describedby": o
								})
							}
						}), t.$dots.attr("role", "tablist").find("li").each(function (n) {
							var o = i[n];
							d(this).attr({
								role: "presentation"
							}), d(this).find("button").first().attr({
								role: "tab",
								id: "slick-slide-control" + t.instanceUid + n,
								"aria-controls": "slick-slide" + t.instanceUid + o,
								"aria-label": n + 1 + " of " + e,
								"aria-selected": null,
								tabindex: "-1"
							})
						}).eq(t.currentSlide).find("button").attr({
							"aria-selected": "true",
							tabindex: "0"
						}).end());
						for (var n = t.currentSlide, o = n + t.options.slidesToShow; n < o; n++) t.options.focusOnChange ? t.$slides.eq(n).attr({
							tabindex: "0"
						}) : t.$slides.eq(n).removeAttr("tabindex");
						t.activateADA()
					}, t.prototype.initArrowEvents = function () {
						var d = this;
						!0 === d.options.arrows && d.slideCount > d.options.slidesToShow && (d.$prevArrow.off("click.slick").on("click.slick", {
							message: "previous"
						}, d.changeSlide), d.$nextArrow.off("click.slick").on("click.slick", {
							message: "next"
						}, d.changeSlide), !0 === d.options.accessibility && (d.$prevArrow.on("keydown.slick", d.keyHandler), d.$nextArrow.on("keydown.slick", d.keyHandler)))
					}, t.prototype.initDotEvents = function () {
						var t = this;
						!0 === t.options.dots && t.slideCount > t.options.slidesToShow && (d("li", t.$dots).on("click.slick", {
							message: "index"
						}, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && d("li", t.$dots).on("mouseenter.slick", d.proxy(t.interrupt, t, !0)).on("mouseleave.slick", d.proxy(t.interrupt, t, !1))
					}, t.prototype.initSlideEvents = function () {
						var t = this;
						t.options.pauseOnHover && (t.$list.on("mouseenter.slick", d.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", d.proxy(t.interrupt, t, !1)))
					}, t.prototype.initializeEvents = function () {
						var t = this;
						t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
							action: "start"
						}, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
							action: "move"
						}, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
							action: "end"
						}, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
							action: "end"
						}, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), d(document).on(t.visibilityChange, d.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && d(t.$slideTrack).children().on("click.slick", t.selectHandler), d(window).on("orientationchange.slick.slick-" + t.instanceUid, d.proxy(t.orientationChange, t)), d(window).on("resize.slick.slick-" + t.instanceUid, d.proxy(t.resize, t)), d("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), d(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), d(t.setPosition)
					}, t.prototype.initUI = function () {
						var d = this;
						!0 === d.options.arrows && d.slideCount > d.options.slidesToShow && (d.$prevArrow.show(), d.$nextArrow.show()), !0 === d.options.dots && d.slideCount > d.options.slidesToShow && d.$dots.show()
					}, t.prototype.keyHandler = function (d) {
						var t = this;
						d.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === d.keyCode && !0 === t.options.accessibility ? t.changeSlide({
							data: {
								message: !0 === t.options.rtl ? "next" : "previous"
							}
						}) : 39 === d.keyCode && !0 === t.options.accessibility && t.changeSlide({
							data: {
								message: !0 === t.options.rtl ? "previous" : "next"
							}
						}))
					}, t.prototype.lazyLoad = function () {
						var t, e, i, n = this;

						function o(t) {
							d("img[data-lazy]", t).each(function () {
								var t = d(this),
									e = d(this).attr("data-lazy"),
									i = d(this).attr("data-srcset"),
									o = d(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
									s = document.createElement("img");
								s.onload = function () {
									t.animate({
										opacity: 0
									}, 100, function () {
										i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", e).animate({
											opacity: 1
										}, 200, function () {
											t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
										}), n.$slider.trigger("lazyLoaded", [n, t, e])
									})
								}, s.onerror = function () {
									t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, t, e])
								}, s.src = e
							})
						}
						if (!0 === n.options.centerMode ? !0 === n.options.infinite ? (e = n.currentSlide + (n.options.slidesToShow / 2 + 1), i = e + n.options.slidesToShow + 2) : (e = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), i = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (e = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, i = Math.ceil(e + n.options.slidesToShow), !0 === n.options.fade && (e > 0 && e--, i <= n.slideCount && i++)), t = n.$slider.find(".slick-slide").slice(e, i), "anticipated" === n.options.lazyLoad)
							for (var s = e - 1, r = i, a = n.$slider.find(".slick-slide"), l = 0; l < n.options.slidesToScroll; l++) s < 0 && (s = n.slideCount - 1), t = (t = t.add(a.eq(s))).add(a.eq(r)), s--, r++;
						o(t), n.slideCount <= n.options.slidesToShow ? o(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? o(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && o(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
					}, t.prototype.loadSlider = function () {
						var d = this;
						d.setPosition(), d.$slideTrack.css({
							opacity: 1
						}), d.$slider.removeClass("slick-loading"), d.initUI(), "progressive" === d.options.lazyLoad && d.progressiveLazyLoad()
					}, t.prototype.next = t.prototype.slickNext = function () {
						this.changeSlide({
							data: {
								message: "next"
							}
						})
					}, t.prototype.orientationChange = function () {
						this.checkResponsive(), this.setPosition()
					}, t.prototype.pause = t.prototype.slickPause = function () {
						this.autoPlayClear(), this.paused = !0
					}, t.prototype.play = t.prototype.slickPlay = function () {
						var d = this;
						d.autoPlay(), d.options.autoplay = !0, d.paused = !1, d.focussed = !1, d.interrupted = !1
					}, t.prototype.postSlide = function (t) {
						var e = this;
						if (!e.unslicked && (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.slideCount > e.options.slidesToShow && e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility && (e.initADA(), e.options.focusOnChange))) {
							var i = d(e.$slides.get(e.currentSlide));
							i.attr("tabindex", 0).focus()
						}
					}, t.prototype.prev = t.prototype.slickPrev = function () {
						this.changeSlide({
							data: {
								message: "previous"
							}
						})
					}, t.prototype.preventDefault = function (d) {
						d.preventDefault()
					}, t.prototype.progressiveLazyLoad = function (t) {
						t = t || 1;
						var e, i, n, o, s, r = this,
							a = d("img[data-lazy]", r.$slider);
						a.length ? (e = a.first(), i = e.attr("data-lazy"), n = e.attr("data-srcset"), o = e.attr("data-sizes") || r.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function () {
							n && (e.attr("srcset", n), o && e.attr("sizes", o)), e.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, e, i]), r.progressiveLazyLoad()
						}, s.onerror = function () {
							t < 3 ? setTimeout(function () {
								r.progressiveLazyLoad(t + 1)
							}, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, i]), r.progressiveLazyLoad())
						}, s.src = i) : r.$slider.trigger("allImagesLoaded", [r])
					}, t.prototype.refresh = function (t) {
						var e, i, n = this;
						i = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > i && (n.currentSlide = i), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), e = n.currentSlide, n.destroy(!0), d.extend(n, n.initials, {
							currentSlide: e
						}), n.init(), t || n.changeSlide({
							data: {
								message: "index",
								index: e
							}
						}, !1)
					}, t.prototype.registerBreakpoints = function () {
						var t, e, i, n = this,
							o = n.options.responsive || null;
						if ("array" === d.type(o) && o.length) {
							for (t in n.respondTo = n.options.respondTo || "window", o)
								if (i = n.breakpoints.length - 1, o.hasOwnProperty(t)) {
									for (e = o[t].breakpoint; i >= 0;) n.breakpoints[i] && n.breakpoints[i] === e && n.breakpoints.splice(i, 1), i--;
									n.breakpoints.push(e), n.breakpointSettings[e] = o[t].settings
								}
							n.breakpoints.sort(function (d, t) {
								return n.options.mobileFirst ? d - t : t - d
							})
						}
					}, t.prototype.reinit = function () {
						var t = this;
						t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && d(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
					}, t.prototype.resize = function () {
						var t = this;
						d(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
							t.windowWidth = d(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
						}, 50))
					}, t.prototype.removeSlide = t.prototype.slickRemove = function (d, t, e) {
						var i = this;
						if (d = "boolean" == typeof d ? !0 === (t = d) ? 0 : i.slideCount - 1 : !0 === t ? --d : d, i.slideCount < 1 || d < 0 || d > i.slideCount - 1) return !1;
						i.unload(), !0 === e ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(d).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
					}, t.prototype.setCSS = function (d) {
						var t, e, i = this,
							n = {};
						!0 === i.options.rtl && (d = -d), t = "left" == i.positionProp ? Math.ceil(d) + "px" : "0px", e = "top" == i.positionProp ? Math.ceil(d) + "px" : "0px", n[i.positionProp] = d, !1 === i.transformsEnabled ? i.$slideTrack.css(n) : (n = {}, !1 === i.cssTransitions ? (n[i.animType] = "translate(" + t + ", " + e + ")", i.$slideTrack.css(n)) : (n[i.animType] = "translate3d(" + t + ", " + e + ", 0px)", i.$slideTrack.css(n)))
					}, t.prototype.setDimensions = function () {
						var d = this;
						!1 === d.options.vertical ? !0 === d.options.centerMode && d.$list.css({
							padding: "0px " + d.options.centerPadding
						}) : (d.$list.height(d.$slides.first().outerHeight(!0) * d.options.slidesToShow), !0 === d.options.centerMode && d.$list.css({
							padding: d.options.centerPadding + " 0px"
						})), d.listWidth = d.$list.width(), d.listHeight = d.$list.height(), !1 === d.options.vertical && !1 === d.options.variableWidth ? (d.slideWidth = Math.ceil(d.listWidth / d.options.slidesToShow), d.$slideTrack.width(Math.ceil(d.slideWidth * d.$slideTrack.children(".slick-slide").length))) : !0 === d.options.variableWidth ? d.$slideTrack.width(5e3 * d.slideCount) : (d.slideWidth = Math.ceil(d.listWidth), d.$slideTrack.height(Math.ceil(d.$slides.first().outerHeight(!0) * d.$slideTrack.children(".slick-slide").length)));
						var t = d.$slides.first().outerWidth(!0) - d.$slides.first().width();
						!1 === d.options.variableWidth && d.$slideTrack.children(".slick-slide").width(d.slideWidth - t)
					}, t.prototype.setFade = function () {
						var t, e = this;
						e.$slides.each(function (i, n) {
							t = e.slideWidth * i * -1, !0 === e.options.rtl ? d(n).css({
								position: "relative",
								right: t,
								top: 0,
								zIndex: e.options.zIndex - 2,
								opacity: 0
							}) : d(n).css({
								position: "relative",
								left: t,
								top: 0,
								zIndex: e.options.zIndex - 2,
								opacity: 0
							})
						}), e.$slides.eq(e.currentSlide).css({
							zIndex: e.options.zIndex - 1,
							opacity: 1
						})
					}, t.prototype.setHeight = function () {
						var d = this;
						if (1 === d.options.slidesToShow && !0 === d.options.adaptiveHeight && !1 === d.options.vertical) {
							var t = d.$slides.eq(d.currentSlide).outerHeight(!0);
							d.$list.css("height", t)
						}
					}, t.prototype.setOption = t.prototype.slickSetOption = function () {
						var t, e, i, n, o, s = this,
							r = !1;
						if ("object" === d.type(arguments[0]) ? (i = arguments[0], r = arguments[1], o = "multiple") : "string" === d.type(arguments[0]) && (i = arguments[0], n = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === d.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) s.options[i] = n;
						else if ("multiple" === o) d.each(i, function (d, t) {
							s.options[d] = t
						});
						else if ("responsive" === o)
							for (e in n)
								if ("array" !== d.type(s.options.responsive)) s.options.responsive = [n[e]];
								else {
									for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === n[e].breakpoint && s.options.responsive.splice(t, 1), t--;
									s.options.responsive.push(n[e])
								}
						r && (s.unload(), s.reinit())
					}, t.prototype.setPosition = function () {
						var d = this;
						d.setDimensions(), d.setHeight(), !1 === d.options.fade ? d.setCSS(d.getLeft(d.currentSlide)) : d.setFade(), d.$slider.trigger("setPosition", [d])
					}, t.prototype.setProps = function () {
						var d = this,
							t = document.body.style;
						d.positionProp = !0 === d.options.vertical ? "top" : "left", "top" === d.positionProp ? d.$slider.addClass("slick-vertical") : d.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === d.options.useCSS && (d.cssTransitions = !0), d.options.fade && ("number" == typeof d.options.zIndex ? d.options.zIndex < 3 && (d.options.zIndex = 3) : d.options.zIndex = d.defaults.zIndex), void 0 !== t.OTransform && (d.animType = "OTransform", d.transformType = "-o-transform", d.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (d.animType = !1)), void 0 !== t.MozTransform && (d.animType = "MozTransform", d.transformType = "-moz-transform", d.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (d.animType = !1)), void 0 !== t.webkitTransform && (d.animType = "webkitTransform", d.transformType = "-webkit-transform", d.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (d.animType = !1)), void 0 !== t.msTransform && (d.animType = "msTransform", d.transformType = "-ms-transform", d.transitionType = "msTransition", void 0 === t.msTransform && (d.animType = !1)), void 0 !== t.transform && !1 !== d.animType && (d.animType = "transform", d.transformType = "transform", d.transitionType = "transition"), d.transformsEnabled = d.options.useTransform && null !== d.animType && !1 !== d.animType
					}, t.prototype.setSlideClasses = function (d) {
						var t, e, i, n, o = this;
						if (e = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(d).addClass("slick-current"), !0 === o.options.centerMode) {
							var s = o.options.slidesToShow % 2 == 0 ? 1 : 0;
							t = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (d >= t && d <= o.slideCount - 1 - t ? o.$slides.slice(d - t + s, d + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = o.options.slidesToShow + d, e.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === d ? e.eq(e.length - 1 - o.options.slidesToShow).addClass("slick-center") : d === o.slideCount - 1 && e.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(d).addClass("slick-center")
						} else d >= 0 && d <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(d, d + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : e.length <= o.options.slidesToShow ? e.addClass("slick-active").attr("aria-hidden", "false") : (n = o.slideCount % o.options.slidesToShow, i = !0 === o.options.infinite ? o.options.slidesToShow + d : d, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - d < o.options.slidesToShow ? e.slice(i - (o.options.slidesToShow - n), i + n).addClass("slick-active").attr("aria-hidden", "false") : e.slice(i, i + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
						"ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
					}, t.prototype.setupInfinite = function () {
						var t, e, i, n = this;
						if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (e = null, n.slideCount > n.options.slidesToShow)) {
							for (i = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, t = n.slideCount; t > n.slideCount - i; t -= 1) e = t - 1, d(n.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
							for (t = 0; t < i + n.slideCount; t += 1) e = t, d(n.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
							n.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
								d(this).attr("id", "")
							})
						}
					}, t.prototype.interrupt = function (d) {
						d || this.autoPlay(), this.interrupted = d
					}, t.prototype.selectHandler = function (t) {
						var e = this,
							i = d(t.target).is(".slick-slide") ? d(t.target) : d(t.target).parents(".slick-slide"),
							n = parseInt(i.attr("data-slick-index"));
						n || (n = 0), e.slideCount <= e.options.slidesToShow ? e.slideHandler(n, !1, !0) : e.slideHandler(n)
					}, t.prototype.slideHandler = function (d, t, e) {
						var i, n, o, s, r, a = null,
							l = this;
						if (t = t || !1, !(!0 === l.animating && !0 === l.options.waitForAnimate || !0 === l.options.fade && l.currentSlide === d))
							if (!1 === t && l.asNavFor(d), i = d, a = l.getLeft(i), s = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? s : l.swipeLeft, !1 === l.options.infinite && !1 === l.options.centerMode && (d < 0 || d > l.getDotCount() * l.options.slidesToScroll)) !1 === l.options.fade && (i = l.currentSlide, !0 !== e && l.slideCount > l.options.slidesToShow ? l.animateSlide(s, function () {
								l.postSlide(i)
							}) : l.postSlide(i));
							else if (!1 === l.options.infinite && !0 === l.options.centerMode && (d < 0 || d > l.slideCount - l.options.slidesToScroll)) !1 === l.options.fade && (i = l.currentSlide, !0 !== e && l.slideCount > l.options.slidesToShow ? l.animateSlide(s, function () {
							l.postSlide(i)
						}) : l.postSlide(i));
						else {
							if (l.options.autoplay && clearInterval(l.autoPlayTimer), n = i < 0 ? l.slideCount % l.options.slidesToScroll != 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + i : i >= l.slideCount ? l.slideCount % l.options.slidesToScroll != 0 ? 0 : i - l.slideCount : i, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, n]), o = l.currentSlide, l.currentSlide = n, l.setSlideClasses(l.currentSlide), l.options.asNavFor && (r = (r = l.getNavTarget()).slick("getSlick")).slideCount <= r.options.slidesToShow && r.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), !0 === l.options.fade) return !0 !== e ? (l.fadeSlideOut(o), l.fadeSlide(n, function () {
								l.postSlide(n)
							})) : l.postSlide(n), void l.animateHeight();
							!0 !== e && l.slideCount > l.options.slidesToShow ? l.animateSlide(a, function () {
								l.postSlide(n)
							}) : l.postSlide(n)
						}
					}, t.prototype.startLoad = function () {
						var d = this;
						!0 === d.options.arrows && d.slideCount > d.options.slidesToShow && (d.$prevArrow.hide(), d.$nextArrow.hide()), !0 === d.options.dots && d.slideCount > d.options.slidesToShow && d.$dots.hide(), d.$slider.addClass("slick-loading")
					}, t.prototype.swipeDirection = function () {
						var d, t, e, i, n = this;
						return d = n.touchObject.startX - n.touchObject.curX, t = n.touchObject.startY - n.touchObject.curY, e = Math.atan2(t, d), (i = Math.round(180 * e / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 ? !1 === n.options.rtl ? "left" : "right" : i <= 360 && i >= 315 ? !1 === n.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === n.options.rtl ? "right" : "left" : !0 === n.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
					}, t.prototype.swipeEnd = function (d) {
						var t, e, i = this;
						if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
						if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
						if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
							switch (e = i.swipeDirection()) {
								case "left":
								case "down":
									t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
									break;
								case "right":
								case "up":
									t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
							}
							"vertical" != e && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, e]))
						} else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
					}, t.prototype.swipeHandler = function (d) {
						var t = this;
						if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== d.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = d.originalEvent && void 0 !== d.originalEvent.touches ? d.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), d.data.action) {
							case "start":
								t.swipeStart(d);
								break;
							case "move":
								t.swipeMove(d);
								break;
							case "end":
								t.swipeEnd(d)
						}
					}, t.prototype.swipeMove = function (d) {
						var t, e, i, n, o, s, r = this;
						return o = void 0 !== d.originalEvent ? d.originalEvent.touches : null, !(!r.dragging || r.scrolling || o && 1 !== o.length) && (t = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== o ? o[0].pageX : d.clientX, r.touchObject.curY = void 0 !== o ? o[0].pageY : d.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2))), !r.options.verticalSwiping && !r.swiping && s > 4 ? (r.scrolling = !0, !1) : (!0 === r.options.verticalSwiping && (r.touchObject.swipeLength = s), e = r.swipeDirection(), void 0 !== d.originalEvent && r.touchObject.swipeLength > 4 && (r.swiping = !0, d.preventDefault()), n = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), !0 === r.options.verticalSwiping && (n = r.touchObject.curY > r.touchObject.startY ? 1 : -1), i = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, !1 === r.options.infinite && (0 === r.currentSlide && "right" === e || r.currentSlide >= r.getDotCount() && "left" === e) && (i = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), !1 === r.options.vertical ? r.swipeLeft = t + i * n : r.swipeLeft = t + i * (r.$list.height() / r.listWidth) * n, !0 === r.options.verticalSwiping && (r.swipeLeft = t + i * n), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))))
					}, t.prototype.swipeStart = function (d) {
						var t, e = this;
						if (e.interrupted = !0, 1 !== e.touchObject.fingerCount || e.slideCount <= e.options.slidesToShow) return e.touchObject = {}, !1;
						void 0 !== d.originalEvent && void 0 !== d.originalEvent.touches && (t = d.originalEvent.touches[0]), e.touchObject.startX = e.touchObject.curX = void 0 !== t ? t.pageX : d.clientX, e.touchObject.startY = e.touchObject.curY = void 0 !== t ? t.pageY : d.clientY, e.dragging = !0
					}, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
						var d = this;
						null !== d.$slidesCache && (d.unload(), d.$slideTrack.children(this.options.slide).detach(), d.$slidesCache.appendTo(d.$slideTrack), d.reinit())
					}, t.prototype.unload = function () {
						var t = this;
						d(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
					}, t.prototype.unslick = function (d) {
						var t = this;
						t.$slider.trigger("unslick", [t, d]), t.destroy()
					}, t.prototype.updateArrows = function () {
						var d = this;
						Math.floor(d.options.slidesToShow / 2), !0 === d.options.arrows && d.slideCount > d.options.slidesToShow && !d.options.infinite && (d.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), d.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === d.currentSlide ? (d.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), d.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : d.currentSlide >= d.slideCount - d.options.slidesToShow && !1 === d.options.centerMode ? (d.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), d.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : d.currentSlide >= d.slideCount - 1 && !0 === d.options.centerMode && (d.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), d.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
					}, t.prototype.updateDots = function () {
						var d = this;
						null !== d.$dots && (d.$dots.find("li").removeClass("slick-active").end(), d.$dots.find("li").eq(Math.floor(d.currentSlide / d.options.slidesToScroll)).addClass("slick-active"))
					}, t.prototype.visibility = function () {
						var d = this;
						d.options.autoplay && (document[d.hidden] ? d.interrupted = !0 : d.interrupted = !1)
					}, d.fn.slick = function () {
						var d, e, i = this,
							n = arguments[0],
							o = Array.prototype.slice.call(arguments, 1),
							s = i.length;
						for (d = 0; d < s; d++)
							if ("object" == typeof n || void 0 === n ? i[d].slick = new t(i[d], n) : e = i[d].slick[n].apply(i[d].slick, o), void 0 !== e) return e;
						return i
					}
				}) ? i.apply(t, n) : i) || (d.exports = o)
			}()
		},
		brQC: function (d, t, e) {
			"use strict";
			e.r(t);
			e("NNxN"), e("SYky"), e("Zej/");
			var i = e("BfO1"),
				n = e.n(i),
				o = (e("cfI3"), e("uPEi")),
				s = e.n(o),
				r = e("EVdn");
			r(function () {
				var d = {
					$myQuote: r("#myQuote"),
					$myStory: r("#myStory"),
					$closeStory: r(".close-story"),
					init: function () {
						d.$myQuote.length && s()(d.$myQuote[0], 5), d.$myStory.on("click", function (d) {
							d.preventDefault(), r(".info-card__story").slideToggle()
						}), d.$closeStory.on("click", function (d) {
							r(".info-card__story").slideUp()
						})
					}
				};
				d.init();
				var t = {
					$slick_page: r(".slider-page"),
					init: function () {
						t.$slick_page.length && t.$slick_page.slick({
							lazyLoad: "progressive",
							infinite: !0,
							dots: !0,
							autoplay: !0,
							autoplaySpeed: 4e3,
							arrows: !0,
							prevArrow: '<div class="slider-nav-left"><i class="fa fa-angle-left"></i></div>',
							nextArrow: '<div class="slider-nav-right"><i class="fa fa-angle-right"></i></div>',
							responsive: [{
								breakpoint: 768,
								settings: {
									arrows: !1,
									dots: !1,
									autoplay: !0,
									autoplaySpeed: 2e3
								}
							}]
						})
					}
				};
				t.init();
				var e = {
					$window: r(window),
					$mainContent: r(".main-content"),
					$indexPage: r("#indexPage"),
					$panel: r(".panel"),
					defineHorizontal: function (d, t) {
						d >= 568 && t <= 414 ? e.$mainContent.addClass("horizontal") : e.$mainContent.removeClass("horizontal")
					},
					orientationChanged: function () {
						var d = e.$window.width(),
							t = e.$window.height();
						e.defineHorizontal(d, t), e.$window.on("resize", function () {
							d = e.$window.width(), t = e.$window.height(), e.defineHorizontal(d, t)
						})
					},
					showPreloader: function () {
						r(".video-fountaine").addClass("show")
					},
					hidePreloader: function () {
						r(".video-fountaine").removeClass("show")
					},
					pageReady: function () {
						e.hidePreloader(), r(".promotion__text").fadeIn("fast")
					},
					showVideo: function () {
						r(".text-box__text").fadeOut("fast").removeClass("shown"), e.showPreloader(), setTimeout(function () {
							r(".text-box__video").fadeIn("slow").addClass("shown"), e.hidePreloader()
						}, 2e3)
					},
					init: function () {
						if (e.$indexPage.length) {
							e.orientationChanged(), e.showPreloader(), setTimeout(function () {
								e.pageReady()
							}, 1500), e.$panel.on("click tap mouseenter", function (d) {
								e.$panel.removeClass("tapped");
								var t = d.currentTarget;
								r(t).addClass("tapped")
							}), e.$panel.on("mouseleave", function () {
								e.$panel.removeClass("tapped")
							}), r("#topmenuSectionNav a").on("click", function (d) {
								d.preventDefault();
								var t = d.currentTarget,
									i = r(t).attr("href");
								r(i).length && ("video" === r(i)[0].id ? e.showVideo() : r("html, body").animate({
									scrollTop: r(i).offset().top - 15
								}, 1e3))
							}), r("#buttonText").on("click", function () {
								var d = r("#form");
								r(d).length && r("html, body").animate({
									scrollTop: r(d).offset().top
								}, 1e3)
							}), r("#buttonVideo").on("click", function () {
								e.showVideo()
							});
							var d = r(".header .navbar-nav"),
								t = (d.outerHeight(), d.find("a")),
								i = t.find("[href]");
							r(window).on("scroll", function () {
								r(void 0).scrollTop();
								var d = i.map(function () {
										r(void 0).offset().top
									}),
									e = (d = d[d.length - 1]) && d.length ? d[0].id : "";
								t.parent().removeClass("active").end().filter("[href='#" + e + "']").parent().addClass("active")
							})
						}
					}
				};
				e.init();
				var i = {
					$forms: r(".saaForm"),
					isValid: function (d) {
						var t = r(d);
						i.validateFioInput(t), i.validateEmailInput(t), i.validateTelInput(t);
						var e = t.find("input[type!='hidden']"),
							n = !0;
						return e.each(function (d, t) {
							var e = r(t);
							n = n && !e.data("isError")
						}), n
					},
					processInputError: function (d, t, e) {
						var i = d.closest("form"),
							n = (i.get(0), r(":submit", i), d.data("errorSpan"));
						t ? (d.data("isError", !1), d.removeClass("error"), n.css({
							visibility: "hidden"
						})) : (d.data("isError", !0), d.addClass("error"), n.css({
							visibility: "visible"
						}), n.text(e))
					},
					hideInputError: function (d) {
						d.removeClass("error"), d.data("errorSpan").css({
							visibility: "hidden"
						})
					},
					validateFioInput: function (d) {
						var t = d.find(".fioInput");
						t.data("isError", !0);
						var e = t.val(),
							n = /^[A-ZА-Яa-zа-я'-]{2,20}( [A-ZА-Яa-zа-я'-]{2,20})?$/.test(e),
							o = n ? "" : "Недопустимое имя";
						i.processInputError(t, n, o)
					},
					initFioInput: function (d) {
						var t = r(d).find(".fioInput");
						if (t.length) {
							var e = t.next("span.error").first();
							t.data("errorSpan", e), t.data("isError", !0), t.on("blur", function (d) {
								var t = r(d.target).closest("form");
								i.validateFioInput(t)
							}), t.on("change keyup", function (d) {
								var t = r(d.target);
								i.hideInputError(t)
							})
						}
					},
					validateEmailInput: function (d) {
						var t = d.find(".emailInput"),
							e = t.val().toLowerCase();
						t.val(e);
						var n = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(e),
							o = n ? "" : "Некорректная почта";
						i.processInputError(t, n, o)
					},
					initEmailInput: function (d) {
						var t = r(d).find(".emailInput");
						if (t.length) {
							var e = t.next("span.error").first();
							t.data("errorSpan", e), t.data("isError", !0), t.on("blur", function (d) {
								var t = r(d.target).closest("form");
								i.validateEmailInput(t)
							}), t.on("change keyup", function (d) {
								var t = r(d.target);
								i.hideInputError(t)
							})
						}
					},
					validateTelInput: function (d) {
						var t = d.find(".telInput"),
							e = t.data("iti").isValidNumber(),
							n = e ? "" : "Введите ваш телефон";
						i.processInputError(t, e, n)
					},
					initInputPrefixPlugin: function (d) {
						d.on("focus", function (d) {
							var t = r(d.currentTarget),
								e = t.data("prefix").toString();
							return "" === t.val() && t.val(e), i.inputPrefixPluginEvent(e.replace("ibacorat", ""), t), !1
						})
					},
					inputPrefixPluginEvent: function (d, t) {
						t.on("keydown", function (e) {
							setTimeout(function () {
								var n = i.inputPrefixPluginPrefixOn(t.val()),
									o = i.inputPrefixPluginPrefixOn(d),
									s = o.length,
									r = n.substring(0, s);
								if (n.match(new RegExp(o)) && r === o) t.val(i.inputPrefixPluginPrefixOff(n));
								else if ("Control" === e.key || "Backspace" === e.key || "Del" === e.key) t.val(i.inputPrefixPluginPrefixOff(o));
								else {
									var a = i.inputPrefixPluginPrefixOff(o) + e.key;
									t.val(a.replace("undefined", ""))
								}
							}, 50)
						})
					},
					inputPrefixPluginPrefixOn: function (d) {
						var t = ["+", "$", "^", "*", "?"],
							e = ["ibacorat", "ibacordolar", "ibacorhalis", "ibacorkali", "ibacortanya"];
						return r.each(t, function (i) {
							d = d.replace(t[i], e[i])
						}), d
					},
					inputPrefixPluginPrefixOff: function (d) {
						var t = ["+", "$", "^", "*", "?"],
							e = ["ibacorat", "ibacordolar", "ibacorhalis", "ibacorkali", "ibacortanya"];
						return r.each(t, function (i) {
							d = d.replace(e[i], t[i])
						}), d
					},
					initTelInputCodePrefix: function (d) {
						var t = d.data("iti").getSelectedCountryData(),
							e = d.val();
						t && "" === e && t.dialCode && d.val("+".concat(t.dialCode))
					},
					initTelInput: function (d) {
						var t = r(d).find(".telInput");
						if (t.length) {
							var e = t.get(0),
								o = n()(e, {
									formatOnDisplay: !0,
									geoIpLookup: function (d) {
										r.get("https://ipinfo.io", function () {}, "jsonp").always(function (t) {
											var e = t && t.country ? t.country : "";
											d(e)
										})
									},
									initialCountry: "auto",
									preferredCountries: ["ru", "ua", "by"]
								});
							t.data("iti", o), e.addEventListener("countrychange", function (d) {
								i.initTelInputCodePrefix(t)
							}), i.initTelInputCodePrefix(t);
							var s = t.closest("div.intl-tel-input").next("span.error").first();
							t.data("errorSpan", s), t.data("isError", !0), t.on("blur", function (d) {
								var t = r(d.target).closest("form");
								i.validateTelInput(t)
							}), t.on("change keyup", function (d) {
								var t = r(d.target);
								i.hideInputError(t)
							}), t.on("keydown", function (d) {
								var t = r(d.target);
								if (104 === d.keyCode && 1 === t.val().length) return !1; - 1 !== r.inArray(d.keyCode, [46, 8, 9, 27, 13, 110, 190]) || 65 === d.keyCode && (!0 === d.ctrlKey || !0 === d.metaKey) || 67 === d.keyCode && (!0 === d.ctrlKey || !0 === d.metaKey) || 88 === d.keyCode && (!0 === d.ctrlKey || !0 === d.metaKey) || d.keyCode >= 35 && d.keyCode <= 39 || (d.shiftKey || d.keyCode < 48 || d.keyCode > 57) && (d.keyCode < 96 || d.keyCode > 105) && d.preventDefault()
							}), i.initInputPrefixPlugin(t)
						}
					},
					init: function () {
						i.$forms.length && (i.$forms.find('input[name="timezone"]').val(Intl.DateTimeFormat().resolvedOptions().timeZone), i.$forms.each(function (d, t) {
							i.initFioInput(t), i.initEmailInput(t), i.initTelInput(t)
						}), i.$forms.on("submit", function (d) {
							d.preventDefault();
							var t = d.currentTarget,
								e = r(t),
								n = r(":submit", e).find("span"),
								o = e.serialize();
							i.isValid(t) && (console.log(o), r.ajax({
								method: "POST",
								url: "/ajax/order/form_submit",
								data: o,
								beforeSend: function () {
									n.addClass("ajaxSpinner"), n.data("txt", n.html()), n.html("")
								},
								complete: function () {
									n.removeClass("ajaxSpinner"), n.html(n.data("txt"))
								}
							}).done(function (d) {
								if (console.log(d), d.status) r.redirect("/step1", {
									type: d.data.type
								}, "POST");
								else {
									d.errors.common;
									var t = d.errors.form || [];
									for (var n in t)
										if ("token" !== n) {
											var o = e.find("input[name='".concat(n, "']"));
											i.processInputError(o, !1, t[n])
										} else console.log(t[n])
								}
							}).fail(function (d, t, e) {
								console.log(d, t, e)
							}))
						}))
					}
				};
				i.init();
				var o = {
					$step1Page: r("#step1Page"),
					init: function () {
						o.$step1Page.length && (r("#contactButton").on("click", function (d) {
							d.preventDefault(), r("html, body").animate({
								scrollTop: r("#contacts").offset().top
							}, 1e3)
						}), r("#startButton").on("click", function (d) {
							d.preventDefault(), r("html, body").animate({
								scrollTop: r("#checkEmails").offset().top
							}, 1e3)
						}))
					}
				};
				o.init()
			})
		},
		cfI3: function (d, t) {
			! function () {
				var d = this;

				function t(d) {
					return "string" == typeof d
				}

				function e(t, e) {
					t = t.split(".");
					var i, n = d;
					t[0] in n || void 0 === n.execScript || n.execScript("var " + t[0]);
					for (; t.length && (i = t.shift());) t.length || void 0 === e ? n = n[i] && n[i] !== Object.prototype[i] ? n[i] : n[i] = {} : n[i] = e
				}

				function i(d, t) {
					function e() {}
					e.prototype = t.prototype, d.o = t.prototype, d.prototype = new e, d.prototype.constructor = d, d.aa = function (d, e, i) {
						for (var n = Array(arguments.length - 2), o = 2; o < arguments.length; o++) n[o - 2] = arguments[o];
						return t.prototype[e].apply(d, n)
					}
				}
				var n = Array.prototype.indexOf ? function (d, t, e) {
					return Array.prototype.indexOf.call(d, t, e)
				} : function (d, e, i) {
					if (i = null == i ? 0 : 0 > i ? Math.max(0, d.length + i) : i, t(d)) return t(e) && 1 == e.length ? d.indexOf(e, i) : -1;
					for (; i < d.length; i++)
						if (i in d && d[i] === e) return i;
					return -1
				};

				function o(d, t) {
					d.sort(t || s)
				}

				function s(d, t) {
					return d > t ? 1 : d < t ? -1 : 0
				}

				function r(d, t) {
					switch (this.a = d, this.h = !!t.i, this.c = t.b, this.m = t.type, this.l = !1, this.c) {
						case $:
						case u:
						case c:
						case p:
						case h:
						case l:
						case a:
							this.l = !0
					}
					this.g = t.defaultValue
				}
				var a = 1,
					l = 2,
					$ = 3,
					u = 4,
					c = 6,
					p = 16,
					h = 18;

				function f(d, t) {
					for (this.c = d, this.a = {}, d = 0; d < t.length; d++) {
						var e = t[d];
						this.a[e.a] = e
					}
				}

				function v() {
					this.a = {}, this.g = this.f().a, this.c = this.h = null
				}

				function g(d, t) {
					for (var e = function (d) {
							return o(d = function (d) {
								var t, e = [],
									i = 0;
								for (t in d) e[i++] = d[t];
								return e
							}(d.a), function (d, t) {
								return d.a - t.a
							}), d
						}(d.f()), i = 0; i < e.length; i++) {
						var n = e[i],
							s = n.a;
						if (null != t.a[s]) {
							d.c && delete d.c[n.a];
							var r = 11 == n.c || 10 == n.c;
							if (n.h) {
								n = b(t, s);
								for (var a = 0; a < n.length; a++) S(d, s, r ? n[a].clone() : n[a])
							} else n = y(t, s), r ? (r = y(d, s)) ? g(r, n) : k(d, s, n.clone()) : k(d, s, n)
						}
					}
				}

				function y(d, t) {
					var e = d.a[t];
					if (null == e) return null;
					if (d.h) {
						if (!(t in d.c)) {
							var i = d.h,
								n = d.g[t];
							if (null != e)
								if (n.h) {
									for (var o = [], s = 0; s < e.length; s++) o[s] = i.c(n, e[s]);
									e = o
								} else e = i.c(n, e);
							return d.c[t] = e
						}
						return d.c[t]
					}
					return e
				}

				function m(d, t, e) {
					var i = y(d, t);
					return d.g[t].h ? i[e || 0] : i
				}

				function C(d, t) {
					if (null != d.a[t]) d = m(d, t, void 0);
					else d: {
						if (void 0 === (d = d.g[t]).g)
							if ((t = d.m) === Boolean) d.g = !1;
							else if (t === Number) d.g = 0;
						else {
							if (t !== String) {
								d = new t;
								break d
							}
							d.g = d.l ? "0" : ""
						}
						d = d.g
					}
					return d
				}

				function b(d, t) {
					return y(d, t) || []
				}

				function w(d, t) {
					return d.g[t].h ? null != d.a[t] ? d.a[t].length : 0 : null != d.a[t] ? 1 : 0
				}

				function k(d, t, e) {
					d.a[t] = e, d.c && (d.c[t] = e)
				}

				function S(d, t, e) {
					d.a[t] || (d.a[t] = []), d.a[t].push(e), d.c && delete d.c[t]
				}

				function T(d, t) {
					var e, i = [];
					for (e in t) 0 != e && i.push(new r(e, t[e]));
					return new f(d, i)
				}

				function I() {}
				v.prototype.has = function (d) {
					return null != this.a[d.a]
				}, v.prototype.get = function (d, t) {
					return m(this, d.a, t)
				}, v.prototype.set = function (d, t) {
					k(this, d.a, t)
				}, v.prototype.add = function (d, t) {
					S(this, d.a, t)
				}, v.prototype.clone = function () {
					var d = new this.constructor;
					return d != this && (d.a = {}, d.c && (d.c = {}), g(d, this)), d
				}, I.prototype.a = function (d) {
					throw new d.c, Error("Unimplemented")
				}, I.prototype.c = function (d, e) {
					if (11 == d.c || 10 == d.c) return e instanceof v ? e : this.a(d.m.prototype.f(), e);
					if (14 == d.c) return t(e) && x.test(e) && 0 < (d = Number(e)) ? d : e;
					if (!d.l) return e;
					if ((d = d.m) === String) {
						if ("number" == typeof e) return String(e)
					} else if (d === Number && t(e) && ("Infinity" === e || "-Infinity" === e || "NaN" === e || x.test(e))) return Number(e);
					return e
				};
				var x = /^-?[0-9]+$/;

				function A() {}

				function E() {}

				function L(d, t) {
					null != d && this.a.apply(this, arguments)
				}

				function _() {
					v.call(this)
				}
				i(A, I), A.prototype.a = function (d, t) {
					return (d = new d.c).h = this, d.a = t, d.c = {}, d
				}, i(E, A), E.prototype.c = function (d, t) {
					return 8 == d.c ? !!t : I.prototype.c.apply(this, arguments)
				}, E.prototype.a = function (d, t) {
					return E.o.a.call(this, d, t)
				}, L.prototype.c = "", L.prototype.set = function (d) {
					this.c = "" + d
				}, L.prototype.a = function (d, t, e) {
					if (this.c += String(d), null != t)
						for (var i = 1; i < arguments.length; i++) this.c += arguments[i];
					return this
				}, L.prototype.toString = function () {
					return this.c
				}, i(_, v);
				var P = null;

				function F() {
					v.call(this)
				}
				i(F, v);
				var M = null;

				function D() {
					v.call(this)
				}
				i(D, v);
				var N = null;

				function O() {
					v.call(this)
				}
				_.prototype.f = function () {
					var d = P;
					return d || (P = d = T(_, {
						0: {
							name: "NumberFormat",
							j: "i18n.phonenumbers.NumberFormat"
						},
						1: {
							name: "pattern",
							required: !0,
							b: 9,
							type: String
						},
						2: {
							name: "format",
							required: !0,
							b: 9,
							type: String
						},
						3: {
							name: "leading_digits_pattern",
							i: !0,
							b: 9,
							type: String
						},
						4: {
							name: "national_prefix_formatting_rule",
							b: 9,
							type: String
						},
						6: {
							name: "national_prefix_optional_when_formatting",
							b: 8,
							defaultValue: !1,
							type: Boolean
						},
						5: {
							name: "domestic_carrier_code_formatting_rule",
							b: 9,
							type: String
						}
					})), d
				}, _.f = _.prototype.f, F.prototype.f = function () {
					var d = M;
					return d || (M = d = T(F, {
						0: {
							name: "PhoneNumberDesc",
							j: "i18n.phonenumbers.PhoneNumberDesc"
						},
						2: {
							name: "national_number_pattern",
							b: 9,
							type: String
						},
						9: {
							name: "possible_length",
							i: !0,
							b: 5,
							type: Number
						},
						10: {
							name: "possible_length_local_only",
							i: !0,
							b: 5,
							type: Number
						},
						6: {
							name: "example_number",
							b: 9,
							type: String
						}
					})), d
				}, F.f = F.prototype.f, D.prototype.f = function () {
					var d = N;
					return d || (N = d = T(D, {
						0: {
							name: "PhoneMetadata",
							j: "i18n.phonenumbers.PhoneMetadata"
						},
						1: {
							name: "general_desc",
							b: 11,
							type: F
						},
						2: {
							name: "fixed_line",
							b: 11,
							type: F
						},
						3: {
							name: "mobile",
							b: 11,
							type: F
						},
						4: {
							name: "toll_free",
							b: 11,
							type: F
						},
						5: {
							name: "premium_rate",
							b: 11,
							type: F
						},
						6: {
							name: "shared_cost",
							b: 11,
							type: F
						},
						7: {
							name: "personal_number",
							b: 11,
							type: F
						},
						8: {
							name: "voip",
							b: 11,
							type: F
						},
						21: {
							name: "pager",
							b: 11,
							type: F
						},
						25: {
							name: "uan",
							b: 11,
							type: F
						},
						27: {
							name: "emergency",
							b: 11,
							type: F
						},
						28: {
							name: "voicemail",
							b: 11,
							type: F
						},
						29: {
							name: "short_code",
							b: 11,
							type: F
						},
						30: {
							name: "standard_rate",
							b: 11,
							type: F
						},
						31: {
							name: "carrier_specific",
							b: 11,
							type: F
						},
						33: {
							name: "sms_services",
							b: 11,
							type: F
						},
						24: {
							name: "no_international_dialling",
							b: 11,
							type: F
						},
						9: {
							name: "id",
							required: !0,
							b: 9,
							type: String
						},
						10: {
							name: "country_code",
							b: 5,
							type: Number
						},
						11: {
							name: "international_prefix",
							b: 9,
							type: String
						},
						17: {
							name: "preferred_international_prefix",
							b: 9,
							type: String
						},
						12: {
							name: "national_prefix",
							b: 9,
							type: String
						},
						13: {
							name: "preferred_extn_prefix",
							b: 9,
							type: String
						},
						15: {
							name: "national_prefix_for_parsing",
							b: 9,
							type: String
						},
						16: {
							name: "national_prefix_transform_rule",
							b: 9,
							type: String
						},
						18: {
							name: "same_mobile_and_fixed_line_pattern",
							b: 8,
							defaultValue: !1,
							type: Boolean
						},
						19: {
							name: "number_format",
							i: !0,
							b: 11,
							type: _
						},
						20: {
							name: "intl_number_format",
							i: !0,
							b: 11,
							type: _
						},
						22: {
							name: "main_country_for_code",
							b: 8,
							defaultValue: !1,
							type: Boolean
						},
						23: {
							name: "leading_digits",
							b: 9,
							type: String
						},
						26: {
							name: "leading_zero_possible",
							b: 8,
							defaultValue: !1,
							type: Boolean
						}
					})), d
				}, D.f = D.prototype.f, i(O, v);
				var H = null,
					B = {
						$: 0,
						w: 1,
						v: 5,
						u: 10,
						s: 20
					};
				O.prototype.f = function () {
					var d = H;
					return d || (H = d = T(O, {
						0: {
							name: "PhoneNumber",
							j: "i18n.phonenumbers.PhoneNumber"
						},
						1: {
							name: "country_code",
							required: !0,
							b: 5,
							type: Number
						},
						2: {
							name: "national_number",
							required: !0,
							b: 4,
							type: Number
						},
						3: {
							name: "extension",
							b: 9,
							type: String
						},
						4: {
							name: "italian_leading_zero",
							b: 8,
							type: Boolean
						},
						8: {
							name: "number_of_leading_zeros",
							b: 5,
							defaultValue: 1,
							type: Number
						},
						5: {
							name: "raw_input",
							b: 9,
							type: String
						},
						6: {
							name: "country_code_source",
							b: 14,
							defaultValue: 0,
							type: B
						},
						7: {
							name: "preferred_domestic_carrier_code",
							b: 9,
							type: String
						}
					})), d
				}, O.ctor = O, O.ctor.f = O.prototype.f;
				var G = {
						1: "US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" "),
						7: ["RU", "KZ"],
						20: ["EG"],
						27: ["ZA"],
						30: ["GR"],
						31: ["NL"],
						32: ["BE"],
						33: ["FR"],
						34: ["ES"],
						36: ["HU"],
						39: ["IT", "VA"],
						40: ["RO"],
						41: ["CH"],
						43: ["AT"],
						44: ["GB", "GG", "IM", "JE"],
						45: ["DK"],
						46: ["SE"],
						47: ["NO", "SJ"],
						48: ["PL"],
						49: ["DE"],
						51: ["PE"],
						52: ["MX"],
						53: ["CU"],
						54: ["AR"],
						55: ["BR"],
						56: ["CL"],
						57: ["CO"],
						58: ["VE"],
						60: ["MY"],
						61: ["AU", "CC", "CX"],
						62: ["ID"],
						63: ["PH"],
						64: ["NZ"],
						65: ["SG"],
						66: ["TH"],
						81: ["JP"],
						82: ["KR"],
						84: ["VN"],
						86: ["CN"],
						90: ["TR"],
						91: ["IN"],
						92: ["PK"],
						93: ["AF"],
						94: ["LK"],
						95: ["MM"],
						98: ["IR"],
						211: ["SS"],
						212: ["MA", "EH"],
						213: ["DZ"],
						216: ["TN"],
						218: ["LY"],
						220: ["GM"],
						221: ["SN"],
						222: ["MR"],
						223: ["ML"],
						224: ["GN"],
						225: ["CI"],
						226: ["BF"],
						227: ["NE"],
						228: ["TG"],
						229: ["BJ"],
						230: ["MU"],
						231: ["LR"],
						232: ["SL"],
						233: ["GH"],
						234: ["NG"],
						235: ["TD"],
						236: ["CF"],
						237: ["CM"],
						238: ["CV"],
						239: ["ST"],
						240: ["GQ"],
						241: ["GA"],
						242: ["CG"],
						243: ["CD"],
						244: ["AO"],
						245: ["GW"],
						246: ["IO"],
						247: ["AC"],
						248: ["SC"],
						249: ["SD"],
						250: ["RW"],
						251: ["ET"],
						252: ["SO"],
						253: ["DJ"],
						254: ["KE"],
						255: ["TZ"],
						256: ["UG"],
						257: ["BI"],
						258: ["MZ"],
						260: ["ZM"],
						261: ["MG"],
						262: ["RE", "YT"],
						263: ["ZW"],
						264: ["NA"],
						265: ["MW"],
						266: ["LS"],
						267: ["BW"],
						268: ["SZ"],
						269: ["KM"],
						290: ["SH", "TA"],
						291: ["ER"],
						297: ["AW"],
						298: ["FO"],
						299: ["GL"],
						350: ["GI"],
						351: ["PT"],
						352: ["LU"],
						353: ["IE"],
						354: ["IS"],
						355: ["AL"],
						356: ["MT"],
						357: ["CY"],
						358: ["FI", "AX"],
						359: ["BG"],
						370: ["LT"],
						371: ["LV"],
						372: ["EE"],
						373: ["MD"],
						374: ["AM"],
						375: ["BY"],
						376: ["AD"],
						377: ["MC"],
						378: ["SM"],
						380: ["UA"],
						381: ["RS"],
						382: ["ME"],
						383: ["XK"],
						385: ["HR"],
						386: ["SI"],
						387: ["BA"],
						389: ["MK"],
						420: ["CZ"],
						421: ["SK"],
						423: ["LI"],
						500: ["FK"],
						501: ["BZ"],
						502: ["GT"],
						503: ["SV"],
						504: ["HN"],
						505: ["NI"],
						506: ["CR"],
						507: ["PA"],
						508: ["PM"],
						509: ["HT"],
						590: ["GP", "BL", "MF"],
						591: ["BO"],
						592: ["GY"],
						593: ["EC"],
						594: ["GF"],
						595: ["PY"],
						596: ["MQ"],
						597: ["SR"],
						598: ["UY"],
						599: ["CW", "BQ"],
						670: ["TL"],
						672: ["NF"],
						673: ["BN"],
						674: ["NR"],
						675: ["PG"],
						676: ["TO"],
						677: ["SB"],
						678: ["VU"],
						679: ["FJ"],
						680: ["PW"],
						681: ["WF"],
						682: ["CK"],
						683: ["NU"],
						685: ["WS"],
						686: ["KI"],
						687: ["NC"],
						688: ["TV"],
						689: ["PF"],
						690: ["TK"],
						691: ["FM"],
						692: ["MH"],
						800: ["001"],
						808: ["001"],
						850: ["KP"],
						852: ["HK"],
						853: ["MO"],
						855: ["KH"],
						856: ["LA"],
						870: ["001"],
						878: ["001"],
						880: ["BD"],
						881: ["001"],
						882: ["001"],
						883: ["001"],
						886: ["TW"],
						888: ["001"],
						960: ["MV"],
						961: ["LB"],
						962: ["JO"],
						963: ["SY"],
						964: ["IQ"],
						965: ["KW"],
						966: ["SA"],
						967: ["YE"],
						968: ["OM"],
						970: ["PS"],
						971: ["AE"],
						972: ["IL"],
						973: ["BH"],
						974: ["QA"],
						975: ["BT"],
						976: ["MN"],
						977: ["NP"],
						979: ["001"],
						992: ["TJ"],
						993: ["TM"],
						994: ["AZ"],
						995: ["GE"],
						996: ["KG"],
						998: ["UZ"]
					},
					z = {
						AC: [, [, , "(?:[01589]\\d|[46])\\d{4}", , , , , , , [5, 6]],
							[, , "6[2-467]\\d{3}", , , , "62889", , , [5]],
							[, , "4\\d{4}", , , , "40123", , , [5]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "AC", 247, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "[01589]\\d{5}", , , , "542011", , , [6]], , , [, , , , , , , , , [-1]]
						],
						AD: [, [, , "(?:1|6\\d)\\d{7}|[136-9]\\d{5}", , , , , , , [6, 8, 9]],
							[, , "[78]\\d{5}", , , , "712345", , , [6]],
							[, , "690\\d{6}|[36]\\d{5}", , , , "312345", , , [6, 9]],
							[, , "180[02]\\d{4}", , , , "18001234", , , [8]],
							[, , "[19]\\d{5}", , , , "912345", , , [6]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "AD", 376, "00", , , , , , , , [
								[, "(\\d{3})(\\d{3})", "$1 $2", ["[136-9]"]],
								[, "(\\d{4})(\\d{4})", "$1 $2", ["1"]],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
							], , [, , , , , , , , , [-1]], , , [, , "1800\\d{4}", , , , , , , [8]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						AE: [, [, , "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", , , , , , , [5, 6, 7, 8, 9, 10, 11, 12]],
							[, , "[2-4679][2-8]\\d{6}", , , , "22345678", , , [8],
								[7]
							],
							[, , "5[024-68]\\d{7}", , , , "501234567", , , [9]],
							[, , "400\\d{6}|800\\d{2,9}", , , , "800123456"],
							[, , "900[02]\\d{5}", , , , "900234567", , , [9]],
							[, , "700[05]\\d{5}", , , , "700012345", , , [9]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "AE", 971, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]],
								[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"],
								[, "(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "600[25]\\d{5}", , , , "600212345", , , [9]], , , [, , , , , , , , , [-1]]
						],
						AF: [, [, , "[2-7]\\d{8}", , , , , , , [9],
								[7]
							],
							[, , "(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}", , , , "234567890", , , , [7]],
							[, , "7(?:[014-9]\\d|2[89]|3[01])\\d{6}", , , , "701234567"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "AF", 93, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]
							],
							[
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]
							],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						AG: [, [, , "(?:268|[58]\\d\\d|900)\\d{7}", , , , , , , [10],
								[7]
							],
							[, , "268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}", , , , "2684601234", , , , [7]],
							[, , "268(?:464|7(?:1[3-9]|2\\d|3[246]|64|[78][0-689]))\\d{4}", , , , "2684641234", , , , [7]],
							[, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
							[, , "900[2-9]\\d{6}", , , , "9002123456"],
							[, , , , , , , , , [-1]],
							[, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
							[, , "26848[01]\\d{4}", , , , "2684801234", , , , [7]], "AG", 1, "011", "1", , , "1|([457]\\d{6})$", "268$1", , , , , [, , "26840[69]\\d{4}", , , , "2684061234", , , , [7]], , "268", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						AI: [, [, , "(?:264|[58]\\d\\d|900)\\d{7}", , , , , , , [10],
								[7]
							],
							[, , "2644(?:6[12]|9[78])\\d{4}", , , , "2644612345", , , , [7]],
							[, , "264(?:235|476|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}", , , , "2642351234", , , , [7]],
							[, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
							[, , "900[2-9]\\d{6}", , , , "9002123456"],
							[, , , , , , , , , [-1]],
							[, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
							[, , , , , , , , , [-1]], "AI", 1, "011", "1", , , "1|([2457]\\d{6})$", "264$1", , , , , [, , , , , , , , , [-1]], , "264", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						AL: [, [, , "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", , , , , , , [6, 7, 8, 9],
								[5]
							],
							[, , "(?:[2358](?:[16-9]\\d[2-9]|[2-5][2-9]\\d)|4(?:[2-57-9][2-9]|6\\d)\\d)\\d{4}", , , , "22345678", , , [8],
								[5, 6, 7]
							],
							[, , "6(?:[689][2-9]|7[2-6])\\d{6}", , , , "662123456", , , [9]],
							[, , "800\\d{4}", , , , "8001234", , , [7]],
							[, , "900[1-9]\\d\\d", , , , "900123", , , [6]],
							[, , "808[1-9]\\d\\d", , , , "808123", , , [6]],
							[, , "700[2-9]\\d{4}", , , , "70021234", , , [8]],
							[, , , , , , , , , [-1]], "AL", 355, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"],
								[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"],
								[, "(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						AM: [, [, , "(?:[1-489]\\d|55|60|77)\\d{6}", , , , , , , [8],
								[5, 6]
							],
							[, , "(?:(?:1[0-2]|47)\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2)\\d{5}", , , , "10123456", , , , [5, 6]],
							[, , "(?:4[1349]|55|77|88|9[13-9])\\d{6}", , , , "77123456"],
							[, , "800\\d{5}", , , , "80012345"],
							[, , "90[016]\\d{5}", , , , "90012345"],
							[, , "80[1-4]\\d{5}", , , , "80112345"],
							[, , , , , , , , , [-1]],
							[, , "60(?:2[78]|3[5-9]|4[02-9]|5[0-46-9]|[6-8]\\d|90)\\d{4}", , , , "60271234"], "AM", 374, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"],
								[, "(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"],
								[, "(\\d{3})(\\d{5})", "$1 $2", ["[23]"], "(0$1)"],
								[, "(\\d{2})(\\d{6})", "$1 $2", ["[4-9]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						AO: [, [, , "[29]\\d{8}", , , , , , , [9]],
							[, , "2\\d(?:[0134][25-9]|[25-9]\\d)\\d{5}", , , , "222123456"],
							[, , "9[1-49]\\d{7}", , , , "923123456"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "AO", 244, "00", , , , , , , , [
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						AR: [, [, , "11\\d{8}|(?:[2368]|9\\d)\\d{9}", , , , , , , [10, 11],
								[6, 7, 8]
							],
							[, , "(?:2(?:646[0-46-9]|9(?:45[02-69]|54[2-8]))|3(?:4(?:3(?:5[0-7]|6[1-69])|5(?:4[0-4679]|[56][024-6]))|585[013-7]|7(?:(?:1[15]|81)[46]|77[2-8])|8(?:(?:21|4[16]|9[12])[46]|35[124-6]|5(?:5[0-46-9]|6[0-246-9])|6(?:5[2-8]|9[46])|86[0-68])))\\d{5}|(?:2(?:284|657|9(?:20|66))|3(?:4(?:8[27]|92)|755|878))[2-7]\\d{5}|(?:2(?:2(?:2[59]|44|52)|3(?:26|4[24])|473|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|(?:2(?:(?:26|62)2|3(?:02|2[03])|477|9(?:42|83))|3(?:4(?:[47]6|62|89)|5(?:41|64)|873))[2-6]\\d{5}|(?:(?:11[2-7]|670)\\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-7]|[346][45])|80[45]|9(?:[17][4-6]|44|8[45]|9[3-6]))|3(?:364|4(?:1[2-7]|2[4-6]|[38]4)|5(?:1[2-8]|3[4-6]|8[46])|6(?:2[45]|44)|7[069][45]|8(?:0[45]|1[2-6]|34|5[34]|7[24-6]|8[3-5])))\\d{6}|2(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|475|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|(?:2(?:2(?:57|81)|3(?:24|46|92)|9(?:01|23|64))|3(?:329|4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|5[17])|888))[3-6]\\d{5}|(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|[24]5|5[25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[145]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}", , , , "1123456789", , , [10],
								[6, 7, 8]
							],
							[, , "9(?:2(?:646[0-46-9]|9(?:45[02-69]|54[2-8]))|3(?:4(?:3(?:5[0-7]|6[1-69])|5(?:4[0-4679]|[56][024-6]))|585[013-7]|7(?:(?:1[15]|81)[46]|77[2-8])|8(?:(?:21|4[16]|9[12])[46]|35[124-6]|5(?:5[0-46-9]|6[0-246-9])|6(?:5[2-8]|9[46])|86[0-68])))\\d{5}|9(?:2(?:284|657|9(?:20|66))|3(?:4(?:8[27]|92)|755|878))[2-7]\\d{5}|9(?:2(?:2(?:2[59]|44|52)|3(?:26|4[24])|473|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|9(?:2(?:(?:26|62)2|3(?:02|2[03])|477|9(?:42|83))|3(?:4(?:[47]6|62|89)|5(?:41|64)|873))[2-6]\\d{5}|(?:675\\d|9(?:11[2-7]\\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-7]|[346][45])|80[45]|9(?:[17][4-6]|44|8[45]|9[3-6]))|3(?:364|4(?:1[2-7]|2[4-6]|[38]4)|5(?:1[2-8]|3[4-6]|8[46])|6(?:2[45]|44)|7[069][45]|8(?:0[45]|1[2-6]|34|5[34]|7[24-6]|8[3-5]))))\\d{6}|92(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|475|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|9(?:2(?:2(?:57|81)|3(?:24|46|92)|9(?:01|23|64))|3(?:329|4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|5[17])|888))[3-6]\\d{5}|9(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|[24]5|5[25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[145]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}", , , , "91123456789", , , , [6, 7, 8]],
							[, , "800\\d{7}", , , , "8001234567", , , [10]],
							[, , "60[04579]\\d{7}", , , , "6001234567", , , [10]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "AR", 54, "00", "0", , , "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1", , , [
								[, "(\\d{3})", "$1", ["[09]|1(?:[02]|1[02-5])"]],
								[, "(\\d{2})(\\d{4})", "$1-$2", ["[2-7]|8[0-7]"]],
								[, "(\\d{3})(\\d{4})", "$1-$2", ["[2-7]|8[013-8]"]],
								[, "(\\d{4})(\\d{4})", "$1-$2", ["2[0-8]|[3-7]"]],
								[, "(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5(?:[24-6]|3[2-5]))|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", , 1],
								[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", , 1],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", , 1],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
								[, "(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5(?:[24-6]|3[2-5]))|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1"],
								[, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1"],
								[, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1"]
							],
							[
								[, "(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5(?:[24-6]|3[2-5]))|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", , 1],
								[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", , 1],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", , 1],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
								[, "(\\d)(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5(?:[24-6]|3[2-5]))|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"]],
								[, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3-$4", ["91"]],
								[, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3-$4", ["9"]]
							],
							[, , , , , , , , , [-1]], , , [, , "810\\d{7}", , , , , , , [10]],
							[, , "810\\d{7}", , , , "8101234567", , , [10]], , , [, , , , , , , , , [-1]]
						],
						AS: [, [, , "(?:[58]\\d\\d|684|900)\\d{7}", , , , , , , [10],
								[7]
							],
							[, , "6846(?:22|33|44|55|77|88|9[19])\\d{4}", , , , "6846221234", , , , [7]],
							[, , "684(?:2(?:5[2468]|72)|7(?:3[13]|70))\\d{4}", , , , "6847331234", , , , [7]],
							[, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
							[, , "900[2-9]\\d{6}", , , , "9002123456"],
							[, , , , , , , , , [-1]],
							[, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
							[, , , , , , , , , [-1]], "AS", 1, "011", "1", , , "1|([267]\\d{6})$", "684$1", , , , , [, , , , , , , , , [-1]], , "684", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						AT: [, [, , "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", , , , , , , [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
								[3]
							],
							[, , "1(?:11\\d|[2-9]\\d{3,11})|(?:316|463|(?:51|66|73)2)\\d{3,10}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-578]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|7[1368]|8[2457])|5(?:2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[135-8]|5[468])|7(?:2[1-8]|35|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{4,10}", , , , "1234567890", , , , [3]],
							[, , "6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}", , , , "664123456", , , [7, 8, 9, 10, 11, 12, 13]],
							[, , "800\\d{6,10}", , , , "800123456", , , [9, 10, 11, 12, 13]],
							[, , "9(?:0[01]|3[019])\\d{6,10}", , , , "900123456", , , [9, 10, 11, 12, 13]],
							[, , "8(?:10|2[018])\\d{6,10}|828\\d{5}", , , , "810123456", , , [8, 9, 10, 11, 12, 13]],
							[, , , , , , , , , [-1]],
							[, , "5(?:0[1-9]|17|[79]\\d)\\d{2,10}|7[28]0\\d{6,10}", , , , "780123456", , , [5, 6, 7, 8, 9, 10, 11, 12, 13]], "AT", 43, "00", "0", , , "0", , , , [
								[, "(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
								[, "(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
								[, "(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
								[, "(\\d{6})", "$1", ["1"]],
								[, "(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"],
								[, "(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
								[, "(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]
							],
							[
								[, "(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
								[, "(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
								[, "(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
								[, "(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"],
								[, "(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
								[, "(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]
							],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						AU: [, [, , "1\\d{4,9}|(?:[2-478]\\d\\d|550)\\d{6}", , , , , , , [5, 6, 7, 8, 9, 10]],
							[, , "(?:[237]\\d{5}|8(?:51(?:0(?:0[03-9]|[1247]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\d|4[0-4]))|(?:[6-8]\\d{3}|9(?:[02-9]\\d\\d|1(?:[0-57-9]\\d|6[0135-9])))\\d))\\d{3}", , , , "212345678", , , [9],
								[8]
							],
							[, , "4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}", , , , "412345678", , , [9]],
							[, , "180(?:0\\d{3}|2)\\d{3}", , , , "1800123456", , , [7, 10]],
							[, , "190[0-26]\\d{6}", , , , "1900123456", , , [10]],
							[, , "13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", , , , "1300123456", , , [6, 8, 10]],
							[, , , , , , , , , [-1]],
							[, , "1471\\d{5}|(?:145|550)\\d{6}", , , , "550123456", , , [9]], "AU", 61, "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "0", , , "0", , "0011", , [
								[, "(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
								[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["13"]],
								[, "(\\d{3})(\\d{3})", "$1 $2", ["19"]],
								[, "(\\d{3})(\\d{4})", "$1 $2", ["180", "1802"]],
								[, "(\\d{4})(\\d{3,4})", "$1 $2", ["19"]],
								[, "(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"],
								[, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
								[, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]
							],
							[
								[, "(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"],
								[, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
								[, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]
							],
							[, , "16\\d{3,7}", , , , "1612345", , , [5, 6, 7, 8, 9]], 1, , [, , "1[38]00\\d{6}|1(?:345[0-4]|802)\\d{3}|13\\d{4}", , , , , , , [6, 7, 8, 10]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						AW: [, [, , "(?:[25-79]\\d\\d|800)\\d{4}", , , , , , , [7]],
							[, , "5(?:2\\d|8[1-9])\\d{4}", , , , "5212345"],
							[, , "(?:290|5[69]\\d|6(?:[03]0|22|4[0-2]|[69]\\d)|7(?:[34]\\d|7[07])|9(?:6[45]|9[4-8]))\\d{4}", , , , "5601234"],
							[, , "800\\d{4}", , , , "8001234"],
							[, , "900\\d{4}", , , , "9001234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "(?:28\\d|501)\\d{4}", , , , "5011234"], "AW", 297, "00", , , , , , , , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						AX: [, [, , "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|(?:[147]\\d|3[0-46-9]|50)\\d{4,8}", , , , , , , [5, 6, 7, 8, 9, 10]],
							[, , "18[1-8]\\d{3,6}", , , , "181234567", , , [6, 7, 8, 9]],
							[, , "(?:4[0-8]|50)\\d{4,8}", , , , "412345678", , , [6, 7, 8, 9, 10]],
							[, , "800\\d{4,6}", , , , "800123456", , , [7, 8, 9]],
							[, , "[67]00\\d{5,6}", , , , "600123456", , , [8, 9]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "AX", 358, "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "0", , , "0", , "00", , , , [, , , , , , , , , [-1]], , "18", [, , , , , , , , , [-1]],
							[, , "(?:10|[23][09])\\d{4,8}|60(?:[12]\\d{5,6}|6\\d{7})|7(?:(?:1|3\\d)\\d{7}|5[03-9]\\d{3,7})|20[2-59]\\d\\d", , , , "10112345"], , , [, , , , , , , , , [-1]]
						],
						AZ: [, [, , "(?:365\\d{3}|900200)\\d{3}|(?:[12457]\\d|60|88)\\d{7}", , , , , , , [9],
								[7]
							],
							[, , "365(?:[0-46-9]\\d|5[0-35-9])\\d{4}|(?:1[28]\\d|2(?:[045]2|1[24]|2[2-4]|33|6[23]))\\d{6}", , , , "123123456", , , , [7]],
							[, , "36554\\d{4}|(?:4[04]|5[015]|60|7[07])\\d{7}", , , , "401234567"],
							[, , "88\\d{7}", , , , "881234567"],
							[, , "900200\\d{3}", , , , "900200123"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "AZ", 994, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[1-9]"]],
								[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[12]|365", "[12]|365", "[12]|365(?:[0-46-9]|5[0-35-9])"], "(0$1)"],
								[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[3-8]"], "0$1"]
							],
							[
								[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[12]|365", "[12]|365", "[12]|365(?:[0-46-9]|5[0-35-9])"], "(0$1)"],
								[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[3-8]"], "0$1"]
							],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						BA: [, [, , "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", , , , , , , [8, 9],
								[6]
							],
							[, , "(?:3(?:[05-79][2-9]|1[4579]|[23][24-9]|4[2-4689]|8[2457-9])|49[2-579]|5(?:0[2-49]|[13][2-9]|[268][2-4679]|4[4689]|5[2-79]|7[2-69]|9[2-4689]))\\d{5}", , , , "30212345", , , [8],
								[6]
							],
							[, , "6(?:0(?:3\\d|40)|[1-356]\\d|44[0-6]|71[137])\\d{5}", , , , "61123456"],
							[, , "8[08]\\d{6}", , , , "80123456", , , [8]],
							[, , "9[0246]\\d{6}", , , , "90123456", , , [8]],
							[, , "8[12]\\d{6}", , , , "82123456", , , [8]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "BA", 387, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{3})", "$1-$2", ["[2-9]"]],
								[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-356]|[7-9]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]"], "0$1"],
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]
							],
							[
								[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-356]|[7-9]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]"], "0$1"],
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]
							],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "70(?:3[0146]|[56]0)\\d{4}", , , , "70341234", , , [8]], , , [, , , , , , , , , [-1]]
						],
						BB: [, [, , "(?:246|[58]\\d\\d|900)\\d{7}", , , , , , , [10],
								[7]
							],
							[, , "246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7[35]7|9(?:1[89]|63))\\d{4}", , , , "2464123456", , , , [7]],
							[, , "246(?:2(?:[356]\\d|4[0-57-9]|8[0-79])|45\\d|69[5-7]|8(?:[2-5]\\d|83))\\d{4}", , , , "2462501234", , , , [7]],
							[, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
							[, , "(?:246976|900[2-9]\\d\\d)\\d{4}", , , , "9002123456", , , , [7]],
							[, , , , , , , , , [-1]],
							[, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
							[, , "24631\\d{5}", , , , "2463101234", , , , [7]], "BB", 1, "011", "1", , , "1|([2-9]\\d{6})$", "246$1", , , , , [, , , , , , , , , [-1]], , "246", [, , , , , , , , , [-1]],
							[, , "246(?:292|367|4(?:1[7-9]|3[01]|44|67)|7(?:36|53))\\d{4}", , , , "2464301234", , , , [7]], , , [, , , , , , , , , [-1]]
						],
						BD: [, [, , "[13469]\\d{9}|8[0-79]\\d{7,8}|[2-7]\\d{8}|[2-9]\\d{7}|[3-689]\\d{6}|[57-9]\\d{5}", , , , , , , [6, 7, 8, 9, 10]],
							[, , "(?:3(?:03[56]|224)|4(?:22[25]|653))\\d{3,4}|(?:4(?:31\\d\\d|[46]23)|5(?:222|32[37]))\\d{3}(?:\\d{2})?|(?:3(?:42[47]|529|823)|4(?:027|525|658)|(?:56|73)2|6257|9[35]1)\\d{3}|(?:3(?:02[348]|22[35]|324|422)|4(?:22[67]|32[236-9]|6(?:2[46]|5[57])|953)|5526|6(?:024|6655)|81)\\d{4,5}|(?:2(?:7(?:1[0-267]|2[0-289]|3[0-29]|4[01]|5[1-3]|6[013]|7[0178]|91)|8(?:0[125]|[13][1-6]|2[0157-9]|41|6[1-35]|7[1-5]|8[1-8]|9[0-6])|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[01367]|7[15]|8[0146-9]))|3(?:0(?:2[025-79]|3[2-4])|22[12]|32[2356]|824)|4(?:02[09]|22[348]|32[045]|523|6(?:27|54))|666(?:22|53)|8(?:4[12]|[5-7]2)|9(?:[024]2|81))\\d{4}|(?:2[45]\\d\\d|3(?:1(?:2[5-7]|[5-7])|425|822)|4(?:033|1\\d|[257]1|332|4(?:2[246]|5[25])|6(?:25|56|62)|8(?:23|54)|92[2-5])|5(?:02[03489]|22[457]|32[569]|42[46]|6(?:[18]|53)|724|826)|6(?:023|2(?:2[2-5]|5[3-5]|8)|32[3478]|42[34]|52[47]|6(?:[18]|6(?:2[34]|5[24]))|[78]2[2-5]|92[2-6])|7(?:02|21\\d|[3-589]1|6[12]|72[24])|8(?:0|217|3[12]|[5-7]1)|9[24]1)\\d{5}|(?:(?:3[2-8]|5[2-57-9]|6[03-589])1|4[4689][18])\\d{5}|[59]1\\d{5}", , , , "27111234"],
							[, , "(?:1[13-9]\\d|644)\\d{7}|(?:3[78]|44|66)[02-9]\\d{7}", , , , "1812345678", , , [10]],
							[, , "80[03]\\d{7}", , , , "8001234567", , , [10]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "96(?:0[469]|1[0-47]|3[389]|6[69]|7[78])\\d{6}", , , , "9604123456", , , [10]], "BD", 880, "00", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-7]|[459]1"], "0$1"],
								[, "(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"],
								[, "(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]"], "0$1"],
								[, "(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						BE: [, [, , "4\\d{8}|[1-9]\\d{7}", , , , , , , [8, 9]],
							[, , "80[2-8]\\d{5}|(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|8[1-79]|9[2-4])\\d{6}", , , , "12345678", , , [8]],
							[, , "4(?:5[56]|6[0135-8]|[79]\\d|8[3-9])\\d{6}", , , , "470123456", , , [9]],
							[, , "800[1-9]\\d{4}", , , , "80012345", , , [8]],
							[, , "(?:70(?:2[0-57]|3[0457]|44|69|7[0579])|90(?:0[0-35-8]|1[36]|2[0-3568]|3[0135689]|4[2-68]|5[1-68]|6[0-378]|7[23568]|9[34679]))\\d{4}", , , , "90012345", , , [8]],
							[, , "7879\\d{4}", , , , "78791234", , , [8]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "BE", 32, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"],
								[, "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"],
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"],
								[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "78(?:0[57]|1[0458]|2[25]|3[5-8]|48|[56]0|7[078])\\d{4}", , , , "78102345", , , [8]], , , [, , , , , , , , , [-1]]
						],
						BF: [, [, , "[25-7]\\d{7}", , , , , , , [8]],
							[, , "2(?:0(?:49|5[23]|6[56]|9[016-9])|4(?:4[569]|5[4-6]|6[56]|7[0179])|5(?:[34]\\d|50|6[5-7]))\\d{4}", , , , "20491234"],
							[, , "(?:5[124-8]|[67]\\d)\\d{6}", , , , "70123456"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "BF", 226, "00", , , , , , , , [
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[25-7]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						BG: [, [, , "[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", , , , , , , [6, 7, 8, 9],
								[4, 5]
							],
							[, , "2\\d{5,7}|(?:43[1-6]|70[1-9])\\d{4,5}|(?:[36]\\d|4[124-7]|[57][1-9]|8[1-6]|9[1-7])\\d{5,6}", , , , "2123456", , , [6, 7, 8],
								[4, 5]
							],
							[, , "43[07-9]\\d{5}|(?:48|8[7-9]\\d|9(?:8\\d|9[69]))\\d{6}", , , , "48123456", , , [8, 9]],
							[, , "800\\d{5}", , , , "80012345", , , [8]],
							[, , "90\\d{6}", , , , "90123456", , , [8]],
							[, , , , , , , , , [-1]],
							[, , "700\\d{5}", , , , "70012345", , , [8]],
							[, , , , , , , , , [-1]], "BG", 359, "00", "0", , , "0", , , , [
								[, "(\\d{6})", "$1", ["1"]],
								[, "(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
								[, "(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
								[, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"],
								[, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]
							],
							[
								[, "(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
								[, "(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
								[, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"],
								[, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]
							],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						BH: [, [, , "[136-9]\\d{7}", , , , , , , [8]],
							[, , "(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|7[7-9])|9[69][69])|7(?:1(?:11|78)|7\\d\\d))\\d{4}", , , , "17001234"],
							[, , "(?:3(?:[1-4679]\\d|5[013-69]|8[0-47-9])\\d|6(?:3(?:00|33|6[16])|6(?:3[03-9]|[69]\\d|7[0-6])))\\d{4}", , , , "36001234"],
							[, , "80\\d{6}", , , , "80123456"],
							[, , "(?:87|9[014578])\\d{6}", , , , "90123456"],
							[, , "84\\d{6}", , , , "84123456"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "BH", 973, "00", , , , , , , , [
								[, "(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[047]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						BI: [, [, , "(?:[267]\\d|31)\\d{6}", , , , , , , [8]],
							[, , "22\\d{6}", , , , "22201234"],
							[, , "(?:29|31|6[189]|7[125-9])\\d{6}", , , , "79561234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "BI", 257, "00", , , , , , , , [
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						BJ: [, [, , "[2689]\\d{7}", , , , , , , [8]],
							[, , "2(?:02|1[037]|2[45]|3[68])\\d{5}", , , , "20211234"],
							[, , "(?:6\\d|9[03-9])\\d{6}", , , , "90011234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "857[58]\\d{4}", , , , "85751234"], "BJ", 229, "00", , , , , , , , [
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "81\\d{6}", , , , "81123456"], , , [, , , , , , , , , [-1]]
						],
						BL: [, [, , "(?:590|69\\d)\\d{6}", , , , , , , [9]],
							[, , "590(?:2[7-9]|5[12]|87)\\d{4}", , , , "590271234"],
							[, , "69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}", , , , "690001234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "BL", 590, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						BM: [, [, , "(?:441|[58]\\d\\d|900)\\d{7}", , , , , , , [10],
								[7]
							],
							[, , "441(?:2(?:02|23|[3479]\\d|61)|[46]\\d\\d|5(?:4\\d|60|89)|824)\\d{4}", , , , "4412345678", , , , [7]],
							[, , "441(?:[37]\\d|5[0-39])\\d{5}", , , , "4413701234", , , , [7]],
							[, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
							[, , "900[2-9]\\d{6}", , , , "9002123456"],
							[, , , , , , , , , [-1]],
							[, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
							[, , , , , , , , , [-1]], "BM", 1, "011", "1", , , "1|([2-8]\\d{6})$", "441$1", , , , , [, , , , , , , , , [-1]], , "441", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						BN: [, [, , "[2-578]\\d{6}", , , , , , , [7]],
							[, , "22[0-7]\\d{4}|(?:2[013-9]|[3-5]\\d)\\d{5}", , , , "2345678"],
							[, , "(?:22[89]|[78]\\d\\d)\\d{4}", , , , "7123456"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "BN", 673, "00", , , , , , , , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						BO: [, [, , "(?:[2-467]\\d{3}|80017)\\d{4}", , , , , , , [8, 9],
								[7]
							],
							[, , "(?:2(?:2\\d\\d|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d\\d|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:[27]\\d|3[2-4]|4[248]|5[24]|6[2-6]))|4(?:4\\d\\d|6(?:11|[24689]\\d|72)))\\d{4}", , , , "22123456", , , [8],
								[7]
							],
							[, , "[67]\\d{7}", , , , "71234567", , , [8]],
							[, , "80017\\d{4}", , , , "800171234", , , [9]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "BO", 591, "00(?:1\\d)?", "0", , , "0(1\\d)?", , , , [
								[, "(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"], , "0$CC $1"],
								[, "(\\d{8})", "$1", ["[67]"], , "0$CC $1"],
								[, "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"], , "0$CC $1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						BQ: [, [, , "(?:[34]1|7\\d)\\d{5}", , , , , , , [7]],
							[, , "(?:318[023]|41(?:6[023]|70)|7(?:1[578]|50)\\d)\\d{3}", , , , "7151234"],
							[, , "(?:31(?:8[14-8]|9[14578])|416[14-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}", , , , "3181234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "BQ", 599, "00", , , , , , , , , , [, , , , , , , , , [-1]], , "[347]", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						BR: [, [, , "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", , , , , , , [8, 9, 10, 11]],
							[, , "(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}", , , , "1123456789", , , [10],
								[8]
							],
							[, , "(?:[189][1-9]|2[12478])(?:7|9\\d)\\d{7}|(?:3[1-578]|[46][1-9]|5[13-5]|7[13-579])(?:[6-8]\\d{7}|9\\d{7,8})", , , , "11961234567", , , [10, 11],
								[8, 9]
							],
							[, , "800\\d{6,7}", , , , "800123456", , , [9, 10]],
							[, , "300\\d{6}|[59]00\\d{6,7}", , , , "300123456", , , [9, 10]],
							[, , "300\\d{7}|[34]00\\d{5}|4(?:02|37)0\\d{4}", , , , "40041234", , , [8, 10]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "BR", 55, "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "0", , , "0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2", , , [
								[, "(\\d{3,5})", "$1", ["1(?:1[25-8]|2[357-9]|3[02-68]|4[12568]|5|6[0-8]|8[015]|9[0-47-9])"]],
								[, "(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]],
								[, "(\\d{4})(\\d{4})", "$1-$2", ["[2-9]", "[235-9]|4(?:[0-24-9]|3(?:[0-689]|7[1-9]))"]],
								[, "(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"],
								[, "(\\d{5})(\\d{4})", "$1-$2", ["9"]],
								[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[189][1-9]|2[12478])[2-57]|[3-7]"], "($1)", "0 $CC ($1)"],
								[, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["1[1-9]|[2-9]"], "($1)", "0 $CC ($1)"]
							],
							[
								[, "(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]],
								[, "(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"],
								[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[189][1-9]|2[12478])[2-57]|[3-7]"], "($1)", "0 $CC ($1)"],
								[, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["1[1-9]|[2-9]"], "($1)", "0 $CC ($1)"]
							],
							[, , , , , , , , , [-1]], , , [, , "4020\\d{4}|[34]00\\d{5}", , , , , , , [8]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						BS: [, [, , "(?:242|[58]\\d\\d|900)\\d{7}", , , , , , , [10],
								[7]
							],
							[, , "242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-4]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}", , , , "2423456789", , , , [7]],
							[, , "242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|[89]9))\\d{4}", , , , "2423591234", , , , [7]],
							[, , "242300\\d{4}|8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456", , , , [7]],
							[, , "900[2-9]\\d{6}", , , , "9002123456"],
							[, , , , , , , , , [-1]],
							[, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
							[, , , , , , , , , [-1]], "BS", 1, "011", "1", , , "1|([3-8]\\d{6})$", "242$1", , , , , [, , , , , , , , , [-1]], , "242", [, , , , , , , , , [-1]],
							[, , "242225[0-46-9]\\d{3}", , , , "2422250123"], , , [, , , , , , , , , [-1]]
						],
						BT: [, [, , "[17]\\d{7}|[2-8]\\d{6}", , , , , , , [7, 8],
								[6]
							],
							[, , "(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}", , , , "2345678", , , [7],
								[6]
							],
							[, , "(?:1[67]|77)\\d{6}", , , , "17123456", , , [8]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "BT", 975, "00", , , , , , , , [
								[, "(\\d{3})(\\d{3})", "$1 $2", ["[2-7]"]],
								[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]],
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]
							],
							[
								[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]],
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]
							],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						BW: [, [, , "90\\d{5}|(?:[2-6]|7\\d)\\d{6}", , , , , , , [7, 8]],
							[, , "(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0-35-9]|55|[69]\\d|7[01])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[0389]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}", , , , "2401234", , , [7]],
							[, , "77200\\d{3}|7(?:[1-6]\\d|7[014-8])\\d{5}", , , , "71123456", , , [8]],
							[, , , , , , , , , [-1]],
							[, , "90\\d{5}", , , , "9012345", , , [7]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "79(?:1(?:[01]\\d|20)|2[0-2]\\d)\\d{3}", , , , "79101234", , , [8]], "BW", 267, "00", , , , , , , , [
								[, "(\\d{2})(\\d{5})", "$1 $2", ["90"]],
								[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-6]"]],
								[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						BY: [, [, , "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", , , , , , , [6, 7, 8, 9, 10, 11],
								[5]
							],
							[, , "(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d\\d)|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}", , , , "152450911", , , [9],
								[5, 6, 7]
							],
							[, , "(?:2(?:5[5-79]|9[1-9])|(?:33|44)\\d)\\d{6}", , , , "294911911", , , [9]],
							[, , "800\\d{3,7}|8(?:0[13]|20\\d)\\d{7}", , , , "8011234567"],
							[, , "(?:810|902)\\d{7}", , , , "9021234567", , , [10]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "249\\d{6}", , , , "249123456", , , [9]], "BY", 375, "810", "8", , , "0|80?", , "8~10", , [
								[, "(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"],
								[, "(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"],
								[, "(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"],
								[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"],
								[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"],
								[, "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]
							], , [, , , , , , , , , [-1]], , , [, , "800\\d{3,7}|(?:8(?:0[13]|10|20\\d)|902)\\d{7}"],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						BZ: [, [, , "(?:0800\\d|[2-8])\\d{6}", , , , , , , [7, 11]],
							[, , "(?:236|732)\\d{4}|[2-578][02]\\d{5}", , , , "2221234", , , [7]],
							[, , "6[0-35-7]\\d{5}", , , , "6221234", , , [7]],
							[, , "0800\\d{7}", , , , "08001234123", , , [11]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "BZ", 501, "00", , , , , , , , [
								[, "(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
								[, "(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						CA: [, [, , "(?:[2-8]\\d|90)\\d{8}", , , , , , , [10],
								[7]
							],
							[, , "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", , , , "5062345678", , , , [7]],
							[, , "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", , , , "5062345678", , , , [7]],
							[, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
							[, , "900[2-9]\\d{6}", , , , "9002123456"],
							[, , , , , , , , , [-1]],
							[, , "(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}", , , , "5002345678"],
							[, , "600[2-9]\\d{6}", , , , "6002012345"], "CA", 1, "011", "1", , , "1", , , 1, , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						CC: [, [, , "1\\d{5,9}|(?:[48]\\d\\d|550)\\d{6}", , , , , , , [6, 7, 8, 9, 10]],
							[, , "8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", , , , "891621234", , , [9],
								[8]
							],
							[, , "4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}", , , , "412345678", , , [9]],
							[, , "180(?:0\\d{3}|2)\\d{3}", , , , "1800123456", , , [7, 10]],
							[, , "190[0-26]\\d{6}", , , , "1900123456", , , [10]],
							[, , "13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", , , , "1300123456", , , [6, 8, 10]],
							[, , , , , , , , , [-1]],
							[, , "1471\\d{5}|(?:145|550)\\d{6}", , , , "550123456", , , [9]], "CC", 61, "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "0", , , "0|([59]\\d{7})$", "8$1", "0011", , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						CD: [, [, , "[189]\\d{8}|[1-68]\\d{6}", , , , , , , [7, 9]],
							[, , "12\\d{7}|[1-6]\\d{6}", , , , "1234567"],
							[, , "88\\d{5}|(?:8[0-2459]|9[017-9])\\d{7}", , , , "991234567"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "CD", 243, "00", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
								[, "(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						CF: [, [, , "(?:[27]\\d{3}|8776)\\d{4}", , , , , , , [8]],
							[, , "2[12]\\d{6}", , , , "21612345"],
							[, , "7[0257]\\d{6}", , , , "70012345"],
							[, , , , , , , , , [-1]],
							[, , "8776\\d{4}", , , , "87761234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "CF", 236, "00", , , , , , , , [
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						CG: [, [, , "222\\d{6}|(?:0\\d|80)\\d{7}", , , , , , , [9]],
							[, , "222[1-589]\\d{5}", , , , "222123456"],
							[, , "0[14-6]\\d{7}", , , , "061234567"],
							[, , , , , , , , , [-1]],
							[, , "80(?:0\\d\\d|11[0-4])\\d{4}", , , , "800123456"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "CG", 242, "00", , , , , , , , [
								[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["801"]],
								[, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						CH: [, [, , "8\\d{11}|[2-9]\\d{8}", , , , , , , [9, 12]],
							[, , "(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}", , , , "212345678", , , [9]],
							[, , "7[35-9]\\d{7}", , , , "781234567", , , [9]],
							[, , "800\\d{6}", , , , "800123456", , , [9]],
							[, , "90[016]\\d{6}", , , , "900123456", , , [9]],
							[, , "84[0248]\\d{6}", , , , "840123456", , , [9]],
							[, , "878\\d{6}", , , , "878123456", , , [9]],
							[, , , , , , , , , [-1]], "CH", 41, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"],
								[, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]
							], , [, , "74[0248]\\d{6}", , , , "740123456", , , [9]], , , [, , , , , , , , , [-1]],
							[, , "5[18]\\d{7}", , , , "581234567", , , [9]], , , [, , "860\\d{9}", , , , "860123456789", , , [12]]
						],
						CI: [, [, , "[02-8]\\d{7}", , , , , , , [8]],
							[, , "(?:2(?:0[023]|1[02357]|[23][045]|4[03-5])|3(?:0[06]|1[069]|[2-4][07]|5[09]|6[08]))\\d{5}", , , , "21234567"],
							[, , "(?:[07][1-9]|[45]\\d|6[014-9]|8[4-9])\\d{6}", , , , "01234567"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "CI", 225, "00", , , , , , , , [
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[02-8]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						CK: [, [, , "[2-8]\\d{4}", , , , , , , [5]],
							[, , "(?:2\\d|3[13-7]|4[1-5])\\d{3}", , , , "21234"],
							[, , "[5-8]\\d{4}", , , , "71234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "CK", 682, "00", , , , , , , , [
								[, "(\\d{2})(\\d{3})", "$1 $2", ["[2-8]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						CL: [, [, , "1230\\d{7}|6\\d{9,10}|[2-9]\\d{8}", , , , , , , [9, 10, 11]],
							[, , "21962\\d{4}|(?:232[0-46-8]|80[1-9]\\d)\\d{5}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2-9])\\d{7}", , , , "221234567", , , [9]],
							[, , "21962\\d{4}|(?:232[0-46-8]|80[1-9]\\d)\\d{5}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2-9])\\d{7}", , , , "221234567", , , [9]],
							[, , "(?:1230\\d|800)\\d{6}", , , , "800123456", , , [9, 11]],
							[, , , , , , , , , [-1]],
							[, , "600\\d{7,8}", , , , "6001234567", , , [10, 11]],
							[, , , , , , , , , [-1]],
							[, , "44\\d{7}", , , , "441234567", , , [9]], "CL", 56, "(?:0|1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))0", , , , , , , 1, [
								[, "(\\d{4})", "$1", ["1(?:[03-589]|21)|[29]0|78"]],
								[, "(\\d{5})(\\d{4})", "$1 $2", ["21"], "($1)"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
								[, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[23]"], "($1)"],
								[, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"],
								[, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
								[, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
								[, "(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]
							],
							[
								[, "(\\d{5})(\\d{4})", "$1 $2", ["21"], "($1)"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
								[, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[23]"], "($1)"],
								[, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"],
								[, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
								[, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
								[, "(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]
							],
							[, , , , , , , , , [-1]], , , [, , "600\\d{7,8}", , , , , , , [10, 11]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						CM: [, [, , "(?:[26]\\d\\d|88)\\d{6}", , , , , , , [8, 9]],
							[, , "2(?:22|33|4[23])\\d{6}", , , , "222123456", , , [9]],
							[, , "6[5-9]\\d{7}", , , , "671234567", , , [9]],
							[, , "88\\d{6}", , , , "88012345", , , [8]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "CM", 237, "00", , , , , , , , [
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]],
								[, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						CN: [, [, , "1[1279]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-68]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", , , , , , , [7, 8, 9, 10, 11, 12],
								[5, 6]
							],
							[, , "(?:10(?:[02-79]\\d\\d|[18](?:0[1-9]|[1-9]\\d))|21(?:[18](?:0[1-9]|[1-9]\\d)|[2-79]\\d\\d))\\d{5}|(?:43[35]|754|851)\\d{7,8}|(?:10|(?:2|85)1|43[35]|754)(?:100\\d\\d|95\\d{3,4})|(?:2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[12])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[57]|6[09])|8(?:71|98))(?:[02-8]\\d{7}|1(?:0(?:0\\d\\d(?:\\d{3})?|[1-9]\\d{5})|[1-9]\\d{6})|9(?:[0-46-9]\\d{6}|5\\d{3}(?:\\d(?:\\d{2})?)?))|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[46-9]|5[2-9]|6[47-9]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-3689]|6[2368]|9[02-9])|8(?:078|1[236-8]|2[5-7]|3\\d|5[2-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[02-8]\\d{6}|1(?:0(?:0\\d\\d(?:\\d{2})?|[1-9]\\d{4})|[1-9]\\d{5})|9(?:[0-46-9]\\d{5}|5\\d{3,5}))", , , , "1012345678", , , [7, 8, 9, 10, 11],
								[5, 6]
							],
							[, , "1740[0-5]\\d{6}|1(?:[38]\\d|4[57]|5[0-35-9]|6[25-7]|7[0-35-8]|9[189])\\d{8}", , , , "13123456789", , , [11]],
							[, , "(?:(?:10|21)8|8)00\\d{7}", , , , "8001234567", , , [10, 12]],
							[, , "16[08]\\d{5}", , , , "16812345", , , [8]],
							[, , "400\\d{7}|950\\d{7,8}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}", , , , "4001234567", , , [7, 8, 9, 10, 11],
								[5, 6]
							],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "CN", 86, "00|1(?:[12]\\d|79|9[0-7])\\d\\d00", "0", , , "0|(1(?:[12]\\d|79|9[0-7])\\d\\d)", , "00", , [
								[, "(\\d{5,6})", "$1", ["96"]],
								[, "(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "(?:10|2[0-57-9])(?:100|9[56])"], "0$1", "$CC $1"],
								[, "(\\d{3})(\\d{4})", "$1 $2", ["[1-9]", "1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])", "1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[02-8]|1(?:0[1-9]|[1-9])|9[0-47-9])"]],
								[, "(\\d{4})(\\d{4})", "$1 $2", ["16[08]"]],
								[, "(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1", "$CC $1"],
								[, "(\\d{4})(\\d{4})", "$1 $2", ["[1-9]", "1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])", "26|3(?:[0268]|9[079])|4(?:[049]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|90)|6(?:[0-24578]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|50|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9])|(?:34|85[23])[0-8]|(?:1|58)[1-9]|(?:63|95)[06-9]|(?:33|85[23]9)[0-46-9]|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[0-8]|9[0-47-9])", "26|3(?:[0268]|3[0-46-9]|4[0-8]|9[079])|4(?:[049]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|90)|6(?:[0-24578]|3[06-9]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|5(?:0|[23](?:[02-8]|1[1-9]|9[0-46-9]))|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9]|5[06-9])|(?:1|58|85[23]10)[1-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[02-8]|1(?:0[1-9]|[1-9])|9[0-47-9])"]],
								[, "(\\d{4})(\\d{5,6})", "$1 $2", ["807", "8078", "8078[19]", "8078(?:10|95)", "8078(?:100|95)"], "0$1", "$CC $1"],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]],
								[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", "$CC $1", 1],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", "$CC $1", 1],
								[, "(\\d{3})(\\d{7,8})", "$1 $2", ["9"]],
								[, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", "$CC $1", 1],
								[, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", "$CC $1", 1],
								[, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"], , "$CC $1"],
								[, "(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", , 1]
							],
							[
								[, "(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "(?:10|2[0-57-9])(?:100|9[56])"], "0$1", "$CC $1"],
								[, "(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1", "$CC $1"],
								[, "(\\d{4})(\\d{5,6})", "$1 $2", ["807", "8078", "8078[19]", "8078(?:10|95)", "8078(?:100|95)"], "0$1", "$CC $1"],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]],
								[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", "$CC $1", 1],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", "$CC $1", 1],
								[, "(\\d{3})(\\d{7,8})", "$1 $2", ["9"]],
								[, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", "$CC $1", 1],
								[, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", "$CC $1", 1],
								[, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"], , "$CC $1"],
								[, "(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", , 1]
							],
							[, , , , , , , , , [-1]], , , [, , "(?:(?:10|21)8|[48])00\\d{7}|950\\d{7,8}", , , , , , , [10, 11, 12]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						CO: [, [, , "(?:1\\d|3)\\d{9}|[124-8]\\d{7}", , , , , , , [8, 10, 11],
								[7]
							],
							[, , "[124-8][2-9]\\d{6}", , , , "12345678", , , [8],
								[7]
							],
							[, , "3(?:0[0-5]|1\\d|2[0-3]|5[01])\\d{7}", , , , "3211234567", , , [10]],
							[, , "1800\\d{7}", , , , "18001234567", , , [11]],
							[, , "19(?:0[01]|4[78])\\d{7}", , , , "19001234567", , , [11]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "CO", 57, "00(?:4(?:[14]4|56)|[579])", "0", , , "0([3579]|4(?:[14]4|56))?", , , , [
								[, "(\\d)(\\d{7})", "$1 $2", ["1[2-79]|[25-8]|(?:18|4)[2-9]"], "($1)", "0$CC $1"],
								[, "(\\d{3})(\\d{7})", "$1 $2", ["3"], , "0$CC $1"],
								[, "(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1(?:80|9)", "1(?:800|9)"], "0$1"]
							],
							[
								[, "(\\d)(\\d{7})", "$1 $2", ["1[2-79]|[25-8]|(?:18|4)[2-9]"], "($1)", "0$CC $1"],
								[, "(\\d{3})(\\d{7})", "$1 $2", ["3"], , "0$CC $1"],
								[, "(\\d)(\\d{3})(\\d{7})", "$1 $2 $3", ["1(?:80|9)", "1(?:800|9)"]]
							],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						CR: [, [, , "(?:8\\d|90)\\d{8}|[24-8]\\d{7}", , , , , , , [8, 10]],
							[, , "210[7-9]\\d{4}|2(?:[024-7]\\d|1[1-9])\\d{5}", , , , "22123456", , , [8]],
							[, , "6500[01]\\d{3}|5(?:0[01]|7[0-3])\\d{5}|(?:6[0-4]|7[0-3]|8[3-9])\\d{6}", , , , "83123456", , , [8]],
							[, , "800\\d{7}", , , , "8001234567", , , [10]],
							[, , "90[059]\\d{7}", , , , "9001234567", , , [10]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "(?:210[0-6]|4\\d{3}|5100)\\d{4}", , , , "40001234", , , [8]], "CR", 506, "00", , , , "(19(?:0[0-2468]|1[09]|20|66|77|99))", , , , [
								[, "(\\d{4})(\\d{4})", "$1 $2", ["[24-7]|8[3-9]"], , "$CC $1"],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"], , "$CC $1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						CU: [, [, , "[27]\\d{6,7}|[34]\\d{5,7}|5\\d{7}", , , , , , , [6, 7, 8],
								[4, 5]
							],
							[, , "(?:3[23]|4[78])\\d{4,6}|(?:31|4[36])\\d{6}|(?:2[1-4]|4[125]|7\\d)\\d{5,6}", , , , "71234567", , , , [4, 5]],
							[, , "5\\d{7}", , , , "51234567", , , [8]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "CU", 53, "119", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{4,6})", "$1 $2", ["[2-4]"], "(0$1)"],
								[, "(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"],
								[, "(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						CV: [, [, , "[2-59]\\d{6}", , , , , , , [7]],
							[, , "2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}", , , , "2211234"],
							[, , "(?:[34][36]|5[1-389]|9\\d)\\d{5}", , , , "9911234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "CV", 238, "0", , , , , , , , [
								[, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-59]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						CW: [, [, , "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", , , , , , , [7, 8]],
							[, , "9(?:4(?:3[0-5]|4[14]|6\\d)|50\\d|7(?:2[014]|3[02-9]|4[4-9]|6[357]|77|8[7-9])|8(?:3[39]|[46]\\d|7[01]|8[57-9]))\\d{4}", , , , "94351234"],
							[, , "953[01]\\d{4}|9(?:5[12467]|6[5-9])\\d{5}", , , , "95181234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "60[0-2]\\d{4}", , , , "6001234", , , [7]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "CW", 599, "00", , , , , , , , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]],
								[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]
							], , [, , "955\\d{5}", , , , "95581234", , , [8]], 1, "[69]", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						CX: [, [, , "1\\d{5,9}|(?:[48]\\d\\d|550)\\d{6}", , , , , , , [6, 7, 8, 9, 10]],
							[, , "8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", , , , "891641234", , , [9],
								[8]
							],
							[, , "4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}", , , , "412345678", , , [9]],
							[, , "180(?:0\\d{3}|2)\\d{3}", , , , "1800123456", , , [7, 10]],
							[, , "190[0-26]\\d{6}", , , , "1900123456", , , [10]],
							[, , "13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", , , , "1300123456", , , [6, 8, 10]],
							[, , , , , , , , , [-1]],
							[, , "1471\\d{5}|(?:145|550)\\d{6}", , , , "550123456", , , [9]], "CX", 61, "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "0", , , "0|([59]\\d{7})$", "8$1", "0011", , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						CY: [, [, , "(?:[279]\\d|[58]0)\\d{6}", , , , , , , [8]],
							[, , "2[2-6]\\d{6}", , , , "22345678"],
							[, , "9[4-79]\\d{6}", , , , "96123456"],
							[, , "800\\d{5}", , , , "80001234"],
							[, , "90[09]\\d{5}", , , , "90012345"],
							[, , "80[1-9]\\d{5}", , , , "80112345"],
							[, , "700\\d{5}", , , , "70012345"],
							[, , , , , , , , , [-1]], "CY", 357, "00", , , , , , , , [
								[, "(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "(?:50|77)\\d{6}", , , , "77123456"], , , [, , , , , , , , , [-1]]
						],
						CZ: [, [, , "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", , , , , , , [9, 10, 11, 12]],
							[, , "(?:2\\d|3[1257-9]|4[16-9]|5[13-9])\\d{7}", , , , "212345678", , , [9]],
							[, , "(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}", , , , "601123456", , , [9]],
							[, , "800\\d{6}", , , , "800123456", , , [9]],
							[, , "9(?:0[05689]|76)\\d{6}", , , , "900123456", , , [9]],
							[, , "8[134]\\d{7}", , , , "811234567", , , [9]],
							[, , "70[01]\\d{6}", , , , "700123456", , , [9]],
							[, , "9[17]0\\d{6}", , , , "910123456", , , [9]], "CZ", 420, "00", , , , , , , , [
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
								[, "(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
								[, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "9(?:5\\d|7[2-4])\\d{6}", , , , "972123456", , , [9]], , , [, , "9(?:3\\d{9}|6\\d{7,10})", , , , "93123456789"]
						],
						DE: [, [, , "[2579]\\d{5,14}|49[67]0\\d{1,4}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|7[89]|9\\d)\\d{1,3}|49(?:[12]\\d|3[1-689]|7[1-7])\\d{1,8}|49(?:[05]\\d|[46][1-8])\\d{1,9}|(?:1|[368]\\d|4[0-8])\\d{3,13}", , , , , , , [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
								[3]
							],
							[, , "(?:2(?:0[1-689]|[1-3569]\\d|4[0-8]|7[1-7]|8[0-7])|5(?:0[2-8]|[124-6]\\d|[38][0-8]|[79][0-7])|6(?:0[02-9]|[1-3589]\\d|[47][0-8]|6[1-9])|7(?:0[2-8]|1[1-9]|[27][0-7]|3\\d|[4-6][0-8]|8[0-5]|9[013-7])|8(?:0[2-9]|1[0-79]|[29]\\d|3[0-46-9]|4[0-6]|5[013-9]|6[1-8]|7[0-8]|8[0-24-6])|9(?:0[6-9]|[1-4]\\d|[589][0-7]|6[0-8]|7[0-467]))\\d{4,12}|3(?:(?:[03569]\\d|4[0-79]|7[1-7]|8[1-8])\\d{4,12}|2\\d{9})|4(?:(?:[02-48]\\d|1[02-9]|5[0-6]|6[0-8]|7[0-79])\\d{4,12}|9(?:[0-37]\\d{4,9}|[4-6]\\d{4,10}))|(?:2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|[57][1-9]1|9(?:06|[1-9]1))\\d{3}|3(?:0\\d{3,4}|(?:[35-9][15]|4[015])\\d{3})|4(?:0\\d{3,4}|[2-9]1\\d{3})|[68](?:[1-8]1\\d{3}|9\\d{3,4})", , , , "30123456", , , [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
								[3, 4]
							],
							[, , "15[0-25-9]\\d{8}|1(?:6[023]|7\\d)\\d{7,8}", , , , "15123456789", , , [10, 11]],
							[, , "800\\d{7,12}", , , , "8001234567890", , , [10, 11, 12, 13, 14, 15]],
							[, , "(?:137[7-9]|900(?:[135]|9\\d))\\d{6}", , , , "9001234567", , , [10, 11]],
							[, , "180\\d{5,11}|13(?:7[1-6]\\d\\d|8)\\d{4}", , , , "18012345", , , [7, 8, 9, 10, 11, 12, 13, 14]],
							[, , "700\\d{8}", , , , "70012345678", , , [11]],
							[, , , , , , , , , [-1]], "DE", 49, "00", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
								[, "(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"],
								[, "(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"],
								[, "(\\d{4})(\\d{3,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"],
								[, "(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
								[, "(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"],
								[, "(\\d{5})(\\d{3,10})", "$1 $2", ["3"], "0$1"],
								[, "(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
								[, "(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"],
								[, "(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"],
								[, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
								[, "(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
								[, "(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"],
								[, "(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"],
								[, "(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"],
								[, "(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"],
								[, "(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"],
								[, "(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]
							], , [, , "16(?:4\\d{1,10}|[89]\\d{1,11})", , , , "16412345", , , [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]], , , [, , , , , , , , , [-1]],
							[, , "18(?:1\\d{5,11}|[2-9]\\d{8})", , , , "18500123456", , , [8, 9, 10, 11, 12, 13, 14]], , , [, , "1(?:6(?:013|255|399)|7(?:(?:[015]1|[69]3)3|[2-4]55|[78]99))\\d{7,8}|15(?:(?:[03-68]00|113)\\d|2\\d55|7\\d99|9\\d33)\\d{7}", , , , "177991234567", , , [12, 13]]
						],
						DJ: [, [, , "(?:2\\d|77)\\d{6}", , , , , , , [8]],
							[, , "2(?:1[2-5]|7[45])\\d{5}", , , , "21360003"],
							[, , "77\\d{6}", , , , "77831001"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "DJ", 253, "00", , , , , , , , [
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						DK: [, [, , "[2-9]\\d{7}", , , , , , , [8]],
							[, , "(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}", , , , "32123456"],
							[, , "(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}", , , , "32123456"],
							[, , "80\\d{6}", , , , "80123456"],
							[, , "90\\d{6}", , , , "90123456"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "DK", 45, "00", , , , , , , 1, [
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						DM: [, [, , "(?:[58]\\d\\d|767|900)\\d{7}", , , , , , , [10],
								[7]
							],
							[, , "767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4]|70[1-3])\\d{4}", , , , "7674201234", , , , [7]],
							[, , "767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-7])\\d{4}", , , , "7672251234", , , , [7]],
							[, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
							[, , "900[2-9]\\d{6}", , , , "9002123456"],
							[, , , , , , , , , [-1]],
							[, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
							[, , , , , , , , , [-1]], "DM", 1, "011", "1", , , "1|([2-7]\\d{6})$", "767$1", , , , , [, , , , , , , , , [-1]], , "767", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						DO: [, [, , "(?:[58]\\d\\d|900)\\d{7}", , , , , , , [10],
								[7]
							],
							[, , "8(?:[04]9[2-9]\\d\\d|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d\\d|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9])))\\d{4}", , , , "8092345678", , , , [7]],
							[, , "8[024]9[2-9]\\d{6}", , , , "8092345678", , , , [7]],
							[, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
							[, , "900[2-9]\\d{6}", , , , "9002123456"],
							[, , , , , , , , , [-1]],
							[, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
							[, , , , , , , , , [-1]], "DO", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "8[024]9", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						DZ: [, [, , "(?:[1-4]|[5-79]\\d|80)\\d{7}", , , , , , , [8, 9]],
							[, , "9619\\d{5}|(?:1\\d|2[013-79]|3[0-8]|4[0135689])\\d{6}", , , , "12345678"],
							[, , "67[0-6]\\d{6}|(?:5[4-6]|6[569]|7[7-9])\\d{7}", , , , "551234567", , , [9]],
							[, , "800\\d{6}", , , , "800123456", , , [9]],
							[, , "80[3-689]1\\d{5}", , , , "808123456", , , [9]],
							[, , "80[12]1\\d{5}", , , , "801123456", , , [9]],
							[, , , , , , , , , [-1]],
							[, , "98[23]\\d{6}", , , , "983123456", , , [9]], "DZ", 213, "00", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
								[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						EC: [, [, , "1800\\d{6,7}|(?:[2-7]|9\\d)\\d{7}", , , , , , , [8, 9, 10, 11],
								[7]
							],
							[, , "[2-7][2-7]\\d{6}", , , , "22123456", , , [8],
								[7]
							],
							[, , "9630\\d{5}|9(?:39|[57][89]|6[0-27-9]|[89]\\d)\\d{6}", , , , "991234567", , , [9]],
							[, , "1800\\d{6,7}", , , , "18001234567", , , [10, 11]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "[2-7]890\\d{4}", , , , "28901234", , , [8]], "EC", 593, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{4})", "$1-$2", ["[2-7]"]],
								[, "(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
								[, "(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]
							],
							[
								[, "(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-7]"]],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
								[, "(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]
							],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						EE: [, [, , "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d\\d|900)\\d{4}", , , , , , , [7, 8, 10]],
							[, , "(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}", , , , "3212345", , , [7]],
							[, , "(?:5\\d|8[1-4])\\d{6}|5(?:(?:[02]\\d|5[0-478])\\d|1(?:[0-8]\\d|95)|6(?:4[0-4]|5[1-589]))\\d{3}", , , , "51234567", , , [7, 8]],
							[, , "800(?:(?:0\\d\\d|1)\\d|[2-9])\\d{3}", , , , "80012345"],
							[, , "(?:40\\d\\d|900)\\d{4}", , , , "9001234", , , [7, 8]],
							[, , , , , , , , , [-1]],
							[, , "70[0-2]\\d{5}", , , , "70012345", , , [8]],
							[, , , , , , , , , [-1]], "EE", 372, "00", , , , , , , , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]],
								[, "(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-4])", "[45]|8(?:00[1-9]|[1-4])"]],
								[, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]],
								[, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["80"]]
							], , [, , , , , , , , , [-1]], , , [, , "800[2-9]\\d{3}", , , , , , , [7]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						EG: [, [, , "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", , , , , , , [8, 9, 10],
								[6, 7]
							],
							[, , "(?:15\\d|57[23])\\d{5,6}|(?:13[23]|(?:2[2-4]|3)\\d|4(?:0[2-5]|[578][23]|64)|5(?:0[2-7]|5\\d)|6[24-689]3|8(?:2[2-57]|4[26]|6[237]|8[2-4])|9(?:2[27]|3[24]|52|6[2356]|7[2-4]))\\d{6}", , , , "234567890", , , [8, 9],
								[6, 7]
							],
							[, , "1[0-25]\\d{8}", , , , "1001234567", , , [10]],
							[, , "800\\d{7}", , , , "8001234567", , , [10]],
							[, , "900\\d{7}", , , , "9001234567", , , [10]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "EG", 20, "00", "0", , , "0", , , , [
								[, "(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"],
								[, "(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[189]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						EH: [, [, , "[5-8]\\d{8}", , , , , , , [9]],
							[, , "528[89]\\d{5}", , , , "528812345"],
							[, , "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[017]))\\d{6}", , , , "650123456"],
							[, , "80\\d{7}", , , , "801234567"],
							[, , "89\\d{7}", , , , "891234567"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "5924[01]\\d{4}", , , , "592401234"], "EH", 212, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , "528[89]", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						ER: [, [, , "[178]\\d{6}", , , , , , , [7],
								[6]
							],
							[, , "(?:1(?:1[12568]|[24]0|55|6[146])|8\\d\\d)\\d{4}", , , , "8370362", , , , [6]],
							[, , "(?:17[1-3]|7\\d\\d)\\d{4}", , , , "7123456"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "ER", 291, "00", "0", , , "0", , , , [
								[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						ES: [, [, , "(?:51|[6-9]\\d)\\d{7}", , , , , , , [9]],
							[, , "96906(?:0[0-8]|1[1-9]|[2-9]\\d)\\d\\d|9(?:69(?:0[0-57-9]|[1-9]\\d)|73(?:[0-8]\\d|9[1-9]))\\d{4}|(?:8(?:[1356]\\d|[28][0-8]|[47][1-9])|9(?:[135]\\d|[268][0-8]|4[1-9]|7[124-9]))\\d{6}", , , , "810123456"],
							[, , "9(?:6906(?:09|10)|7390\\d\\d)\\d\\d|(?:6\\d|7[1-48])\\d{7}", , , , "612345678"],
							[, , "[89]00\\d{6}", , , , "800123456"],
							[, , "80[367]\\d{6}", , , , "803123456"],
							[, , "90[12]\\d{6}", , , , "901123456"],
							[, , "70\\d{7}", , , , "701234567"],
							[, , , , , , , , , [-1]], "ES", 34, "00", , , , , , , , [
								[, "(\\d{4})", "$1", ["905"]],
								[, "(\\d{6})", "$1", ["[79]9"]],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
								[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]
							],
							[
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
								[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]
							],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "51\\d{7}", , , , "511234567"], , , [, , , , , , , , , [-1]]
						],
						ET: [, [, , "(?:11|[2-59]\\d)\\d{7}", , , , , , , [9],
								[7]
							],
							[, , "(?:11(?:1(?:1[124]|2[2-57]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[578]|44|5[0-4])|6(?:18|2[69]|39|4[5-7]|5[1-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|(?:22|55)[0-6]|33[0134689]|44[04]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:(?:11|22)[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}", , , , "111112345", , , , [7]],
							[, , "9\\d{8}", , , , "911234567"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "ET", 251, "00", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-59]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						FI: [, [, , "(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}|[1-35689]\\d{4}", , , , , , , [5, 6, 7, 8, 9, 10]],
							[, , "(?:1[3-79][1-8]|[235689][1-8]\\d)\\d{2,6}", , , , "131234567", , , [5, 6, 7, 8, 9]],
							[, , "(?:4[0-8]|50)\\d{4,8}", , , , "412345678", , , [6, 7, 8, 9, 10]],
							[, , "800\\d{4,6}", , , , "800123456", , , [7, 8, 9]],
							[, , "[67]00\\d{5,6}", , , , "600123456", , , [8, 9]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "FI", 358, "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "0", , , "0", , "00", , [
								[, "(\\d{5})", "$1", ["75[12]"], "0$1"],
								[, "(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"],
								[, "(\\d{6})", "$1", ["11"]],
								[, "(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[12]0|7)0|[368]"], "0$1"],
								[, "(\\d{2})(\\d{4,8})", "$1 $2", ["[12457]"], "0$1"]
							],
							[
								[, "(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"],
								[, "(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[12]0|7)0|[368]"], "0$1"],
								[, "(\\d{2})(\\d{4,8})", "$1 $2", ["[12457]"], "0$1"]
							],
							[, , , , , , , , , [-1]], 1, "1[03-79]|[2-9]", [, , "20(?:2[023]|9[89])\\d{1,6}|60[12]\\d{5,6}|(?:606|7(?:1|3\\d))\\d{7}|(?:[1-3]00|75[03-9])\\d{3,7}"],
							[, , "(?:10|[23][09])\\d{4,8}|60(?:[12]\\d{5,6}|6\\d{7})|7(?:(?:1|3\\d)\\d{7}|5[03-9]\\d{3,7})|20[2-59]\\d\\d", , , , "10112345"], , , [, , , , , , , , , [-1]]
						],
						FJ: [, [, , "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", , , , , , , [7, 11]],
							[, , "603\\d{4}|(?:3[0-5]|6[25-7]|8[58])\\d{5}", , , , "3212345", , , [7]],
							[, , "(?:[279]\\d|45|5[01568]|8[034679])\\d{5}", , , , "7012345", , , [7]],
							[, , "0800\\d{7}", , , , "08001234567", , , [11]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "FJ", 679, "0(?:0|52)", , , , , , "00", , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]],
								[, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						FK: [, [, , "[2-7]\\d{4}", , , , , , , [5]],
							[, , "[2-47]\\d{4}", , , , "31234"],
							[, , "[56]\\d{4}", , , , "51234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "FK", 500, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						FM: [, [, , "[39]\\d{6}", , , , , , , [7]],
							[, , "(?:3[2357]0[1-9]|9[2-6]\\d\\d)\\d{3}", , , , "3201234"],
							[, , "(?:3[2357]0[1-9]|9[2-7]\\d\\d)\\d{3}", , , , "3501234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "FM", 691, "00", , , , , , , , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["[39]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						FO: [, [, , "(?:[2-8]\\d|90)\\d{4}", , , , , , , [6]],
							[, , "(?:20|[34]\\d|8[19])\\d{4}", , , , "201234"],
							[, , "(?:[27][1-9]|5\\d)\\d{4}", , , , "211234"],
							[, , "80[257-9]\\d{3}", , , , "802123"],
							[, , "90(?:[13-5][15-7]|2[125-7]|99)\\d\\d", , , , "901123"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "(?:6[0-36]|88)\\d{4}", , , , "601234"], "FO", 298, "00", , , , "(10(?:01|[12]0|88))", , , , [
								[, "(\\d{6})", "$1", ["[2-9]"], , "$CC $1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						FR: [, [, , "[1-9]\\d{8}", , , , , , , [9]],
							[, , "[1-5]\\d{8}", , , , "123456789"],
							[, , "700\\d{6}|(?:6\\d|7[3-9])\\d{7}", , , , "612345678"],
							[, , "80[0-5]\\d{6}", , , , "801234567"],
							[, , "8[129]\\d{7}", , , , "891123456"],
							[, , "884\\d{6}", , , , "884012345"],
							[, , , , , , , , , [-1]],
							[, , "9\\d{8}", , , , "912345678"], "FR", 33, "00", "0", , , "0", , , , [
								[, "(\\d{4})", "$1", ["10"]],
								[, "(\\d{3})(\\d{3})", "$1 $2", ["1"]],
								[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"],
								[, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]
							],
							[
								[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"],
								[, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]
							],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "80[6-9]\\d{6}", , , , "806123456"], , , [, , , , , , , , , [-1]]
						],
						GA: [, [, , "(?:0\\d|[2-7])\\d{6}", , , , , , , [7, 8]],
							[, , "01\\d{6}", , , , "01441234", , , [8]],
							[, , "(?:0[2-7]|[2-7])\\d{6}", , , , "06031234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "GA", 241, "00", , , , , , , , [
								[, "(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"],
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						GB: [, [, , "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", , , , , , , [7, 9, 10],
								[4, 5, 6, 8]
							],
							[, , "(?:1(?:1(?:3[0-58]|4[0-5]|5[0-26-9]|6[0-4]|[78][0-49])|2(?:0[024-9]|1[0-7]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)|3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))|2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d)\\d{6}|1(?:(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d|7(?:(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))\\d|6888[2-46-8]))\\d\\d", , , , "1212345678", , , [9, 10],
								[4, 5, 6, 7, 8]
							],
							[, , "7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", , , , "7400123456", , , [10]],
							[, , "80[08]\\d{7}|800\\d{6}|8001111", , , , "8001234567"],
							[, , "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", , , , "9012345678", , , [7, 10]],
							[, , , , , , , , , [-1]],
							[, , "70\\d{8}", , , , "7012345678", , , [10]],
							[, , "56\\d{8}", , , , "5612345678", , , [10]], "GB", 44, "00", "0", " x", , "0", , , , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"],
								[, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"],
								[, "(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"],
								[, "(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"],
								[, "(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"],
								[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[024-9])", "[25]|7(?:0|6(?:[04-9]|2[356]))"], "0$1"],
								[, "(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]
							], , [, , "76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", , , , "7640123456", , , [10]], 1, , [, , , , , , , , , [-1]],
							[, , "(?:3[0347]|55)\\d{8}", , , , "5512345678", , , [10]], , , [, , , , , , , , , [-1]]
						],
						GD: [, [, , "(?:473|[58]\\d\\d|900)\\d{7}", , , , , , , [10],
								[7]
							],
							[, , "473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}", , , , "4732691234", , , , [7]],
							[, , "473(?:4(?:0[2-79]|1[04-9]|2[0-5]|58)|5(?:2[01]|3[3-8])|901)\\d{4}", , , , "4734031234", , , , [7]],
							[, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
							[, , "900[2-9]\\d{6}", , , , "9002123456"],
							[, , , , , , , , , [-1]],
							[, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
							[, , , , , , , , , [-1]], "GD", 1, "011", "1", , , "1|([2-9]\\d{6})$", "473$1", , , , , [, , , , , , , , , [-1]], , "473", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						GE: [, [, , "(?:[3-57]\\d\\d|800)\\d{6}", , , , , , , [9],
								[6]
							],
							[, , "(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}", , , , "322123456", , , , [6]],
							[, , "(?:5(?:[14]4|5[0157-9]|68|7[0147-9]|9[1-35-9])|790)\\d{6}", , , , "555123456"],
							[, , "800\\d{6}", , , , "800123456"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "706\\d{6}", , , , "706123456"], "GE", 995, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
								[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]],
								[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , "706\\d{6}"],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						GF: [, [, , "[56]94\\d{6}", , , , , , , [9]],
							[, , "594(?:[023]\\d|1[01]|4[03-9]|5[6-9]|6[0-3]|80|9[014])\\d{4}", , , , "594101234"],
							[, , "694(?:[0-249]\\d|3[0-48])\\d{4}", , , , "694201234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "GF", 594, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						GG: [, [, , "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", , , , , , , [7, 9, 10],
								[6]
							],
							[, , "1481[25-9]\\d{5}", , , , "1481256789", , , [10],
								[6]
							],
							[, , "7(?:(?:781|839)\\d|911[17])\\d{5}", , , , "7781123456", , , [10]],
							[, , "80[08]\\d{7}|800\\d{6}|8001111", , , , "8001234567"],
							[, , "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", , , , "9012345678", , , [7, 10]],
							[, , , , , , , , , [-1]],
							[, , "70\\d{8}", , , , "7012345678", , , [10]],
							[, , "56\\d{8}", , , , "5612345678", , , [10]], "GG", 44, "00", "0", , , "0|([25-9]\\d{5})$", "1481$1", , , , , [, , "76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", , , , "7640123456", , , [10]], , , [, , , , , , , , , [-1]],
							[, , "(?:3[0347]|55)\\d{8}", , , , "5512345678", , , [10]], , , [, , , , , , , , , [-1]]
						],
						GH: [, [, , "(?:[235]\\d{3}|800)\\d{5}", , , , , , , [8, 9],
								[7]
							],
							[, , "3(?:[167]2[0-6]|22[0-5]|32[0-3]|4(?:2[013-9]|3[01])|52[0-7]|82[0-2])\\d{5}|3(?:[0-8]8|9[28])0\\d{5}|3(?:0[237]|[1-9]7)\\d{6}", , , , "302345678", , , [9],
								[7]
							],
							[, , "56[01]\\d{6}|(?:2[0346-8]|5[0457])\\d{7}", , , , "231234567", , , [9]],
							[, , "800\\d{5}", , , , "80012345", , , [8]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "GH", 233, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["[237]|80"]],
								[, "(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]
							],
							[
								[, "(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]
							],
							[, , , , , , , , , [-1]], , , [, , "800\\d{5}", , , , , , , [8]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						GI: [, [, , "(?:[25]\\d\\d|629)\\d{5}", , , , , , , [8]],
							[, , "2190[0-2]\\d{3}|2(?:00\\d|16[24-7]|2(?:2[2457]|50))\\d{4}", , , , "20012345"],
							[, , "(?:5[46-8]\\d|629)\\d{5}", , , , "57123456"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "GI", 350, "00", , , , , , , , [
								[, "(\\d{3})(\\d{5})", "$1 $2", ["2"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						GL: [, [, , "(?:19|[2-689]\\d)\\d{4}", , , , , , , [6]],
							[, , "(?:19|3[1-7]|6[14689]|8[14-79]|9\\d)\\d{4}", , , , "321000"],
							[, , "(?:[25][1-9]|4[2-9])\\d{4}", , , , "221234"],
							[, , "80\\d{4}", , , , "801234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "3[89]\\d{4}", , , , "381234"], "GL", 299, "00", , , , , , , , [
								[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-689]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						GM: [, [, , "[2-9]\\d{6}", , , , , , , [7]],
							[, , "(?:4(?:[23]\\d\\d|4(?:1[024679]|[6-9]\\d))|5(?:54[0-7]|6[67]\\d|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}", , , , "5661234"],
							[, , "(?:[23679]\\d|5[01])\\d{5}", , , , "3012345"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "GM", 220, "00", , , , , , , , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						GN: [, [, , "(?:30|6\\d\\d|722)\\d{6}", , , , , , , [8, 9]],
							[, , "30(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])\\d{4}", , , , "30241234", , , [8]],
							[, , "6[02356]\\d{7}", , , , "601123456", , , [9]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "722\\d{6}", , , , "722123456", , , [9]], "GN", 224, "00", , , , , , , , [
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
								[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						GP: [, [, , "(?:590|69\\d)\\d{6}", , , , , , , [9]],
							[, , "590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}", , , , "590201234"],
							[, , "69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}", , , , "690001234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "GP", 590, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]
							], , [, , , , , , , , , [-1]], 1, , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						GQ: [, [, , "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", , , , , , , [9]],
							[, , "33[0-24-9]\\d[46]\\d{4}|3(?:33|5\\d)\\d[7-9]\\d{4}", , , , "333091234"],
							[, , "(?:222|55[015])\\d{6}", , , , "222123456"],
							[, , "80\\d[1-9]\\d{5}", , , , "800123456"],
							[, , "90\\d[1-9]\\d{5}", , , , "900123456"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "GQ", 240, "00", , , , , , , , [
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
								[, "(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						GR: [, [, , "(?:[268]\\d|[79]0)\\d{8}", , , , , , , [10]],
							[, , "2(?:1\\d\\d|2(?:2[1-46-9]|[36][1-8]|4[1-7]|5[1-4]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|[269][1-6]|3[1245]|4[1-7]|5[13-9]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}", , , , "2123456789"],
							[, , "6(?:8[57-9]|9\\d)\\d{7}", , , , "6912345678"],
							[, , "800\\d{7}", , , , "8001234567"],
							[, , "90[19]\\d{7}", , , , "9091234567"],
							[, , "8(?:0[16]|12|25)\\d{7}", , , , "8011234567"],
							[, , "70\\d{8}", , , , "7012345678"],
							[, , , , , , , , , [-1]], "GR", 30, "00", , , , , , , , [
								[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
								[, "(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])"]],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						GT: [, [, , "(?:1\\d{3}|[2-7])\\d{7}", , , , , , , [8, 11]],
							[, , "[267][2-9]\\d{6}", , , , "22456789", , , [8]],
							[, , "[3-5]\\d{7}", , , , "51234567", , , [8]],
							[, , "18[01]\\d{8}", , , , "18001112222", , , [11]],
							[, , "19\\d{9}", , , , "19001112222", , , [11]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "GT", 502, "00", , , , , , , , [
								[, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]],
								[, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						GU: [, [, , "(?:[58]\\d\\d|671|900)\\d{7}", , , , , , , [10],
								[7]
							],
							[, , "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}", , , , "6713001234", , , , [7]],
							[, , "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}", , , , "6713001234", , , , [7]],
							[, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
							[, , "900[2-9]\\d{6}", , , , "9002123456"],
							[, , , , , , , , , [-1]],
							[, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
							[, , , , , , , , , [-1]], "GU", 1, "011", "1", , , "1|([3-9]\\d{6})$", "671$1", , 1, , , [, , , , , , , , , [-1]], , "671", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						GW: [, [, , "[49]\\d{8}|4\\d{6}", , , , , , , [7, 9]],
							[, , "443\\d{6}", , , , "443201234", , , [9]],
							[, , "9(?:5\\d|6[569]|77)\\d{6}", , , , "955012345", , , [9]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "40\\d{5}", , , , "4012345", , , [7]], "GW", 245, "00", , , , , , , , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["40"]],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						GY: [, [, , "(?:862\\d|9008)\\d{3}|(?:[2-46]\\d|77)\\d{5}", , , , , , , [7]],
							[, , "(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-24-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|77[1-57])\\d{4}", , , , "2201234"],
							[, , "6\\d{6}", , , , "6091234"],
							[, , "(?:289|862)\\d{4}", , , , "2891234"],
							[, , "9008\\d{3}", , , , "9008123"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "GY", 592, "001", , , , , , , , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-46-9]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						HK: [, [, , "8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}", , , , , , , [5, 6, 7, 8, 9, 11]],
							[, , "(?:384[04]|58(?:0[1-8]|1[2-9]))\\d{4}|(?:2(?:[13-8]\\d|2[013-9]|9[0-24-9])|3(?:[1569][0-24-9]|4[0-246-9]|7[0-24-69]|89))\\d{5}", , , , "21234567", , , [8]],
							[, , "(?:46(?:0[0-6]|1[0-2]|4[0-57-9])|5730|(?:626|848)[01]|707[1-5]|929[03-9])\\d{4}|(?:5(?:[1-59][0-46-9]|6[0-4689]|7[0-2469])|6(?:0[1-9]|[13-59]\\d|[268][0-57-9]|7[0-79])|9(?:0[1-9]|1[02-9]|[2358][0-8]|[467]\\d))\\d{5}", , , , "51234567", , , [8]],
							[, , "800\\d{6}", , , , "800123456", , , [9]],
							[, , "900(?:[0-24-9]\\d{7}|3\\d{1,4})", , , , "90012345678", , , [5, 6, 7, 8, 11]],
							[, , , , , , , , , [-1]],
							[, , "8(?:1[0-4679]\\d|2(?:[0-36]\\d|7[0-4])|3(?:[034]\\d|2[09]|70))\\d{4}", , , , "81123456", , , [8]],
							[, , , , , , , , , [-1]], "HK", 852, "00(?:30|5[09]|[126-9]?)", , , , , , "00", , [
								[, "(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]],
								[, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
								[, "(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
							], , [, , "7(?:1(?:0[0-38]|1[0-3679]|3[013]|69|9[136])|2(?:[02389]\\d|1[18]|7[27-9])|3(?:[0-38]\\d|7[0-369]|9[2357-9])|47\\d|5(?:[178]\\d|5[0-5])|6(?:0[0-7]|2[236-9]|[35]\\d)|7(?:[27]\\d|8[7-9])|8(?:[23689]\\d|7[1-9])|9(?:[025]\\d|6[0-246-8]|7[0-36-9]|8[238]))\\d{4}", , , , "71123456", , , [8]], , , [, , , , , , , , , [-1]],
							[, , "30(?:0[1-9]|[15-7]\\d|2[047]|89)\\d{4}", , , , "30161234", , , [8]], , , [, , , , , , , , , [-1]]
						],
						HN: [, [, , "[237-9]\\d{7}", , , , , , , [8]],
							[, , "2(?:2(?:0[019]|1[1-36]|[23]\\d|4[04-6]|5[57]|6[24]|7[0135689]|8[01346-9]|9[0-2])|4(?:07|2[3-59]|3[13-689]|4[0-68]|5[1-35])|5(?:08|16|4[03-5]|5\\d|6[4-6]|74|80)|6(?:[056]\\d|17|3[04]|4[0-378]|[78][0-8]|9[01])|7(?:6[46-9]|7[02-9]|8[034])|8(?:79|8[0-357-9]|9[1-57-9]))\\d{4}", , , , "22123456"],
							[, , "[37-9]\\d{7}", , , , "91234567"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "HN", 504, "00", , , , , , , , [
								[, "(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						HR: [, [, , "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", , , , , , , [6, 7, 8, 9]],
							[, , "1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}", , , , "12345678", , , [8, 9],
								[6, 7]
							],
							[, , "9(?:751\\d{5}|8\\d{6,7})|9(?:01|[1259]\\d|7[0679])\\d{6}", , , , "921234567", , , [8, 9]],
							[, , "80[01]\\d{4,6}", , , , "800123456", , , [7, 8, 9]],
							[, , "6[01459]\\d{6}|6[01]\\d{4,5}", , , , "611234", , , [6, 7, 8]],
							[, , , , , , , , , [-1]],
							[, , "7[45]\\d{6}", , , , "74123456", , , [8]],
							[, , , , , , , , , [-1]], "HR", 385, "00", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"],
								[, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"],
								[, "(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "62\\d{6,7}|72\\d{6}", , , , "62123456", , , [8, 9]], , , [, , , , , , , , , [-1]]
						],
						HT: [, [, , "[2-489]\\d{7}", , , , , , , [8]],
							[, , "2(?:2\\d|5[1-5]|81|9[149])\\d{5}", , , , "22453300"],
							[, , "[34]\\d{7}", , , , "34101234"],
							[, , "8\\d{7}", , , , "80012345"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "9(?:[67][0-4]|8[0-3589]|9\\d)\\d{5}", , , , "98901234"], "HT", 509, "00", , , , , , , , [
								[, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-489]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						HU: [, [, , "[2357]\\d{8}|[1-9]\\d{7}", , , , , , , [8, 9],
								[6, 7]
							],
							[, , "(?:1\\d|[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|8[2-57-9]|9[2-69])\\d{6}", , , , "12345678", , , [8],
								[6, 7]
							],
							[, , "(?:[257]0|3[01])\\d{7}", , , , "201234567", , , [9]],
							[, , "[48]0\\d{6}", , , , "80123456", , , [8]],
							[, , "9[01]\\d{6}", , , , "90123456", , , [8]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "21\\d{7}", , , , "211234567", , , [9]], "HU", 36, "00", "06", , , "06", , , , [
								[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "($1)"],
								[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "($1)"]
							], , [, , , , , , , , , [-1]], , , [, , "[48]0\\d{6}", , , , , , , [8]],
							[, , "38\\d{7}", , , , "381234567", , , [9]], , , [, , , , , , , , , [-1]]
						],
						ID: [, [, , "(?:[1-36]|8\\d{5})\\d{6}|[1-9]\\d{8,10}|[2-9]\\d{7}", , , , , , , [7, 8, 9, 10, 11, 12],
								[5, 6]
							],
							[, , "2[124]\\d{7,8}|619\\d{8}|2(?:1(?:14|500)|2\\d{3})\\d{3}|61\\d{5,8}|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:[25]\\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}", , , , "218350123", , , [7, 8, 9, 10, 11],
								[5, 6]
							],
							[, , "8[1-35-9]\\d{7,10}", , , , "812345678", , , [9, 10, 11, 12]],
							[, , "(?:177\\d|800)\\d{5,7}", , , , "8001234567", , , [8, 9, 10, 11]],
							[, , "809\\d{7}", , , , "8091234567", , , [10]],
							[, , "804\\d{7}", , , , "8041234567", , , [10]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "ID", 62, "0(?:0[17-9]|10(?:00|1[67]))", "0", , , "0", , , , [
								[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]],
								[, "(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
								[, "(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"],
								[, "(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"],
								[, "(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
								[, "(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
								[, "(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"],
								[, "(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , "8071\\d{6}", , , , , , , [10]],
							[, , "(?:1500|8071\\d{3})\\d{3}", , , , "8071123456", , , [7, 10]], , , [, , , , , , , , , [-1]]
						],
						IE: [, [, , "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", , , , , , , [7, 8, 9, 10],
								[5, 6]
							],
							[, , "(?:1\\d|21)\\d{6,7}|(?:2[24-9]|4(?:0[24]|5\\d|7)|5(?:0[45]|1\\d|8)|6(?:1\\d|[237-9])|9(?:1\\d|[35-9]))\\d{5}|(?:23|4(?:[1-469]|8[0-46-9])|5[23679]|6[4-6]|7[14]|9[04])\\d{7}", , , , "2212345", , , , [5, 6]],
							[, , "8(?:22|[35-9]\\d)\\d{6}", , , , "850123456", , , [9]],
							[, , "1800\\d{6}", , , , "1800123456", , , [10]],
							[, , "15(?:1[2-8]|[2-8]0|9[089])\\d{6}", , , , "1520123456", , , [10]],
							[, , "18[59]0\\d{6}", , , , "1850123456", , , [10]],
							[, , "700\\d{6}", , , , "700123456", , , [9]],
							[, , "76\\d{7}", , , , "761234567", , , [9]], "IE", 353, "00", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"],
								[, "(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"],
								[, "(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"],
								[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"],
								[, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
								[, "(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"],
								[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"]
							], , [, , , , , , , , , [-1]], , , [, , "18[59]0\\d{6}", , , , , , , [10]],
							[, , "818\\d{6}", , , , "818123456", , , [9]], , , [, , "8[35-9]5\\d{7}", , , , "8551234567", , , [10]]
						],
						IL: [, [, , "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", , , , , , , [7, 8, 9, 10, 11, 12]],
							[, , "153\\d{8,9}|[2-489]\\d{7}", , , , "21234567", , , [8, 11, 12],
								[7]
							],
							[, , "5(?:(?:[0-489][2-9]|6\\d)\\d|5(?:01|2[2-5]|3[23]|4[45]|5[05689]|6[6-8]|7[0-267]|8[7-9]|9[1-9]))\\d{5}", , , , "502345678", , , [9]],
							[, , "1(?:255|80[019]\\d{3})\\d{3}", , , , "1800123456", , , [7, 10]],
							[, , "1212\\d{4}|1(?:200|9(?:0[01]|19))\\d{6}", , , , "1919123456", , , [8, 10]],
							[, , "1700\\d{6}", , , , "1700123456", , , [10]],
							[, , , , , , , , , [-1]],
							[, , "78(?:33|55|77|81)\\d{5}|7(?:18|2[23]|3[237]|47|6[58]|7\\d|82|9[2357-9])\\d{6}", , , , "771234567", , , [9]], "IL", 972, "0(?:0|1[2-9])", "0", , , "0", , , , [
								[, "(\\d{4})(\\d{3})", "$1-$2", ["125"]],
								[, "(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]],
								[, "(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
								[, "(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]],
								[, "(\\d{4})(\\d{6})", "$1-$2", ["159"]],
								[, "(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
								[, "(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]
							], , [, , , , , , , , , [-1]], , , [, , "1700\\d{6}", , , , , , , [10]],
							[, , "1599\\d{6}", , , , "1599123456", , , [10]], , , [, , "151\\d{8,9}", , , , "15112340000", , , [11, 12]]
						],
						IM: [, [, , "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", , , , , , , [10],
								[6]
							],
							[, , "1624[5-8]\\d{5}", , , , "1624756789", , , , [6]],
							[, , "7(?:4576|[59]24\\d|624[0-4689])\\d{5}", , , , "7924123456"],
							[, , "808162\\d{4}", , , , "8081624567"],
							[, , "8(?:440[49]06|72299\\d)\\d{3}|(?:8(?:45|70)|90[0167])624\\d{4}", , , , "9016247890"],
							[, , , , , , , , , [-1]],
							[, , "70\\d{8}", , , , "7012345678"],
							[, , "56\\d{8}", , , , "5612345678"], "IM", 44, "00", "0", , , "0|([5-8]\\d{5})$", "1624$1", , , , , [, , , , , , , , , [-1]], , "74576|(?:16|7[56])24", [, , , , , , , , , [-1]],
							[, , "3440[49]06\\d{3}|(?:3(?:08162|3\\d{4}|45624|7(?:0624|2299))|55\\d{4})\\d{4}", , , , "5512345678"], , , [, , , , , , , , , [-1]]
						],
						IN: [, [, , "(?:00800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", , , , , , , [8, 9, 10, 11, 12, 13],
								[6, 7]
							],
							[, , "782[0-6][2-7]\\d{5}|(?:170[24]|2(?:80[13468]|90\\d)|380\\d|4(?:20[24]|72[2-8])|552[1-7])\\d{6}|(?:342|674|788)(?:[0189][2-7]|[2-7]\\d)\\d{5}|(?:11|2[02]|33|4[04]|79|80)[2-7]\\d{7}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[13]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[014-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\\d{6}|(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[13-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1-5]|4[5-8]|5[125689]|6[235-7]|7[157-9]|8[2-46-8])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|8[013-7]|9[0189])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\\d[2-7]\\d{5}", , , , "7410410123", , , [10],
								[6, 7, 8]
							],
							[, , "(?:6(?:1279|350[0-6])|7(?:3(?:1(?:11|7[02-8])|411)|4[47](?:11|7[02-8])|5111|700[02-9]|88(?:11|7[02-9])|9(?:313|79[07-9]))|8(?:079[04-9]|(?:16|2[014]|3[126]|6[136]|7[78]|8[34]|91)7[02-8]))\\d{5}|7(?:28[6-8]|3(?:2[0-49]|9[2-5])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7])[089]\\d{5}|(?:6(?:0(?:0[0-3569]|26|33)|2(?:[06]\\d|3[02589]|8[0-479]|9[0-79])|3(?:0[0-79]|5[1-9]|6[0-4679]|7[0-24-9]|[89]\\d)|9(?:0[019]|13))|7(?:0\\d\\d|19[0-5]|2(?:[0235-79]\\d|[14][017-9]|8[0-59])|3(?:[05-8]\\d|1[089]|2[5-8]|3[017-9]|4[07-9]|9[016-9])|4(?:0\\d|1[015-9]|[29][89]|39|[47][089]|8[389])|5(?:[0346-8]\\d|1[07-9]|2[04-9]|5[017-9]|9[7-9])|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589]|[6-9]\\d)|7(?:0[289]|[1-9]\\d)|8(?:[0-79]\\d|8[089])|9(?:[089]\\d|7[02-8]))|8(?:0(?:[01589]\\d|6[67]|7[02-8])|1(?:[0-57-9]\\d|6[089])|2(?:[014][089]|[235-9]\\d)|3(?:[03-57-9]\\d|[126][089])|[45]\\d\\d|6(?:[02457-9]\\d|[136][089])|7(?:0[07-9]|[1-69]\\d|[78][089])|8(?:[0-25-9]\\d|3[089]|4[0489])|9(?:[02-9]\\d|1[0289]))|9\\d{3})\\d{6}", , , , "8123456789", , , [10]],
							[, , "00800\\d{7}|1(?:600\\d{6}|80(?:0\\d{4,9}|3\\d{9}))", , , , "1800123456"],
							[, , "186[12]\\d{9}", , , , "1861123456789", , , [13]],
							[, , "1860\\d{7}", , , , "18603451234", , , [11]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "IN", 91, "00", "0", , , "0", , , , [
								[, "(\\d{7})", "$1", ["575"]],
								[, "(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], , , 1],
								[, "(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], , , 1],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], , , 1],
								[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", , 1],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|(?:55|61)2|7(?:31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:1(?:29|60|8[06])|261|552|788[01])[2-7]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])"], "0$1", , 1],
								[, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|[4-8])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|3179)|807(?:1|9[1-3])|(?:1552|7(?:28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", , 1],
								[, "(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", , 1],
								[, "(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], , , 1],
								[, "(\\d{2})(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3 $4", ["0"], "0$1", , 1],
								[, "(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], , , 1]
							],
							[
								[, "(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], , , 1],
								[, "(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], , , 1],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], , , 1],
								[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", , 1],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|(?:55|61)2|7(?:31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:1(?:29|60|8[06])|261|552|788[01])[2-7]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])"], "0$1", , 1],
								[, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|[4-8])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|3179)|807(?:1|9[1-3])|(?:1552|7(?:28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", , 1],
								[, "(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", , 1],
								[, "(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], , , 1],
								[, "(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], , , 1]
							],
							[, , , , , , , , , [-1]], , , [, , "1(?:600\\d{6}|800\\d{4,9})|(?:00800|18(?:03\\d\\d|6(?:0|[12]\\d\\d)))\\d{7}"],
							[, , "140\\d{7}", , , , "1409305260", , , [10]], , , [, , , , , , , , , [-1]]
						],
						IO: [, [, , "3\\d{6}", , , , , , , [7]],
							[, , "37\\d{5}", , , , "3709100"],
							[, , "38\\d{5}", , , , "3801234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "IO", 246, "00", , , , , , , , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["3"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						IQ: [, [, , "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", , , , , , , [8, 9, 10],
								[6, 7]
							],
							[, , "1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}", , , , "12345678", , , [8, 9],
								[6, 7]
							],
							[, , "7[3-9]\\d{8}", , , , "7912345678", , , [10]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "IQ", 964, "00", "0", , , "0", , , , [
								[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						IR: [, [, , "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", , , , , , , [4, 5, 6, 7, 10],
								[8]
							],
							[, , "944111\\d{4}|94(?:(?:00|44)0|(?:11|2\\d)\\d|30[01])\\d{5}|(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])(?:[03-57]\\d{7}|[16]\\d{3}(?:\\d{4})?|[289]\\d{3}(?:\\d(?:\\d{3})?)?)", , , , "2123456789", , , [6, 7, 10],
								[4, 5, 8]
							],
							[, , "9(?:(?:0(?:[1-35]\\d|44)|(?:[13]\\d|2[0-2])\\d)\\d|9(?:(?:[0-2]\\d|44)\\d|510|8(?:1\\d|88)|9(?:0[013]|1[0134]|21|77|9[6-9])))\\d{5}", , , , "9123456789", , , [10]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "993\\d{7}", , , , "9932123456", , , [10]], "IR", 98, "00", "0", , , "0", , , , [
								[, "(\\d{4,5})", "$1", ["96"], "0$1"],
								[, "(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
								[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , "96(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19])|94(?:11[1-7]|440)\\d{5}", , , , , , , [4, 5, 10]],
							[, , "96(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19])", , , , "9601", , , [4, 5]], , , [, , , , , , , , , [-1]]
						],
						IS: [, [, , "(?:38\\d|[4-9])\\d{6}", , , , , , , [7, 9]],
							[, , "(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-245]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[0-579]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|87[23])\\d{4}", , , , "4101234", , , [7]],
							[, , "(?:38[589]\\d\\d|6(?:1[1-8]|2[0-6]|3[027-9]|4[014679]|5[0159]|6[0-69]|70|8[06-8]|9\\d)|7(?:5[057]|[6-8]\\d|9[0-3])|8(?:2[0-59]|[3469]\\d|5[1-9]|8[28]))\\d{4}", , , , "6111234"],
							[, , "800\\d{4}", , , , "8001234", , , [7]],
							[, , "90\\d{5}", , , , "9011234", , , [7]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "49\\d{5}", , , , "4921234", , , [7]], "IS", 354, "00|1(?:0(?:01|[12]0)|100)", , , , , , "00", , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "809\\d{4}", , , , "8091234", , , [7]], , , [, , "(?:689|8(?:7[0189]|80)|95[48])\\d{4}", , , , "6891234", , , [7]]
						],
						IT: [, [, , "0\\d{6,10}|55\\d{8}|[08]\\d{5}|(?:3[0-8]|8)\\d{7,9}|(?:1\\d|39)\\d{7,8}", , , , , , , [6, 7, 8, 9, 10, 11]],
							[, , "0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}", , , , "0212345678"],
							[, , "33\\d{9}|3[1-9]\\d{8}|3[2-9]\\d{7}", , , , "3123456789", , , [9, 10, 11]],
							[, , "80(?:0\\d{3}|3)\\d{3}", , , , "800123456", , , [6, 9]],
							[, , "(?:0878\\d\\d|89(?:2|4[5-9]\\d))\\d{3}|89[45][0-4]\\d\\d|(?:1(?:44|6[346])|89(?:5[5-9]|9))\\d{6}", , , , "899123456", , , [6, 8, 9, 10]],
							[, , "84(?:[08]\\d{3}|[17])\\d{3}", , , , "848123456", , , [6, 9]],
							[, , "1(?:78\\d|99)\\d{6}", , , , "1781234567", , , [9, 10]],
							[, , "55\\d{8}", , , , "5512345678", , , [10]], "IT", 39, "00", , , , , , , , [
								[, "(\\d{4,5})", "$1", ["1(?:0|9[246])", "1(?:0|9(?:2[2-9]|[46]))"]],
								[, "(\\d{6})", "$1", ["1(?:1|92)"]],
								[, "(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
								[, "(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],
								[, "(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]],
								[, "(\\d{4})(\\d{4})", "$1 $2", ["894"]],
								[, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
								[, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1[4679]|[38]"]],
								[, "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]],
								[, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3"]],
								[, "(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
								[, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
							],
							[
								[, "(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
								[, "(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],
								[, "(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]],
								[, "(\\d{4})(\\d{4})", "$1 $2", ["894"]],
								[, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
								[, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1[4679]|[38]"]],
								[, "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]],
								[, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3"]],
								[, "(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
								[, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
							],
							[, , , , , , , , , [-1]], 1, , [, , "848\\d{6}", , , , , , , [9]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						JE: [, [, , "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", , , , , , , [10],
								[6]
							],
							[, , "1534[0-24-8]\\d{5}", , , , "1534456789", , , , [6]],
							[, , "7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}", , , , "7797712345"],
							[, , "80(?:07(?:35|81)|8901)\\d{4}", , , , "8007354567"],
							[, , "(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}", , , , "9018105678"],
							[, , , , , , , , , [-1]],
							[, , "701511\\d{4}", , , , "7015115678"],
							[, , "56\\d{8}", , , , "5612345678"], "JE", 44, "00", "0", , , "0|([0-24-8]\\d{5})$", "1534$1", , , , , [, , "76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", , , , "7640123456"], , , [, , , , , , , , , [-1]],
							[, , "(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}", , , , "5512345678"], , , [, , , , , , , , , [-1]]
						],
						JM: [, [, , "(?:[58]\\d\\d|658|900)\\d{7}", , , , , , , [10],
								[7]
							],
							[, , "(?:658[2-9]\\d\\d|876(?:5(?:0[12]|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[0237-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468])))\\d{4}", , , , "8765230123", , , , [7]],
							[, , "876(?:(?:2[14-9]|[348]\\d)\\d|5(?:0[3-9]|17|[2-57-9]\\d|6[0-24-9])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579]))\\d{4}", , , , "8762101234", , , , [7]],
							[, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
							[, , "900[2-9]\\d{6}", , , , "9002123456"],
							[, , , , , , , , , [-1]],
							[, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
							[, , , , , , , , , [-1]], "JM", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "658|876", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						JO: [, [, , "900\\d{5}|(?:(?:[268]|7\\d)\\d|32|53)\\d{6}", , , , , , , [8, 9]],
							[, , "(?:2(?:6(?:2[0-35-9]|3[0-578]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[57][023]|6[03])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2(?:[05]0|22)|3(?:00|33)|4(?:0[0-25]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[178]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[0239]))|87(?:[029]0|7[08]))\\d{4}", , , , "62001234", , , [8]],
							[, , "7(?:55[0-49]|(?:7[025-9]|[89][0-25-9])\\d)\\d{5}", , , , "790123456", , , [9]],
							[, , "80\\d{6}", , , , "80012345", , , [8]],
							[, , "900\\d{5}", , , , "90012345", , , [8]],
							[, , "85\\d{6}", , , , "85012345", , , [8]],
							[, , "70\\d{7}", , , , "700123456", , , [9]],
							[, , , , , , , , , [-1]], "JO", 962, "00", "0", , , "0", , , , [
								[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
								[, "(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"],
								[, "(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"],
								[, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
							], , [, , "74(?:66|77)\\d{5}", , , , "746612345", , , [9]], , , [, , , , , , , , , [-1]],
							[, , "8(?:10|8\\d)\\d{5}", , , , "88101234", , , [8]], , , [, , , , , , , , , [-1]]
						],
						JP: [, [, , "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", , , , , , , [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]],
							[, , "(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|(?:2[2-9]|[36][1-9])\\d|4(?:[2-578]\\d|6[02-8]|9[2-59])|5(?:[2-589]\\d|6[1-9]|7[2-8])|7(?:[25-9]\\d|3[4-9]|4[02-9])|8(?:[2679]\\d|3[2-9]|4[5-9]|5[1-9]|8[03-9])|9(?:[2-58]\\d|[679][1-9]))\\d{6}", , , , "312345678", , , [9]],
							[, , "[7-9]0[1-9]\\d{7}", , , , "9012345678", , , [10]],
							[, , "00(?:(?:37|66)\\d{6,13}|(?:777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)\\d\\d)|(?:120|800\\d)\\d{6}", , , , "120123456"],
							[, , "990\\d{6}", , , , "990123456", , , [9]],
							[, , , , , , , , , [-1]],
							[, , "60\\d{7}", , , , "601234567", , , [9]],
							[, , "50[1-9]\\d{7}", , , , "5012345678", , , [10]], "JP", 81, "010", "0", , , "0", , , , [
								[, "(\\d{4})(\\d{4})", "$1-$2", ["007", "0077", "00777", "00777[01]"]],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
								[, "(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"],
								[, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["2(?:[34]7|[56]9|74|9[14-79])|82[0367]|993", "2(?:[34]7|[56]9|74|9(?:1[02-689]|[4-79]))|82[0367]|993[0-25-9]", "2(?:[34]7|59(?:[02-8]|1[0-689]|9[0-8])|69|74|9(?:1[02-689]|[4-79]))|82[0367]|993[0-25-9]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["2(?:2[12]|3[0-269]|4[59]|5[0-468]|62|7[1-35]|8[16]|9[0238])|4(?:2[1-57]|3[0-57]|[45]|6[28]|7[259]|8[1-9]|9[29])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|9(?:4[15]|9[12489])", "2(?:2[12]|3[0-269]|4[59]|5(?:[04][01]|[1-3]|[68]1)|62|7[1-35]|8[16]|9(?:[028]|3[015-9]))|4(?:2(?:[13-57]|21)|3[0-57]|[45]|6[28]|7(?:2|[59][019])|8[1-9]|9[29])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|9(?:4[15]|9(?:[1289]|4[0178]))"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|60|8(?:2[124589]|3[279]|49|6[0-24-689]|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|5[138]|6[1-3]|7[156]|8[189]|93)", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:3[014-9]|7)|5(?:5[0-69]|[68]0|7[015-9]|9)|78[0189]|8(?:3[0134]|9[0-5])|917)|4(?:2(?:20|6|8[014-6]|9[178])|64|7[347])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|60|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3[29]|49|6(?:[0-24]|5[0-3589]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|5[138]|6[1-3]|7[156]|8[189]|93[34])|(?:264|837)[016-9]|(?:59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:(?:2|91)7|5(?:5[0-69]|[68]0|7[015-9]|9)|64[016-9]|78[0189]|8(?:3[0134]|9[0-5]))|4(?:2(?:20|6|8[014-6])|64|7[347])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|60|8(?:2(?:[1258]|4[0-39]|9(?:[0169]|2[1-9]|4[1-3]))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6[01]|9[0145])|7[0-468]|8[68])|9(?:[23][1-9]|5[138]|6[1-3]|7[156]|8[189]|93(?:31|4[357]))|(?:42|866)9[178]|(?:223|8699)[014-9]|(?:59[89]|8(?:68|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:(?:2|91)7|5(?:5[0-69]|[68]0|7[015-9]|9)|64[016-9]|78[0189]|8(?:3[0134]|9[0-5]))|4(?:2(?:20|6|8[014-6])|64|7[347])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|60|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6[01]|9[0145])|7[0-468]|8[68])|9(?:5[138]|6[1-3]|7[156]|8[189]|93(?:31|4[357]))|(?:42|866)9[178]|(?:223|8699)[014-9]|(?:829(?:2|66)|9[23])[1-9]|(?:59[89]|8(?:68|9))[019]"], "0$1"],
								[, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2[09]|7(?:0[019]|1))"], "0$1"],
								[, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3[3-8]|5[2-9])", "[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3(?:[3-6][2-9]|7|8[2-5])|5[2-9])"], "0$1"],
								[, "(\\d{4})(\\d{2})(\\d{3,4})", "$1-$2-$3", ["007"]],
								[, "(\\d{4})(\\d{2})(\\d{4})", "$1-$2-$3", ["008"]],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
								[, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]|80"], "0$1"],
								[, "(\\d{4})(\\d{3})(\\d{3,4})", "$1-$2-$3", ["0"]],
								[, "(\\d{4})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["0"]],
								[, "(\\d{4})(\\d{5})(\\d{5,6})", "$1-$2-$3", ["0"]],
								[, "(\\d{4})(\\d{6})(\\d{6,7})", "$1-$2-$3", ["0"]]
							],
							[
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
								[, "(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"],
								[, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["2(?:[34]7|[56]9|74|9[14-79])|82[0367]|993", "2(?:[34]7|[56]9|74|9(?:1[02-689]|[4-79]))|82[0367]|993[0-25-9]", "2(?:[34]7|59(?:[02-8]|1[0-689]|9[0-8])|69|74|9(?:1[02-689]|[4-79]))|82[0367]|993[0-25-9]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["2(?:2[12]|3[0-269]|4[59]|5[0-468]|62|7[1-35]|8[16]|9[0238])|4(?:2[1-57]|3[0-57]|[45]|6[28]|7[259]|8[1-9]|9[29])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|9(?:4[15]|9[12489])", "2(?:2[12]|3[0-269]|4[59]|5(?:[04][01]|[1-3]|[68]1)|62|7[1-35]|8[16]|9(?:[028]|3[015-9]))|4(?:2(?:[13-57]|21)|3[0-57]|[45]|6[28]|7(?:2|[59][019])|8[1-9]|9[29])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|9(?:4[15]|9(?:[1289]|4[0178]))"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|60|8(?:2[124589]|3[279]|49|6[0-24-689]|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|5[138]|6[1-3]|7[156]|8[189]|93)", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:3[014-9]|7)|5(?:5[0-69]|[68]0|7[015-9]|9)|78[0189]|8(?:3[0134]|9[0-5])|917)|4(?:2(?:20|6|8[014-6]|9[178])|64|7[347])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|60|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3[29]|49|6(?:[0-24]|5[0-3589]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|5[138]|6[1-3]|7[156]|8[189]|93[34])|(?:264|837)[016-9]|(?:59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:(?:2|91)7|5(?:5[0-69]|[68]0|7[015-9]|9)|64[016-9]|78[0189]|8(?:3[0134]|9[0-5]))|4(?:2(?:20|6|8[014-6])|64|7[347])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|60|8(?:2(?:[1258]|4[0-39]|9(?:[0169]|2[1-9]|4[1-3]))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6[01]|9[0145])|7[0-468]|8[68])|9(?:[23][1-9]|5[138]|6[1-3]|7[156]|8[189]|93(?:31|4[357]))|(?:42|866)9[178]|(?:223|8699)[014-9]|(?:59[89]|8(?:68|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:(?:2|91)7|5(?:5[0-69]|[68]0|7[015-9]|9)|64[016-9]|78[0189]|8(?:3[0134]|9[0-5]))|4(?:2(?:20|6|8[014-6])|64|7[347])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|60|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6[01]|9[0145])|7[0-468]|8[68])|9(?:5[138]|6[1-3]|7[156]|8[189]|93(?:31|4[357]))|(?:42|866)9[178]|(?:223|8699)[014-9]|(?:829(?:2|66)|9[23])[1-9]|(?:59[89]|8(?:68|9))[019]"], "0$1"],
								[, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2[09]|7(?:0[019]|1))"], "0$1"],
								[, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3[3-8]|5[2-9])", "[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3(?:[3-6][2-9]|7|8[2-5])|5[2-9])"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
								[, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]|80"], "0$1"]
							],
							[, , "20\\d{8}", , , , "2012345678", , , [10]], , , [, , "00(?:777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)\\d\\d|00(?:37|66)\\d{6,13}"],
							[, , "570\\d{6}", , , , "570123456", , , [9]], , , [, , , , , , , , , [-1]]
						],
						KE: [, [, , "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", , , , , , , [7, 8, 9, 10]],
							[, , "(?:4[245]|5[1-79]|6[01457-9])\\d{5,7}|(?:4[136]|5[08]|62)\\d{7}|(?:[24]0|66)\\d{6,7}", , , , "202012345", , , [7, 8, 9]],
							[, , "[17]\\d{8}", , , , "712123456", , , [9]],
							[, , "800[24-8]\\d{5,6}", , , , "800223456", , , [9, 10]],
							[, , "900[02-9]\\d{5}", , , , "900223456", , , [9]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "KE", 254, "000", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"],
								[, "(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						KG: [, [, , "(?:[235-7]\\d|99)\\d{7}|800\\d{6,7}", , , , , , , [9, 10],
								[5, 6]
							],
							[, , "(?:3(?:1(?:[256]\\d|3[1-9]|47)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}", , , , "312123456", , , [9],
								[5, 6]
							],
							[, , "(?:2(?:0[0-35]|2\\d)|5[0-24-7]\\d|7(?:[07]\\d|55)|99[69])\\d{6}", , , , "700123456", , , [9]],
							[, , "800\\d{6,7}", , , , "800123456"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "KG", 996, "00", "0", , , "0", , , , [
								[, "(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						KH: [, [, , "1\\d{9}|[1-9]\\d{7,8}", , , , , , , [8, 9, 10],
								[6, 7]
							],
							[, , "23(?:4(?:[2-4]|[56]\\d)|[568]\\d\\d)\\d{4}|23[236-9]\\d{5}|(?:2[4-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:(?:[237-9]|4[56]|5\\d)\\d{5}|6\\d{5,6})", , , , "23756789", , , [8, 9],
								[6, 7]
							],
							[, , "(?:(?:1[28]|3[18]|9[67])\\d|6[016-9]|7(?:[07-9]|[16]\\d)|8(?:[013-79]|8\\d))\\d{6}|(?:1\\d|9[0-57-9])\\d{6}|(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])48\\d{5}", , , , "91234567", , , [8, 9]],
							[, , "1800(?:1\\d|2[019])\\d{4}", , , , "1800123456", , , [10]],
							[, , "1900(?:1\\d|2[09])\\d{4}", , , , "1900123456", , , [10]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "KH", 855, "00[14-9]", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"],
								[, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						KI: [, [, , "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", , , , , , , [5, 8]],
							[, , "(?:[24]\\d|3[1-9]|50|65(?:02[12]|12[56]|22[89]|[3-5]00)|7(?:27\\d\\d|3100|5(?:02[12]|12[56]|22[89]|[34](?:00|81)|500))|8[0-5])\\d{3}", , , , "31234"],
							[, , "73140\\d{3}|(?:630[01]|730[0-5])\\d{4}|[67]200[01]\\d{3}", , , , "72001234", , , [8]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "30(?:0[01]\\d\\d|12(?:11|20))\\d\\d", , , , "30010000", , , [8]], "KI", 686, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						KM: [, [, , "[3478]\\d{6}", , , , , , , [7]],
							[, , "7[4-7]\\d{5}", , , , "7712345"],
							[, , "[34]\\d{6}", , , , "3212345"],
							[, , , , , , , , , [-1]],
							[, , "8\\d{6}", , , , "8001234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "KM", 269, "00", , , , , , , , [
								[, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						KN: [, [, , "(?:[58]\\d\\d|900)\\d{7}", , , , , , , [10],
								[7]
							],
							[, , "869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}", , , , "8692361234", , , , [7]],
							[, , "869(?:5(?:5[6-8]|6[5-7])|66\\d|76[02-7])\\d{4}", , , , "8697652917", , , , [7]],
							[, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
							[, , "900[2-9]\\d{6}", , , , "9002123456"],
							[, , , , , , , , , [-1]],
							[, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
							[, , , , , , , , , [-1]], "KN", 1, "011", "1", , , "1|([2-7]\\d{6})$", "869$1", , , , , [, , , , , , , , , [-1]], , "869", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						KP: [, [, , "85\\d{6}|(?:19\\d|2)\\d{7}", , , , , , , [8, 10],
								[6, 7]
							],
							[, , "(?:2\\d|85)\\d{6}", , , , "21234567", , , [8],
								[6, 7]
							],
							[, , "19[1-3]\\d{7}", , , , "1921234567", , , [10]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "KP", 850, "00|99", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
								[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , "238[02-9]\\d{4}|2(?:[0-24-9]\\d|3[0-79])\\d{5}", , , , , , , [8]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						KR: [, [, , "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", , , , , , , [5, 6, 8, 9, 10, 11, 12, 13, 14],
								[3, 4, 7]
							],
							[, , "(?:2|3[1-3]|[46][1-4]|5[1-5])[1-9]\\d{6,7}|(?:3[1-3]|[46][1-4]|5[1-5])1\\d{2,3}", , , , "22123456", , , [5, 6, 8, 9, 10],
								[3, 4, 7]
							],
							[, , "1[0-26-9]\\d{7,8}", , , , "1000000000", , , [9, 10]],
							[, , "00(?:308\\d{6,7}|798\\d{7,9})|(?:00368|80)\\d{7}", , , , "801234567", , , [9, 11, 12, 13, 14]],
							[, , "60[2-9]\\d{6}", , , , "602345678", , , [9]],
							[, , , , , , , , , [-1]],
							[, , "50\\d{8,9}", , , , "5012345678", , , [10, 11]],
							[, , "70\\d{8}", , , , "7012345678", , , [10]], "KR", 82, "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "0", , , "0(8(?:[1-46-8]|5\\d\\d))?", , , , [
								[, "(\\d{5})", "$1", ["1[016-9]1", "1[016-9]11", "1[016-9]114"], "0$1"],
								[, "(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1", "0$CC-$1"],
								[, "(\\d{4})(\\d{4})", "$1-$2", ["1"]],
								[, "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1", "0$CC-$1"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1", "0$CC-$1"],
								[, "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1", "0$CC-$1"],
								[, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1", "0$CC-$1"],
								[, "(\\d{5})(\\d{3})(\\d{3})", "$1 $2 $3", ["003", "0030"]],
								[, "(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1", "0$CC-$1"],
								[, "(\\d{5})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0"]],
								[, "(\\d{5})(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["0"]]
							],
							[
								[, "(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1", "0$CC-$1"],
								[, "(\\d{4})(\\d{4})", "$1-$2", ["1"]],
								[, "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1", "0$CC-$1"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1", "0$CC-$1"],
								[, "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1", "0$CC-$1"],
								[, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1", "0$CC-$1"],
								[, "(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1", "0$CC-$1"]
							],
							[, , "15\\d{7,8}", , , , "1523456789", , , [9, 10]], , , [, , "00(?:3(?:08\\d{6,7}|68\\d{7})|798\\d{7,9})", , , , , , , [11, 12, 13, 14]],
							[, , "1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))\\d{4}", , , , "15441234", , , [8]], , , [, , , , , , , , , [-1]]
						],
						KW: [, [, , "(?:18|[2569]\\d\\d)\\d{5}", , , , , , , [7, 8]],
							[, , "2(?:[23]\\d\\d|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7]))\\d{4}", , , , "22345678", , , [8]],
							[, , "(?:52(?:22|5[25])|6(?:222|70[013-9]|93[039])|9(?:11[01]|702))\\d{4}|(?:5(?:[05]\\d|1[0-7]|6[56])|6(?:0[034679]|5[015-9]|6\\d|7[67]|9[069])|9(?:0[09]|22|4[01479]|55|6[0679]|7[1-9]|8[057-9]|9\\d))\\d{5}", , , , "50012345", , , [8]],
							[, , "18\\d{5}", , , , "1801234", , , [7]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "KW", 965, "00", , , , , , , , [
								[, "(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]],
								[, "(\\d{3})(\\d{5})", "$1 $2", ["[25]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						KY: [, [, , "(?:345|[58]\\d\\d|900)\\d{7}", , , , , , , [10],
								[7]
							],
							[, , "345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}", , , , "3452221234", , , , [7]],
							[, , "345(?:32[1-9]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|9(?:1[67]|2[2-9]|3[689]))\\d{4}", , , , "3453231234", , , , [7]],
							[, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
							[, , "(?:345976|900[2-9]\\d\\d)\\d{4}", , , , "9002345678"],
							[, , , , , , , , , [-1]],
							[, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
							[, , , , , , , , , [-1]], "KY", 1, "011", "1", , , "1|([2-9]\\d{6})$", "345$1", , , , , [, , "345849\\d{4}", , , , "3458491234"], , "345", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						KZ: [, [, , "33622\\d{5}|(?:7\\d|80)\\d{8}", , , , , , , [10],
								[5, 6]
							],
							[, , "(?:33622|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[2-4]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[2-4]\\d|5[139])|4(?:2\\d|3[1-35-9]|59)|5(?:[23]\\d|4[0-246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59))))\\d{5}", , , , "7123456789", , , , [5, 6]],
							[, , "7(?:0[0-2578]|47|6[02-4]|7[15-8]|85)\\d{7}", , , , "7710009998"],
							[, , "800\\d{7}", , , , "8001234567"],
							[, , "809\\d{7}", , , , "8091234567"],
							[, , , , , , , , , [-1]],
							[, , "808\\d{7}", , , , "8081234567"],
							[, , "751\\d{7}", , , , "7511234567"], "KZ", 7, "810", "8", , , "8", , "8~10", , , , [, , , , , , , , , [-1]], , "33|7", [, , "751\\d{7}"],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						LA: [, [, , "(?:2\\d|3)\\d{8}|(?:[235-8]\\d|41)\\d{6}", , , , , , , [8, 9, 10],
								[6]
							],
							[, , "(?:2[13]|[35-7][14]|41|8[1468])\\d{6}", , , , "21212862", , , [8],
								[6]
							],
							[, , "20(?:[29]\\d|5[24-689]|7[6-8])\\d{6}", , , , "2023123456", , , [10]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "LA", 856, "00", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"],
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"],
								[, "(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "30\\d{7}", , , , "301234567", , , [9]], , , [, , , , , , , , , [-1]]
						],
						LB: [, [, , "[7-9]\\d{7}|[13-9]\\d{6}", , , , , , , [7, 8]],
							[, , "(?:(?:[14-69]\\d|8[02-9])\\d|7(?:[2-57]\\d|62|8[0-7]|9[04-9]))\\d{4}", , , , "1123456", , , [7]],
							[, , "(?:(?:3|81)\\d|7(?:[01]\\d|6[013-9]|8[89]|9[1-3]))\\d{5}", , , , "71123456"],
							[, , , , , , , , , [-1]],
							[, , "9[01]\\d{6}", , , , "90123456", , , [8]],
							[, , "80\\d{6}", , , , "80123456", , , [8]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "LB", 961, "00", "0", , , "0", , , , [
								[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						LC: [, [, , "(?:[58]\\d\\d|758|900)\\d{7}", , , , , , , [10],
								[7]
							],
							[, , "758(?:4(?:30|5\\d|6[2-9]|8[0-2])|57[0-2]|638)\\d{4}", , , , "7584305678", , , , [7]],
							[, , "758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[01]))\\d{4}", , , , "7582845678", , , , [7]],
							[, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
							[, , "900[2-9]\\d{6}", , , , "9002123456"],
							[, , , , , , , , , [-1]],
							[, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
							[, , , , , , , , , [-1]], "LC", 1, "011", "1", , , "1|([2-7]\\d{6})$", "758$1", , , , , [, , , , , , , , , [-1]], , "758", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						LI: [, [, , "90\\d{5}|(?:[2378]|6\\d\\d)\\d{6}", , , , , , , [7, 9]],
							[, , "(?:2(?:01|1[27]|22|3\\d|6[02-578]|96)|3(?:33|40|7[0135-7]|8[048]|9[0269]))\\d{4}", , , , "2345678", , , [7]],
							[, , "756\\d{4}|(?:6(?:499|5[0-3]\\d|6(?:0[0-7]|10|2[06-9]|39))|7[37-9])\\d{5}", , , , "660234567"],
							[, , "80(?:02[28]|9\\d\\d)\\d\\d", , , , "8002222", , , [7]],
							[, , "90(?:02[258]|1(?:23|3[14])|66[136])\\d\\d", , , , "9002222", , , [7]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "LI", 423, "00", "0", , , "0|(10(?:01|20|66))", , , , [
								[, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[237-9]"], , "$CC $1"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"], , "$CC $1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"], , "$CC $1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "870(?:28|87)\\d\\d", , , , "8702812", , , [7]], , , [, , "697(?:56|[78]\\d)\\d{4}", , , , "697861234", , , [9]]
						],
						LK: [, [, , "(?:[1-7]\\d|[89]1)\\d{7}", , , , , , , [9],
								[7]
							],
							[, , "(?:[189]1|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}", , , , "112345678", , , , [7]],
							[, , "7[0-25-8]\\d{7}", , , , "712345678"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "LK", 94, "00", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "1973\\d{5}", , , , "197312345"], , , [, , , , , , , , , [-1]]
						],
						LR: [, [, , "(?:2|33|5\\d|77|88)\\d{7}|[45]\\d{6}", , , , , , , [7, 8, 9]],
							[, , "(?:2\\d{3}|33333)\\d{4}", , , , "21234567", , , [8, 9]],
							[, , "(?:(?:330|555|(?:77|88)\\d)\\d|4[67])\\d{5}|5\\d{6}", , , , "770123456", , , [7, 9]],
							[, , , , , , , , , [-1]],
							[, , "332(?:02|[34]\\d)\\d{4}", , , , "332021234", , , [9]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "LR", 231, "00", "0", , , "0", , , , [
								[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[45]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3578]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						LS: [, [, , "(?:[256]\\d\\d|800)\\d{5}", , , , , , , [8]],
							[, , "2\\d{7}", , , , "22123456"],
							[, , "[56]\\d{7}", , , , "50123456"],
							[, , "800[256]\\d{4}", , , , "80021234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "LS", 266, "00", , , , , , , , [
								[, "(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						LT: [, [, , "(?:[3469]\\d|52|[78]0)\\d{6}", , , , , , , [8]],
							[, , "(?:3[1478]|4[124-6]|52)\\d{6}", , , , "31234567"],
							[, , "6\\d{7}", , , , "61234567"],
							[, , "800\\d{5}", , , , "80012345"],
							[, , "9(?:0[0239]|10)\\d{5}", , , , "90012345"],
							[, , "808\\d{5}", , , , "80812345"],
							[, , "700\\d{5}", , , , "70012345"],
							[, , , , , , , , , [-1]], "LT", 370, "00", "8", , , "[08]", , , , [
								[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-79]"], "(8-$1)", , 1],
								[, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", , 1],
								[, "(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", , 1],
								[, "(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", , 1]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "70[67]\\d{5}", , , , "70712345"], , , [, , , , , , , , , [-1]]
						],
						LU: [, [, , "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", , , , , , , [4, 5, 6, 7, 8, 9, 10, 11]],
							[, , "(?:35[013-9]|80[2-9]|90[89])\\d{1,8}|(?:2[2-9]|3[0-46-9]|[457]\\d|8[13-9]|9[2-579])\\d{2,9}", , , , "27123456"],
							[, , "6(?:[269][18]|5[158]|7[189]|81)\\d{6}", , , , "628123456", , , [9]],
							[, , "800\\d{5}", , , , "80012345", , , [8]],
							[, , "90[015]\\d{5}", , , , "90012345", , , [8]],
							[, , "801\\d{5}", , , , "80112345", , , [8]],
							[, , , , , , , , , [-1]],
							[, , "20(?:1\\d{5}|[2-689]\\d{1,7})", , , , "20201234", , , [4, 5, 6, 7, 8, 9, 10]], "LU", 352, "00", , , , "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)", , , , [
								[, "(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"], , "$CC $1"],
								[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"], , "$CC $1"],
								[, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"], , "$CC $1"],
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"], , "$CC $1"],
								[, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"], , "$CC $1"],
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"], , "$CC $1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"], , "$CC $1"],
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"], , "$CC $1"],
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"], , "$CC $1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						LV: [, [, , "(?:[268]\\d|90)\\d{6}", , , , , , , [8]],
							[, , "6\\d{7}", , , , "63123456"],
							[, , "2\\d{7}", , , , "21234567"],
							[, , "80\\d{6}", , , , "80123456"],
							[, , "90\\d{6}", , , , "90123456"],
							[, , "81\\d{6}", , , , "81123456"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "LV", 371, "00", , , , , , , , [
								[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						LY: [, [, , "(?:[2569]\\d|71)\\d{7}", , , , , , , [9],
								[7]
							],
							[, , "(?:2[13-5]|5[1347]|6[1-479]|71)\\d{7}", , , , "212345678", , , , [7]],
							[, , "9[1-6]\\d{7}", , , , "912345678"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "LY", 218, "00", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{7})", "$1-$2", ["[25-79]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						MA: [, [, , "[5-8]\\d{8}", , , , , , , [9]],
							[, , "5(?:2(?:[015-79]\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])|3(?:[0-48]\\d|[57][2-9]|6[2-8]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}", , , , "520123456"],
							[, , "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[017]))\\d{6}", , , , "650123456"],
							[, , "80\\d{7}", , , , "801234567"],
							[, , "89\\d{7}", , , , "891234567"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "5924[01]\\d{4}", , , , "592401234"], "MA", 212, "00", "0", , , "0", , , , [
								[, "(\\d{5})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]"], "0$1"],
								[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"],
								[, "(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892"], "0$1"],
								[, "(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"],
								[, "(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]
							], , [, , , , , , , , , [-1]], 1, , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						MC: [, [, , "870\\d{5}|(?:[349]|6\\d)\\d{7}", , , , , , , [8, 9]],
							[, , "(?:870|9[2-47-9]\\d)\\d{5}", , , , "99123456", , , [8]],
							[, , "4(?:4\\d|5[1-9])\\d{5}|(?:3|6\\d)\\d{7}", , , , "612345678"],
							[, , "90\\d{6}", , , , "90123456", , , [8]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "MC", 377, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["8"]],
								[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[39]"]],
								[, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]
							],
							[
								[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[39]"]],
								[, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]
							],
							[, , , , , , , , , [-1]], , , [, , "870\\d{5}", , , , , , , [8]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						MD: [, [, , "(?:[235-7]\\d|[89]0)\\d{6}", , , , , , , [8]],
							[, , "(?:(?:2[1-9]|3[1-79])\\d|5(?:33|5[257]))\\d{5}", , , , "22212345"],
							[, , "(?:562|6\\d\\d|7(?:[189]\\d|6[07]|7[457-9]))\\d{5}", , , , "62112345"],
							[, , "800\\d{5}", , , , "80012345"],
							[, , "90[056]\\d{5}", , , , "90012345"],
							[, , "808\\d{5}", , , , "80812345"],
							[, , , , , , , , , [-1]],
							[, , "3[08]\\d{6}", , , , "30123456"], "MD", 373, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"],
								[, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "803\\d{5}", , , , "80312345"], , , [, , , , , , , , , [-1]]
						],
						ME: [, [, , "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", , , , , , , [8, 9],
								[6]
							],
							[, , "(?:20[2-8]|3(?:[0-2][2-7]|3[24-7])|4(?:0[2-467]|1[2467])|5(?:[01][2467]|2[2-467]))\\d{5}", , , , "30234567", , , [8],
								[6]
							],
							[, , "6(?:00|3[024]|6[0-25]|[7-9]\\d)\\d{5}", , , , "67622901", , , [8]],
							[, , "80(?:[0-2578]|9\\d)\\d{5}", , , , "80080002"],
							[, , "9(?:4[1568]|5[178])\\d{5}", , , , "94515151", , , [8]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "78[1-49]\\d{5}", , , , "78108780", , , [8]], "ME", 382, "00", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "77[1-9]\\d{5}", , , , "77273012", , , [8]], , , [, , , , , , , , , [-1]]
						],
						MF: [, [, , "(?:590|69\\d)\\d{6}", , , , , , , [9]],
							[, , "590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}", , , , "590271234"],
							[, , "69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}", , , , "690001234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "MF", 590, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						MG: [, [, , "[23]\\d{8}", , , , , , , [9],
								[7]
							],
							[, , "2072[29]\\d{4}|20(?:2\\d|4[47]|5[3467]|6[279]|7[35]|8[268]|9[245])\\d{5}", , , , "202123456", , , , [7]],
							[, , "3[2-49]\\d{7}", , , , "321234567"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "22\\d{7}", , , , "221234567"], "MG", 261, "00", "0", , , "0|([24-9]\\d{6})$", "20$1", , , [
								[, "(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						MH: [, [, , "329\\d{4}|(?:[256]\\d|45)\\d{5}", , , , , , , [7]],
							[, , "(?:247|528|625)\\d{4}", , , , "2471234"],
							[, , "(?:(?:23|54)5|329|45[56])\\d{4}", , , , "2351234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "635\\d{4}", , , , "6351234"], "MH", 692, "011", "1", , , "1", , , , [
								[, "(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						MK: [, [, , "[2-578]\\d{7}", , , , , , , [8],
								[6, 7]
							],
							[, , "(?:2(?:[23]\\d|5[0-24578]|6[01]|82)|3(?:1[3-68]|[23][2-68]|4[23568])|4(?:[23][2-68]|4[3-68]|5[2568]|6[25-8]|7[24-68]|8[4-68]))\\d{5}", , , , "22012345", , , , [6, 7]],
							[, , "7(?:(?:[0-25-8]\\d|3[2-4]|9[23])\\d|421)\\d{4}", , , , "72345678"],
							[, , "800\\d{5}", , , , "80012345"],
							[, , "5[02-9]\\d{6}", , , , "50012345"],
							[, , "8(?:0[1-9]|[1-9]\\d)\\d{5}", , , , "80123456"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "MK", 389, "00", "0", , , "0", , , , [
								[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"],
								[, "(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						ML: [, [, , "(?:[246-9]\\d|50)\\d{6}", , , , , , , [8]],
							[, , "2(?:07[0-8]|12[67])\\d{4}|(?:2(?:02|1[4-689])|4(?:0[0-4]|4[1-39]))\\d{5}", , , , "20212345"],
							[, , "2(?:079|17\\d)\\d{4}|(?:50|[679]\\d|8[239])\\d{6}", , , , "65012345"],
							[, , "80\\d{6}", , , , "80012345"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "ML", 223, "00", , , , , , , , [
								[, "(\\d{4})", "$1", ["67[057-9]|74[045]", "67(?:0[09]|[59]9|77|8[89])|74(?:0[02]|44|55)"]],
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]
							],
							[
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]
							],
							[, , , , , , , , , [-1]], , , [, , "80\\d{6}"],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						MM: [, [, , "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", , , , , , , [6, 7, 8, 9, 10],
								[5]
							],
							[, , "(?:1(?:(?:2\\d|3[56]|[89][0-6])\\d|4(?:2[2-469]|39|6[25]|7[01])|6)|2(?:2(?:00|8[34])|4(?:0\\d|2[246]|39|62|7[01])|51\\d\\d)|4(?:2(?:2\\d\\d|480)|[34]20\\d)|6(?:0(?:[23]|88\\d)|(?:124|320|42[04]|[56]2\\d)\\d|7(?:(?:3\\d|8[01459])\\d|4(?:39|[67]0)))|8[1-35]2\\d\\d)\\d{4}|5(?:22\\d{5,6}|(?:3[2-68]|42(?:1|86)|(?:522|[89]20)\\d|6[2-4]|7(?:20\\d|480))\\d{4})|7(?:120\\d{4,5}|(?:425\\d|5(?:202|96\\d))\\d{4})|(?:(?:1[2-6]\\d|4(?:2[24-8]|356|[46][2-6]|5[35])|5(?:2[235-8]|4[25-8]|5[23]|7[2-8]|8[25-7]|9[235-7])|6(?:[19]20|42[03-6]|(?:52|7[45])\\d)|7(?:[04][25-8]|[15][235-7]|22|3[2-4]))\\d|8(?:[135]2\\d\\d|2(?:2\\d\\d|320)))\\d{3}|25\\d{5,6}|(?:2[2-9]|43[235-7]|6(?:1[2356]|[24][2-6]|3[256]|5[2-4]|6[2-8]|7[235-7]|8[245]|9[24])|8(?:1[235689]|2[2-8]|32|4[24-7]|5[245]|6[23]))\\d{4}|(?:4[35]|5[2489]|63|7[0145]|8[13])4(?:[0-689]\\d{3}|7(?:0\\d\\d(?:\\d{2})?|[1-9]\\d\\d))", , , , "1234567", , , [6, 7, 8, 9],
								[5]
							],
							[, , "(?:17[01]|9(?:2(?:[0-4]|[56]\\d\\d)|(?:3(?:[0-36]|4\\d)|(?:6[89]|89)\\d|7(?:3|5[0-2]|[6-9]\\d))\\d|4(?:(?:[0245]\\d|[1379])\\d|88)|5[0-6]|9(?:[089]|[5-7]\\d\\d))\\d)\\d{4}|9[69]1\\d{6}|9[68]\\d{6}", , , , "92123456", , , [7, 8, 9, 10]],
							[, , "80080(?:[01][1-9]|2\\d)\\d{3}", , , , "8008001234", , , [10]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "1333\\d{4}|[12]468\\d{4}", , , , "13331234", , , [8]], "MM", 95, "00", "0", , , "0", , , , [
								[, "(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"],
								[, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"],
								[, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"],
								[, "(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"],
								[, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
								[, "(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"],
								[, "(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						MN: [, [, , "[12]\\d{7,9}|[57-9]\\d{7}", , , , , , , [8, 9, 10],
								[4, 5, 6]
							],
							[, , "[12]2[1-3]\\d{5,6}|(?:[12](?:1|27)|5[0568])\\d{6}|[12](?:3[2-8]|4[2-68]|5[1-4689])\\d{6,7}", , , , "50123456", , , , [4, 5, 6]],
							[, , "83[01]\\d{5}|(?:8[05689]|9[013-9])\\d{6}", , , , "88123456", , , [8]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "7[05-8]\\d{6}", , , , "75123456", , , [8]], "MN", 976, "001", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"],
								[, "(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"]],
								[, "(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"],
								[, "(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"],
								[, "(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						MO: [, [, , "(?:28|[68]\\d)\\d{6}", , , , , , , [8]],
							[, , "(?:28[2-57-9]|8(?:11|[2-57-9]\\d))\\d{5}", , , , "28212345"],
							[, , "6(?:[2356]\\d\\d|8(?:[02][5-9]|[1478]\\d|[356][0-4]))\\d{4}", , , , "66123456"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "MO", 853, "00", , , , , , , , [
								[, "(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						MP: [, [, , "[58]\\d{9}|(?:67|90)0\\d{7}", , , , , , , [10],
								[7]
							],
							[, , "670(?:2(?:3[3-7]|56|8[5-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}", , , , "6702345678", , , , [7]],
							[, , "670(?:2(?:3[3-7]|56|8[5-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}", , , , "6702345678", , , , [7]],
							[, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
							[, , "900[2-9]\\d{6}", , , , "9002123456"],
							[, , , , , , , , , [-1]],
							[, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
							[, , , , , , , , , [-1]], "MP", 1, "011", "1", , , "1|([2-9]\\d{6})$", "670$1", , 1, , , [, , , , , , , , , [-1]], , "670", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						MQ: [, [, , "(?:596|69\\d)\\d{6}", , , , , , , [9]],
							[, , "596(?:0[0-7]|10|2[7-9]|3[05-9]|4[0-46-8]|[5-7]\\d|8[09]|9[4-8])\\d{4}", , , , "596301234"],
							[, , "69(?:6(?:[0-47-9]\\d|5[0-6]|6[0-4])|727)\\d{4}", , , , "696201234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "MQ", 596, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						MR: [, [, , "(?:[2-4]\\d\\d|800)\\d{5}", , , , , , , [8]],
							[, , "(?:25[08]|35\\d|45[1-7])\\d{5}", , , , "35123456"],
							[, , "[2-4][0-46-9]\\d{6}", , , , "22123456"],
							[, , "800\\d{5}", , , , "80012345"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "MR", 222, "00", , , , , , , , [
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						MS: [, [, , "66449\\d{5}|(?:[58]\\d\\d|900)\\d{7}", , , , , , , [10],
								[7]
							],
							[, , "664491\\d{4}", , , , "6644912345", , , , [7]],
							[, , "66449[2-6]\\d{4}", , , , "6644923456", , , , [7]],
							[, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
							[, , "900[2-9]\\d{6}", , , , "9002123456"],
							[, , , , , , , , , [-1]],
							[, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
							[, , , , , , , , , [-1]], "MS", 1, "011", "1", , , "1|(4\\d{6})$", "664$1", , , , , [, , , , , , , , , [-1]], , "664", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						MT: [, [, , "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", , , , , , , [8]],
							[, , "203[1-4]\\d{4}|2(?:0[169]|[1-357]\\d)\\d{5}", , , , "21001234"],
							[, , "(?:7(?:210|[79]\\d\\d)|9(?:2(?:1[01]|31)|69[67]|8(?:1[1-3]|89|97)|9\\d\\d))\\d{4}", , , , "96961234"],
							[, , "800[3467]\\d{4}", , , , "80071234"],
							[, , "5(?:0(?:0(?:37|43)|(?:6\\d|70|9[0168])\\d)|[12]\\d0[1-5])\\d{3}", , , , "50037123"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "3550\\d{4}", , , , "35501234"], "MT", 356, "00", , , , , , , , [
								[, "(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]
							], , [, , "7117\\d{4}", , , , "71171234"], , , [, , , , , , , , , [-1]],
							[, , "501\\d{5}", , , , "50112345"], , , [, , , , , , , , , [-1]]
						],
						MU: [, [, , "(?:[2-468]|5\\d)\\d{6}", , , , , , , [7, 8]],
							[, , "(?:2(?:[03478]\\d|1[0-7]|6[0-79])|4(?:[013568]\\d|2[4-7])|54(?:4\\d|71)|6\\d\\d|8(?:14|3[129]))\\d{4}", , , , "54480123"],
							[, , "5(?:4(?:2[1-389]|7[1-9])|87[15-8])\\d{4}|5(?:2[589]|4[489]|7\\d|8[0-689]|9[0-8])\\d{5}", , , , "52512345", , , [8]],
							[, , "80[0-2]\\d{4}", , , , "8001234", , , [7]],
							[, , "30\\d{5}", , , , "3012345", , , [7]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "3(?:20|9\\d)\\d{4}", , , , "3201234", , , [7]], "MU", 230, "0(?:0|[24-7]0|3[03])", , , , , , "020", , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]],
								[, "(\\d{4})(\\d{4})", "$1 $2", ["5"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						MV: [, [, , "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", , , , , , , [7, 10]],
							[, , "(?:3(?:0[0-3]|3[0-59])|6(?:[57][02468]|6[024-68]|8[024689]))\\d{4}", , , , "6701234", , , [7]],
							[, , "46[46]\\d{4}|(?:7[2-9]|9[14-9])\\d{5}", , , , "7712345", , , [7]],
							[, , "800\\d{7}", , , , "8001234567", , , [10]],
							[, , "900\\d{7}", , , , "9001234567", , , [10]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "MV", 960, "0(?:0|19)", , , , , , "00", , [
								[, "(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9[14-9]"]],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "4[05]0\\d{4}", , , , "4001234", , , [7]], , , [, , , , , , , , , [-1]]
						],
						MW: [, [, , "1\\d{6}(?:\\d{2})?|(?:[23]1|77|88|99)\\d{7}", , , , , , , [7, 9]],
							[, , "(?:1[2-9]|21\\d\\d)\\d{5}", , , , "1234567"],
							[, , "111\\d{6}|(?:77|88|99)\\d{7}", , , , "991234567", , , [9]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "31\\d{7}", , , , "310123456", , , [9]], "MW", 265, "00", "0", , , "0", , , , [
								[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3"], "0$1"],
								[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[17-9]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						MX: [, [, , "(?:1\\d|[2-9])\\d{9}", , , , , , , [10, 11],
								[7, 8]
							],
							[, , "(?:2(?:0[01]|2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}", , , , "2221234567", , , [10],
								[7, 8]
							],
							[, , "1(?:2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}", , , , "12221234567", , , [11]],
							[, , "8(?:00|88)\\d{7}", , , , "8001234567", , , [10]],
							[, , "900\\d{7}", , , , "9001234567", , , [10]],
							[, , "300\\d{7}", , , , "3001234567", , , [10]],
							[, , "500\\d{7}", , , , "5001234567", , , [10]],
							[, , , , , , , , , [-1]], "MX", 52, "0[09]", "01", , , "0[12]|04[45]([2-9]\\d{9})$", "1$1", "00", , [
								[, "(\\d{5})", "$1", ["53"]],
								[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], "01 $1", , 1],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], "01 $1", , 1],
								[, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], "044 $1"],
								[, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], "044 $1"]
							],
							[
								[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], "01 $1", , 1],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], "01 $1", , 1],
								[, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3 $4", ["1(?:33|5[56]|81)"]],
								[, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]
							],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						MY: [, [, , "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", , , , , , , [8, 9, 10],
								[6, 7]
							],
							[, , "(?:3(?:2[0-36-9]|3[0-368]|4[0-278]|5[0-24-8]|6[0-467]|7[1246-9]|8\\d|9[0-57])\\d|4(?:2[0-689]|[3-79]\\d|8[1-35689])|5(?:2[0-589]|[3468]\\d|5[0-489]|7[1-9]|9[23])|6(?:2[2-9]|3[1357-9]|[46]\\d|5[0-6]|7[0-35-9]|85|9[015-8])|7(?:[2579]\\d|3[03-68]|4[0-8]|6[5-9]|8[0-35-9])|8(?:[24][2-8]|3[2-5]|5[2-7]|6[2-589]|7[2-578]|[89][2-9])|9(?:0[57]|13|[25-7]\\d|[3489][0-8]))\\d{5}", , , , "323856789", , , [8, 9],
								[6, 7]
							],
							[, , "1(?:4400|8(?:47|8[27])[0-4])\\d{4}|1(?:0(?:[23568]\\d|4[0-6]|7[016-9]|9[0-8])|1(?:[1-5]\\d\\d|6(?:0[5-9]|[1-9]\\d))|(?:[23679][2-9]|4[235-9]|59\\d)\\d|8(?:1[23]|[236]\\d|4[06]|5[7-9]|7[016-9]|8[01]|9[0-8]))\\d{5}", , , , "123456789", , , [9, 10]],
							[, , "1[378]00\\d{6}", , , , "1300123456", , , [10]],
							[, , "1600\\d{6}", , , , "1600123456", , , [10]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "154(?:6(?:0\\d|1[0-3])|8(?:[25]1|4[0189]|7[0-4679]))\\d{4}", , , , "1546012345", , , [10]], "MY", 60, "00", "0", , , "0", , , , [
								[, "(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[0249]|[367][2-9]|8[1-9])|8"], "0$1"],
								[, "(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
								[, "(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1[36-8]"]],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"],
								[, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						MZ: [, [, , "(?:2|8\\d)\\d{7}", , , , , , , [8, 9]],
							[, , "2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}", , , , "21123456", , , [8]],
							[, , "8[2-7]\\d{7}", , , , "821234567", , , [9]],
							[, , "800\\d{6}", , , , "800123456", , , [9]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "MZ", 258, "00", , , , , , , , [
								[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-7]"]],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						NA: [, [, , "[68]\\d{7,8}", , , , , , , [8, 9]],
							[, , "6(?:1(?:[02-4]\\d\\d|17)|2(?:17|54\\d|69|70)|3(?:17|2[0237]\\d|34|6[289]|7[01]|81)|4(?:17|(?:27|41|5[25])\\d|69|7[01])|5(?:17|2[236-8]\\d|69|7[01])|6(?:17|26\\d|38|42|69|7[01])|7(?:17|(?:2[2-4]|30)\\d|6[89]|7[01]))\\d{4}|6(?:1(?:2[2-7]|3[01378]|4[0-4]|69|7[014])|25[0-46-8]|32\\d|4(?:2[0-27]|4[016]|5[0-357])|52[02-9]|62[56]|7(?:2[2-69]|3[013]))\\d{4}", , , , "61221234"],
							[, , "(?:60|8[1245])\\d{7}", , , , "811234567", , , [9]],
							[, , "80\\d{7}", , , , "800123456", , , [9]],
							[, , "8701\\d{5}", , , , "870123456", , , [9]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "8(?:3\\d\\d|86)\\d{5}", , , , "88612345"], "NA", 264, "00", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						NC: [, [, , "[2-57-9]\\d{5}", , , , , , , [6]],
							[, , "(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}", , , , "201234"],
							[, , "(?:5[0-4]|[79]\\d|8[0-79])\\d{4}", , , , "751234"],
							[, , , , , , , , , [-1]],
							[, , "36\\d{4}", , , , "366711"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "NC", 687, "00", , , , , , , , [
								[, "(\\d{3})", "$1", ["5[6-8]"]],
								[, "(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-57-9]"]]
							],
							[
								[, "(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-57-9]"]]
							],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						NE: [, [, , "[0289]\\d{7}", , , , , , , [8]],
							[, , "2(?:0(?:20|3[1-7]|4[13-5]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}", , , , "20201234"],
							[, , "(?:8[04589]|9\\d)\\d{6}", , , , "93123456"],
							[, , "08\\d{6}", , , , "08123456"],
							[, , "09\\d{6}", , , , "09123456"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "NE", 227, "00", , , , , , , , [
								[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]],
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[01]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						NF: [, [, , "[13]\\d{5}", , , , , , , [6],
								[5]
							],
							[, , "(?:1(?:06|17|28|39)|3[0-2]\\d)\\d{3}", , , , "106609", , , , [5]],
							[, , "3[58]\\d{4}", , , , "381234", , , , [5]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "NF", 672, "00", , , , "([0-258]\\d{4})$", "3$1", , , [
								[, "(\\d{2})(\\d{4})", "$1 $2", ["1"]],
								[, "(\\d)(\\d{5})", "$1 $2", ["3"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						NG: [, [, , "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", , , , , , , [7, 8, 10, 11, 12, 13, 14],
								[5, 6]
							],
							[, , "(?:(?:[1-356]\\d|4[02-8]|7[0-79]|8[2-9])\\d|9(?:0[3-9]|[1-9]\\d))\\d{5}|(?:[12]\\d|4[147]|5[14579]|6[1578]|7[0-3578])\\d{5}", , , , "18040123", , , [7, 8],
								[5, 6]
							],
							[, , "(?:707[0-3]|8(?:01|19)[01])\\d{6}|(?:70[1-689]|8(?:0[2-9]|1[0-8])|90[235-9])\\d{7}", , , , "8021234567", , , [10]],
							[, , "800\\d{7,11}", , , , "80017591759", , , [10, 11, 12, 13, 14]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "NG", 234, "009", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"],
								[, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"],
								[, "(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"],
								[, "(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "700\\d{7,11}", , , , "7001234567", , , [10, 11, 12, 13, 14]], , , [, , , , , , , , , [-1]]
						],
						NI: [, [, , "(?:1800|[25-8]\\d{3})\\d{4}", , , , , , , [8]],
							[, , "2\\d{7}", , , , "21234567"],
							[, , "(?:5(?:5[0-7]|[78]\\d)|6(?:20|3[035]|4[045]|5[05]|77|8[1-9]|9[059])|(?:7[5-8]|8\\d)\\d)\\d{5}", , , , "81234567"],
							[, , "1800\\d{4}", , , , "18001234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "NI", 505, "00", , , , , , , , [
								[, "(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						NL: [, [, , "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|[89]\\d{6,9}|1\\d{4,5}", , , , , , , [5, 6, 7, 8, 9, 10]],
							[, , "(?:1(?:[035]\\d|1[13-578]|6[124-8]|7[24]|8[0-467])|2(?:[0346]\\d|2[2-46-9]|5[125]|9[479])|3(?:[03568]\\d|1[3-8]|2[01]|4[1-8])|4(?:[0356]\\d|1[1-368]|7[58]|8[15-8]|9[23579])|5(?:[0358]\\d|[19][1-9]|2[1-57-9]|4[13-8]|6[126]|7[0-3578])|7\\d\\d)\\d{6}", , , , "101234567", , , [9]],
							[, , "6[1-58]\\d{7}", , , , "612345678", , , [9]],
							[, , "800\\d{4,7}", , , , "8001234", , , [7, 8, 9, 10]],
							[, , "90[069]\\d{4,7}", , , , "9061234", , , [7, 8, 9, 10]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "(?:85|91)\\d{7}", , , , "851234567", , , [9]], "NL", 31, "00", "0", , , "0", , , , [
								[, "(\\d{4})", "$1", ["1[238]|[34]"]],
								[, "(\\d{2})(\\d{3,4})", "$1 $2", ["14"]],
								[, "(\\d{6})", "$1", ["1"]],
								[, "(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
								[, "(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"],
								[, "(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-57-9]"], "0$1"]
							],
							[
								[, "(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
								[, "(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"],
								[, "(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-57-9]"], "0$1"]
							],
							[, , "66\\d{7}", , , , "662345678", , , [9]], , , [, , "140(?:1[035]|2[0346]|3[03568]|4[0356]|5[0358]|8[458])|140(?:1[16-8]|2[259]|3[124]|4[17-9]|5[124679]|7)\\d", , , , , , , [5, 6]],
							[, , "140(?:1[035]|2[0346]|3[03568]|4[0356]|5[0358]|8[458])|(?:140(?:1[16-8]|2[259]|3[124]|4[17-9]|5[124679]|7)|8[478]\\d{6})\\d", , , , "14020", , , [5, 6, 9]], , , [, , , , , , , , , [-1]]
						],
						NO: [, [, , "(?:0|[2-9]\\d{3})\\d{4}", , , , , , , [5, 8]],
							[, , "(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}", , , , "21234567", , , [8]],
							[, , "(?:4[015-8]|5[89]|9\\d)\\d{6}", , , , "40612345", , , [8]],
							[, , "80[01]\\d{5}", , , , "80012345", , , [8]],
							[, , "82[09]\\d{5}", , , , "82012345", , , [8]],
							[, , "810(?:0[0-6]|[2-8]\\d)\\d{3}", , , , "81021234", , , [8]],
							[, , "880\\d{5}", , , , "88012345", , , [8]],
							[, , "85[0-5]\\d{5}", , , , "85012345", , , [8]], "NO", 47, "00", , , , , , , , [
								[, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"]],
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]
							], , [, , , , , , , , , [-1]], 1, "[02-689]|7[0-8]", [, , , , , , , , , [-1]],
							[, , "8100[7-9]\\d{3}|(?:0|81(?:01|5\\d))\\d{4}", , , , "01234"], , , [, , "81[23]\\d{5}", , , , "81212345", , , [8]]
						],
						NP: [, [, , "9\\d{9}|[1-9]\\d{7}", , , , , , , [8, 10],
								[6, 7]
							],
							[, , "1[0-6]\\d{6}|(?:2[13-79]|3[135-8]|4[146-9]|5[135-7]|6[13-9]|7[15-9]|8[1-46-9]|9[1-79])[2-6]\\d{5}", , , , "14567890", , , [8],
								[6, 7]
							],
							[, , "9(?:6[0-3]|7[245]|8[0-24-68])\\d{7}", , , , "9841234567", , , [10]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "NP", 977, "00", "0", , , "0", , , , [
								[, "(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"],
								[, "(\\d{2})(\\d{6})", "$1-$2", ["[1-8]|9(?:[1-579]|6[2-6])"], "0$1"],
								[, "(\\d{3})(\\d{7})", "$1-$2", ["9"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						NR: [, [, , "(?:444|55\\d|888)\\d{4}", , , , , , , [7]],
							[, , "(?:444|888)\\d{4}", , , , "4441234"],
							[, , "55[4-9]\\d{4}", , , , "5551234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "NR", 674, "00", , , , , , , , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["[458]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						NU: [, [, , "(?:[47]|888\\d)\\d{3}", , , , , , , [4, 7]],
							[, , "[47]\\d{3}", , , , "7012", , , [4]],
							[, , "888[4-9]\\d{3}", , , , "8884012", , , [7]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "NU", 683, "00", , , , , , , , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["8"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						NZ: [, [, , "[28]\\d{7,9}|[346]\\d{7}|(?:508|[79]\\d)\\d{6,7}", , , , , , , [8, 9, 10],
								[7]
							],
							[, , "24099\\d{3}|(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{6}", , , , "32345678", , , [8],
								[7]
							],
							[, , "2[0-28]\\d{8}|2[0-27-9]\\d{7}|21\\d{6}", , , , "211234567"],
							[, , "508\\d{6,7}|80\\d{6,8}", , , , "800123456"],
							[, , "90\\d{6,7}", , , , "900123456", , , [8, 9]],
							[, , , , , , , , , [-1]],
							[, , "70\\d{7}", , , , "701234567", , , [9]],
							[, , , , , , , , , [-1]], "NZ", 64, "0(?:0|161)", "0", , , "0", , "00", , [
								[, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0$1"],
								[, "(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[59]|80"], "0$1"],
								[, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["2[028]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7|86"], "0$1"]
							], , [, , "[28]6\\d{6,7}", , , , "26123456", , , [8, 9]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						OM: [, [, , "(?:[279]\\d{3}|500)\\d{4}|8007\\d{4,5}", , , , , , , [7, 8, 9]],
							[, , "2[2-6]\\d{6}", , , , "23123456", , , [8]],
							[, , "90[1-9]\\d{5}|(?:7[129]|9[1-9])\\d{6}", , , , "92123456", , , [8]],
							[, , "500\\d{4}|8007\\d{4,5}", , , , "80071234"],
							[, , "900\\d{5}", , , , "90012345", , , [8]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "OM", 968, "00", , , , , , , , [
								[, "(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]],
								[, "(\\d{2})(\\d{6})", "$1 $2", ["2"]],
								[, "(\\d{4})(\\d{4})", "$1 $2", ["[79]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						PA: [, [, , "(?:[1-57-9]|6\\d)\\d{6}", , , , , , , [7, 8]],
							[, , "(?:1(?:0\\d|1[479]|2[37]|3[0137]|4[17]|5[05]|[68][58]|7[0167]|9[39])|2(?:[0235-79]\\d|1[0-7]|4[013-9]|8[026-9])|3(?:[089]\\d|1[014-7]|2[0-35]|33|4[0-579]|55|6[068]|7[06-8])|4(?:00|3[0-579]|4\\d|7[0-57-9])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-26-8]|3[03]|4[04]|5[05-9]|6[05]|7[0-24-9]|8[7-9]|90)|8(?:09|2[89]|3\\d|4[0-24-689]|5[014]|8[02])|9(?:0[5-9]|1[0135-8]|2[036-9]|3[35-79]|40|5[0457-9]|6[05-9]|7[04-9]|8[35-8]|9\\d))\\d{4}", , , , "2001234", , , [7]],
							[, , "(?:1[16]1|21[89]|6(?:[02-9]\\d|1[0-6])\\d|8(?:1[01]|7[23]))\\d{4}", , , , "61234567"],
							[, , "800\\d{4}", , , , "8001234", , , [7]],
							[, , "(?:8(?:22|55|60|7[78]|86)|9(?:00|81))\\d{4}", , , , "8601234", , , [7]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "PA", 507, "00", , , , , , , , [
								[, "(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
								[, "(\\d{4})(\\d{4})", "$1-$2", ["6"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						PE: [, [, , "(?:[14-8]|9\\d)\\d{7}", , , , , , , [8, 9],
								[6, 7]
							],
							[, , "(?:1\\d|4[1-4]|5[1-46]|6[1-7]|7[2-46]|8[2-4])\\d{6}", , , , "11234567", , , [8],
								[6, 7]
							],
							[, , "9\\d{8}", , , , "912345678", , , [9]],
							[, , "800\\d{5}", , , , "80012345", , , [8]],
							[, , "805\\d{5}", , , , "80512345", , , [8]],
							[, , "801\\d{5}", , , , "80112345", , , [8]],
							[, , "80[24]\\d{5}", , , , "80212345", , , [8]],
							[, , , , , , , , , [-1]], "PE", 51, "19(?:1[124]|77|90)00", "0", " Anexo ", , "0", , , , [
								[, "(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"],
								[, "(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"],
								[, "(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						PF: [, [, , "[48]\\d{7}|4\\d{5}", , , , , , , [6, 8]],
							[, , "4(?:[09][4-689]\\d|4)\\d{4}", , , , "40412345"],
							[, , "8[79]\\d{6}", , , , "87123456", , , [8]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "PF", 689, "00", , , , , , , , [
								[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]],
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[48]"]]
							], , [, , , , , , , , , [-1]], , , [, , "44\\d{4}", , , , , , , [6]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						PG: [, [, , "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", , , , , , , [7, 8]],
							[, , "(?:64[1-9]|7730|85[02-46-9])\\d{4}|(?:3[0-2]|4[257]|5[34]|77[0-24]|9[78])\\d{5}", , , , "3123456"],
							[, , "775\\d{5}|(?:7[0-689]|81)\\d{6}", , , , "70123456", , , [8]],
							[, , "180\\d{4}", , , , "1801234", , , [7]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "2(?:0[0-47]|7[568])\\d{4}", , , , "2751234", , , [7]], "PG", 675, "00|140[1-3]", , , , , , "00", , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]],
								[, "(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						PH: [, [, , "(?:1800|8)\\d{7,9}|2\\d{5}(?:\\d{2})?|(?:[3-7]|9\\d)\\d{8}", , , , , , , [6, 8, 9, 10, 11, 12, 13],
								[4, 5, 7]
							],
							[, , "2\\d{5}(?:\\d{2})?|88(?:22\\d\\d|42)\\d{4}|88\\d{7}|(?:3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578]|8[2-7])\\d{7}", , , , "21234567", , , [6, 8, 9, 10],
								[4, 5, 7]
							],
							[, , "(?:81[37]|9(?:0[5-9]|1[024-9]|2[0-35-9]|3[02-9]|4[235-9]|5[056]|6[5-7]|7[3-79]|89|9[4-9]))\\d{7}", , , , "9051234567", , , [10]],
							[, , "1800\\d{7,9}", , , , "180012345678", , , [11, 12, 13]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "PH", 63, "00", "0", , , "0", , , , [
								[, "(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
								[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
								[, "(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"],
								[, "(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
								[, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
								[, "(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						PK: [, [, , "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[025-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", , , , , , , [8, 9, 10, 11, 12],
								[5, 6, 7]
							],
							[, , "(?:(?:21|42)[2-9]|58[126])\\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\\d{6}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\\d{5,6}", , , , "2123456789", , , [9, 10],
								[5, 6, 7, 8]
							],
							[, , "3(?:[014]\\d|2[0-5]|3[0-7]|55|64)\\d{7}", , , , "3012345678", , , [10]],
							[, , "800\\d{5}", , , , "80012345", , , [8]],
							[, , "900\\d{5}", , , , "90012345", , , [8]],
							[, , , , , , , , , [-1]],
							[, , "122\\d{6}", , , , "122044444", , , [9]],
							[, , , , , , , , , [-1]], "PK", 92, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["[89]0"], "0$1"],
								[, "(\\d{4})(\\d{5})", "$1 $2", ["1"]],
								[, "(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"],
								[, "(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"],
								[, "(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"],
								[, "(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"],
								[, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:0[468]|[1-8])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}", , , , "21111825888", , , [11, 12]], , , [, , , , , , , , , [-1]]
						],
						PL: [, [, , "[1-57-9]\\d{6}(?:\\d{2})?|6\\d{5,8}", , , , , , , [6, 7, 8, 9]],
							[, , "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])(?:[02-9]\\d{6}|1(?:[0-8]\\d{5}|9\\d{3}(?:\\d{2})?))", , , , "123456789", , , [7, 9]],
							[, , "(?:45|5[0137]|6[069]|7[2389]|88)\\d{7}", , , , "512345678", , , [9]],
							[, , "800\\d{6}", , , , "800123456", , , [9]],
							[, , "70[01346-8]\\d{6}", , , , "701234567", , , [9]],
							[, , "801\\d{6}", , , , "801234567", , , [9]],
							[, , , , , , , , , [-1]],
							[, , "39\\d{7}", , , , "391234567", , , [9]], "PL", 48, "00", , , , , , , , [
								[, "(\\d{5})", "$1", ["19"]],
								[, "(\\d{3})(\\d{3})", "$1 $2", ["11|64"]],
								[, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],
								[, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["39|45|5[0137]|6[0469]|7[02389]|8[08]"]],
								[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-8]|9[145]"]]
							], , [, , "64\\d{4,7}", , , , "641234567"], , , [, , , , , , , , , [-1]],
							[, , "804\\d{6}", , , , "804123456", , , [9]], , , [, , , , , , , , , [-1]]
						],
						PM: [, [, , "[45]\\d{5}", , , , , , , [6]],
							[, , "(?:4[1-3]|50)\\d{4}", , , , "430123"],
							[, , "(?:4[02-4]|5[05])\\d{4}", , , , "551234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "PM", 508, "00", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						PR: [, [, , "(?:[589]\\d\\d|787)\\d{7}", , , , , , , [10],
								[7]
							],
							[, , "(?:787|939)[2-9]\\d{6}", , , , "7872345678", , , , [7]],
							[, , "(?:787|939)[2-9]\\d{6}", , , , "7872345678", , , , [7]],
							[, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
							[, , "900[2-9]\\d{6}", , , , "9002345678"],
							[, , , , , , , , , [-1]],
							[, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
							[, , , , , , , , , [-1]], "PR", 1, "011", "1", , , "1", , , 1, , , [, , , , , , , , , [-1]], , "787|939", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						PS: [, [, , "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", , , , , , , [8, 9, 10],
								[7]
							],
							[, , "(?:22[2-47-9]|42[45]|82[01458]|92[369])\\d{5}", , , , "22234567", , , [8],
								[7]
							],
							[, , "5[69]\\d{7}", , , , "599123456", , , [9]],
							[, , "1800\\d{6}", , , , "1800123456", , , [10]],
							[, , , , , , , , , [-1]],
							[, , "1700\\d{6}", , , , "1700123456", , , [10]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "PS", 970, "00", "0", , , "0", , , , [
								[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"],
								[, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						PT: [, [, , "(?:[26-9]\\d|30)\\d{7}", , , , , , , [9]],
							[, , "2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}", , , , "212345678"],
							[, , "9(?:[1-36]\\d\\d|480)\\d{5}", , , , "912345678"],
							[, , "80[02]\\d{6}", , , , "800123456"],
							[, , "(?:6(?:0[178]|4[68])\\d|76(?:0[1-57]|1[2-47]|2[237]))\\d{5}", , , , "760123456"],
							[, , "80(?:8\\d|9[1579])\\d{5}", , , , "808123456"],
							[, , "884[0-4689]\\d{5}", , , , "884123456"],
							[, , "30\\d{7}", , , , "301234567"], "PT", 351, "00", , , , , , , , [
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "70(?:7\\d|8[17])\\d{5}", , , , "707123456"], , , [, , "600\\d{6}", , , , "600110000"]
						],
						PW: [, [, , "(?:[25-8]\\d\\d|345|488|900)\\d{4}", , , , , , , [7]],
							[, , "(?:2(?:55|77)|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76)|900)\\d{4}", , , , "2771234"],
							[, , "(?:6[2-4689]0|77\\d|88[0-4])\\d{4}", , , , "6201234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "PW", 680, "01[12]", , , , , , , , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						PY: [, [, , "59\\d{4,6}|(?:[2-46-9]\\d|5[0-8])\\d{4,7}", , , , , , , [6, 7, 8, 9],
								[5]
							],
							[, , "(?:[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36])\\d{5,7}|(?:2(?:2[4-68]|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51)|4(?:3[12]|5[13]|9[1-47])|5(?:[1-4]\\d|5[02-4])|6(?:3[1-3]|44|7[1-46-8])|7(?:4[0-4]|6[1-578]|75|8[0-8])|858)\\d{5,6}", , , , "212345678", , , [7, 8, 9],
								[5, 6]
							],
							[, , "9(?:51|6[129]|[78][1-6]|9[1-5])\\d{6}", , , , "961456789", , , [9]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "8700[0-4]\\d{4}", , , , "870012345", , , [9]], "PY", 595, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
								[, "(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
								[, "(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6[347]|7[46-8]|85"], "(0$1)"],
								[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]],
								[, "(\\d{3})(\\d{6})", "$1 $2", ["9"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "[2-9]0\\d{4,7}", , , , "201234567"], , , [, , , , , , , , , [-1]]
						],
						QA: [, [, , "800\\d{4}|(?:2|[3-7]\\d)\\d{6}", , , , , , , [7, 8]],
							[, , "4[04]\\d{6}", , , , "44123456", , , [8]],
							[, , "[35-7]\\d{7}", , , , "33123456", , , [8]],
							[, , "800\\d{4}", , , , "8001234", , , [7]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "QA", 974, "00", , , , , , , , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["2[126]|8"]],
								[, "(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]
							], , [, , "2(?:[12]\\d|61)\\d{4}", , , , "2123456", , , [7]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						RE: [, [, , "(?:26|[68]\\d)\\d{7}", , , , , , , [9]],
							[, , "262\\d{6}", , , , "262161234"],
							[, , "69(?:2\\d\\d|3(?:0[0-46]|1[013]|2[0-2]|3[0-39]|4\\d|5[05]|6[0-26]|7[0-27]|8[0-38]|9[0-479]))\\d{4}", , , , "692123456"],
							[, , "80\\d{7}", , , , "801234567"],
							[, , "89[1-37-9]\\d{6}", , , , "891123456"],
							[, , "8(?:1[019]|2[0156]|84|90)\\d{6}", , , , "810123456"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "RE", 262, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[268]"], "0$1"]
							], , [, , , , , , , , , [-1]], 1, "262|69|8", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						RO: [, [, , "(?:[237]\\d|[89]0)\\d{7}|[23]\\d{5}", , , , , , , [6, 9]],
							[, , "[23][13-6]\\d{7}|(?:2(?:19\\d|[3-6]\\d9)|31\\d\\d)\\d\\d", , , , "211234567"],
							[, , "7120\\d{5}|7(?:[02-7]\\d|1[01]|8[03-8]|99)\\d{6}", , , , "712034567", , , [9]],
							[, , "800\\d{6}", , , , "800123456", , , [9]],
							[, , "90[036]\\d{6}", , , , "900123456", , , [9]],
							[, , "801\\d{6}", , , , "801123456", , , [9]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "RO", 40, "00", "0", " int ", , "0", , , , [
								[, "(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"],
								[, "(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "37\\d{7}", , , , "372123456", , , [9]], , , [, , , , , , , , , [-1]]
						],
						RS: [, [, , "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", , , , , , , [6, 7, 8, 9, 10, 11, 12],
								[4, 5]
							],
							[, , "(?:11[1-9]\\d|(?:2[389]|39)(?:0[2-9]|[2-9]\\d))\\d{3,8}|(?:1[02-9]|2[0-24-7]|3[0-8])[2-9]\\d{4,9}", , , , "10234567", , , [7, 8, 9, 10, 11, 12],
								[4, 5, 6]
							],
							[, , "6(?:[0-689]|7\\d)\\d{6,7}", , , , "601234567", , , [8, 9, 10]],
							[, , "800\\d{3,9}", , , , "80012345"],
							[, , "(?:78\\d|90[0169])\\d{3,7}", , , , "90012345", , , [6, 7, 8, 9, 10]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "RS", 381, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"],
								[, "(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "7[06]\\d{4,10}", , , , "700123456"], , , [, , , , , , , , , [-1]]
						],
						RU: [, [, , "[347-9]\\d{9}", , , , , , , [10],
								[7]
							],
							[, , "(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}", , , , "3011234567", , , , [7]],
							[, , "9\\d{9}", , , , "9123456789"],
							[, , "80[04]\\d{7}", , , , "8001234567"],
							[, , "80[39]\\d{7}", , , , "8091234567"],
							[, , , , , , , , , [-1]],
							[, , "808\\d{7}", , , , "8081234567"],
							[, , , , , , , , , [-1]], "RU", 7, "810", "8", , , "8", , "8~10", , [
								[, "(\\d{3})(\\d{2})(\\d{2})", "$1-$2-$3", ["[0-79]"]],
								[, "(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", , 1],
								[, "(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", , 1],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", , 1],
								[, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"], "8 ($1)", , 1]
							],
							[
								[, "(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", , 1],
								[, "(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", , 1],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", , 1],
								[, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"], "8 ($1)", , 1]
							],
							[, , , , , , , , , [-1]], 1, "3[04-689]|[489]", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						RW: [, [, , "(?:06|[27]\\d\\d|[89]00)\\d{6}", , , , , , , [8, 9]],
							[, , "(?:06|2[258]\\d)\\d{6}", , , , "250123456"],
							[, , "7[238]\\d{7}", , , , "720123456", , , [9]],
							[, , "800\\d{6}", , , , "800123456", , , [9]],
							[, , "900\\d{6}", , , , "900123456", , , [9]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "RW", 250, "00", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						SA: [, [, , "92\\d{7}|(?:[15]|8\\d)\\d{8}", , , , , , , [9, 10],
								[7]
							],
							[, , "1(?:1\\d|2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}", , , , "112345678", , , [9],
								[7]
							],
							[, , "5(?:[013-689]\\d|7[0-36-8])\\d{6}", , , , "512345678", , , [9]],
							[, , "800\\d{7}", , , , "8001234567", , , [10]],
							[, , "925\\d{6}", , , , "925012345", , , [9]],
							[, , "920\\d{6}", , , , "920012345", , , [9]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "SA", 966, "00", "0", , , "0", , , , [
								[, "(\\d{4})(\\d{5})", "$1 $2", ["9"]],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "811\\d{7}", , , , "8110123456", , , [10]], , , [, , , , , , , , , [-1]]
						],
						SB: [, [, , "(?:[1-6]|[7-9]\\d\\d)\\d{4}", , , , , , , [5, 7]],
							[, , "(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}", , , , "40123", , , [5]],
							[, , "48\\d{3}|(?:(?:7[1-9]|8[4-9])\\d|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8]))\\d{4}", , , , "7421234"],
							[, , "1[38]\\d{3}", , , , "18123", , , [5]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "5[12]\\d{3}", , , , "51123", , , [5]], "SB", 677, "0[01]", , , , , , , , [
								[, "(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						SC: [, [, , "8000\\d{3}|(?:[249]\\d|64)\\d{5}", , , , , , , [7]],
							[, , "4[2-46]\\d{5}", , , , "4217123"],
							[, , "2[5-8]\\d{5}", , , , "2510123"],
							[, , "8000\\d{3}", , , , "8000000"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "971\\d{4}|(?:64|95)\\d{5}", , , , "6412345"], "SC", 248, "010|0[0-2]", , , , , , "00", , [
								[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						SD: [, [, , "[19]\\d{8}", , , , , , , [9]],
							[, , "1(?:5[3-7]|8[35-7])\\d{6}", , , , "153123456"],
							[, , "(?:1[0-2]|9[0-3569])\\d{7}", , , , "911231234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "SD", 249, "00", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						SE: [, [, , "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", , , , , , , [6, 7, 8, 9, 10, 12]],
							[, , "10[1-8]\\d{6}|90[1-9]\\d{4,6}|(?:[12][136]|3[356]|4[0246]|6[03]|8\\d)\\d{5,7}|(?:1(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)|2(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])|3(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])|4(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])|6(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])|9(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8]))\\d{5,6}", , , , "8123456", , , [7, 8, 9]],
							[, , "7[02369]\\d{7}", , , , "701234567", , , [9]],
							[, , "20\\d{4,7}", , , , "20123456", , , [6, 7, 8, 9]],
							[, , "649\\d{6}|9(?:00|39|44)[1-8]\\d{3,6}", , , , "9001234567", , , [7, 8, 9, 10]],
							[, , "77[0-7]\\d{6}", , , , "771234567", , , [9]],
							[, , "75[1-8]\\d{6}", , , , "751234567", , , [9]],
							[, , , , , , , , , [-1]], "SE", 46, "00", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1"],
								[, "(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44)"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1"],
								[, "(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1"],
								[, "(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1"],
								[, "(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1"],
								[, "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["7"], "0$1"],
								[, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1"],
								[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1"],
								[, "(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1"],
								[, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1"]
							],
							[
								[, "(\\d{2})(\\d{2,3})(\\d{2})", "$1 $2 $3", ["20"]],
								[, "(\\d{3})(\\d{4})", "$1 $2", ["9(?:00|39|44)"]],
								[, "(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"]],
								[, "(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
								[, "(\\d{3})(\\d{2,3})(\\d{2})", "$1 $2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"]],
								[, "(\\d{3})(\\d{2,3})(\\d{3})", "$1 $2 $3", ["9(?:00|39|44)"]],
								[, "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"]],
								[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7"]],
								[, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["8"]],
								[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"]],
								[, "(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["9"]],
								[, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]]
							],
							[, , "74[02-9]\\d{6}", , , , "740123456", , , [9]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , "(?:25[245]|67[3-68])\\d{9}", , , , "254123456789", , , [12]]
						],
						SG: [, [, , "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", , , , , , , [8, 10, 11]],
							[, , "6[1-9]\\d{6}", , , , "61234567", , , [8]],
							[, , "(?:8[1-8]|9[0-8])\\d{6}", , , , "81234567", , , [8]],
							[, , "(?:18|8)00\\d{7}", , , , "18001234567", , , [10, 11]],
							[, , "1900\\d{7}", , , , "19001234567", , , [11]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "3[12]\\d{6}", , , , "31234567", , , [8]], "SG", 65, "0[0-3]\\d", , , , , , , , [
								[, "(\\d{4,5})", "$1", ["1[0135-7]|77"]],
								[, "(\\d{4})(\\d{4})", "$1 $2", ["[369]|8[1-8]"]],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
								[, "(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]],
								[, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
							],
							[
								[, "(\\d{4})(\\d{4})", "$1 $2", ["[369]|8[1-8]"]],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
								[, "(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]],
								[, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
							],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "7000\\d{7}", , , , "70001234567", , , [11]], , , [, , , , , , , , , [-1]]
						],
						SH: [, [, , "(?:[256]\\d|8)\\d{3}", , , , , , , [4, 5]],
							[, , "2(?:[0-57-9]\\d|6[4-9])\\d\\d", , , , "22158"],
							[, , "[56]\\d{4}", , , , "51234", , , [5]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "262\\d\\d", , , , "26212", , , [5]], "SH", 290, "00", , , , , , , , , , [, , , , , , , , , [-1]], 1, "[256]", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						SI: [, [, , "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", , , , , , , [5, 6, 7, 8]],
							[, , "(?:[1-357][2-8]|4[24-8])\\d{6}", , , , "12345678", , , [8],
								[7]
							],
							[, , "6(?:5(?:1\\d|55|[67]0)|9(?:10|[69]\\d))\\d{4}|(?:[37][01]|4[0139]|51|6[48])\\d{6}", , , , "31234567", , , [8]],
							[, , "80\\d{4,6}", , , , "80123456", , , [6, 7, 8]],
							[, , "89[1-3]\\d{2,5}|90\\d{4,6}", , , , "90123456"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "(?:59\\d\\d|8(?:1(?:[67]\\d|8[01389])|2(?:0\\d|2[0378]|8[0-2489])|3[389]\\d))\\d{4}", , , , "59012345", , , [8]], "SI", 386, "00|10(?:22|66|88|99)", "0", , , "0", , "00", , [
								[, "(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"],
								[, "(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"],
								[, "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						SJ: [, [, , "0\\d{4}|(?:[4589]\\d|79)\\d{6}", , , , , , , [5, 8]],
							[, , "79\\d{6}", , , , "79123456", , , [8]],
							[, , "(?:4[015-8]|5[89]|9\\d)\\d{6}", , , , "41234567", , , [8]],
							[, , "80[01]\\d{5}", , , , "80012345", , , [8]],
							[, , "82[09]\\d{5}", , , , "82012345", , , [8]],
							[, , "810(?:0[0-6]|[2-8]\\d)\\d{3}", , , , "81021234", , , [8]],
							[, , "880\\d{5}", , , , "88012345", , , [8]],
							[, , "85[0-5]\\d{5}", , , , "85012345", , , [8]], "SJ", 47, "00", , , , , , , , , , [, , , , , , , , , [-1]], , "79", [, , , , , , , , , [-1]],
							[, , "8100[7-9]\\d{3}|(?:0|81(?:01|5\\d))\\d{4}", , , , "01234"], , , [, , "81[23]\\d{5}", , , , "81212345", , , [8]]
						],
						SK: [, [, , "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", , , , , , , [6, 7, 9]],
							[, , "(?:2(?:16|[2-9]\\d{3})|[3-5][1-8]\\d{3})\\d{4}|(?:2|[3-5][1-8])1[67]\\d{3}|[3-5][1-8]16\\d\\d", , , , "221234567"],
							[, , "909[1-9]\\d{5}|9(?:0[1-8]|1[0-24-9]|[45]\\d)\\d{6}", , , , "912123456", , , [9]],
							[, , "800\\d{6}", , , , "800123456", , , [9]],
							[, , "9(?:00|[78]\\d)\\d{6}", , , , "900123456", , , [9]],
							[, , "8[5-9]\\d{7}", , , , "850123456", , , [9]],
							[, , , , , , , , , [-1]],
							[, , "6(?:02|5[0-4]|9[0-6])\\d{6}", , , , "690123456", , , [9]], "SK", 421, "00", "0", , , "0", , , , [
								[, "(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
								[, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"],
								[, "(\\d{4})(\\d{3})", "$1 $2", ["909", "9090"], "0$1"],
								[, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]
							],
							[
								[, "(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
								[, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"],
								[, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]
							],
							[, , "9090\\d{3}", , , , "9090123", , , [7]], , , [, , "9090\\d{3}|(?:602|8(?:00|[5-9]\\d)|9(?:00|[78]\\d))\\d{6}", , , , , , , [7, 9]],
							[, , "96\\d{7}", , , , "961234567", , , [9]], , , [, , , , , , , , , [-1]]
						],
						SL: [, [, , "(?:[2-578]\\d|66|99)\\d{6}", , , , , , , [8],
								[6]
							],
							[, , "[235]2[2-4][2-9]\\d{4}", , , , "22221234", , , , [6]],
							[, , "(?:2[15]|3[013-5]|4[04]|5[05]|66|7[5-9]|8[08]|99)\\d{6}", , , , "25123456"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "SL", 232, "00", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{6})", "$1 $2", ["[2-9]"], "(0$1)"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						SM: [, [, , "(?:0549|[5-7]\\d)\\d{6}", , , , , , , [8, 10],
								[6]
							],
							[, , "0549(?:8[0157-9]|9\\d)\\d{4}", , , , "0549886377", , , [10],
								[6]
							],
							[, , "6[16]\\d{6}", , , , "66661212", , , [8]],
							[, , , , , , , , , [-1]],
							[, , "7[178]\\d{6}", , , , "71123456", , , [8]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "5[158]\\d{6}", , , , "58001110", , , [8]], "SM", 378, "00", , , , "([89]\\d{5})$", "0549$1", , , [
								[, "(\\d{6})", "$1", ["[89]"]],
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
								[, "(\\d{4})(\\d{6})", "$1 $2", ["0"]]
							],
							[
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
								[, "(\\d{4})(\\d{6})", "$1 $2", ["0"]]
							],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						SN: [, [, , "(?:[378]\\d{4}|93330)\\d{4}", , , , , , , [9]],
							[, , "3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611)\\d{5}", , , , "301012345"],
							[, , "7(?:[06-8]\\d|21|90)\\d{6}", , , , "701234567"],
							[, , "800\\d{6}", , , , "800123456"],
							[, , "88[4689]\\d{6}", , , , "884123456"],
							[, , "81[02468]\\d{6}", , , , "810123456"],
							[, , , , , , , , , [-1]],
							[, , "93330\\d{4}|3(?:392|9[01]\\d)\\d{5}", , , , "933301234"], "SN", 221, "00", , , , , , , , [
								[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
								[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						SO: [, [, , "[346-9]\\d{8}|[12679]\\d{7}|(?:[1-4]\\d|59)\\d{5}|[1348]\\d{5}", , , , , , , [6, 7, 8, 9]],
							[, , "(?:1\\d|2[0-79]|3[0-46-8]|4[0-7]|59)\\d{5}|(?:[134]\\d|8[125])\\d{4}", , , , "4012345", , , [6, 7]],
							[, , "28\\d{5}|(?:6[1-9]|79)\\d{6,7}|(?:15|24|(?:3[59]|4[89]|8[08])\\d|60|7[1-8]|9(?:0[67]|[2-9]))\\d{6}", , , , "71123456", , , [7, 8, 9]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "SO", 252, "00", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
								[, "(\\d{6})", "$1", ["[134]"]],
								[, "(\\d)(\\d{6})", "$1 $2", ["1|2[0-79]|3[0-46-8]|4[0-7]|59"]],
								[, "(\\d)(\\d{7})", "$1 $2", ["24|[67]"]],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79[0-8]|90"]],
								[, "(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[1-35-9]|799|9[2-9]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						SR: [, [, , "(?:[2-5]|68|[78]\\d)\\d{5}", , , , , , , [6, 7]],
							[, , "(?:2[1-3]|3[0-7]|(?:4|68)\\d|5[2-58])\\d{4}", , , , "211234"],
							[, , "(?:7[124-7]|8[125-9])\\d{5}", , , , "7412345", , , [7]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "56\\d{4}", , , , "561234", , , [6]], "SR", 597, "00", , , , , , , , [
								[, "(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]],
								[, "(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]],
								[, "(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						SS: [, [, , "[19]\\d{8}", , , , , , , [9]],
							[, , "18\\d{7}", , , , "181234567"],
							[, , "(?:12|9[1257])\\d{7}", , , , "977123456"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "SS", 211, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						ST: [, [, , "(?:22|9\\d)\\d{5}", , , , , , , [7]],
							[, , "22\\d{5}", , , , "2221234"],
							[, , "900[5-9]\\d{3}|9(?:0[1-9]|[89]\\d)\\d{4}", , , , "9812345"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "ST", 239, "00", , , , , , , , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						SV: [, [, , "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", , , , , , , [7, 8, 11]],
							[, , "2[1-6]\\d{6}", , , , "21234567", , , [8]],
							[, , "[67]\\d{7}", , , , "70123456", , , [8]],
							[, , "800\\d{4}(?:\\d{4})?", , , , "8001234", , , [7, 11]],
							[, , "900\\d{4}(?:\\d{4})?", , , , "9001234", , , [7, 11]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "SV", 503, "00", , , , , , , , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
								[, "(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
								[, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						SX: [, [, , "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", , , , , , , [10],
								[7]
							],
							[, , "7215(?:4[2-8]|8[239]|9[056])\\d{4}", , , , "7215425678", , , , [7]],
							[, , "7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}", , , , "7215205678", , , , [7]],
							[, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
							[, , "900[2-9]\\d{6}", , , , "9002123456"],
							[, , , , , , , , , [-1]],
							[, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
							[, , , , , , , , , [-1]], "SX", 1, "011", "1", , , "1|(5\\d{6})$", "721$1", , , , , [, , , , , , , , , [-1]], , "721", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						SY: [, [, , "[1-39]\\d{8}|[1-5]\\d{7}", , , , , , , [8, 9],
								[6, 7]
							],
							[, , "[12]1\\d{6,7}|(?:1(?:[2356]|4\\d)|2[235]|3(?:[13]\\d|4)|4[13]|5[1-3])\\d{6}", , , , "112345678", , , , [6, 7]],
							[, , "9(?:22|[3-589]\\d|6[024-9])\\d{6}", , , , "944567890", , , [9]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "SY", 963, "00", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", , 1],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", , 1]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						SZ: [, [, , "0800\\d{4}|(?:[237]\\d|900)\\d{6}", , , , , , , [8, 9]],
							[, , "[23][2-5]\\d{6}", , , , "22171234", , , [8]],
							[, , "7[6-9]\\d{6}", , , , "76123456", , , [8]],
							[, , "0800\\d{4}", , , , "08001234", , , [8]],
							[, , "900\\d{6}", , , , "900012345", , , [9]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "70\\d{6}", , , , "70012345", , , [8]], "SZ", 268, "00", , , , , , , , [
								[, "(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]],
								[, "(\\d{5})(\\d{4})", "$1 $2", ["9"]]
							], , [, , , , , , , , , [-1]], , , [, , "0800\\d{4}", , , , , , , [8]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						TA: [, [, , "8\\d{3}", , , , , , , [4]],
							[, , "8\\d{3}", , , , "8999"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "TA", 290, "00", , , , , , , , , , [, , , , , , , , , [-1]], , "8", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						TC: [, [, , "(?:[58]\\d\\d|649|900)\\d{7}", , , , , , , [10],
								[7]
							],
							[, , "649(?:712|9(?:4\\d|50))\\d{4}", , , , "6497121234", , , , [7]],
							[, , "649(?:2(?:3[129]|4[1-7])|3(?:3[1-389]|4[1-8])|4[34][1-3])\\d{4}", , , , "6492311234", , , , [7]],
							[, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
							[, , "900[2-9]\\d{6}", , , , "9002345678"],
							[, , , , , , , , , [-1]],
							[, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
							[, , "64971[01]\\d{4}", , , , "6497101234", , , , [7]], "TC", 1, "011", "1", , , "1|([2-479]\\d{6})$", "649$1", , , , , [, , , , , , , , , [-1]], , "649", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						TD: [, [, , "(?:22|[69]\\d|77)\\d{6}", , , , , , , [8]],
							[, , "22(?:[37-9]0|5[0-5]|6[89])\\d{4}", , , , "22501234"],
							[, , "(?:6[023568]|77|9\\d)\\d{6}", , , , "63012345"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "TD", 235, "00|16", , , , , , "00", , [
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						TG: [, [, , "[279]\\d{7}", , , , , , , [8]],
							[, , "2(?:2[2-7]|3[23]|4[45]|55|6[67]|77)\\d{5}", , , , "22212345"],
							[, , "(?:7[09]|9[0-36-9])\\d{6}", , , , "90112345"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "TG", 228, "00", , , , , , , , [
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						TH: [, [, , "1\\d{8,9}|(?:[2-57]|[689]\\d)\\d{7}", , , , , , , [8, 9, 10]],
							[, , "(?:2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}", , , , "21234567", , , [8]],
							[, , "(?:14|6[1-6]|[89]\\d)\\d{7}", , , , "812345678", , , [9]],
							[, , "1800\\d{6}", , , , "1800123456", , , [10]],
							[, , "1900\\d{6}", , , , "1900123456", , , [10]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "6[08]\\d{7}", , , , "601234567", , , [9]], "TH", 66, "00[1-9]", "0", , , "0", , , , [
								[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["14|[3-9]"], "0$1"],
								[, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						TJ: [, [, , "(?:[3-59]\\d|77|88)\\d{7}", , , , , , , [9],
								[3, 5, 6, 7]
							],
							[, , "(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}", , , , "372123456", , , , [3, 5, 6, 7]],
							[, , "41[18]\\d{6}|(?:5[05]|77|88|9[0-35-9])\\d{7}", , , , "917123456"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "TJ", 992, "810", "8", , , "8", , "8~10", , [
								[, "(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"], , , 1],
								[, "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"], , , 1],
								[, "(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3"], , , 1],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[457-9]"], , , 1]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						TK: [, [, , "[2-47]\\d{3,6}", , , , , , , [4, 5, 6, 7]],
							[, , "(?:2[2-4]|[34]\\d)\\d{2,5}", , , , "3101"],
							[, , "7[2-4]\\d{2,5}", , , , "7290"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "TK", 690, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						TL: [, [, , "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", , , , , , , [7, 8]],
							[, , "(?:2[1-5]|3[1-9]|4[1-4])\\d{5}", , , , "2112345", , , [7]],
							[, , "7[3-8]\\d{6}", , , , "77212345", , , [8]],
							[, , "80\\d{5}", , , , "8012345", , , [7]],
							[, , "90\\d{5}", , , , "9012345", , , [7]],
							[, , , , , , , , , [-1]],
							[, , "70\\d{5}", , , , "7012345", , , [7]],
							[, , , , , , , , , [-1]], "TL", 670, "00", , , , , , , , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]],
								[, "(\\d{4})(\\d{4})", "$1 $2", ["7"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						TM: [, [, , "[1-6]\\d{7}", , , , , , , [8]],
							[, , "(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}", , , , "12345678"],
							[, , "6[1-9]\\d{6}", , , , "66123456"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "TM", 993, "810", "8", , , "8", , "8~10", , [
								[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"],
								[, "(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"],
								[, "(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						TN: [, [, , "[2-57-9]\\d{7}", , , , , , , [8]],
							[, , "81200\\d{3}|(?:3[0-2]|7\\d)\\d{6}", , , , "30010123"],
							[, , "3(?:001|[12]40)\\d{4}|(?:(?:[259]\\d|4[0-6])\\d|3(?:1[1-35]|6[0-4]|91))\\d{5}", , , , "20123456"],
							[, , "8010\\d{4}", , , , "80101234"],
							[, , "88\\d{6}", , , , "88123456"],
							[, , "8[12]10\\d{4}", , , , "81101234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "TN", 216, "00", , , , , , , , [
								[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						TO: [, [, , "[78]\\d{6}|[2-478]\\d{4}|(?:080|[56])0\\d{3}", , , , , , , [5, 7]],
							[, , "(?:2\\d|3[1-8]|4[1-4]|[56]0|7[0149]|8[05])\\d{3}", , , , "20123", , , [5]],
							[, , "(?:7[578]|8[46-9])\\d{5}", , , , "7715123", , , [7]],
							[, , "0800\\d{3}", , , , "0800222", , , [7]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "TO", 676, "00", , , , , , , , [
								[, "(\\d{2})(\\d{3})", "$1-$2", ["[2-6]|7[014]|8[05]"]],
								[, "(\\d{4})(\\d{3})", "$1 $2", ["0"]],
								[, "(\\d{3})(\\d{4})", "$1 $2", ["7[578]|8"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						TR: [, [, , "(?:[2-58]\\d\\d|900)\\d{7}|4\\d{6}", , , , , , , [7, 10]],
							[, , "(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}", , , , "2123456789", , , [10]],
							[, , "56161\\d{5}|5(?:0[15-7]|1[06]|24|[34]\\d|5[1-59]|9[46])\\d{7}", , , , "5012345678", , , [10]],
							[, , "800\\d{7}", , , , "8001234567", , , [10]],
							[, , "(?:8[89]8|900)\\d{7}", , , , "9001234567", , , [10]],
							[, , , , , , , , , [-1]],
							[, , "592(?:21[12]|461)\\d{4}", , , , "5922121234", , , [10]],
							[, , , , , , , , , [-1]], "TR", 90, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d)(\\d{3})", "$1 $2 $3", ["444"], , , 1],
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[0589]|90"], "0$1", , 1],
								[, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1", , 1],
								[, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", , 1]
							],
							[
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[0589]|90"], "0$1", , 1],
								[, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1", , 1],
								[, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", , 1]
							],
							[, , "512\\d{7}", , , , "5123456789", , , [10]], , , [, , "444\\d{4}", , , , , , , [7]],
							[, , "(?:444|850\\d{3})\\d{4}", , , , "4441444"], , , [, , , , , , , , , [-1]]
						],
						TT: [, [, , "(?:[58]\\d\\d|900)\\d{7}", , , , , , , [10],
								[7]
							],
							[, , "868(?:2(?:01|1[89]|[23]\\d)|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}", , , , "8682211234", , , , [7]],
							[, , "868(?:2(?:6[6-9]|[7-9]\\d)|[37](?:0[1-9]|1[02-9]|[2-9]\\d)|4[6-9]\\d|6(?:20|78|8\\d))\\d{4}", , , , "8682911234", , , , [7]],
							[, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
							[, , "900[2-9]\\d{6}", , , , "9002345678"],
							[, , , , , , , , , [-1]],
							[, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
							[, , , , , , , , , [-1]], "TT", 1, "011", "1", , , "1|([2-46-8]\\d{6})$", "868$1", , , , , [, , , , , , , , , [-1]], , "868", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , "868619\\d{4}", , , , "8686191234", , , , [7]]
						],
						TV: [, [, , "(?:2|7\\d\\d|90)\\d{4}", , , , , , , [5, 6, 7]],
							[, , "2[02-9]\\d{3}", , , , "20123", , , [5]],
							[, , "(?:7[01]\\d|90)\\d{4}", , , , "901234", , , [6, 7]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "TV", 688, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						TW: [, [, , "(?:[24589]|7\\d)\\d{8}|[2-8]\\d{7}|2\\d{6}", , , , , , , [7, 8, 9, 10]],
							[, , "24\\d{6,7}|82(?:3\\d|66)\\d{4}|(?:2[235-8]\\d|3[2-9]|4(?:[239]\\d|[78])|5[2-8]|6[235-79]|7[1-9]|8[7-9])\\d{6}", , , , "221234567", , , [8, 9]],
							[, , "9[0-8]\\d{7}", , , , "912345678", , , [9]],
							[, , "80[0-79]\\d{6}", , , , "800123456", , , [9]],
							[, , "20(?:[013-9]\\d\\d|2)\\d{4}", , , , "203123456", , , [7, 9]],
							[, , , , , , , , , [-1]],
							[, , "99\\d{7}", , , , "990123456", , , [9]],
							[, , "70\\d{8}", , , , "7012345678", , , [10]], "TW", 886, "0(?:0[25-79]|19)", "0", "#", , "0", , , , [
								[, "(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"],
								[, "(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[25][2-8]|[346]|7[1-9]|8[27-9]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[258]"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
								[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "50[0-46-9]\\d{6}", , , , "500123456", , , [9]], , , [, , , , , , , , , [-1]]
						],
						TZ: [, [, , "(?:[26-8]\\d|41|90)\\d{7}", , , , , , , [9]],
							[, , "2[2-8]\\d{7}", , , , "222345678"],
							[, , "(?:6[2-9]|7[13-9])\\d{7}", , , , "621234567"],
							[, , "80[08]\\d{6}", , , , "800123456"],
							[, , "90\\d{7}", , , , "900123456"],
							[, , "8(?:40|6[01])\\d{6}", , , , "840123456"],
							[, , , , , , , , , [-1]],
							[, , "41\\d{7}", , , , "412345678"], "TZ", 255, "00[056]", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , "(?:8(?:[04]0|6[01])|90\\d)\\d{6}"],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						UA: [, [, , "[3-9]\\d{8}", , , , , , , [9],
								[5, 6, 7]
							],
							[, , "(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}", , , , "311234567", , , , [5, 6, 7]],
							[, , "(?:39|50|6[36-8]|7[1-3]|9[1-9])\\d{7}", , , , "391234567"],
							[, , "800\\d{6}", , , , "800123456"],
							[, , "900[2-49]\\d{5}", , , , "900212345"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "89[1-579]\\d{6}", , , , "891234567"], "UA", 380, "00", "0", , , "0", , "0~0", , [
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|[89]0|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|[89]0|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"],
								[, "(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-9]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						UG: [, [, , "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", , , , , , , [9],
								[5, 6, 7]
							],
							[, , "20(?:(?:240|30[0-4])\\d|6(?:00[0-2]|30[0-4]))\\d{3}|(?:20(?:[0147]\\d|[26][5-9]|3[2367]|5[0-4]|8[0-2])|[34]\\d{3})\\d{5}", , , , "312345678", , , , [5, 6, 7]],
							[, , "7260\\d{5}|7(?:[0157-9]\\d|2[03]|30|4[0-4])\\d{6}", , , , "712345678"],
							[, , "800[1-3]\\d{5}", , , , "800123456"],
							[, , "90[1-3]\\d{6}", , , , "901123456"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "UG", 256, "00[057]", "0", , , "0", , , , [
								[, "(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"],
								[, "(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"],
								[, "(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						US: [, [, , "[2-9]\\d{9}", , , , , , , [10],
								[7]
							],
							[, , "(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-2])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}", , , , "2015550123", , , , [7]],
							[, , "(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-2])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}", , , , "2015550123", , , , [7]],
							[, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
							[, , "900[2-9]\\d{6}", , , , "9002345678"],
							[, , , , , , , , , [-1]],
							[, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
							[, , , , , , , , , [-1]], "US", 1, "011", "1", , , "1", , , 1, [
								[, "(\\d{3})(\\d{4})", "$1-$2", ["[2-9]"]],
								[, "(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], , , 1]
							],
							[
								[, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-9]"]]
							],
							[, , , , , , , , , [-1]], 1, , [, , , , , , , , , [-1]],
							[, , "710[2-9]\\d{6}", , , , "7102123456"], , , [, , , , , , , , , [-1]]
						],
						UY: [, [, , "(?:[249]\\d\\d|80)\\d{5}|9\\d{6}", , , , , , , [7, 8]],
							[, , "(?:2\\d|4[2-7])\\d{6}", , , , "21231234", , , [8],
								[7]
							],
							[, , "9[1-9]\\d{6}", , , , "94231234", , , [8]],
							[, , "80[05]\\d{4}", , , , "8001234", , , [7]],
							[, , "90[0-8]\\d{4}", , , , "9001234", , , [7]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "UY", 598, "0(?:0|1[3-9]\\d)", "0", " int. ", , "0", , "00", , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["8|90"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
								[, "(\\d{4})(\\d{4})", "$1 $2", ["[24]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						UZ: [, [, , "[679]\\d{8}", , , , , , , [9]],
							[, , "(?:6(?:1(?:22|3[124]|4[1-4]|5[1-3578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d\\d|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[124-6]|9[135-8])|1[12]\\d|2(?:22|3[13-57-9]|4[1-3579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|6(?:22|3[12457]|4[13-8])|9(?:22|5[1-9])))\\d{5}", , , , "669050123"],
							[, , "(?:6(?:1(?:2(?:2[01]|98)|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:(?:11|7\\d)\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4]))|5(?:19[01]|2(?:27|9[26])|(?:30|59|7\\d)\\d)|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|(?:3[79]|9[0-3])\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79]))|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|3[01]|5\\d|7[0-4])|(?:5[67]|7\\d)\\d|6(?:2[0-26]|8\\d)))|7(?:0\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|(?:33|9[4-6])\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078]))|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0-27]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[02569]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07])))|9[0-57-9]\\d{3})\\d{4}", , , , "912345678"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "UZ", 998, "810", "8", , , "8", , "8~10", , [
								[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[679]"], "8 $1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						VA: [, [, , "0\\d{6,10}|55\\d{8}|[08]\\d{5}|(?:3[0-8]|8)\\d{7,9}|(?:1\\d|39)\\d{7,8}", , , , , , , [6, 7, 8, 9, 10, 11]],
							[, , "06698\\d{1,6}", , , , "0669812345"],
							[, , "33\\d{9}|3[1-9]\\d{8}|3[2-9]\\d{7}", , , , "3123456789", , , [9, 10, 11]],
							[, , "80(?:0\\d{3}|3)\\d{3}", , , , "800123456", , , [6, 9]],
							[, , "(?:0878\\d\\d|89(?:2|4[5-9]\\d))\\d{3}|89[45][0-4]\\d\\d|(?:1(?:44|6[346])|89(?:5[5-9]|9))\\d{6}", , , , "899123456", , , [6, 8, 9, 10]],
							[, , "84(?:[08]\\d{3}|[17])\\d{3}", , , , "848123456", , , [6, 9]],
							[, , "1(?:78\\d|99)\\d{6}", , , , "1781234567", , , [9, 10]],
							[, , "55\\d{8}", , , , "5512345678", , , [10]], "VA", 39, "00", , , , , , , , , , [, , , , , , , , , [-1]], , "06698", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						VC: [, [, , "(?:[58]\\d\\d|784|900)\\d{7}", , , , , , , [10],
								[7]
							],
							[, , "784(?:266|3(?:6[6-9]|7\\d|8[0-24-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}", , , , "7842661234", , , , [7]],
							[, , "784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4]))\\d{4}", , , , "7844301234", , , , [7]],
							[, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
							[, , "900[2-9]\\d{6}", , , , "9002345678"],
							[, , , , , , , , , [-1]],
							[, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
							[, , , , , , , , , [-1]], "VC", 1, "011", "1", , , "1|([2-7]\\d{6})$", "784$1", , , , , [, , , , , , , , , [-1]], , "784", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						VE: [, [, , "[89]00\\d{7}|(?:[24]\\d|50)\\d{8}", , , , , , , [10],
								[7]
							],
							[, , "(?:2(?:12|3[457-9]|[467]\\d|[58][1-9]|9[1-6])|50[01])\\d{7}", , , , "2121234567", , , , [7]],
							[, , "4(?:1[24-8]|2[46])\\d{7}", , , , "4121234567"],
							[, , "800\\d{7}", , , , "8001234567"],
							[, , "900\\d{7}", , , , "9001234567"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "VE", 58, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{7})", "$1-$2", ["[24589]"], "0$1", "$CC $1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						VG: [, [, , "(?:284|[58]\\d\\d|900)\\d{7}", , , , , , , [10],
								[7]
							],
							[, , "284496[0-5]\\d{3}|284(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}", , , , "2842291234", , , , [7]],
							[, , "284496[6-9]\\d{3}|284(?:3(?:0[0-3]|4[0-7]|68|9[34])|4(?:4[0-6]|68|99)|54[0-57])\\d{4}", , , , "2843001234", , , , [7]],
							[, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
							[, , "900[2-9]\\d{6}", , , , "9002345678"],
							[, , , , , , , , , [-1]],
							[, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
							[, , , , , , , , , [-1]], "VG", 1, "011", "1", , , "1|([2-578]\\d{6})$", "284$1", , , , , [, , , , , , , , , [-1]], , "284", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						VI: [, [, , "[58]\\d{9}|(?:34|90)0\\d{7}", , , , , , , [10],
								[7]
							],
							[, , "340(?:2(?:01|2[06-8]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}", , , , "3406421234", , , , [7]],
							[, , "340(?:2(?:01|2[06-8]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}", , , , "3406421234", , , , [7]],
							[, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
							[, , "900[2-9]\\d{6}", , , , "9002345678"],
							[, , , , , , , , , [-1]],
							[, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
							[, , , , , , , , , [-1]], "VI", 1, "011", "1", , , "1|([2-9]\\d{6})$", "340$1", , 1, , , [, , , , , , , , , [-1]], , "340", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						VN: [, [, , "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", , , , , , , [7, 8, 9, 10]],
							[, , "2(?:0[3-9]|1[0-689]|2[0-25-9]|3[2-9]|4[2-8]|5[124-9]|6[0-39]|7[0-7]|8[2-7]|9[0-4679])\\d{7}", , , , "2101234567", , , [10]],
							[, , "(?:(?:3\\d|7[06-9])\\d|5(?:2[238]|[689]\\d)|8(?:[1-58]\\d|6[5-9]|79|9[689])|9(?:[0-8]\\d|9[013-9]))\\d{6}", , , , "912345678", , , [9]],
							[, , "1800\\d{4,6}", , , , "1800123456", , , [8, 9, 10]],
							[, , "1900\\d{4,6}", , , , "1900123456", , , [8, 9, 10]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "672\\d{6}", , , , "672012345", , , [9]], "VN", 84, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["[17]99"], "0$1", , 1],
								[, "(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", , 1],
								[, "(\\d{3})(\\d{4,5})", "$1 $2", ["69"], "0$1", , 1],
								[, "(\\d{4})(\\d{4,6})", "$1 $2", ["1"], , , 1],
								[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1", , 1],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1", , 1],
								[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", , 1],
								[, "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", , 1]
							],
							[
								[, "(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", , 1],
								[, "(\\d{4})(\\d{4,6})", "$1 $2", ["1"], , , 1],
								[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1", , 1],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1", , 1],
								[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", , 1],
								[, "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", , 1]
							],
							[, , , , , , , , , [-1]], , , [, , "[17]99\\d{4}|69\\d{5,6}", , , , , , , [7, 8]],
							[, , "(?:[17]99|80\\d)\\d{4}|69\\d{5,6}", , , , "1992000", , , [7, 8]], , , [, , , , , , , , , [-1]]
						],
						VU: [, [, , "(?:[23]\\d|[48]8)\\d{3}|(?:[57]\\d|90)\\d{5}", , , , , , , [5, 7]],
							[, , "(?:38[0-8]|48[4-9])\\d\\d|(?:2[02-9]|3[4-7]|88)\\d{3}", , , , "22123", , , [5]],
							[, , "57[2-5]\\d{4}|(?:5[0-689]|7[013-7])\\d{5}", , , , "5912345", , , [7]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "90[1-9]\\d{4}", , , , "9010123", , , [7]], "VU", 678, "00", , , , , , , , [
								[, "(\\d{3})(\\d{4})", "$1 $2", ["[579]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "(?:3[03]|900\\d)\\d{3}", , , , "30123"], , , [, , , , , , , , , [-1]]
						],
						WF: [, [, , "(?:[45]0|68|72|8\\d)\\d{4}", , , , , , , [6]],
							[, , "(?:50|68|72)\\d{4}", , , , "501234"],
							[, , "(?:50|68|72|8[23])\\d{4}", , , , "501234"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "WF", 681, "00", , , , , , , , [
								[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[4-8]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , "[48]0\\d{4}", , , , "401234"]
						],
						WS: [, [, , "[2-6]\\d{4}|8\\d{5}(?:\\d{4})?|[78]\\d{6}", , , , , , , [5, 6, 7, 10]],
							[, , "(?:[2-5]\\d|6[1-9])\\d{3}", , , , "22123", , , [5]],
							[, , "(?:7[25-7]|8(?:[3-7]|9\\d{3}))\\d{5}", , , , "7212345", , , [7, 10]],
							[, , "800\\d{3}", , , , "800123", , , [6]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "WS", 685, "0", , , , , , , , [
								[, "(\\d{5})", "$1", ["[2-6]"]],
								[, "(\\d{3})(\\d{3,7})", "$1 $2", ["8"]],
								[, "(\\d{2})(\\d{5})", "$1 $2", ["7"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						XK: [, [, , "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", , , , , , , [8, 9]],
							[, , "(?:2[89]|39)0\\d{6}|[23][89]\\d{6}", , , , "28012345"],
							[, , "4[3-79]\\d{6}", , , , "43201234", , , [8]],
							[, , "800\\d{5}", , , , "80001234", , , [8]],
							[, , "900\\d{5}", , , , "90001234", , , [8]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "XK", 383, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						YE: [, [, , "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", , , , , , , [7, 8, 9],
								[6]
							],
							[, , "17\\d{6}|(?:[12][2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-68])\\d{5}", , , , "1234567", , , [7, 8],
								[6]
							],
							[, , "7[0137]\\d{7}", , , , "712345678", , , [9]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "YE", 967, "00", "0", , , "0", , , , [
								[, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						YT: [, [, , "80\\d{7}|(?:26|63)9\\d{6}", , , , , , , [9]],
							[, , "269(?:0[67]|5[01]|6\\d|[78]0)\\d{4}", , , , "269601234"],
							[, , "639(?:0[0-79]|1[019]|[267]\\d|3[09]|[45]0|9[04-79])\\d{4}", , , , "639012345"],
							[, , "80\\d{7}", , , , "801234567"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "YT", 262, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , "269|63", [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						ZA: [, [, , "[1-9]\\d{8}|8\\d{4,7}", , , , , , , [5, 6, 7, 8, 9]],
							[, , "(?:1[0-8]|2[1-378]|3[1-69]|4\\d|5[1346-8])\\d{7}", , , , "101234567", , , [9]],
							[, , "8[1-4]\\d{3,7}|(?:6\\d|7[0-46-9]|85)\\d{7}", , , , "711234567"],
							[, , "80\\d{7}", , , , "801234567", , , [9]],
							[, , "(?:86[2-9]|9[0-2]\\d)\\d{6}", , , , "862345678", , , [9]],
							[, , "860\\d{6}", , , , "860123456", , , [9]],
							[, , , , , , , , , [-1]],
							[, , "87\\d{7}", , , , "871234567", , , [9]], "ZA", 27, "00", "0", , , "0", , , , [
								[, "(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "861\\d{6}", , , , "861123456", , , [9]], , , [, , , , , , , , , [-1]]
						],
						ZM: [, [, , "800\\d{6}|(?:21|76|9\\d)\\d{7}", , , , , , , [9],
								[6]
							],
							[, , "21[1-8]\\d{6}", , , , "211234567", , , , [6]],
							[, , "(?:76|9[5-8])\\d{7}", , , , "955123456"],
							[, , "800\\d{6}", , , , "800123456"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "ZM", 260, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{3})", "$1 $2", ["[1-9]"]],
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
								[, "(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]
							],
							[
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
								[, "(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]
							],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						ZW: [, [, , "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", , , , , , , [5, 6, 7, 8, 9, 10],
								[3, 4]
							],
							[, , "(?:1(?:(?:3\\d|9)\\d|[4-8])|2(?:(?:(?:0(?:2[014]|5)|(?:2[0157]|31|84|9)\\d\\d|[56](?:[14]\\d\\d|20)|7(?:[089]|2[03]|[35]\\d\\d))\\d|4(?:2\\d\\d|8))\\d|1(?:2|[39]\\d{4}))|3(?:(?:123|(?:29\\d|92)\\d)\\d\\d|7(?:[19]|[56]\\d))|5(?:0|1[2-478]|26|[37]2|4(?:2\\d{3}|83)|5(?:25\\d\\d|[78])|[689]\\d)|6(?:(?:[16-8]21|28|52[013])\\d\\d|[39])|8(?:[1349]28|523)\\d\\d)\\d{3}|(?:4\\d\\d|9[2-9])\\d{4,5}|(?:(?:2(?:(?:(?:0|8[146])\\d|7[1-7])\\d|2(?:[278]\\d|92)|58(?:2\\d|3))|3(?:[26]|9\\d{3})|5(?:4\\d|5)\\d\\d)\\d|6(?:(?:(?:[0-246]|[78]\\d)\\d|37)\\d|5[2-8]))\\d\\d|(?:2(?:[569]\\d|8[2-57-9])|3(?:[013-59]\\d|8[37])|6[89]8)\\d{3}", , , , "1312345", , , , [3, 4]],
							[, , "(?:7(?:1\\d|3[2-9]|7[1-9]|8[2-5])|8644)\\d{6}", , , , "712345678", , , [9, 10]],
							[, , "80(?:[01]\\d|20|8[0-8])\\d{3}", , , , "8001234", , , [7]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "86(?:1[12]|30|55|77|8[368])\\d{6}", , , , "8686123456", , , [10]], "ZW", 263, "00", "0", , , "0", , , , [
								[, "(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"],
								[, "(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"],
								[, "(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"],
								[, "(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"],
								[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
								[, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"],
								[, "(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"],
								[, "(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"],
								[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"],
								[, "(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						800: [, [, , "\\d{8}", , , , , , , [8]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "\\d{8}", , , , "12345678"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "001", 800, , , , , , , , 1, [
								[, "(\\d{4})(\\d{4})", "$1 $2"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						808: [, [, , "\\d{8}", , , , , , , [8]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "\\d{8}", , , , "12345678"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "001", 808, , , , , , , , 1, [
								[, "(\\d{4})(\\d{4})", "$1 $2"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						870: [, [, , "[35-7]\\d{8}", , , , , , , [9]],
							[, , , , , , , , , [-1]],
							[, , "(?:[356]\\d|7[6-8])\\d{7}", , , , "301234567"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "001", 870, , , , , , , , , [
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						878: [, [, , "10\\d{10}", , , , , , , [12]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "10\\d{10}", , , , "101234567890"], "001", 878, , , , , , , , 1, [
								[, "(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						881: [, [, , "[67]\\d{8}", , , , , , , [9]],
							[, , , , , , , , , [-1]],
							[, , "[67]\\d{8}", , , , "612345678"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "001", 881, , , , , , , , , [
								[, "(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[67]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						882: [, [, , "1\\d{6,11}|3\\d{6}(?:\\d{2,5})?", , , , , , , [7, 8, 9, 10, 11, 12]],
							[, , , , , , , , , [-1]],
							[, , "3(?:37\\d\\d|42)\\d{4}|3(?:2|47|7\\d{3})\\d{7}", , , , "3421234", , , [7, 9, 10, 12]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|3(?:45|9\\d{3})\\d{7}", , , , "390123456789"], "001", 882, , , , , , , , , [
								[, "(\\d{2})(\\d{5})", "$1 $2", ["16|342"]],
								[, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1"]],
								[, "(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]],
								[, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"]],
								[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["34[57]"]],
								[, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]],
								[, "(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[13]"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , "348[57]\\d{7}", , , , "34851234567", , , [11]]
						],
						883: [, [, , "51\\d{7}(?:\\d{3})?", , , , , , , [9, 12]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "51[013]0\\d{8}|5100\\d{5}", , , , "510012345"], "001", 883, , , , , , , , 1, [
								[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]],
								[, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["510"]],
								[, "(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["5"]]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						],
						888: [, [, , "\\d{11}", , , , , , , [11]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "001", 888, , , , , , , , 1, [
								[, "(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , "\\d{11}", , , , "12345678901"], , , [, , , , , , , , , [-1]]
						],
						979: [, [, , "\\d{9}", , , , , , , [9]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , "\\d{9}", , , , "123456789"],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], "001", 979, , , , , , , , 1, [
								[, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3"]
							], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
							[, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
						]
					};

				function U() {
					this.a = {}
				}
				U.c = void 0, U.a = function () {
					return U.c ? U.c : U.c = new U
				};
				var R = {
						0: "0",
						1: "1",
						2: "2",
						3: "3",
						4: "4",
						5: "5",
						6: "6",
						7: "7",
						8: "8",
						9: "9",
						"０": "0",
						"１": "1",
						"２": "2",
						"３": "3",
						"４": "4",
						"５": "5",
						"６": "6",
						"７": "7",
						"８": "8",
						"９": "9",
						"٠": "0",
						"١": "1",
						"٢": "2",
						"٣": "3",
						"٤": "4",
						"٥": "5",
						"٦": "6",
						"٧": "7",
						"٨": "8",
						"٩": "9",
						"۰": "0",
						"۱": "1",
						"۲": "2",
						"۳": "3",
						"۴": "4",
						"۵": "5",
						"۶": "6",
						"۷": "7",
						"۸": "8",
						"۹": "9"
					},
					K = {
						0: "0",
						1: "1",
						2: "2",
						3: "3",
						4: "4",
						5: "5",
						6: "6",
						7: "7",
						8: "8",
						9: "9",
						"０": "0",
						"１": "1",
						"２": "2",
						"３": "3",
						"４": "4",
						"５": "5",
						"６": "6",
						"７": "7",
						"８": "8",
						"９": "9",
						"٠": "0",
						"١": "1",
						"٢": "2",
						"٣": "3",
						"٤": "4",
						"٥": "5",
						"٦": "6",
						"٧": "7",
						"٨": "8",
						"٩": "9",
						"۰": "0",
						"۱": "1",
						"۲": "2",
						"۳": "3",
						"۴": "4",
						"۵": "5",
						"۶": "6",
						"۷": "7",
						"۸": "8",
						"۹": "9",
						A: "2",
						B: "2",
						C: "2",
						D: "3",
						E: "3",
						F: "3",
						G: "4",
						H: "4",
						I: "4",
						J: "5",
						K: "5",
						L: "5",
						M: "6",
						N: "6",
						O: "6",
						P: "7",
						Q: "7",
						R: "7",
						S: "7",
						T: "8",
						U: "8",
						V: "8",
						W: "9",
						X: "9",
						Y: "9",
						Z: "9"
					},
					j = /^[+\uff0b]+/,
					W = /([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])/,
					V = /[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]/,
					Z = /[\\\/] *x/,
					q = /[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$/,
					Y = /(?:.*?[A-Za-z]){3}.*/,
					J = /(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\.\uff0e]?[ \u00a0\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)$/i,
					X = /^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]\/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]\/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\.\uff0e]?[ \u00a0\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)?$/i,
					Q = /(\$\d)/;

				function dd(d) {
					return !(2 > d.length) && wd(X, d)
				}

				function td(d) {
					return wd(Y, d) ? nd(d, K) : nd(d, R)
				}

				function ed(d) {
					var t = td(d.toString());
					d.c = "", d.a(t)
				}

				function id(d) {
					return null != d && (1 != w(d, 9) || -1 != b(d, 9)[0])
				}

				function nd(d, t) {
					for (var e, i = new L, n = d.length, o = 0; o < n; ++o) null != (e = t[(e = d.charAt(o)).toUpperCase()]) && i.a(e);
					return i.toString()
				}

				function od(d) {
					return null != d && isNaN(d) && d.toUpperCase() in z
				}

				function sd(d, t, e) {
					if (0 == m(t, 2) && null != t.a[5]) {
						var i = C(t, 5);
						if (0 < i.length) return i
					}
					i = C(t, 1);
					var n = ad(t);
					if (0 == e) return ld(i, 0, n, "");
					if (!(i in G)) return n;
					d = rd(d, i, fd(i)), t = null != t.a[3] && 0 != m(t, 3).length ? 3 == e ? ";ext=" + m(t, 3) : null != d.a[13] ? m(d, 13) + C(t, 3) : " ext. " + C(t, 3) : "";
					d: {
						for (var o, s = (d = 0 == b(d, 20).length || 2 == e ? b(d, 19) : b(d, 20)).length, r = 0; r < s; ++r) {
							var a = w(o = d[r], 3);
							if ((0 == a || 0 == n.search(m(o, 3, a - 1))) && wd(a = new RegExp(m(o, 1)), n)) {
								d = o;
								break d
							}
						}
						d = null
					}
					return null != d && (d = C(s = d, 2), o = new RegExp(m(s, 1)), C(s, 5), s = C(s, 4), n = 2 == e && null != s && 0 < s.length ? n.replace(o, d.replace(Q, s)) : n.replace(o, d), 3 == e && (n = (n = n.replace(/^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]\/~\u2053\u223c\uff5e]+/, "")).replace(/[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]\/~\u2053\u223c\uff5e]+/g, "-"))), ld(i, e, n, t)
				}

				function rd(d, t, e) {
					return cd(d, "001" == e ? "" + t : e)
				}

				function ad(d) {
					if (null == d.a[2]) return "";
					var t = "" + m(d, 2);
					return null != d.a[4] && m(d, 4) && 0 < C(d, 8) ? Array(C(d, 8) + 1).join("0") + t : t
				}

				function ld(d, t, e, i) {
					switch (t) {
						case 0:
							return "+" + d + e + i;
						case 1:
							return "+" + d + " " + e + i;
						case 3:
							return "tel:+" + d + "-" + e + i;
						default:
							return e + i
					}
				}

				function $d(d, t) {
					switch (t) {
						case 4:
							return m(d, 5);
						case 3:
							return m(d, 4);
						case 1:
							return m(d, 3);
						case 0:
						case 2:
							return m(d, 2);
						case 5:
							return m(d, 6);
						case 6:
							return m(d, 8);
						case 7:
							return m(d, 7);
						case 8:
							return m(d, 21);
						case 9:
							return m(d, 25);
						case 10:
							return m(d, 28);
						default:
							return m(d, 1)
					}
				}

				function ud(d, t) {
					return pd(d, m(t, 1)) ? pd(d, m(t, 5)) ? 4 : pd(d, m(t, 4)) ? 3 : pd(d, m(t, 6)) ? 5 : pd(d, m(t, 8)) ? 6 : pd(d, m(t, 7)) ? 7 : pd(d, m(t, 21)) ? 8 : pd(d, m(t, 25)) ? 9 : pd(d, m(t, 28)) ? 10 : pd(d, m(t, 2)) ? m(t, 18) || pd(d, m(t, 3)) ? 2 : 0 : !m(t, 18) && pd(d, m(t, 3)) ? 1 : -1 : -1
				}

				function cd(d, t) {
					if (null == t) return null;
					t = t.toUpperCase();
					var e = d.a[t];
					if (null == e) {
						if (null == (e = z[t])) return null;
						e = (new E).a(D.f(), e), d.a[t] = e
					}
					return e
				}

				function pd(d, t) {
					var e = d.length;
					return !(0 < w(t, 9) && -1 == n(b(t, 9), e)) && wd(C(t, 2), d)
				}

				function hd(d, t) {
					if (null == t) return null;
					var e = C(t, 1);
					if (null == (e = G[e])) d = null;
					else if (1 == e.length) d = e[0];
					else d: {
						t = ad(t);
						for (var i, n = e.length, o = 0; o < n; o++) {
							var s = cd(d, i = e[o]);
							if (null != s.a[23]) {
								if (0 == t.search(m(s, 23))) {
									d = i;
									break d
								}
							} else if (-1 != ud(t, s)) {
								d = i;
								break d
							}
						}
						d = null
					}
					return d
				}

				function fd(d) {
					return null == (d = G[d]) ? "ZZ" : d[0]
				}

				function vd(d, t, e, i) {
					var s = $d(e, i),
						r = 0 == w(s, 9) ? b(m(e, 1), 9) : b(s, 9);
					if (s = b(s, 10), 2 == i) {
						if (!id($d(e, 0))) return vd(d, t, e, 1);
						id(d = $d(e, 1)) && (o(r = r.concat(0 == w(d, 9) ? b(m(e, 1), 9) : b(d, 9))), 0 == s.length ? s = b(d, 10) : o(s = s.concat(b(d, 10))))
					}
					return -1 == r[0] ? 5 : (t = t.length, -1 < n(s, t) ? 4 : (e = r[0]) == t ? 0 : e > t ? 2 : r[r.length - 1] < t ? 3 : -1 < n(r, t, 1) ? 0 : 5)
				}

				function gd(d, t) {
					var e = ad(t);
					return (t = C(t, 1)) in G ? vd(d, e, t = rd(d, t, fd(t)), -1) : 1
				}

				function yd(d, t, e, i, n, o) {
					if (0 == t.length) return 0;
					var s;
					t = new L(t), null != e && (s = m(e, 11)), null == s && (s = "NonMatch");
					var r = t.toString();
					if (0 == r.length) s = 20;
					else if (j.test(r)) r = r.replace(j, ""), t.c = "", t.a(td(r)), s = 1;
					else {
						if (r = new RegExp(s), ed(t), 0 == (s = t.toString()).search(r)) {
							r = s.match(r)[0].length;
							var a = s.substring(r).match(W);
							a && null != a[1] && 0 < a[1].length && "0" == nd(a[1], R) ? s = !1 : (t.c = "", t.a(s.substring(r)), s = !0)
						} else s = !1;
						s = s ? 5 : 20
					}
					if (n && k(o, 6, s), 20 != s) {
						if (2 >= t.c.length) throw Error("Phone number too short after IDD");
						d: {
							if (0 != (d = t.toString()).length && "0" != d.charAt(0))
								for (n = d.length, t = 1; 3 >= t && t <= n; ++t)
									if ((e = parseInt(d.substring(0, t), 10)) in G) {
										i.a(d.substring(t)), i = e;
										break d
									}
							i = 0
						}
						if (0 != i) return k(o, 1, i), i;
						throw Error("Invalid country calling code")
					}
					return null != e && (r = "" + (s = C(e, 10)), 0 == (a = t.toString()).lastIndexOf(r, 0) && (r = new L(a.substring(r.length)), a = m(e, 1), a = new RegExp(C(a, 2)), md(r, e, null), r = r.toString(), !wd(a, t.toString()) && wd(a, r) || 3 == vd(d, t.toString(), e, -1))) ? (i.a(r), n && k(o, 6, 10), k(o, 1, s), s) : (k(o, 1, 0), 0)
				}

				function md(d, t, e) {
					var i = d.toString(),
						n = i.length,
						o = m(t, 15);
					if (0 != n && null != o && 0 != o.length) {
						var s = new RegExp("^(?:" + o + ")");
						if (n = s.exec(i)) {
							var r = wd(o = new RegExp(C(m(t, 1), 2)), i),
								a = n.length - 1;
							null == (t = m(t, 16)) || 0 == t.length || null == n[a] || 0 == n[a].length ? r && !wd(o, i.substring(n[0].length)) || (null != e && 0 < a && null != n[a] && e.a(n[1]), d.set(i.substring(n[0].length))) : (i = i.replace(s, t), (!r || wd(o, i)) && (null != e && 0 < a && e.a(n[1]), d.set(i)))
						}
					}
				}

				function Cd(d, t, e) {
					if (!od(e) && 0 < t.length && "+" != t.charAt(0)) throw Error("Invalid country calling code");
					return bd(d, t, e, !0)
				}

				function bd(d, t, e, i) {
					if (null == t) throw Error("The string supplied did not seem to be a phone number");
					if (250 < t.length) throw Error("The string supplied is too long to be a phone number");
					var n = new L,
						o = t.indexOf(";phone-context=");
					if (0 <= o) {
						var s = o + 15;
						if ("+" == t.charAt(s)) {
							var r = t.indexOf(";", s);
							0 < r ? n.a(t.substring(s, r)) : n.a(t.substring(s))
						}
						s = t.indexOf("tel:"), n.a(t.substring(0 <= s ? s + 4 : 0, o))
					} else n.a(function (d) {
						var t = d.search(V);
						return 0 <= t ? 0 <= (t = (d = (d = d.substring(t)).replace(q, "")).search(Z)) && (d = d.substring(0, t)) : d = "", d
					}(t));
					if (0 < (s = (o = n.toString()).indexOf(";isub=")) && (n.c = "", n.a(o.substring(0, s))), !dd(n.toString())) throw Error("The string supplied did not seem to be a phone number");
					if (o = n.toString(), !(od(e) || null != o && 0 < o.length && j.test(o))) throw Error("Invalid country calling code");
					o = new O, i && k(o, 5, t);
					d: {
						if (0 <= (s = (t = n.toString()).search(J)) && dd(t.substring(0, s)))
							for (var a = (r = t.match(J)).length, l = 1; l < a; ++l)
								if (null != r[l] && 0 < r[l].length) {
									n.c = "", n.a(t.substring(0, s)), t = r[l];
									break d
								}
						t = ""
					}
					0 < t.length && k(o, 3, t), s = cd(d, e), t = new L, r = 0, a = n.toString();
					try {
						r = yd(d, a, s, t, i, o)
					} catch (e) {
						if ("Invalid country calling code" != e.message || !j.test(a)) throw e;
						if (0 == (r = yd(d, a = a.replace(j, ""), s, t, i, o))) throw e
					}
					if (0 != r ? (n = fd(r)) != e && (s = rd(d, r, n)) : (ed(n), t.a(n.toString()), null != e ? k(o, 1, r = C(s, 10)) : i && (delete o.a[6], o.c && delete o.c[6])), 2 > t.c.length) throw Error("The string supplied is too short to be a phone number");
					if (null != s && (e = new L, md(n = new L(t.toString()), s, e), 2 != (d = vd(d, n.toString(), s, -1)) && 4 != d && 5 != d && (t = n, i && 0 < e.toString().length && k(o, 7, e.toString()))), 2 > (d = (i = t.toString()).length)) throw Error("The string supplied is too short to be a phone number");
					if (17 < d) throw Error("The string supplied is too long to be a phone number");
					if (1 < i.length && "0" == i.charAt(0)) {
						for (k(o, 4, !0), d = 1; d < i.length - 1 && "0" == i.charAt(d);) d++;
						1 != d && k(o, 8, d)
					}
					return k(o, 2, parseInt(i, 10)), o
				}

				function wd(d, t) {
					return !(!(d = "string" == typeof d ? t.match("^(?:" + d + ")$") : t.match(d)) || d[0].length != t.length)
				}
				e("intlTelInputUtils", {}), e("intlTelInputUtils.formatNumber", function (d, t, e) {
					try {
						var i = U.a(),
							n = Cd(i, d, t),
							o = gd(i, n);
						return 0 == o || 4 == o ? sd(i, n, void 0 === e ? 0 : e) : d
					} catch (t) {
						return d
					}
				}), e("intlTelInputUtils.getExampleNumber", function (d, t, e) {
					try {
						var i = U.a();
						d: {
							if (od(d)) {
								var n = $d(cd(i, d), e);
								try {
									if (null != n.a[6]) {
										var o = bd(i, m(n, 6), d, !1);
										break d
									}
								} catch (d) {}
							}
							o = null
						}
						return sd(i, o, t ? 2 : 1)
					} catch (d) {
						return ""
					}
				}), e("intlTelInputUtils.getExtension", function (d, t) {
					try {
						return m(Cd(U.a(), d, t), 3)
					} catch (d) {
						return ""
					}
				}), e("intlTelInputUtils.getNumberType", function (d, t) {
					try {
						var e = U.a(),
							i = Cd(e, d, t),
							n = hd(e, i),
							o = rd(e, C(i, 1), n);
						if (null == o) var s = -1;
						else s = ud(ad(i), o);
						return s
					} catch (d) {
						return -99
					}
				}), e("intlTelInputUtils.getValidationError", function (d, t) {
					try {
						var e = U.a();
						return gd(e, Cd(e, d, t))
					} catch (d) {
						return "Invalid country calling code" == d.message ? 1 : "The string supplied did not seem to be a phone number" == d.message ? 4 : "Phone number too short after IDD" == d.message || "The string supplied is too short to be a phone number" == d ? 2 : "The string supplied is too long to be a phone number" == d.message ? 3 : -99
					}
				}), e("intlTelInputUtils.isValidNumber", function (d, t) {
					try {
						var e, i = U.a(),
							n = Cd(i, d, t),
							o = hd(i, n),
							s = C(n, 1),
							r = rd(i, s, o);
						if (!(e = null == r)) {
							var a;
							if (a = "001" != o) {
								var l = cd(i, o);
								if (null == l) throw Error("Invalid region code: " + o);
								a = s != C(l, 10)
							}
							e = a
						}
						if (e) var $ = !1;
						else $ = -1 != ud(ad(n), r);
						return $
					} catch (d) {
						return !1
					}
				}), e("intlTelInputUtils.numberFormat", {
					E164: 0,
					INTERNATIONAL: 1,
					NATIONAL: 2,
					RFC3966: 3
				}), e("intlTelInputUtils.numberType", {
					FIXED_LINE: 0,
					MOBILE: 1,
					FIXED_LINE_OR_MOBILE: 2,
					TOLL_FREE: 3,
					PREMIUM_RATE: 4,
					SHARED_COST: 5,
					VOIP: 6,
					PERSONAL_NUMBER: 7,
					PAGER: 8,
					UAN: 9,
					VOICEMAIL: 10,
					UNKNOWN: -1
				}), e("intlTelInputUtils.validationError", {
					IS_POSSIBLE: 0,
					INVALID_COUNTRY_CODE: 1,
					TOO_SHORT: 2,
					TOO_LONG: 3,
					NOT_A_NUMBER: 4
				})
			}()
		},
		uPEi: function (d, t, e) {
			"use strict";

			function i(d, t) {
				return window.getComputedStyle(d, null).getPropertyValue(t)
			}

			function n(d, t, e) {
				var i = d.textContent;
				if (d.textContent = "", t.clientHeight > e) return !1;
				for (var n = i.split(" "); n.pop();) {
					if (d.textContent = n.join(" "), t.clientHeight <= e) {
						d.textContent = i;
						break
					}
					i = d.textContent
				}
				for (var o = i.length; o > 1;)
					if (i = i.substring(0, --o), d.textContent = i + "…", t.clientHeight <= e) return !0;
				return !1
			}

			function o(d, t, e, i) {
				for (var s = d.childNodes, r = s.length - 1; r > -1;) {
					var a = s[r--];
					if ((1 === a.nodeType ? o : n)(a, t, e, i)) return !0;
					d.removeChild(a)
				}
				return !1
			}

			function s(d, t) {
				var e = function (d) {
						var t = i(d, "line-height");
						return "normal" === t ? 1.25 * parseInt(i(d, "font-size"), 10) : parseFloat(t)
					}(d),
					n = Math.round(e * t);
				d.clientHeight <= n || (function (d, t) {
					for (var e = 0; e < d.childNodes.length; e++) {
						var i = d.childNodes[e];
						1 === i.nodeType && (i.inlineCssText = i.style.cssText, i.style.lineHeight = t + "px")
					}
				}(d, e), o(d, d, n, e), function (d) {
					for (var t = 0; t < d.childNodes.length; t++) {
						var e = d.childNodes[t];
						1 === e.nodeType && (e.removeAttributeNode(e.attributes.getNamedItem("style")), e.style.cssText = e.inlineCssText)
					}
				}(d))
			}
			var r;
			r = function (d, t) {
				t && (void 0 === d.style.webkitLineClamp ? s : function (d, t) {
					d.style.overflow = "hidden", d.style.textOverflow = "ellipsis", d.style.webkitBoxOrient = "vertical", d.style.display = "-webkit-box", d.style.webkitLineClamp = t
				})(d, t)
			}, d.exports = r
		},
		yNCV: function (d, t, e) {
			var i;
			i = function (d, t, e) {
				"use strict";
				return function () {
					for (var e = [
							["Afghanistan (‫افغانستان‬‎)", "af", "93"],
							["Albania (Shqipëri)", "al", "355"],
							["Algeria (‫الجزائر‬‎)", "dz", "213"],
							["American Samoa", "as", "1684"],
							["Andorra", "ad", "376"],
							["Angola", "ao", "244"],
							["Anguilla", "ai", "1264"],
							["Antigua and Barbuda", "ag", "1268"],
							["Argentina", "ar", "54"],
							["Armenia (Հայաստան)", "am", "374"],
							["Aruba", "aw", "297"],
							["Australia", "au", "61", 0],
							["Austria (Österreich)", "at", "43"],
							["Azerbaijan (Azərbaycan)", "az", "994"],
							["Bahamas", "bs", "1242"],
							["Bahrain (‫البحرين‬‎)", "bh", "973"],
							["Bangladesh (বাংলাদেশ)", "bd", "880"],
							["Barbados", "bb", "1246"],
							["Belarus (Беларусь)", "by", "375"],
							["Belgium (België)", "be", "32"],
							["Belize", "bz", "501"],
							["Benin (Bénin)", "bj", "229"],
							["Bermuda", "bm", "1441"],
							["Bhutan (འབྲུག)", "bt", "975"],
							["Bolivia", "bo", "591"],
							["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
							["Botswana", "bw", "267"],
							["Brazil (Brasil)", "br", "55"],
							["British Indian Ocean Territory", "io", "246"],
							["British Virgin Islands", "vg", "1284"],
							["Brunei", "bn", "673"],
							["Bulgaria (България)", "bg", "359"],
							["Burkina Faso", "bf", "226"],
							["Burundi (Uburundi)", "bi", "257"],
							["Cambodia (កម្ពុជា)", "kh", "855"],
							["Cameroon (Cameroun)", "cm", "237"],
							["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
							["Cape Verde (Kabu Verdi)", "cv", "238"],
							["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]],
							["Cayman Islands", "ky", "1345"],
							["Central African Republic (République centrafricaine)", "cf", "236"],
							["Chad (Tchad)", "td", "235"],
							["Chile", "cl", "56"],
							["China (中国)", "cn", "86"],
							["Christmas Island", "cx", "61", 2],
							["Cocos (Keeling) Islands", "cc", "61", 1],
							["Colombia", "co", "57"],
							["Comoros (‫جزر القمر‬‎)", "km", "269"],
							["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
							["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
							["Cook Islands", "ck", "682"],
							["Costa Rica", "cr", "506"],
							["Côte d’Ivoire", "ci", "225"],
							["Croatia (Hrvatska)", "hr", "385"],
							["Cuba", "cu", "53"],
							["Curaçao", "cw", "599", 0],
							["Cyprus (Κύπρος)", "cy", "357"],
							["Czech Republic (Česká republika)", "cz", "420"],
							["Denmark (Danmark)", "dk", "45"],
							["Djibouti", "dj", "253"],
							["Dominica", "dm", "1767"],
							["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]],
							["Ecuador", "ec", "593"],
							["Egypt (‫مصر‬‎)", "eg", "20"],
							["El Salvador", "sv", "503"],
							["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
							["Eritrea", "er", "291"],
							["Estonia (Eesti)", "ee", "372"],
							["Ethiopia", "et", "251"],
							["Falkland Islands (Islas Malvinas)", "fk", "500"],
							["Faroe Islands (Føroyar)", "fo", "298"],
							["Fiji", "fj", "679"],
							["Finland (Suomi)", "fi", "358", 0],
							["France", "fr", "33"],
							["French Guiana (Guyane française)", "gf", "594"],
							["French Polynesia (Polynésie française)", "pf", "689"],
							["Gabon", "ga", "241"],
							["Gambia", "gm", "220"],
							["Georgia (საქართველო)", "ge", "995"],
							["Germany (Deutschland)", "de", "49"],
							["Ghana (Gaana)", "gh", "233"],
							["Gibraltar", "gi", "350"],
							["Greece (Ελλάδα)", "gr", "30"],
							["Greenland (Kalaallit Nunaat)", "gl", "299"],
							["Grenada", "gd", "1473"],
							["Guadeloupe", "gp", "590", 0],
							["Guam", "gu", "1671"],
							["Guatemala", "gt", "502"],
							["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]],
							["Guinea (Guinée)", "gn", "224"],
							["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
							["Guyana", "gy", "592"],
							["Haiti", "ht", "509"],
							["Honduras", "hn", "504"],
							["Hong Kong (香港)", "hk", "852"],
							["Hungary (Magyarország)", "hu", "36"],
							["Iceland (Ísland)", "is", "354"],
							["India (भारत)", "in", "91"],
							["Indonesia", "id", "62"],
							["Iran (‫ایران‬‎)", "ir", "98"],
							["Iraq (‫العراق‬‎)", "iq", "964"],
							["Ireland", "ie", "353"],
							["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]],
							["Israel (‫ישראל‬‎)", "il", "972"],
							["Italy (Italia)", "it", "39", 0],
							["Jamaica", "jm", "1", 4, ["876", "658"]],
							["Japan (日本)", "jp", "81"],
							["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]],
							["Jordan (‫الأردن‬‎)", "jo", "962"],
							["Kazakhstan (Казахстан)", "kz", "7", 1, ["33", "7"]],
							["Kenya", "ke", "254"],
							["Kiribati", "ki", "686"],
							["Kosovo", "xk", "383"],
							["Kuwait (‫الكويت‬‎)", "kw", "965"],
							["Kyrgyzstan (Кыргызстан)", "kg", "996"],
							["Laos (ລາວ)", "la", "856"],
							["Latvia (Latvija)", "lv", "371"],
							["Lebanon (‫لبنان‬‎)", "lb", "961"],
							["Lesotho", "ls", "266"],
							["Liberia", "lr", "231"],
							["Libya (‫ليبيا‬‎)", "ly", "218"],
							["Liechtenstein", "li", "423"],
							["Lithuania (Lietuva)", "lt", "370"],
							["Luxembourg", "lu", "352"],
							["Macau (澳門)", "mo", "853"],
							["Macedonia (FYROM) (Македонија)", "mk", "389"],
							["Madagascar (Madagasikara)", "mg", "261"],
							["Malawi", "mw", "265"],
							["Malaysia", "my", "60"],
							["Maldives", "mv", "960"],
							["Mali", "ml", "223"],
							["Malta", "mt", "356"],
							["Marshall Islands", "mh", "692"],
							["Martinique", "mq", "596"],
							["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
							["Mauritius (Moris)", "mu", "230"],
							["Mayotte", "yt", "262", 1, ["269", "639"]],
							["Mexico (México)", "mx", "52"],
							["Micronesia", "fm", "691"],
							["Moldova (Republica Moldova)", "md", "373"],
							["Monaco", "mc", "377"],
							["Mongolia (Монгол)", "mn", "976"],
							["Montenegro (Crna Gora)", "me", "382"],
							["Montserrat", "ms", "1664"],
							["Morocco (‫المغرب‬‎)", "ma", "212", 0],
							["Mozambique (Moçambique)", "mz", "258"],
							["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
							["Namibia (Namibië)", "na", "264"],
							["Nauru", "nr", "674"],
							["Nepal (नेपाल)", "np", "977"],
							["Netherlands (Nederland)", "nl", "31"],
							["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
							["New Zealand", "nz", "64"],
							["Nicaragua", "ni", "505"],
							["Niger (Nijar)", "ne", "227"],
							["Nigeria", "ng", "234"],
							["Niue", "nu", "683"],
							["Norfolk Island", "nf", "672"],
							["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
							["Northern Mariana Islands", "mp", "1670"],
							["Norway (Norge)", "no", "47", 0],
							["Oman (‫عُمان‬‎)", "om", "968"],
							["Pakistan (‫پاکستان‬‎)", "pk", "92"],
							["Palau", "pw", "680"],
							["Palestine (‫فلسطين‬‎)", "ps", "970"],
							["Panama (Panamá)", "pa", "507"],
							["Papua New Guinea", "pg", "675"],
							["Paraguay", "py", "595"],
							["Peru (Perú)", "pe", "51"],
							["Philippines", "ph", "63"],
							["Poland (Polska)", "pl", "48"],
							["Portugal", "pt", "351"],
							["Puerto Rico", "pr", "1", 3, ["787", "939"]],
							["Qatar (‫قطر‬‎)", "qa", "974"],
							["Réunion (La Réunion)", "re", "262", 0],
							["Romania (România)", "ro", "40"],
							["Russia (Россия)", "ru", "7", 0],
							["Rwanda", "rw", "250"],
							["Saint Barthélemy", "bl", "590", 1],
							["Saint Helena", "sh", "290"],
							["Saint Kitts and Nevis", "kn", "1869"],
							["Saint Lucia", "lc", "1758"],
							["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2],
							["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
							["Saint Vincent and the Grenadines", "vc", "1784"],
							["Samoa", "ws", "685"],
							["San Marino", "sm", "378"],
							["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
							["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
							["Senegal (Sénégal)", "sn", "221"],
							["Serbia (Србија)", "rs", "381"],
							["Seychelles", "sc", "248"],
							["Sierra Leone", "sl", "232"],
							["Singapore", "sg", "65"],
							["Sint Maarten", "sx", "1721"],
							["Slovakia (Slovensko)", "sk", "421"],
							["Slovenia (Slovenija)", "si", "386"],
							["Solomon Islands", "sb", "677"],
							["Somalia (Soomaaliya)", "so", "252"],
							["South Africa", "za", "27"],
							["South Korea (대한민국)", "kr", "82"],
							["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
							["Spain (España)", "es", "34"],
							["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
							["Sudan (‫السودان‬‎)", "sd", "249"],
							["Suriname", "sr", "597"],
							["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]],
							["Swaziland", "sz", "268"],
							["Sweden (Sverige)", "se", "46"],
							["Switzerland (Schweiz)", "ch", "41"],
							["Syria (‫سوريا‬‎)", "sy", "963"],
							["Taiwan (台灣)", "tw", "886"],
							["Tajikistan", "tj", "992"],
							["Tanzania", "tz", "255"],
							["Thailand (ไทย)", "th", "66"],
							["Timor-Leste", "tl", "670"],
							["Togo", "tg", "228"],
							["Tokelau", "tk", "690"],
							["Tonga", "to", "676"],
							["Trinidad and Tobago", "tt", "1868"],
							["Tunisia (‫تونس‬‎)", "tn", "216"],
							["Turkey (Türkiye)", "tr", "90"],
							["Turkmenistan", "tm", "993"],
							["Turks and Caicos Islands", "tc", "1649"],
							["Tuvalu", "tv", "688"],
							["U.S. Virgin Islands", "vi", "1340"],
							["Uganda", "ug", "256"],
							["Ukraine (Україна)", "ua", "380"],
							["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"],
							["United Kingdom", "gb", "44", 0],
							["United States", "us", "1", 0],
							["Uruguay", "uy", "598"],
							["Uzbekistan (Oʻzbekiston)", "uz", "998"],
							["Vanuatu", "vu", "678"],
							["Vatican City (Città del Vaticano)", "va", "39", 1, ["06698"]],
							["Venezuela", "ve", "58"],
							["Vietnam (Việt Nam)", "vn", "84"],
							["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
							["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, ["5288", "5289"]],
							["Yemen (‫اليمن‬‎)", "ye", "967"],
							["Zambia", "zm", "260"],
							["Zimbabwe", "zw", "263"],
							["Åland Islands", "ax", "358", 1, ["18"]]
						], i = 0; i < e.length; i++) {
						var n = e[i];
						e[i] = {
							name: n[0],
							iso2: n[1],
							dialCode: n[2],
							priority: n[3] || 0,
							areaCodes: n[4] || null
						}
					}

					function o(d, t) {
						for (var e = 0; e < t.length; e++) {
							var i = t[e];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(d, i.key, i)
						}
					}
					d.intlTelInputGlobals = {
						getInstance: function (t) {
							var e = t.getAttribute("data-intl-tel-input-id");
							return d.intlTelInputGlobals.instances[e]
						},
						instances: {}
					};
					var s = 0,
						r = {
							allowDropdown: !0,
							autoHideDialCode: !0,
							autoPlaceholder: "polite",
							customContainer: "",
							customPlaceholder: null,
							dropdownContainer: null,
							excludeCountries: [],
							formatOnDisplay: !0,
							geoIpLookup: null,
							hiddenInput: "",
							initialCountry: "",
							localizedCountries: null,
							nationalMode: !0,
							onlyCountries: [],
							placeholderNumberType: "MOBILE",
							preferredCountries: ["us", "gb"],
							separateDialCode: !1,
							utilsScript: ""
						},
						a = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"];
					d.addEventListener("load", function () {
						d.intlTelInputGlobals.windowLoaded = !0
					});
					var l = function (d, t) {
							for (var e = Object.keys(d), i = 0; i < e.length; i++) t(e[i], d[e[i]])
						},
						$ = function (t) {
							l(d.intlTelInputGlobals.instances, function (e) {
								d.intlTelInputGlobals.instances[e][t]()
							})
						},
						u = function () {
							function i(d, t) {
								var e = this;
								! function (d, t) {
									if (!(d instanceof t)) throw new TypeError("Cannot call a class as a function")
								}(this, i), this.id = s++, this.telInput = d, this.activeItem = null, this.highlightedItem = null;
								var n = t || {};
								this.options = {}, l(r, function (d, t) {
									e.options[d] = n.hasOwnProperty(d) ? n[d] : t
								}), this.hadInitialPlaceholder = Boolean(d.getAttribute("placeholder"))
							}
							return function (d, t, e) {
								t && o(d.prototype, t);
								e && o(d, e)
							}(i, [{
								key: "_init",
								value: function () {
									var d = this;
									if (this.options.nationalMode && (this.options.autoHideDialCode = !1), this.options.separateDialCode && (this.options.autoHideDialCode = this.options.nationalMode = !1), this.isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), this.isMobile && (t.body.classList.add("iti-mobile"), this.options.dropdownContainer || (this.options.dropdownContainer = t.body)), "undefined" != typeof Promise) {
										var e = new Promise(function (t, e) {
												d.resolveAutoCountryPromise = t, d.rejectAutoCountryPromise = e
											}),
											i = new Promise(function (t, e) {
												d.resolveUtilsScriptPromise = t, d.rejectUtilsScriptPromise = e
											});
										this.promise = Promise.all([e, i])
									} else this.resolveAutoCountryPromise = this.rejectAutoCountryPromise = function () {}, this.resolveUtilsScriptPromise = this.rejectUtilsScriptPromise = function () {};
									this.selectedCountryData = {}, this._processCountryData(), this._generateMarkup(), this._setInitialState(), this._initListeners(), this._initRequests()
								}
							}, {
								key: "_processCountryData",
								value: function () {
									this._processAllCountries(), this._processCountryCodes(), this._processPreferredCountries(), this.options.localizedCountries && this._translateCountriesByLocale(), (this.options.onlyCountries.length || this.options.localizedCountries) && this.countries.sort(this._countryNameSort)
								}
							}, {
								key: "_addCountryCode",
								value: function (d, t, e) {
									t.length > this.dialCodeMaxLen && (this.dialCodeMaxLen = t.length), this.countryCodes.hasOwnProperty(t) || (this.countryCodes[t] = []);
									var i = e || 0;
									this.countryCodes[t][i] = d
								}
							}, {
								key: "_processAllCountries",
								value: function () {
									if (this.options.onlyCountries.length) {
										var d = this.options.onlyCountries.map(function (d) {
											return d.toLowerCase()
										});
										this.countries = e.filter(function (t) {
											return d.indexOf(t.iso2) > -1
										})
									} else if (this.options.excludeCountries.length) {
										var t = this.options.excludeCountries.map(function (d) {
											return d.toLowerCase()
										});
										this.countries = e.filter(function (d) {
											return -1 === t.indexOf(d.iso2)
										})
									} else this.countries = e
								}
							}, {
								key: "_translateCountriesByLocale",
								value: function () {
									for (var d = 0; d < this.countries.length; d++) {
										var t = this.countries[d].iso2.toLowerCase();
										this.options.localizedCountries.hasOwnProperty(t) && (this.countries[d].name = this.options.localizedCountries[t])
									}
								}
							}, {
								key: "_countryNameSort",
								value: function (d, t) {
									return d.name.localeCompare(t.name)
								}
							}, {
								key: "_processCountryCodes",
								value: function () {
									this.dialCodeMaxLen = 0, this.countryCodes = {};
									for (var d = 0; d < this.countries.length; d++) {
										var t = this.countries[d];
										if (this._addCountryCode(t.iso2, t.dialCode, t.priority), t.areaCodes)
											for (var e = 0; e < t.areaCodes.length; e++) this._addCountryCode(t.iso2, t.dialCode + t.areaCodes[e])
									}
								}
							}, {
								key: "_processPreferredCountries",
								value: function () {
									this.preferredCountries = [];
									for (var d = 0; d < this.options.preferredCountries.length; d++) {
										var t = this.options.preferredCountries[d].toLowerCase(),
											e = this._getCountryData(t, !1, !0);
										e && this.preferredCountries.push(e)
									}
								}
							}, {
								key: "_createEl",
								value: function (d, e, i) {
									var n = t.createElement(d);
									return e && l(e, function (d, t) {
										return n.setAttribute(d, t)
									}), i && i.appendChild(n), n
								}
							}, {
								key: "_generateMarkup",
								value: function () {
									this.telInput.setAttribute("autocomplete", "off");
									var d = "intl-tel-input";
									this.options.allowDropdown && (d += " allow-dropdown"), this.options.separateDialCode && (d += " separate-dial-code"), this.options.customContainer && (d += " ", d += this.options.customContainer);
									var t = this._createEl("div", {
										class: d
									});
									if (this.telInput.parentNode.insertBefore(t, this.telInput), this.flagsContainer = this._createEl("div", {
											class: "flag-container"
										}, t), t.appendChild(this.telInput), this.selectedFlag = this._createEl("div", {
											class: "selected-flag",
											role: "combobox",
											"aria-owns": "country-listbox"
										}, this.flagsContainer), this.selectedFlagInner = this._createEl("div", {
											class: "iti-flag"
										}, this.selectedFlag), this.options.separateDialCode && (this.selectedDialCode = this._createEl("div", {
											class: "selected-dial-code"
										}, this.selectedFlag)), this.options.allowDropdown && (this.selectedFlag.setAttribute("tabindex", "0"), this.dropdownArrow = this._createEl("div", {
											class: "iti-arrow"
										}, this.selectedFlag), this.countryList = this._createEl("ul", {
											class: "country-list hide",
											id: "country-listbox",
											"aria-expanded": "false",
											role: "listbox"
										}), this.preferredCountries.length && (this._appendListItems(this.preferredCountries, "preferred"), this._createEl("li", {
											class: "divider",
											role: "separator",
											"aria-disabled": "true"
										}, this.countryList)), this._appendListItems(this.countries, "standard"), this.options.dropdownContainer ? (this.dropdown = this._createEl("div", {
											class: "intl-tel-input iti-container"
										}), this.dropdown.appendChild(this.countryList)) : this.flagsContainer.appendChild(this.countryList)), this.options.hiddenInput) {
										var e = this.options.hiddenInput,
											i = this.telInput.getAttribute("name");
										if (i) {
											var n = i.lastIndexOf("["); - 1 !== n && (e = "".concat(i.substr(0, n), "[").concat(e, "]"))
										}
										this.hiddenInput = this._createEl("input", {
											type: "hidden",
											name: e
										}), t.appendChild(this.hiddenInput)
									}
								}
							}, {
								key: "_appendListItems",
								value: function (d, t) {
									for (var e = "", i = 0; i < d.length; i++) {
										var n = d[i];
										e += "<li class='country ".concat(t, "' tabIndex='-1' id='iti-item-").concat(n.iso2, "' role='option' data-dial-code='").concat(n.dialCode, "' data-country-code='").concat(n.iso2, "'>"), e += "<div class='flag-box'><div class='iti-flag ".concat(n.iso2, "'></div></div>"), e += "<span class='country-name'>".concat(n.name, "</span>"), e += "<span class='dial-code'>+".concat(n.dialCode, "</span>"), e += "</li>"
									}
									this.countryList.insertAdjacentHTML("beforeend", e)
								}
							}, {
								key: "_setInitialState",
								value: function () {
									var d = this.telInput.value,
										t = this._getDialCode(d),
										e = this._isRegionlessNanp(d),
										i = this.options,
										n = i.initialCountry,
										o = i.nationalMode,
										s = i.autoHideDialCode,
										r = i.separateDialCode;
									t && !e ? this._updateFlagFromNumber(d) : "auto" !== n && (n ? this._setFlag(n.toLowerCase()) : t && e ? this._setFlag("us") : (this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2, d || this._setFlag(this.defaultCountry)), d || o || s || r || (this.telInput.value = "+".concat(this.selectedCountryData.dialCode))), d && this._updateValFromNumber(d)
								}
							}, {
								key: "_initListeners",
								value: function () {
									this._initKeyListeners(), this.options.autoHideDialCode && this._initBlurListeners(), this.options.allowDropdown && this._initDropdownListeners(), this.hiddenInput && this._initHiddenInputListener()
								}
							}, {
								key: "_initHiddenInputListener",
								value: function () {
									var d = this;
									this._handleHiddenInputSubmit = function () {
										d.hiddenInput.value = d.getNumber()
									}, this.telInput.form && this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit)
								}
							}, {
								key: "_getClosestLabel",
								value: function () {
									for (var d = this.telInput; d && "LABEL" !== d.tagName;) d = d.parentNode;
									return d
								}
							}, {
								key: "_initDropdownListeners",
								value: function () {
									var d = this;
									this._handleLabelClick = function (t) {
										d.countryList.classList.contains("hide") ? d.telInput.focus() : t.preventDefault()
									};
									var t = this._getClosestLabel();
									t && t.addEventListener("click", this._handleLabelClick), this._handleClickSelectedFlag = function () {
										!d.countryList.classList.contains("hide") || d.telInput.disabled || d.telInput.readOnly || d._showDropdown()
									}, this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag), this._handleFlagsContainerKeydown = function (t) {
										var e = d.countryList.classList.contains("hide");
										e && -1 !== ["ArrowUp", "ArrowDown", " ", "Enter"].indexOf(t.key) && (t.preventDefault(), t.stopPropagation(), d._showDropdown()), "Tab" === t.key && d._closeDropdown()
									}, this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown)
								}
							}, {
								key: "_initRequests",
								value: function () {
									var t = this;
									this.options.utilsScript && !d.intlTelInputUtils ? d.intlTelInputGlobals.windowLoaded ? d.intlTelInputGlobals.loadUtils(this.options.utilsScript) : d.addEventListener("load", function () {
										d.intlTelInputGlobals.loadUtils(t.options.utilsScript)
									}) : this.resolveUtilsScriptPromise(), "auto" === this.options.initialCountry ? this._loadAutoCountry() : this.resolveAutoCountryPromise()
								}
							}, {
								key: "_loadAutoCountry",
								value: function () {
									d.intlTelInputGlobals.autoCountry ? this.handleAutoCountry() : d.intlTelInputGlobals.startedLoadingAutoCountry || (d.intlTelInputGlobals.startedLoadingAutoCountry = !0, "function" == typeof this.options.geoIpLookup && this.options.geoIpLookup(function (t) {
										d.intlTelInputGlobals.autoCountry = t.toLowerCase(), setTimeout(function () {
											return $("handleAutoCountry")
										})
									}, function () {
										return $("rejectAutoCountryPromise")
									}))
								}
							}, {
								key: "_initKeyListeners",
								value: function () {
									var d = this;
									this._handleKeyupEvent = function () {
										d._updateFlagFromNumber(d.telInput.value) && d._triggerCountryChange()
									}, this.telInput.addEventListener("keyup", this._handleKeyupEvent), this._handleClipboardEvent = function () {
										setTimeout(d._handleKeyupEvent)
									}, this.telInput.addEventListener("cut", this._handleClipboardEvent), this.telInput.addEventListener("paste", this._handleClipboardEvent)
								}
							}, {
								key: "_cap",
								value: function (d) {
									var t = this.telInput.getAttribute("maxlength");
									return t && d.length > t ? d.substr(0, t) : d
								}
							}, {
								key: "_initBlurListeners",
								value: function () {
									var d = this;
									this._handleSubmitOrBlurEvent = function () {
										d._removeEmptyDialCode()
									}, this.telInput.form && this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent), this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent)
								}
							}, {
								key: "_removeEmptyDialCode",
								value: function () {
									if ("+" === this.telInput.value.charAt(0)) {
										var d = this._getNumeric(this.telInput.value);
										d && this.selectedCountryData.dialCode !== d || (this.telInput.value = "")
									}
								}
							}, {
								key: "_getNumeric",
								value: function (d) {
									return d.replace(/\D/g, "")
								}
							}, {
								key: "_trigger",
								value: function (d) {
									var e = t.createEvent("Event");
									e.initEvent(d, !0, !0), this.telInput.dispatchEvent(e)
								}
							}, {
								key: "_showDropdown",
								value: function () {
									this.countryList.classList.remove("hide"), this.countryList.setAttribute("aria-expanded", "true"), this._setDropdownPosition(), this.activeItem && (this._highlightListItem(this.activeItem, !1), this._scrollTo(this.activeItem, !0)), this._bindDropdownListeners(), this.dropdownArrow.classList.add("up"), this._trigger("open:countrydropdown")
								}
							}, {
								key: "_toggleClass",
								value: function (d, t, e) {
									e && !d.classList.contains(t) ? d.classList.add(t) : !e && d.classList.contains(t) && d.classList.remove(t)
								}
							}, {
								key: "_setDropdownPosition",
								value: function () {
									var e = this;
									if (this.options.dropdownContainer && this.options.dropdownContainer.appendChild(this.dropdown), !this.isMobile) {
										var i = this.telInput.getBoundingClientRect(),
											n = d.pageYOffset || t.documentElement.scrollTop,
											o = i.top + n,
											s = this.countryList.offsetHeight,
											r = o + this.telInput.offsetHeight + s < n + d.innerHeight,
											a = o - s > n;
										if (this._toggleClass(this.countryList, "dropup", !r && a), this.options.dropdownContainer) {
											var l = !r && a ? 0 : this.telInput.offsetHeight;
											this.dropdown.style.top = "".concat(o + l, "px"), this.dropdown.style.left = "".concat(i.left + t.body.scrollLeft, "px"), this._handleWindowScroll = function () {
												return e._closeDropdown()
											}, d.addEventListener("scroll", this._handleWindowScroll)
										}
									}
								}
							}, {
								key: "_getClosestListItem",
								value: function (d) {
									for (var t = d; t && t !== this.countryList && !t.classList.contains("country");) t = t.parentNode;
									return t === this.countryList ? null : t
								}
							}, {
								key: "_bindDropdownListeners",
								value: function () {
									var d = this;
									this._handleMouseoverCountryList = function (t) {
										var e = d._getClosestListItem(t.target);
										e && d._highlightListItem(e, !1)
									}, this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList), this._handleClickCountryList = function (t) {
										var e = d._getClosestListItem(t.target);
										e && d._selectListItem(e)
									}, this.countryList.addEventListener("click", this._handleClickCountryList);
									var e = !0;
									this._handleClickOffToClose = function () {
										e || d._closeDropdown(), e = !1
									}, t.documentElement.addEventListener("click", this._handleClickOffToClose);
									var i = "",
										n = null;
									this._handleKeydownOnDropdown = function (t) {
										t.preventDefault(), "ArrowUp" === t.key || "ArrowDown" === t.key ? d._handleUpDownKey(t.key) : "Enter" === t.key ? d._handleEnterKey() : "Escape" === t.key ? d._closeDropdown() : /^[a-zA-ZÀ-ÿ ]$/.test(t.key) && (n && clearTimeout(n), i += t.key.toLowerCase(), d._searchForCountry(i), n = setTimeout(function () {
											i = ""
										}, 1e3))
									}, t.addEventListener("keydown", this._handleKeydownOnDropdown)
								}
							}, {
								key: "_handleUpDownKey",
								value: function (d) {
									var t = "ArrowUp" === d ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;
									t && (t.classList.contains("divider") && (t = "ArrowUp" === d ? t.previousElementSibling : t.nextElementSibling), this._highlightListItem(t, !0))
								}
							}, {
								key: "_handleEnterKey",
								value: function () {
									this.highlightedItem && this._selectListItem(this.highlightedItem)
								}
							}, {
								key: "_searchForCountry",
								value: function (d) {
									for (var t = 0; t < this.countries.length; t++)
										if (this._startsWith(this.countries[t].name, d)) {
											var e = this.countryList.querySelector("#iti-item-".concat(this.countries[t].iso2));
											this._highlightListItem(e, !1), this._scrollTo(e, !0);
											break
										}
								}
							}, {
								key: "_startsWith",
								value: function (d, t) {
									return d.substr(0, t.length).toLowerCase() === t
								}
							}, {
								key: "_updateValFromNumber",
								value: function (t) {
									var e = t;
									if (this.options.formatOnDisplay && d.intlTelInputUtils && this.selectedCountryData) {
										var i = !this.options.separateDialCode && (this.options.nationalMode || "+" !== e.charAt(0)),
											n = intlTelInputUtils.numberFormat,
											o = n.NATIONAL,
											s = n.INTERNATIONAL,
											r = i ? o : s;
										e = intlTelInputUtils.formatNumber(e, this.selectedCountryData.iso2, r)
									}
									e = this._beforeSetNumber(e), this.telInput.value = e
								}
							}, {
								key: "_updateFlagFromNumber",
								value: function (d) {
									var t = d,
										e = "1" === this.selectedCountryData.dialCode;
									t && this.options.nationalMode && e && "+" !== t.charAt(0) && ("1" !== t.charAt(0) && (t = "1".concat(t)), t = "+".concat(t));
									var i = this._getDialCode(t),
										n = this._getNumeric(t),
										o = null;
									if (i) {
										var s = this.countryCodes[this._getNumeric(i)],
											r = -1 !== s.indexOf(this.selectedCountryData.iso2),
											a = "+1" === i && n.length >= 4,
											l = "1" === this.selectedCountryData.dialCode && this._isRegionlessNanp(n);
										if (!l && (!r || a))
											for (var $ = 0; $ < s.length; $++)
												if (s[$]) {
													o = s[$];
													break
												}
									} else "+" === t.charAt(0) && n.length ? o = "" : t && "+" !== t || (o = this.defaultCountry);
									return null !== o && this._setFlag(o)
								}
							}, {
								key: "_isRegionlessNanp",
								value: function (d) {
									var t = this._getNumeric(d);
									if ("1" === t.charAt(0)) {
										var e = t.substr(1, 3);
										return -1 !== a.indexOf(e)
									}
									return !1
								}
							}, {
								key: "_highlightListItem",
								value: function (d, t) {
									var e = this.highlightedItem;
									e && e.classList.remove("highlight"), this.highlightedItem = d, this.highlightedItem.classList.add("highlight"), t && this.highlightedItem.focus()
								}
							}, {
								key: "_getCountryData",
								value: function (d, t, i) {
									for (var n = t ? e : this.countries, o = 0; o < n.length; o++)
										if (n[o].iso2 === d) return n[o];
									if (i) return null;
									throw new Error("No country data for '".concat(d, "'"))
								}
							}, {
								key: "_setFlag",
								value: function (d) {
									var t = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
									this.selectedCountryData = d ? this._getCountryData(d, !1, !1) : {}, this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2), this.selectedFlagInner.setAttribute("class", "iti-flag ".concat(d));
									var e = d ? "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode) : "Unknown";
									if (this.selectedFlag.setAttribute("title", e), this.options.separateDialCode) {
										var i = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : "";
										this.selectedDialCode.innerHTML = i;
										var n = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth();
										this.telInput.style.paddingLeft = "".concat(n + 6, "px")
									}
									if (this._updatePlaceholder(), this.options.allowDropdown) {
										var o = this.activeItem;
										if (o && (o.classList.remove("active"), o.setAttribute("aria-selected", "false")), d) {
											var s = this.countryList.querySelector("#iti-item-".concat(d));
											s.setAttribute("aria-selected", "true"), s.classList.add("active"), this.activeItem = s, this.countryList.setAttribute("aria-activedescendant", s.getAttribute("id"))
										}
									}
									return t.iso2 !== d
								}
							}, {
								key: "_getHiddenSelectedFlagWidth",
								value: function () {
									var d = this.telInput.parentNode.cloneNode();
									d.style.visibility = "hidden", t.body.appendChild(d);
									var e = this.selectedFlag.cloneNode(!0);
									d.appendChild(e);
									var i = e.offsetWidth;
									return d.remove(), i
								}
							}, {
								key: "_updatePlaceholder",
								value: function () {
									var t = "aggressive" === this.options.autoPlaceholder || !this.hadInitialPlaceholder && "polite" === this.options.autoPlaceholder;
									if (d.intlTelInputUtils && t) {
										var e = intlTelInputUtils.numberType[this.options.placeholderNumberType],
											i = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, e) : "";
										i = this._beforeSetNumber(i), "function" == typeof this.options.customPlaceholder && (i = this.options.customPlaceholder(i, this.selectedCountryData)), this.telInput.setAttribute("placeholder", i)
									}
								}
							}, {
								key: "_selectListItem",
								value: function (d) {
									var t = this._setFlag(d.getAttribute("data-country-code"));
									this._closeDropdown(), this._updateDialCode(d.getAttribute("data-dial-code"), !0), this.telInput.focus();
									var e = this.telInput.value.length;
									this.telInput.setSelectionRange(e, e), t && this._triggerCountryChange()
								}
							}, {
								key: "_closeDropdown",
								value: function () {
									this.countryList.classList.add("hide"), this.countryList.setAttribute("aria-expanded", "false"), this.dropdownArrow.classList.remove("up"), t.removeEventListener("keydown", this._handleKeydownOnDropdown), t.documentElement.removeEventListener("click", this._handleClickOffToClose), this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList), this.countryList.removeEventListener("click", this._handleClickCountryList), this.options.dropdownContainer && (this.isMobile || d.removeEventListener("scroll", this._handleWindowScroll), this.dropdown.parentNode && this.dropdown.parentNode.removeChild(this.dropdown)), this._trigger("close:countrydropdown")
								}
							}, {
								key: "_scrollTo",
								value: function (e, i) {
									var n = this.countryList,
										o = d.pageYOffset || t.documentElement.scrollTop,
										s = n.offsetHeight,
										r = n.getBoundingClientRect().top + o,
										a = r + s,
										l = e.offsetHeight,
										$ = e.getBoundingClientRect().top + o,
										u = $ + l,
										c = $ - r + n.scrollTop,
										p = s / 2 - l / 2;
									if ($ < r) i && (c -= p), n.scrollTop = c;
									else if (u > a) {
										i && (c += p);
										var h = s - l;
										n.scrollTop = c - h
									}
								}
							}, {
								key: "_updateDialCode",
								value: function (d, t) {
									var e, i = this.telInput.value,
										n = "+".concat(d);
									if ("+" === i.charAt(0)) {
										var o = this._getDialCode(i);
										e = o ? i.replace(o, n) : n
									} else {
										if (this.options.nationalMode || this.options.separateDialCode) return;
										if (i) e = n + i;
										else {
											if (!t && this.options.autoHideDialCode) return;
											e = n
										}
									}
									this.telInput.value = e
								}
							}, {
								key: "_getDialCode",
								value: function (d) {
									var t = "";
									if ("+" === d.charAt(0))
										for (var e = "", i = 0; i < d.length; i++) {
											var n = d.charAt(i);
											if (!isNaN(parseInt(n, 10)) && (e += n, this.countryCodes[e] && (t = d.substr(0, i + 1)), e.length === this.dialCodeMaxLen)) break
										}
									return t
								}
							}, {
								key: "_getFullNumber",
								value: function () {
									var d = this.telInput.value.trim(),
										t = this.selectedCountryData.dialCode,
										e = this._getNumeric(d),
										i = "1" === e.charAt(0) ? e : "1".concat(e);
									return (this.options.separateDialCode && "+" !== d.charAt(0) && t && e ? "+".concat(t) : d && "+" !== d.charAt(0) && "1" !== d.charAt(0) && t && "1" === t.charAt(0) && 4 === t.length && t !== i.substr(0, 4) ? t.substr(1) : "") + d
								}
							}, {
								key: "_beforeSetNumber",
								value: function (d) {
									var t = d;
									if (this.options.separateDialCode) {
										var e = this._getDialCode(t);
										if (e) {
											null !== this.selectedCountryData.areaCodes && (e = "+".concat(this.selectedCountryData.dialCode));
											var i = " " === t[e.length] || "-" === t[e.length] ? e.length + 1 : e.length;
											t = t.substr(i)
										}
									}
									return this._cap(t)
								}
							}, {
								key: "_triggerCountryChange",
								value: function () {
									this._trigger("countrychange")
								}
							}, {
								key: "handleAutoCountry",
								value: function () {
									"auto" === this.options.initialCountry && (this.defaultCountry = d.intlTelInputGlobals.autoCountry, this.telInput.value || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise())
								}
							}, {
								key: "handleUtils",
								value: function () {
									d.intlTelInputUtils && (this.telInput.value && this._updateValFromNumber(this.telInput.value), this._updatePlaceholder()), this.resolveUtilsScriptPromise()
								}
							}, {
								key: "destroy",
								value: function () {
									var t = this.telInput.form;
									if (this.options.allowDropdown) {
										this._closeDropdown(), this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag), this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown);
										var e = this._getClosestLabel();
										e && e.removeEventListener("click", this._handleLabelClick)
									}
									this.hiddenInput && t && t.removeEventListener("submit", this._handleHiddenInputSubmit), this.options.autoHideDialCode && (t && t.removeEventListener("submit", this._handleSubmitOrBlurEvent), this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent)), this.telInput.removeEventListener("keyup", this._handleKeyupEvent), this.telInput.removeEventListener("cut", this._handleClipboardEvent), this.telInput.removeEventListener("paste", this._handleClipboardEvent), this.telInput.removeAttribute("data-intl-tel-input-id");
									var i = this.telInput.parentNode;
									i.parentNode.insertBefore(this.telInput, i), i.parentNode.removeChild(i), delete d.intlTelInputGlobals.instances[this.id]
								}
							}, {
								key: "getExtension",
								value: function () {
									return d.intlTelInputUtils ? intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2) : ""
								}
							}, {
								key: "getNumber",
								value: function (t) {
									if (d.intlTelInputUtils) {
										var e = this.selectedCountryData.iso2;
										return intlTelInputUtils.formatNumber(this._getFullNumber(), e, t)
									}
									return ""
								}
							}, {
								key: "getNumberType",
								value: function () {
									return d.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : -99
								}
							}, {
								key: "getSelectedCountryData",
								value: function () {
									return this.selectedCountryData
								}
							}, {
								key: "getValidationError",
								value: function () {
									if (d.intlTelInputUtils) {
										var t = this.selectedCountryData.iso2;
										return intlTelInputUtils.getValidationError(this._getFullNumber(), t)
									}
									return -99
								}
							}, {
								key: "isValidNumber",
								value: function () {
									var t = this._getFullNumber().trim(),
										e = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
									return d.intlTelInputUtils ? intlTelInputUtils.isValidNumber(t, e) : null
								}
							}, {
								key: "setCountry",
								value: function (d) {
									var t = d.toLowerCase();
									this.selectedFlagInner.classList.contains(t) || (this._setFlag(t), this._updateDialCode(this.selectedCountryData.dialCode, !1), this._triggerCountryChange())
								}
							}, {
								key: "setNumber",
								value: function (d) {
									var t = this._updateFlagFromNumber(d);
									this._updateValFromNumber(d), t && this._triggerCountryChange()
								}
							}, {
								key: "setPlaceholderNumberType",
								value: function (d) {
									this.options.placeholderNumberType = d, this._updatePlaceholder()
								}
							}]), i
						}();
					d.intlTelInputGlobals.getCountryData = function () {
						return e
					};
					var c = function (d, e, i) {
						var n = t.createElement("script");
						n.onload = function () {
							$("handleUtils"), e && e()
						}, n.onerror = function () {
							$("rejectUtilsScriptPromise"), i && i()
						}, n.className = "iti-load-utils", n.async = !0, n.src = d, t.body.appendChild(n)
					};
					return d.intlTelInputGlobals.loadUtils = function (t) {
							if (!d.intlTelInputUtils && !d.intlTelInputGlobals.startedLoadingUtilsScript) {
								if (d.intlTelInputGlobals.startedLoadingUtilsScript = !0, "undefined" != typeof Promise) return new Promise(function (d, e) {
									return c(t, d, e)
								});
								c(t)
							}
							return null
						}, d.intlTelInputGlobals.defaults = r, d.intlTelInputGlobals.version = "15.1.2",
						function (t, e) {
							var i = new u(t, e);
							return i._init(), t.setAttribute("data-intl-tel-input-id", i.id), d.intlTelInputGlobals.instances[i.id] = i, i
						}
				}()
			}(window, document), d.exports ? d.exports = i : window.intlTelInput = i
		}
	},
	[
		[0, "runtime", 0, 2]
	]
]);