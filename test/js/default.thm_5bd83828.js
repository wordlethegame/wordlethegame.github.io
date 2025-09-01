window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"Scene.Game.Main":"resource/eui_skins/game/Main.exml","Scene.Cover.Main":"resource/eui_skins/cover/Main.exml","Scene.Common":"resource/eui_skins/Common.exml","Scene.Game.Key":"resource/eui_skins/game/Key.exml","Scene.Game.Cell":"resource/eui_skins/game/Cell.exml"};generateEUI.paths['resource/eui_skins/Common.exml'] = window.skins.Common = (function (_super) {
	__extends(Common, _super);
	function Common() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1336;
		this.width = 1136;
	}
	var _proto = Common.prototype;

	return Common;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Cell.exml'] = window.skins.Cell = (function (_super) {
	__extends(Cell, _super);
	function Cell() {
		_super.call(this);
		this.skinParts = ["img_bg","img_letter"];
		
		this.height = 104;
		this.width = 104;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = Cell.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 104;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 104;
		t.elementsContent = [this.img_bg_i(),this.img_letter_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_2";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_letter_i = function () {
		var t = new eui.Image();
		this.img_letter = t;
		t.height = 110;
		t.horizontalCenter = 0;
		t.source = "game0_json.b_A";
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	return Cell;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Key.exml'] = window.skins.Key = (function (_super) {
	__extends(Key, _super);
	function Key() {
		_super.call(this);
		this.skinParts = ["img_key","img_code","grp_main"];
		
		this.height = 116;
		this.width = 86;
		this.elementsContent = [this.grp_main_i()];
	}
	var _proto = Key.prototype;

	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 116;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.width = 86;
		t.elementsContent = [this.img_key_i(),this.img_code_i()];
		return t;
	};
	_proto.img_key_i = function () {
		var t = new eui.Image();
		this.img_key = t;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(18,0,52,116);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_5";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.y = 0;
		return t;
	};
	_proto.img_code_i = function () {
		var t = new eui.Image();
		this.img_code = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "game0_json.b_A";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.x = 3;
		t.y = 17.999999999999993;
		return t;
	};
	return Key;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Main.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = ["grp_cell","grp_keyboard","lbl_over","lbl_continue","grp_over","grp_main"];
		
		this.height = 1336;
		this.width = 1136;
		this.elementsContent = [this.grp_main_i()];
	}
	var _proto = Main.prototype;

	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 1336;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1136;
		t.elementsContent = [this.grp_cell_i(),this.grp_keyboard_i(),this.grp_over_i()];
		return t;
	};
	_proto.grp_cell_i = function () {
		var t = new eui.Group();
		this.grp_cell = t;
		t.height = 690;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -200;
		t.width = 575;
		t.x = 281;
		t.y = 23;
		return t;
	};
	_proto.grp_keyboard_i = function () {
		var t = new eui.Group();
		this.grp_keyboard = t;
		t.height = 396;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 350;
		t.width = 990;
		t.x = 73;
		t.y = 720;
		return t;
	};
	_proto.grp_over_i = function () {
		var t = new eui.Group();
		this.grp_over = t;
		t.height = 396;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 350;
		t.width = 990;
		t.x = 83;
		t.y = 730;
		t.elementsContent = [this.lbl_over_i(),this.lbl_continue_i()];
		return t;
	};
	_proto.lbl_over_i = function () {
		var t = new eui.Label();
		this.lbl_over = t;
		t.bottom = 80;
		t.left = 0;
		t.right = 0;
		t.size = 80;
		t.text = "Try again tomorrow";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.lbl_continue_i = function () {
		var t = new eui.Label();
		this.lbl_continue = t;
		t.bottom = 0;
		t.height = 80;
		t.left = 0;
		t.right = 0;
		t.size = 50;
		t.text = "Tap to continue...";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.x = 10;
		return t;
	};
	return Main;
})(eui.Skin);