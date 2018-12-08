/*<ORACLECOPYRIGHT>
 * Copyright (C) 1994-2014 Oracle and/or its affiliates. All rights reserved.
 * Oracle and Java are registered trademarks of Oracle and/or its affiliates.
 * Other names may be trademarks of their respective owners.
 * UNIX is a registered trademark of The Open Group.
 *
 * This software and related documentation are provided under a license agreement
 * containing restrictions on use and disclosure and are protected by intellectual property laws.
 * Except as expressly permitted in your license agreement or allowed by law, you may not use, copy,
 * reproduce, translate, broadcast, modify, license, transmit, distribute, exhibit, perform, publish,
 * or display any part, in any form, or by any means. Reverse engineering, disassembly,
 * or decompilation of this software, unless required by law for interoperability, is prohibited.
 *
 * The information contained herein is subject to change without notice and is not warranted to be error-free.
 * If you find any errors, please report them to us in writing.
 *
 * U.S. GOVERNMENT RIGHTS Programs, software, databases, and related documentation and technical data delivered to U.S.
 * Government customers are "commercial computer software" or "commercial technical data" pursuant to the applicable
 * Federal Acquisition Regulation and agency-specific supplemental regulations.
 * As such, the use, duplication, disclosure, modification, and adaptation shall be subject to the restrictions and
 * license terms set forth in the applicable Government contract, and, to the extent applicable by the terms of the
 * Government contract, the additional rights set forth in FAR 52.227-19, Commercial Computer Software License
 * (December 2007). Oracle America, Inc., 500 Oracle Parkway, Redwood City, CA 94065.
 *
 * This software or hardware is developed for general use in a variety of information management applications.
 * It is not developed or intended for use in any inherently dangerous applications, including applications that
 * may create a risk of personal injury. If you use this software or hardware in dangerous applications,
 * then you shall be responsible to take all appropriate fail-safe, backup, redundancy,
 * and other measures to ensure its safe use. Oracle Corporation and its affiliates disclaim any liability for any
 * damages caused by use of this software or hardware in dangerous applications.
 *
 * This software or hardware and documentation may provide access to or information on content,
 * products, and services from third parties. Oracle Corporation and its affiliates are not responsible for and
 * expressly disclaim all warranties of any kind with respect to third-party content, products, and services.
 * Oracle Corporation and its affiliates will not be responsible for any loss, costs,
 * or damages incurred due to your access to or use of third-party content, products, or services.
</ORACLECOPYRIGHT>*/
/* 8.1.1.14SIA[23044] */

