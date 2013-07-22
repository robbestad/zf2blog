(function (root, undefined) {

var

	reflow = function () {
		this._count = 0;
		this._data = {};
		this._concurrency = 1;
	},


	reflowProto = reflow.prototype,


	isArray = Array.isArray || function(obj) {
		return !!(obj && obj.concat && obj.unshift && !obj.callee);
	};


	if (typeof exports !== 'undefined') {
		exports.reflow = reflow;
	}

	root.reflow = reflow;

	reflow.VERSION = '0.1.2';


	/*
	 * wait
	 */
	reflowProto.wait = function (fn) {
		this._count++;
		var self = this;
		return function () {
			self._count--;
			fn && fn.apply(self, arguments);
			self.ifComplete();
		};
	};


	/*
	 * concurrency
	 */
	reflowProto.concurrency = function (num) {
		this._concurrency = num;
		return this;
	};


	/*
	 * accumulate
	 */
	reflowProto.accumulate = function (key) {
		return this.wait(function (obj) {
			var data = this._data;

			if (!key) {
				data = this;
				key = "_data";
			}

			if (!isArray(data[key])) {
				var tmp = data[key];
				data[key] = [];
				if (tmp !== undefined) {
					data[key].push(tmp);
				}
			}

			data[key].push(obj);
		});
	};


	/*
	 * grab
	 */
	reflowProto.grab = function (key) {
		return this.wait(function (obj) {
			this._data[key] = obj;
		});
	};


	/*
	 * getData
	 */
	reflowProto.getData = function () {
		return this._data;
	};


	/*
	 * ifComplete
	 */
	reflowProto.ifComplete = function () {
		if (this._count == 0 && this._complete) {
			this._complete(this._data);
		}
	};


	/*
	 * then
	 */
	reflowProto.then = function (fn) {
		this._complete = fn;
		this.ifComplete();
		return this;
	};


	/*
	 * exec
	 */
	reflowProto.exec = function () {
		var args = Array.prototype.slice.call(arguments, 0),
			i = 0, l = args.length;

		for (; l > i; ++i) {
			args[i].call(this);
		}
		return this;
	};


	/*
	 * seq
	 */
	reflowProto.seq = function () {

	};


}(this));