if (typeof(SiebelAppFacade.CustomListLayoutPR) === "undefined") {
	console.log("test");
	SiebelJS.Namespace("SiebelAppFacade.CustomListLayoutPR");
	define("siebel/custom/CustomListLayoutPR", ["siebel/phyrenderer","3rdParty/iscroll/iscroll.js"], function () {
		SiebelAppFacade.CustomListLayoutPR = (function () {
			var l = SiebelJS.Dependency("SiebelApp.Utils");
			var g = SiebelJS.Dependency("SiebelApp.Constants");
			SCROLL_UP = consts.get("PAG_SCROLL_UP"),
			SCROLL_DN = consts.get("PAG_SCROLL_DN");
			var a = "easeInOutQuad";
			var b = g.get("SWE_CTRL_MVG");
			var f = g.get("SWE_CTRL_PICK");
			function i(r) {
				var v;
				this.init = true;
				this.SetBasicLayout = function (y) {
					v = y
				};
				this.GetBasicLayout = function () {
					return v
				};
				var u;
				this.SetTileScrollDirection = function (y) {
					u = y
				};
				this.GetTileScrollDirection = function () {
					return u
				};
				var w;
				this.SetContainer = function (y) {
					w = y
				};
				this.GetContainer = function () {
					return w
				};
				var o;
				this.SetScrollAmount = function (y) {
					o = y
				};
				this.GetScrollAmount = function () {
					return o
				};
				var p = 0;
				this.SetTileHeight = function (y) {
					p = y
				};
				this.GetTileHeight = function () {
					return p
				};
				var q = 0;
				this.SetTileWidth = function (y) {
					q = y
				};
				this.GetTileWidth = function () {
					return q
				};
				var t = 0;
				this.SetContainerWidth = function (y) {
					t = y
				};
				this.GetContainerWidth = function () {
					return t
				};
				var s = 0;
				this.SetContainerHeight = function (y) {
					s = y
				};
				this.GetContainerHeight = function () {
					return s
				};
				var x;
				this.SetIScrollObject = function (y) {
					x = y
				};
				this.GetIScrollObject = function (y) {
					return x
				};
				SiebelAppFacade.CustomListLayoutPR.superclass.constructor.call(this, r)
			}
			SiebelJS.Extend(i, SiebelAppFacade.PhysicalRenderer);
			i.prototype.Init = function () {
				SiebelAppFacade.CustomListLayoutPR.superclass.Init.call(this);
				//this.AttachPMBinding("OnScrollComplete", ScrollComplete)
			};

			i.prototype.ShowUI = function (p) {
				var o = this.GetPM();
				var q = o.Get("GetFullId") + "_" + g.get("SWE_TILE_CONTAINER");
				this.SetContainer($("#" + q));
				this.SetBasicLayout(this.GetContainer().html());
				this.GetContainer().html('<div class="custom-list-list"></div>');
				SiebelAppFacade.CustomListLayoutPR.superclass.ShowUI.call(this);
	
			};

			i.prototype.BindData = function (t) {
				console.log("bind");
				var p = this.GetPM(),
				
				r = "",
				z = "",
				t = p.Get("GetFullId"),
				s = 0,
			
				C = "",
				q = p.Get("GetRecordSet"),
				B = q.length,
				w = this.GetContainer().find(".custom-list-list"),
				D = p.Get("GetControls");
				
				
					for (var E = 0; E < q.length; E++) {
					r = this.GetBasicLayout();
					y = t + "_tile_" + E;
					r = r.replace("tile_1", t + "_tile_" + E);
					z += r
				}
				
				w.append(z);
				
				C = w.children();
				for (s = 0; s < B; s++) {
					var v = t + "_tile_" + (s);
					C.eq(s).removeAttr("id").attr("id", v).addClass("custom-list").attr("tabindex", "-1")
				}
				for (var u in D) {
					if (D.hasOwnProperty(u)) {
						if (this.GetUIWrapper(D[u]).GetEl() && C.eq(0).find(this.GetUIWrapper(D[u]).GetEl().eq(0)).length > 0) {
							this.GetUIWrapper(D[u]).ShowUI();
							//this.GetUIWrapper(D[u]).BindEvents()
						}
						
					}
				}
				for (s = 0; s < q.length; s++) {
					SiebelAppFacade.CustomListLayoutPR.superclass.ShowSelection.call(this, s)
				}
				
				
				// SiebelAppFacade.CustomListLayoutPR.superclass.BindData.apply(this, arguments);

			};



			i.prototype.BindEvents = function () {
				SiebelAppFacade.CustomListLayoutPR.superclass.BindEvents.call(this);
				var q = this.GetPM(),
				s = q.Get("GetFullId"),
				o = q.Get("GetRecordSet"),
				t = o ? o.length : 0,
				r = this.GetTileScrollDirection(),
				p = SiebelApp.S_App.PluginBuilder.GetHoByName("EventHelper");
							this.GetContainer().delegate("[id^='" + s + "_tile_']", "focusin mousedown touchstart", {
					ctx: this
				}, m);
				
				
			};
			function m(r) {

				if (typeof(this.id) === "string") {
					var p = r.data.ctx,
					q = parseInt(this.id.substring(this.id.lastIndexOf("_") + 1), 10),
					s = p.GetPM().Get("GetActiveControl"),
					o = false;
					if ((s === null || s === undefined) && !isNaN(q)) {
						p.OnRowSelect(q)
					}

				}
			}
			i.prototype.ShowSelection = function () {
				var o = this.GetPM();
				var p = o.Get("GetSelection");
				if (o.Get("GetRecordSet").length === 1) {
					p = 0
				}
				var q = $(this.GetContainer()).find(".custom-list-selected");
				q.removeClass("custom-list-selected");
				$("#" + o.Get("GetFullId") + "_tile_" + (p)).addClass("custom-list-selected");
				if (p >= 0) {
					SiebelAppFacade.CustomListLayoutPR.superclass.ShowSelection.call(this, p)
				}

			};
			i.prototype.OnRowSelect = function (q) {
				var o = this.GetPM();
				var p = this;
				if (Number(q) === Number(o.Get("GetSelection"))) {
					return true
				}
				SiebelApp.S_App.uiStatus.Busy({});
				if (!o.OnControlEvent(g.get("PHYEVENT_SELECT_ROW"), q, "", "")) {
					SiebelApp.S_App.uiStatus.Free();
					return false
				}
				SiebelApp.S_App.uiStatus.Free();
				return true
			};

			i.prototype.EndLife = function () {
				this.SetBasicLayout(null);
				
				
				if (this.GetIScrollObject()) {
					this.GetIScrollObject().destroy()
				}
				this.SetIScrollObject(null);
				this.GetContainer().empty();
				$("#scrollarea").empty();
				SiebelAppFacade.CustomListLayoutPR.superclass.EndLife.call(this)
			};
			return i
		}
			());
		return "SiebelAppFacade.CustomListLayoutPR"
	})
};
