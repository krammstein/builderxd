import e, { Component as t, Suspense as n, createContext as r, createElement as i, forwardRef as a, useCallback as o, useContext as s, useEffect as c, useImperativeHandle as l, useLayoutEffect as u, useMemo as d, useRef as f, useState as p } from "react";
import { createPortal as m, flushSync as h } from "react-dom";
//#region \0rolldown/runtime.js
var g = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), _ = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), v = /* @__PURE__ */ g(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), y = /* @__PURE__ */ g(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === ae ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case v: return "Fragment";
				case b: return "Profiler";
				case y: return "StrictMode";
				case te: return "Suspense";
				case ne: return "SuspenseList";
				case ie: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case g: return "Portal";
				case S: return e.displayName || "Context";
				case x: return (e._context.displayName || "Context") + ".Consumer";
				case ee:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case C: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case re:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function n(e) {
			return "" + e;
		}
		function r(e) {
			try {
				n(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var r = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return r.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), n(e);
			}
		}
		function i(e) {
			if (e === v) return "<>";
			if (typeof e == "object" && e && e.$$typeof === re) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function a() {
			var e = oe.A;
			return e === null ? null : e.getOwner();
		}
		function o() {
			return Error("react-stack-top-frame");
		}
		function s(e) {
			if (se.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function c(e, t) {
			function n() {
				ue || (ue = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function l() {
			var e = t(this.type);
			return de[e] || (de[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function u(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: h,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: l
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function d(e, n, i, o, l, d) {
			var p = n.children;
			if (p !== void 0) if (o) if (ce(p)) {
				for (o = 0; o < p.length; o++) f(p[o]);
				Object.freeze && Object.freeze(p);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else f(p);
			if (se.call(n, "key")) {
				p = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				o = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", pe[p + o] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", o, p, m, p), pe[p + o] = !0);
			}
			if (p = null, i !== void 0 && (r(i), p = "" + i), s(n) && (r(n.key), p = "" + n.key), "key" in n) for (var h in i = {}, n) h !== "key" && (i[h] = n[h]);
			else i = n;
			return p && c(i, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), u(e, p, i, a(), l, d);
		}
		function f(e) {
			p(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === re && (e._payload.status === "fulfilled" ? p(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function p(e) {
			return typeof e == "object" && !!e && e.$$typeof === h;
		}
		var m = _("react"), h = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), ie = Symbol.for("react.activity"), ae = Symbol.for("react.client.reference"), oe = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, se = Object.prototype.hasOwnProperty, ce = Array.isArray, le = console.createTask ? console.createTask : function() {
			return null;
		};
		m = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var ue, de = {}, fe = m.react_stack_bottom_frame.bind(m, o)(), w = le(i(o)), pe = {};
		e.Fragment = v, e.jsx = function(e, t, n) {
			var r = 1e4 > oe.recentlyCreatedOwnerStacks++;
			return d(e, t, n, !1, r ? Error("react-stack-top-frame") : fe, r ? le(i(e)) : w);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > oe.recentlyCreatedOwnerStacks++;
			return d(e, t, n, !0, r ? Error("react-stack-top-frame") : fe, r ? le(i(e)) : w);
		};
	})();
})), b = (/* @__PURE__ */ g(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = v() : t.exports = y();
})))(), x = {
	es: {
		title: "BuilderXD",
		mode: "Modo de Edición",
		responsive: "Vista Adaptable",
		import: "Importar",
		export: "Exportar",
		sendTest: "Envío de Prueba",
		undo: "Deshacer",
		redo: "Rehacer",
		components: "Componentes",
		layers: "Árbol de Capas",
		properties: "Propiedades",
		mobileOverrides: "Ajustes Móvil",
		codeView: "Consola de Código",
		gmailWarning: "⚠️ ¡Atención! El HTML supera los 102 KB. Gmail recortará este correo.",
		gmailOk: "✅ Tamaño de HTML optimizado (< 102 KB). Seguro para Gmail.",
		addBlock: "Agregar bloque",
		deleteBlock: "Eliminar",
		moveUp: "Subir",
		moveDown: "Bajar",
		themeLight: "Claro",
		themeDark: "Oscuro",
		noElementSelected: "Selecciona un elemento para editar sus propiedades",
		textProperties: "Propiedades de Texto",
		buttonProperties: "Propiedades de Botón",
		imageProperties: "Propiedades de Imagen",
		spacingProperties: "Espaciado y Márgenes",
		generalSettings: "Ajustes Generales",
		content: "Contenido",
		color: "Color de texto",
		backgroundColor: "Color de fondo",
		fontSize: "Tamaño de fuente",
		align: "Alineación",
		padding: "Relleno (Padding)",
		url: "Enlace (URL)",
		altText: "Texto alternativo (Alt)",
		borderRadius: "Borde redondeado",
		thickness: "Grosor",
		height: "Altura",
		searchComponents: "Buscar componentes...",
		testEmailSent: "Correo de prueba enviado con éxito a:",
		enterTestEmails: "Ingresa los correos de prueba (separados por coma):",
		close: "Cerrar",
		send: "Enviar",
		exportSuccess: "Plantilla exportada correctamente.",
		importTitle: "Importar plantilla (JSON / MJML)",
		importPlaceholder: "Pega el JSON de la estructura o el código MJML aquí...",
		load: "Cargar",
		invalidJSON: "El código JSON ingresado no es válido.",
		templateType: "Tipo de plantilla",
		componentText: "Texto Enriquecido",
		componentImage: "Imagen",
		componentButton: "Botón de Acción",
		componentDivider: "Línea Divisora",
		componentSpacer: "Espaciador",
		componentSocial: "Redes Sociales",
		componentSection: "Sección",
		componentColumn: "Columna",
		componentVideo: "Elemento de Vídeo",
		componentCustomHtml: "HTML Personalizado",
		componentCountdown: "Contador Regresivo",
		componentAccordion: "Acordeón de Contenido",
		componentCarousel: "Carrusel de Imágenes",
		clearCanvas: "Limpiar",
		componentLibrary: "Librería de Componentes",
		layersTree: "Árbol de Capas",
		layersLabel: "Capas",
		assetsLabel: "Recursos",
		assetManager: "Gestor de Recursos",
		noAssets: "No hay imágenes o recursos locales subidos aún.",
		useIntegrations: "Usa las integraciones del menú superior.",
		dragToCanvas: "Arrastra componentes al canvas central.",
		clearFormat: "Limpiar formato",
		htmlMode: "HTML",
		mjmlMode: "MJML",
		componentHeading: "Título",
		componentParagraph: "Párrafo",
		componentIcon: "Icono",
		componentNavMenu: "Menú Nav",
		componentImageText: "Img + Texto",
		componentProductCard: "Producto",
		componentQuote: "Cita",
		componentTable: "Tabla",
		componentWrapper: "Wrapper",
		componentGroup: "Grupo",
		componentHero: "Hero",
		componentSlider: "Slider",
		componentGallery: "Galería",
		componentFlexLayout: "Flex Layout",
		componentGridLayout: "Grid Layout"
	},
	en: {
		title: "BuilderXD",
		mode: "Editing Mode",
		responsive: "Responsive View",
		import: "Import",
		export: "Export",
		sendTest: "Send Test",
		undo: "Undo",
		redo: "Redo",
		components: "Components",
		layers: "Layers Tree",
		properties: "Properties",
		mobileOverrides: "Mobile Settings",
		codeView: "Code Console",
		gmailWarning: "⚠️ Warning! HTML size exceeds 102 KB. Gmail will clip this email.",
		gmailOk: "✅ HTML size optimized (< 102 KB). Safe for Gmail.",
		addBlock: "Add block",
		deleteBlock: "Delete",
		moveUp: "Move Up",
		moveDown: "Move Down",
		themeLight: "Light",
		themeDark: "Dark",
		noElementSelected: "Select an element to edit its properties",
		textProperties: "Text Properties",
		buttonProperties: "Button Properties",
		imageProperties: "Image Properties",
		spacingProperties: "Spacing & Padding",
		generalSettings: "General Settings",
		content: "Content",
		color: "Text Color",
		backgroundColor: "Background Color",
		fontSize: "Font Size",
		align: "Alignment",
		padding: "Padding",
		url: "Link (URL)",
		altText: "Alternative text (Alt)",
		borderRadius: "Border Radius",
		thickness: "Thickness",
		height: "Height",
		searchComponents: "Search components...",
		testEmailSent: "Test email sent successfully to:",
		enterTestEmails: "Enter test emails (comma separated):",
		close: "Close",
		send: "Send",
		exportSuccess: "Template exported successfully.",
		importTitle: "Import Template (JSON / MJML)",
		importPlaceholder: "Paste structure JSON or MJML code here...",
		load: "Load",
		invalidJSON: "The entered JSON code is invalid.",
		templateType: "Template Type",
		componentText: "Rich Text",
		componentImage: "Image Element",
		componentButton: "Action Button",
		componentDivider: "Divider Line",
		componentSpacer: "Spacer Block",
		componentSocial: "Social Networks",
		componentSection: "Section Container",
		componentColumn: "Column Layout",
		componentVideo: "Video Element",
		componentCustomHtml: "Custom HTML",
		componentCountdown: "Countdown Timer",
		componentAccordion: "Accordion Menu",
		componentCarousel: "Image Carousel",
		clearCanvas: "Clear",
		componentLibrary: "Component Library",
		layersTree: "Layers Tree",
		layersLabel: "Layers",
		assetsLabel: "Assets",
		assetManager: "Asset Manager",
		noAssets: "No local images or assets uploaded yet.",
		useIntegrations: "Use the integrations in the top menu.",
		dragToCanvas: "Drag components to the central canvas.",
		clearFormat: "Clear formatting",
		htmlMode: "HTML",
		mjmlMode: "MJML",
		componentHeading: "Heading",
		componentParagraph: "Paragraph",
		componentIcon: "Icon",
		componentNavMenu: "Nav Menu",
		componentImageText: "Image + Text",
		componentProductCard: "Product Card",
		componentQuote: "Quote / Testimonial",
		componentTable: "Table",
		componentWrapper: "Wrapper",
		componentGroup: "Group",
		componentHero: "Hero Banner",
		componentSlider: "Slider",
		componentGallery: "Gallery",
		componentFlexLayout: "Flex Layout",
		componentGridLayout: "Grid Layout"
	}
}, S = r(void 0), ee = ({ children: e, initialLang: t }) => {
	let [n, r] = p(() => {
		if (t) return t;
		let e = localStorage.getItem("builderxd_lang");
		return e === "es" || e === "en" ? e : "es";
	});
	return c(() => {
		t && r(t);
	}, [t]), /* @__PURE__ */ (0, b.jsx)(S.Provider, {
		value: {
			language: n,
			setLanguage: (e) => {
				r(e), localStorage.setItem("builderxd_lang", e);
			},
			t: (e) => x[n][e] || e
		},
		children: e
	});
}, te = () => {
	let e = s(S);
	if (!e) throw Error("useTranslation must be used within a LanguageProvider");
	return e;
}, ne = r(void 0), C = ({ children: e }) => {
	let [t, n] = p(() => {
		let e = localStorage.getItem("builderxd_theme");
		return e === "light" || e === "dark" ? e : "dark";
	});
	return c(() => {
		let e = document.documentElement;
		t === "dark" ? (e.classList.add("dark"), e.classList.remove("light")) : (e.classList.add("light"), e.classList.remove("dark")), localStorage.setItem("builderxd_theme", t);
	}, [t]), /* @__PURE__ */ (0, b.jsx)(ne.Provider, {
		value: {
			theme: t,
			toggleTheme: () => {
				n((e) => e === "dark" ? "light" : "dark");
			},
			setTheme: (e) => {
				n(e);
			}
		},
		children: e
	});
}, re = () => {
	let e = s(ne);
	if (!e) throw Error("useTheme must be used within a ThemeProvider");
	return e;
}, ie = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), ae = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), oe = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), se = (e) => {
	let t = oe(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, ce = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, le = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, ue = r({}), de = () => s(ue), fe = a(({ color: e, size: t, strokeWidth: n, absoluteStrokeWidth: r, className: a = "", children: o, iconNode: s, ...c }, l) => {
	let { size: u = 24, strokeWidth: d = 2, absoluteStrokeWidth: f = !1, color: p = "currentColor", className: m = "" } = de() ?? {}, h = r ?? f ? Number(n ?? d) * 24 / Number(t ?? u) : n ?? d;
	return i("svg", {
		ref: l,
		...ce,
		width: t ?? u ?? ce.width,
		height: t ?? u ?? ce.height,
		stroke: e ?? p,
		strokeWidth: h,
		className: ie("lucide", m, a),
		...!o && !le(c) && { "aria-hidden": "true" },
		...c
	}, [...s.map(([e, t]) => i(e, t)), ...Array.isArray(o) ? o : [o]]);
}), w = (e, t) => {
	let n = a(({ className: n, ...r }, a) => i(fe, {
		ref: a,
		iconNode: t,
		className: ie(`lucide-${ae(se(e))}`, `lucide-${e}`, n),
		...r
	}));
	return n.displayName = se(e), n;
}, pe = w("align-horizontal-space-between", [
	["rect", {
		width: "6",
		height: "14",
		x: "3",
		y: "5",
		rx: "2",
		key: "j77dae"
	}],
	["rect", {
		width: "6",
		height: "10",
		x: "15",
		y: "7",
		rx: "2",
		key: "bq30hj"
	}],
	["path", {
		d: "M3 2v20",
		key: "1d2pfg"
	}],
	["path", {
		d: "M21 2v20",
		key: "p059bm"
	}]
]), me = w("bold", [["path", {
	d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",
	key: "mg9rjx"
}]]), he = w("box", [
	["path", {
		d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
		key: "hh9hay"
	}],
	["path", {
		d: "m3.3 7 8.7 5 8.7-5",
		key: "g66t2b"
	}],
	["path", {
		d: "M12 22V12",
		key: "d0xqtd"
	}]
]), ge = w("calendar", [
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "4",
		rx: "2",
		key: "1hopcy"
	}],
	["path", {
		d: "M3 10h18",
		key: "8toen8"
	}]
]), _e = w("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), ve = w("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), ye = w("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]), be = w("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), xe = w("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]), Se = w("clock", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v6l4 2",
	key: "mmk7yg"
}]]), Ce = w("cloud", [["path", {
	d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
	key: "p7xjir"
}]]), we = w("code", [["path", {
	d: "m16 18 6-6-6-6",
	key: "eg8j8"
}], ["path", {
	d: "m8 6-6 6 6 6",
	key: "ppft3o"
}]]), Te = w("columns-2", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M12 3v18",
	key: "108xh3"
}]]), Ee = w("copy", [["rect", {
	width: "14",
	height: "14",
	x: "8",
	y: "8",
	rx: "2",
	ry: "2",
	key: "17jyea"
}], ["path", {
	d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
	key: "zix9uf"
}]]), De = w("download", [
	["path", {
		d: "M12 15V3",
		key: "m9g1x1"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["path", {
		d: "m7 10 5 5 5-5",
		key: "brsn70"
	}]
]), Oe = w("file-text", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M10 9H8",
		key: "b1mrlr"
	}],
	["path", {
		d: "M16 13H8",
		key: "t4e002"
	}],
	["path", {
		d: "M16 17H8",
		key: "z1uh3a"
	}]
]), ke = w("folder-open", [["path", {
	d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
	key: "usdka0"
}]]), Ae = w("globe", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
		key: "13o1zl"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}]
]), je = w("grid-3x3", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M3 15h18",
		key: "5xshup"
	}],
	["path", {
		d: "M9 3v18",
		key: "fh3hqa"
	}],
	["path", {
		d: "M15 3v18",
		key: "14nvp0"
	}]
]), Me = w("images", [
	["path", {
		d: "m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16",
		key: "9kzy35"
	}],
	["path", {
		d: "M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2",
		key: "1t0f0t"
	}],
	["circle", {
		cx: "13",
		cy: "7",
		r: "1",
		fill: "currentColor",
		key: "1obus6"
	}],
	["rect", {
		x: "8",
		y: "2",
		width: "14",
		height: "14",
		rx: "2",
		key: "1gvhby"
	}]
]), Ne = w("image", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		ry: "2",
		key: "1m3agn"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}],
	["path", {
		d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
		key: "1xmnt7"
	}]
]), Pe = w("italic", [
	["line", {
		x1: "19",
		x2: "10",
		y1: "4",
		y2: "4",
		key: "15jd3p"
	}],
	["line", {
		x1: "14",
		x2: "5",
		y1: "20",
		y2: "20",
		key: "bu0au3"
	}],
	["line", {
		x1: "15",
		x2: "9",
		y1: "4",
		y2: "20",
		key: "uljnxc"
	}]
]), Fe = w("layers", [
	["path", {
		d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
		key: "zw3jo"
	}],
	["path", {
		d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
		key: "1wduqc"
	}],
	["path", {
		d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
		key: "kqbvx6"
	}]
]), Ie = w("layout-grid", [
	["rect", {
		width: "7",
		height: "7",
		x: "3",
		y: "3",
		rx: "1",
		key: "1g98yp"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "14",
		y: "3",
		rx: "1",
		key: "6d4xhi"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "14",
		y: "14",
		rx: "1",
		key: "nxv5o0"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "3",
		y: "14",
		rx: "1",
		key: "1bb6yr"
	}]
]), Le = w("layout-template", [
	["rect", {
		width: "18",
		height: "7",
		x: "3",
		y: "3",
		rx: "1",
		key: "f1a2em"
	}],
	["rect", {
		width: "9",
		height: "7",
		x: "3",
		y: "14",
		rx: "1",
		key: "jqznyg"
	}],
	["rect", {
		width: "5",
		height: "7",
		x: "16",
		y: "14",
		rx: "1",
		key: "q5h2i8"
	}]
]), Re = w("link-2-off", [
	["path", {
		d: "M9 17H7A5 5 0 0 1 7 7",
		key: "10o201"
	}],
	["path", {
		d: "M15 7h2a5 5 0 0 1 4 8",
		key: "1d3206"
	}],
	["line", {
		x1: "8",
		x2: "12",
		y1: "12",
		y2: "12",
		key: "rvw6j4"
	}],
	["line", {
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22",
		key: "a6p6uj"
	}]
]), ze = w("link", [["path", {
	d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
	key: "1cjeqo"
}], ["path", {
	d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
	key: "19qd67"
}]]), Be = w("link-2", [
	["path", {
		d: "M9 17H7A5 5 0 0 1 7 7h2",
		key: "8i5ue5"
	}],
	["path", {
		d: "M15 7h2a5 5 0 1 1 0 10h-2",
		key: "1b9ql8"
	}],
	["line", {
		x1: "8",
		x2: "16",
		y1: "12",
		y2: "12",
		key: "1jonct"
	}]
]), Ve = w("list-ordered", [
	["path", {
		d: "M11 5h10",
		key: "1cz7ny"
	}],
	["path", {
		d: "M11 12h10",
		key: "1438ji"
	}],
	["path", {
		d: "M11 19h10",
		key: "11t30w"
	}],
	["path", {
		d: "M4 4h1v5",
		key: "10yrso"
	}],
	["path", {
		d: "M4 9h2",
		key: "r1h2o0"
	}],
	["path", {
		d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",
		key: "xtkcd5"
	}]
]), He = w("list", [
	["path", {
		d: "M3 5h.01",
		key: "18ugdj"
	}],
	["path", {
		d: "M3 12h.01",
		key: "nlz23k"
	}],
	["path", {
		d: "M3 19h.01",
		key: "noohij"
	}],
	["path", {
		d: "M8 5h13",
		key: "1pao27"
	}],
	["path", {
		d: "M8 12h13",
		key: "1za7za"
	}],
	["path", {
		d: "M8 19h13",
		key: "m83p4d"
	}]
]), Ue = w("menu", [
	["path", {
		d: "M4 5h16",
		key: "1tepv9"
	}],
	["path", {
		d: "M4 12h16",
		key: "1lakjw"
	}],
	["path", {
		d: "M4 19h16",
		key: "1djgab"
	}]
]), We = w("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]), Ge = w("monitor", [
	["rect", {
		width: "20",
		height: "14",
		x: "2",
		y: "3",
		rx: "2",
		key: "48i651"
	}],
	["line", {
		x1: "8",
		x2: "16",
		y1: "21",
		y2: "21",
		key: "1svkeh"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "17",
		y2: "21",
		key: "vw1qmm"
	}]
]), Ke = w("moon", [["path", {
	d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
	key: "kfwtm"
}]]), qe = w("move-vertical", [
	["path", {
		d: "M12 2v20",
		key: "t6zp3m"
	}],
	["path", {
		d: "m8 18 4 4 4-4",
		key: "bh5tu3"
	}],
	["path", {
		d: "m8 6 4-4 4 4",
		key: "ybng9g"
	}]
]), Je = w("panels-top-left", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M9 21V9",
		key: "1oto5p"
	}]
]), Ye = w("pipette", [
	["path", {
		d: "m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12",
		key: "1y3wsu"
	}],
	["path", {
		d: "m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z",
		key: "110lr1"
	}],
	["path", {
		d: "m2 22 .414-.414",
		key: "jhxm08"
	}]
]), Xe = w("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]), Ze = w("redo-2", [["path", {
	d: "m15 14 5-5-5-5",
	key: "12vg1m"
}], ["path", {
	d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",
	key: "6uklza"
}]]), Qe = w("remove-formatting", [
	["path", {
		d: "M4 7V4h16v3",
		key: "9msm58"
	}],
	["path", {
		d: "M5 20h6",
		key: "1h6pxn"
	}],
	["path", {
		d: "M13 4 8 20",
		key: "kqq6aj"
	}],
	["path", {
		d: "m15 15 5 5",
		key: "me55sn"
	}],
	["path", {
		d: "m20 15-5 5",
		key: "11p7ol"
	}]
]), $e = w("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]), et = w("send", [["path", {
	d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
	key: "1ffxy3"
}], ["path", {
	d: "m21.854 2.147-10.94 10.939",
	key: "12cjpa"
}]]), tt = w("share-2", [
	["circle", {
		cx: "18",
		cy: "5",
		r: "3",
		key: "gq8acd"
	}],
	["circle", {
		cx: "6",
		cy: "12",
		r: "3",
		key: "w7nqdw"
	}],
	["circle", {
		cx: "18",
		cy: "19",
		r: "3",
		key: "1xt0gg"
	}],
	["line", {
		x1: "8.59",
		x2: "15.42",
		y1: "13.51",
		y2: "17.49",
		key: "47mynk"
	}],
	["line", {
		x1: "15.41",
		x2: "8.59",
		y1: "6.51",
		y2: "10.49",
		key: "1n3mei"
	}]
]), nt = w("shopping-bag", [
	["path", {
		d: "M16 10a4 4 0 0 1-8 0",
		key: "1ltviw"
	}],
	["path", {
		d: "M3.103 6.034h17.794",
		key: "awc11p"
	}],
	["path", {
		d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
		key: "o988cm"
	}]
]), rt = w("sliders-vertical", [
	["path", {
		d: "M10 8h4",
		key: "1sr2af"
	}],
	["path", {
		d: "M12 21v-9",
		key: "17s77i"
	}],
	["path", {
		d: "M12 8V3",
		key: "13r4qs"
	}],
	["path", {
		d: "M17 16h4",
		key: "h1uq16"
	}],
	["path", {
		d: "M19 12V3",
		key: "o1uvq1"
	}],
	["path", {
		d: "M19 21v-5",
		key: "qua636"
	}],
	["path", {
		d: "M3 14h4",
		key: "bcjad9"
	}],
	["path", {
		d: "M5 10V3",
		key: "cb8scm"
	}],
	["path", {
		d: "M5 21v-7",
		key: "1w1uti"
	}]
]), it = w("smartphone", [["rect", {
	width: "14",
	height: "20",
	x: "5",
	y: "2",
	rx: "2",
	ry: "2",
	key: "1yt0o3"
}], ["path", {
	d: "M12 18h.01",
	key: "mhygvu"
}]]), at = w("sparkles", [
	["path", {
		d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
		key: "1s2grr"
	}],
	["path", {
		d: "M20 2v4",
		key: "1rf3ol"
	}],
	["path", {
		d: "M22 4h-4",
		key: "gwowj6"
	}],
	["circle", {
		cx: "4",
		cy: "20",
		r: "2",
		key: "6kqj1y"
	}]
]), ot = w("square", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}]]), st = w("star", [["path", {
	d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
	key: "r04s7s"
}]]), ct = w("strikethrough", [
	["path", {
		d: "M16 4H9a3 3 0 0 0-2.83 4",
		key: "43sutm"
	}],
	["path", {
		d: "M14 12a4 4 0 0 1 0 8H6",
		key: "nlfj13"
	}],
	["line", {
		x1: "4",
		x2: "20",
		y1: "12",
		y2: "12",
		key: "1e0a9i"
	}]
]), lt = w("sun", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "4",
		key: "4exip2"
	}],
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "M12 20v2",
		key: "1lh1kg"
	}],
	["path", {
		d: "m4.93 4.93 1.41 1.41",
		key: "149t6j"
	}],
	["path", {
		d: "m17.66 17.66 1.41 1.41",
		key: "ptbguv"
	}],
	["path", {
		d: "M2 12h2",
		key: "1t8f8n"
	}],
	["path", {
		d: "M20 12h2",
		key: "1q8mjw"
	}],
	["path", {
		d: "m6.34 17.66-1.41 1.41",
		key: "1m8zz5"
	}],
	["path", {
		d: "m19.07 4.93-1.41 1.41",
		key: "1shlcs"
	}]
]), ut = w("table", [
	["path", {
		d: "M12 3v18",
		key: "108xh3"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M3 15h18",
		key: "5xshup"
	}]
]), dt = w("tablet", [["rect", {
	width: "16",
	height: "20",
	x: "4",
	y: "2",
	rx: "2",
	ry: "2",
	key: "76otgf"
}], ["line", {
	x1: "12",
	x2: "12.01",
	y1: "18",
	y2: "18",
	key: "1dp563"
}]]), ft = w("terminal", [["path", {
	d: "M12 19h8",
	key: "baeox8"
}], ["path", {
	d: "m4 17 6-6-6-6",
	key: "1yngyt"
}]]), pt = w("text-align-end", [
	["path", {
		d: "M21 5H3",
		key: "1fi0y6"
	}],
	["path", {
		d: "M21 12H9",
		key: "dn1m92"
	}],
	["path", {
		d: "M21 19H7",
		key: "4cu937"
	}]
]), mt = w("text-align-center", [
	["path", {
		d: "M21 5H3",
		key: "1fi0y6"
	}],
	["path", {
		d: "M17 12H7",
		key: "16if0g"
	}],
	["path", {
		d: "M19 19H5",
		key: "vjpgq2"
	}]
]), ht = w("text-align-justify", [
	["path", {
		d: "M3 5h18",
		key: "1u36vt"
	}],
	["path", {
		d: "M3 12h18",
		key: "1i2n21"
	}],
	["path", {
		d: "M3 19h18",
		key: "awlh7x"
	}]
]), gt = w("text-align-start", [
	["path", {
		d: "M21 5H3",
		key: "1fi0y6"
	}],
	["path", {
		d: "M15 12H3",
		key: "6jk70r"
	}],
	["path", {
		d: "M17 19H3",
		key: "z6ezky"
	}]
]), _t = w("trash-2", [
	["path", {
		d: "M10 11v6",
		key: "nco0om"
	}],
	["path", {
		d: "M14 11v6",
		key: "outv1u"
	}],
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]), vt = w("type", [
	["path", {
		d: "M12 4v16",
		key: "1654pz"
	}],
	["path", {
		d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",
		key: "e0r10z"
	}],
	["path", {
		d: "M9 20h6",
		key: "s66wpe"
	}]
]), yt = w("underline", [["path", {
	d: "M6 4v6a6 6 0 0 0 12 0V4",
	key: "9kb039"
}], ["line", {
	x1: "4",
	x2: "20",
	y1: "20",
	y2: "20",
	key: "nun2al"
}]]), bt = w("undo-2", [["path", {
	d: "M9 14 4 9l5-5",
	key: "102s5s"
}], ["path", {
	d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",
	key: "f3b9sd"
}]]), xt = w("upload", [
	["path", {
		d: "M12 3v12",
		key: "1x0j5s"
	}],
	["path", {
		d: "m17 8-5-5-5 5",
		key: "7q97r8"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}]
]), St = w("user", [["path", {
	d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
	key: "975kel"
}], ["circle", {
	cx: "12",
	cy: "7",
	r: "4",
	key: "17ys0d"
}]]), T = w("video", [["path", {
	d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
	key: "ftymec"
}], ["rect", {
	x: "2",
	y: "6",
	width: "14",
	height: "12",
	rx: "2",
	key: "158x01"
}]]), Ct = w("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]), wt = ({ deviceMode: e, setDeviceMode: t, canUndo: n, canRedo: r, onUndo: i, onRedo: a, onImportClick: o, onExportClick: s, onSendTestClick: c, fileManagerProviders: l = [], espIntegrations: u = [], onFileManagerClick: d, onESPClick: f, uiConfig: p }) => {
	let { t: m, language: h, setLanguage: g } = te(), { theme: _, toggleTheme: v } = re();
	return /* @__PURE__ */ (0, b.jsxs)("header", {
		className: "h-[60px] bg-bg-panel border-b border-border-color flex items-center justify-between px-5 z-50 shadow-sm shrink-0",
		children: [
			/* @__PURE__ */ (0, b.jsxs)("div", {
				className: "flex items-center gap-2.5",
				children: [/* @__PURE__ */ (0, b.jsx)("h1", {
					className: "text-lg font-bold tracking-tight text-text-primary",
					children: m("title")
				}), /* @__PURE__ */ (0, b.jsx)("span", {
					className: "bg-primary/15 text-primary font-mono text-[11px] font-semibold px-1.5 py-0.5 rounded uppercase",
					children: "dev"
				})]
			}),
			p?.showDeviceToggle !== !1 && /* @__PURE__ */ (0, b.jsxs)("div", {
				className: "flex bg-bg-hover p-1 rounded-lg border border-border-color",
				children: [
					/* @__PURE__ */ (0, b.jsx)("button", {
						onClick: () => t("desktop"),
						className: `bg-transparent border-none p-1.5 px-3 rounded-md cursor-pointer flex items-center justify-center transition-all hover:text-text-primary ${e === "desktop" ? "bg-bg-panel text-primary shadow-xs border border-border-color/10" : "text-text-secondary"}`,
						title: "Desktop",
						children: /* @__PURE__ */ (0, b.jsx)(Ge, { size: 18 })
					}),
					/* @__PURE__ */ (0, b.jsx)("button", {
						onClick: () => t("tablet"),
						className: `bg-transparent border-none p-1.5 px-3 rounded-md cursor-pointer flex items-center justify-center transition-all hover:text-text-primary ${e === "tablet" ? "bg-bg-panel text-primary shadow-xs border border-border-color/10" : "text-text-secondary"}`,
						title: "Tablet",
						children: /* @__PURE__ */ (0, b.jsx)(dt, { size: 18 })
					}),
					/* @__PURE__ */ (0, b.jsx)("button", {
						onClick: () => t("mobile"),
						className: `bg-transparent border-none p-1.5 px-3 rounded-md cursor-pointer flex items-center justify-center transition-all hover:text-text-primary ${e === "mobile" ? "bg-bg-panel text-primary shadow-xs border border-border-color/10" : "text-text-secondary"}`,
						title: "Mobile",
						children: /* @__PURE__ */ (0, b.jsx)(it, { size: 18 })
					})
				]
			}),
			/* @__PURE__ */ (0, b.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [
					p?.showHistoryToggle !== !1 && /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex border-r border-border-color pr-3 gap-1",
						children: [/* @__PURE__ */ (0, b.jsx)("button", {
							onClick: i,
							disabled: !n,
							className: "bg-transparent border border-border-color text-text-secondary p-2 rounded-md cursor-pointer flex items-center justify-center transition-all hover:bg-bg-hover hover:text-text-primary disabled:opacity-40 disabled:cursor-not-allowed",
							title: m("undo"),
							children: /* @__PURE__ */ (0, b.jsx)(bt, { size: 16 })
						}), /* @__PURE__ */ (0, b.jsx)("button", {
							onClick: a,
							disabled: !r,
							className: "bg-transparent border border-border-color text-text-secondary p-2 rounded-md cursor-pointer flex items-center justify-center transition-all hover:bg-bg-hover hover:text-text-primary disabled:opacity-40 disabled:cursor-not-allowed",
							title: m("redo"),
							children: /* @__PURE__ */ (0, b.jsx)(Ze, { size: 16 })
						})]
					}),
					p?.showThemeToggle !== !1 && /* @__PURE__ */ (0, b.jsx)("button", {
						onClick: v,
						className: "bg-transparent border border-border-color text-text-secondary p-2 rounded-md cursor-pointer flex items-center justify-center transition-all hover:bg-bg-hover hover:text-text-primary",
						title: "Toggle Theme",
						children: _ === "dark" ? /* @__PURE__ */ (0, b.jsx)(lt, { size: 16 }) : /* @__PURE__ */ (0, b.jsx)(Ke, { size: 16 })
					}),
					p?.showLanguageToggle !== !1 && /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex items-center bg-bg-hover border border-border-color rounded-md p-1 px-2 gap-1",
						children: [/* @__PURE__ */ (0, b.jsx)(Ae, {
							size: 14,
							className: "text-text-secondary"
						}), /* @__PURE__ */ (0, b.jsxs)("select", {
							value: h,
							onChange: (e) => g(e.target.value),
							className: "bg-transparent border-none text-text-primary text-xs font-semibold cursor-pointer outline-none",
							children: [/* @__PURE__ */ (0, b.jsx)("option", {
								value: "es",
								className: "dark:bg-bg-panel",
								children: "ES"
							}), /* @__PURE__ */ (0, b.jsx)("option", {
								value: "en",
								className: "dark:bg-bg-panel",
								children: "EN"
							})]
						})]
					}),
					/* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex gap-2",
						children: [
							l.map((e) => /* @__PURE__ */ (0, b.jsxs)("button", {
								onClick: () => d?.(e),
								className: "border-none p-2 px-3 rounded-md text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-all bg-bg-hover text-text-primary border border-border-color hover:bg-border-color/50",
								title: `Browse ${e.name}`,
								children: [/* @__PURE__ */ (0, b.jsx)(Ce, {
									size: 14,
									className: "text-primary"
								}), /* @__PURE__ */ (0, b.jsx)("span", { children: e.name })]
							}, e.id)),
							u.map((e) => /* @__PURE__ */ (0, b.jsxs)("button", {
								onClick: () => f?.(e),
								className: "border-none p-2 px-3 rounded-md text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-all bg-bg-hover text-text-primary border border-border-color hover:bg-border-color/50",
								title: `Push/Pull to ${e.name}`,
								children: [/* @__PURE__ */ (0, b.jsx)(tt, {
									size: 14,
									className: "text-accent-color"
								}), /* @__PURE__ */ (0, b.jsx)("span", { children: e.name })]
							}, e.id)),
							p?.showImport !== !1 && /* @__PURE__ */ (0, b.jsxs)("button", {
								onClick: o,
								className: "border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-all bg-bg-hover text-text-primary border border-border-color hover:bg-border-color/50",
								children: [/* @__PURE__ */ (0, b.jsx)(xt, { size: 14 }), /* @__PURE__ */ (0, b.jsx)("span", { children: m("import") })]
							}),
							p?.showExport !== !1 && /* @__PURE__ */ (0, b.jsxs)("button", {
								onClick: s,
								className: "border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-all bg-primary hover:bg-primary-hover text-white",
								children: [/* @__PURE__ */ (0, b.jsx)(De, { size: 14 }), /* @__PURE__ */ (0, b.jsx)("span", { children: m("export") })]
							}),
							p?.showSendTest !== !1 && /* @__PURE__ */ (0, b.jsxs)("button", {
								onClick: c,
								className: "border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-all bg-accent-color text-white hover:opacity-90",
								children: [/* @__PURE__ */ (0, b.jsx)(et, { size: 14 }), /* @__PURE__ */ (0, b.jsx)("span", { children: m("sendTest") })]
							})
						]
					})
				]
			})
		]
	});
}, Tt = (e) => [
	{
		type: "section",
		label: e("componentSection"),
		icon: /* @__PURE__ */ (0, b.jsx)(Je, { size: 24 }),
		allowedModes: ["mjml"]
	},
	{
		type: "column",
		label: e("componentColumn"),
		icon: /* @__PURE__ */ (0, b.jsx)(Te, { size: 24 }),
		allowedModes: ["mjml"]
	},
	{
		type: "heading",
		label: e("componentHeading"),
		icon: /* @__PURE__ */ (0, b.jsx)(vt, { size: 24 }),
		allowedModes: ["html", "mjml"]
	},
	{
		type: "paragraph",
		label: e("componentParagraph"),
		icon: /* @__PURE__ */ (0, b.jsx)(Oe, { size: 24 }),
		allowedModes: ["html", "mjml"]
	},
	{
		type: "text",
		label: e("componentText"),
		icon: /* @__PURE__ */ (0, b.jsx)(vt, { size: 24 }),
		allowedModes: ["html", "mjml"]
	},
	{
		type: "image",
		label: e("componentImage"),
		icon: /* @__PURE__ */ (0, b.jsx)(Ne, { size: 24 }),
		allowedModes: ["html", "mjml"]
	},
	{
		type: "button",
		label: e("componentButton"),
		icon: /* @__PURE__ */ (0, b.jsx)(ot, { size: 24 }),
		allowedModes: ["html", "mjml"]
	},
	{
		type: "divider",
		label: e("componentDivider"),
		icon: /* @__PURE__ */ (0, b.jsx)(We, { size: 24 }),
		allowedModes: ["html", "mjml"]
	},
	{
		type: "spacer",
		label: e("componentSpacer"),
		icon: /* @__PURE__ */ (0, b.jsx)(qe, { size: 24 }),
		allowedModes: ["html", "mjml"]
	},
	{
		type: "social",
		label: e("componentSocial"),
		icon: /* @__PURE__ */ (0, b.jsx)(tt, { size: 24 }),
		allowedModes: ["html", "mjml"]
	},
	{
		type: "video",
		label: e("componentVideo"),
		icon: /* @__PURE__ */ (0, b.jsx)(T, { size: 24 }),
		allowedModes: ["html", "mjml"]
	},
	{
		type: "custom_html",
		label: e("componentCustomHtml"),
		icon: /* @__PURE__ */ (0, b.jsx)(we, { size: 24 }),
		allowedModes: ["html", "mjml"]
	},
	{
		type: "countdown",
		label: e("componentCountdown"),
		icon: /* @__PURE__ */ (0, b.jsx)(Se, { size: 24 }),
		allowedModes: ["mjml"]
	},
	{
		type: "accordion",
		label: e("componentAccordion"),
		icon: /* @__PURE__ */ (0, b.jsx)(Ue, { size: 24 }),
		allowedModes: ["mjml"]
	},
	{
		type: "carousel",
		label: e("componentCarousel"),
		icon: /* @__PURE__ */ (0, b.jsx)(Me, { size: 24 }),
		allowedModes: ["mjml"]
	},
	{
		type: "icon",
		label: e("componentIcon"),
		icon: /* @__PURE__ */ (0, b.jsx)(st, { size: 24 }),
		allowedModes: ["html", "mjml"]
	},
	{
		type: "nav_menu",
		label: e("componentNavMenu"),
		icon: /* @__PURE__ */ (0, b.jsx)(Ue, { size: 24 }),
		allowedModes: ["html", "mjml"]
	},
	{
		type: "image_text",
		label: e("componentImageText"),
		icon: /* @__PURE__ */ (0, b.jsx)(Oe, { size: 24 }),
		allowedModes: ["html", "mjml"]
	},
	{
		type: "product_card",
		label: e("componentProductCard"),
		icon: /* @__PURE__ */ (0, b.jsx)(nt, { size: 24 }),
		allowedModes: ["html", "mjml"]
	},
	{
		type: "quote",
		label: e("componentQuote"),
		icon: /* @__PURE__ */ (0, b.jsx)(St, { size: 24 }),
		allowedModes: ["html", "mjml"]
	},
	{
		type: "table",
		label: e("componentTable"),
		icon: /* @__PURE__ */ (0, b.jsx)(ut, { size: 24 }),
		allowedModes: ["html"]
	},
	{
		type: "wrapper",
		label: e("componentWrapper"),
		icon: /* @__PURE__ */ (0, b.jsx)(he, { size: 24 }),
		allowedModes: ["mjml"]
	},
	{
		type: "group",
		label: e("componentGroup"),
		icon: /* @__PURE__ */ (0, b.jsx)(Te, { size: 24 }),
		allowedModes: ["mjml"]
	},
	{
		type: "hero",
		label: e("componentHero"),
		icon: /* @__PURE__ */ (0, b.jsx)(Le, { size: 24 }),
		allowedModes: ["mjml"]
	},
	{
		type: "slider",
		label: e("componentSlider"),
		icon: /* @__PURE__ */ (0, b.jsx)(rt, { size: 24 }),
		allowedModes: ["html"]
	},
	{
		type: "gallery",
		label: e("componentGallery"),
		icon: /* @__PURE__ */ (0, b.jsx)(je, { size: 24 }),
		allowedModes: ["html"]
	},
	{
		type: "flex_layout",
		label: e("componentFlexLayout"),
		icon: /* @__PURE__ */ (0, b.jsx)(pe, { size: 24 }),
		allowedModes: ["html"]
	},
	{
		type: "grid_layout",
		label: e("componentGridLayout"),
		icon: /* @__PURE__ */ (0, b.jsx)(Ie, { size: 24 }),
		allowedModes: ["html"]
	}
];
Tt((e) => e);
//#endregion
//#region src/components/LeftPanel.tsx
var Et = ({ onAddComponent: t, nodes: n, selectedId: r, onSelectNode: i, onDeleteNode: a, onMoveNode: o, readOnly: s = !1, templateMode: c = "mjml", setTemplateMode: l, fixedMode: u, onClearCanvas: d, uiConfig: f }) => {
	let { t: m } = te(), h = Tt(m), [g, _] = p("components"), [v, y] = p(""), [x, S] = p({}), ee = h.filter((e) => e.allowedModes.includes(c) ? e.label.toLowerCase().includes(v.toLowerCase()) || e.type.toLowerCase().includes(v.toLowerCase()) : !1), ne = (e) => {
		S((t) => ({
			...t,
			[e]: !t[e]
		}));
	}, C = (t, n = 0) => {
		let c = t.id === r, l = t.children && t.children.length > 0, u = x[t.id], d = h.find((e) => e.type === t.type)?.label || t.type;
		return /* @__PURE__ */ (0, b.jsxs)("div", {
			className: "flex flex-col",
			children: [/* @__PURE__ */ (0, b.jsxs)("div", {
				className: `flex items-center p-2 rounded-md mb-0.5 cursor-pointer transition-all hover:bg-bg-hover group ${c ? "bg-primary/10 text-primary" : "text-text-secondary"}`,
				style: { paddingLeft: `${n * 12 + 8}px` },
				onClick: (e) => {
					e.stopPropagation(), i(t.id);
				},
				children: [
					l && /* @__PURE__ */ (0, b.jsx)("button", {
						onClick: (e) => {
							e.stopPropagation(), ne(t.id);
						},
						className: "bg-transparent border-none text-text-muted mr-1 cursor-pointer",
						children: /* @__PURE__ */ (0, b.jsx)("span", {
							className: "text-[10px]",
							children: u ? "▶" : "▼"
						})
					}),
					/* @__PURE__ */ (0, b.jsx)("span", {
						className: `mr-2 flex items-center shrink-0 ${c ? "text-primary" : "text-text-muted"}`,
						children: e.cloneElement(h.find((e) => e.type === t.type)?.icon || /* @__PURE__ */ (0, b.jsx)(Je, { size: 14 }), { size: 14 })
					}),
					/* @__PURE__ */ (0, b.jsx)("span", {
						className: "text-xs font-medium truncate flex-1",
						children: d
					}),
					!s && /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "hidden group-hover:flex items-center gap-0.5 shrink-0",
						children: [
							/* @__PURE__ */ (0, b.jsx)("button", {
								onClick: (e) => {
									e.stopPropagation(), o(t.id, "up");
								},
								className: "bg-transparent border-none text-text-muted p-0.5 rounded-xs cursor-pointer hover:bg-border-color hover:text-text-primary",
								children: /* @__PURE__ */ (0, b.jsx)(xe, { size: 12 })
							}),
							/* @__PURE__ */ (0, b.jsx)("button", {
								onClick: (e) => {
									e.stopPropagation(), o(t.id, "down");
								},
								className: "bg-transparent border-none text-text-muted p-0.5 rounded-xs cursor-pointer hover:bg-border-color hover:text-text-primary",
								children: /* @__PURE__ */ (0, b.jsx)(ve, { size: 12 })
							}),
							/* @__PURE__ */ (0, b.jsx)("button", {
								onClick: (e) => {
									e.stopPropagation(), a(t.id);
								},
								className: "bg-transparent border-none text-text-muted p-0.5 rounded-xs cursor-pointer hover:bg-red-500/15 hover:text-red-500",
								children: /* @__PURE__ */ (0, b.jsx)(_t, { size: 12 })
							})
						]
					})
				]
			}), l && !u && /* @__PURE__ */ (0, b.jsx)("div", {
				className: "flex flex-col",
				children: t.children.map((e) => C(e, n + 1))
			})]
		}, t.id);
	};
	return /* @__PURE__ */ (0, b.jsxs)("aside", {
		className: "w-[344px] bg-bg-panel border-r border-border-color flex h-full select-none overflow-hidden shrink-0",
		children: [/* @__PURE__ */ (0, b.jsxs)("div", {
			className: "w-11 border-r border-border-color/65 bg-bg-panel flex flex-col items-center py-4 gap-4 shrink-0",
			children: [
				/* @__PURE__ */ (0, b.jsx)("button", {
					onClick: () => _("components"),
					className: `p-2 rounded-lg cursor-pointer transition-all border-none outline-none ${g === "components" ? "bg-primary/10 text-primary" : "text-text-muted hover:text-text-primary"}`,
					title: m("components"),
					id: "tab-btn-components",
					children: /* @__PURE__ */ (0, b.jsx)(Ie, { size: 20 })
				}),
				/* @__PURE__ */ (0, b.jsx)("button", {
					onClick: () => _("layers"),
					className: `p-2 rounded-lg cursor-pointer transition-all border-none outline-none ${g === "layers" ? "bg-primary/10 text-primary" : "text-text-muted hover:text-text-primary"}`,
					title: m("layersLabel"),
					id: "tab-btn-layers",
					children: /* @__PURE__ */ (0, b.jsx)(Fe, { size: 20 })
				}),
				/* @__PURE__ */ (0, b.jsx)("button", {
					onClick: () => _("assets"),
					className: `p-2 rounded-lg cursor-pointer transition-all border-none outline-none ${g === "assets" ? "bg-primary/10 text-primary" : "text-text-muted hover:text-text-primary"}`,
					title: m("assetsLabel"),
					id: "tab-btn-assets",
					children: /* @__PURE__ */ (0, b.jsx)(ke, { size: 20 })
				})
			]
		}), /* @__PURE__ */ (0, b.jsxs)("div", {
			className: "flex-1 flex flex-col overflow-hidden h-full",
			children: [
				g === "components" && /* @__PURE__ */ (0, b.jsxs)("div", {
					className: "p-4 flex flex-col overflow-y-auto flex-1 h-full gap-4",
					children: [/* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, b.jsx)("h2", {
									className: "text-sm font-semibold text-text-primary",
									children: m("componentLibrary")
								}), f?.showClearCanvas !== !1 && d && /* @__PURE__ */ (0, b.jsx)("button", {
									onClick: d,
									className: "p-1 px-2 text-[10px] font-bold text-red-500 border border-red-500/20 bg-red-500/10 rounded-md cursor-pointer hover:bg-red-500 hover:text-white transition-all border-none shrink-0",
									id: "btn-clear-canvas",
									children: m("clearCanvas")
								})]
							}),
							f?.showTemplateModeToggle !== !1 && !u && l && /* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex bg-bg-hover p-1 rounded-md border border-border-color/80 w-full shrink-0 select-none",
								children: [/* @__PURE__ */ (0, b.jsx)("button", {
									onClick: () => l("html"),
									className: `flex-1 text-center py-1 text-[10.5px] font-bold rounded-sm cursor-pointer transition-all border-none ${c === "html" ? "bg-primary text-white" : "text-text-secondary hover:text-text-primary"}`,
									children: m("htmlMode")
								}), /* @__PURE__ */ (0, b.jsx)("button", {
									onClick: () => l("mjml"),
									className: `flex-1 text-center py-1 text-[10.5px] font-bold rounded-sm cursor-pointer transition-all border-none ${c === "mjml" ? "bg-primary text-white" : "text-text-secondary hover:text-text-primary"}`,
									children: m("mjmlMode")
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex items-center bg-bg-hover border border-border-color rounded-md p-2 px-3 gap-2 shrink-0",
								children: [/* @__PURE__ */ (0, b.jsx)($e, {
									size: 14,
									className: "text-text-muted shrink-0"
								}), /* @__PURE__ */ (0, b.jsx)("input", {
									type: "text",
									placeholder: m("searchComponents"),
									value: v,
									onChange: (e) => y(e.target.value),
									className: "bg-transparent border-none text-text-primary text-xs outline-none w-full",
									id: "comp-search"
								})]
							})
						]
					}), /* @__PURE__ */ (0, b.jsx)("div", {
						className: "grid grid-cols-2 gap-3.5 pb-4",
						children: ee.map((e) => /* @__PURE__ */ (0, b.jsxs)("div", {
							className: "flex flex-col items-center justify-center p-3.5 border border-border-color rounded-lg cursor-grab transition-all hover:bg-bg-hover hover:border-primary active:cursor-grabbing group bg-bg-panel text-center select-none",
							onClick: () => t(e.type),
							draggable: !s,
							onDragStart: (t) => t.dataTransfer.setData("text/plain", e.type),
							id: `block-item-${e.type}`,
							children: [/* @__PURE__ */ (0, b.jsx)("div", {
								className: "text-primary mb-2 bg-bg-hover p-3 rounded-lg group-hover:bg-primary/10 transition-colors",
								children: e.icon
							}), /* @__PURE__ */ (0, b.jsx)("span", {
								className: "text-[11.5px] font-medium text-text-primary truncate w-full",
								children: e.label
							})]
						}, e.type))
					})]
				}),
				g === "layers" && /* @__PURE__ */ (0, b.jsxs)("div", {
					className: "p-4 flex-1 flex flex-col overflow-hidden h-full",
					children: [/* @__PURE__ */ (0, b.jsx)("h2", {
						className: "text-sm font-semibold text-text-primary mb-3.5",
						children: m("layersTree")
					}), /* @__PURE__ */ (0, b.jsx)("div", {
						className: "flex-1 overflow-y-auto",
						children: n.length === 0 ? /* @__PURE__ */ (0, b.jsx)("p", {
							className: "text-xs text-text-muted text-center mt-5",
							children: m("dragToCanvas")
						}) : /* @__PURE__ */ (0, b.jsxs)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex items-center p-2 rounded-md mb-0.5 text-text-primary font-bold text-xs bg-bg-hover border border-border-color/20",
								children: [/* @__PURE__ */ (0, b.jsx)("span", {
									className: "mr-2 text-primary",
									children: "⚡"
								}), /* @__PURE__ */ (0, b.jsx)("span", { children: "Design System Layers" })]
							}), /* @__PURE__ */ (0, b.jsx)("div", {
								className: "pl-2.5 pt-1.5 border-l border-border-color/40 ml-4",
								children: n.map((e) => C(e, 0))
							})]
						})
					})]
				}),
				g === "assets" && /* @__PURE__ */ (0, b.jsxs)("div", {
					className: "p-4 flex-1 flex flex-col overflow-hidden h-full",
					children: [/* @__PURE__ */ (0, b.jsx)("h2", {
						className: "text-sm font-semibold text-text-primary mb-3.5",
						children: m("assetManager")
					}), /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex-1 flex flex-col items-center justify-center text-center p-5 text-text-muted gap-2",
						children: [
							/* @__PURE__ */ (0, b.jsx)(ke, {
								size: 36,
								className: "text-text-muted/60"
							}),
							/* @__PURE__ */ (0, b.jsx)("p", {
								className: "text-xs",
								children: m("noAssets")
							}),
							/* @__PURE__ */ (0, b.jsx)("span", {
								className: "text-[10px] text-text-muted/50",
								children: m("useIntegrations")
							})
						]
					})]
				})
			]
		})]
	});
}, Dt = r(null);
function Ot(e, t) {
	let n = null;
	return e != null && (n = e[1]), { getTheme: function() {
		return t ?? (n == null ? null : n.getTheme());
	} };
}
function kt() {
	let e = s(Dt);
	return e ?? function(e, ...t) {
		let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
		r.append("code", e);
		for (let e of t) r.append("v", e);
		throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
	}(8), e;
}
//#endregion
//#region node_modules/lexical/dist/Lexical.prod.mjs
function E(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function At(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	n.search = r.toString(), console.warn(`Minified Lexical warning #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var D = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, jt = D && "documentMode" in document ? document.documentMode : null, Mt = D && /Mac|iPod|iPhone|iPad/.test(navigator.platform), Nt = D && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), Pt = !(!D || !("InputEvent" in window) || jt) && "getTargetRanges" in new window.InputEvent("input"), Ft = D && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, It = D && /Android/.test(navigator.userAgent), Lt = D && /Version\/[\d.]+.*Safari/.test(navigator.userAgent) && !It, Rt = D && /^(?=.*Chrome).*/i.test(navigator.userAgent), zt = D && It && Rt, Bt = D && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && Mt && !Rt, Vt = 0, Ht = 1, Ut = 2, Wt = 1, Gt = 2, Kt = 3, qt = 4, Jt = 5, Yt = 6, Xt = Lt || Ft || Bt ? "\xA0" : "​", Zt = "\n\n", Qt = Nt ? "\xA0" : Xt, $t = {
	bold: 1,
	capitalize: 1024,
	code: 16,
	highlight: 128,
	italic: 2,
	lowercase: 256,
	strikethrough: 4,
	subscript: 32,
	superscript: 64,
	underline: 8,
	uppercase: 512
}, en = {
	directionless: 1,
	unmergeable: 2
}, tn = {
	center: 2,
	end: 6,
	justify: 4,
	left: 1,
	right: 3,
	start: 5
}, nn = {
	[Gt]: "center",
	[Yt]: "end",
	[qt]: "justify",
	[Wt]: "left",
	[Kt]: "right",
	[Jt]: "start"
}, rn = {
	normal: 0,
	segmented: 2,
	token: 1
}, an = {
	[Vt]: "normal",
	[Ut]: "segmented",
	[Ht]: "token"
}, on = "$config";
function sn() {
	return G()._blockCursorElement;
}
var cn = class e {
	element;
	before;
	after;
	constructor(e, t, n) {
		this.element = e, this.before = t || null, this.after = n || null;
	}
	withBefore(t) {
		return new e(this.element, t, this.after);
	}
	withAfter(t) {
		return new e(this.element, this.before, t);
	}
	withElement(t) {
		return this.element === t ? this : new e(t, this.before, this.after);
	}
	insertChild(e) {
		let t = this.getInsertionAnchor();
		return t !== null && t.parentElement !== this.element && E(357), this.element.insertBefore(e, t), this;
	}
	removeChild(e) {
		return e.parentElement !== this.element && E(358), this.element.removeChild(e), this;
	}
	replaceChild(e, t) {
		return t.parentElement !== this.element && E(359), this.element.replaceChild(e, t), this;
	}
	getFirstChild() {
		let e = this.getFirstChildAnchor(), t = e ? e.nextSibling : this.element.firstChild;
		return t === this.getInsertionAnchor() ? null : t;
	}
	getFirstChildAnchor() {
		return this.after;
	}
	resolveLeafPosition(e, t, n) {
		if (this.element === e) return t === e && n === 0 ? "before" : "after";
		let r = ln(e, this.element);
		if (r === null) return "after";
		let i = Array.prototype.indexOf.call(e.childNodes, r);
		if (i < 0) return "after";
		if (t === e) return n <= i ? "before" : "after";
		let a = ln(e, t);
		if (a === null) return "after";
		let o = Array.prototype.indexOf.call(e.childNodes, a);
		return o >= 0 && o <= i ? "before" : "after";
	}
	getInsertionAnchor() {
		return this.before;
	}
};
function ln(e, t) {
	let n = t;
	for (; n !== null && n.parentNode !== e;) n = n.parentNode;
	return n;
}
var un = class e extends cn {
	withBefore(t) {
		return new e(this.element, t, this.after);
	}
	withAfter(t) {
		return new e(this.element, this.before, t);
	}
	withElement(t) {
		return this.element === t ? this : new e(t, this.before, this.after);
	}
	getInsertionAnchor() {
		return super.getInsertionAnchor() || this.getManagedLineBreak();
	}
	getFirstChildAnchor() {
		let e = super.getFirstChildAnchor(), t = e ? e.nextSibling : this.element.firstChild;
		return t !== null && t === sn() ? t : e;
	}
	getManagedLineBreak() {
		return this.element.__lexicalLineBreak || null;
	}
	setManagedLineBreak(e) {
		if (this.element.__lexicalLastChildKind = e, e === null) this.removeManagedLineBreak();
		else {
			let t = e === "decorator" && (Bt || Ft || Lt);
			this.insertManagedLineBreak(t);
		}
	}
	removeManagedLineBreak() {
		let e = this.getManagedLineBreak();
		if (e) {
			let t = this.element, n = e.nodeName === "IMG" ? e.nextSibling : null;
			n && t.removeChild(n), t.removeChild(e), t.__lexicalLineBreak = void 0;
		}
	}
	insertManagedLineBreak(e) {
		let t = this.getManagedLineBreak();
		if (t) {
			if (e === (t.nodeName === "IMG")) return;
			this.removeManagedLineBreak();
		}
		let n = this.element, r = this.before, i = document.createElement("br");
		if (n.insertBefore(i, r), e) {
			let e = document.createElement("img");
			e.setAttribute("data-lexical-linebreak", "true"), e.style.setProperty("display", "inline", "important"), e.style.setProperty("border", "0px", "important"), e.style.setProperty("margin", "0px", "important"), e.alt = "", n.insertBefore(e, i), n.__lexicalLineBreak = e;
		} else n.__lexicalLineBreak = i;
	}
	getFirstChildOffset() {
		let e = this.getFirstChild(), t = this.getInsertionAnchor(), n = 0;
		for (let r = this.element.firstChild; r !== null && r !== e && r !== t; r = r.nextSibling) n++;
		return n;
	}
	resolveChildIndex(e, t, n, r) {
		if (n === this.element) {
			let t = this.getFirstChildOffset(), n = sn(), i = this.element.childNodes, a = Math.min(r, i.length), o = 0;
			for (let e = t; e < a; e++) i[e] !== n && o++;
			return [e, Math.min(o, e.getChildrenSize())];
		}
		let i = dn(t, n);
		i.push(r);
		let a = dn(t, this.element), o = e.getIndexWithinParent();
		for (let e = 0; e < a.length; e++) {
			let t = i[e], n = a[e];
			if (t === void 0 || t < n) break;
			if (t > n) {
				o += 1;
				break;
			}
		}
		return [e.getParentOrThrow(), o];
	}
};
function dn(e, t) {
	let n = [], r = t;
	for (; r !== e && r !== null; r = r.parentNode) {
		let e = 0;
		for (let t = r.previousSibling; t !== null; t = t.previousSibling) e++;
		n.push(e);
	}
	return r !== e && E(225), n.reverse();
}
var fn;
try {
	fn = "0.45.0+prod.esm";
} catch {}
var pn = fn ?? "0.45.0+source", mn = class {
	_front = /* @__PURE__ */ new Set();
	_back = /* @__PURE__ */ new Set();
	_cache;
	get size() {
		return this._front.size + this._back.size;
	}
	addBack(e) {
		return delete this._cache, this._front.has(e) || this._back.add(e), this;
	}
	addFront(e) {
		return delete this._cache, this._back.has(e) || this._front.add(e), this;
	}
	delete(e) {
		return delete this._cache, this._front.delete(e) || this._back.delete(e);
	}
	toArray() {
		let e = Array.from(this._front).reverse();
		for (let t of this._back) e.push(t);
		return e;
	}
	toReadonlyArray() {
		return this._cache = this._cache || this.toArray(), this._cache;
	}
	[Symbol.iterator]() {
		return this.toReadonlyArray()[Symbol.iterator]();
	}
}, hn = null;
function gn(e, t = 1e3) {
	return e instanceof _n ? e.clone() : e.size < t ? new Map(e) : new _n().init(new Map(e), void 0, e.size);
}
var _n = class e {
	_mutable = !1;
	_old = void 0;
	_nursery = void 0;
	_size = 0;
	clone() {
		return this._mutable = !1, new e().init(this._old, this._nursery, this._size);
	}
	init(e, t, n) {
		return this._old = e, this._nursery = t, this._size = n, this;
	}
	get size() {
		return this._size;
	}
	has(e) {
		return this.get(e) !== void 0;
	}
	getWithTombstone(e) {
		let t = this._nursery && this._nursery.get(e);
		return t === void 0 ? this._old && this._old.get(e) : t;
	}
	get(e) {
		let t = this.getWithTombstone(e);
		return t === hn ? void 0 : t;
	}
	shouldCompact() {
		return this._nursery !== void 0 && 2 * this._nursery.size > this._size;
	}
	getNursery() {
		return this._mutable && this._nursery || (this.compact(), this._nursery = new Map(this._nursery), this._mutable = !0), this._nursery;
	}
	compact(e = !1) {
		if (this._nursery && this._nursery.size > 0 && (e || this.shouldCompact())) {
			let e = new Map(this._old);
			for (let [t, n] of this._nursery) n === hn ? e.delete(t) : e.set(t, n);
			this._old = e, this._nursery = void 0;
		}
		return this._mutable = !1, this;
	}
	set(e, t) {
		let n = this.getWithTombstone(e);
		if (n === t) return this;
		let r = this.getNursery();
		return n !== hn && n !== void 0 || (this._size++, n === hn && r.delete(e)), r.set(e, t), this;
	}
	delete(e) {
		let t = this.has(e);
		return t && (this.getNursery().set(e, hn), this._size--), t;
	}
	getOrInsert(e, t) {
		let n = this.get(e);
		return n === void 0 ? (this.set(e, t), t) : n;
	}
	getOrInsertComputed(e, t) {
		let n = this.get(e);
		if (n !== void 0) return n;
		let r = t(e);
		return this.set(e, r), r;
	}
	clear() {
		this._mutable = !1, this._old = void 0, this._nursery = void 0, this._size = 0;
	}
	*keys() {
		for (let e of this.entries()) yield e[0];
	}
	*values() {
		for (let e of this.entries()) yield e[1];
	}
	*entries() {
		let e = this._nursery, t = this._old;
		if (t) for (let n of t) {
			let t = n[0], r = e ? e.get(t) : void 0;
			r !== hn && (r !== void 0 && (n[1] = r), yield n);
		}
		if (e) for (let n of e) n[1] === hn || t && t.has(n[0]) || (yield n);
	}
	forEach(e, t) {
		t !== void 0 && (e = e.bind(t));
		for (let [t, n] of this.entries()) e(n, t, this);
	}
	get [Symbol.toStringTag]() {
		return "GenMap";
	}
	[Symbol.iterator]() {
		return this.entries();
	}
};
function vn(e, t, n, r, i, a) {
	let o = e.getFirstChild();
	for (; o !== null;) {
		let e = o.__key;
		o.__parent === t && (L(o) && vn(o, e, n, r, i, a), n.has(e) || a.delete(e), i.push(e)), o = o.getNextSibling();
	}
}
var yn = !1, bn = 0;
function xn(e) {
	bn = e.timeStamp;
}
function Sn(e, t, n) {
	let r = e.nodeName === "BR", i = t.__lexicalLineBreak;
	return i && (e === i || r && e.previousSibling === i) || r && Zs(e, n) !== void 0;
}
function Cn(e, t, n) {
	let r = Rc(kc(n)), i = null, a = null;
	r !== null && r.anchorNode === e && (i = r.anchorOffset, a = r.focusOffset);
	let o = e.nodeValue;
	o !== null && lc(t, o, i, a, !1);
}
function wn(e, t, n) {
	if (P(e)) {
		let t = e.anchor.getNode();
		if (t.is(n) && e.format !== t.getFormat()) return !1;
	}
	return Bs(t) && n.isAttached();
}
function Tn(e, t, n, r) {
	for (let i = e; i && !ol(i); i = Cc(i)) {
		let e = Zs(i, t);
		if (e !== void 0) {
			let t = B(e, n);
			if (t) return R(t) || !W(i) ? void 0 : [i, t];
		} else if (i === r) return [r, tc(n)];
	}
}
function En(e, t, n) {
	yn = !0;
	let r = performance.now() - bn > 100;
	try {
		is(e, () => {
			let i = F() || function(e) {
				return e.getEditorState().read(() => {
					let e = F();
					return e === null ? null : e.clone();
				});
			}(e), a = /* @__PURE__ */ new Map(), o = e.getRootElement(), s = e._editorState, c = e._blockCursorElement, l = !1, u = "";
			for (let n = 0; n < t.length; n++) {
				let d = t[n], f = d.type, p = d.target, m = Tn(p, e, s, o);
				if (!m) continue;
				let [h, g] = m;
				if (f === "characterData") r && N(g) && Bs(p) && wn(i, p, g) && Cn(p, g, e);
				else if (f === "childList") {
					l = !0;
					let t = d.addedNodes;
					for (let n = 0; n < t.length; n++) {
						let r = t[n], i = Xs(r), a = r.parentNode;
						if (a != null && r !== c && i === null && !Sn(r, a, e) && !ol(r)) {
							if (Nt) {
								let e = (W(r) ? r.innerText : null) || r.nodeValue;
								e && (u += e);
							}
							a.removeChild(r);
						}
					}
					let n = d.removedNodes, r = n.length;
					if (r > 0) {
						let t = 0;
						for (let i = 0; i < r; i++) {
							let r = n[i];
							(Sn(r, p, e) || c === r) && (p.appendChild(r), t++);
						}
						r !== t && a.set(h, g);
					}
				}
			}
			if (a.size > 0) for (let [t, n] of a) n.reconcileObservedMutation(t, e);
			let d = n.takeRecords();
			if (d.length > 0) {
				for (let t = 0; t < d.length; t++) {
					let n = d[t], r = n.addedNodes, i = n.target;
					for (let t = 0; t < r.length; t++) {
						let n = r[t], a = n.parentNode;
						a == null || n.nodeName !== "BR" || Sn(n, i, e) || a.removeChild(n);
					}
				}
				n.takeRecords();
			}
			i !== null && (l && nc(i), Nt && xc(e) && i.insertRawText(u));
		});
	} finally {
		yn = !1;
	}
}
function Dn(e) {
	let t = e._observer;
	t !== null && En(e, t.takeRecords(), t);
}
function On(e) {
	(function(e) {
		bn === 0 && kc(e).addEventListener("textInput", xn, !0);
	})(e), e._observer = new MutationObserver((t, n) => {
		En(e, t, n);
	});
}
var kn = class {
	key;
	parse;
	unparse;
	isEqual;
	defaultValue;
	resetOnCopyNode;
	constructor(e, t) {
		this.key = e, this.parse = t.parse.bind(t), this.unparse = (t.unparse || In).bind(t), this.isEqual = (t.isEqual || Object.is).bind(t), this.defaultValue = this.parse(void 0), this.resetOnCopyNode = t.resetOnCopyNode || !1;
	}
};
function An(e, t) {
	return new kn(e, t);
}
function jn(e) {
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set();
	for (let r = typeof e == "function" ? e : e.replace; r.prototype && r.prototype.getType !== void 0; r = Object.getPrototypeOf(r)) {
		let { ownNodeConfig: e } = cl(r);
		if (e && e.stateConfigs) for (let r of e.stateConfigs) {
			let e;
			"stateConfig" in r ? (e = r.stateConfig, r.flat && n.add(e.key)) : e = r, t.set(e.key, e);
		}
	}
	return {
		flatKeys: n,
		sharedConfigMap: t
	};
}
var Mn = class e {
	node;
	knownState;
	unknownState;
	sharedNodeState;
	size;
	constructor(e, t, n = void 0, r = /* @__PURE__ */ new Map(), i = void 0) {
		this.node = e, this.sharedNodeState = t, this.unknownState = n, this.knownState = r;
		let { sharedConfigMap: a } = this.sharedNodeState, o = i === void 0 ? function(e, t, n) {
			let r = n.size;
			if (t) for (let i in t) {
				let t = e.get(i);
				t && n.has(t) || r++;
			}
			return r;
		}(a, n, r) : i;
		this.size = o;
	}
	getValue(e) {
		let t = this.knownState.get(e);
		if (t !== void 0) return t;
		this.sharedNodeState.sharedConfigMap.set(e.key, e);
		let n = e.defaultValue;
		if (this.unknownState && e.key in this.unknownState) {
			let t = this.unknownState[e.key];
			t !== void 0 && (n = e.parse(t)), this.updateFromKnown(e, n);
		}
		return n;
	}
	getInternalState() {
		return [this.unknownState, this.knownState];
	}
	toJSON() {
		let e = { ...this.unknownState }, t = {};
		for (let [t, n] of this.knownState) t.isEqual(n, t.defaultValue) ? delete e[t.key] : e[t.key] = t.unparse(n);
		for (let n of this.sharedNodeState.flatKeys) n in e && (t[n] = e[n], delete e[n]);
		return Fn(e) && (t.$ = e), t;
	}
	getWritable(t) {
		if (this.node === t) return this;
		let { sharedNodeState: n, unknownState: r } = this, i = new Map(this.knownState);
		return new e(t, n, function(e, t, n) {
			let r;
			if (n) for (let [i, a] of Object.entries(n)) {
				let n = e.get(i);
				n ? t.has(n) || t.set(n, n.parse(a)) : (r ||= {}, r[i] = a);
			}
			return r;
		}(n.sharedConfigMap, i, r), i, this.size);
	}
	resetOnCopyNode() {
		for (let e of this.knownState.keys()) e.resetOnCopyNode && this.knownState.set(e, e.defaultValue);
		return this;
	}
	updateFromKnown(e, t) {
		let n = e.key;
		this.sharedNodeState.sharedConfigMap.set(n, e);
		let { knownState: r, unknownState: i } = this;
		r.has(e) || i && n in i || (i && (delete i[n], this.unknownState = Fn(i)), this.size++), r.set(e, t);
	}
	updateFromUnknown(e, t) {
		let n = this.sharedNodeState.sharedConfigMap.get(e);
		n ? this.updateFromKnown(n, n.parse(t)) : (this.unknownState = this.unknownState || {}, e in this.unknownState || this.size++, this.unknownState[e] = t);
	}
	updateFromJSON(e) {
		let { knownState: t } = this;
		for (let e of t.keys()) t.set(e, e.defaultValue);
		if (this.size = t.size, this.unknownState = void 0, e) for (let [t, n] of Object.entries(e)) this.updateFromUnknown(t, n);
	}
};
function Nn(e) {
	let t = e.getWritable(), n = t.__state ? t.__state.getWritable(t) : new Mn(t, Pn(t));
	return t.__state = n, n;
}
function Pn(e) {
	return e.__state ? e.__state.sharedNodeState : ks(G(), e.getType()).sharedNodeState;
}
function Fn(e) {
	if (e) for (let t in e) return e;
}
function In(e) {
	return e;
}
function Ln(e, t, n) {
	for (let [r, i] of t.knownState) {
		if (e.has(r.key)) continue;
		e.add(r.key);
		let t = n ? n.getValue(r) : r.defaultValue;
		if (t !== i && !r.isEqual(t, i)) return !0;
	}
	return !1;
}
function Rn(e, t, n) {
	let { unknownState: r } = t, i = n ? n.unknownState : void 0;
	if (r) {
		for (let [t, n] of Object.entries(r)) if (!e.has(t) && (e.add(t), n !== (i ? i[t] : void 0))) return !0;
	}
	return !1;
}
function zn(e, t) {
	let n = e.__state;
	return n && n.node === e ? n.getWritable(t) : n;
}
function Bn(e, t) {
	let n = e.__mode, r = e.__format, i = e.__style, a = t.__mode, o = t.__format, s = t.__style, c = e.__state, l = t.__state;
	return (n === null || n === a) && (r === null || r === o) && (i === null || i === s) && (e.__state === null || c === l || function(e, t) {
		if (e === t) return !0;
		let n = /* @__PURE__ */ new Set();
		return !(e && Ln(n, e, t) || t && Ln(n, t, e) || e && Rn(n, e, t) || t && Rn(n, t, e));
	}(c, l));
}
function Vn(e, t) {
	let n = e.mergeWithSibling(t), r = I()._normalizedNodes;
	return r.add(e.__key), r.add(t.__key), n;
}
function Hn(e) {
	let t, n, r = e;
	if (r.__text !== "" || !r.isSimpleText() || r.isUnmergeable()) {
		for (; (t = r.getPreviousSibling()) !== null && N(t) && t.isSimpleText() && !t.isUnmergeable();) {
			if (t.__text !== "") {
				if (Bn(t, r)) {
					r = Vn(t, r);
					break;
				}
				break;
			}
			t.remove();
		}
		for (; (n = r.getNextSibling()) !== null && N(n) && n.isSimpleText() && !n.isUnmergeable();) {
			if (n.__text !== "") {
				if (Bn(r, n)) {
					r = Vn(r, n);
					break;
				}
				break;
			}
			n.remove();
		}
	} else r.remove();
}
function Un(e) {
	return Wn(e.anchor), Wn(e.focus), e;
}
function Wn(e) {
	for (; e.type === "element";) {
		let t = e.getNode(), n = e.offset, r, i;
		if (n === t.getChildrenSize() ? (r = t.getChildAtIndex(n - 1), i = !0) : (r = t.getChildAtIndex(n), i = !1), N(r)) {
			e.set(r.__key, i ? r.getTextContentSize() : 0, "text", !0);
			break;
		}
		if (!L(r)) break;
		e.set(r.__key, i ? r.getChildrenSize() : 0, "element", !0);
	}
}
var Gn = Symbol.for("@lexical/CachedTextSize");
function Kn(e, t) {
	return or.read(() => {
		let n = 0, r = e;
		for (let e = 0; e < t && r !== null; e++) {
			let i = ar.get(r);
			if (i === void 0 && E(345, r), L(i)) {
				let a = j.get(r);
				if (a !== void 0 && L(a) && a.__parent !== i.__parent) n += i.getTextContentSize();
				else {
					let e = sr.get(r), t = e && e.__lexicalTextContent;
					typeof t != "string" && E(346, i.getType()), n += t.length;
				}
				e < t - 1 && !i.isInline() && (n += 2);
			} else {
				let e = i[Gn];
				e === void 0 && E(347, i.getType(), r), n += e;
			}
			r = i.__next;
		}
		return n;
	}, { editor: O });
}
function qn(e) {
	L(e) || e[Gn] === void 0 && (e[Gn] = N(e) ? e.__text.length : e.getTextContentSize());
}
var Jn = 4, Yn, O, Xn, k = "", A = null, Zn = null, Qn = null;
function $n() {
	return {
		firstTextKey: Qn,
		format: A,
		style: Zn
	};
}
function er(e) {
	e.firstTextKey !== null && (A = e.format, Zn = e.style, Qn = e.firstTextKey);
}
function tr(e) {
	if (Qn !== null) return;
	let t = e.__lexicalFirstTextKey;
	if (t === void 0 && E(348), t === null) return;
	let n = j.get(t);
	N(n) && (A = n.getFormat(), Zn = n.getStyle(), Qn = t);
}
var nr, rr, ir, ar, or, j, sr, cr, lr, ur, dr = !1, fr = !1;
function pr(e, t) {
	let n = ar.get(e), r = j.has(e);
	if (t !== null) {
		let n = Ar(e);
		n.parentNode === t && t.removeChild(n);
	}
	if (!r) {
		if (O._keyToDOMMap.delete(e), L(n)) {
			let e = dl(n, ar);
			mr(e, 0, e.length - 1, null);
		}
		n !== void 0 && vc(lr, Xn, nr, n, "destroyed");
	}
}
function mr(e, t, n, r) {
	for (let i = t; i <= n; ++i) {
		let t = e[i];
		t !== void 0 && pr(t, r);
	}
}
function hr(e, t) {
	e.setProperty("text-align", t);
}
var gr = "40px";
function _r(e, t) {
	let n = Yn.theme.indent;
	if (typeof n == "string") {
		let r = e.classList.contains(n);
		t > 0 && !r ? e.classList.add(n) : t < 1 && r && e.classList.remove(n);
	}
	e.style.setProperty("padding-inline-start", t === 0 ? "" : `calc(${t} * var(--lexical-indent-base-value, ${gr}))`);
}
function vr(e, t) {
	let n = e.style;
	t === 0 ? hr(n, "") : t === 1 ? hr(n, "left") : t === 2 ? hr(n, "center") : t === 3 ? hr(n, "right") : t === 4 ? hr(n, "justify") : t === 5 ? hr(n, "start") : t === 6 && hr(n, "end");
}
function yr(e, t) {
	let n = function(e) {
		let t = e.__dir;
		if (t !== null) return t;
		if (ls(e)) return null;
		let n = e.getParentOrThrow();
		return jc(n) && n.__dir === null ? "auto" : null;
	}(t);
	n === null ? e.removeAttribute("dir") : e.dir = n;
}
function br(e, t) {
	let n = j.get(e);
	if (n === void 0 && E(60), t !== null) {
		let r = ar.get(e);
		if (r !== void 0 && r.__parent !== n.__parent) {
			let n = sr.get(e);
			if (n !== void 0) return t.insertChild(n), Tr(e, t.element);
		}
	}
	let r = ur.$createDOM(n, O);
	if (function(e, t, n) {
		let r = n._keyToDOMMap;
		(function(e, t, n) {
			let r = `__lexicalKey_${t._key}`;
			e[r] = n;
		})(t, n, e), r.set(e, t);
	}(e, r, O), N(n) ? r.setAttribute("data-lexical-text", "true") : R(n) && r.setAttribute("data-lexical-decorator", "true"), L(n)) {
		let e = n.__indent, t = n.__size;
		if (yr(r, n), e !== 0 && _r(r, e), t === 0) r.__lexicalTextContent = "", r.__lexicalFirstTextKey = null;
		else {
			let e = t - 1;
			xr(dl(n, j), n, 0, e, Yc(n, r, O));
		}
		let i = n.__format;
		i !== 0 && vr(r, i), n.isInline() || Sr(null, n, r);
	} else {
		let t = n.getTextContent();
		if (R(n)) {
			let t = n.decorate(O, Yn);
			t !== null && Er(e, t), r.contentEditable = "false";
		}
		k += t;
	}
	return t !== null && t.insertChild(r), ur.$decorateDOM(n, null, r, O), qn(n), vc(lr, Xn, nr, n, "created"), r;
}
function xr(e, t, n, r, i) {
	let a = k, o = $n();
	k = "", A = null, Zn = null, Qn = null;
	let s = n;
	for (; s <= r; ++s) {
		let t = $n();
		br(e[s], i);
		let n = j.get(e[s]);
		n !== null && N(n) ? A === null && (A = n.getFormat(), Zn = n.getStyle(), Qn = n.__key) : L(n) && s < r && !n.isInline() && (k += Zt), er(t);
	}
	let c = O._keyToDOMMap.get(t.__key);
	c === void 0 && E(349, t.__key), c.__lexicalTextContent = k, c.__lexicalFirstTextKey = Qn, k = a + k, er(o);
}
function Sr(e, t, n) {
	let r = Yc(t, n, O), i = r.element.__lexicalLastChildKind ?? null, a = function(e, t) {
		if (e) {
			let n = e.__last;
			if (n) {
				let e = t.get(n);
				if (e) return Aa(e) ? "line-break" : R(e) && e.isInline() ? "decorator" : null;
			}
			return "empty";
		}
		return null;
	}(t, j);
	i !== a && r.setManagedLineBreak(a);
}
function Cr(e, t, n) {
	var r;
	A = null, Zn = null, Qn = null, function(e, t, n) {
		let r = k, i = e.__size, a = t.__size;
		k = "";
		let o = n.element, s = O._keyToDOMMap.get(t.__key);
		s === void 0 && E(351, t.__key);
		let c = a - i;
		if (!dr && Math.abs(c) <= 1 && i >= Jn && e.__first === t.__first && (c !== 0 || !O._cloneNotNeeded.has(e.__key))) {
			let i = s.__lexicalTextContent, l = cr.get(e.__key);
			if (!dr && typeof i == "string" && l !== void 0) {
				let a = function(e, t) {
					let n = t.size;
					if (n === 0 || n >= e.__size) return null;
					let r = e.__last, i = null, a = 0;
					for (; r !== null && a < n;) {
						if (!t.has(r)) return null;
						i = r;
						let e = j.get(r);
						if (e === void 0) return null;
						r = e.__prev, a++;
					}
					return a !== n || r !== null && t.has(r) ? null : i;
				}(t, l);
				if (a !== null) {
					let u = l.size;
					if (c === 0) {
						let e = Kn(a, u), n = a, c = 0;
						for (; n !== null && c < u;) {
							let e = j.get(n);
							if (e === void 0) break;
							let t = $n();
							Tr(n, o), N(e) && A === null && (A = e.getFormat(), Zn = e.getStyle(), Qn = e.__key), er(t), n = e.__next, c++;
						}
						let d = "";
						for (n = a, c = 0; n !== null && c < u;) {
							let e = j.get(n);
							if (e === void 0) break;
							let t;
							if (L(e)) {
								let r = O._keyToDOMMap.get(n), i = r && r.__lexicalTextContent;
								typeof i != "string" && E(352, e.getType()), t = i;
							} else t = e.getTextContent();
							d += t, c < u - 1 && L(e) && !e.isInline() && (d += Zt), n = e.__next, c++;
						}
						let f = i.slice(0, i.length - e) + d;
						s.__lexicalTextContent = f, k = r + f, wr(t, s, l);
						return;
					}
					if (function(e, t, n, r, i, a, o, s) {
						if (s !== 1 && s !== -1 || o !== (s === 1 ? 2 : 1)) return !1;
						let c = o - s, l = e.__last;
						for (let e = 0; e < c - 1; e++) {
							if (l === null) return !1;
							let e = ar.get(l);
							if (e === void 0) return !1;
							l = e.__prev;
						}
						if (l === null) return !1;
						let u = j.get(a), d = ar.get(l);
						if (u === void 0 || d === void 0 || u.__prev !== d.__prev) return !1;
						let f = [], p = a;
						for (let e = 0; e < o; e++) {
							if (p === null) return !1;
							f.push(p);
							let e = j.get(p);
							p = e ? e.__next : null;
						}
						let m = [];
						p = l;
						for (let e = 0; e < c; e++) {
							if (p === null) return !1;
							m.push(p);
							let e = ar.get(p);
							p = e ? e.__next : null;
						}
						let h = new Set(m), g = new Set(f), _ = [], v = 0, y = 0;
						for (; v < c && y < o;) if (f[y] === m[v]) _.push({
							key: f[y],
							kind: "reconcile"
						}), v++, y++;
						else if (g.has(m[v])) {
							if (h.has(f[y])) return !1;
							_.push({
								key: f[y],
								kind: "create",
								nextIndex: y
							}), y++;
						} else _.push({
							key: m[v],
							kind: "destroy"
						}), v++;
						for (; v < c;) _.push({
							key: m[v++],
							kind: "destroy"
						});
						for (; y < o;) _.push({
							key: f[y],
							kind: "create",
							nextIndex: y
						}), y++;
						let b = Kn(l, c);
						for (let e of _) {
							let t = $n();
							if (e.kind === "reconcile") Tr(e.key, n.element);
							else if (e.kind === "destroy") pr(e.key, n.element);
							else {
								let t = null;
								for (let n = e.nextIndex + 1; n < o; n++) {
									let e = O._keyToDOMMap.get(f[n]);
									if (e !== void 0) {
										t = e;
										break;
									}
								}
								br(e.key, n.withBefore(t ?? n.before));
							}
							if (e.kind !== "destroy") {
								let t = j.get(e.key);
								t && N(t) && A === null && (A = t.getFormat(), Zn = t.getStyle(), Qn = t.__key);
							}
							er(t);
						}
						let x = "";
						for (let e = 0; e < o; e++) {
							let t = j.get(f[e]);
							if (t === void 0) return !1;
							let n;
							if (L(t)) {
								let r = O._keyToDOMMap.get(f[e]), i = r && r.__lexicalTextContent;
								typeof i != "string" && E(350, t.getType()), n = i;
							} else n = t.getTextContent();
							x += n, e < o - 1 && L(t) && !t.isInline() && (x += Zt);
						}
						return r.__lexicalTextContent = i.slice(0, i.length - b) + x, !0;
					}(e, 0, n, s, i, a, u, c)) {
						let e = s.__lexicalTextContent;
						typeof e != "string" && E(353), k = r + e, wr(t, s, l);
						return;
					}
				}
			}
			if (c === 0) {
				let t = e.__first, n = 0;
				for (; t !== null;) {
					let e = j.get(t);
					if (e === void 0) break;
					let r = dr || ir.has(t) || rr.has(t), i = $n();
					if (r) Tr(t, o);
					else {
						let n, r;
						if (L(e)) {
							r = sr.get(t);
							let i = r && r.__lexicalTextContent;
							typeof i != "string" && E(354, e.getType()), n = i;
						} else n = e.getTextContent();
						k += n, r !== void 0 && tr(r);
					}
					N(e) ? A === null && (A = e.getFormat(), Zn = e.getStyle(), Qn = e.__key) : L(e) && n < a - 1 && !e.isInline() && (k += Zt), er(i), t = e.__next, n++;
				}
				s.__lexicalTextContent = k, s.__lexicalFirstTextKey = Qn, k = r + k;
				return;
			}
		}
		if (i === 1 && a === 1) {
			let r = e.__first, i = t.__first;
			if (r === i) Tr(r, o);
			else {
				let e = Ar(r), t = br(i, null);
				try {
					e.parentNode === o ? o.replaceChild(t, e) : n.insertChild(t);
				} catch (n) {
					if (typeof n == "object" && n) {
						let a = `${n.toString()} Parent: ${o.tagName}, new child: {tag: ${t.tagName} key: ${i}}, old child: {tag: ${e.tagName}, key: ${r}}.`;
						throw Error(a);
					}
					throw n;
				}
				pr(r, null);
			}
			let a = j.get(i);
			N(a) && A === null && (A = a.getFormat(), Zn = a.getStyle(), Qn = a.__key);
		} else {
			let r = dl(e, ar), s = dl(t, j);
			if (r.length !== i && E(227), s.length !== a && E(228), i === 0) a !== 0 && xr(s, t, 0, a - 1, n);
			else if (a === 0) {
				if (i !== 0) {
					let e = n.after == null && n.before == null && n.element.__lexicalLineBreak == null;
					mr(r, 0, i - 1, e ? null : o), e && (o.textContent = "");
				}
			} else (function(e, t, n, r, i, a) {
				let o = r - 1, s = i - 1, c, l, u = a.getFirstChild(), d = 0, f = 0;
				for (; d <= o && f <= s;) {
					let e = t[d], r = n[f], i = $n();
					if (e === r) u = Dr(Tr(r, a.element)), d++, f++;
					else {
						if (l === void 0 && (l = Or(n, f)), c === void 0) c = Or(t, d);
						else if (!c.has(e)) {
							d++, er(i);
							continue;
						}
						if (!l.has(e)) {
							u = Dr(Ar(e)), pr(e, a.element), d++, c.delete(e), er(i);
							continue;
						}
						if (c.has(r)) {
							let e = Sc(O, r);
							e !== u && a.withBefore(u ?? a.before).insertChild(e), u = Dr(Tr(r, a.element)), d++, f++;
						} else br(r, a.withBefore(u ?? a.before)), f++;
					}
					let o = j.get(r);
					o !== null && N(o) ? A === null && (A = o.getFormat(), Zn = o.getStyle(), Qn = o.__key) : L(o) && f <= s && !o.isInline() && (k += Zt), er(i);
				}
				let p = d > o, m = f > s;
				if (p && !m) {
					let t = n[s + 1], r = t === void 0 ? null : O.getElementByKey(t);
					xr(n, e, f, s, a.withBefore(r ?? a.before));
				} else m && !p && mr(t, d, o, a.element);
			})(t, r, s, i, a, n);
		}
		s.__lexicalTextContent = k, s.__lexicalFirstTextKey = Qn, k = r + k;
	}(e, t, Yc(t, n, O)), jc(t) || (r = t, A == null || A === r.__textFormat || fr || r.setTextFormat(A), function(e) {
		Zn == null || Zn === e.__textStyle || fr || e.setTextStyle(Zn);
	}(t));
}
function wr(e, t, n) {
	let r = t.__lexicalFirstTextKey;
	if (r != null) {
		let t = e.__key, i = r;
		for (; i !== null;) {
			let e = j.get(i);
			if (e === void 0) {
				i = null;
				break;
			}
			if (e.__parent === t) break;
			i = e.__parent;
		}
		if (i !== null && !n.has(i)) {
			let e = j.get(r);
			if (N(e)) return A = e.getFormat(), void (Zn = e.getStyle());
		}
	}
	t.__lexicalFirstTextKey = Qn;
}
function Tr(e, t) {
	let n = ar.get(e), r = j.get(e);
	n !== void 0 && r !== void 0 || E(61);
	let i = dr || ir.has(e) || rr.has(e), a = Sc(O, e);
	if (n === r && !i) {
		let e;
		if (L(n)) {
			let t = a.__lexicalTextContent;
			typeof t != "string" && E(355, n.getType()), e = t, tr(a);
		} else e = n.getTextContent();
		return k += e, a;
	}
	if (n !== r && i && vc(lr, Xn, nr, r, "updated"), ur.$updateDOM(r, n, a, O)) {
		let n = br(e, null);
		return t === null && E(62), t.replaceChild(n, a), pr(e, null), n;
	}
	if (L(n)) {
		L(r) || E(334, e);
		let t = r.__indent;
		(dr || t !== n.__indent) && _r(a, t);
		let o = r.__format;
		if ((dr || o !== n.__format) && vr(a, o), i) Cr(n, r, a), ls(r) || r.isInline() || Sr(0, r, a);
		else {
			let e = a.__lexicalTextContent;
			typeof e != "string" && E(356, n.getType()), k += e, tr(a);
		}
		if ((dr || r.__dir !== n.__dir || r.__parent !== n.__parent) && (yr(a, r), ls(r) && !dr)) for (let e of r.getChildren()) L(e) && yr(Sc(O, e.getKey()), e);
	} else {
		let t = r.getTextContent();
		if (R(r)) {
			let t = r.decorate(O, Yn);
			t !== null && Er(e, t);
		}
		k += t;
	}
	if (!fr && ls(r)) {
		let e = r.getLatest();
		if (e.__cachedText !== k) {
			let t = e.getWritable();
			t.__cachedText = k, r = t;
		}
	}
	return ur.$decorateDOM(r, n, a, O), qn(r), a;
}
function Er(e, t) {
	let n = O._pendingDecorators, r = O._decorators;
	if (n === null) {
		if (r[e] === t) return;
		n = $s(O);
	}
	n[e] = t;
}
function Dr(e) {
	let t = e.nextSibling;
	return t !== null && t === O._blockCursorElement && (t = t.nextSibling), t;
}
function Or(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r = t; r < e.length; r++) n.add(e[r]);
	return n;
}
function kr(e, t, n, r, i, a) {
	k = "", A = null, Zn = null, Qn = null, dr = r === 2, O = n, Yn = n._config, ur = n._config.dom || xs, Xn = n._nodes, nr = O._listeners.mutation, rr = i, ir = a, ar = e._nodeMap, or = e, j = t._nodeMap, fr = t._readOnly, sr = gn(n._keyToDOMMap), cr = function() {
		let e = /* @__PURE__ */ new Map(), t = (t) => {
			for (let n of t) {
				let t = j.get(n);
				if (t === void 0) continue;
				let r = t.__parent;
				if (r === null) continue;
				let i = e.get(r);
				i === void 0 && (i = /* @__PURE__ */ new Set(), e.set(r, i)), i.add(n);
			}
		};
		return t(rr.keys()), t(ir), e;
	}();
	let o = /* @__PURE__ */ new Map();
	return lr = o, Tr("root", null), O = void 0, Xn = void 0, rr = void 0, ir = void 0, ar = void 0, or = void 0, j = void 0, Yn = void 0, sr = void 0, cr = void 0, lr = void 0, ur = xs, o;
}
function Ar(e) {
	let t = sr.get(e);
	return t === void 0 && E(75, e), t;
}
function M(e) {
	return { type: e };
}
var jr = M("SELECTION_CHANGE_COMMAND"), Mr = M("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"), Nr = M("CLICK_COMMAND"), Pr = M("BEFORE_INPUT_COMMAND"), Fr = M("INPUT_COMMAND"), Ir = M("COMPOSITION_START_COMMAND"), Lr = M("COMPOSITION_END_COMMAND"), Rr = M("DELETE_CHARACTER_COMMAND"), zr = M("INSERT_LINE_BREAK_COMMAND"), Br = M("INSERT_PARAGRAPH_COMMAND"), Vr = M("CONTROLLED_TEXT_INSERTION_COMMAND"), Hr = M("PASTE_COMMAND"), Ur = M("REMOVE_TEXT_COMMAND"), Wr = M("DELETE_WORD_COMMAND"), Gr = M("DELETE_LINE_COMMAND"), Kr = M("FORMAT_TEXT_COMMAND"), qr = M("UNDO_COMMAND"), Jr = M("REDO_COMMAND"), Yr = M("KEYDOWN_COMMAND"), Xr = M("KEY_ARROW_RIGHT_COMMAND"), Zr = M("MOVE_TO_END"), Qr = M("KEY_ARROW_LEFT_COMMAND"), $r = M("MOVE_TO_START"), ei = M("KEY_ARROW_UP_COMMAND"), ti = M("KEY_ARROW_DOWN_COMMAND"), ni = M("KEY_ENTER_COMMAND"), ri = M("KEY_SPACE_COMMAND"), ii = M("KEY_BACKSPACE_COMMAND"), ai = M("KEY_ESCAPE_COMMAND"), oi = M("KEY_DELETE_COMMAND"), si = M("KEY_TAB_COMMAND"), ci = M("INSERT_TAB_COMMAND"), li = M("INDENT_CONTENT_COMMAND"), ui = M("OUTDENT_CONTENT_COMMAND"), di = M("DROP_COMMAND"), fi = M("FORMAT_ELEMENT_COMMAND"), pi = M("DRAGSTART_COMMAND"), mi = M("DRAGOVER_COMMAND"), hi = M("DRAGEND_COMMAND"), gi = M("COPY_COMMAND"), _i = M("CUT_COMMAND"), vi = M("SELECT_ALL_COMMAND"), yi = M("CLEAR_EDITOR_COMMAND"), bi = M("CLEAR_HISTORY_COMMAND"), xi = M("CAN_REDO_COMMAND"), Si = M("CAN_UNDO_COMMAND"), Ci = M("FOCUS_COMMAND"), wi = M("BLUR_COMMAND"), Ti = M("KEY_MODIFIER_COMMAND"), Ei = Object.freeze({}), Di = [
	["keydown", function(e, t) {
		Oi = e.timeStamp, ki = e.key, e.key !== "Backspace" && Zi(), !t.isComposing() && U(t, Yr, e);
	}],
	["pointerdown", function(e, t) {
		let n = e.target, r = e.pointerType;
		Vc(n) && r !== "touch" && r !== "pen" && e.button === 0 && is(t, () => {
			Ms(n) || (Li = !0);
		});
	}],
	["compositionstart", function(e, t) {
		U(t, Ir, e);
	}],
	["compositionend", function(e, t) {
		Nt ? zi = !0 : Ft || !Lt && !Bt ? U(t, Lr, e) : (Bi = !0, Vi = e.data);
	}],
	["input", function(e, t) {
		e.stopPropagation(), Zi(), is(t, () => {
			t.dispatchCommand(Fr, e);
		}, { event: e }), ji = null;
	}],
	["click", function(e, t) {
		is(t, () => {
			let n = F(), r = Rc(kc(t)), i = bo();
			if (r) {
				if (P(n)) {
					let e = n.anchor, t = e.getNode();
					e.type === "element" && e.offset === 0 && n.isCollapsed() && !ls(t) && V().getChildrenSize() === 1 && t.getTopLevelElementOrThrow().isEmpty() && i !== null && n.is(i) && (r.removeAllRanges(), n.dirty = !0);
				} else if (e.pointerType === "touch" || e.pointerType === "pen") {
					let n = r.anchorNode;
					(W(n) || Bs(n)) && nc(yo(i, r, t, e));
				}
			}
			U(t, Nr, e);
		});
	}],
	["cut", Ei],
	["copy", Ei],
	["dragstart", Ei],
	["dragover", Ei],
	["dragend", Ei],
	["paste", Ei],
	["focus", Ei],
	["blur", Ei],
	["drop", Ei]
];
Pt && Di.push(["beforeinput", (e, t) => function(e, t) {
	let n = e.inputType;
	n === "deleteCompositionText" || Nt && xc(t) || n !== "insertCompositionText" && U(t, Pr, e);
}(e, t)]);
var Oi = 0, ki = null, Ai = 0, ji = null, Mi = !1, Ni = null, Pi = /* @__PURE__ */ new WeakMap(), Fi = /* @__PURE__ */ new WeakMap(), Ii = !1, Li = !1, Ri = !1, zi = !1, Bi = !1, Vi = "", Hi = null, Ui = [
	0,
	"",
	0,
	"root",
	0
];
function Wi(e, t, n, r, i) {
	let a = e.anchor, o = e.focus, s = a.getNode(), c = I(), l = Rc(kc(c)), u = l === null ? null : l.anchorNode, d = a.key, f = c.getElementByKey(d), p = n.length;
	return d !== o.key || !N(s) || (!i && (!Pt || Ai < r + 50) || s.isDirty() && p < 2 || ic(n)) && a.offset !== o.offset && !s.isComposing() || zs(s) || s.isDirty() && p > 1 || (i || !Pt) && f !== null && !s.isComposing() && u !== Zc(s, f, c) || l !== null && t !== null && (!t.collapsed || t.startContainer !== l.anchorNode || t.startOffset !== l.anchorOffset) || !s.isComposing() && (s.getFormat() !== e.format || s.getStyle() !== e.style) || function(e, t) {
		if (t.isSegmented()) return !0;
		if (!e.isCollapsed()) return !1;
		let n = e.anchor.offset, r = t.getParentOrThrow(), i = Rs(t);
		return n === 0 ? !t.canInsertTextBefore() || !r.canInsertTextBefore() && !t.isComposing() || i || function(e) {
			let t = e.getPreviousSibling();
			return (N(t) || L(t) && t.isInline()) && !t.canInsertTextAfter();
		}(t) : n === t.getTextContentSize() && (!t.canInsertTextAfter() || !r.canInsertTextAfter() && !t.isComposing() || i);
	}(e, s);
}
function Gi(e, t) {
	return Bs(e) && e.nodeValue !== null && t !== 0 && t !== e.nodeValue.length;
}
function Ki(e, t, n) {
	let { anchorNode: r, anchorOffset: i, focusNode: a, focusOffset: o } = e;
	Ii && (Ii = !1, Gi(r, i) && Gi(a, o) && !Hi) || is(t, () => {
		if (!n) return void nc(null);
		if (!Ps(t, r, a)) return;
		let s = F();
		if (Hi && P(s) && s.isCollapsed()) {
			let e = s.anchor, t = Hi.anchor;
			(e.key === t.key && e.offset === t.offset + 1 || e.offset === 1 && t.getNode().is(e.getNode().getPreviousSibling())) && (s = Hi.clone(), nc(s));
		}
		if (Hi = null, P(s)) {
			let n = s.anchor, r = n.getNode();
			if (s.isCollapsed()) {
				e.type === "Range" && e.anchorNode === e.focusNode && (s.dirty = !0);
				let i = kc(t).event, a = i ? i.timeStamp : performance.now(), [o, c, l, u, d] = Ui, f = V(), p = !1 === t.isComposing() && f.getTextContent() === "";
				if (a < d + 200 && n.offset === l && n.key === u) qi(s, o, c);
				else if (n.type === "text") N(r) || E(141), Ji(s, r);
				else if (n.type === "element" && !p) {
					L(r) || E(259);
					let e = n.getNode();
					e.isEmpty() ? function(e, t) {
						qi(e, t.getTextFormat(), t.getTextStyle());
					}(s, e) : qi(s, s.format, "");
				}
			} else {
				let e = n.key, t = s.focus.key, r = s.getNodes(), a = r.length, c = s.isBackward(), l = c ? o : i, u = c ? i : o, d = c ? t : e, f = c ? e : t, p = 2047, m = !1;
				for (let e = 0; e < a; e++) {
					let t = r[e], n = t.getTextContentSize();
					if (N(t) && n !== 0 && !(e === 0 && t.__key === d && l === n || e === a - 1 && t.__key === f && u === 0) && (m = !0, p &= t.getFormat(), p === 0)) break;
				}
				s.format = m ? p : 0;
			}
		}
		U(t, jr, void 0);
	});
}
function qi(e, t, n) {
	e.format === t && e.style === n || (e.format = t, e.style = n, e.dirty = !0);
}
function Ji(e, t) {
	qi(e, t.getFormat(), t.getStyle());
}
function Yi(e) {
	if (!e.getTargetRanges) return null;
	let t = e.getTargetRanges();
	return t.length === 0 ? null : t[0];
}
function Xi(e) {
	if (e == null || e.length <= 1 || ki == null) return;
	let t = ki.length === 1 ? ki : ki === "Enter" ? "\n" : ki === "Tab" ? "	" : null;
	if (!t) return;
	let n = F();
	if (!P(n) || !n.isCollapsed()) return;
	let r = n.anchor.getNode();
	if (!N(r)) return;
	let { offset: i } = n.anchor;
	if (r.getTextContentSize() === i) {
		let e = r.getNextSibling();
		if (t === "\n") {
			if (Aa(e)) e.selectEnd();
			else if (!e) {
				let e = ul(r, ho), t = e && e.getNextSibling();
				L(t) && t.selectStart();
			}
		} else t === "	" ? Za(e) && e.selectEnd() : N(e) && e.getTextContent()[0] === t && e.select(1, 1);
	} else r.getTextContent()[i] === t && r.select(i + 1, i + 1);
}
function Zi() {
	Mi = !1, Ni !== null && (clearTimeout(Ni), Ni = null);
}
function Qi() {
	Zi(), Mi = !0, Ni = setTimeout(Zi, 0);
}
function $i(e) {
	let t = e.inputType, n = Yi(e), r = I(), i = F();
	if (t === "insertText" && e.data && Mi) {
		if (Zi(), e.preventDefault(), P(i) && !i.isCollapsed()) {
			let e = i.isBackward() ? i.anchor : i.focus;
			i.anchor.set(e.key, e.offset, e.type), i.focus.set(e.key, e.offset, e.type);
		}
		return !0;
	}
	if (t === "deleteContentBackward") {
		if (i === null) {
			let e = bo();
			if (!P(e)) return !0;
			nc(e.clone());
		}
		if (P(i)) {
			let t = i.anchor.key === i.focus.key;
			if (a = e.timeStamp, ki === "MediaLast" && a < Oi + 30 && r.isComposing() && t) {
				if (Js(null), Oi = 0, setTimeout(() => {
					is(r, () => {
						Js(null);
					});
				}, 30), P(i)) {
					let e = i.anchor.getNode();
					e.markDirty(), N(e) || E(142), Ji(i, e);
				}
			} else {
				if (Js(null), Ft && n !== null && !n.collapsed && (i.applyDOMRange(n), !i.isCollapsed())) return e.preventDefault(), i.removeText(), !0;
				e.preventDefault();
				let a = i.anchor.getNode(), o = a.getTextContent(), s = a.canInsertTextAfter(), c = i.anchor.offset === 0 && i.focus.offset === o.length, l = zt && t && !c && s;
				if (l && i.isCollapsed() && (l = !R(bc(i.anchor, !0))), !l) {
					U(r, Rr, !0);
					let e = F();
					zt && P(e) && e.isCollapsed() && (Hi = e, setTimeout(() => Hi = null));
				}
			}
			return !0;
		}
	}
	var a;
	if (!P(i)) return !0;
	let o = e.data;
	ji !== null && cc(!1, r, ji), i.dirty && ji === null || !i.isCollapsed() || ls(i.anchor.getNode()) || n === null || i.applyDOMRange(n), ji = null;
	let s = i.anchor, c = i.focus, l = s.getNode(), u = c.getNode();
	if (t === "insertText" || t === "insertTranspose") {
		if (o === "\n") e.preventDefault(), U(r, zr, !1);
		else if (o === Zt) e.preventDefault(), U(r, Br, void 0);
		else if (o == null && e.dataTransfer) {
			let t = e.dataTransfer.getData("text/plain");
			e.preventDefault(), i.insertRawText(t);
		} else o != null && Wi(i, n, o, e.timeStamp, !0) ? (e.preventDefault(), U(r, Vr, o), Xi(o)) : ji = o;
		return Ai = e.timeStamp, !0;
	}
	switch (e.preventDefault(), t) {
		case "insertFromYank":
		case "insertFromDrop":
		case "insertReplacementText":
			U(r, Vr, e), Xi((e.dataTransfer ? e.dataTransfer.getData("text/plain") : null) ?? e.data);
			break;
		case "insertFromComposition":
			Js(null), U(r, Vr, e);
			break;
		case "insertLineBreak":
			Js(null), U(r, zr, !1);
			break;
		case "insertParagraph":
			Js(null), Ri && !Ft ? (Ri = !1, U(r, zr, !1)) : U(r, Br, void 0);
			break;
		case "insertFromPaste":
		case "insertFromPasteAsQuotation":
			U(r, Hr, e);
			break;
		case "deleteByComposition":
			(function(e, t) {
				return e !== t || L(e) || L(t) || !Rs(e) || !Rs(t);
			})(l, u) && U(r, Ur, e);
			break;
		case "deleteByDrag":
			Tc(ba), U(r, Ur, e);
			break;
		case "deleteByCut":
			U(r, Ur, e);
			break;
		case "deleteContent":
			U(r, Rr, !1);
			break;
		case "deleteWordBackward":
			U(r, Wr, !0);
			break;
		case "deleteWordForward":
			U(r, Wr, !1);
			break;
		case "deleteHardLineBackward":
		case "deleteSoftLineBackward":
			U(r, Gr, !0);
			break;
		case "deleteContentForward":
		case "deleteHardLineForward":
		case "deleteSoftLineForward":
			U(r, Gr, !1);
			break;
		case "formatStrikeThrough":
			U(r, Kr, "strikethrough");
			break;
		case "formatBold":
			U(r, Kr, "bold");
			break;
		case "formatItalic":
			U(r, Kr, "italic");
			break;
		case "formatUnderline":
			U(r, Kr, "underline");
			break;
		case "historyUndo":
			U(r, qr, void 0);
			break;
		case "historyRedo": U(r, Jr, void 0);
	}
	return !0;
}
function ea(e) {
	if (W(e.target) && Ms(e.target)) return !0;
	let t = I(), n = F(), r = e.data, i = Yi(e);
	if (r != null && P(n) && Wi(n, i, r, e.timeStamp, !1)) {
		zi &&= (ra(t, r), !1);
		let i = n.anchor.getNode(), a = Rc(kc(t));
		if (a === null) return !0;
		let o = n.isBackward(), s = o ? n.anchor.offset : n.focus.offset, c = o ? n.focus.offset : n.anchor.offset;
		Pt && !n.isCollapsed() && N(i) && a.anchorNode !== null && i.getTextContent().slice(0, s) + r + i.getTextContent().slice(s + c) === sc(a.anchorNode) || U(t, Vr, r);
		let l = r.length;
		Nt && l > 1 && e.inputType === "insertCompositionText" && !t.isComposing() && (n.anchor.offset -= l, n._cachedNodes = null, n._cachedIsBackward = null), zt && t.isComposing() && (Oi = 0, Js(null));
	} else cc(!1, t, r === null ? void 0 : r), zi &&= (ra(t, r || void 0), !1);
	return function() {
		Vo(), Dn(I());
	}(), !0;
}
function ta(e) {
	let t = I(), n = F();
	if (P(n) && !t.isComposing()) {
		let r = n.anchor, i = n.anchor.getNode();
		Js(r.key), Tc(xa), (e.timeStamp < Oi + 30 || r.type === "element" || !n.isCollapsed() || i.getFormat() !== n.format || N(i) && i.getStyle() !== n.style) && U(t, Vr, Qt);
	}
	return !0;
}
function na(e) {
	return ra(I(), e.data), Tc(Sa), !0;
}
function ra(e, t) {
	let n = e._compositionKey;
	if (Js(null), n !== null && t != null) {
		if (t === "") {
			let t = B(n), r = e.getElementByKey(n), i = r !== null && N(t) ? Zc(t, r, e) : null;
			if (i !== null && i.nodeValue !== null && N(t)) {
				let n = Rc(kc(e)), r = null, a = null;
				n !== null && n.anchorNode === i && (r = n.anchorOffset, a = n.focusOffset), lc(t, i.nodeValue, r, a, !0);
			}
			return;
		}
		if (t[t.length - 1] === "\n") {
			let t = F();
			if (P(t) || io(t)) {
				if (P(t)) {
					let e = t.focus;
					t.anchor.set(e.key, e.offset, e.type);
				}
				U(e, ni, null);
				return;
			}
		}
	}
	cc(!0, e, t);
}
function ia(e) {
	let t = I();
	if (e.key == null) return !0;
	if (Bi) {
		if (hc(e)) return is(t, () => {
			ra(t, Vi);
		}), Bi = !1, Vi = "", !0;
		Bi = !1, Vi = "";
	}
	if (function(e) {
		return H(e, "ArrowRight", { shiftKey: "any" });
	}(e)) U(t, Xr, e);
	else if (function(e) {
		return H(e, "ArrowRight", {
			...pc,
			shiftKey: "any"
		});
	}(e)) U(t, Zr, e);
	else if (function(e) {
		return H(e, "ArrowLeft", { shiftKey: "any" });
	}(e)) U(t, Qr, e);
	else if (function(e) {
		return H(e, "ArrowLeft", {
			...pc,
			shiftKey: "any"
		});
	}(e)) U(t, $r, e);
	else if (function(e) {
		return H(e, "ArrowUp", {
			altKey: "any",
			shiftKey: "any"
		});
	}(e)) U(t, ei, e);
	else if (function(e) {
		return H(e, "ArrowDown", {
			altKey: "any",
			shiftKey: "any"
		});
	}(e)) U(t, ti, e);
	else if (function(e) {
		return H(e, "Enter", {
			altKey: "any",
			ctrlKey: "any",
			metaKey: "any",
			shiftKey: !0
		});
	}(e)) Ri = !0, U(t, ni, e);
	else if (function(e) {
		return e.key === " ";
	}(e)) U(t, ri, e);
	else if (function(e) {
		return Mt && H(e, "o", { ctrlKey: !0 });
	}(e)) e.preventDefault(), Ri = !0, U(t, zr, !0);
	else if (function(e) {
		return H(e, "Enter", {
			altKey: "any",
			ctrlKey: "any",
			metaKey: "any"
		});
	}(e)) Ri = !1, U(t, ni, e);
	else if (function(e) {
		return H(e, "Backspace", { shiftKey: "any" }) || Mt && H(e, "h", { ctrlKey: !0 });
	}(e)) hc(e) ? U(t, ii, e) && Qi() : (e.preventDefault(), U(t, Rr, !0));
	else if (function(e) {
		return e.key === "Escape";
	}(e)) U(t, ai, e);
	else if (function(e) {
		return H(e, "Delete", {}) || Mt && H(e, "d", { ctrlKey: !0 });
	}(e)) (function(e) {
		return e.key === "Delete";
	})(e) ? U(t, oi, e) : (e.preventDefault(), U(t, Rr, !1));
	else if (function(e) {
		return H(e, "Backspace", mc);
	}(e)) e.preventDefault(), U(t, Wr, !0);
	else if (function(e) {
		return H(e, "Delete", mc);
	}(e)) e.preventDefault(), U(t, Wr, !1);
	else if (function(e) {
		return Mt && H(e, "Backspace", { metaKey: !0 });
	}(e)) e.preventDefault(), U(t, Gr, !0);
	else if (function(e) {
		return Mt && (H(e, "Delete", { metaKey: !0 }) || H(e, "k", { ctrlKey: !0 }));
	}(e)) e.preventDefault(), U(t, Gr, !1);
	else if (function(e) {
		return H(e, "b", pc);
	}(e)) e.preventDefault(), U(t, Kr, "bold");
	else if (function(e) {
		return H(e, "u", pc);
	}(e)) e.preventDefault(), U(t, Kr, "underline");
	else if (function(e) {
		return H(e, "i", pc);
	}(e)) e.preventDefault(), U(t, Kr, "italic");
	else if (function(e) {
		return H(e, "Tab", { shiftKey: "any" });
	}(e)) U(t, si, e);
	else if (function(e) {
		return H(e, "z", pc);
	}(e)) e.preventDefault(), U(t, qr, void 0);
	else if (function(e) {
		return Mt ? H(e, "z", {
			metaKey: !0,
			shiftKey: !0
		}) : H(e, "y", { ctrlKey: !0 }) || H(e, "z", {
			ctrlKey: !0,
			shiftKey: !0
		});
	}(e)) e.preventDefault(), U(t, Jr, void 0);
	else {
		let n = t._editorState._selection;
		(function(e) {
			return H(e, "a", pc);
		})(e) ? (e.preventDefault(), U(t, vi, e) && Qi()) : n === null || P(n) || (function(e) {
			return H(e, "c", pc);
		}(e) ? (e.preventDefault(), U(t, gi, e)) : function(e) {
			return H(e, "x", pc);
		}(e) && (e.preventDefault(), U(t, _i, e)));
	}
	return function(e) {
		return e.ctrlKey || e.shiftKey || e.altKey || e.metaKey;
	}(e) && t.dispatchCommand(Ti, e), !0;
}
function aa(e) {
	let t = e.__lexicalEventHandles;
	return t === void 0 && (t = [], e.__lexicalEventHandles = t), t;
}
var oa = /* @__PURE__ */ new Map();
function sa(e) {
	let t = zc(e.target);
	if (t === null) return;
	let n = Is(t.anchorNode);
	if (n === null) return;
	Li && (Li = !1, is(n, () => {
		let r = bo(), i = t.anchorNode;
		(W(i) || Bs(i)) && nc(yo(r, t, n, e));
	}));
	let r = ac(n), i = r[r.length - 1], a = i._key, o = oa.get(a), s = o || i;
	s !== n && Ki(t, s, !1), Ki(t, n, !0), n === i ? o && oa.delete(a) : oa.set(a, n);
}
function ca(e) {
	e._lexicalHandled = !0;
}
function la(e) {
	return !0 === e._lexicalHandled;
}
function ua(e) {
	let t = Pi.get(e);
	if (t === void 0) return;
	let n = Fi.get(t);
	if (n === void 0) return;
	let r = n - 1;
	r >= 0 || E(164), Pi.delete(e), Fi.set(t, r), r === 0 && t.removeEventListener("selectionchange", sa);
	let i = Ls(e);
	Fs(i) ? (function(e) {
		if (e._parentEditor !== null) {
			let t = ac(e), n = t[t.length - 1]._key;
			oa.get(n) === e && oa.delete(n);
		} else oa.delete(e._key);
	}(i), e.__lexicalEditor = null) : i && E(198);
	let a = aa(e);
	for (let e = 0; e < a.length; e++) a[e]();
	e.__lexicalEventHandles = [];
}
function da(e, t, n) {
	Vo();
	let r = e.__key, i = e.getParent();
	if (i === null) return;
	let a = function(e) {
		let t = F();
		if (!P(t) || !L(e)) return t;
		let { anchor: n, focus: r } = t, i = n.getNode(), a = r.getNode();
		return Dc(i, e) && n.set(e.__key, 0, "element"), Dc(a, e) && r.set(e.__key, 0, "element"), t;
	}(e), o = !1;
	if (P(a) && t) {
		let t = a.anchor, n = a.focus;
		t.key === r && (Co(t, e, i, e.getPreviousSibling(), e.getNextSibling()), o = !0), n.key === r && (Co(n, e, i, e.getPreviousSibling(), e.getNextSibling()), o = !0);
	} else io(a) && t && e.isSelected() && e.selectPrevious();
	if (P(a) && t && !o) {
		let t = e.getIndexWithinParent();
		Ks(e), xo(a, i, t, -1);
	} else Ks(e);
	n || jc(i) || i.canBeEmpty() || !i.isEmpty() || da(i, t), t && a && ls(i) && i.isEmpty() && i.selectEnd();
}
function fa(e) {
	return e;
}
var pa = Symbol.for("ephemeral");
function ma(e) {
	return e[pa] || !1;
}
var ha = {
	configurable: !0,
	enumerable: !1,
	value: void 0,
	writable: !0
}, ga = class {
	__type;
	__key;
	__parent;
	__prev;
	__next;
	__state;
	[Gn];
	static getType() {
		let { ownNodeType: e } = cl(this);
		return e === void 0 && E(64, this.name), e;
	}
	static clone(e) {
		E(65, this.name);
	}
	$config() {
		return {};
	}
	config(e, t) {
		let n = t.extends || Object.getPrototypeOf(this.constructor);
		return Object.assign(t, {
			extends: n,
			type: e
		}), { [e]: t };
	}
	afterCloneFrom(e) {
		this.__key === e.__key ? (this.__parent = e.__parent, this.__next = e.__next, this.__prev = e.__prev, this.__state = e.__state) : e.__state && (this.__state = e.__state.getWritable(this));
	}
	resetOnCopyNodeFrom(e) {
		this.__state &&= this.__state.getWritable(this).resetOnCopyNode();
	}
	static importDOM;
	constructor(e) {
		this.__type = this.constructor.getType(), this.__parent = null, this.__prev = null, this.__next = null, Object.defineProperty(this, "__state", ha), Object.defineProperty(this, Gn, ha), Gs(this, e);
	}
	getType() {
		return this.__type;
	}
	isInline() {
		E(137, this.constructor.name);
	}
	isAttached() {
		let e = this.__key;
		for (; e !== null;) {
			if (e === "root") return !0;
			let t = B(e);
			if (t === null) break;
			e = t.__parent;
		}
		return !1;
	}
	isSelected(e) {
		let t = e || F();
		if (t == null) return !1;
		let n = t.getNodes().some((e) => e.__key === this.__key);
		if (N(this)) return n;
		if (P(t) && t.anchor.type === "element" && t.focus.type === "element") {
			if (t.isCollapsed()) return !1;
			let e = this.getParent();
			if (R(this) && this.isInline() && e) {
				let n = t.isBackward() ? t.focus : t.anchor;
				if (e.is(n.getNode()) && n.offset === e.getChildrenSize() && this.is(e.getLastChild())) return !1;
			}
		}
		return n;
	}
	getKey() {
		return this.__key;
	}
	getIndexWithinParent() {
		let e = this.getParent();
		if (e === null) return -1;
		let t = e.getFirstChild(), n = 0;
		for (; t !== null;) {
			if (this.is(t)) return n;
			n++, t = t.getNextSibling();
		}
		return -1;
	}
	getParent() {
		let e = this.getLatest().__parent;
		return e === null ? null : B(e);
	}
	getParentOrThrow() {
		let e = this.getParent();
		return e === null && E(66, this.__key), e;
	}
	getTopLevelElement() {
		let e = this;
		for (; e !== null;) {
			let t = e.getParent();
			if (jc(t)) return L(e) || e === this && R(e) || E(194), e;
			e = t;
		}
		return null;
	}
	getTopLevelElementOrThrow() {
		let e = this.getTopLevelElement();
		return e === null && E(67, this.__key), e;
	}
	getParents() {
		let e = [], t = this.getParent();
		for (; t !== null;) e.push(t), t = t.getParent();
		return e;
	}
	getParentKeys() {
		let e = [], t = this.getParent();
		for (; t !== null;) e.push(t.__key), t = t.getParent();
		return e;
	}
	getPreviousSibling() {
		let e = this.getLatest().__prev;
		return e === null ? null : B(e);
	}
	getPreviousSiblings() {
		let e = [], t = this.getParent();
		if (t === null) return e;
		let n = t.getFirstChild();
		for (; n !== null && !n.is(this);) e.push(n), n = n.getNextSibling();
		return e;
	}
	getNextSibling() {
		let e = this.getLatest().__next;
		return e === null ? null : B(e);
	}
	getNextSiblings() {
		let e = [], t = this.getNextSibling();
		for (; t !== null;) e.push(t), t = t.getNextSibling();
		return e;
	}
	getCommonAncestor(e) {
		let t = L(this) ? this : this.getParent(), n = L(e) ? e : e.getParent(), r = t && n ? Hl(t, n) : null;
		return r ? r.commonAncestor : null;
	}
	is(e) {
		return e != null && this.__key === e.__key;
	}
	isBefore(e) {
		let t = Hl(this, e);
		return t !== null && (t.type === "descendant" || (t.type === "branch" ? zl(t) === -1 : (t.type !== "same" && t.type !== "ancestor" && E(279), !1)));
	}
	isParentOf(e) {
		let t = Hl(this, e);
		return t !== null && t.type === "ancestor";
	}
	getNodesBetween(e) {
		let t = this.isBefore(e), n = [], r = /* @__PURE__ */ new Set(), i = this;
		for (; i !== null;) {
			let a = i.__key;
			if (r.has(a) || (r.add(a), n.push(i)), i === e) break;
			let o = L(i) ? t ? i.getFirstChild() : i.getLastChild() : null;
			if (o !== null) {
				i = o;
				continue;
			}
			let s = t ? i.getNextSibling() : i.getPreviousSibling();
			if (s !== null) {
				i = s;
				continue;
			}
			let c = i.getParentOrThrow();
			if (r.has(c.__key) || n.push(c), c === e) break;
			let l = null, u = c;
			do {
				if (u === null && E(68), l = t ? u.getNextSibling() : u.getPreviousSibling(), u = u.getParent(), u === null) break;
				l !== null || r.has(u.__key) || n.push(u);
			} while (l === null);
			i = l;
		}
		return t || n.reverse(), n;
	}
	isDirty() {
		let e = I()._dirtyLeaves;
		return e !== null && e.has(this.__key);
	}
	getLatest() {
		if (ma(this)) return this;
		let e = B(this.__key);
		return e === null && E(113), e;
	}
	getWritable() {
		if (ma(this)) return this;
		Vo();
		let e = Uo(), t = I(), n = e._nodeMap, r = this.__key, i = this.getLatest(), a = t._cloneNotNeeded, o = F();
		if (o !== null && o.setCachedNodes(null), a.has(r)) return qs(i), i;
		let s = tl(i);
		return a.add(r), qs(s), n.set(r, s), s;
	}
	getTextContent() {
		return "";
	}
	getTextContentSize() {
		return this.getTextContent().length;
	}
	createDOM(e, t) {
		E(70);
	}
	updateDOM(e, t, n) {
		E(71);
	}
	getDOMSlot(e) {
		return new cn(e);
	}
	exportDOM(e) {
		return { element: this.createDOM(e._config, e) };
	}
	exportJSON() {
		let e = this.__state ? this.__state.toJSON() : void 0;
		return {
			type: this.__type,
			version: 1,
			...e
		};
	}
	static importJSON(e) {
		E(18, this.name);
	}
	updateFromJSON(e) {
		return function(e, t) {
			let n = e.getWritable(), r = t.$, i = r;
			for (let e of Pn(n).flatKeys) e in t && (i !== void 0 && i !== r || (i = { ...r }), i[e] = t[e]);
			return (n.__state || i) && Nn(e).updateFromJSON(i), n;
		}(this, e);
	}
	static transform() {
		return null;
	}
	remove(e) {
		da(this, !0, e);
	}
	replace(e, t) {
		Vo();
		let n = F();
		n !== null && (n = n.clone()), Pc(this, e);
		let r = this.getLatest(), i = this.__key, a = e.__key, o = e.getWritable(), s = this.getParentOrThrow().getWritable(), c = s.__size, l = o.getParent(), u = l === null ? -1 : o.getIndexWithinParent();
		Ks(o), l !== null && P(n) && xo(n, l, u, -1);
		let d = r.getPreviousSibling(), f = r.getNextSibling(), p = r.__prev, m = r.__next, h = r.__parent;
		da(r, !1, !0), d === null ? s.__first = a : d.getWritable().__next = a, o.__prev = p, f === null ? s.__last = a : f.getWritable().__prev = a, o.__next = m, o.__parent = h, s.__size = c;
		let g = 0;
		if (t && (L(this) && L(o) || E(139), g = o.getChildrenSize(), o.splice(g, 0, this.getChildren())), P(n)) {
			nc(n);
			let e = n.anchor, r = n.focus;
			e.key === i && (t && e.type === "element" ? e.set(o.__key, g + e.offset, "element") : to(e, o)), r.key === i && (t && r.type === "element" ? r.set(o.__key, g + r.offset, "element") : to(r, o));
		}
		return Ys() === i && Js(a), o;
	}
	insertAfter(e, t = !0) {
		Vo(), Pc(this, e);
		let n = this.getWritable(), r = e.getWritable(), i = r.getParent(), a = F(), o = !1, s = !1;
		if (i !== null) {
			let n = e.getIndexWithinParent();
			if (P(a)) {
				let e = i.__key, t = a.anchor, r = a.focus;
				o = t.type === "element" && t.key === e && t.offset === n + 1, s = r.type === "element" && r.key === e && r.offset === n + 1;
			}
			Ks(r), t && P(a) && xo(a, i, n, -1);
		}
		let c = this.getNextSibling(), l = this.getParentOrThrow().getWritable(), u = r.__key, d = n.__next;
		if (c === null ? l.__last = u : c.getWritable().__prev = u, l.__size++, n.__next = u, r.__next = d, r.__prev = n.__key, r.__parent = n.__parent, t && P(a)) {
			let e = this.getIndexWithinParent();
			xo(a, l, e + 1);
			let t = l.__key;
			o && a.anchor.set(t, e + 2, "element"), s && a.focus.set(t, e + 2, "element");
		}
		return e;
	}
	insertBefore(e, t = !0) {
		Vo(), Pc(this, e);
		let n = this.getWritable(), r = e.getWritable(), i = r.__key, a = F(), o = r.getParent(), s = o === null ? -1 : r.getIndexWithinParent();
		Ks(r), o !== null && t && P(a) && xo(a, o, s, -1);
		let c = this.getPreviousSibling(), l = this.getParentOrThrow().getWritable(), u = n.__prev, d = this.getIndexWithinParent();
		return c === null ? l.__first = i : c.getWritable().__next = i, l.__size++, n.__prev = i, r.__prev = u, r.__next = n.__key, r.__parent = n.__parent, t && P(a) && xo(a, this.getParentOrThrow(), d), e;
	}
	isParentRequired() {
		return !1;
	}
	createParentElementNode() {
		return z();
	}
	selectStart() {
		return this.selectPrevious();
	}
	selectEnd() {
		return this.selectNext(0, 0);
	}
	selectPrevious(e, t) {
		Vo();
		let n = this.getPreviousSibling(), r = this.getParentOrThrow();
		if (n === null) return r.select(0, 0);
		if (L(n)) return n.select();
		if (!N(n)) {
			let e = n.getIndexWithinParent() + 1;
			return r.select(e, e);
		}
		return n.select(e, t);
	}
	selectNext(e, t) {
		Vo();
		let n = this.getNextSibling(), r = this.getParentOrThrow();
		if (n === null) return r.select();
		if (L(n)) return n.select(0, 0);
		if (!N(n)) {
			let e = n.getIndexWithinParent();
			return r.select(e, e);
		}
		return n.select(e, t);
	}
	markDirty() {
		this.getWritable();
	}
	reconcileObservedMutation(e, t) {
		this.markDirty();
	}
}, _a = "history-push", va = "history-merge", ya = "skip-scroll-into-view", ba = "skip-selection-focus", xa = "composition-start", Sa = "composition-end", Ca = /\s*!important\s*$/i;
function wa(e) {
	let t = {};
	if (!e) return t;
	let n = "", r = "", i = null, a = !1, o = !1, s = !1, c = 0;
	for (let l = 0; l < e.length; l++) {
		let u = e[l];
		if (a) u === "*" && e[l + 1] === "/" && (a = !1, l++);
		else if (o) s ? r += u : n += u, o = !1;
		else if (i === null) if (u !== "/" || e[l + 1] !== "*") if (u !== "\"" && u !== "'") if (u !== "(") if (u !== ")") if (s || u !== ":" || c !== 0) {
			if (u === ";" && c === 0) {
				let e = n.trim(), i = r.trim();
				e !== "" && i !== "" && (t[e] = i), n = "", r = "", s = !1;
				continue;
			}
			s ? r += u : n += u;
		} else s = !0;
		else c = Math.max(0, c - 1), s ? r += u : n += u;
		else c++, s ? r += u : n += u;
		else i = u, s ? r += u : n += u;
		else a = !0, l++;
		else s ? r += u : n += u, u === "\\" ? o = !0 : u === i && (i = null);
	}
	let l = n.trim(), u = r.trim();
	return l !== "" && u !== "" && (t[l] = u), t;
}
function Ta(e, t, n) {
	let r = Ca.test(n) ? "important" : "", i = r === "" ? n : n.replace(Ca, "").trim();
	e.setProperty(t, i, r);
}
function Ea(e, t, n = "") {
	if (t === n) return;
	let r = wa(n), i = wa(t);
	for (let t in i) delete r[t], Ta(e, t, i[t]);
	for (let t in r) e.removeProperty(t);
}
var Da = class e extends ga {
	static getType() {
		return "linebreak";
	}
	static clone(t) {
		return new e(t.__key);
	}
	constructor(e) {
		super(e);
	}
	getTextContent() {
		return "\n";
	}
	createDOM() {
		return document.createElement("br");
	}
	updateDOM() {
		return !1;
	}
	isInline() {
		return !0;
	}
	static importDOM() {
		return { br: (e) => function(e) {
			let t = e.parentElement;
			if (t !== null && Kc(t)) {
				let n = t.firstChild;
				if (n === e || n.nextSibling === e && ja(n)) {
					let n = t.lastChild;
					if (n === e || n.previousSibling === e && ja(n)) return !0;
				}
			}
			return !1;
		}(e) || function(e) {
			let t = e.parentElement;
			if (t !== null && Kc(t)) {
				let n = t.firstChild;
				if (n === e || n.nextSibling === e && ja(n)) return !1;
				let r = t.lastChild;
				if (r === e || r.previousSibling === e && ja(r)) return !0;
			}
			return !1;
		}(e) ? null : {
			conversion: Oa,
			priority: 0
		} };
	}
	static importJSON(e) {
		return ka().updateFromJSON(e);
	}
};
function Oa(e) {
	return { node: ka() };
}
function ka() {
	return Nc(new Da());
}
function Aa(e) {
	return e instanceof Da;
}
function ja(e) {
	return Bs(e) && /^( |\t|\r?\n)+$/.test(e.textContent || "");
}
function Ma(e, t) {
	return 16 & t ? "code" : t & 128 ? "mark" : 32 & t ? "sub" : 64 & t ? "sup" : null;
}
function Na(e, t) {
	return 1 & t ? "strong" : 2 & t ? "em" : "span";
}
function Pa(e, t, n, r, i) {
	let a = r.classList, o = _c(i, "base");
	o !== void 0 && a.add(...o), o = _c(i, "underlineStrikethrough");
	let s = !1, c = 8 & t && 4 & t;
	o !== void 0 && (8 & n && 4 & n ? (s = !0, c || a.add(...o)) : c && a.remove(...o));
	for (let e in $t) {
		let r = $t[e];
		if (o = _c(i, e), o !== void 0) if (n & r) {
			if (s && (e === "underline" || e === "strikethrough")) {
				t & r && a.remove(...o);
				continue;
			}
			((t & r) === 0 || c && e === "underline" || e === "strikethrough") && a.add(...o);
		} else t & r && a.remove(...o);
	}
}
function Fa(e, t, n) {
	let r = n.isComposing(), i = e + (r ? Xt : ""), a = G(), o = Jc(a).$getDOMSlot(n, t, a), s = o.getFirstChild();
	if (s === null || s.nodeType !== Node.TEXT_NODE) return void o.insertChild(document.createTextNode(i));
	let c = s, l = c.nodeValue;
	if (l !== i) if (r || Nt) {
		let [e, t, n] = function(e, t) {
			let n = e.length, r = t.length, i = 0, a = 0;
			for (; i < n && i < r && e[i] === t[i];) i++;
			for (; a + i < n && a + i < r && e[n - a - 1] === t[r - a - 1];) a++;
			return [
				i,
				n - i - a,
				t.slice(i, r - a)
			];
		}(l, i);
		t !== 0 && c.deleteData(e, t), c.insertData(e, n);
	} else c.nodeValue = i;
}
function Ia(e, t, n, r, i, a) {
	Fa(i, e, t);
	let o = a.theme.text;
	o !== void 0 && Pa(0, 0, r, e, o);
}
function La(e, t) {
	let n = document.createElement(t);
	return n.appendChild(e), n;
}
var Ra = class e extends ga {
	__text;
	__format;
	__style;
	__mode;
	__detail;
	static getType() {
		return "text";
	}
	static clone(t) {
		return new e(t.__text, t.__key);
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__text = e.__text, this.__format = e.__format, this.__style = e.__style, this.__mode = e.__mode, this.__detail = e.__detail;
	}
	constructor(e = "", t) {
		super(t), this.__text = e, this.__format = 0, this.__style = "", this.__mode = 0, this.__detail = 0;
	}
	getFormat() {
		return this.getLatest().__format;
	}
	getDetail() {
		return this.getLatest().__detail;
	}
	getMode() {
		return an[this.getLatest().__mode];
	}
	getStyle() {
		return this.getLatest().__style;
	}
	isToken() {
		return this.getLatest().__mode === 1;
	}
	isComposing() {
		return this.__key === Ys();
	}
	isSegmented() {
		return this.getLatest().__mode === 2;
	}
	isDirectionless() {
		return !!(1 & this.getLatest().__detail);
	}
	isUnmergeable() {
		return !!(2 & this.getLatest().__detail);
	}
	hasFormat(e) {
		let t = $t[e];
		return (this.getFormat() & t) !== 0;
	}
	isSimpleText() {
		return this.__type === "text" && this.__mode === 0;
	}
	getTextContent() {
		return this.getLatest().__text;
	}
	getFormatFlags(e, t) {
		return Us(this.getLatest().__format, e, t);
	}
	canHaveFormat() {
		return !0;
	}
	isInline() {
		return !0;
	}
	createDOM(e, t) {
		let n = this.__format, r = Ma(0, n), i = Na(0, n), a = r === null ? i : r, o = document.createElement(a), s = o;
		this.hasFormat("code") && o.setAttribute("spellcheck", "false"), r !== null && (s = document.createElement(i), o.appendChild(s)), Ia(s, this, 0, n, this.__text, e);
		let c = this.__style;
		return c !== "" && Ea(o.style, c), o;
	}
	updateDOM(e, t, n) {
		let r = this.__text, i = e.__format, a = this.__format, o = Ma(0, i), s = Ma(0, a), c = Na(0, i), l = Na(0, a);
		if ((o === null ? c : o) !== (s === null ? l : s)) return !0;
		if (o === s && c !== l) {
			let e = t.firstChild;
			e ?? E(48);
			let i = document.createElement(l);
			return Ia(i, this, 0, a, r, n), t.replaceChild(i, e), !1;
		}
		let u = t;
		s !== null && o !== null && (u = t.firstChild, u ?? E(49)), Fa(r, u, this);
		let d = n.theme.text;
		d !== void 0 && i !== a && Pa(0, i, a, u, d);
		let f = e.__style, p = this.__style;
		return f !== p && Ea(t.style, p, f), !1;
	}
	static importDOM() {
		return {
			"#text": () => ({
				conversion: Ua,
				priority: 0
			}),
			b: () => ({
				conversion: Ba,
				priority: 0
			}),
			code: () => ({
				conversion: Ka,
				priority: 0
			}),
			em: () => ({
				conversion: Ka,
				priority: 0
			}),
			i: () => ({
				conversion: Ka,
				priority: 0
			}),
			mark: () => ({
				conversion: Ka,
				priority: 0
			}),
			s: () => ({
				conversion: Ka,
				priority: 0
			}),
			span: () => ({
				conversion: za,
				priority: 0
			}),
			strong: () => ({
				conversion: Ka,
				priority: 0
			}),
			sub: () => ({
				conversion: Ka,
				priority: 0
			}),
			sup: () => ({
				conversion: Ka,
				priority: 0
			}),
			u: () => ({
				conversion: Ka,
				priority: 0
			})
		};
	}
	static importJSON(e) {
		return qa().updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setTextContent(e.text).setFormat(e.format).setDetail(e.detail).setMode(e.mode).setStyle(e.style);
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		return W(t) || E(132), t.style.whiteSpace = "pre-wrap", this.hasFormat("lowercase") ? t.style.textTransform = "lowercase" : this.hasFormat("uppercase") ? t.style.textTransform = "uppercase" : this.hasFormat("capitalize") && (t.style.textTransform = "capitalize"), this.hasFormat("bold") && (t = La(t, "b")), this.hasFormat("italic") && (t = La(t, "i")), this.hasFormat("strikethrough") && (t = La(t, "s")), this.hasFormat("underline") && (t = La(t, "u")), { element: t };
	}
	exportJSON() {
		return {
			detail: this.getDetail(),
			format: this.getFormat(),
			mode: this.getMode(),
			style: this.getStyle(),
			text: this.getTextContent(),
			...super.exportJSON()
		};
	}
	selectionTransform(e, t) {}
	setFormat(e) {
		let t = this.getWritable();
		return t.__format = typeof e == "string" ? $t[e] : e, t;
	}
	setDetail(e) {
		let t = this.getWritable();
		return t.__detail = typeof e == "string" ? en[e] : e, t;
	}
	setStyle(e) {
		let t = this.getWritable();
		return t.__style = e, t;
	}
	toggleFormat(e) {
		let t = Us(this.getFormat(), e, null);
		return this.setFormat(t);
	}
	toggleDirectionless() {
		let e = this.getWritable();
		return e.__detail ^= 1, e;
	}
	toggleUnmergeable() {
		let e = this.getWritable();
		return e.__detail ^= 2, e;
	}
	setMode(e) {
		let t = rn[e];
		if (this.__mode === t) return this;
		let n = this.getWritable();
		return n.__mode = t, n;
	}
	setTextContent(e) {
		if (this.__text === e) return this;
		let t = this.getWritable();
		return t.__text = e, t;
	}
	select(e, t) {
		Vo();
		let n = e, r = t, i = F(), a = this.getTextContent(), o = this.__key;
		if (typeof a == "string") {
			let e = a.length;
			n === void 0 && (n = e), r === void 0 && (r = e);
		} else n = 0, r = 0;
		if (!P(i)) return go(o, n, o, r, "text", "text");
		{
			let e = Ys();
			e !== i.anchor.key && e !== i.focus.key || Js(o), i.setTextNodeRange(this, n, this, r);
		}
		return i;
	}
	selectStart() {
		return this.select(0, 0);
	}
	selectEnd() {
		let e = this.getTextContentSize();
		return this.select(e, e);
	}
	spliceText(e, t, n, r) {
		let i = this.getWritable(), a = i.__text, o = n.length, s = e;
		s < 0 && (s = o + s, s < 0 && (s = 0));
		let c = F();
		if (r && P(c)) {
			let t = e + o;
			c.setTextNodeRange(i, t, i, t);
		}
		return i.__text = a.slice(0, s) + n + a.slice(s + t), i;
	}
	canInsertTextBefore() {
		return !0;
	}
	canInsertTextAfter() {
		return !0;
	}
	splitText(...e) {
		Vo();
		let t = this.getLatest(), n = t.getTextContent();
		if (n === "") return [];
		let r = t.__key, i = Ys(), a = n.length;
		e.sort((e, t) => e - t), e.push(a);
		let o = [], s = e.length;
		for (let t = 0, r = 0; t < a && r <= s; r++) {
			let i = e[r];
			i > t && (o.push(n.slice(t, i)), t = i);
		}
		let c = o.length;
		if (c === 1) return [t];
		let l = o[0], u = t.getParent(), d, f = t.getFormat(), p = t.getStyle(), m = t.__detail, h = !1, g = null, _ = null, v = F();
		if (P(v)) {
			let [e, t] = v.isBackward() ? [v.focus, v.anchor] : [v.anchor, v.focus];
			e.type === "text" && e.key === r && (g = e), t.type === "text" && t.key === r && (_ = t);
		}
		t.isSegmented() ? (d = qa(l), d.__format = f, d.__style = p, d.__detail = m, d.__state = zn(t, d), h = !0) : d = t.setTextContent(l);
		let y = [d];
		for (let e = 1; e < c; e++) {
			let n = qa(o[e]);
			n.__format = f, n.__style = p, n.__detail = m, n.__state = zn(t, n);
			let a = n.__key;
			i === r && Js(a), y.push(n);
		}
		let b = g ? g.offset : null, x = _ ? _.offset : null, S = 0;
		for (let e of y) {
			if (!g && !_) break;
			let t = S + e.getTextContentSize();
			if (g !== null && b !== null && b <= t && b >= S && (g.set(e.getKey(), b - S, "text"), b < t && (g = null)), _ !== null && x !== null && x <= t && x >= S) {
				_.set(e.getKey(), x - S, "text");
				break;
			}
			S = t;
		}
		if (u !== null) {
			(function(e) {
				let t = e.getPreviousSibling(), n = e.getNextSibling();
				t !== null && qs(t), n !== null && qs(n);
			})(this);
			let e = u.getWritable(), t = this.getIndexWithinParent();
			h ? (e.splice(t, 0, y), this.remove()) : e.splice(t, 1, y), P(v) && xo(v, u, t, c - 1);
		}
		return y;
	}
	mergeWithSibling(e) {
		let t = e === this.getPreviousSibling();
		t || e === this.getNextSibling() || E(50);
		let n = this.__key, r = e.__key, i = this.__text, a = i.length;
		Ys() === r && Js(n);
		let o = F();
		if (P(o)) {
			let i = o.anchor, s = o.focus;
			i !== null && i.key === r && wo(i, t, n, e, a), s !== null && s.key === r && wo(s, t, n, e, a);
		}
		let s = e.__text, c = t ? s + i : i + s;
		this.setTextContent(c);
		let l = this.getWritable();
		return e.remove(), l;
	}
	isTextEntity() {
		return !1;
	}
};
function za(e) {
	return {
		forChild: Ja(e.style),
		node: null
	};
}
function Ba(e) {
	let t = e, n = t.style.fontWeight === "normal";
	return {
		forChild: Ja(t.style, n ? void 0 : "bold"),
		node: null
	};
}
var Va = /* @__PURE__ */ new WeakMap();
function Ha(e) {
	if (!W(e)) return !1;
	if (e.nodeName === "PRE") return !0;
	let t = e.style.whiteSpace;
	return typeof t == "string" && t.startsWith("pre");
}
function Ua(e) {
	let t = e;
	e.parentElement === null && E(129);
	let n = t.textContent || "";
	if (function(e) {
		let t, n = e.parentNode, r = [e];
		for (; n !== null && (t = Va.get(n)) === void 0 && !Ha(n);) r.push(n), n = n.parentNode;
		let i = t === void 0 ? n : t;
		for (let e = 0; e < r.length; e++) Va.set(r[e], i);
		return i;
	}(t) !== null) {
		let e = n.split(/(\r?\n|\t)/), t = [], r = e.length;
		for (let n = 0; n < r; n++) {
			let r = e[n];
			r === "\n" || r === "\r\n" ? t.push(ka()) : r === "	" ? t.push(Xa()) : r !== "" && t.push(qa(r));
		}
		return { node: t };
	}
	if (n = n.replace(/\r/g, "").replace(/[ \t\n]+/g, " "), n === "") return { node: null };
	if (n[0] === " ") {
		let e = t, r = !0;
		for (; e !== null && (e = Wa(e, !1)) !== null;) {
			let t = e.textContent || "";
			if (t.length > 0) {
				/[ \t\n]$/.test(t) && (n = n.slice(1)), r = !1;
				break;
			}
		}
		r && (n = n.slice(1));
	}
	if (n[n.length - 1] === " ") {
		let e = t, r = !0;
		for (; e !== null && (e = Wa(e, !0)) !== null;) if ((e.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0) {
			r = !1;
			break;
		}
		r && (n = n.slice(0, n.length - 1));
	}
	return n === "" ? { node: null } : { node: qa(n) };
}
function Wa(e, t) {
	let n = e;
	for (;;) {
		let e;
		for (; (e = t ? n.nextSibling : n.previousSibling) === null;) {
			let e = n.parentElement;
			if (e === null) return null;
			n = e;
		}
		if (n = e, W(n)) {
			let e = n.style.display;
			if (e === "" && !Wc(n) || e !== "" && !e.startsWith("inline")) return null;
		}
		let r = n;
		for (; (r = t ? n.firstChild : n.lastChild) !== null;) n = r;
		if (Bs(n)) return n;
		if (n.nodeName === "BR") return null;
	}
}
var Ga = {
	code: "code",
	em: "italic",
	i: "italic",
	mark: "highlight",
	s: "strikethrough",
	strong: "bold",
	sub: "subscript",
	sup: "superscript",
	u: "underline"
};
function Ka(e) {
	let t = Ga[e.nodeName.toLowerCase()];
	return t === void 0 ? { node: null } : {
		forChild: Ja(e.style, t),
		node: null
	};
}
function qa(e = "") {
	return Nc(new Ra(e));
}
function N(e) {
	return e instanceof Ra;
}
function Ja(e, t) {
	let n = e.fontWeight, r = e.textDecoration.split(" "), i = n === "700" || n === "bold", a = r.includes("line-through"), o = e.fontStyle === "italic", s = r.includes("underline"), c = e.verticalAlign;
	return (e) => N(e) ? (i && !e.hasFormat("bold") && e.toggleFormat("bold"), a && !e.hasFormat("strikethrough") && e.toggleFormat("strikethrough"), o && !e.hasFormat("italic") && e.toggleFormat("italic"), s && !e.hasFormat("underline") && e.toggleFormat("underline"), c !== "sub" || e.hasFormat("subscript") || e.toggleFormat("subscript"), c !== "super" || e.hasFormat("superscript") || e.toggleFormat("superscript"), t && !e.hasFormat(t) && e.toggleFormat(t), e) : e;
}
var Ya = class e extends Ra {
	static getType() {
		return "tab";
	}
	static clone(t) {
		return new e(t.__key);
	}
	constructor(e) {
		super("	", e), this.__detail = 2;
	}
	static importDOM() {
		return null;
	}
	createDOM(e) {
		let t = super.createDOM(e), n = _c(e.theme, "tab");
		return n !== void 0 && t.classList.add(...n), t;
	}
	static importJSON(e) {
		return Xa().updateFromJSON(e);
	}
	setTextContent(e) {
		return e !== "	" && e !== "" && At(126), super.setTextContent("	");
	}
	spliceText(e, t, n, r) {
		return n === "" && t === 0 || n === "	" && t === 1 || E(286), this;
	}
	setDetail(e) {
		return e !== 2 && E(127), this;
	}
	setMode(e) {
		return e !== "normal" && E(128), this;
	}
	canInsertTextBefore() {
		return !1;
	}
	canInsertTextAfter() {
		return !1;
	}
};
function Xa() {
	return Nc(new Ya());
}
function Za(e) {
	return e instanceof Ya;
}
var Qa = class {
	key;
	offset;
	type;
	_selection;
	constructor(e, t, n) {
		this._selection = null, this.key = e, this.offset = t, this.type = n;
	}
	is(e) {
		return this.key === e.key && this.offset === e.offset && this.type === e.type;
	}
	isBefore(e) {
		return this.key === e.key ? this.offset < e.offset : Rl(Ql(Ul(this, "next")), Ql(Ul(e, "next"))) < 0;
	}
	getNode() {
		let e = B(this.key);
		return e === null && E(20), e;
	}
	set(e, t, n, r) {
		let i = this._selection, a = this.key;
		r && this.key === e && this.offset === t && this.type === n || (this.key = e, this.offset = t, this.type = n, Bo() || (Ys() === a && Js(e), i !== null && (i.setCachedNodes(null), P(i) && (i._cachedIsBackward = null), i.dirty = !0)));
	}
};
function $a(e, t, n) {
	return new Qa(e, t, n);
}
function eo(e, t) {
	let n = t.__key, r = e.offset, i = "element";
	if (N(t)) {
		i = "text";
		let e = t.getTextContentSize();
		r > e && (r = e);
	} else if (!L(t)) {
		let e = t.getNextSibling();
		if (N(e)) n = e.__key, r = 0, i = "text";
		else {
			let e = t.getParent();
			e && (n = e.__key, r = t.getIndexWithinParent() + 1);
		}
	}
	e.set(n, r, i);
}
function to(e, t) {
	if (L(t)) {
		let n = t.getLastDescendant();
		L(n) || N(n) ? eo(e, n) : eo(e, t);
	} else eo(e, t);
}
var no = class e {
	_nodes;
	_cachedNodes;
	dirty;
	constructor(e) {
		this._cachedNodes = null, this._nodes = e, this.dirty = !1;
	}
	getCachedNodes() {
		return this._cachedNodes;
	}
	setCachedNodes(e) {
		this._cachedNodes = e;
	}
	is(e) {
		if (!io(e)) return !1;
		let t = this._nodes, n = e._nodes;
		return t.size === n.size && Array.from(t).every((e) => n.has(e));
	}
	isCollapsed() {
		return !1;
	}
	isBackward() {
		return !1;
	}
	getStartEndPoints() {
		return null;
	}
	add(e) {
		this.dirty = !0, this._nodes.add(e), this._cachedNodes = null;
	}
	delete(e) {
		this.dirty = !0, this._nodes.delete(e), this._cachedNodes = null;
	}
	clear() {
		this.dirty = !0, this._nodes.clear(), this._cachedNodes = null;
	}
	has(e) {
		return this._nodes.has(e);
	}
	clone() {
		return new e(new Set(this._nodes));
	}
	extract() {
		return this.getNodes();
	}
	insertRawText(e) {}
	insertText() {}
	insertNodes(e) {
		let t = this.getNodes(), n = t.length, r = t[n - 1], i;
		if (N(r)) i = r.select();
		else {
			let e = r.getIndexWithinParent() + 1;
			i = r.getParentOrThrow().select(e, e);
		}
		i.insertNodes(e);
		for (let e = 0; e < n; e++) t[e].remove();
	}
	getNodes() {
		let e = this._cachedNodes;
		if (e !== null) return e;
		let t = this._nodes, n = [];
		for (let e of t) {
			let t = B(e);
			t !== null && n.push(t);
		}
		return Bo() || (this._cachedNodes = n), n;
	}
	getTextContent() {
		let e = this.getNodes(), t = "";
		for (let n = 0; n < e.length; n++) t += e[n].getTextContent();
		return t;
	}
	deleteNodes() {
		let e = this.getNodes();
		if ((F() || bo()) === this && e[0]) {
			let t = K(e[0], "next");
			Gl(Il(t, t));
		}
		for (let t of e) t.remove();
	}
};
function P(e) {
	return e instanceof ro;
}
var ro = class e {
	format;
	style;
	anchor;
	focus;
	_cachedNodes;
	_cachedIsBackward;
	dirty;
	constructor(e, t, n, r) {
		this.anchor = e, this.focus = t, e._selection = this, t._selection = this, this._cachedNodes = null, this._cachedIsBackward = null, this.format = n, this.style = r, this.dirty = !1;
	}
	getCachedNodes() {
		return this._cachedNodes;
	}
	setCachedNodes(e) {
		this._cachedNodes = e;
	}
	is(e) {
		return !!P(e) && this.anchor.is(e.anchor) && this.focus.is(e.focus) && this.format === e.format && this.style === e.style;
	}
	isCollapsed() {
		return this.anchor.is(this.focus);
	}
	getNodes() {
		let e = this._cachedNodes;
		if (e !== null) return e;
		let t = function(e) {
			let t = [], [n, r] = e.getTextSlices();
			n && t.push(n.caret.origin);
			let i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set();
			for (let n of e) if (Sl(n)) {
				let { origin: e } = n;
				t.length === 0 ? i.add(e) : (a.add(e), t.push(e));
			} else {
				let { origin: e } = n;
				L(e) && a.has(e) || t.push(e);
			}
			if (r && t.push(r.caret.origin), xl(e.focus) && L(e.focus.origin) && e.focus.getNodeAtCaret() === null) for (let n = kl(e.focus.origin, "previous"); Sl(n) && i.has(n.origin) && !n.origin.isEmpty() && n.origin.is(t[t.length - 1]); n = jl(n)) i.delete(n.origin), t.pop();
			for (; t.length > 1;) {
				let e = t[t.length - 1];
				if (!L(e) || a.has(e) || e.isEmpty() || i.has(e)) break;
				t.pop();
			}
			if (t.length === 0 && e.isCollapsed()) {
				let n = Ql(e.anchor), r = Ql(e.anchor.getFlipped()), i = (e) => bl(e) ? e.origin : e.getNodeAtCaret(), a = i(n) || i(r) || (e.anchor.getNodeAtCaret() ? n.origin : r.origin);
				t.push(a);
			}
			return t;
		}(tu(ql(this), "next"));
		return Bo() || (this._cachedNodes = t), t;
	}
	setTextNodeRange(e, t, n, r) {
		return this.anchor.set(e.__key, t, "text"), this.focus.set(n.__key, r, "text"), this;
	}
	getTextContent() {
		let e = this.getNodes();
		if (e.length === 0) return "";
		let t = e[0], n = e[e.length - 1], r = this.anchor, i = this.focus, a = r.isBefore(i), [o, s] = oo(this), c = "", l = !0;
		for (let u = 0; u < e.length; u++) {
			let d = e[u];
			if (L(d) && !d.isInline()) l || (c += "\n"), l = !d.isEmpty();
			else if (l = !1, N(d)) {
				let e = d.getTextContent();
				d === t ? d === n ? r.type === "element" && i.type === "element" && i.offset !== r.offset || (e = o < s ? e.slice(o, s) : e.slice(s, o)) : e = a ? e.slice(o) : e.slice(s) : d === n && (e = a ? e.slice(0, s) : e.slice(0, o)), c += e;
			} else !R(d) && !Aa(d) || d === n && this.isCollapsed() || (c += d.getTextContent());
		}
		return c;
	}
	applyDOMRange(e) {
		let t = I(), n = t.getEditorState()._selection, r = mo(e.startContainer, e.startOffset, e.endContainer, e.endOffset, t, n);
		if (r === null) return;
		let [i, a, o] = r;
		this.anchor.set(i.key, i.offset, i.type, !0), this.focus.set(a.key, a.offset, a.type, !0), o && (this.dirty = !0), Un(this);
	}
	clone() {
		let t = this.anchor, n = this.focus;
		return new e($a(t.key, t.offset, t.type), $a(n.key, n.offset, n.type), this.format, this.style);
	}
	toggleFormat(e) {
		this.format = Us(this.format, e, null), this.dirty = !0;
	}
	setFormat(e) {
		this.format = e, this.dirty = !0;
	}
	setStyle(e) {
		this.style = e, this.dirty = !0;
	}
	hasFormat(e) {
		let t = $t[e];
		return (this.format & t) !== 0;
	}
	insertRawText(e) {
		this.insertNodes(Ao(e));
	}
	insertText(e) {
		let t = this.anchor, n = this.focus, r = this.format, i = this.style, a = t, o = n;
		!this.isCollapsed() && n.isBefore(t) && (a = n, o = t), a.type === "element" && function(e, t, n, r) {
			let i = e.getNode(), a = i.getChildAtIndex(e.offset), o = qa();
			if (o.setFormat(n), o.setStyle(r), vs(a)) a.splice(0, 0, [o]);
			else {
				let e = ls(i) ? z().append(o) : o;
				a === null ? i.append(e) : a.insertBefore(e);
			}
			e.is(t) && t.set(o.__key, 0, "text"), e.set(o.__key, 0, "text");
		}(a, o, r, i), o.type === "element" && Wl(o, Ql(Ul(o, "next")));
		let s = a.offset, c = o.offset, l = this.getNodes(), u = l.length, d = l[0];
		N(d) || E(26);
		let f = d.getTextContent().length, p = d.getParentOrThrow(), m = l[u - 1];
		if (u === 1 && o.type === "element" && (c = f, o.set(a.key, c, "text")), this.isCollapsed() && s === f && (zs(d) || !d.canInsertTextAfter() || !p.canInsertTextAfter() && d.getNextSibling() === null)) {
			let t = d.getNextSibling();
			if (N(t) && t.canInsertTextBefore() && !zs(t) || (t = qa(), t.setFormat(r), t.setStyle(i), p.canInsertTextAfter() ? d.insertAfter(t) : p.insertAfter(t)), t.select(0, 0), d = t, e !== "") return void this.insertText(e);
		} else if (this.isCollapsed() && s === 0 && (zs(d) || !d.canInsertTextBefore() || !p.canInsertTextBefore() && d.getPreviousSibling() === null)) {
			let t = d.getPreviousSibling();
			if (N(t) && !zs(t) || (t = qa(), t.setFormat(r), p.canInsertTextBefore() ? d.insertBefore(t) : p.insertBefore(t)), t.select(), d = t, e !== "") return void this.insertText(e);
		} else if (d.isSegmented() && s !== f) {
			let e = qa(d.getTextContent());
			e.setFormat(r), d.replace(e), d = e;
		} else if (!this.isCollapsed() && e !== "") {
			let t = m.getParent();
			if (!p.canInsertTextBefore() || !p.canInsertTextAfter() || L(t) && (!t.canInsertTextBefore() || !t.canInsertTextAfter())) return this.insertText(""), po(this.anchor, this.focus), void this.insertText(e);
		}
		if (u === 1) {
			if (Rs(d)) {
				let t = qa(e);
				t.select(), d.replace(t);
				return;
			}
			let t = d.getFormat(), n = d.getStyle();
			if (s !== c || t === r && n === i) {
				if (Za(d)) {
					let t = qa(e);
					t.setFormat(r), t.setStyle(i), t.select(), d.replace(t);
					return;
				}
			} else {
				if (d.getTextContent() !== "") {
					let t = qa(e);
					if (t.setFormat(r), t.setStyle(i), t.select(), s === 0) d.insertBefore(t, !1);
					else {
						let [e] = d.splitText(s);
						e.insertAfter(t, !1);
					}
					t.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= e.length, this._cachedNodes = null, this._cachedIsBackward = null);
					return;
				}
				d.setFormat(r), d.setStyle(i);
			}
			let a = c - s;
			d = d.spliceText(s, a, e, !0), d.getTextContent() === "" ? d.remove() : this.anchor.type === "text" && (this.format = t, this.style = n, d.isComposing() && (this.anchor.offset -= e.length, this._cachedNodes = null, this._cachedIsBackward = null));
		} else {
			let t = new Set([...d.getParentKeys(), ...m.getParentKeys()]), n = L(d) ? d : d.getParentOrThrow(), r = L(m) ? m : m.getParentOrThrow(), i = m;
			if (!n.is(r) && r.isInline()) do
				i = r, r = r.getParentOrThrow();
			while (r.isInline());
			if (o.type === "text" && (c !== 0 || m.getTextContent() === "") || o.type === "element" && m.getIndexWithinParent() < c) if (N(m) && !Rs(m) && c !== m.getTextContentSize()) {
				if (m.isSegmented()) {
					let e = qa(m.getTextContent());
					m.replace(e), m = e;
				}
				ls(o.getNode()) || o.type !== "text" || (m = m.spliceText(0, c, "")), t.add(m.__key);
			} else {
				let e = m.getParentOrThrow();
				e.canBeEmpty() || e.getChildrenSize() !== 1 ? m.remove() : e.remove();
			}
			else t.add(m.__key);
			let a = r.getChildren(), p = new Set(l), h = n.is(r), g = n.isInline() && d.getNextSibling() === null ? n : d;
			for (let e = a.length - 1; e >= 0; e--) {
				let t = a[e];
				if (t.is(d) || L(t) && t.isParentOf(d)) break;
				t.isAttached() && (!p.has(t) || t.is(i) ? h || g.insertAfter(t, !1) : t.remove());
			}
			if (!h) {
				let e = r, n = null;
				for (; e !== null;) {
					let r = e.getChildren(), i = r.length;
					(i === 0 || r[i - 1].is(n)) && (t.delete(e.__key), n = e), e = e.getParent();
				}
			}
			if (Rs(d)) if (s === f) d.select();
			else {
				let t = qa(e);
				t.select(), d.replace(t);
			}
			else d = d.spliceText(s, f - s, e, !0), d.getTextContent() === "" ? d.remove() : this.anchor.type === "text" && (this.format = d.getFormat(), this.style = d.getStyle(), d.isComposing() && (this.anchor.offset -= e.length, this._cachedNodes = null, this._cachedIsBackward = null));
			for (let e = 1; e < u; e++) {
				let n = l[e], r = n.__key;
				t.has(r) || n.remove();
			}
		}
	}
	removeText() {
		let e = F() === this;
		Kl(this, Zl(ql(this))), e && F() !== this && nc(this);
	}
	formatText(e, t = null) {
		if (this.isCollapsed()) return this.toggleFormat(e), void Js(null);
		let n = this.getNodes(), r = [];
		for (let e of n) N(e) && r.push(e);
		let i = (t) => {
			n.forEach((n) => {
				if (L(n)) {
					let r = n.getFormatFlags(e, t);
					n.setTextFormat(r);
				}
			});
		}, a = r.length;
		if (a === 0) return this.toggleFormat(e), Js(null), void i(t);
		let o = this.anchor, s = this.focus, c = this.isBackward(), l = c ? s : o, u = c ? o : s, d = 0, f = r[0], p = l.type === "element" ? 0 : l.offset;
		if (l.type === "text" && p === f.getTextContentSize() && (d = 1, f = r[1], p = 0), f == null) return;
		let m = f.getFormatFlags(e, t);
		i(m);
		let h = a - 1, g = r[h], _ = u.type === "text" ? u.offset : g.getTextContentSize();
		if (f.is(g)) {
			if (p === _) return;
			if (zs(f) || p === 0 && _ === f.getTextContentSize()) f.setFormat(m);
			else {
				let e = f.splitText(p, _), t = p === 0 ? e[0] : e[1];
				t.setFormat(m), l.type === "text" && l.set(t.__key, 0, "text"), u.type === "text" && u.set(t.__key, _ - p, "text");
			}
			this.format = m;
			return;
		}
		p === 0 || zs(f) || ([, f] = f.splitText(p), p = 0), f.setFormat(m);
		let v = g.getFormatFlags(e, m);
		_ > 0 && (_ === g.getTextContentSize() || zs(g) || ([g] = g.splitText(_)), g.setFormat(v));
		for (let t = d + 1; t < h; t++) {
			let n = r[t], i = n.getFormatFlags(e, v);
			n.setFormat(i);
		}
		l.type === "text" && l.set(f.__key, p, "text"), u.type === "text" && u.set(g.__key, _, "text"), this.format = m | v;
	}
	insertNodes(e) {
		if (e.length === 0) return;
		if (this.isCollapsed() || this.removeText(), this.anchor.key === "root") {
			this.insertParagraph();
			let t = F();
			return P(t) || E(134), t.insertNodes(e);
		}
		let t = (this.isBackward() ? this.focus : this.anchor).getNode(), n = ul(t, qc), r = e[e.length - 1];
		if (L(n) && "__language" in n) {
			if ("__language" in e[0]) this.insertText(e[0].getTextContent());
			else {
				let t = jo(this);
				n.splice(t, 0, e), r.selectEnd();
			}
			return;
		}
		if (!e.some((e) => (L(e) || R(e)) && !e.isInline())) {
			L(n) || E(211, t.constructor.name, t.getType());
			let i = jo(this);
			n.splice(i, 0, e), r.selectEnd();
			return;
		}
		let i = function(e) {
			let t = z(), n = null;
			for (let r = 0; r < e.length; r++) {
				let i = e[r], a = Aa(i);
				if (a || R(i) && i.isInline() || L(i) && i.isInline() || N(i) || i.isParentRequired()) {
					if (n === null && (n = i.createParentElementNode(), t.append(n), a)) continue;
					n !== null && n.append(i);
				} else t.append(i), n = null;
			}
			return t;
		}(e), a = i.getLastDescendant(), o = i.getChildren(), s = !L(n) || !n.isEmpty() ? this.insertParagraph() : null, c = o[o.length - 1], l = o[0];
		var u;
		L(u = l) && qc(u) && !u.isEmpty() && L(n) && (!n.isEmpty() || n.canMergeWhenEmpty()) && (L(n) || E(211, t.constructor.name, t.getType()), n.append(...l.getChildren()), l = o[1]), l && (n === null && E(212, t.constructor.name, t.getType()), function(e, t) {
			let n = t.getParentOrThrow().getLastChild(), r = t, i = [t];
			for (; r !== n;) r.getNextSibling() || E(140), r = r.getNextSibling(), i.push(r);
			let a = e;
			for (let e of i) a = a.insertAfter(e);
		}(n, l));
		let d = ul(a, qc);
		s && L(d) && (s.canMergeWhenEmpty() || qc(c)) && (d.append(...s.getChildren()), s.remove()), L(n) && n.isEmpty() && n.remove(), a.selectEnd();
		let f = L(n) ? n.getLastChild() : null;
		Aa(f) && d !== n && f.remove();
	}
	insertParagraph() {
		if (this.anchor.key === "root") {
			let e = z();
			return V().splice(this.anchor.offset, 0, [e]), e.select(), e;
		}
		let e = jo(this), t = ul(this.anchor.getNode(), qc);
		L(t) || E(213);
		let n = t.getChildAtIndex(e), r = n ? [n, ...n.getNextSiblings()] : [], i = t.insertNewAfter(this, !1);
		return i ? (i.append(...r), i.selectStart(), i) : null;
	}
	insertLineBreak(e) {
		let t = ka();
		if (this.insertNodes([t]), e) {
			let e = t.getParentOrThrow(), n = t.getIndexWithinParent();
			e.select(n, n);
		}
	}
	extract() {
		let e = [...this.getNodes()], t = e.length, n = e[0], r = e[t - 1], [i, a] = oo(this), o = this.isBackward(), [s, c] = o ? [this.focus, this.anchor] : [this.anchor, this.focus], [l, u] = o ? [a, i] : [i, a];
		if (t === 0) return [];
		if (t === 1) {
			if (N(n) && !this.isCollapsed()) {
				let e = n.splitText(l, u), t = l === 0 ? e[0] : e[1];
				return t ? (s.set(t.getKey(), 0, "text"), c.set(t.getKey(), t.getTextContentSize(), "text"), [t]) : [];
			}
			return [n];
		}
		if (N(n) && (l === n.getTextContentSize() ? e.shift() : l !== 0 && ([, n] = n.splitText(l), e[0] = n, s.set(n.getKey(), 0, "text"))), N(r)) {
			let t = r.getTextContent().length;
			u === 0 ? e.pop() : u !== t && ([r] = r.splitText(u), e[e.length - 1] = r, c.set(r.getKey(), r.getTextContentSize(), "text"));
		}
		return e;
	}
	modify(e, t, n) {
		if (No(this, e, t, n)) return;
		let r = e === "move", i = I(), a = Rc(kc(i));
		if (!a) return;
		let o = i._blockCursorElement, s = i._rootElement, c = this.focus.getNode();
		if (s === null || o === null || !L(c) || c.isInline() || c.canBeEmpty() || Lc(o, i, s), this.dirty) {
			let e = Sc(i, this.anchor.key), t = Sc(i, this.focus.key), n = e, r = t;
			if (this.anchor.type === "text") {
				let t = this.anchor.getNode();
				n = N(t) ? Zc(t, e, i) : null;
			}
			if (this.focus.type === "text") {
				let e = this.focus.getNode();
				r = N(e) ? Zc(e, t, i) : null;
			}
			n && r && To(a, n, this.anchor.offset, r, this.focus.offset);
		}
		if (function(e, t, n, r) {
			e.modify(t, n, r);
		}(a, e, t ? "backward" : "forward", n), a.rangeCount > 0) {
			let e = a.getRangeAt(0), n = this.anchor.getNode(), i = ls(n) ? n : Ac(n);
			if (this.applyDOMRange(e), this.dirty = !0, !r) {
				let n = this.getNodes(), r = [], o = !1;
				for (let e = 0; e < n.length; e++) {
					let t = n[e];
					Dc(t, i) ? r.push(t) : o = !0;
				}
				if (o && r.length > 0) if (t) {
					let e = r[0];
					L(e) ? e.selectStart() : e.getParentOrThrow().selectStart();
				} else {
					let e = r[r.length - 1];
					L(e) ? e.selectEnd() : e.getParentOrThrow().selectEnd();
				}
				a.anchorNode === e.startContainer && a.anchorOffset === e.startOffset || function(e) {
					let t = e.focus, n = e.anchor, r = n.key, i = n.offset, a = n.type;
					n.set(t.key, t.offset, t.type, !0), t.set(r, i, a, !0);
				}(this);
			}
		}
		n === "lineboundary" && No(this, e, t, n, "decorators");
	}
	forwardDeletion(e, t, n) {
		if (!n && (e.type === "element" && L(t) && e.offset === t.getChildrenSize() || e.type === "text" && e.offset === t.getTextContentSize())) {
			let e = t.getParent(), n = t.getNextSibling() || (e === null ? null : e.getNextSibling());
			if (L(n) && n.isShadowRoot()) return !0;
		}
		return !1;
	}
	deleteCharacter(e) {
		let t = this.isCollapsed();
		if (this.isCollapsed()) {
			let t = this.anchor, n = t.getNode();
			if (this.forwardDeletion(t, n, e)) return;
			let r = Pl(Ul(t, e ? "previous" : "next"));
			if (r.getTextSlices().every((e) => e === null || e.distance === 0)) {
				let e = { type: "initial" };
				for (let t of r.iterNodeCarets("shadowRoot")) if (Sl(t)) {
					if (!t.origin.isInline()) {
						if (t.origin.isShadowRoot()) {
							if (e.type === "merge-block") break;
							if (L(r.anchor.origin) && r.anchor.origin.isEmpty()) {
								let e = Ql(t);
								Kl(this, Il(e, e)), r.anchor.origin.remove();
							}
							return;
						}
						e.type !== "merge-next-block" && e.type !== "merge-block" || (e = {
							block: e.block,
							caret: t,
							type: "merge-block"
						});
					}
				} else {
					if (e.type === "merge-block") break;
					if (xl(t)) {
						if (L(t.origin)) {
							if (t.origin.isInline()) {
								if (!t.origin.isParentOf(r.anchor.origin)) break;
							} else e = {
								block: t.origin,
								type: "merge-next-block"
							};
							continue;
						}
						if (R(t.origin)) {
							if (!t.origin.isIsolated()) if (e.type === "merge-next-block" && (t.origin.isKeyboardSelectable() || !t.origin.isInline()) && L(r.anchor.origin) && r.anchor.origin.isEmpty()) {
								r.anchor.origin.remove();
								let e = vo();
								e.add(t.origin.getKey()), nc(e);
							} else t.origin.remove();
							return;
						}
						break;
					}
				}
				if (e.type === "merge-block") {
					let { caret: t, block: n } = e;
					return t.origin.isEmpty() && !n.isEmpty() && t.origin.getParent() === n.getParent() ? void t.origin.remove(!0) : (Kl(this, Il(!t.origin.isEmpty() && n.isEmpty() ? Jl(K(n, t.direction)) : r.anchor, t)), this.removeText());
				}
			}
			let i = this.focus;
			if (this.modify("extend", e, "character"), this.isCollapsed()) {
				if (e && t.offset === 0 && so(this, t.getNode())) return;
			} else {
				let r = i.type === "text" ? i.getNode() : null;
				if (n = t.type === "text" ? t.getNode() : null, r !== null && r.isSegmented()) {
					let t = i.offset, a = r.getTextContentSize();
					if (r.is(n) || e && t !== a || !e && t !== 0) return void lo(r, e, t);
				} else if (n !== null && n.isSegmented()) {
					let i = t.offset, a = n.getTextContentSize();
					if (n.is(r) || e && i !== 0 || !e && i !== a) return void lo(n, e, i);
				}
				(function(e, t) {
					let n = e.anchor, r = e.focus, i = n.getNode();
					if (i === r.getNode() && n.type === "text" && r.type === "text") {
						let e = n.offset, a = r.offset, o = e < a, s = o ? e : a, c = o ? a : e, l = c - 1;
						s !== l && (function(e) {
							return !(ic(e) || co(e));
						})(i.getTextContent().slice(s, c)) && (t ? r.set(r.key, l, r.type) : n.set(n.key, l, n.type));
					}
				})(this, e);
			}
		}
		if (this.removeText(), e && !t && this.isCollapsed() && this.anchor.type === "element" && this.anchor.offset === 0) {
			let e = this.anchor.getNode();
			e.isEmpty() && ls(e.getParent()) && e.getPreviousSibling() === null && so(this, e);
		}
	}
	deleteLine(e) {
		this.isCollapsed() && this.modify("extend", e, "lineboundary"), this.isCollapsed() ? this.deleteCharacter(e) : this.removeText();
	}
	deleteWord(e) {
		if (this.isCollapsed()) {
			let t = this.anchor, n = t.getNode();
			if (this.forwardDeletion(t, n, e)) return;
			this.modify("extend", e, "word");
		}
		this.isCollapsed() ? this.deleteCharacter(e) : this.removeText();
	}
	isBackward() {
		let e = this._cachedIsBackward;
		if (e !== null) return e;
		let t = this.focus.isBefore(this.anchor);
		return Bo() || (this._cachedIsBackward = t), t;
	}
	getStartEndPoints() {
		return [this.anchor, this.focus];
	}
};
function io(e) {
	return e instanceof no;
}
function ao(e) {
	let t = e.offset;
	if (e.type === "text") return t;
	let n = e.getNode();
	return t === n.getChildrenSize() ? n.getTextContent().length : 0;
}
function oo(e) {
	let t = e.getStartEndPoints();
	if (t === null) return [0, 0];
	let [n, r] = t;
	return n.type === "element" && r.type === "element" && n.key === r.key && n.offset === r.offset ? [0, 0] : [ao(n), ao(r)];
}
function so(e, t) {
	for (let n = t; n; n = n.getParent()) {
		if (L(n)) {
			if (n.collapseAtStart(e)) return !0;
			if (jc(n)) break;
		}
		if (n.getPreviousSibling()) break;
	}
	return !1;
}
var co = (() => {
	try {
		let e = /* @__PURE__ */ RegExp("\\p{Emoji}", "u"), t = e.test.bind(e);
		if (t("❤️") && t("#️⃣") && t("👍")) return t;
	} catch {}
	return () => !1;
})();
function lo(e, t, n) {
	let r = e, i = r.getTextContent().split(/(?=\s)/g), a = i.length, o = 0, s = 0;
	for (let e = 0; e < a; e++) {
		let r = e === a - 1;
		if (s = o, o += i[e].length, t && o === n || o > n || r) {
			i.splice(e, 1), r && (s = void 0);
			break;
		}
	}
	let c = i.join("").trim();
	c === "" ? r.remove() : (r.setTextContent(c), r.select(s, s));
}
function uo(e, t, n, r) {
	let i, a = t, o = !1;
	if (W(e)) {
		let s = !1, c = e.childNodes, l = c.length, u = r._blockCursorElement;
		a === l && l > 0 && (s = !0, a = l - 1), Zs(e, r) !== void 0 || e === r.getRootElement() || Ms(e) || (o = !0);
		let d = c[a], f = !1;
		if (d === u) d = c[a + 1], f = !0;
		else if (u !== null) {
			let n = u.parentNode;
			e === n && t > Array.prototype.indexOf.call(n.children, u) && a--;
		}
		if (i = rc(d), N(i)) a = Dl(i, s ? "next" : "previous");
		else {
			let c = rc(e);
			if (c === null) return null;
			if (L(c)) {
				let o = r.getElementByKey(c.getKey());
				o === null && E(214);
				let l = Yc(c, o, r);
				[c, a] = l.resolveChildIndex(c, o, e, t), L(c) || E(215), s && a >= c.getChildrenSize() && (a = Math.max(0, c.getChildrenSize() - 1));
				let u = c.getChildAtIndex(a);
				if (L(u) && function(e, t, n) {
					let r = e.getParent();
					return n === null || r === null || !r.canBeEmpty() || r !== n.getNode();
				}(u, 0, n)) {
					let e = s ? u.getLastDescendant() : u.getFirstDescendant();
					e === null ? c = u : (u = e, c = L(u) ? u : u.getParentOrThrow()), a = 0;
				}
				N(u) ? (i = u, c = null, a = Dl(u, s ? "next" : "previous")) : u !== c && s && !f && (L(c) || E(216), a = Math.min(c.getChildrenSize(), a + 1));
			} else {
				let n = c.getIndexWithinParent(), i = r.getElementByKey(c.getKey()), o = "after";
				if (i !== null && rc(e) === c) {
					let n = Yc(c, i, r);
					n.element === i ? t === 0 && R(c) && (o = "before") : o = n.resolveLeafPosition(i, e, t);
				}
				a = o === "before" ? n : n + 1, c = c.getParentOrThrow();
			}
			if (L(c)) return [$a(c.__key, a, "element"), o];
		}
	} else i = rc(e);
	return N(i) ? [$a(i.__key, Dl(i, a, "clamp"), "text"), o] : null;
}
function fo(e, t, n) {
	let r = e.offset, i = e.getNode();
	if (r === 0) {
		let r = i.getPreviousSibling(), a = i.getParent();
		if (t) {
			if ((n || !t) && r === null && L(a) && a.isInline()) {
				let t = a.getPreviousSibling();
				N(t) && e.set(t.__key, t.getTextContent().length, "text");
			}
		} else L(r) && !n && r.isInline() ? e.set(r.__key, r.getChildrenSize(), "element") : N(r) && e.set(r.__key, r.getTextContent().length, "text");
	} else if (r === i.getTextContent().length) {
		let r = i.getNextSibling(), a = i.getParent();
		if (t && L(r) && r.isInline()) e.set(r.__key, 0, "element");
		else if ((n || t) && r === null && L(a) && a.isInline() && !a.canInsertTextAfter()) {
			let t = a.getNextSibling();
			N(t) && e.set(t.__key, 0, "text");
		}
	}
}
function po(e, t, n) {
	if (e.type === "text" && t.type === "text") {
		let n = e.isBefore(t), r = e.is(t);
		fo(e, n, r), fo(t, !n, r), r && t.set(e.key, e.offset, e.type);
	}
}
function mo(e, t, n, r, i, a) {
	if (e === null || n === null || !Ps(i, e, n)) return null;
	let o = uo(e, t, P(a) ? a.anchor : null, i);
	if (o === null) return null;
	let s = uo(n, r, P(a) ? a.focus : null, i);
	if (s === null) return null;
	let [c, l] = o, [u, d] = s;
	if (c.type === "element" && u.type === "element") {
		let t = rc(e), r = rc(n);
		if (R(t) && R(r)) return null;
	}
	return po(c, u), [
		c,
		u,
		l || d
	];
}
function ho(e) {
	return L(e) && !e.isInline();
}
function go(e, t, n, r, i, a) {
	let o = Uo(), s = new ro($a(e, t, i), $a(n, r, a), 0, "");
	return s.dirty = !0, o._selection = s, s;
}
function _o() {
	return new ro($a("root", 0, "element"), $a("root", 0, "element"), 0, "");
}
function vo() {
	return new no(/* @__PURE__ */ new Set());
}
function yo(e, t, n, r) {
	let i = n._window;
	if (i === null) return null;
	let a = r || i.event, o = a ? a.type : void 0, s = o === "selectionchange", c = !yn && (s || o === "beforeinput" || o === "compositionstart" || o === "compositionend" || o === "click" && a && a.detail === 3 || o === "drop" || o === void 0), l, u, d, f;
	if (P(e) && !c) return e.clone();
	if (t === null) return null;
	if (l = t.anchorNode, u = t.focusNode, d = t.anchorOffset, f = t.focusOffset, (s || o === void 0) && P(e) && !Ps(n, l, u)) return e.clone();
	let p = mo(l, d, u, f, n, e);
	if (p === null) return null;
	let [m, h, g] = p, _ = 0, v = "";
	if (P(e)) {
		let t = e.anchor;
		if (m.key === t.key) _ = e.format, v = e.style;
		else {
			let e = m.getNode();
			N(e) ? (_ = e.getFormat(), v = e.getStyle()) : L(e) && (_ = e.getTextFormat(), v = e.getTextStyle());
		}
	}
	let y = new ro(m, h, _, v);
	return g && (y.dirty = !0), y;
}
function F() {
	return Uo()._selection;
}
function bo() {
	return I()._editorState._selection;
}
function xo(e, t, n, r = 1) {
	let i = e.anchor, a = e.focus, o = i.getNode(), s = a.getNode();
	if (!t.is(o) && !t.is(s)) return;
	let c = t.__key;
	if (e.isCollapsed()) {
		let t = i.offset;
		if (n <= t && r > 0 || n < t && r < 0) {
			let n = Math.max(0, t + r);
			i.set(c, n, "element"), a.set(c, n, "element"), So(e);
		}
	} else {
		let o = e.isBackward(), s = o ? a : i, l = s.getNode(), u = o ? i : a, d = u.getNode();
		if (t.is(l)) {
			let e = s.offset;
			(n <= e && r > 0 || n < e && r < 0) && s.set(c, Math.max(0, e + r), "element");
		}
		if (t.is(d)) {
			let e = u.offset;
			(n <= e && r > 0 || n < e && r < 0) && u.set(c, Math.max(0, e + r), "element");
		}
	}
	So(e);
}
function So(e) {
	let t = e.anchor, n = t.offset, r = e.focus, i = r.offset, a = t.getNode(), o = r.getNode();
	if (e.isCollapsed()) {
		if (!L(a)) return;
		let e = a.getChildrenSize(), i = n >= e, o = i ? a.getChildAtIndex(e - 1) : a.getChildAtIndex(n);
		if (N(o)) {
			let e = 0;
			i && (e = o.getTextContentSize()), t.set(o.__key, e, "text"), r.set(o.__key, e, "text");
		}
		return;
	}
	if (L(a)) {
		let e = a.getChildrenSize(), r = n >= e, i = r ? a.getChildAtIndex(e - 1) : a.getChildAtIndex(n);
		if (N(i)) {
			let e = 0;
			r && (e = i.getTextContentSize()), t.set(i.__key, e, "text");
		}
	}
	if (L(o)) {
		let e = o.getChildrenSize(), t = i >= e, n = t ? o.getChildAtIndex(e - 1) : o.getChildAtIndex(i);
		if (N(n)) {
			let e = 0;
			t && (e = n.getTextContentSize()), r.set(n.__key, e, "text");
		}
	}
}
function Co(e, t, n, r, i) {
	let a = null, o = 0, s = null;
	r === null ? i !== null && (a = i.__key, N(i) ? s = "text" : L(i) && (s = "element")) : (a = r.__key, N(r) ? (o = r.getTextContentSize(), s = "text") : L(r) && (o = r.getChildrenSize(), s = "element")), a !== null && s !== null ? e.set(a, o, s) : (o = t.getIndexWithinParent(), o === -1 && (o = n.getChildrenSize()), e.set(n.__key, o, "element"));
}
function wo(e, t, n, r, i) {
	e.type === "text" ? e.set(n, e.offset + (t ? 0 : i), "text") : e.offset > r.getIndexWithinParent() && e.set(e.key, e.offset - 1, "element");
}
function To(e, t, n, r, i) {
	try {
		e.setBaseAndExtent(t, n, r, i);
	} catch {}
}
function Eo(e, t, n) {
	let r = Sc(e, t.getKey());
	if (L(t)) {
		let i = Yc(t, r, e);
		return [i.element, n + i.getFirstChildOffset()];
	}
	return [r, n];
}
function Do(e, t, n, r, i, a) {
	let o = document.activeElement;
	if (i.has("collaboration") && o !== a || o !== null && Ns(o)) return;
	if (!P(t)) return void (e !== null && Ps(n, r.anchorNode, r.focusNode) && r.removeAllRanges());
	let s = t.anchor, c = t.focus, l = s.getNode(), u = c.getNode(), [d, f] = Eo(n, l, s.offset), [p, m] = Eo(n, u, c.offset), h = t.format, g = t.style, _ = t.isCollapsed(), v = d, y = p, b = !1;
	var x, S, ee, te, ne;
	if ((s.type === "text" ? (v = N(l) ? Zc(l, d, n) : null, b = l.getFormat() !== h || l.getStyle() !== g) : P(e) && e.anchor.type === "text" && (b = !0), c.type === "text" && (y = N(u) ? Zc(u, p, n) : null), v !== null && y !== null) && (_ && (e === null || b || P(e) && (e.format !== h || e.style !== g)) && (x = h, S = g, ee = f, te = s.key, ne = performance.now(), Ui = [
		x,
		S,
		ee,
		te,
		ne
	]), r.type === "Range" && _ || r.anchorOffset !== f || r.focusOffset !== m || r.anchorNode !== v || r.focusNode !== y || (o !== null && a.contains(o) || i.has("skip-selection-focus") || a.focus({ preventScroll: !0 }), s.type === "element"))) {
		if (To(r, v, f, y, m), !Nt || !t.isCollapsed() || a === null || i.has("skip-selection-focus") || document.activeElement !== null && a.contains(document.activeElement) || a.focus({ preventScroll: !0 }), !i.has("skip-scroll-into-view") && t.isCollapsed() && a !== null && a === document.activeElement) {
			let e = P(t) && t.anchor.type === "element" ? v.childNodes[f] || null : r.rangeCount > 0 ? r.getRangeAt(0) : null;
			if (e !== null) {
				let t;
				if (e instanceof Text) {
					let n = document.createRange();
					n.selectNode(e), t = n.getBoundingClientRect();
				} else t = e.getBoundingClientRect();
				(function(e, t, n) {
					let r = wc(n), i = Oc(r);
					if (r === null || i === null) return;
					let { top: a, bottom: o } = t, s = 0, c = 0, l = n;
					for (; l !== null;) {
						let t = l === r.body;
						if (t) {
							let t = i.visualViewport;
							if (t) {
								let e = t.offsetTop;
								s = e, c = e + t.height;
							} else s = 0, c = kc(e).innerHeight;
							let n = i.getComputedStyle(r.documentElement), a = parseFloat(n.scrollPaddingTop), o = parseFloat(n.scrollPaddingBottom);
							isFinite(a) && (s += a), isFinite(o) && (c -= o);
						} else {
							let e = l.getBoundingClientRect();
							s = e.top, c = e.bottom;
						}
						let n = 0;
						if (a < s ? n = -(s - a) : o > c && (n = o - c), n !== 0) if (t) i.scrollBy(0, n);
						else {
							let e = l.scrollTop;
							l.scrollTop += n;
							let t = l.scrollTop - e;
							a -= t, o -= t;
						}
						if (t) break;
						l = Cc(l);
					}
				})(n, t, a);
			}
		}
		Ii = !0;
	}
}
function Oo(e) {
	let t = F() || bo();
	t === null && (t = V().selectEnd()), t.insertNodes(e);
}
function ko(e, t) {
	for (let n of e.split(/(\r?\n|\t)/)) n === "\n" || n === "\r\n" ? t.linebreak() : n === "	" ? t.tab() : n !== "" && t.text(n);
}
function Ao(e) {
	let t = [];
	return ko(e, {
		linebreak: () => t.push(ka()),
		tab: () => t.push(Xa()),
		text: (e) => t.push(qa(e))
	}), t;
}
function jo(e) {
	let t = e;
	e.isCollapsed() || t.removeText();
	let n = F();
	P(n) && (t = n), P(t) || E(161);
	let r = t.anchor, i = r.getNode(), a = r.offset;
	for (; !qc(i);) {
		let e = i;
		if ([i, a] = Mo(i, a), e.is(i)) break;
	}
	return a;
}
function Mo(e, t) {
	let n = e.getParent();
	if (!n) {
		let e = z();
		return V().append(e), e.select(), [V(), 0];
	}
	if (N(e)) {
		let r = e.splitText(t);
		if (r.length === 0) return [n, e.getIndexWithinParent()];
		let i = t === 0 ? 0 : 1;
		return [n, r[0].getIndexWithinParent() + i];
	}
	if (!L(e) || t === 0) return [n, e.getIndexWithinParent()];
	let r = e.getChildAtIndex(t);
	if (r) {
		let n = new ro($a(e.__key, t, "element"), $a(e.__key, t, "element"), 0, ""), i = e.insertNewAfter(n);
		i && i.append(r, ...r.getNextSiblings());
	}
	return [n, e.getIndexWithinParent() + 1];
}
function No(e, t, n, r, i = "decorators-and-blocks") {
	if (t === "move" && r === "character" && !e.isCollapsed()) {
		let [t, r] = n === e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
		return r.set(t.key, t.offset, t.type), !0;
	}
	let a = Ul(e.focus, n ? "previous" : "next"), o = r === "lineboundary", s = t === "move", c = a, l = i === "decorators-and-blocks";
	if (!$l(c)) {
		for (let e of c) {
			l = !1;
			let { origin: t } = e;
			if (!R(t) || t.isIsolated() || (c = e, !o || !t.isInline())) break;
		}
		if (l) for (let e of Pl(a).iterNodeCarets(t === "extend" ? "shadowRoot" : "root")) {
			if (Sl(e)) e.origin.isInline() || (c = e);
			else {
				if (L(e.origin)) continue;
				R(e.origin) && !e.origin.isInline() && (c = e);
			}
			break;
		}
	}
	if (c === a) return !1;
	if (s && !o && R(c.origin) && c.origin.isKeyboardSelectable()) {
		let e = vo();
		return e.add(c.origin.getKey()), nc(e), !0;
	}
	return c = Ql(c), s && Wl(e.anchor, c), Wl(e.focus, c), l || !o;
}
var Po = null, Fo = null, Io = !1, Lo = !1, Ro = 0, zo = {
	characterData: !0,
	childList: !0,
	subtree: !0
};
function Bo() {
	return Io || Po !== null && Po._readOnly;
}
function Vo() {
	Io && E(13);
}
function Ho() {
	Ro > 99 && E(14);
}
function Uo() {
	return Po === null && E(195, Wo()), Po;
}
function I() {
	return Fo === null && E(337, Wo()), Fo;
}
function Wo() {
	let e = 0, t = /* @__PURE__ */ new Set(), n = Ts.version;
	if (typeof window < "u") for (let r of document.querySelectorAll("[contenteditable]")) {
		let i = Ls(r);
		if (Fs(i)) e++;
		else if (i) {
			let e = String(i.constructor.version || "<0.17.1");
			e === n && (e += " (separately built, likely a bundler configuration issue)"), t.add(e);
		}
	}
	let r = ` Detected on the page: ${e} compatible editor(s) with version ${n}`;
	return t.size && (r += ` and incompatible editors with versions ${Array.from(t).join(", ")}`), r;
}
function Go() {
	return Fo;
}
function Ko(e, t, n) {
	let r = t.__type, i = ks(e, r), a = n.get(r);
	a === void 0 && (a = Array.from(i.transforms), n.set(r, a));
	let o = a.length;
	for (let e = 0; e < o && (a[e](t), t.isAttached()); e++);
}
function qo(e, t) {
	return e !== void 0 && e.__key !== t && e.isAttached();
}
function Jo(e, t) {
	if (!t) return;
	let n = e._updateTags, r = t;
	Array.isArray(t) || (r = [t]);
	for (let e of r) n.add(e);
}
function Yo(e) {
	return Xo(e, I()._nodes);
}
function Xo(e, t) {
	let n = e.type, r = t.get(n);
	r === void 0 && E(17, n);
	let i = r.klass;
	e.type !== i.getType() && E(18, i.name);
	let a = i.importJSON(e), o = e.children;
	if (L(a) && Array.isArray(o)) for (let e = 0; e < o.length; e++) {
		let n = Xo(o[e], t);
		a.append(n);
	}
	return a;
}
function Zo(e, t, n) {
	let r = Po, i = Io, a = Fo;
	Po = t, Io = !0, Fo = e;
	try {
		return n();
	} finally {
		Po = r, Io = i, Fo = a;
	}
}
function Qo(e, t) {
	let n = e._pendingEditorState, r = e._rootElement, i = e._headless || r === null;
	if (n === null) return void (e._deferred.length > 0 && ts(e, e._deferred));
	let a = e._editorState, o = a._selection, s = n._selection, c = e._dirtyType !== 0, l = Po, u = Io, d = Fo, f = e._updating, p = e._observer, m = null;
	if (e._pendingEditorState = null, e._editorState = n, !i && c && p !== null) {
		Fo = e, Po = n, Io = !1, e._updating = !0;
		try {
			let t = e._dirtyType, r = e._dirtyElements, i = e._dirtyLeaves;
			p.disconnect(), m = kr(a, n, e, t, r, i);
		} catch (t) {
			if (t instanceof Error && e._onError(t), Lo) throw t;
			ys(e, null, r, n), On(e), e._dirtyType = 2, Lo = !0, Qo(e, a), Lo = !1;
			return;
		} finally {
			p.observe(r, zo), e._updating = f, Po = l, Io = u, Fo = d;
		}
	}
	n._readOnly ||= !0;
	let h = e._dirtyLeaves, g = e._dirtyElements, _ = e._normalizedNodes, v = e._updateTags, y = e._deferred;
	c && (e._dirtyType = 0, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements = /* @__PURE__ */ new Map(), e._normalizedNodes = /* @__PURE__ */ new Set(), e._updateTags = /* @__PURE__ */ new Set()), function(e, t) {
		let n = e._decorators, r = e._pendingDecorators || n, i = t._nodeMap, a;
		for (a in r) i.has(a) || (r === n && (r = $s(e)), delete r[a]);
	}(e, n);
	let b = i ? null : Rc(kc(e));
	if (e._editable && b !== null && (c || s === null || s.dirty || !s.is(o)) && r !== null && !v.has("skip-dom-selection")) {
		Fo = e, Po = n;
		try {
			if (p !== null && p.disconnect(), c || s === null || s.dirty) {
				let t = e._blockCursorElement;
				t !== null && Lc(t, e, r), Do(o, s, e, b, v, r);
			}
			(function(e, t, n) {
				let r = e._blockCursorElement;
				if (P(n) && n.isCollapsed() && n.anchor.type === "element" && t.contains(document.activeElement)) {
					let i = n.anchor, a = i.getNode(), o = i.offset, s = !1, c = null;
					if (o === a.getChildrenSize()) Ic(a.getChildAtIndex(o - 1)) && (s = !0);
					else {
						let t = a.getChildAtIndex(o);
						if (t !== null && Ic(t)) {
							let n = t.getPreviousSibling();
							(n === null || Ic(n)) && (s = !0, c = e.getElementByKey(t.__key));
						}
					}
					if (s) {
						let n = Yc(a, e.getElementByKey(a.__key), e).element;
						r === null && (e._blockCursorElement = r = function(e) {
							let t = e.theme, n = document.createElement("div");
							n.contentEditable = "false", n.setAttribute("data-lexical-cursor", "true");
							let r = t.blockCursor;
							return r !== void 0 && (typeof r == "string" && (r = t.blockCursor = lu(r)), r !== void 0 && n.classList.add(...r)), n;
						}(e._config)), t.style.caretColor = "transparent", c === null ? n.appendChild(r) : n.insertBefore(r, c);
						return;
					}
				}
				r !== null && Lc(r, e, t);
			})(e, r, s);
		} finally {
			p !== null && p.observe(r, zo), Fo = d, Po = l;
		}
	}
	m !== null && function(e, t, n, r, i) {
		let a = Array.from(e._listeners.mutation), o = a.length;
		for (let e = 0; e < o; e++) {
			let [o, s] = a[e];
			for (let e of s) {
				let a = t.get(e);
				a !== void 0 && o(a, {
					dirtyLeaves: r,
					prevEditorState: i,
					updateTags: n
				});
			}
		}
	}(e, m, v, h, a), P(s) || s === null || o !== null && o.is(s) || e.dispatchCommand(jr, void 0);
	let x = e._pendingDecorators;
	x !== null && (e._decorators = x, e._pendingDecorators = null, $o("decorator", e, !0, x)), function(e, t, n) {
		let r = ec(t), i = ec(n);
		r !== i && $o("textcontent", e, !0, i);
	}(e, t || a, n), $o("update", e, !0, {
		dirtyElements: g,
		dirtyLeaves: h,
		editorState: n,
		mutatedNodes: m,
		normalizedNodes: _,
		prevEditorState: t || a,
		tags: v
	}), ts(e, y), function(e) {
		let t = e._updates;
		if (t.length === 0) return void (e._cascadeCount = 0);
		if (e._cascadeCount++ > 99) {
			e._updates = [], e._cascadeCount = 0;
			try {
				E(343);
			} catch (t) {
				t instanceof Error && e._onError(t);
			}
			return;
		}
		let n = t.shift();
		if (n) {
			let [t, r] = n;
			rs(e, t, r);
		}
	}(e);
}
function $o(e, t, n, ...r) {
	let i = t._updating;
	t._updating = n;
	try {
		let n = t._listeners[e], i = Array.from(n);
		for (let [e, t] of i) {
			t && t();
			let i = e(...r);
			n.has(e) ? n.set(e, i) : i && i();
		}
	} finally {
		t._updating = i;
	}
}
function es(e, t, n, r) {
	let i = ac(e), a;
	for (let e = 4; e >= 0; e--) for (let o = 0; o < i.length; o++) {
		let s = i[o];
		if (o > 0 && s._updating) {
			a = s;
			break;
		}
		let c = s._commands.get(t);
		if (c !== void 0) {
			let t = c[e];
			if (t.size > 0) {
				let e = !1;
				if (is(s, () => {
					for (let i of t) if (i(n, r)) return void (e = !0);
				}), e) return e;
			}
		}
	}
	return a && a.update(() => {
		es(a, t, n, r);
	}), !1;
}
function ts(e, t) {
	if (e._deferred = [], t.length !== 0) {
		let n = e._updating;
		e._updating = !0;
		try {
			for (let e = 0; e < t.length; e++) t[e]();
		} finally {
			e._updating = n;
		}
	}
}
function ns(e, t) {
	let n = e._updates, r = t || !1;
	for (; n.length !== 0;) {
		let t = n.shift();
		if (t) {
			let [n, i] = t, a = e._pendingEditorState, o;
			i !== void 0 && (o = i.onUpdate, i.skipTransforms && (r = !0), i.discrete && (a === null && E(191), a._flushSync = !0), o && e._deferred.push(o), Jo(e, i.tag)), a == null ? rs(e, n, i) : n();
		}
	}
	return r;
}
function rs(e, t, n) {
	let r = e._updateTags, i, a = !1, o = !1;
	n !== void 0 && (i = n.onUpdate, Jo(e, n.tag), a = n.skipTransforms || !1, o = n.discrete || !1), i && e._deferred.push(i);
	let s = e._editorState, c = e._pendingEditorState, l = !1;
	(c === null || c._readOnly) && (c = e._pendingEditorState = us(c || s), l = !0), c._flushSync = o;
	let u = Po, d = Io, f = Fo, p = e._updating;
	Po = c, Io = !1, e._updating = !0, Fo = e;
	let m = e._headless || e.getRootElement() === null;
	Ds(null);
	try {
		l && (m ? s._selection !== null && (c._selection = s._selection.clone()) : c._selection = function(e, t) {
			let n = e.getEditorState()._selection, r = Rc(kc(e));
			return P(n) || n == null ? yo(n, r, e, t) : n.clone();
		}(e, n && n.event || null));
		let r = e._compositionKey;
		t(), a = ns(e, a), function(e, t) {
			let n = t.getEditorState()._selection, r = e._selection;
			if (P(r)) {
				let e = r.anchor, t = r.focus, i;
				if (e.type === "text" && (i = e.getNode(), i.selectionTransform(n, r)), t.type === "text") {
					let e = t.getNode();
					i !== e && e.selectionTransform(n, r);
				}
			}
		}(c, e), e._dirtyType !== 0 && (a ? function(e, t) {
			let n = t._dirtyLeaves, r = e._nodeMap;
			for (let e of n) {
				let t = r.get(e);
				N(t) && t.isAttached() && t.isSimpleText() && !t.isUnmergeable() && Hn(t);
			}
		}(c, e) : function(e, t) {
			let n = t._dirtyLeaves, r = t._dirtyElements, i = e._nodeMap, a = Ys(), o = /* @__PURE__ */ new Map(), s = n, c = s.size, l = r, u = l.size;
			for (; c > 0 || u > 0;) {
				if (c > 0) {
					t._dirtyLeaves = /* @__PURE__ */ new Set();
					for (let e of s) {
						let r = i.get(e);
						N(r) && r.isAttached() && r.isSimpleText() && !r.isUnmergeable() && Hn(r), r !== void 0 && qo(r, a) && Ko(t, r, o), n.add(e);
					}
					if (s = t._dirtyLeaves, c = s.size, c > 0) {
						Ro++;
						continue;
					}
				}
				t._dirtyLeaves = /* @__PURE__ */ new Set(), t._dirtyElements = /* @__PURE__ */ new Map(), l.delete("root") && l.set("root", !0);
				for (let e of l) {
					let n = e[0], s = e[1];
					if (r.set(n, s), !s) continue;
					let c = i.get(n);
					c !== void 0 && qo(c, a) && Ko(t, c, o);
				}
				s = t._dirtyLeaves, c = s.size, l = t._dirtyElements, u = l.size, Ro++;
			}
			t._dirtyLeaves = n, t._dirtyElements = r;
		}(c, e), ns(e), function(e, t, n, r) {
			let i = e._nodeMap, a = t._nodeMap, o = [];
			for (let [e] of r) {
				let t = a.get(e);
				t !== void 0 && (t.isAttached() || (L(t) && vn(t, e, i, a, o, r), i.has(e) || r.delete(e), o.push(e)));
			}
			for (let e of o) a.delete(e);
			for (let e of n) {
				let t = a.get(e);
				t === void 0 || t.isAttached() || (i.has(e) || n.delete(e), a.delete(e));
			}
		}(s, c, e._dirtyLeaves, e._dirtyElements)), r !== e._compositionKey && (c._flushSync = !0);
		let i = c._selection;
		if (P(i)) {
			let e = c._nodeMap, t = i.anchor.key, n = i.focus.key;
			e.get(t) !== void 0 && e.get(n) !== void 0 || E(19);
		} else io(i) && i._nodes.size === 0 && (c._selection = null);
	} catch (t) {
		t instanceof Error && e._onError(t), e._pendingEditorState = s, e._dirtyType = 2, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), Qo(e);
		return;
	} finally {
		Po = u, Io = d, Fo = f, e._updating = p, Ro = 0;
	}
	e._dirtyType !== 0 || e._deferred.length > 0 || function(e, t) {
		let n = t.getEditorState()._selection, r = e._selection;
		if (r !== null) {
			if (r.dirty || !r.is(n)) return !0;
		} else if (n !== null) return !0;
		return !1;
	}(c, e) ? c._flushSync ? (c._flushSync = !1, Qo(e)) : l && js(() => {
		Qo(e);
	}) : (c._flushSync = !1, l && (r.clear(), e._deferred = [], e._pendingEditorState = null));
}
function is(e, t, n) {
	Fo === e && n === void 0 ? t() : rs(e, t, n);
}
var as = class extends ga {
	__first;
	__last;
	__size;
	__format;
	__style;
	__indent;
	__dir;
	__textFormat;
	__textStyle;
	constructor(e) {
		super(e), this.__first = null, this.__last = null, this.__size = 0, this.__format = 0, this.__style = "", this.__indent = 0, this.__dir = null, this.__textFormat = 0, this.__textStyle = "";
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__key === e.__key && (this.__first = e.__first, this.__last = e.__last, this.__size = e.__size), this.__indent = e.__indent, this.__format = e.__format, this.__style = e.__style, this.__dir = e.__dir, this.__textFormat = e.__textFormat, this.__textStyle = e.__textStyle;
	}
	getFormat() {
		return this.getLatest().__format;
	}
	getFormatType() {
		return nn[this.getFormat()] || "";
	}
	getStyle() {
		return this.getLatest().__style;
	}
	getIndent() {
		return this.getLatest().__indent;
	}
	getChildren() {
		let e = [], t = this.getFirstChild();
		for (; t !== null;) e.push(t), t = t.getNextSibling();
		return e;
	}
	getChildrenKeys() {
		let e = [], t = this.getFirstChild();
		for (; t !== null;) e.push(t.__key), t = t.getNextSibling();
		return e;
	}
	getChildrenSize() {
		return this.getLatest().__size;
	}
	isEmpty() {
		return this.getChildrenSize() === 0;
	}
	isDirty() {
		let e = I()._dirtyElements;
		return e !== null && e.has(this.__key);
	}
	isLastChild() {
		let e = this.getLatest(), t = this.getParentOrThrow().getLastChild();
		return t !== null && t.is(e);
	}
	getAllTextNodes() {
		let e = [], t = this.getFirstChild();
		for (; t !== null;) {
			if (N(t) && e.push(t), L(t)) {
				let n = t.getAllTextNodes();
				e.push(...n);
			}
			t = t.getNextSibling();
		}
		return e;
	}
	getFirstDescendant() {
		let e = this.getFirstChild();
		for (; L(e);) {
			let t = e.getFirstChild();
			if (t === null) break;
			e = t;
		}
		return e;
	}
	getLastDescendant() {
		let e = this.getLastChild();
		for (; L(e);) {
			let t = e.getLastChild();
			if (t === null) break;
			e = t;
		}
		return e;
	}
	getDescendantByIndex(e) {
		let t = this.getChildren(), n = t.length;
		if (e >= n) {
			let e = t[n - 1];
			return L(e) && e.getLastDescendant() || e || null;
		}
		let r = t[e];
		return L(r) && r.getFirstDescendant() || r || null;
	}
	getFirstChild() {
		let e = this.getLatest().__first;
		return e === null ? null : B(e);
	}
	getFirstChildOrThrow() {
		let e = this.getFirstChild();
		return e === null && E(45, this.__key), e;
	}
	getLastChild() {
		let e = this.getLatest().__last;
		return e === null ? null : B(e);
	}
	getLastChildOrThrow() {
		let e = this.getLastChild();
		return e === null && E(96, this.__key), e;
	}
	getChildAtIndex(e) {
		let t = this.getChildrenSize(), n, r;
		if (e < t / 2) {
			for (n = this.getFirstChild(), r = 0; n !== null && r <= e;) {
				if (r === e) return n;
				n = n.getNextSibling(), r++;
			}
			return null;
		}
		for (n = this.getLastChild(), r = t - 1; n !== null && r >= e;) {
			if (r === e) return n;
			n = n.getPreviousSibling(), r--;
		}
		return null;
	}
	getTextContent() {
		let e = "", t = this.getChildren(), n = t.length;
		for (let r = 0; r < n; r++) {
			let i = t[r];
			e += i.getTextContent(), L(i) && r !== n - 1 && !i.isInline() && (e += Zt);
		}
		return e;
	}
	getTextContentSize() {
		let e = 0, t = this.getChildren(), n = t.length;
		for (let r = 0; r < n; r++) {
			let i = t[r];
			e += i.getTextContentSize(), L(i) && r !== n - 1 && !i.isInline() && (e += 2);
		}
		return e;
	}
	getDirection() {
		return this.getLatest().__dir;
	}
	getTextFormat() {
		return this.getLatest().__textFormat;
	}
	hasFormat(e) {
		if (e !== "") {
			let t = tn[e];
			return (this.getFormat() & t) !== 0;
		}
		return !1;
	}
	hasTextFormat(e) {
		let t = $t[e];
		return (this.getTextFormat() & t) !== 0;
	}
	getFormatFlags(e, t) {
		return Us(this.getLatest().__textFormat, e, t);
	}
	getTextStyle() {
		return this.getLatest().__textStyle;
	}
	select(e, t) {
		Vo();
		let n = F(), r = e, i = t, a = this.getChildrenSize();
		if (!this.canBeEmpty()) {
			if (e === 0 && t === 0) {
				let e = this.getFirstChild();
				if (N(e) || L(e)) return e.select(0, 0);
			} else if (!(e !== void 0 && e !== a || t !== void 0 && t !== a)) {
				let e = this.getLastChild();
				if (N(e) || L(e)) return e.select();
			}
		}
		r === void 0 && (r = a), i === void 0 && (i = a);
		let o = this.__key;
		return P(n) ? (n.anchor.set(o, r, "element"), n.focus.set(o, i, "element"), n.dirty = !0, n) : go(o, r, o, i, "element", "element");
	}
	selectStart() {
		let e = this.getFirstDescendant();
		return e ? e.selectStart() : this.select();
	}
	selectEnd() {
		let e = this.getLastDescendant();
		return e ? e.selectEnd() : this.select();
	}
	clear() {
		let e = this.getWritable();
		return this.getChildren().forEach((e) => e.remove()), e;
	}
	append(...e) {
		return this.splice(this.getChildrenSize(), 0, e);
	}
	setDirection(e) {
		let t = this.getWritable();
		return t.__dir = e, t;
	}
	setFormat(e) {
		return this.getWritable().__format = e !== "" && tn[e] || 0, this;
	}
	setStyle(e) {
		return this.getWritable().__style = e || "", this;
	}
	setTextFormat(e) {
		let t = this.getWritable();
		return t.__textFormat = e, t;
	}
	setTextStyle(e) {
		let t = this.getWritable();
		return t.__textStyle = e, t;
	}
	setIndent(e) {
		return this.getWritable().__indent = e, this;
	}
	splice(e, t, n) {
		ma(this) && E(324, this.__key, this.__type);
		let r = this.getChildrenSize(), i = this.getWritable();
		e + t <= r || E(226, String(e), String(t), String(r));
		let a = i.__key, o = [], s = [], c = this.getChildAtIndex(e + t), l = null, u = r - t + n.length;
		if (e !== 0) if (e === r) l = this.getLastChild();
		else {
			let t = this.getChildAtIndex(e);
			t !== null && (l = t.getPreviousSibling());
		}
		if (t > 0) {
			let e = l === null ? this.getFirstChild() : l.getNextSibling();
			for (let n = 0; n < t; n++) {
				e === null && E(100);
				let t = e.getNextSibling(), n = e.__key;
				Ks(e.getWritable()), s.push(n), e = t;
			}
		}
		let d = l;
		for (let e of n) {
			d !== null && e.is(d) && (l = d = d.getPreviousSibling());
			let t = e.getWritable();
			t.__parent === a && u--, Ks(t);
			let n = e.__key;
			if (d === null) i.__first = n, t.__prev = null;
			else {
				let e = d.getWritable();
				e.__next = n, t.__prev = e.__key;
			}
			e.__key === a && E(76), t.__parent = a, o.push(n), d = e;
		}
		if (e + t === r) d !== null && (d.getWritable().__next = null, i.__last = d.__key);
		else if (c !== null) {
			let e = c.getWritable();
			if (d !== null) {
				let t = d.getWritable();
				e.__prev = d.__key, t.__next = c.__key;
			} else e.__prev = null;
		}
		if (i.__size = u, s.length) {
			let e = F();
			if (P(e)) {
				let t = new Set(s), n = new Set(o), { anchor: r, focus: i } = e;
				os(r, t, n) && Co(r, r.getNode(), this, l, c), os(i, t, n) && Co(i, i.getNode(), this, l, c), u !== 0 || this.canBeEmpty() || jc(this) || this.remove();
			}
		}
		return i;
	}
	getDOMSlot(e) {
		return new un(e);
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		if (W(t)) {
			let e = this.getIndent();
			e > 0 && (t.style.paddingInlineStart = 40 * e + "px", t.setAttribute("data-lexical-indent", String(e)));
			let n = this.getDirection();
			n && (t.dir = n);
		}
		return { element: t };
	}
	exportJSON() {
		let e = {
			children: [],
			direction: this.getDirection(),
			format: this.getFormatType(),
			indent: this.getIndent(),
			...super.exportJSON()
		}, t = this.getTextFormat(), n = this.getTextStyle();
		return t === 0 && n === "" || jc(this) || this.getChildren().some(N) || (t !== 0 && (e.textFormat = t), n !== "" && (e.textStyle = n)), e;
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setFormat(e.format).setIndent(e.indent).setDirection(e.direction).setTextFormat(e.textFormat || 0).setTextStyle(e.textStyle || "");
	}
	insertNewAfter(e, t) {
		return null;
	}
	canIndent() {
		return !0;
	}
	collapseAtStart(e) {
		return !1;
	}
	excludeFromCopy(e) {
		return !1;
	}
	canReplaceWith(e) {
		return !0;
	}
	canInsertAfter(e) {
		return !0;
	}
	canBeEmpty() {
		return !0;
	}
	canInsertTextBefore() {
		return !0;
	}
	canInsertTextAfter() {
		return !0;
	}
	isInline() {
		return !1;
	}
	isShadowRoot() {
		return !1;
	}
	canMergeWith(e) {
		return !1;
	}
	extractWithChild(e, t, n) {
		return !1;
	}
	canMergeWhenEmpty() {
		return !1;
	}
	reconcileObservedMutation(e, t) {
		let n = Yc(this, e, t), r = n.getFirstChild();
		for (let e = this.getFirstChild(); e; e = e.getNextSibling()) {
			let i = t.getElementByKey(e.getKey());
			i !== null && (r == null ? (n.insertChild(i), r = i) : r !== i && n.replaceChild(i, r), r = r.nextSibling);
		}
	}
};
function L(e) {
	return e instanceof as;
}
function os(e, t, n) {
	let r = e.getNode();
	for (; r;) {
		let e = r.__key;
		if (t.has(e) && !n.has(e)) return !0;
		r = r.getParent();
	}
	return !1;
}
var ss = class extends ga {
	decorate(e, t) {
		return null;
	}
	isIsolated() {
		return !1;
	}
	isInline() {
		return !0;
	}
	isKeyboardSelectable() {
		return !0;
	}
};
function R(e) {
	return e instanceof ss;
}
var cs = class e extends as {
	__cachedText;
	static getType() {
		return "root";
	}
	static clone() {
		return new e();
	}
	constructor() {
		super("root"), this.__cachedText = null;
	}
	getTopLevelElementOrThrow() {
		E(51);
	}
	getTextContent() {
		let e = this.__cachedText;
		return e === null || !Bo() && I()._dirtyType !== 0 ? super.getTextContent() : e;
	}
	remove() {
		E(52);
	}
	replace(e) {
		E(53);
	}
	insertBefore(e) {
		E(54);
	}
	insertAfter(e) {
		E(55);
	}
	updateDOM(e, t) {
		return !1;
	}
	splice(e, t, n) {
		for (let e of n) L(e) || R(e) || E(282);
		return super.splice(e, t, n);
	}
	static importJSON(e) {
		return V().updateFromJSON(e);
	}
	collapseAtStart() {
		return !0;
	}
};
function ls(e) {
	return e instanceof cs;
}
function us(e) {
	return new ms(gn(e._nodeMap));
}
function ds() {
	return new ms(new Map([["root", new cs()]]));
}
function fs(e) {
	let t = e.exportJSON(), n = e.constructor;
	if (t.type !== n.getType() && E(130, n.name), L(e)) {
		let r = t.children;
		Array.isArray(r) || E(59, n.name);
		let i = e.getChildren();
		for (let e = 0; e < i.length; e++) {
			let t = fs(i[e]);
			r.push(t);
		}
	}
	return t;
}
function ps(e) {
	return e instanceof ms;
}
var ms = class e {
	_nodeMap;
	_selection;
	_flushSync;
	_readOnly;
	constructor(e, t) {
		this._nodeMap = e, this._selection = t || null, this._flushSync = !1, this._readOnly = !1;
	}
	isEmpty() {
		return this._nodeMap.size === 1 && this._selection === null;
	}
	read(e, t) {
		return Zo(t && t.editor || null, this, e);
	}
	clone(t) {
		let n = new e(this._nodeMap, t === void 0 ? this._selection : t);
		return n._readOnly = !0, n;
	}
	toJSON() {
		return Zo(null, this, () => ({ root: fs(V()) }));
	}
}, hs = class extends as {
	static getType() {
		return "artificial";
	}
	createDOM(e) {
		return document.createElement("div");
	}
}, gs = class e extends as {
	static getType() {
		return "paragraph";
	}
	static clone(t) {
		return new e(t.__key);
	}
	createDOM(e) {
		let t = document.createElement("p"), n = _c(e.theme, "paragraph");
		return n !== void 0 && t.classList.add(...n), t;
	}
	updateDOM(e, t, n) {
		return !1;
	}
	static importDOM() {
		return { p: (e) => ({
			conversion: _s,
			priority: 0
		}) };
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		if (W(t)) {
			this.isEmpty() && t.append(document.createElement("br"));
			let e = this.getFormatType();
			e && (t.style.textAlign = e);
		}
		return { element: t };
	}
	static importJSON(e) {
		return z().updateFromJSON(e);
	}
	exportJSON() {
		let e = super.exportJSON();
		if (e.textFormat === void 0 || e.textStyle === void 0) {
			let t = this.getChildren().find(N);
			t ? (e.textFormat = t.getFormat(), e.textStyle = t.getStyle()) : (e.textFormat = this.getTextFormat(), e.textStyle = this.getTextStyle());
		}
		return e;
	}
	insertNewAfter(e, t) {
		let n = z();
		n.setTextFormat(e.format), n.setTextStyle(e.style);
		let r = this.getDirection();
		return n.setDirection(r), n.setFormat(this.getFormatType()), n.setStyle(this.getStyle()), this.insertAfter(n, t), n;
	}
	collapseAtStart() {
		let e = this.getChildren();
		if (e.length === 0 || N(e[0]) && e[0].getTextContent().trim() === "") {
			if (this.getNextSibling() !== null) return this.selectNext(), this.remove(), !0;
			if (this.getPreviousSibling() !== null) return this.selectPrevious(), this.remove(), !0;
		}
		return !1;
	}
};
function _s(e) {
	let t = z();
	if (al(t, e), rl(e, t), t.getFormatType() === "") {
		let n = e.getAttribute("align");
		n && n && n in tn && t.setFormat(n);
	}
	return il(t, e), { node: t };
}
function z() {
	return Nc(new gs());
}
function vs(e) {
	return e instanceof gs;
}
function ys(e, t, n, r, i) {
	let a = e._keyToDOMMap;
	a.clear(), e._editorState = ds(), e._pendingEditorState = r, e._compositionKey = null, e._dirtyType = 0, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), e._normalizedNodes = /* @__PURE__ */ new Set(), i && i.preserveUpdateQueue || (e._updateTags = /* @__PURE__ */ new Set(), e._updates = [], e._cascadeCount = 0), e._blockCursorElement = null;
	let o = e._observer;
	o !== null && (o.disconnect(), e._observer = null), t !== null && (t.textContent = ""), n !== null && (n.textContent = "", a.set("root", n));
}
function bs(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = e;
	for (; r;) {
		let { ownNodeConfig: e } = cl(r), i = r.transform;
		if (!n.has(i)) {
			n.add(i);
			let e = r.transform();
			e && t.add(e);
		}
		if (e) {
			let n = e.$transform;
			n && t.add(n), r = e.extends;
		} else {
			let e = Object.getPrototypeOf(r);
			r = e.prototype instanceof ga && e !== ga ? e : void 0;
		}
	}
	return t;
}
var xs = {
	$createDOM: (e, t) => e.createDOM(t._config, t),
	$decorateDOM: (e, t, n, r) => {},
	$exportDOM: (e, t) => {
		let n = As(t, e.getType());
		return n && n.exportDOM !== void 0 ? n.exportDOM(t, e) : e.exportDOM(t);
	},
	$extractWithChild: (e, t, n, r, i) => L(e) && e.extractWithChild(t, n, r),
	$getDOMSlot: (e, t, n) => e.getDOMSlot(t),
	$shouldExclude: (e, t, n) => L(e) && e.excludeFromCopy("html"),
	$shouldInclude: (e, t, n) => !t || e.isSelected(t),
	$updateDOM: (e, t, n, r) => e.updateDOM(t, n, r._config)
};
function Ss(e) {
	let t = e || {}, n = Go(), r = t.theme || {}, i = e === void 0 ? n : t.parentEditor || null, a = t.disableEvents || !1, o = ds(), s = t.namespace || (i === null ? oc() : i._config.namespace), c = t.editorState, l = [
		cs,
		Ra,
		Da,
		Ya,
		gs,
		hs,
		...t.nodes || []
	], { onError: u, html: d } = t, f = t.editable === void 0 || t.editable, p;
	if (e === void 0 && n !== null) p = n._nodes;
	else {
		p = /* @__PURE__ */ new Map();
		for (let e = 0; e < l.length; e++) {
			let t = l[e], n = null, r = null;
			if (typeof t != "function") {
				let e = t;
				t = e.replace, n = e.with, r = e.withKlass || null;
			}
			cl(t);
			let i = t.getType(), a = bs(t);
			p.set(i, {
				exportDOM: d && d.export ? d.export.get(t) : void 0,
				klass: t,
				replace: n,
				replaceWithKlass: r,
				sharedNodeState: jn(l[e]),
				transforms: a
			});
		}
	}
	let m = new Ts(o, i, p, {
		disableEvents: a,
		dom: {
			...xs,
			...e && e.dom
		},
		namespace: s,
		theme: r
	}, u || console.error, function(e, t) {
		let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), i = (e) => {
			Object.keys(e).forEach((t) => {
				let r = n.get(t);
				r === void 0 && (r = [], n.set(t, r)), r.push(e[t]);
			});
		};
		return e.forEach((e) => {
			let t = e.klass.importDOM;
			if (t == null || r.has(t)) return;
			r.add(t);
			let n = t.call(e.klass);
			n !== null && i(n);
		}), t && i(t), n;
	}(p, d ? d.import : void 0), f, e);
	return c !== void 0 && (m._pendingEditorState = c, m._dirtyType = 2), function(e) {
		e.registerCommand(Pr, $i, 0), e.registerCommand(Fr, ea, 0), e.registerCommand(Ir, ta, 0), e.registerCommand(Lr, na, 0), e.registerCommand(Yr, ia, 0);
	}(m), m;
}
function Cs(e, t) {
	let n = e.get(t);
	e.delete(t), n && n();
}
function ws(e, t, n) {
	return e.set(t, n), Cs.bind(null, e, t);
}
var Ts = class {
	static version;
	_headless;
	_parentEditor;
	_rootElement;
	_editorState;
	_pendingEditorState;
	_compositionKey;
	_deferred;
	_keyToDOMMap;
	_updates;
	_updating;
	_cascadeCount;
	_listeners;
	_commands;
	_nodes;
	_decorators;
	_pendingDecorators;
	_config;
	_dirtyType;
	_cloneNotNeeded;
	_dirtyLeaves;
	_dirtyElements;
	_normalizedNodes;
	_updateTags;
	_observer;
	_key;
	_onError;
	_htmlConversions;
	_window;
	_editable;
	_blockCursorElement;
	_createEditorArgs;
	constructor(e, t, n, r, i, a, o, s) {
		this._createEditorArgs = s, this._parentEditor = t, this._rootElement = null, this._editorState = e, this._pendingEditorState = null, this._compositionKey = null, this._deferred = [], this._keyToDOMMap = new _n(), this._updates = [], this._updating = !1, this._cascadeCount = 0, this._listeners = {
			decorator: /* @__PURE__ */ new Map(),
			editable: /* @__PURE__ */ new Map(),
			mutation: /* @__PURE__ */ new Map(),
			root: /* @__PURE__ */ new Map(),
			textcontent: /* @__PURE__ */ new Map(),
			update: /* @__PURE__ */ new Map()
		}, this._commands = /* @__PURE__ */ new Map(), this._config = r, this._nodes = n, this._decorators = {}, this._pendingDecorators = null, this._dirtyType = 0, this._cloneNotNeeded = /* @__PURE__ */ new Set(), this._dirtyLeaves = /* @__PURE__ */ new Set(), this._dirtyElements = /* @__PURE__ */ new Map(), this._normalizedNodes = /* @__PURE__ */ new Set(), this._updateTags = /* @__PURE__ */ new Set(), this._observer = null, this._key = oc(), this._onError = i, this._htmlConversions = a, this._editable = o, this._headless = t !== null && t._headless, this._window = null, this._blockCursorElement = null;
	}
	isComposing() {
		return this._compositionKey != null;
	}
	registerUpdateListener(e) {
		return ws(this._listeners.update, e);
	}
	registerEditableListener(e) {
		return ws(this._listeners.editable, e);
	}
	registerDecoratorListener(e) {
		return ws(this._listeners.decorator, e);
	}
	registerTextContentListener(e) {
		return ws(this._listeners.textcontent, e);
	}
	registerRootListener(e) {
		let t = this._listeners.root;
		return fu(ws(t, e, e(this._rootElement, null) || void 0), () => function(e, t, n) {
			let r = e.get(t);
			r && r(), e.set(t, t(...n) || void 0);
		}(t, e, [null, this._rootElement]));
	}
	registerCommand(e, t, n) {
		n === void 0 && E(35);
		let r = this._commands;
		r.has(e) || r.set(e, [
			new mn(),
			new mn(),
			new mn(),
			new mn(),
			new mn()
		]);
		let i = r.get(e);
		i === void 0 && E(36, String(e));
		let a = function(e) {
			return 7 & e;
		}(n), o = i[a];
		return a === n ? o.addBack(t) : o.addFront(t), () => {
			o.delete(t), i.every((e) => e.size === 0) && r.delete(e);
		};
	}
	registerMutationListener(e, t, n) {
		let r = this.resolveRegisteredNodeAfterReplacements(this.getRegisteredNode(e)).klass, i = this._listeners.mutation, a = i.get(t);
		a === void 0 && (a = /* @__PURE__ */ new Set(), i.set(t, a)), a.add(r);
		let o = n && n.skipInitialization;
		return o !== void 0 && o || this.initializeMutationListener(t, r), () => {
			a.delete(r), a.size === 0 && i.delete(t);
		};
	}
	getRegisteredNode(e) {
		let t = this._nodes.get(e.getType());
		return t === void 0 && E(37, e.name), t;
	}
	resolveRegisteredNodeAfterReplacements(e) {
		for (; e.replaceWithKlass;) e = this.getRegisteredNode(e.replaceWithKlass);
		return e;
	}
	initializeMutationListener(e, t) {
		let n = this._editorState, r = el(n).get(t.getType());
		if (!r) return;
		let i = /* @__PURE__ */ new Map();
		for (let e of r.keys()) i.set(e, "created");
		i.size > 0 && e(i, {
			dirtyLeaves: /* @__PURE__ */ new Set(),
			prevEditorState: n,
			updateTags: new Set(["registerMutationListener"])
		});
	}
	registerNodeTransformToKlass(e, t) {
		let n = this.getRegisteredNode(e);
		return n.transforms.add(t), n;
	}
	registerNodeTransform(e, t) {
		let n = this.registerNodeTransformToKlass(e, t), r = [n], i = n.replaceWithKlass;
		if (i != null) {
			let e = this.registerNodeTransformToKlass(i, t);
			r.push(e);
		}
		return function(e, t) {
			let n = el(e.getEditorState()), r = [];
			for (let e of t) {
				let t = n.get(e);
				t && r.push(t);
			}
			r.length !== 0 && e.update(() => {
				for (let e of r) for (let t of e.keys()) {
					let e = B(t);
					e && e.markDirty();
				}
			}, e._pendingEditorState === null ? { tag: va } : void 0);
		}(this, r.map((e) => e.klass.getType())), () => {
			r.forEach((e) => e.transforms.delete(t));
		};
	}
	hasNode(e) {
		return this._nodes.has(e.getType());
	}
	hasNodes(e) {
		return e.every(this.hasNode.bind(this));
	}
	dispatchCommand(e, t) {
		return U(this, e, t);
	}
	getDecorators() {
		return this._decorators;
	}
	getRootElement() {
		return this._rootElement;
	}
	getKey() {
		return this._key;
	}
	setRootElement(e) {
		let t = this._rootElement;
		if (e !== t) {
			let n = _c(this._config.theme, "root"), r = this._pendingEditorState || this._editorState;
			if (this._rootElement = e, ys(this, t, e, r, { preserveUpdateQueue: !0 }), t !== null && (this._config.disableEvents || ua(t), n != null && t.classList.remove(...n)), e !== null) {
				let t = Oc(e), r = e.style;
				r.userSelect = "text", r.whiteSpace = "pre-wrap", r.wordBreak = "break-word", e.setAttribute("data-lexical-editor", "true"), this._window = t, this._dirtyType = 2, On(this), this._updateTags.add(va), Qo(this), this._config.disableEvents || function(e, t) {
					let n = e.ownerDocument;
					Pi.set(e, n);
					let r = Fi.get(n) ?? 0;
					r < 1 && n.addEventListener("selectionchange", sa), Fi.set(n, r + 1), e.__lexicalEditor = t;
					let i = aa(e);
					for (let n = 0; n < Di.length; n++) {
						let [r, a] = Di[n], o = typeof a == "function" ? (e) => {
							la(e) || (ca(e), (t.isEditable() || r === "click") && a(e, t));
						} : (e) => {
							if (la(e)) return;
							ca(e);
							let n = t.isEditable();
							switch (r) {
								case "cut": return n && U(t, _i, e);
								case "copy": return U(t, gi, e);
								case "paste": return n && U(t, Hr, e);
								case "dragstart": return n && U(t, pi, e);
								case "dragover": return n && U(t, mi, e);
								case "dragend": return n && U(t, hi, e);
								case "focus": return n && U(t, Ci, e);
								case "blur": return n && U(t, wi, e);
								case "drop": return n && U(t, di, e);
							}
						};
						e.addEventListener(r, o), i.push(() => {
							e.removeEventListener(r, o);
						});
					}
				}(e, this), n != null && e.classList.add(...n);
			} else this._window = null, this._updateTags.add(va), Qo(this);
			$o("root", this, !1, e, t);
		}
	}
	getElementByKey(e) {
		return this._keyToDOMMap.get(e) || null;
	}
	getEditorState() {
		return this._editorState;
	}
	setEditorState(e, t) {
		e.isEmpty() && E(38);
		let n = e;
		n._readOnly && (n = us(e), n._selection = e._selection ? e._selection.clone() : null), Dn(this);
		let r = this._pendingEditorState, i = this._updateTags, a = t === void 0 ? null : t.tag;
		r === null || r.isEmpty() || (a != null && i.add(a), Qo(this)), this._pendingEditorState = n, this._dirtyType = 2, this._dirtyElements.set("root", !1), this._compositionKey = null, a != null && i.add(a), this._updating || Qo(this);
	}
	parseEditorState(e, t) {
		return function(e, t, n) {
			let r = ds(), i = Po, a = Io, o = Fo, s = t._dirtyElements, c = t._dirtyLeaves, l = t._cloneNotNeeded, u = t._dirtyType;
			t._dirtyElements = /* @__PURE__ */ new Map(), t._dirtyLeaves = /* @__PURE__ */ new Set(), t._cloneNotNeeded = /* @__PURE__ */ new Set(), t._dirtyType = 0, Po = r, Io = !1, Fo = t, Ds(null);
			try {
				let i = t._nodes;
				Xo(e.root, i), n && n(), r._readOnly = !0;
			} catch (e) {
				e instanceof Error && t._onError(e);
			} finally {
				t._dirtyElements = s, t._dirtyLeaves = c, t._cloneNotNeeded = l, t._dirtyType = u, Po = i, Io = a, Fo = o;
			}
			return r;
		}(typeof e == "string" ? JSON.parse(e) : e, this, t);
	}
	read(e) {
		return Qo(this), this.getEditorState().read(e, { editor: this });
	}
	update(e, t) {
		(function(e, t, n) {
			e._updating ? e._updates.push([t, n]) : rs(e, t, n);
		})(this, e, t);
	}
	focus(e, t = {}) {
		let n = this._rootElement;
		n !== null && (n.setAttribute("autocapitalize", "off"), is(this, () => {
			let r = F(), i = V();
			r === null ? i.getChildrenSize() !== 0 && (t.defaultSelection === "rootStart" ? i.selectStart() : i.selectEnd()) : r.dirty || nc(r.clone()), Tc("focus"), Ec(() => {
				n.removeAttribute("autocapitalize"), e && e();
			});
		}), this._pendingEditorState === null && n.removeAttribute("autocapitalize"));
	}
	blur() {
		let e = this._rootElement;
		e !== null && e.blur();
		let t = Rc(this._window);
		t !== null && t.removeAllRanges();
	}
	isEditable() {
		return this._editable;
	}
	setEditable(e) {
		this._editable !== e && (this._editable = e, $o("editable", this, !0, e));
	}
	toJSON() {
		return { editorState: this._editorState.toJSON() };
	}
};
Ts.version = pn;
var Es = null;
function Ds(e) {
	Es = e;
}
var Os = 1;
function ks(e, t) {
	let n = As(e, t);
	return n === void 0 && E(30, t), n;
}
function As(e, t) {
	return e._nodes.get(t);
}
var js = typeof queueMicrotask == "function" ? queueMicrotask : (e) => {
	Promise.resolve().then(e);
};
function Ms(e) {
	return R(Qs(e));
}
function Ns(e) {
	let t = document.activeElement;
	if (!W(t)) return !1;
	let n = t.nodeName;
	return R(Qs(e)) && (n === "INPUT" || n === "TEXTAREA" || t.contentEditable === "true" && Ls(t) == null);
}
function Ps(e, t, n) {
	let r = e.getRootElement();
	try {
		return r !== null && r.contains(t) && r.contains(n) && t !== null && !Ns(t) && Is(t) === e;
	} catch {
		return !1;
	}
}
function Fs(e) {
	return e instanceof Ts;
}
function Is(e) {
	let t = e;
	for (; t != null;) {
		let e = Ls(t);
		if (Fs(e)) return e;
		t = Cc(t);
	}
	return null;
}
function Ls(e) {
	return e ? e.__lexicalEditor : null;
}
function Rs(e) {
	return Za(e) || e.isToken();
}
function zs(e) {
	return Rs(e) || e.isSegmented();
}
function Bs(e) {
	return Vc(e) && e.nodeType === 3;
}
function Vs(e) {
	return Vc(e) && e.nodeType === 9;
}
function Hs(e) {
	let t = e;
	for (; t != null;) {
		if (Bs(t)) return t;
		t = t.firstChild;
	}
	return null;
}
function Us(e, t, n) {
	let r = $t[t];
	if (n !== null && (e & r) === (n & r)) return e;
	let i = e ^ r;
	return t === "subscript" ? i &= ~$t.superscript : t === "superscript" ? i &= ~$t.subscript : t === "lowercase" ? (i &= ~$t.uppercase, i &= ~$t.capitalize) : t === "uppercase" ? (i &= ~$t.lowercase, i &= ~$t.capitalize) : t === "capitalize" && (i &= ~$t.lowercase, i &= ~$t.uppercase), i;
}
function Ws(e) {
	return N(e) || Aa(e) || R(e);
}
function Gs(e, t) {
	let n = function() {
		let e = Es;
		return Es = null, e;
	}();
	if ((t ||= n && n.__key) != null) return void (e.__key = t);
	Vo(), Ho();
	let r = I(), i = Uo(), a = "" + Os++;
	i._nodeMap.set(a, e), L(e) ? r._dirtyElements.set(a, !0) : r._dirtyLeaves.add(a), r._cloneNotNeeded.add(a), r._dirtyType === 0 && (r._dirtyType = 1), e.__key = a;
}
function Ks(e) {
	let t = e.getParent();
	if (t !== null) {
		let n = e.getWritable(), r = t.getWritable(), i = e.getPreviousSibling(), a = e.getNextSibling(), o = a === null ? null : a.__key, s = i === null ? null : i.__key, c = i === null ? null : i.getWritable(), l = a === null ? null : a.getWritable();
		i === null && (r.__first = o), a === null && (r.__last = s), c !== null && (c.__next = o), l !== null && (l.__prev = s), n.__prev = null, n.__next = null, n.__parent = null, r.__size--;
	}
}
function qs(e) {
	Ho(), ma(e) && E(323, e.__key, e.__type);
	let t = e.getLatest(), n = t.__parent, r = Uo(), i = I(), a = r._nodeMap, o = i._dirtyElements;
	n !== null && function(e, t, n) {
		let r = e;
		for (; r !== null;) {
			if (n.has(r)) return;
			let e = t.get(r);
			if (e === void 0) break;
			n.set(r, !1), r = e.__parent;
		}
	}(n, a, o);
	let s = t.__key;
	i._dirtyType === 0 && (i._dirtyType = 1), L(e) ? o.set(s, !0) : i._dirtyLeaves.add(s);
}
function Js(e) {
	Vo();
	let t = I(), n = t._compositionKey;
	if (e !== n) {
		if (t._compositionKey = e, n !== null) {
			let e = B(n);
			e !== null && e.getWritable();
		}
		if (e !== null) {
			let t = B(e);
			t !== null && t.getWritable();
		}
	}
}
function Ys() {
	return Bo() ? null : I()._compositionKey;
}
function B(e, t) {
	let n = (t || Uo())._nodeMap.get(e);
	return n === void 0 ? null : n;
}
function Xs(e, t) {
	let n = Zs(e, I());
	return n === void 0 ? null : B(n, t);
}
function Zs(e, t) {
	return e[`__lexicalKey_${t._key}`];
}
function Qs(e, t) {
	let n = e;
	for (; n != null;) {
		let e = Xs(n, t);
		if (e !== null) return e;
		n = Cc(n);
	}
	return null;
}
function $s(e) {
	let t = e._decorators, n = Object.assign({}, t);
	return e._pendingDecorators = n, n;
}
function ec(e) {
	return e.read(() => V().getTextContent());
}
function V() {
	return tc(Uo());
}
function tc(e) {
	return e._nodeMap.get("root");
}
function nc(e) {
	Vo();
	let t = Uo();
	e !== null && (e.dirty = !0, e.setCachedNodes(null)), t._selection = e;
}
function rc(e) {
	let t = I(), n = function(e, t) {
		let n = e;
		for (; n != null;) {
			let e = Zs(n, t);
			if (e !== void 0) return e;
			n = Cc(n);
		}
		return null;
	}(e, t);
	return n === null ? e === t.getRootElement() ? B("root") : null : B(n);
}
function ic(e) {
	return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(e);
}
function ac(e) {
	let t = [];
	for (let n = e; n !== null; n = n._parentEditor) t.push(n);
	return t;
}
function oc() {
	return Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 5);
}
function sc(e) {
	return Bs(e) ? e.nodeValue : null;
}
function cc(e, t, n) {
	let r = Rc(kc(t));
	if (r === null) return;
	let i = r.anchorNode, { anchorOffset: a, focusOffset: o } = r;
	if (i !== null) {
		let t = sc(i), r = Qs(i);
		if (t !== null && N(r)) {
			if ((t === Xt || t === Qt) && n) {
				let e = n.length;
				t = n, a = e, o = e;
			}
			t !== null && lc(r, t, a, o, e);
		}
	}
}
function lc(e, t, n, r, i) {
	let a = e;
	if (a.isAttached() && (i || !a.isDirty())) {
		let o = a.isComposing(), s = t;
		if ((o || i) && (t.endsWith(Xt) && (s = t.slice(0, -Xt.length)), i)) {
			let e = Qt, t;
			for (; (t = s.indexOf(e)) !== -1;) s = s.slice(0, t) + s.slice(t + e.length), n !== null && n > t && (n = Math.max(t, n - e.length)), r !== null && r > t && (r = Math.max(t, r - e.length));
		}
		let c = a.getTextContent();
		if (i || s !== c) {
			if (s === "") {
				if (Js(null), Lt || Ft || Bt) a.remove();
				else {
					let e = I();
					setTimeout(() => {
						e.update(() => {
							a.isAttached() && a.remove();
						});
					}, 20);
				}
				return;
			}
			let t = a.getParent(), i = bo(), c = a.getTextContentSize(), l = Ys(), u = a.getKey();
			if (a.isToken() || l !== null && u === l && !o || P(i) && (t !== null && !t.canInsertTextBefore() && i.anchor.offset === 0 || i.anchor.key === e.__key && i.anchor.offset === 0 && !a.canInsertTextBefore() && !o || i.focus.key === e.__key && i.focus.offset === c && !a.canInsertTextAfter() && !o)) return void a.markDirty();
			let d = F();
			if (!P(d) || n === null || r === null) return void uc(a, s, d);
			if (d.setTextNodeRange(a, n, a, r), a.isSegmented()) {
				let e = qa(a.getTextContent());
				a.replace(e), a = e;
			}
			uc(a, s, d);
		}
	}
}
function uc(e, t, n) {
	if (e.setTextContent(t), P(n)) {
		let t = e.getKey(), r = !1;
		for (let i of ["anchor", "focus"]) {
			let a = n[i];
			a.type === "text" && a.key === t && (a.offset = Dl(e, a.offset, "clamp"), r = !0);
		}
		r && (n._cachedNodes = null, n._cachedIsBackward = null);
	}
}
function dc(e, t, n) {
	let r = t[n] || !1;
	return r === "any" || r === e[n];
}
function fc(e, t) {
	return dc(e, t, "altKey") && dc(e, t, "ctrlKey") && dc(e, t, "shiftKey") && dc(e, t, "metaKey");
}
function H(e, t, n) {
	if (!fc(e, n)) return !1;
	if (e.key.toLowerCase() === t.toLowerCase()) return !0;
	if (t.length > 1 || e.key.length === 1 && e.key.charCodeAt(0) <= 127) return !1;
	if (e.code.startsWith("Digit") && /^\d$/.test(t)) return e.code === `Digit${t}`;
	let r = "Key" + t.toUpperCase();
	return e.code === r;
}
var pc = {
	ctrlKey: !Mt,
	metaKey: Mt
}, mc = {
	altKey: Mt,
	ctrlKey: !Mt
};
function hc(e) {
	return e.key === "Backspace";
}
function gc(e) {
	let t = V();
	if (P(e)) {
		let t = e.anchor, n = e.focus, r = t.getNode().getTopLevelElementOrThrow().getParentOrThrow();
		return t.set(r.getKey(), 0, "element"), n.set(r.getKey(), r.getChildrenSize(), "element"), Un(e), e;
	}
	{
		let e = t.select(0, t.getChildrenSize());
		return nc(Un(e)), e;
	}
}
function _c(e, t) {
	e.__lexicalClassNameCache === void 0 && (e.__lexicalClassNameCache = {});
	let n = e.__lexicalClassNameCache, r = n[t];
	if (r !== void 0) return r;
	let i = e[t];
	if (typeof i == "string") {
		let e = lu(i);
		return n[t] = e, e;
	}
	return i;
}
function vc(e, t, n, r, i) {
	if (n.size === 0) return;
	let a = r.__type, o = r.__key, s = t.get(a);
	s === void 0 && E(33, a);
	let c = s.klass, l = e.get(c);
	l === void 0 && (l = /* @__PURE__ */ new Map(), e.set(c, l));
	let u = l.get(o), d = u === "destroyed" && i === "created";
	(u === void 0 || d) && l.set(o, d ? "updated" : i);
}
function yc(e, t, n) {
	let r = e.getParent(), i = n, a = e;
	return r !== null && (t && n === 0 ? (i = a.getIndexWithinParent(), a = r) : t || n !== a.getChildrenSize() || (i = a.getIndexWithinParent() + 1, a = r)), a.getChildAtIndex(t ? i - 1 : i);
}
function bc(e, t) {
	let n = e.offset;
	if (e.type === "element") return yc(e.getNode(), t, n);
	{
		let r = e.getNode();
		if (t && n === 0 || !t && n === r.getTextContentSize()) {
			let e = t ? r.getPreviousSibling() : r.getNextSibling();
			return e === null ? yc(r.getParentOrThrow(), t, r.getIndexWithinParent() + +!t) : e;
		}
	}
	return null;
}
function xc(e) {
	let t = kc(e).event, n = t && t.inputType;
	return n === "insertFromPaste" || n === "insertFromPasteAsQuotation";
}
function U(e, t, n) {
	return es(e, t, n, e);
}
function Sc(e, t) {
	let n = e._keyToDOMMap.get(t);
	return n === void 0 && E(75, t), n;
}
function Cc(e) {
	let t = e.assignedSlot || e.parentElement;
	return Hc(t) ? t.host : t;
}
function wc(e) {
	return Vs(e) ? e : W(e) ? e.ownerDocument : null;
}
function Tc(e) {
	Vo(), I()._updateTags.add(e);
}
function Ec(e) {
	Vo(), I()._deferred.push(e);
}
function Dc(e, t) {
	let n = e.getParent();
	for (; n !== null;) {
		if (n.is(t)) return !0;
		n = n.getParent();
	}
	return !1;
}
function Oc(e) {
	let t = wc(e);
	return t ? t.defaultView : null;
}
function kc(e) {
	let t = e._window;
	return t === null && E(78), t;
}
function Ac(e) {
	let t = e.getParentOrThrow();
	for (; t !== null;) {
		if (jc(t)) return t;
		t = t.getParentOrThrow();
	}
	return t;
}
function jc(e) {
	return ls(e) || L(e) && e.isShadowRoot();
}
function Mc(e, t = !1) {
	let n = e.constructor.clone(e);
	return Gs(n, null), n.afterCloneFrom(e), t || n.resetOnCopyNodeFrom(e), n;
}
function Nc(e) {
	let t = I(), n = e.getType(), r = As(t, n);
	r === void 0 && E(200, e.constructor.name, n);
	let { replace: i, replaceWithKlass: a } = r;
	if (i !== null) {
		let t = i(e), r = t.constructor;
		return a === null ? t instanceof e.constructor && r !== e.constructor || E(202, r.name, r.getType(), e.constructor.name, n) : t instanceof a || E(201, a.name, a.getType(), r.name, r.getType(), e.constructor.name, n), t.__key === e.__key && E(203, e.constructor.name, n, r.name, r.getType()), t;
	}
	return e;
}
function Pc(e, t) {
	!ls(e.getParent()) || L(t) || R(t) || E(99);
}
function Fc(e) {
	let t = B(e);
	return t === null && E(63, e), t;
}
function Ic(e) {
	return (R(e) || L(e) && !e.canBeEmpty()) && !e.isInline();
}
function Lc(e, t, n) {
	n.style.removeProperty("caret-color"), t._blockCursorElement = null;
	let r = e.parentElement;
	r !== null && r.removeChild(e);
}
function Rc(e) {
	return D ? (e || window).getSelection() : null;
}
function zc(e) {
	let t = Oc(e);
	return t ? t.getSelection() : null;
}
function Bc(e) {
	return W(e) && e.tagName === "A";
}
function W(e) {
	return Vc(e) && e.nodeType === 1;
}
function Vc(e) {
	return typeof e == "object" && !!e && "nodeType" in e && typeof e.nodeType == "number";
}
function Hc(e) {
	return Vc(e) && e.nodeType === 11;
}
var Uc = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
function Wc(e) {
	return !(!W(e) || !e.style.display.startsWith("inline")) || Uc.test(e.nodeName);
}
var Gc = /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
function Kc(e) {
	return (!W(e) || !e.style.display.startsWith("inline")) && Gc.test(e.nodeName);
}
function qc(e) {
	if (R(e) && !e.isInline()) return !0;
	if (!L(e) || jc(e)) return !1;
	let t = e.getFirstChild(), n = t === null || Aa(t) || N(t) || t.isInline();
	return !e.isInline() && !1 !== e.canBeEmpty() && n;
}
function G() {
	return I();
}
function Jc(e = G()) {
	return e._config.dom || xs;
}
function Yc(e, t, n = G()) {
	let r = Jc(n).$getDOMSlot(e, t, n);
	return L(e) && (Xc(r) || E(344, e.getKey(), e.getType())), r;
}
function Xc(e) {
	return e instanceof un;
}
function Zc(e, t, n = G()) {
	return Hs(Yc(e, t, n).element);
}
var Qc = /* @__PURE__ */ new WeakMap(), $c = /* @__PURE__ */ new Map();
function el(e) {
	if (!e._readOnly && e.isEmpty()) return $c;
	e._readOnly || E(192);
	let t = Qc.get(e);
	return t || (t = function(e) {
		let t = /* @__PURE__ */ new Map();
		for (let [n, r] of e._nodeMap) {
			let e = r.__type, i = t.get(e);
			i || (i = /* @__PURE__ */ new Map(), t.set(e, i)), i.set(n, r);
		}
		return t;
	}(e), Qc.set(e, t)), t;
}
function tl(e) {
	let t = e.constructor.clone(e);
	return t.afterCloneFrom(e), t;
}
function nl(e) {
	return (t = tl(e))[pa] = !0, t;
	var t;
}
function rl(e, t) {
	let n = e.getAttribute("data-lexical-indent");
	if (n !== null) {
		let e = parseInt(n, 10);
		if (Number.isFinite(e) && e >= 0) return void t.setIndent(e);
	}
	let r = parseInt(e.style.paddingInlineStart, 10) || 0, i = Math.round(r / 40);
	t.setIndent(i);
}
function il(e, t) {
	let n = t.getAttribute("dir");
	return n === "ltr" || n === "rtl" ? e.setDirection(n) : e;
}
function al(e, t) {
	let n = t.style.textAlign;
	return n && n in tn ? e.setFormat(n) : e;
}
function ol(e) {
	return !0 === e.__lexicalUnmanaged;
}
function sl(e, t) {
	return function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	}(e, t) && e[t] !== ga[t];
}
function cl(e) {
	let t = on in e.prototype ? e.prototype[on]() : void 0, n = function(e) {
		if (!(e === ga || e.prototype instanceof ga)) {
			let t = "<unknown>", n = "<unknown>";
			try {
				t = e.getType();
			} catch {}
			try {
				Ts.version && (n = JSON.parse(Ts.version));
			} catch {}
			E(290, e.name, t, n);
		}
		return e === ss || e === as || e === ga;
	}(e), r = !n && sl(e, "getType") ? e.getType() : void 0, i, a = r;
	if (t) if (r) i = t[r];
	else for (let [e, n] of Object.entries(t)) a = e, i = n;
	if (!n && a && (sl(e, "getType") || (e.getType = () => a), sl(e, "clone") || (e.clone = (t) => (Ds(t), new e())), sl(e, "importJSON") || (e.importJSON = i && i.$importJSON || ((t) => new e().updateFromJSON(t))), !sl(e, "importDOM") && i)) {
		let { importDOM: t } = i;
		t && (e.importDOM = () => t);
	}
	return {
		ownNodeConfig: i,
		ownNodeType: a
	};
}
function ll(e) {
	let t = G();
	return Vo(), new (t.resolveRegisteredNodeAfterReplacements(t.getRegisteredNode(e))).klass();
}
var ul = (e, t) => {
	let n = e;
	for (; n != null && !ls(n);) {
		if (t(n)) return n;
		n = n.getParent();
	}
	return null;
};
function dl(e, t) {
	let n = [], r = e.__first;
	for (; r !== null;) {
		let e = t === null ? B(r) : t.get(r);
		e ?? E(174), n.push(r), r = e.__next;
	}
	return n;
}
var fl = {
	next: "previous",
	previous: "next"
}, pl = class {
	origin;
	constructor(e) {
		this.origin = e;
	}
	[Symbol.iterator]() {
		return Ll({
			hasNext: xl,
			initial: this.getAdjacentCaret(),
			map: (e) => e,
			step: (e) => e.getAdjacentCaret()
		});
	}
	getAdjacentCaret() {
		return K(this.getNodeAtCaret(), this.direction);
	}
	getSiblingCaret() {
		return K(this.origin, this.direction);
	}
	remove() {
		let e = this.getNodeAtCaret();
		return e && e.remove(), this;
	}
	replaceOrInsert(e, t) {
		let n = this.getNodeAtCaret();
		return e.is(this.origin) || e.is(n) || (n === null ? this.insert(e) : n.replace(e, t)), this;
	}
	splice(e, t, n = "next") {
		let r = n === this.direction ? t : Array.from(t).reverse(), i = this, a = this.getParentAtCaret(), o = /* @__PURE__ */ new Map();
		for (let t = i.getAdjacentCaret(); t !== null && o.size < e; t = t.getAdjacentCaret()) {
			let e = t.origin.getWritable();
			o.set(e.getKey(), e);
		}
		for (let e of r) {
			if (o.size > 0) {
				let t = i.getNodeAtCaret();
				if (t) {
					if (o.delete(t.getKey()), o.delete(e.getKey()), !(t.is(e) || i.origin.is(e))) {
						let n = e.getParent();
						n && n.is(a) && e.remove(), t.replace(e);
					}
				} else t === null && E(263, Array.from(o).join(" "));
			} else i.insert(e);
			i = K(e, this.direction);
		}
		for (let e of o.values()) e.remove();
		return this;
	}
}, ml = class e extends pl {
	type = "child";
	getLatest() {
		let e = this.origin.getLatest();
		return e === this.origin ? this : kl(e, this.direction);
	}
	getParentCaret(e = "root") {
		return K(_l(this.getParentAtCaret(), e), this.direction);
	}
	getFlipped() {
		let e = gl(this.direction);
		return K(this.getNodeAtCaret(), e) || kl(this.origin, e);
	}
	getParentAtCaret() {
		return this.origin;
	}
	getChildCaret() {
		return this;
	}
	isSameNodeCaret(t) {
		return t instanceof e && this.direction === t.direction && this.origin.is(t.origin);
	}
	isSamePointCaret(e) {
		return this.isSameNodeCaret(e);
	}
}, hl = {
	root: ls,
	shadowRoot: jc
};
function gl(e) {
	return fl[e];
}
function _l(e, t = "root") {
	return hl[t](e) ? null : e;
}
var vl = class e extends pl {
	type = "sibling";
	getLatest() {
		let e = this.origin.getLatest();
		return e === this.origin ? this : K(e, this.direction);
	}
	getSiblingCaret() {
		return this;
	}
	getParentAtCaret() {
		return this.origin.getParent();
	}
	getChildCaret() {
		return L(this.origin) ? kl(this.origin, this.direction) : null;
	}
	getParentCaret(e = "root") {
		return K(_l(this.getParentAtCaret(), e), this.direction);
	}
	getFlipped() {
		let e = gl(this.direction);
		return K(this.getNodeAtCaret(), e) || kl(this.origin.getParentOrThrow(), e);
	}
	isSamePointCaret(t) {
		return t instanceof e && this.direction === t.direction && this.origin.is(t.origin);
	}
	isSameNodeCaret(t) {
		return (t instanceof e || t instanceof yl) && this.direction === t.direction && this.origin.is(t.origin);
	}
}, yl = class e extends pl {
	type = "text";
	offset;
	constructor(e, t) {
		super(e), this.offset = t;
	}
	getLatest() {
		let e = this.origin.getLatest();
		return e === this.origin ? this : El(e, this.direction, this.offset);
	}
	getParentAtCaret() {
		return this.origin.getParent();
	}
	getChildCaret() {
		return null;
	}
	getParentCaret(e = "root") {
		return K(_l(this.getParentAtCaret(), e), this.direction);
	}
	getFlipped() {
		return El(this.origin, gl(this.direction), this.offset);
	}
	isSamePointCaret(t) {
		return t instanceof e && this.direction === t.direction && this.origin.is(t.origin) && this.offset === t.offset;
	}
	isSameNodeCaret(t) {
		return (t instanceof vl || t instanceof e) && this.direction === t.direction && this.origin.is(t.origin);
	}
	getSiblingCaret() {
		return K(this.origin, this.direction);
	}
};
function bl(e) {
	return e instanceof yl;
}
function xl(e) {
	return e instanceof vl;
}
function Sl(e) {
	return e instanceof ml;
}
var Cl = {
	next: class extends yl {
		direction = "next";
		getNodeAtCaret() {
			return this.origin.getNextSibling();
		}
		insert(e) {
			return this.origin.insertAfter(e), this;
		}
	},
	previous: class extends yl {
		direction = "previous";
		getNodeAtCaret() {
			return this.origin.getPreviousSibling();
		}
		insert(e) {
			return this.origin.insertBefore(e), this;
		}
	}
}, wl = {
	next: class extends vl {
		direction = "next";
		getNodeAtCaret() {
			return this.origin.getNextSibling();
		}
		insert(e) {
			return this.origin.insertAfter(e), this;
		}
	},
	previous: class extends vl {
		direction = "previous";
		getNodeAtCaret() {
			return this.origin.getPreviousSibling();
		}
		insert(e) {
			return this.origin.insertBefore(e), this;
		}
	}
}, Tl = {
	next: class extends ml {
		direction = "next";
		getNodeAtCaret() {
			return this.origin.getFirstChild();
		}
		insert(e) {
			return this.origin.splice(0, 0, [e]), this;
		}
	},
	previous: class extends ml {
		direction = "previous";
		getNodeAtCaret() {
			return this.origin.getLastChild();
		}
		insert(e) {
			return this.origin.splice(this.origin.getChildrenSize(), 0, [e]), this;
		}
	}
};
function K(e, t) {
	return e ? new wl[t](e) : null;
}
function El(e, t, n) {
	return e ? new Cl[t](e, Dl(e, n)) : null;
}
function Dl(e, t, n = "error") {
	let r = e.getTextContentSize(), i = t === "next" ? r : t === "previous" ? 0 : t;
	return (i < 0 || i > r) && (n !== "clamp" && At(284, String(t), String(r), e.getKey()), i = i < 0 ? 0 : r), i;
}
function Ol(e, t) {
	return new Nl(e, t);
}
function kl(e, t) {
	return L(e) ? new Tl[t](e) : null;
}
function Al(e) {
	return e && e.getChildCaret() || e;
}
function jl(e) {
	return e && Al(e.getAdjacentCaret());
}
var Ml = class e {
	type = "node-caret-range";
	direction;
	anchor;
	focus;
	constructor(e, t, n) {
		this.anchor = e, this.focus = t, this.direction = n;
	}
	getLatest() {
		let t = this.anchor.getLatest(), n = this.focus.getLatest();
		return t === this.anchor && n === this.focus ? this : new e(t, n, this.direction);
	}
	isCollapsed() {
		return this.anchor.isSamePointCaret(this.focus);
	}
	getTextSlices() {
		let e = (e) => {
			let t = this[e].getLatest();
			return bl(t) ? function(e, t) {
				let { direction: n, origin: r } = e;
				return Ol(e, Dl(r, t === "focus" ? gl(n) : n) - e.offset);
			}(t, e) : null;
		}, t = e("anchor"), n = e("focus");
		if (t && n) {
			let { caret: e } = t, { caret: r } = n;
			if (e.isSameNodeCaret(r)) return [Ol(e, r.offset - e.offset), null];
		}
		return [t, n];
	}
	iterNodeCarets(e = "root") {
		let t = bl(this.anchor) ? this.anchor.getSiblingCaret() : this.anchor.getLatest(), n = this.focus.getLatest(), r = bl(n), i = (t) => t.isSameNodeCaret(n) ? null : jl(t) || t.getParentCaret(e);
		return Ll({
			hasNext: (e) => e !== null && !(r && n.isSameNodeCaret(e)),
			initial: t.isSameNodeCaret(n) ? null : i(t),
			map: (e) => e,
			step: i
		});
	}
	[Symbol.iterator]() {
		return this.iterNodeCarets("root");
	}
}, Nl = class {
	type = "slice";
	caret;
	distance;
	constructor(e, t) {
		this.caret = e, this.distance = t;
	}
	getSliceIndices() {
		let { distance: e, caret: { offset: t } } = this, n = t + e;
		return n < t ? [n, t] : [t, n];
	}
	getTextContent() {
		let [e, t] = this.getSliceIndices();
		return this.caret.origin.getTextContent().slice(e, t);
	}
	getTextContentSize() {
		return Math.abs(this.distance);
	}
	removeTextSlice() {
		let { caret: { origin: e, direction: t } } = this, [n, r] = this.getSliceIndices(), i = e.getTextContent();
		return El(e.setTextContent(i.slice(0, n) + i.slice(r)), t, n);
	}
};
function Pl(e) {
	return Il(e, K(V(), e.direction));
}
function Fl(e) {
	return Il(e, e);
}
function Il(e, t) {
	return e.direction !== t.direction && E(265), new Ml(e, t, e.direction);
}
function Ll(e) {
	let { initial: t, hasNext: n, step: r, map: i } = e, a = t;
	return {
		[Symbol.iterator]() {
			return this;
		},
		next() {
			if (!n(a)) return {
				done: !0,
				value: void 0
			};
			let e = {
				done: !1,
				value: i(a)
			};
			return a = r(a), e;
		}
	};
}
function Rl(e, t) {
	let n = Hl(e.origin, t.origin);
	switch (n === null && E(275, e.origin.getKey(), t.origin.getKey()), n.type) {
		case "same": {
			let n = e.type === "text", r = t.type === "text";
			return n && r ? function(e, t) {
				return Math.sign(e - t);
			}(e.offset, t.offset) : e.type === t.type ? 0 : n ? -1 : r ? 1 : e.type === "child" ? -1 : 1;
		}
		case "ancestor": return e.type === "child" ? -1 : 1;
		case "descendant": return t.type === "child" ? 1 : -1;
		case "branch": return zl(n);
	}
}
function zl(e) {
	let { a: t, b: n } = e, r = t.__key, i = n.__key, a = t, o = n;
	for (; a && o; a = a.getNextSibling(), o = o.getNextSibling()) {
		if (a.__key === i) return -1;
		if (o.__key === r) return 1;
	}
	return a === null ? 1 : -1;
}
function Bl(e, t) {
	return t.is(e);
}
function Vl(e) {
	return L(e) ? [e.getLatest(), null] : [e.getParent(), e.getLatest()];
}
function Hl(e, t) {
	if (e.is(t)) return {
		commonAncestor: e,
		type: "same"
	};
	let n = /* @__PURE__ */ new Map();
	for (let [t, r] = Vl(e); t; r = t, t = t.getParent()) n.set(t, r);
	for (let [r, i] = Vl(t); r; i = r, r = r.getParent()) {
		let a = n.get(r);
		if (a !== void 0) return a === null ? (Bl(e, r) || E(276), {
			commonAncestor: r,
			type: "ancestor"
		}) : i === null ? (Bl(t, r) || E(277), {
			commonAncestor: r,
			type: "descendant"
		}) : ((L(a) || Bl(e, a)) && (L(i) || Bl(t, i)) && r.is(a.getParent()) && r.is(i.getParent()) || E(278), {
			a,
			b: i,
			commonAncestor: r,
			type: "branch"
		});
	}
	return null;
}
function Ul(e, t) {
	let { type: n, key: r, offset: i } = e, a = Fc(e.key);
	return n === "text" ? (N(a) || E(266, a.getType(), r), El(a, t, i)) : (L(a) || E(267, a.getType(), r), nu(a, e.offset, t));
}
function Wl(e, t) {
	let { origin: n, direction: r } = t, i = r === "next";
	bl(t) ? e.set(n.getKey(), t.offset, "text") : xl(t) ? N(n) ? e.set(n.getKey(), Dl(n, r), "text") : e.set(n.getParentOrThrow().getKey(), n.getIndexWithinParent() + +!!i, "element") : (Sl(t) && L(n) || E(268), e.set(n.getKey(), i ? 0 : n.getChildrenSize(), "element"));
}
function Gl(e) {
	let t = F(), n = P(t) ? t : _o();
	return Kl(n, e), nc(n), n;
}
function Kl(e, t) {
	Wl(e.anchor, t.anchor), Wl(e.focus, t.focus);
}
function ql(e) {
	let { anchor: t, focus: n } = e, r = Ul(t, "next"), i = Ul(n, "next"), a = Rl(r, i) <= 0 ? "next" : "previous";
	return Il(eu(r, a), eu(i, a));
}
function Jl(e) {
	let { direction: t, origin: n } = e, r = K(n, gl(t)).getNodeAtCaret();
	return r ? K(r, t) : kl(n.getParentOrThrow(), t);
}
function Yl(e, t = "root") {
	let n = [e];
	for (let r = Sl(e) ? e.getParentCaret(t) : e.getSiblingCaret(); r !== null; r = r.getParentCaret(t)) n.push(Jl(r));
	return n;
}
function Xl(e) {
	return !!e && e.origin.isAttached();
}
function Zl(e, t = "removeEmptySlices") {
	if (e.isCollapsed()) return e;
	let n = "root", r = "next", i = t, a = tu(e, r), o = Yl(a.anchor, n), s = Yl(a.focus.getFlipped(), n), c = /* @__PURE__ */ new Set(), l = [];
	for (let e of a.iterNodeCarets(n)) if (Sl(e)) c.add(e.origin.getKey());
	else if (xl(e)) {
		let { origin: t } = e;
		L(t) && !c.has(t.getKey()) || l.push(t);
	}
	for (let e of l) e.remove();
	for (let e of a.getTextSlices()) {
		if (!e) continue;
		let { origin: t } = e.caret, n = t.getTextContentSize(), a = Jl(K(t, r)), c = t.getMode();
		if (Math.abs(e.distance) === n && i === "removeEmptySlices" || c === "token" && e.distance !== 0) a.remove();
		else if (e.distance !== 0) {
			i = "removeEmptySlices";
			let t = e.removeTextSlice(), n = e.caret.origin;
			if (c === "segmented") {
				let e = t.origin, n = qa(e.getTextContent()).setStyle(e.getStyle()).setFormat(e.getFormat());
				a.replaceOrInsert(n), t = El(n, r, t.offset);
			}
			n.is(o[0].origin) && (o[0] = t), n.is(s[0].origin) && (s[0] = t.getFlipped());
		}
	}
	let u, d;
	for (let e of o) if (Xl(e)) {
		u = Ql(e);
		break;
	}
	for (let e of s) if (Xl(e)) {
		d = Ql(e);
		break;
	}
	let f = function(e, t, n) {
		if (!e || !t) return null;
		let r = e.getParentAtCaret(), i = t.getParentAtCaret();
		if (!r || !i) return null;
		let a = r.getParents().reverse();
		a.push(r);
		let o = i.getParents().reverse();
		o.push(i);
		let s = Math.min(a.length, o.length), c;
		for (c = 0; c < s && a[c] === o[c]; c++);
		let l = (e, t) => {
			let n;
			for (let r = c; r < e.length; r++) {
				let i = e[r];
				if (jc(i)) return;
				!n && t(i) && (n = i);
			}
			return n;
		}, u = l(a, qc), d = u && l(o, (e) => n.has(e.getKey()) && qc(e));
		return u && d ? [u, d] : null;
	}(u, d, c);
	if (f) {
		let [e, t] = f;
		kl(e, "previous").splice(0, t.getChildren());
		let n = t.getParent();
		for (t.remove(!0); n && n.isEmpty();) {
			let e = n;
			n = n.getParent(), e.remove(!0);
		}
	}
	let p = [
		u,
		d,
		...o,
		...s
	].find(Xl);
	if (p) return Fl(eu(Ql(p), e.direction));
	E(269, JSON.stringify(o.map((e) => e.origin.__key)));
}
function Ql(e) {
	let t = function(e) {
		let t = e;
		for (; Sl(t);) {
			let e = jl(t);
			if (!Sl(e)) break;
			t = e;
		}
		return t;
	}(e.getLatest()), { direction: n } = t;
	if (N(t.origin)) return bl(t) ? t : El(t.origin, n, n);
	let r = t.getAdjacentCaret();
	return xl(r) && N(r.origin) ? El(r.origin, n, gl(n)) : t;
}
function $l(e) {
	return bl(e) && e.offset !== Dl(e.origin, e.direction);
}
function eu(e, t) {
	return e.direction === t ? e : e.getFlipped();
}
function tu(e, t) {
	return e.direction === t ? e : Il(eu(e.focus, t), eu(e.anchor, t));
}
function nu(e, t, n) {
	let r = kl(e, "next");
	for (let e = 0; e < t; e++) {
		let e = r.getAdjacentCaret();
		if (e === null) break;
		r = e;
	}
	return eu(r, n);
}
function ru(e) {
	let { origin: t, offset: n, direction: r } = e;
	if (n === Dl(t, r)) return e.getSiblingCaret();
	if (n === Dl(t, gl(r))) return Jl(e.getSiblingCaret());
	let [i] = t.splitText(n);
	return N(i) || E(281), eu(K(i, "next"), r);
}
function iu(e, t) {
	return !0;
}
function au(e, { $copyElementNode: t = Mc, $splitTextPointCaretNext: n = ru, rootMode: r = "shadowRoot", $shouldSplit: i = iu, removeEmptyDestination: a = !1 } = {}) {
	if (bl(e)) return n(e);
	let o = e.getParentCaret(r);
	if (o) {
		let { origin: n } = o;
		if (Sl(e)) {
			let e = Jl(o);
			if (a && n.isEmpty()) return n.remove(), e;
			if (!n.canBeEmpty() || !i(n, "first")) return e;
		}
		let r = function(e) {
			let t = [];
			for (let n = e.getAdjacentCaret(); n; n = n.getAdjacentCaret()) t.push(n.origin);
			return t;
		}(e);
		(r.length > 0 || !a && n.canBeEmpty() && i(n, "last")) && o.insert(t(n).splice(0, 0, r));
	}
	return o;
}
function ou(e) {
	return e;
}
function su(e) {
	return e;
}
function cu(e, t) {
	if (!t || e === t) return e;
	for (let n in t) if (e[n] !== t[n]) return {
		...e,
		...t
	};
	return e;
}
function lu(...e) {
	let t = [];
	for (let n of e) if (n && typeof n == "string") for (let [e] of n.matchAll(/\S+/g)) t.push(e);
	return t;
}
function uu(e, ...t) {
	let n = lu(...t);
	n.length > 0 && e.classList.add(...n);
}
function du(e, ...t) {
	let n = lu(...t);
	n.length > 0 && e.classList.remove(...n);
}
function fu(...e) {
	return () => {
		for (let t = e.length - 1; t >= 0; t--) e[t]();
		e.length = 0;
	};
}
//#endregion
//#region node_modules/@lexical/react/dist/LexicalComposer.prod.mjs
var pu = D ? u : c, mu = { tag: va };
function hu({ initialConfig: e, children: t }) {
	let n = d(() => {
		let { theme: t, namespace: n, nodes: r, onError: i, editorState: a, html: o } = e, s = Ot(null, t), c = Ss({
			editable: e.editable,
			html: o,
			namespace: n,
			nodes: r,
			onError: (e) => i(e, c),
			theme: t
		});
		return function(e, t) {
			if (t !== null) {
				if (t === void 0) e.update(() => {
					let t = V();
					if (t.isEmpty()) {
						let n = z();
						t.append(n);
						let r = D ? document.activeElement : null;
						(F() !== null || r !== null && r === e.getRootElement()) && n.select();
					}
				}, mu);
				else if (t !== null) switch (typeof t) {
					case "string": {
						let n = e.parseEditorState(t);
						e.setEditorState(n, mu);
						break;
					}
					case "object":
						e.setEditorState(t, mu);
						break;
					case "function": e.update(() => {
						V().isEmpty() && t(e);
					}, mu);
				}
			}
		}(c, a), [c, s];
	}, []);
	return pu(() => {
		let t = e.editable, [r] = n;
		r.setEditable(t === void 0 || t);
	}, []), (0, b.jsx)(Dt.Provider, {
		value: n,
		children: t
	});
}
//#endregion
//#region node_modules/@lexical/react/dist/useLexicalEditable.prod.mjs
var gu = D ? u : c;
function _u(e) {
	return {
		initialValueFn: () => e.isEditable(),
		subscribe: (t) => e.registerEditableListener(t)
	};
}
function vu() {
	return function(e) {
		let [t] = kt(), n = d(() => e(t), [t, e]), [r, i] = p(() => n.initialValueFn()), a = f(r);
		return gu(() => {
			let { initialValueFn: e, subscribe: t } = n, r = e();
			return a.current !== r && (a.current = r, i(r)), t((e) => {
				a.current = e, i(e);
			});
		}, [n, e]), r;
	}(_u);
}
//#endregion
//#region node_modules/@lexical/selection/dist/LexicalSelection.prod.mjs
function yu(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function bu(e) {
	let t = "";
	for (let n in e) n && (t += `${n}: ${e[n]};`);
	return t;
}
function xu(e) {
	let t = G().getElementByKey(e.getKey());
	if (t === null) return null;
	let n = t.ownerDocument.defaultView;
	return n === null ? null : n.getComputedStyle(t);
}
function Su(e) {
	return xu(ls(e) ? e : e.getParentOrThrow());
}
function Cu(e) {
	let t = Su(e);
	return t !== null && t.direction === "rtl";
}
function wu(e, t, n = "self") {
	let r = e.getStartEndPoints();
	if (t.isSelected(e) && !zs(t) && r !== null) {
		let [i, a] = r, o = e.isBackward(), s = i.getNode(), c = a.getNode(), l = t.is(s), u = t.is(c);
		if (l || u) {
			let [r, i] = oo(e), a = s.is(c), l = t.is(o ? c : s), u = t.is(o ? s : c), d, f = 0;
			a ? (f = r > i ? i : r, d = r > i ? r : i) : l ? (f = o ? i : r, d = void 0) : u && (f = 0, d = o ? r : i);
			let p = t.__text.slice(f, d);
			p !== t.__text && (n === "clone" && (t = nl(t)), t.__text = p);
		}
	}
	return t;
}
function Tu(e, t) {
	(P(e) ? e.isCollapsed() : N(e) || L(e)) || yu(280);
	let n = wa(P(e) ? e.style : N(e) ? e.getStyle() : e.getTextStyle()), r = bu(Object.entries(t).reduce((t, [r, i]) => (typeof i == "function" ? t[r] = i(n[r], e) : i === null ? delete t[r] : t[r] = i, t), { ...n }));
	P(e) || N(e) ? e.setStyle(r) : e.setTextStyle(r);
}
function Eu(e, t) {
	if (P(e) && e.isCollapsed()) {
		Tu(e, t);
		let n = e.anchor.getNode();
		L(n) && n.isEmpty() && Tu(n, t);
	}
	Du((e) => {
		Tu(e, t);
	});
	let n = e.getNodes();
	if (n.length > 0) {
		let e = /* @__PURE__ */ new Set();
		for (let r of n) {
			if (!L(r) || !r.canBeEmpty() || r.getChildrenSize() !== 0) continue;
			let n = r.getKey();
			e.has(n) || (e.add(n), Tu(r, t));
		}
	}
}
function Du(e) {
	let t = F();
	if (!t) return;
	let n = /* @__PURE__ */ new Map(), r = (e) => n.get(e.getKey()) || [0, e.getTextContentSize()];
	if (P(t)) for (let e of ql(t).getTextSlices()) e && n.set(e.caret.origin.getKey(), e.getSliceIndices());
	let i = t.getNodes();
	for (let t of i) {
		if (!N(t) || !t.canHaveFormat()) continue;
		let [n, i] = r(t);
		i !== n && (zs(t) || n === 0 && i === t.getTextContentSize() ? e(t) : e(t.splitText(n, i)[n === 0 ? 0 : 1]));
	}
	P(t) && t.anchor.type === "text" && t.focus.type === "text" && t.anchor.key === t.focus.key && Ou(t);
}
function Ou(e) {
	if (e.isBackward()) {
		let { anchor: t, focus: n } = e, { key: r, offset: i, type: a } = t;
		t.set(n.key, n.offset, n.type), n.set(r, i, a);
	}
}
function ku(e) {
	let t = Au(e);
	return t !== null && t.writingMode === "vertical-rl";
}
function Au(e) {
	let t = e.anchor.getNode();
	return L(t) ? xu(t) : Su(t);
}
function ju(e, t) {
	let n = ku(e) ? !t : t;
	Nu(e) && (n = !n);
	let r = Ul(e.focus, n ? "previous" : "next");
	if ($l(r)) return !1;
	for (let e of Pl(r)) {
		if (Sl(e)) return !e.origin.isInline();
		if (!L(e.origin)) {
			if (R(e.origin)) return !0;
			break;
		}
	}
	return !1;
}
function Mu(e, t, n, r) {
	e.modify(t ? "extend" : "move", n, r);
}
function Nu(e) {
	let t = Au(e);
	return t !== null && t.direction === "rtl";
}
function Pu(e, t, n) {
	let r = Nu(e), i;
	i = ku(e) || r ? !n : n, Mu(e, t, i, "character");
}
//#endregion
//#region node_modules/@lexical/utils/dist/LexicalUtils.prod.mjs
function Fu(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function Iu(e, t) {
	let n = e;
	for (; n != null;) {
		if (n instanceof t) return n;
		n = n.getParent();
	}
	return null;
}
function Lu(e) {
	let t = ul(e, (e) => L(e) && !e.isInline());
	return L(t) || Fu(4, e.__key), t;
}
function Ru(e, t, n) {
	let r = eu(t, "next");
	bl(r) && (r.offset === 0 ? r = K(r.origin, "previous").getFlipped() : r.offset === r.origin.getTextContentSize() && (r = K(r.origin, "next"))), r.origin.is(e) && (xl(r) || Fu(342, e.getKey(), e.getType()), r = Jl(r)), (e.is(r.getNodeAtCaret()) || e.is(r.getFlipped().getNodeAtCaret())) && e.remove(!0);
	for (let e = r; e; e = au(e, n)) r = e;
	return bl(r) && Fu(283), r.insert(e.isInline() ? z().append(e) : e), eu(K(e.getLatest(), "next"), t.direction);
}
function zu(e, t) {
	return e !== null && Object.getPrototypeOf(e).constructor.name === t.name;
}
function Bu(e) {
	let t = F();
	if (!P(t)) return !1;
	let n = /* @__PURE__ */ new Set(), r = t.getNodes();
	for (let t = 0; t < r.length; t++) {
		let i = r[t], a = i.getKey();
		if (n.has(a)) continue;
		let o = ul(i, (e) => L(e) && !e.isInline());
		if (o === null) continue;
		let s = o.getKey();
		o.canIndent() && !n.has(s) && (n.add(s), e(o));
	}
	return n.size > 0;
}
var Vu = Symbol.for("preact-signals");
function Hu() {
	if (Ku > 1) return void Ku--;
	let e, t = !1;
	for (function() {
		let e = Gu;
		for (Gu = void 0; e !== void 0;) e.S.v === e.v && (e.S.i = e.i), e = e.o;
	}(); Uu !== void 0;) {
		let n = Uu;
		for (Uu = void 0, qu++; n !== void 0;) {
			let r = n.u;
			if (n.u = void 0, n.f &= -3, !(8 & n.f) && $u(n)) try {
				n.c();
			} catch (n) {
				t ||= (e = n, !0);
			}
			n = r;
		}
	}
	if (qu = 0, Ku--, t) throw e;
}
var q, Uu;
function Wu(e) {
	let t = q;
	q = void 0;
	try {
		return e();
	} finally {
		q = t;
	}
}
var Gu, Ku = 0, qu = 0, Ju = 0, Yu = 0;
function Xu(e) {
	if (q === void 0) return;
	let t = e.n;
	return t === void 0 || t.t !== q ? (t = {
		i: 0,
		S: e,
		p: q.s,
		n: void 0,
		t: q,
		e: void 0,
		x: void 0,
		r: t
	}, q.s !== void 0 && (q.s.n = t), q.s = t, e.n = t, 32 & q.f && e.S(t), t) : t.i === -1 ? (t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = q.s, t.n = void 0, q.s.n = t, q.s = t), t) : void 0;
}
function Zu(e, t) {
	this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
function Qu(e, t) {
	return new Zu(e, t);
}
function $u(e) {
	for (let t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
	return !1;
}
function ed(e) {
	for (let t = e.s; t !== void 0; t = t.n) {
		let n = t.S.n;
		if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
			e.s = t;
			break;
		}
	}
}
function td(e) {
	let t, n = e.s;
	for (; n !== void 0;) {
		let e = n.p;
		n.i === -1 ? (n.S.U(n), e !== void 0 && (e.n = n.n), n.n !== void 0 && (n.n.p = e)) : t = n, n.S.n = n.r, n.r !== void 0 && (n.r = void 0), n = e;
	}
	e.s = t;
}
function nd(e, t) {
	Zu.call(this, void 0), this.x = e, this.s = void 0, this.g = Yu - 1, this.f = 4, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
function rd(e) {
	let t = e.m;
	if (e.m = void 0, typeof t == "function") {
		Ku++;
		let n = q;
		q = void 0;
		try {
			t();
		} catch (t) {
			throw e.f &= -2, e.f |= 8, id(e), t;
		} finally {
			q = n, Hu();
		}
	}
}
function id(e) {
	for (let t = e.s; t !== void 0; t = t.n) t.S.U(t);
	e.x = void 0, e.s = void 0, rd(e);
}
function ad(e) {
	if (q !== this) throw Error("Out-of-order effect");
	td(this), q = e, this.f &= -2, 8 & this.f && id(this), Hu();
}
function od(e, t) {
	this.x = e, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = t?.name;
}
function sd(e, t) {
	let n = new od(e, t);
	try {
		n.c();
	} catch (e) {
		throw n.d(), e;
	}
	let r = n.d.bind(n);
	return r[Symbol.dispose] = r, r;
}
function cd(e, t = {}) {
	let n = {};
	for (let r in e) {
		let i = t[r];
		n[r] = Qu(i === void 0 ? e[r] : i);
	}
	return n;
}
Zu.prototype.brand = Vu, Zu.prototype.h = function() {
	return !0;
}, Zu.prototype.S = function(e) {
	let t = this.t;
	t !== e && e.e === void 0 && (e.x = t, this.t = e, t === void 0 ? Wu(() => {
		var e;
		(e = this.W) == null || e.call(this);
	}) : t.e = e);
}, Zu.prototype.U = function(e) {
	if (this.t !== void 0) {
		let t = e.e, n = e.x;
		t !== void 0 && (t.x = n, e.e = void 0), n !== void 0 && (n.e = t, e.x = void 0), e === this.t && (this.t = n, n === void 0 && Wu(() => {
			var e;
			(e = this.Z) == null || e.call(this);
		}));
	}
}, Zu.prototype.subscribe = function(e) {
	return sd(() => {
		let t = this.value, n = q;
		q = void 0;
		try {
			e(t);
		} finally {
			q = n;
		}
	}, { name: "sub" });
}, Zu.prototype.valueOf = function() {
	return this.value;
}, Zu.prototype.toString = function() {
	return this.value + "";
}, Zu.prototype.toJSON = function() {
	return this.value;
}, Zu.prototype.peek = function() {
	let e = q;
	q = void 0;
	try {
		return this.value;
	} finally {
		q = e;
	}
}, Object.defineProperty(Zu.prototype, "value", {
	get() {
		let e = Xu(this);
		return e !== void 0 && (e.i = this.i), this.v;
	},
	set(e) {
		if (e !== this.v) {
			if (qu > 100) throw Error("Cycle detected");
			(function(e) {
				Ku !== 0 && qu === 0 && e.l !== Ju && (e.l = Ju, Gu = {
					S: e,
					v: e.v,
					i: e.i,
					o: Gu
				});
			})(this), this.v = e, this.i++, Yu++, Ku++;
			try {
				for (let e = this.t; e !== void 0; e = e.x) e.t.N();
			} finally {
				Hu();
			}
		}
	}
}), nd.prototype = new Zu(), nd.prototype.h = function() {
	if (this.f &= -3, 1 & this.f) return !1;
	if ((36 & this.f) == 32 || (this.f &= -5, this.g === Yu)) return !0;
	if (this.g = Yu, this.f |= 1, this.i > 0 && !$u(this)) return this.f &= -2, !0;
	let e = q;
	try {
		ed(this), q = this;
		let e = this.x();
		(16 & this.f || this.v !== e || this.i === 0) && (this.v = e, this.f &= -17, this.i++);
	} catch (e) {
		this.v = e, this.f |= 16, this.i++;
	}
	return q = e, td(this), this.f &= -2, !0;
}, nd.prototype.S = function(e) {
	if (this.t === void 0) {
		this.f |= 36;
		for (let e = this.s; e !== void 0; e = e.n) e.S.S(e);
	}
	Zu.prototype.S.call(this, e);
}, nd.prototype.U = function(e) {
	if (this.t !== void 0 && (Zu.prototype.U.call(this, e), this.t === void 0)) {
		this.f &= -33;
		for (let e = this.s; e !== void 0; e = e.n) e.S.U(e);
	}
}, nd.prototype.N = function() {
	if (!(2 & this.f)) {
		this.f |= 6;
		for (let e = this.t; e !== void 0; e = e.x) e.t.N();
	}
}, Object.defineProperty(nd.prototype, "value", { get() {
	if (1 & this.f) throw Error("Cycle detected");
	let e = Xu(this);
	if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
	return this.v;
} }), od.prototype.c = function() {
	let e = this.S();
	try {
		if (8 & this.f || this.x === void 0) return;
		let e = this.x();
		typeof e == "function" && (this.m = e);
	} finally {
		e();
	}
}, od.prototype.S = function() {
	if (1 & this.f) throw Error("Cycle detected");
	this.f |= 1, this.f &= -9, rd(this), ed(this), Ku++;
	let e = q;
	return q = this, ad.bind(this, e);
}, od.prototype.N = function() {
	2 & this.f || (this.f |= 2, this.u = Uu, Uu = this);
}, od.prototype.d = function() {
	this.f |= 8, 1 & this.f || id(this);
}, od.prototype.dispose = function() {
	this.d();
};
function ld(e) {
	return (typeof e.nodes == "function" ? e.nodes() : e.nodes) || [];
}
An("format", { parse: (e) => typeof e == "number" ? e : 0 });
function J(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var ud;
try {
	ud = "0.45.0+prod.esm";
} catch {}
var dd = ud ?? "0.45.0+source";
function fd(e, t) {
	if (e && t && !Array.isArray(t) && typeof e == "object" && typeof t == "object") {
		let n = e, r = t;
		for (let e in r) n[e] = fd(n[e], r[e]);
		return e;
	}
	return t;
}
var pd = 0, md = 1, hd = 2, gd = 3, _d = 4, vd = 5, yd = 6, bd = 7;
function xd(e) {
	return e.id === pd;
}
function Sd(e) {
	return e.id === hd;
}
function Cd(e) {
	return function(e) {
		return e.id === md;
	}(e) || J(305, String(e.id), String(md)), Object.assign(e, { id: hd });
}
var wd = /* @__PURE__ */ new Set(), Td = class {
	builder;
	configs;
	_dependency;
	_peerNameSet;
	extension;
	state;
	_signal;
	constructor(e, t) {
		this.builder = e, this.extension = t, this.configs = /* @__PURE__ */ new Set(), this.state = { id: pd };
	}
	mergeConfigs() {
		let e = this.extension.config || {}, t = this.extension.mergeConfig ? this.extension.mergeConfig.bind(this.extension) : cu;
		for (let n of this.configs) e = t(e, n);
		return e;
	}
	init(e) {
		let t = this.state;
		Sd(t) || J(306, String(t.id));
		let n = {
			getDependency: this.getInitDependency.bind(this),
			getDirectDependentNames: this.getDirectDependentNames.bind(this),
			getPeer: this.getInitPeer.bind(this),
			getPeerNameSet: this.getPeerNameSet.bind(this)
		}, r = {
			...n,
			getDependency: this.getDependency.bind(this),
			getInitResult: this.getInitResult.bind(this),
			getPeer: this.getPeer.bind(this)
		}, i = function(e, t, n) {
			return Object.assign(e, {
				config: t,
				id: gd,
				registerState: n
			});
		}(t, this.mergeConfigs(), n), a;
		this.state = i, this.extension.init && (a = this.extension.init(e, i.config, n)), this.state = function(e, t, n) {
			return Object.assign(e, {
				id: _d,
				initResult: t,
				registerState: n
			});
		}(i, a, r);
	}
	build(e) {
		let t = this.state, n;
		t.id !== _d && J(307, String(t.id), String(vd)), this.extension.build && (n = this.extension.build(e, t.config, t.registerState));
		let r = {
			...t.registerState,
			getOutput: () => n,
			getSignal: this.getSignal.bind(this)
		};
		this.state = function(e, t, n) {
			return Object.assign(e, {
				id: vd,
				output: t,
				registerState: n
			});
		}(t, n, r);
	}
	register(e, t) {
		this._signal = t;
		let n = this.state;
		n.id !== vd && J(308, String(n.id), String(vd));
		let r = this.extension.register && this.extension.register(e, n.config, n.registerState);
		return this.state = function(e) {
			return Object.assign(e, { id: yd });
		}(n), () => {
			let e = this.state;
			e.id !== bd && J(309, String(n.id), String(bd)), this.state = function(e) {
				return Object.assign(e, { id: vd });
			}(e), r && r();
		};
	}
	afterRegistration(e) {
		let t = this.state, n;
		return t.id !== yd && J(310, String(t.id), String(yd)), this.extension.afterRegistration && (n = this.extension.afterRegistration(e, t.config, t.registerState)), this.state = function(e) {
			return Object.assign(e, { id: bd });
		}(t), n;
	}
	getSignal() {
		return this._signal === void 0 && J(311), this._signal;
	}
	getInitResult() {
		this.extension.init === void 0 && J(312, this.extension.name);
		let e = this.state;
		return function(e) {
			return e.id >= _d;
		}(e) || J(313, String(e.id), String(_d)), e.initResult;
	}
	getInitPeer(e) {
		let t = this.builder.extensionNameMap.get(e);
		return t ? t.getExtensionInitDependency() : void 0;
	}
	getExtensionInitDependency() {
		let e = this.state;
		return function(e) {
			return e.id >= gd;
		}(e) || J(314, String(e.id), String(gd)), { config: e.config };
	}
	getPeer(e) {
		let t = this.builder.extensionNameMap.get(e);
		return t ? t.getExtensionDependency() : void 0;
	}
	getInitDependency(e) {
		let t = this.builder.getExtensionRep(e);
		return t === void 0 && J(315, this.extension.name, e.name), t.getExtensionInitDependency();
	}
	getDependency(e) {
		let t = this.builder.getExtensionRep(e);
		return t === void 0 && J(315, this.extension.name, e.name), t.getExtensionDependency();
	}
	getState() {
		let e = this.state;
		return function(e) {
			return e.id >= bd;
		}(e) || J(316, String(e.id), String(bd)), e;
	}
	getDirectDependentNames() {
		return this.builder.incomingEdges.get(this.extension.name) || wd;
	}
	getPeerNameSet() {
		let e = this._peerNameSet;
		return e || (e = new Set((this.extension.peerDependencies || []).map(([e]) => e)), this._peerNameSet = e), e;
	}
	getExtensionDependency() {
		if (!this._dependency) {
			let e = this.state;
			(function(e) {
				return e.id >= vd;
			})(e) || J(317, this.extension.name), this._dependency = {
				config: e.config,
				init: e.initResult,
				output: e.output
			};
		}
		return this._dependency;
	}
}, Ed = { tag: va };
function Dd() {
	let e = V();
	e.isEmpty() && e.append(z());
}
var Od = ou({
	config: su({
		setOptions: Ed,
		updateOptions: Ed
	}),
	init: ({ $initialEditorState: e = Dd }) => ({
		$initialEditorState: e,
		initialized: !1
	}),
	afterRegistration(e, { updateOptions: t, setOptions: n }, r) {
		let i = r.getInitResult();
		if (!i.initialized) {
			i.initialized = !0;
			let { $initialEditorState: r } = i;
			if (ps(r)) e.setEditorState(r, n);
			else if (typeof r == "function") e.update(() => {
				r(e);
			}, t);
			else if (r && (typeof r == "string" || typeof r == "object")) {
				let t = e.parseEditorState(r);
				e.setEditorState(t, n);
			}
		}
		return () => {};
	},
	name: "@lexical/extension/InitialState",
	nodes: [
		cs,
		Ra,
		Da,
		Ya,
		gs
	]
}), kd = Symbol.for("@lexical/extension/LexicalBuilder");
function Ad() {}
function jd(e) {
	throw e;
}
function Md(e) {
	return Array.isArray(e) ? e : [e];
}
var Nd = dd, Pd = class e {
	roots;
	extensionNameMap;
	outgoingConfigEdges;
	incomingEdges;
	conflicts;
	_sortedExtensionReps;
	PACKAGE_VERSION;
	constructor(e) {
		this.outgoingConfigEdges = /* @__PURE__ */ new Map(), this.incomingEdges = /* @__PURE__ */ new Map(), this.extensionNameMap = /* @__PURE__ */ new Map(), this.conflicts = /* @__PURE__ */ new Map(), this.PACKAGE_VERSION = Nd, this.roots = e;
		for (let t of e) this.addExtension(t);
	}
	static fromExtensions(t) {
		let n = [Md(Od)];
		for (let e of t) n.push(Md(e));
		return new e(n);
	}
	static maybeFromEditor(t) {
		let n = t[kd];
		return n && (n.PACKAGE_VERSION !== Nd && J(292, n.PACKAGE_VERSION, Nd), n instanceof e || J(293)), n;
	}
	static fromEditor(t) {
		let n = e.maybeFromEditor(t);
		return n === void 0 && J(294), n;
	}
	constructEditor() {
		let { $initialEditorState: e, onError: t, ...n } = this.buildCreateEditorArgs(), r = Object.assign(Ss({
			...n,
			...t ? { onError: (e) => {
				t(e, r);
			} } : {}
		}), { [kd]: this });
		for (let e of this.sortedExtensionReps()) e.build(r);
		return r;
	}
	buildEditor() {
		let e = Ad;
		function t() {
			try {
				e();
			} finally {
				e = Ad;
			}
		}
		let n = Object.assign(this.constructEditor(), {
			dispose: t,
			[Symbol.dispose]: t
		});
		return e = fu(this.registerEditor(n), () => n.setRootElement(null)), n;
	}
	hasExtensionByName(e) {
		return this.extensionNameMap.has(e);
	}
	getExtensionRep(e) {
		let t = this.extensionNameMap.get(e.name);
		if (t) return t.extension !== e && J(295, e.name), t;
	}
	addEdge(e, t, n) {
		let r = this.outgoingConfigEdges.get(e);
		r ? r.set(t, n) : this.outgoingConfigEdges.set(e, new Map([[t, n]]));
		let i = this.incomingEdges.get(t);
		i ? i.add(e) : this.incomingEdges.set(t, new Set([e]));
	}
	addExtension(e) {
		this._sortedExtensionReps !== void 0 && J(296);
		let [t] = Md(e);
		typeof t.name != "string" && J(297, typeof t.name);
		let n = this.extensionNameMap.get(t.name);
		if (n !== void 0 && n.extension !== t && J(298, t.name), !n) {
			n = new Td(this, t), this.extensionNameMap.set(t.name, n);
			let e = this.conflicts.get(t.name);
			typeof e == "string" && J(299, t.name, e);
			for (let e of t.conflictsWith || []) this.extensionNameMap.has(e) && J(299, t.name, e), this.conflicts.set(e, t.name);
			for (let e of t.dependencies || []) {
				let n = Md(e);
				this.addEdge(t.name, n[0].name, n.slice(1)), this.addExtension(n);
			}
			for (let [e, n] of t.peerDependencies || []) this.addEdge(t.name, e, n ? [n] : []);
		}
	}
	sortedExtensionReps() {
		if (this._sortedExtensionReps) return this._sortedExtensionReps;
		let e = [], t = (n, r) => {
			let i = n.state;
			if (Sd(i)) return;
			let a = n.extension.name;
			var o;
			xd(i) || J(300, a, r || "[unknown]"), xd(o = i) || J(304, String(o.id), String(pd)), i = Object.assign(o, { id: md }), n.state = i;
			let s = this.outgoingConfigEdges.get(a);
			if (s) for (let e of s.keys()) {
				let n = this.extensionNameMap.get(e);
				n && t(n, a);
			}
			i = Cd(i), n.state = i, e.push(n);
		};
		for (let e of this.extensionNameMap.values()) xd(e.state) && t(e);
		for (let t of e) for (let [e, n] of this.outgoingConfigEdges.get(t.extension.name) || []) if (n.length > 0) {
			let t = this.extensionNameMap.get(e);
			if (t) for (let e of n) t.configs.add(e);
		}
		for (let [e, ...t] of this.roots) if (t.length > 0) {
			let n = this.extensionNameMap.get(e.name);
			n === void 0 && J(301, e.name);
			for (let e of t) n.configs.add(e);
		}
		return this._sortedExtensionReps = e, this._sortedExtensionReps;
	}
	registerEditor(e) {
		let t = this.sortedExtensionReps(), n = new AbortController(), r = [() => n.abort()], i = n.signal;
		for (let n of t) {
			let t = n.register(e, i);
			t && r.push(t);
		}
		for (let n of t) {
			let t = n.afterRegistration(e);
			t && r.push(t);
		}
		return fu(...r);
	}
	buildCreateEditorArgs() {
		let e = {}, t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = {}, a = {}, o = this.sortedExtensionReps();
		for (let s of o) {
			let { extension: o } = s;
			if (o.onError !== void 0 && (e.onError = o.onError), o.disableEvents !== void 0 && (e.disableEvents = o.disableEvents), o.parentEditor !== void 0 && (e.parentEditor = o.parentEditor), o.editable !== void 0 && (e.editable = o.editable), o.namespace !== void 0 && (e.namespace = o.namespace), o.$initialEditorState !== void 0 && (e.$initialEditorState = o.$initialEditorState), o.nodes) for (let e of ld(o)) {
				if (typeof e != "function") {
					let t = n.get(e.replace);
					t && J(302, o.name, e.replace.name, t.extension.name), n.set(e.replace, s);
				}
				t.add(e);
			}
			if (o.html) {
				if (o.html.export) for (let [e, t] of o.html.export.entries()) r.set(e, t);
				o.html.import && Object.assign(i, o.html.import);
			}
			o.theme && fd(a, o.theme);
		}
		Object.keys(a).length > 0 && (e.theme = a), t.size && (e.nodes = [...t]);
		let s = Object.keys(i).length > 0, c = r.size > 0;
		(s || c) && (e.html = {}, s && (e.html.import = i), c && (e.html.export = r));
		for (let t of o) t.init(e);
		return e.onError ||= jd, e;
	}
};
function Fd(e, t) {
	let n = Pd.maybeFromEditor(e);
	if (!n) return;
	let r = n.extensionNameMap.get(t);
	return r ? r.getExtensionDependency() : void 0;
}
function Id(e) {
	return Fd(G(), e);
}
var Ld = class e extends ss {
	static getType() {
		return "horizontalrule";
	}
	static clone(t) {
		return new e(t.__key);
	}
	static importJSON(e) {
		return zd().updateFromJSON(e);
	}
	static importDOM() {
		return { hr: () => ({
			conversion: Rd,
			priority: 0
		}) };
	}
	exportDOM() {
		return { element: document.createElement("hr") };
	}
	createDOM(e) {
		let t = document.createElement("hr");
		return uu(t, e.theme.hr), t;
	}
	getTextContent() {
		return "\n";
	}
	isInline() {
		return !1;
	}
	updateDOM() {
		return !1;
	}
};
function Rd() {
	return { node: zd() };
}
function zd() {
	return ll(Ld);
}
new Set([ba, ya]), Date.now;
//#endregion
//#region node_modules/@lexical/react/dist/LexicalReactProviderExtension.prod.mjs
var Bd = ou({ name: "@lexical/react/ReactProvider" });
//#endregion
//#region node_modules/@lexical/text/dist/LexicalText.prod.mjs
function Vd() {
	return V().getTextContent();
}
function Hd(e, t = !0) {
	if (e) return !1;
	let n = Vd();
	return t && (n = n.trim()), n === "";
}
function Ud(e) {
	if (!Hd(e, !1)) return !1;
	let t = V().getChildren(), n = t.length;
	if (n > 1) return !1;
	for (let e = 0; e < n; e++) {
		let n = t[e];
		if (R(n)) return !1;
		if (L(n)) {
			if (!vs(n) || n.__indent !== 0) return !1;
			let t = n.getChildren(), r = t.length;
			for (let n = 0; n < r; n++) {
				let n = t[e];
				if (!N(n)) return !1;
			}
		}
	}
	return !0;
}
function Wd(e) {
	return () => Ud(e);
}
//#endregion
//#region node_modules/@lexical/dragon/dist/LexicalDragon.prod.mjs
function Gd(e) {
	let t = window.location.origin, n = (n) => {
		if (n.origin !== t) return;
		let r = e.getRootElement();
		if (document.activeElement !== r) return;
		let i = n.data;
		if (typeof i == "string") {
			let t;
			try {
				t = JSON.parse(i);
			} catch {
				return;
			}
			if (t && t.protocol === "nuanria_messaging" && t.type === "request") {
				let r = t.payload;
				if (r && r.functionId === "makeChanges") {
					let t = r.args;
					if (t) {
						let [r, i, a, o, s] = t;
						e.update(() => {
							let e = F();
							if (P(e)) {
								let t = e.anchor, c = t.getNode(), l = 0, u = 0;
								if (N(c) && r >= 0 && i >= 0 && (l = r, u = r + i, e.setTextNodeRange(c, l, c, u)), l === u && a === "" || (e.insertRawText(a), c = t.getNode()), N(c)) {
									l = o, u = o + s;
									let t = c.getTextContentSize();
									l = l > t ? t : l, u = u > t ? t : u, e.setTextNodeRange(c, l, c, u);
								}
								n.stopImmediatePropagation();
							}
						});
					}
				}
			}
		}
	};
	return window.addEventListener("message", n, !0), () => {
		window.removeEventListener("message", n, !0);
	};
}
//#endregion
//#region node_modules/@lexical/html/dist/LexicalHtml.prod.mjs
function Kd(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var qd;
function Jd(e, t) {
	let { key: n } = t;
	return e && n in e ? e[n] : t.defaultValue;
}
function Yd(e) {
	return qd && qd.editor === e ? qd : void 0;
}
function Xd(e, t) {
	let n = Yd(t);
	return n && n[e];
}
function Zd(e, t) {
	if ("cfg" in t) {
		let { cfg: n, updater: r } = t;
		return [n, r(Jd(e, n))];
	}
	return t;
}
function Qd(e, t) {
	let n = t;
	for (let r of e) {
		let [e, i] = Zd(n, r), a = e.key;
		if (n === t && Jd(n, e) === i) continue;
		let o = n === t || n === void 0 ? $d(t) : n;
		o[a] = i, n = o;
	}
	return n;
}
function $d(e) {
	return Object.create(e || null);
}
function ef(e, t) {
	return [e, t];
}
function tf(e, t, n, r = G()) {
	let i = qd, a = Yd(r);
	try {
		return qd = {
			...a,
			editor: r,
			[e]: t
		}, n();
	} finally {
		qd = i;
	}
}
function nf(e, t = () => {}) {
	return (n, r = G()) => (i) => {
		let a = Yd(r), o = a && a[e], s = Qd(n, o || t(r));
		return s && s !== o ? tf(e, s, i, r) : i();
	};
}
function rf(e, t, n, r) {
	return Object.assign(An(Symbol(t), {
		isEqual: r,
		parse: n
	}), { [e]: !0 });
}
function af(e) {
	if (!Vs(e)) return;
	let t = e;
	if (t.querySelector("style") === null) return;
	let n = /* @__PURE__ */ new Map();
	function r(e) {
		let t = n.get(e);
		if (t === void 0) {
			t = /* @__PURE__ */ new Set();
			for (let n = 0; n < e.style.length; n++) t.add(e.style[n]);
			n.set(e, t);
		}
		return t;
	}
	try {
		for (let e of Array.from(t.styleSheets)) {
			let n;
			try {
				n = e.cssRules;
			} catch {
				continue;
			}
			for (let e of Array.from(n)) {
				if (!zu(e, CSSStyleRule)) continue;
				let n;
				try {
					n = t.querySelectorAll(e.selectorText);
				} catch {
					continue;
				}
				for (let t of Array.from(n)) {
					if (!W(t)) continue;
					let n = r(t);
					for (let r = 0; r < e.style.length; r++) {
						let i = e.style[r];
						n.has(i) || t.style.setProperty(i, e.style.getPropertyValue(i), e.style.getPropertyPriority(i));
					}
				}
			}
		}
	} catch {}
}
var of = "@lexical/html/DOM", sf = Symbol.for("@lexical/html/DOMExportContext"), cf = "@lexical/html/DOMImport", lf = Symbol.for("@lexical/html/DOMImportContext");
function uf(e, t, n) {
	return rf(sf, e, t, n);
}
uf("root", Boolean);
var df = uf("isExport", Boolean);
function ff(e) {
	let t = Fd(e, of);
	return t ? t.output.defaults : void 0;
}
function pf(e) {
	let t = Fd(e, of);
	return t ? t.output.runtime : void 0;
}
function mf(e = G()) {
	let t = pf(e);
	return t ? t.getSessionConfig() : Jc(e);
}
var hf = nf(sf, ff);
new Map([[cs, () => {
	let e = document.createElement("div");
	return e.role = "textbox", { element: e };
}]]);
var gf = Symbol.for("@lexical/html/SelectorImpl");
function _f(e, t) {
	let n = {
		kind: "element",
		predicate: (r = t, r.length === 0 ? W : r.length === 1 ? r[0] : (e, t) => {
			for (let n of r) if (!n(e, t)) return !1;
			return !0;
		}),
		tags: e
	};
	var r;
	let i = (n) => _f(e, [...t, n]);
	return {
		[gf]: n,
		attr: (e, t, n) => i(bf(e, t, n)),
		classAll: (...e) => i(yf(e)),
		classAny: (...e) => i(function(e) {
			let t = vf(e);
			return t.length === 0 ? () => !1 : (e) => {
				if (!W(e)) return !1;
				let n = e.classList;
				for (let e of t) if (n.contains(e)) return !0;
				return !1;
			};
		}(e)),
		styleAny: (e, t, n) => i(function(e, t, n) {
			if (typeof t == "string") return (n) => W(n) && n.style.getPropertyValue(e) === t;
			if (t instanceof RegExp) {
				let r = n && n.capture, i = t;
				return (t, n) => {
					if (!W(t)) return !1;
					let a = t.style.getPropertyValue(e);
					if (!a) return !1;
					let o = a.match(i);
					return o !== null && (r !== void 0 && (n[r] = o), !0);
				};
			}
			Kd(362, JSON.stringify(e));
		}(e, t, n))
	};
}
function vf(e) {
	let t = [];
	for (let n of e) n && t.push(n);
	return t;
}
function yf(e) {
	let t = vf(e);
	return t.length === 0 ? () => !0 : (e) => {
		if (!W(e)) return !1;
		let n = e.classList;
		for (let e of t) if (!n.contains(e)) return !1;
		return !0;
	};
}
function bf(e, t, n) {
	if (!0 === t) return (t) => W(t) && t.hasAttribute(e);
	if (typeof t == "string") return (n) => W(n) && n.getAttribute(e) === t;
	if (t instanceof RegExp) {
		let r = n && n.capture, i = t;
		return (t, n) => {
			if (!W(t)) return !1;
			let a = t.getAttribute(e);
			if (a == null) return !1;
			let o = a.match(i);
			return o !== null && (r !== void 0 && (n[r] = o), !0);
		};
	}
	Kd(361, JSON.stringify(e));
}
var xf = {
	kind: "text",
	predicate: Bs,
	tags: /* @__PURE__ */ new Set()
}, Sf = { [gf]: xf }, Cf = {
	kind: "comment",
	predicate: (e) => e.nodeType === 8,
	tags: /* @__PURE__ */ new Set()
}, wf = { [gf]: Cf }, Tf = {
	any: () => _f(/* @__PURE__ */ new Set(), []),
	comment: () => wf,
	tag(...e) {
		e.length > 0 || Kd(363);
		let t = /* @__PURE__ */ new Set();
		for (let n of e) t.add(n.toUpperCase());
		return _f(t, []);
	},
	text: () => Sf
}, Ef = /[A-Za-z0-9_-]/, Df = class {
	constructor(e, t) {
		this.source = e, this.pos = t;
	}
	peek(e = 0) {
		return this.source[this.pos + e] || "";
	}
	consume() {
		return this.source[this.pos++] || "";
	}
	eof() {
		return this.pos >= this.source.length;
	}
	skipWhitespace() {
		for (; !this.eof() && /\s/.test(this.peek());) this.pos++;
	}
	readIdent() {
		let e = this.pos;
		for (; !this.eof() && Ef.test(this.peek());) this.pos++;
		return this.source.slice(e, this.pos);
	}
	readQuoted() {
		let e = this.consume();
		this.assert(e === "\"" || e === "'", "expected quote");
		let t = this.pos;
		for (; !this.eof() && this.peek() !== e;) this.peek() === "\\" ? this.pos += 2 : this.pos++;
		this.assert(!this.eof(), "unterminated string");
		let n = this.source.slice(t, this.pos);
		return this.pos++, n.replace(/\\(.)/g, "$1");
	}
	assert(e, t) {
		e || Kd(364, String(this.pos + 1), t, this.source);
	}
};
function Of(e) {
	let t = /* @__PURE__ */ new Set(), n = [], r = [];
	if (e.skipWhitespace(), e.peek() === "*") e.consume();
	else if (Ef.test(e.peek())) {
		let n = e.readIdent();
		n && t.add(n.toUpperCase());
	}
	for (; !e.eof();) {
		let t = e.peek();
		if (t === ".") {
			e.consume();
			let t = e.readIdent();
			e.assert(t !== "", "expected class name after \".\""), r.push(t);
		} else if (t === "#") {
			e.consume();
			let t = e.readIdent();
			e.assert(t !== "", "expected id after \"#\""), n.push(bf("id", t));
		} else {
			if (t !== "[") break;
			{
				e.consume(), e.skipWhitespace();
				let t = e.readIdent();
				e.assert(t !== "", "expected attribute name after \"[\""), e.skipWhitespace();
				let r = !0;
				if (e.peek() === "=") {
					e.consume(), e.skipWhitespace();
					let t = e.peek();
					t === "\"" || t === "'" ? r = e.readQuoted() : (r = e.readIdent(), e.assert(r !== "", "expected attribute value")), e.skipWhitespace();
				}
				e.assert(e.peek() === "]", "expected \"]\""), e.consume(), n.push(bf(t, r));
			}
		}
	}
	return r.length > 0 && n.push(yf(r)), {
		predicates: n,
		tags: t
	};
}
function kf(e) {
	let t = new Df(e, 0), n = [];
	for (;;) {
		let e = Of(t);
		if (n.push(e), t.skipWhitespace(), t.eof()) break;
		t.assert(t.peek() === ",", "expected \",\" (selector lists are the only supported combinator)"), t.consume(), t.skipWhitespace();
	}
	if (n.length === 1) return _f(n[0].tags, n[0].predicates);
	let r = /* @__PURE__ */ new Set();
	for (let e of n) for (let t of e.tags) r.add(t);
	return _f(r, [(e, t) => {
		for (let r of n) {
			let n = e.nodeName;
			if (r.tags.size > 0 && !r.tags.has(n)) continue;
			let i = !0;
			for (let n of r.predicates) if (!n(e, t)) {
				i = !1;
				break;
			}
			if (i) return !0;
		}
		return !1;
	}]);
}
function Af(e, t, n) {
	return rf(lf, e, t, n);
}
Af("importSource", () => "unknown"), Af("importSourceDataTransfer", () => null), Af("textFormat", () => 0), Af("textStyle", () => ({}));
function jf(e) {
	if (!W(e)) return !1;
	if (e.nodeName === "PRE") return !0;
	let t = e.style.whiteSpace;
	return typeof t == "string" && t.startsWith("pre");
}
function Mf(e) {
	if (Bs(e)) return !0;
	if (!W(e)) return !1;
	let t = e.style.display;
	return t ? t.startsWith("inline") : !Kc(e) && Wc(e);
}
Af("whitespaceConfig", () => ({
	isInline: Mf,
	preservesWhitespace: jf
})), Af("importOverlays", () => []);
function Nf(e) {
	let t = Fd(e, cf);
	return t ? t.output.defaults : void 0;
}
function Pf(e, t = G()) {
	return Jd(function(e) {
		return Xd(lf, e) || Nf(e);
	}(t), e);
}
var Ff = nf(lf, Nf), If = Tf;
new Set([
	"center",
	"end",
	"justify",
	"left",
	"right",
	"start"
]), new Set([
	"font-weight",
	"font-style",
	"text-decoration",
	"vertical-align"
]), If.tag("b", "strong", "em", "i", "code", "mark", "s", "sub", "sup", "u", "span"), If.text(), If.tag("script", "style"), If.tag("br"), If.tag("p");
function Lf(e, t) {
	return Bs(t) ? e.textIndices : t.nodeType === 8 ? e.commentIndices : W(t) ? e.byTag.get(t.nodeName) || e.wildcardIndices : Rf;
}
var Rf = Object.freeze([]);
function zf(e) {
	return ho(e) || R(e) && !e.isInline();
}
function Bf(e, t) {
	let n = [], r = [], i = () => {
		r.length !== 0 && (n.push(t().splice(0, 0, r)), r = []);
	};
	for (let a of e) if (zf(a)) {
		if (i(), L(a)) {
			let e = Bf(a.getChildren(), t);
			a.splice(0, a.getChildrenSize(), e);
		}
		n.push(a);
	} else r.push(a);
	return i(), n;
}
var Vf = Object.freeze({});
function Hf(e, t) {
	return {
		$importChildren: (t, n) => function(e, t, n) {
			let r = n && n.rules ? n.rules.dispatch : void 0;
			r && e.overlays.push(r);
			try {
				let r = () => Uf(e, t, n);
				return n && n.context ? Ff(n.context, e.editor)(r) : r();
			} finally {
				r && e.overlays.pop();
			}
		}(e, t, n),
		$importOne: (t, n) => Wf(e, t, n),
		captures: t,
		get: (t) => Pf(t, e.editor),
		session: e.session
	};
}
function Uf(e, t, n) {
	let r = n && n.$onChild, i = [];
	for (let n of Array.from(t.childNodes)) {
		let t = Wf(e, n, void 0);
		for (let e of t) {
			let t = r ? r(e) : e;
			t != null && i.push(t);
		}
	}
	let a = n && n.$after ? n.$after(i) : i, o = n && n.schema;
	return o ? function(e, t, n, r) {
		let i = [], a = null, o = () => {
			if (a === null) return;
			let t = a;
			if (a = null, e.$packageRun) {
				let a = e.$packageRun(t, n, r);
				if (a.length > 0) {
					for (let e of a) i.push(e);
					return;
				}
			}
			if (e.onReject === "hoist") for (let e of t) i.push(e);
		};
		for (let r of t) e.$accepts(r, n) ? (o(), i.push(r)) : (a === null && (a = []), a.push(r));
		return o(), e.$finalize ? e.$finalize(i, n) : i;
	}(o, a, null, t) : a;
}
function Wf(e, t, n) {
	let r = () => function(e, t) {
		let n = function(e, t) {
			let n = [];
			for (let r = e.overlays.length - 1; r >= 0; r--) {
				let i = e.overlays[r], a = Lf(i, t);
				a.length > 0 && n.push({
					dispatch: i,
					indices: a
				});
			}
			let r = Lf(e.dispatch, t);
			return r.length > 0 && n.push({
				dispatch: e.dispatch,
				indices: r
			}), n;
		}(e, t);
		if (n.length === 0) return Gf(e, t);
		let r = 0, i = 0, a = () => {
			for (; r < n.length;) {
				let { dispatch: o, indices: s } = n[r];
				for (; i < s.length;) {
					let n = s[i++], r = o.rules[n], c = {};
					if (r.predicate(t, c)) {
						let n = Hf(e, Object.keys(c).length === 0 ? Vf : c);
						try {
							return r.$import(n, t, a);
						} catch (e) {
							throw e;
						}
					}
				}
				r++, i = 0;
			}
			return Gf(e, t);
		};
		return a();
	}(e, t);
	return n && n.context ? Ff(n.context, e.editor)(r) : r();
}
function Gf(e, t) {
	if (t.childNodes.length === 0) return [];
	let n = [];
	for (let r of Array.from(t.childNodes)) {
		let t = Wf(e, r, void 0);
		for (let e of t) n.push(e);
	}
	return n;
}
Tf.any(), Tf.tag("hr");
var Kf = {
	any: Tf.any,
	comment: Tf.comment,
	css: kf,
	tag: Tf.tag,
	text: Tf.text
}, qf = new Set(["STYLE", "SCRIPT"]);
function Jf(e, t) {
	af(t);
	let n = Vs(t) ? t.body.childNodes : t.childNodes, r = [], i = [];
	for (let t of n) if (!qf.has(t.nodeName)) {
		let n = Qf(t, e, i, !1);
		if (n !== null) for (let e of n) r.push(e);
	}
	return function(e) {
		for (let t of e) t.getParent() && t.getNextSibling() instanceof hs && t.insertAfter(ka());
		for (let t of e) {
			let e = t.getParent();
			e && e.splice(t.getIndexWithinParent(), 1, t.getChildren());
		}
	}(i), r;
}
function Yf(e, t = null, n = G()) {
	return hf([ef(df, !0)], n)(() => {
		let r = V(), i = mf(n), a = e.append.bind(e);
		for (let e of r.getChildren()) Zf(n, e, a, t, i);
		return e;
	});
}
function Xf(e, t = null) {
	return (typeof document > "u" || typeof window > "u" && global.window === void 0) && Kd(338), Yf(document.createElement("div"), t, e).innerHTML;
}
function Zf(e, t, n, r = null, i = Jc(e)) {
	let a = i.$shouldInclude(t, r, e), o = i.$shouldExclude(t, r, e), s = t;
	r !== null && N(t) && (s = wu(r, t, "clone"));
	let { element: c, after: l, append: u, $getChildNodes: d } = i.$exportDOM(s, e);
	if (!c) return !1;
	let f = document.createDocumentFragment(), p = d ? d() : L(s) ? s.getChildren() : [], m = f.append.bind(f);
	for (let n of p) {
		let o = Zf(e, n, m, r, i);
		!a && o && i.$extractWithChild(t, n, r, "html", e) && (a = !0);
	}
	if (a && !o) {
		if ((W(c) || Hc(c)) && (u ? u(f) : c.append(f)), n(c), l) {
			let e = l.call(s, c);
			e && (Hc(c) ? c.replaceChildren(e) : c.replaceWith(e));
		}
	} else n(f);
	return a;
}
function Qf(e, t, n, r, i = /* @__PURE__ */ new Map(), a) {
	let o = [];
	if (qf.has(e.nodeName)) return o;
	let s = null, c = function(e, t) {
		let { nodeName: n } = e, r = t._htmlConversions.get(n.toLowerCase()), i = null;
		if (r !== void 0) for (let t of r) {
			let n = t(e);
			n !== null && (i === null || (i.priority || 0) <= (n.priority || 0)) && (i = n);
		}
		return i === null ? null : i.conversion;
	}(e, t), l = c ? c(e) : null, u = null;
	if (l !== null) {
		u = l.after;
		let t = l.node;
		if (s = Array.isArray(t) ? t[t.length - 1] : t, s !== null) {
			for (let [, e] of i) if (s = e(s, a), !s) break;
			s && o.push(...Array.isArray(t) ? t : [s]);
		}
		l.forChild != null && i.set(e.nodeName, l.forChild);
	}
	let d = e.childNodes, f = [], p = (s == null || !jc(s)) && (s != null && ho(s) || r);
	for (let e = 0; e < d.length; e++) f.push(...Qf(d[e], t, n, p, new Map(i), s));
	if (u != null && (f = u(f)), Kc(e) && (f = $f(e, f, p ? () => {
		let e = new hs();
		return n.push(e), e;
	} : z)), s == null) if (f.length > 0) for (let e of f) o.push(e);
	else Kc(e) && function(e) {
		return e.nextSibling == null || e.previousSibling == null ? !1 : Wc(e.nextSibling) && Wc(e.previousSibling);
	}(e) && o.push(ka());
	else L(s) && s.append(...f);
	return o;
}
function $f(e, t, n) {
	let r = e.style.textAlign, i = [], a = [];
	for (let e = 0; e < t.length; e++) {
		let o = t[e];
		if (ho(o)) r && !o.getFormat() && o.setFormat(r), i.push(o);
		else if (a.push(o), e === t.length - 1 || e < t.length - 1 && ho(t[e + 1])) {
			let e = n();
			e.setFormat(r), e.append(...a), i.push(e), a = [];
		}
	}
	return i;
}
//#endregion
//#region node_modules/@lexical/clipboard/dist/LexicalClipboard.prod.mjs
function ep(e, t) {
	if (document.caretRangeFromPoint !== void 0) {
		let n = document.caretRangeFromPoint(e, t);
		return n === null ? null : {
			node: n.startContainer,
			offset: n.startOffset
		};
	}
	if (document.caretPositionFromPoint !== "undefined") {
		let n = document.caretPositionFromPoint(e, t);
		return n === null ? null : {
			node: n.offsetNode,
			offset: n.offset
		};
	}
	return null;
}
function tp(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var np = {
	"application/x-lexical-editor": 0,
	"text/html": 10,
	"text/plain": 20,
	"text/uri-list": 30
};
function rp(e) {
	return window.trustedTypes && window.trustedTypes.createPolicy ? window.trustedTypes.createPolicy("lexical", { createHTML: (e) => e }).createHTML(e) : e;
}
var ip = (e, t) => {
	if (!P(t)) return t.insertRawText(e), !0;
	let n = (e) => {
		let t = F();
		P(t) && e(t);
	};
	return ko(e, {
		linebreak: () => n((e) => e.insertParagraph()),
		tab: () => n((e) => e.insertNodes([Xa()])),
		text: (e) => n((t) => t.insertText(e))
	}), !0;
}, ap = {
	"application/x-lexical-editor": [(e, t, n) => {
		try {
			let n = G(), r = JSON.parse(e);
			if (r && r.namespace === n._config.namespace && Array.isArray(r.nodes)) return _p(n, bp(r.nodes), t), !0;
		} catch (e) {
			console.error(e);
		}
		return n();
	}],
	"text/html": [(e, t, n) => {
		try {
			let n = G();
			return _p(n, Jf(n, new DOMParser().parseFromString(rp(e), "text/html")), t), !0;
		} catch (e) {
			return console.error(e), n();
		}
	}],
	"text/plain": [ip],
	"text/uri-list": [ip]
};
function op(e, t, n, r) {
	if (!e) return !1;
	let i = (a) => !!e[a] && e[a](t, n, i.bind(null, a - 1), r);
	return i(e.length - 1);
}
function sp(e, t, n) {
	let r = t.getData("text/plain");
	for (let i of function(e) {
		return Object.keys(e.$importMimeType).filter((t) => e.$importMimeType[t] !== void 0).sort((t, n) => {
			let r = e.priority[t], i = e.priority[n];
			return r === void 0 && i === void 0 ? t < n ? -1 : +(t > n) : r === void 0 ? 1 : i === void 0 ? -1 : r - i;
		});
	}(e)) {
		let a = t.getData(i);
		if (a && (i !== "text/html" || a !== r) && op(e.$importMimeType[i], a, n, t)) return !0;
	}
	return !1;
}
var cp = {
	$importMimeType: ap,
	$insertDataTransfer: (e, t) => sp({
		$importMimeType: ap,
		priority: np
	}, e, t),
	priority: np
}, lp = ou({
	build: (e, t) => ({
		$importMimeType: t.$importMimeType,
		$insertDataTransfer: (e, n) => sp(t, e, n),
		priority: t.priority
	}),
	config: su({
		$importMimeType: ap,
		priority: np
	}),
	mergeConfig(e, t) {
		let n = cu(e, t);
		if (t.$importMimeType) {
			let r = { ...e.$importMimeType };
			for (let [e, n] of Object.entries(t.$importMimeType)) if (n) {
				let t = r[e];
				r[e] = t ? [...t, ...n] : n;
			}
			n.$importMimeType = r;
		}
		return t.priority && (n.priority = {
			...e.priority,
			...t.priority
		}), n;
	},
	name: "@lexical/clipboard/Import"
});
function up(e, t = F()) {
	return t ?? tp(166), P(t) && t.isCollapsed() || t.getNodes().length === 0 ? "" : Xf(e, t);
}
function dp(e, t = F()) {
	return t ?? tp(166), P(t) && t.isCollapsed() || t.getNodes().length === 0 ? null : JSON.stringify(yp(e, t));
}
function fp(e, t, n) {
	(function() {
		let e = Id(lp.name);
		return e ? e.output : cp;
	})().$insertDataTransfer(e, t);
}
var pp = "application/x-lexical-drag";
function mp(e, t) {
	let n = { editorKey: t.getKey() };
	e.setData(pp, JSON.stringify(n));
}
function hp(e, t, n) {
	let r = e.dataTransfer;
	if (r === null) return !1;
	let i = function(e) {
		let t = e.getData(pp);
		if (!t) return null;
		let n;
		try {
			n = JSON.parse(t);
		} catch {
			return null;
		}
		return (r = n) !== null && typeof r == "object" && "editorKey" in r && typeof r.editorKey == "string" ? n : null;
		var r;
	}(r);
	if (i === null) return !1;
	let a = function(e) {
		let t = ep(e.clientX, e.clientY);
		if (t === null) return null;
		let n = Qs(t.node);
		if (n === null) return null;
		if (N(n)) return El(n, "next", t.offset);
		if (L(n)) return nu(n, t.offset, "next");
		let r = n.getParent();
		return r === null ? null : nu(r, n.getIndexWithinParent() + 1, "next");
	}(e);
	if (a === null) return !1;
	let o = au(a);
	if (o === null) return !1;
	let s = i.editorKey === t.getKey(), c = F();
	if (s) {
		if (!P(c) || c.isCollapsed()) return !1;
		if (function(e, t) {
			let { anchor: n, focus: r } = tu(ql(t), "next");
			return Rl(n, e) < 0 && Rl(e, r) < 0;
		}(a, c)) return e.preventDefault(), !0;
		c.removeText();
	}
	if (!o.origin.isAttached()) return e.preventDefault(), !0;
	if (n(r, Gl(Fl(o)), t), !s) {
		let e = t.getRootElement(), n = e ? e.ownerDocument : null, r = n ? function(e, t) {
			let n = t.querySelectorAll("[data-lexical-editor=\"true\"]");
			for (let t of Array.from(n)) {
				let n = t.__lexicalEditor;
				if (n && n.getKey() === e) return t;
			}
			return null;
		}(i.editorKey, n) : null;
		r !== null && r.dispatchEvent(new InputEvent("beforeinput", {
			bubbles: !0,
			cancelable: !0,
			inputType: "deleteByDrag"
		}));
	}
	return e.preventDefault(), !0;
}
function gp(e, t) {
	return hp(e, t, fp);
}
function _p(e, t, n) {
	e.dispatchCommand(Mr, {
		nodes: t,
		selection: n
	}) || (n.insertNodes(t), function(e) {
		if (P(e) && e.isCollapsed()) {
			let t = e.anchor, n = null, r = Ul(t, "previous");
			if (r) if (bl(r)) n = r.origin;
			else {
				let e = Il(r, kl(V(), "next").getFlipped());
				for (let t of e) {
					if (N(t.origin)) {
						n = t.origin;
						break;
					}
					if (L(t.origin) && !t.origin.isInline()) break;
				}
			}
			if (n && N(n)) {
				let t = n.getFormat(), r = n.getStyle();
				e.format === t && e.style === r || (e.format = t, e.style = r, e.dirty = !0);
			}
		}
	}(n));
}
function vp(e, t, n, r = []) {
	let i = t === null || n.isSelected(t), a = L(n) && n.excludeFromCopy("html"), o = n;
	t !== null && N(o) && (o = wu(t, o, "clone"));
	let s = L(o) ? o.getChildren() : [], c = function(e) {
		let t = e.exportJSON(), n = e.constructor;
		if (t.type !== n.getType() && tp(58, n.name), L(e)) {
			let e = t.children;
			Array.isArray(e) || tp(59, n.name);
		}
		return t;
	}(o);
	N(o) && o.getTextContentSize() === 0 && (i = !1);
	for (let r = 0; r < s.length; r++) {
		let a = s[r], o = vp(e, t, a, c.children);
		!i && L(n) && o && n.extractWithChild(a, t, "clone") && (i = !0);
	}
	if (i && !a) r.push(c);
	else if (Array.isArray(c.children)) for (let e = 0; e < c.children.length; e++) {
		let t = c.children[e];
		r.push(t);
	}
	return i;
}
function yp(e, t) {
	let n = [], r = V().getChildren();
	for (let i = 0; i < r.length; i++) vp(e, t, r[i], n);
	return {
		namespace: e._config.namespace,
		nodes: n
	};
}
function bp(e) {
	let t = [];
	for (let n of e) t.push(Yo(n));
	return t;
}
var xp = null;
async function Sp(e, t, n) {
	if (xp !== null) return !1;
	if (t !== null) return new Promise((r, i) => {
		e.update(() => {
			r(Cp(e, t, n));
		});
	});
	let r = e.getRootElement(), i = e._window || window, a = i.document, o = Rc(i);
	if (r === null || o === null) return !1;
	let s = a.createElement("span");
	s.style.position = "fixed", s.style.top = "-1000px", s.append(a.createTextNode("#")), r.append(s);
	let c = new Range();
	return c.setStart(s, 0), c.setEnd(s, 1), o.removeAllRanges(), o.addRange(c), new Promise((t, r) => {
		let o = e.registerCommand(gi, (r) => (zu(r, ClipboardEvent) && (o(), xp !== null && (i.clearTimeout(xp), xp = null), t(Cp(e, r, n))), !0), 4);
		xp = i.setTimeout(() => {
			o(), xp = null, t(!1);
		}, 50), a.execCommand("copy"), s.remove();
	});
}
function Cp(e, t, n) {
	if (n === void 0) {
		let t = Rc(e._window), r = F();
		if (!r || r.isCollapsed() || !t) return !1;
		let i = t.anchorNode, a = t.focusNode;
		if (i !== null && a !== null && !Ps(e, i, a)) return !1;
		n = Tp(r);
	}
	t.preventDefault();
	let r = t.clipboardData;
	return r !== null && (Ep(r, n), !0);
}
var wp = [["text/html", up], ["application/x-lexical-editor", dp]];
function Tp(e = F()) {
	return function(e, t) {
		let n = { "text/plain": "" };
		for (let [r, i] of Object.entries(e)) if (i) {
			let e = kp(i, t);
			e !== null && (n[r] = e);
		}
		return n;
	}(Dp(), e);
}
function Ep(e, t) {
	for (let [n] of wp) t[n] === void 0 && e.setData(n, "");
	for (let n in t) {
		let r = t[n];
		r !== void 0 && e.setData(n, r);
	}
}
function Dp(e = G()) {
	let t = Fd(e, Ap.name);
	return t ? t.output : Op;
}
var Op = {
	"application/x-lexical-editor": [(e, t) => e ? dp(G(), e) : t()],
	"text/html": [(e, t) => e ? up(G(), e) : t()],
	"text/plain": [(e, t) => e ? e.getTextContent() : t()]
};
function kp(e, t) {
	let n = (r) => e[r] ? e[r](t, n.bind(null, r - 1)) : null;
	return n(e.length - 1);
}
var Ap = ou({
	build: (e, t, n) => t.$exportMimeType,
	config: su({ $exportMimeType: Op }),
	mergeConfig(e, t) {
		let n = cu(e, t);
		if (t.$exportMimeType) {
			let r = { ...e.$exportMimeType };
			for (let [e, n] of Object.entries(t.$exportMimeType)) if (n) {
				let t = r[e];
				r[e] = t ? [...t, ...n] : n;
			}
			n.$exportMimeType = r;
		}
		return n;
	},
	name: "@lexical/clipboard/GetClipboardData"
});
Kf.tag("h1", "h2", "h3", "h4", "h5", "h6"), Kf.tag("blockquote"), Kf.tag("p"), Kf.tag("span");
var jp = M("DRAG_DROP_PASTE_FILE"), Mp = class e extends as {
	static getType() {
		return "quote";
	}
	static clone(t) {
		return new e(t.__key);
	}
	createDOM(e) {
		let t = document.createElement("blockquote");
		return uu(t, e.theme.quote), t;
	}
	updateDOM(e, t) {
		return !1;
	}
	static importDOM() {
		return { blockquote: (e) => ({
			conversion: Lp,
			priority: 0
		}) };
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		if (W(t)) {
			this.isEmpty() && t.append(document.createElement("br"));
			let e = this.getFormatType();
			e && (t.style.textAlign = e);
			let n = this.getDirection();
			n && (t.dir = n);
		}
		return { element: t };
	}
	static importJSON(e) {
		return Np().updateFromJSON(e);
	}
	insertNewAfter(e, t) {
		let n = z(), r = this.getDirection();
		return n.setDirection(r), this.insertAfter(n, t), n;
	}
	collapseAtStart() {
		let e = z();
		return this.getChildren().forEach((t) => e.append(t)), this.replace(e), !0;
	}
	canMergeWhenEmpty() {
		return !0;
	}
};
function Np() {
	return Nc(new Mp());
}
var Pp = class e extends as {
	__tag;
	static getType() {
		return "heading";
	}
	static clone(t) {
		return new e(t.__tag, t.__key);
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__tag = e.__tag;
	}
	constructor(e = "h1", t) {
		super(t), this.__tag = e;
	}
	getTag() {
		return this.getLatest().__tag;
	}
	setTag(e) {
		let t = this.getWritable();
		return t.__tag = e, t;
	}
	createDOM(e) {
		let t = this.__tag, n = document.createElement(t), r = e.theme.heading;
		if (r !== void 0) {
			let e = r[t];
			uu(n, e);
		}
		return n;
	}
	updateDOM(e, t, n) {
		return e.__tag !== this.__tag;
	}
	static importDOM() {
		return {
			h1: (e) => ({
				conversion: Ip,
				priority: 0
			}),
			h2: (e) => ({
				conversion: Ip,
				priority: 0
			}),
			h3: (e) => ({
				conversion: Ip,
				priority: 0
			}),
			h4: (e) => ({
				conversion: Ip,
				priority: 0
			}),
			h5: (e) => ({
				conversion: Ip,
				priority: 0
			}),
			h6: (e) => ({
				conversion: Ip,
				priority: 0
			}),
			p: (e) => {
				let t = e.firstChild;
				return t !== null && Fp(t) ? {
					conversion: () => ({ node: null }),
					priority: 3
				} : null;
			},
			span: (e) => Fp(e) ? {
				conversion: (e) => ({ node: Rp("h1") }),
				priority: 3
			} : null
		};
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		if (W(t)) {
			this.isEmpty() && t.append(document.createElement("br"));
			let e = this.getFormatType();
			e && (t.style.textAlign = e);
			let n = this.getDirection();
			n && (t.dir = n);
		}
		return { element: t };
	}
	static importJSON(e) {
		return Rp(e.tag).updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setTag(e.tag);
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			tag: this.getTag()
		};
	}
	insertNewAfter(e, t = !0) {
		let n = e ? e.anchor.offset : 0, r = this.getLastDescendant(), i = !r || e && e.anchor.key === r.getKey() && n === r.getTextContentSize() || !e ? z() : Rp(this.getTag()), a = this.getDirection();
		if (i.setDirection(a), this.insertAfter(i, t), n === 0 && !this.isEmpty() && e) {
			let e = z();
			e.select(), this.replace(e, !0);
		}
		return i;
	}
	collapseAtStart() {
		if (this.isEmpty()) {
			let e = z();
			this.getChildren().forEach((t) => e.append(t)), this.replace(e);
		}
		return !0;
	}
	extractWithChild() {
		return !0;
	}
};
function Fp(e) {
	return e.nodeName.toLowerCase() === "span" && e.style.fontSize === "26pt";
}
function Ip(e) {
	let t = e.nodeName.toLowerCase(), n = null;
	return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6" || (n = Rp(t), rl(e, n), al(n, e), il(n, e)), { node: n };
}
function Lp(e) {
	let t = Np();
	return al(t, e), rl(e, t), il(t, e), { node: t };
}
function Rp(e = "h1") {
	return Nc(new Pp(e));
}
function zp(e) {
	let t = null;
	if (zu(e, DragEvent) ? t = e.dataTransfer : zu(e, ClipboardEvent) && (t = e.clipboardData), t === null) return [
		!1,
		[],
		!1
	];
	let n = t.types, r = n.includes("Files"), i = n.includes("text/html") || n.includes("text/plain");
	return [
		r,
		Array.from(t.files),
		i
	];
}
function Bp(e) {
	return R(Qs(e));
}
function Vp(e, t, n, r) {
	let i = !1, a = null;
	if (e.isCollapsed() && e.anchor.type === "text") {
		let t = e.anchor.getNode();
		if (N(t)) {
			a = t;
			let r = e.anchor.offset, o = r === t.getTextContentSize() && t.getNextSibling() === null, s = r === 0 && t.getPreviousSibling() === null;
			i = n === "end" && o || n === "start" && s || n === "both" && (o || s);
		}
	}
	let o = !1;
	for (let [n, s] of Object.entries(r)) {
		if (s == null || !s[t]) continue;
		let r = n;
		if (s.onlyAtBoundary) {
			if (!(i && a && N(a) && a.hasFormat(r))) continue;
			o = !0;
		}
		e.hasFormat(r) && e.toggleFormat(r);
	}
	o && e.setStyle("");
}
var Hp = {
	capitalize: {
		enter: !0,
		space: !0,
		tab: !0
	},
	lowercase: {
		enter: !0,
		space: !0,
		tab: !0
	},
	uppercase: {
		enter: !0,
		space: !0,
		tab: !0
	}
};
function Up(e, t = Qu(Hp)) {
	return fu(e.registerCommand(Nr, () => {
		let e = F();
		return io(e) ? (e.clear(), !0) : (P(e) && Vp(e, "click", "both", t.peek()), !1);
	}, 0), e.registerCommand(Rr, (e) => {
		let t = F();
		return P(t) ? (t.deleteCharacter(e), !0) : !!io(t) && (t.deleteNodes(), !0);
	}, 0), e.registerCommand(Wr, (e) => {
		let t = F();
		return !!P(t) && (t.deleteWord(e), !0);
	}, 0), e.registerCommand(Gr, (e) => {
		let t = F();
		return !!P(t) && (t.deleteLine(e), !0);
	}, 0), e.registerCommand(Vr, (t) => {
		let n = F();
		if (typeof t == "string") n !== null && n.insertText(t);
		else {
			if (n === null) return !1;
			let r = t.dataTransfer;
			if (r != null) fp(r, n, e);
			else if (P(n)) {
				let e = t.data;
				return e && n.insertText(e), !0;
			}
		}
		return !0;
	}, 0), e.registerCommand(Ur, () => {
		let e = F();
		return !!P(e) && (e.removeText(), !0);
	}, 0), e.registerCommand(Kr, (e) => {
		let t = F();
		return !!P(t) && (t.formatText(e), !0);
	}, 0), e.registerCommand(fi, (e) => {
		let t = F();
		if (!P(t) && !io(t)) return !1;
		let n = t.getNodes();
		for (let t of n) {
			let n = ul(t, (e) => L(e) && !e.isInline());
			n !== null && n.setFormat(e);
		}
		return !0;
	}, 0), e.registerCommand(zr, (e) => {
		let t = F();
		return !!P(t) && (t.insertLineBreak(e), !0);
	}, 0), e.registerCommand(Br, () => {
		let e = F();
		return !!P(e) && (e.insertParagraph(), !0);
	}, 0), e.registerCommand(ci, () => {
		let e = Xa(), t = F();
		return P(t) && (e.setFormat(t.format), e.setStyle(t.style)), Oo([e]), !0;
	}, 0), e.registerCommand(li, () => Bu((e) => {
		let t = e.getIndent();
		e.setIndent(t + 1);
	}), 0), e.registerCommand(ui, () => Bu((e) => {
		let t = e.getIndent();
		t > 0 && e.setIndent(Math.max(0, t - 1));
	}), 0), e.registerCommand(ei, (e) => {
		let t = F();
		if (io(t)) {
			let n = t.getNodes();
			if (n.length > 0) return e.preventDefault(), n[0].selectPrevious(), !0;
		} else if (P(t)) {
			let n = bc(t.focus, !0);
			if (!e.shiftKey && R(n) && !n.isIsolated() && !n.isInline()) return n.selectPrevious(), e.preventDefault(), !0;
		}
		return !1;
	}, 0), e.registerCommand(ti, (e) => {
		let t = F();
		if (io(t)) {
			let n = t.getNodes();
			if (n.length > 0) return e.preventDefault(), n[0].selectNext(0, 0), !0;
		} else if (P(t)) {
			if (function(e) {
				let t = e.focus;
				return t.key === "root" && t.offset === V().getChildrenSize();
			}(t)) return e.preventDefault(), !0;
			let n = bc(t.focus, !1);
			if (!e.shiftKey && R(n) && !n.isIsolated() && !n.isInline()) return n.selectNext(), e.preventDefault(), !0;
		}
		return !1;
	}, 0), e.registerCommand(Qr, (e) => {
		let n = F();
		if (io(n)) {
			let t = n.getNodes();
			if (t.length > 0) return e.preventDefault(), Cu(t[0]) ? t[0].selectNext(0, 0) : t[0].selectPrevious(), !0;
		}
		if (!P(n)) return !1;
		if (e.shiftKey || Vp(n, "arrow", "start", t.peek()), ju(n, !0)) {
			let t = e.shiftKey;
			return e.preventDefault(), Pu(n, t, !0), !0;
		}
		return !1;
	}, 0), e.registerCommand(Xr, (e) => {
		let n = F();
		if (io(n)) {
			let t = n.getNodes();
			if (t.length > 0) return e.preventDefault(), Cu(t[0]) ? t[0].selectPrevious() : t[0].selectNext(0, 0), !0;
		}
		if (!P(n)) return !1;
		if (e.shiftKey || Vp(n, "arrow", "end", t.peek()), ju(n, !1)) {
			let t = e.shiftKey;
			return e.preventDefault(), Pu(n, t, !1), !0;
		}
		return !1;
	}, 0), e.registerCommand(ii, (t) => {
		if (Bp(t.target)) return !1;
		let n = F();
		if (P(n)) {
			if (function(e) {
				if (!e.isCollapsed()) return !1;
				let { anchor: t } = e;
				if (t.offset !== 0) return !1;
				let n = t.getNode();
				if (ls(n)) return !1;
				let r = Lu(n);
				return r.getIndent() > 0 && (r.is(n) || n.is(r.getFirstDescendant()));
			}(n)) return t.preventDefault(), e.dispatchCommand(ui, void 0);
			if (Ft && navigator.language === "ko-KR") return !1;
		} else if (!io(n)) return !1;
		return t.preventDefault(), e.dispatchCommand(Rr, !0);
	}, 0), e.registerCommand(oi, (t) => {
		if (Bp(t.target)) return !1;
		let n = F();
		return !(!P(n) && !io(n)) && (t.preventDefault(), e.dispatchCommand(Rr, !1));
	}, 0), e.registerCommand(ni, (n) => {
		let r = F();
		if (io(r)) {
			let e = r.getNodes();
			e.length === 1 && R(e[0]) && !e[0].isInline() && (r = e[0].selectNext());
		}
		if (!P(r)) return !1;
		if (Vp(r, "enter", "both", t.peek()), n !== null) {
			if ((Ft || Lt || Bt) && Pt) return !1;
			if (n.preventDefault(), n.shiftKey) return e.dispatchCommand(zr, !1);
		}
		return e.dispatchCommand(Br, void 0);
	}, 0), e.registerCommand(ai, () => !!P(F()) && (e.blur(), !0), 0), e.registerCommand(di, (t) => {
		let [, n] = zp(t);
		if (n.length > 0) {
			let r = t.clientX, i = t.clientY, a = ep(r, i);
			if (a !== null) {
				let { offset: t, node: r } = a, i = Qs(r);
				if (i !== null) {
					let e = _o();
					if (N(i)) e.anchor.set(i.getKey(), t, "text"), e.focus.set(i.getKey(), t, "text");
					else {
						let t = i.getParentOrThrow().getKey(), n = i.getIndexWithinParent() + 1;
						e.anchor.set(t, n, "element"), e.focus.set(t, n, "element");
					}
					nc(Un(e));
				}
				e.dispatchCommand(jp, n);
			}
			return t.preventDefault(), !0;
		}
		return gp(t, e);
	}, 0), e.registerCommand(pi, (t) => {
		let [n] = zp(t), r = F();
		return !(n && !P(r)) && (P(r) && !r.isCollapsed() && t.dataTransfer !== null && (Ep(t.dataTransfer, Tp(r)), mp(t.dataTransfer, e)), !0);
	}, 0), e.registerCommand(mi, (e) => {
		let [t] = zp(e), n = F();
		if (t && !P(n)) return !1;
		let r = e.clientX, i = e.clientY, a = ep(r, i);
		return a !== null && R(Qs(a.node)) && e.preventDefault(), !0;
	}, 0), e.registerCommand(vi, () => (gc(), !0), 0), e.registerCommand(gi, (t) => (Sp(e, zu(t, ClipboardEvent) ? t : null), !0), 0), e.registerCommand(_i, (t) => (async function(e, t) {
		await Sp(t, zu(e, ClipboardEvent) ? e : null), t.update(() => {
			let e = F();
			P(e) ? e.removeText() : io(e) && e.getNodes().forEach((e) => e.remove());
		});
	}(t, e), !0), 0), e.registerCommand(Hr, (t) => {
		let [, n, r] = zp(t);
		return n.length > 0 && !r ? (e.dispatchCommand(jp, n), !0) : Vc(t.target) && Ns(t.target) ? !1 : F() !== null && (function(e, t) {
			e.preventDefault(), t.update(() => {
				let n = F(), r = zu(e, InputEvent) || zu(e, KeyboardEvent) ? null : e.clipboardData;
				r != null && n !== null && fp(r, n, t);
			}, { tag: "paste" });
		}(t, e), !0);
	}, 0), e.registerCommand(ri, () => {
		let e = F();
		return P(e) && Vp(e, "space", "both", t.peek()), !1;
	}, 0), e.registerCommand(si, () => {
		let e = F();
		return P(e) && Vp(e, "tab", "both", t.peek()), !1;
	}, 0), e.registerCommand(Zr, (e) => {
		let t = F();
		if (!P(t)) return !1;
		let { anchor: n } = t;
		if (n.type !== "element" || n.offset !== 0) return !1;
		let r = n.getNode();
		if (!L(r)) return !1;
		let i = r.getFirstChild();
		if (!R(i) || !i.isInline()) return !1;
		let a = r.getLastDescendant();
		if (a == null || R(a)) return !1;
		let o = r.getKey(), s = r.selectEnd();
		return e.shiftKey && s.anchor.set(o, 0, "element"), e.preventDefault(), e.stopPropagation(), !0;
	}, 0), e.registerCommand($r, (e) => {
		let t = F();
		if (!P(t)) return !1;
		let { anchor: n, focus: r } = t, i = ul(r.getNode(), (e) => L(e) && !e.isInline());
		if (i === null) return !1;
		let a = i.getFirstChild();
		if (!R(a) || !a.isInline()) return !1;
		let o = i.getLastDescendant();
		if (o == null || R(o) || ul(n.getNode(), (e) => L(e) && !e.isInline()) !== i) return !1;
		let s = i.getKey();
		return (r.type !== "element" || r.key !== s || r.offset !== 0) && (t.focus.set(s, 0, "element"), e.shiftKey || t.anchor.set(s, 0, "element"), e.preventDefault(), e.stopPropagation(), !0);
	}, 0));
}
//#endregion
//#region node_modules/@lexical/react/dist/LexicalRichTextPlugin.prod.mjs
function Wp(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var Gp = D ? u : c;
function Kp({ editor: e, ErrorBoundary: t }) {
	return function(e, t) {
		let [r, i] = p(() => e.getDecorators());
		return Gp(() => e.registerDecoratorListener((e) => {
			h(() => {
				i(e);
			});
		}), [e]), c(() => {
			i(e.getDecorators());
		}, [e]), d(() => {
			let i = [], a = Object.keys(r);
			for (let o = 0; o < a.length; o++) {
				let s = a[o], c = (0, b.jsx)(t, {
					onError: (t) => e._onError(t),
					children: (0, b.jsx)(n, {
						fallback: null,
						children: r[s]
					})
				}), l = e.getElementByKey(s);
				l !== null && i.push(m(c, l, s));
			}
			return i;
		}, [
			t,
			r,
			e
		]);
	}(e, t);
}
function qp({ editor: e, ErrorBoundary: t }) {
	return function(e) {
		let t = Pd.maybeFromEditor(e);
		if (t && t.hasExtensionByName(Bd.name)) {
			for (let e of ["@lexical/plain-text", "@lexical/rich-text"]) t.hasExtensionByName(e) && Wp(320, e);
			return !0;
		}
		return !1;
	}(e) ? null : (0, b.jsx)(Kp, {
		editor: e,
		ErrorBoundary: t
	});
}
function Jp(e) {
	return e.getEditorState().read(Wd(e.isComposing()));
}
function Yp({ contentEditable: e, placeholder: t = null, ErrorBoundary: n }) {
	let [r] = kt();
	return function(e) {
		Gp(() => fu(Up(e), Gd(e)), [e]);
	}(r), (0, b.jsxs)(b.Fragment, { children: [
		e,
		(0, b.jsx)(Xp, { content: t }),
		(0, b.jsx)(qp, {
			editor: r,
			ErrorBoundary: n
		})
	] });
}
function Xp({ content: e }) {
	let [t] = kt(), n = function(e) {
		let [t, n] = p(() => Jp(e));
		return Gp(() => {
			function t() {
				n(Jp(e));
			}
			return t(), fu(e.registerUpdateListener(() => {
				t();
			}), e.registerEditableListener(() => {
				t();
			}));
		}, [e]), t;
	}(t), r = vu();
	return n ? typeof e == "function" ? e(r) : e : null;
}
//#endregion
//#region node_modules/@lexical/react/dist/LexicalContentEditable.prod.mjs
var Zp = D ? u : c;
function Qp({ editor: e, ariaActiveDescendant: t, ariaAutoComplete: n, ariaControls: r, ariaDescribedBy: i, ariaErrorMessage: a, ariaExpanded: s, ariaInvalid: c, ariaLabel: l, ariaLabelledBy: u, ariaMultiline: f, ariaOwns: m, ariaRequired: h, autoCapitalize: g, className: _, id: v, role: y = "textbox", spellCheck: x = !0, style: S, tabIndex: ee, "data-testid": te, ...ne }, C) {
	let [re, ie] = p(e.isEditable()), ae = o((t) => {
		t && t.ownerDocument && t.ownerDocument.defaultView ? e.setRootElement(t) : e.setRootElement(null);
	}, [e]), oe = d(() => function(...e) {
		return (t) => {
			for (let n of e) typeof n == "function" ? n(t) : n != null && (n.current = t);
		};
	}(C, ae), [ae, C]);
	return Zp(() => (ie(e.isEditable()), e.registerEditableListener((e) => {
		ie(e);
	})), [e]), (0, b.jsx)("div", {
		"aria-activedescendant": re ? t : void 0,
		"aria-autocomplete": re ? n : "none",
		"aria-controls": re ? r : void 0,
		"aria-describedby": i,
		...a == null ? {} : { "aria-errormessage": a },
		"aria-expanded": re && y === "combobox" ? !!s : void 0,
		...c == null ? {} : { "aria-invalid": c },
		"aria-label": l,
		"aria-labelledby": u,
		"aria-multiline": f,
		"aria-owns": re ? m : void 0,
		"aria-readonly": !re || void 0,
		"aria-required": h,
		autoCapitalize: g,
		className: _,
		contentEditable: re,
		"data-testid": te,
		id: v,
		ref: oe,
		role: y,
		spellCheck: x,
		style: S,
		tabIndex: ee,
		...ne
	});
}
var $p = a(Qp);
function em(e) {
	return e.getEditorState().read(Wd(e.isComposing()));
}
var tm = a(nm);
function nm(e, t) {
	let { placeholder: n, ...r } = e, [i] = kt();
	return (0, b.jsxs)(b.Fragment, { children: [(0, b.jsx)($p, {
		editor: i,
		...r,
		ref: t
	}), n != null && (0, b.jsx)(rm, {
		editor: i,
		content: n
	})] });
}
function rm({ content: e, editor: t }) {
	let n = function(e) {
		let [t, n] = p(() => em(e));
		return Zp(() => {
			function t() {
				n(em(e));
			}
			return t(), fu(e.registerUpdateListener(() => {
				t();
			}), e.registerEditableListener(() => {
				t();
			}));
		}, [e]), t;
	}(t), [r, i] = p(t.isEditable());
	if (u(() => (i(t.isEditable()), t.registerEditableListener((e) => {
		i(e);
	})), [t]), !n) return null;
	let a = null;
	return typeof e == "function" ? a = e(r) : e !== null && (a = e), a === null ? null : (0, b.jsx)("div", {
		"aria-hidden": !0,
		children: a
	});
}
//#endregion
//#region node_modules/@lexical/list/dist/LexicalList.prod.mjs
function im(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function am(e) {
	let t = 1, n = e.getParent();
	for (; n != null;) {
		if (Y(n)) {
			let e = n.getParent();
			if (X(e)) {
				t++, n = e.getParent();
				continue;
			}
			im(40);
		}
		return t;
	}
	return t;
}
function om(e) {
	let t = e.getParent();
	X(t) || im(40);
	let n = t;
	for (; n !== null;) n = n.getParent(), X(n) && (t = n);
	return t;
}
function sm(e) {
	let t = [], n = e.getChildren().filter(Y);
	for (let e = 0; e < n.length; e++) {
		let r = n[e], i = r.getFirstChild();
		X(i) ? t = t.concat(sm(i)) : t.push(r);
	}
	return t;
}
function cm(e) {
	return Y(e) && X(e.getFirstChild());
}
function lm(e, t) {
	return Y(e) && (t.length === 0 || t.length === 1 && e.is(t[0]) && e.getChildrenSize() === 0);
}
function um(e) {
	let t = F();
	if (t !== null) {
		let n = t.getNodes();
		if (P(t)) {
			let [r] = t.getStartEndPoints(), i = r.getNode(), a = i.getParent();
			if (jc(i)) {
				let e = i.getFirstChild();
				if (e) n = e.selectStart().getNodes();
				else {
					let e = z();
					i.append(e), n = e.select().getNodes();
				}
			} else if (lm(i, n)) {
				let t = Om(e);
				if (jc(a)) {
					i.replace(t);
					let e = Cm();
					L(i) && (e.setFormat(i.getFormatType()), e.setIndent(i.getIndent())), t.append(e);
				} else if (Y(i)) {
					let e = i.getParentOrThrow();
					dm(t, e.getChildren()), e.replace(t);
				}
				return;
			}
		}
		let r = /* @__PURE__ */ new Set();
		for (let t = 0; t < n.length; t++) {
			let i = n[t];
			if (L(i) && i.isEmpty() && !Y(i) && !r.has(i.getKey())) {
				fm(i, e);
				continue;
			}
			let a = Ws(i) ? i.getParent() : Y(i) && i.isEmpty() ? i : null;
			for (; a != null;) {
				let t = a.getKey();
				if (X(a)) {
					if (!r.has(t)) {
						let n = Om(e);
						dm(n, a.getChildren()), a.replace(n), r.add(t);
					}
					break;
				}
				{
					let n = a.getParent();
					if (jc(n) && !r.has(t)) {
						r.add(t), fm(a, e);
						break;
					}
					a = n;
				}
			}
		}
	}
}
function dm(e, t) {
	e.splice(e.getChildrenSize(), 0, t);
}
function fm(e, t) {
	if (X(e)) return e;
	let n = e.getPreviousSibling(), r = e.getNextSibling(), i = Cm(), a;
	if (dm(i, e.getChildren()), X(n) && t === n.getListType()) n.append(i), X(r) && t === r.getListType() && (dm(n, r.getChildren()), r.remove()), a = n;
	else if (X(r) && t === r.getListType()) r.getFirstChildOrThrow().insertBefore(i), a = r;
	else {
		let n = Om(t);
		n.append(i), e.replace(n), a = n;
	}
	i.setFormat(e.getFormatType()), i.setIndent(e.getIndent());
	let o = F();
	return P(o) && (a.getKey() === o.anchor.key && o.anchor.set(i.getKey(), o.anchor.offset, "element"), a.getKey() === o.focus.key && o.focus.set(i.getKey(), o.focus.offset, "element")), e.remove(), a;
}
function pm(e, t) {
	let n = e.getLastChild(), r = t.getFirstChild();
	n && r && cm(n) && cm(r) && (pm(n.getFirstChild(), r.getFirstChild()), r.remove());
	let i = t.getChildren();
	i.length > 0 && e.append(...i), t.remove();
}
function mm() {
	let e = F();
	if (P(e)) {
		let t = /* @__PURE__ */ new Set(), n = e.getNodes(), r = e.anchor.getNode();
		if (lm(r, n)) t.add(om(r));
		else for (let e = 0; e < n.length; e++) {
			let r = n[e];
			if (Ws(r)) {
				let e = Iu(r, ym);
				e != null && t.add(om(e));
			}
		}
		for (let n of t) {
			let t = n, r = sm(n);
			for (let n of r) {
				let r = z().setTextStyle(e.style).setTextFormat(e.format);
				dm(r, n.getChildren()), t.insertAfter(r), t = r, n.__key === e.anchor.key && Wl(e.anchor, Ql(kl(r, "next"))), n.__key === e.focus.key && Wl(e.focus, Ql(kl(r, "next"))), n.remove();
			}
			n.remove();
		}
	}
}
function hm(e) {
	let t = e.getListType() !== "check", n = e.getStart();
	for (let r of e.getChildren()) Y(r) && (r.getValue() !== n && r.setValue(n), t && r.getLatest().__checked != null && r.setChecked(void 0), X(r.getFirstChild()) || n++);
}
function gm(e) {
	let t = /* @__PURE__ */ new Set();
	if (cm(e) || t.has(e.getKey())) return;
	let n = e.getParent(), r = e.getNextSibling(), i = e.getPreviousSibling();
	if (cm(r) && cm(i)) {
		let n = i.getFirstChild();
		if (X(n)) {
			n.append(e);
			let i = r.getFirstChild();
			X(i) && (dm(n, i.getChildren()), r.remove(), t.add(r.getKey()));
		}
	} else if (cm(r)) {
		let t = r.getFirstChild();
		if (X(t)) {
			let n = t.getFirstChild();
			n !== null && n.insertBefore(e);
		}
	} else if (cm(i)) {
		let t = i.getFirstChild();
		X(t) && t.append(e);
	} else if (X(n)) {
		let t = Mc(e), a = Mc(n);
		t.append(a), a.append(e), i ? i.insertAfter(t) : r ? r.insertBefore(t) : n.append(t);
	}
}
function _m(e) {
	if (cm(e)) return;
	let t = e.getParent(), n = t ? t.getParent() : void 0;
	if (X(n ? n.getParent() : void 0) && Y(n) && X(t)) {
		let r = t ? t.getFirstChild() : void 0, i = t ? t.getLastChild() : void 0;
		if (e.is(r)) n.insertBefore(e), t.isEmpty() && n.remove();
		else if (e.is(i)) n.insertAfter(e), t.isEmpty() && n.remove();
		else {
			let r = Mc(e), i = Mc(t);
			r.append(i), e.getPreviousSiblings().forEach((e) => i.append(e));
			let a = Mc(e), o = Mc(t);
			a.append(o), dm(o, e.getNextSiblings()), n.insertBefore(r), n.insertAfter(a), n.replace(e);
		}
	}
}
function vm(e = !1) {
	let t = F();
	if (!P(t) || !t.isCollapsed()) return !1;
	let n = t.anchor.getNode(), r = null;
	if (Y(n) && n.getChildrenSize() === 0) r = n;
	else if (N(n)) {
		let e = n.getParent();
		Y(e) && e.getChildren().every((e) => N(e) && e.getTextContent().trim() === "") && (r = e);
	}
	if (r === null) return !1;
	let i = om(r), a = r.getParent();
	X(a) || im(40);
	let o = a.getParent(), s;
	if (jc(o)) s = z(), i.insertAfter(s);
	else {
		if (!Y(o)) return !1;
		s = Mc(o), o.insertAfter(s);
	}
	s.setTextStyle(t.style).setTextFormat(t.format).select();
	let c = r.getNextSiblings();
	if (c.length > 0) {
		let t = e ? function(e, t) {
			return e.getStart() + t.getIndexWithinParent();
		}(a, r) : 1, n = Mc(a).setStart(t);
		if (Y(s)) {
			let e = Mc(s);
			e.append(n), s.insertAfter(e);
		} else s.insertAfter(n);
		n.append(...c);
	}
	return function(e) {
		let t = e;
		for (; t.getNextSibling() == null && t.getPreviousSibling() == null;) {
			let e = t.getParent();
			if (e == null || !Y(e) && !X(e)) break;
			t = e;
		}
		t.remove();
	}(r), !0;
}
var ym = class extends as {
	__value;
	__checked;
	$config() {
		return this.config("listitem", {
			$transform: (e) => {
				let t = e.getParent();
				if (X(t)) t.getListType() !== "check" && e.getChecked() != null && e.setChecked(void 0);
				else if (t) {
					let n = e.createParentElementNode();
					X(n) || im(340);
					let r = [e];
					for (let t of ["previous", "next"]) {
						r.reverse();
						for (let { origin: n } of K(e, t)) {
							if (!Y(n)) break;
							r.push(n);
						}
					}
					e.insertBefore(n), n.splice(0, 0, r), jc(t) || (Ru(n, Jl(K(n, "next")), {
						$shouldSplit: () => !1,
						removeEmptyDestination: !0
					}), t.isEmpty() && t.isAttached() && t.remove());
				}
			},
			extends: as,
			importDOM: fa({ li: () => ({
				conversion: bm,
				priority: 0
			}) })
		});
	}
	constructor(e = 1, t = void 0, n) {
		super(n), this.__value = e === void 0 ? 1 : e, this.__checked = t;
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__value = e.__value, this.__checked = e.__checked;
	}
	createDOM(e) {
		let t = document.createElement("li");
		return this.updateListItemDOM(null, t, e), t;
	}
	updateListItemDOM(e, t, n) {
		(function(e, t) {
			let n = t.getParent();
			!X(n) || n.getListType() !== "check" || X(t.getFirstChild()) ? (e.removeAttribute("role"), e.removeAttribute("tabIndex"), e.removeAttribute("aria-checked")) : (e.setAttribute("role", "checkbox"), e.setAttribute("tabIndex", "-1"), e.setAttribute("aria-checked", t.getChecked() ? "true" : "false"));
		})(t, this), t.value = this.__value, function(e, t, n) {
			let r = t.list;
			if (!r) return;
			let i = r.listitem, a = r.nested && r.nested.listitem, o = n.getParent(), s = X(o) && o.getListType() === "check", c = n.getChecked(), l = n.getChildren().some((e) => X(e)), u = [];
			r.listitemChecked !== void 0 && u.push(r.listitemChecked), r.listitemUnchecked !== void 0 && u.push(r.listitemUnchecked), a !== void 0 && u.push(...lu(a)), u.length > 0 && du(e, ...u);
			let d = [];
			if (i !== void 0 && d.push(...lu(i)), s) {
				let e = c ? r.listitemChecked : r.listitemUnchecked;
				e !== void 0 && d.push(e);
			}
			a !== void 0 && l && d.push(...lu(a)), d.length > 0 && uu(e, ...d);
		}(t, n.theme, this);
		let r = e ? e.__style : "", i = this.__style;
		r !== i && Ea(t.style, i, r), function(e, t, n) {
			let r = t.__textStyle, i = n ? n.__textStyle : "";
			if (n !== null && i === r) return;
			let a = wa(r);
			for (let t in a) e.style.setProperty(`--listitem-marker-${t}`, a[t]);
			if (i !== "") for (let t in wa(i)) t in a || e.style.removeProperty(`--listitem-marker-${t}`);
		}(t, this, e);
	}
	updateDOM(e, t, n) {
		let r = t;
		return this.updateListItemDOM(e, r, n), !1;
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setValue(e.value).setChecked(e.checked);
	}
	exportDOM(e) {
		let t = this.createDOM(e._config), n = this.getFormatType();
		n && (t.style.textAlign = n);
		let r = this.getDirection();
		return r && (t.dir = r), cm(this) ? {
			after(e) {
				if (W(e)) {
					let t = e.previousElementSibling;
					if (W(t) && t.nodeName === "LI") {
						for (; e.firstChild;) t.append(e.firstChild);
						e.remove();
					}
				}
				return e;
			},
			element: t
		} : { element: t };
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			checked: this.getChecked(),
			value: this.getValue()
		};
	}
	append(...e) {
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			if (L(n) && this.canMergeWith(n)) {
				let e = n.getChildren();
				this.append(...e), n.remove();
			} else super.append(n);
		}
		return this;
	}
	replace(e, t) {
		if (Y(e)) return super.replace(e);
		this.setIndent(0);
		let n = this.getParentOrThrow();
		if (!X(n)) return e;
		if (n.__first === this.getKey()) n.insertBefore(e);
		else if (n.__last === this.getKey()) n.insertAfter(e);
		else {
			let t = Mc(n), r = this.getNextSibling();
			for (; r;) {
				let e = r;
				r = r.getNextSibling(), t.append(e);
			}
			n.insertAfter(e), e.insertAfter(t);
		}
		let r = this.__key, i = 0;
		if (t && (L(e) || im(139), i = e.getChildrenSize(), e.splice(i, 0, this.getChildren())), t && L(e)) {
			let t = F();
			if (P(t)) for (let n of t.getStartEndPoints()) n.key === r && n.type === "element" && n.set(e.getKey(), i + n.offset, "element");
		}
		return this.remove(), n.getChildrenSize() === 0 && n.remove(), e;
	}
	insertAfter(e, t = !0) {
		let n = this.getParentOrThrow();
		if (X(n) || im(39), Y(e)) return super.insertAfter(e, t);
		let r = this.getNextSiblings();
		if (n.insertAfter(e, t), r.length !== 0) {
			let i = Mc(n);
			r.forEach((e) => i.append(e)), e.insertAfter(i, t);
		}
		return e;
	}
	remove(e) {
		let t = this.getPreviousSibling(), n = this.getNextSibling();
		super.remove(e), t && n && cm(t) && cm(n) && (pm(t.getFirstChild(), n.getFirstChild()), n.remove());
	}
	resetOnCopyNodeFrom(e) {
		super.resetOnCopyNodeFrom(e), e.getChecked() && this.setChecked(!1);
	}
	insertNewAfter(e, t = !0) {
		let n = Mc(this);
		return this.insertAfter(n, t), n;
	}
	collapseAtStart(e) {
		let t = z();
		this.getChildren().forEach((e) => t.append(e));
		let n = this.getParentOrThrow(), r = n.getParentOrThrow(), i = Y(r);
		if (n.getChildrenSize() === 1) if (i) n.remove(), r.select();
		else {
			n.insertBefore(t), n.remove();
			let r = e.anchor, i = e.focus, a = t.getKey();
			r.type === "element" && r.getNode().is(this) && r.set(a, r.offset, "element"), i.type === "element" && i.getNode().is(this) && i.set(a, i.offset, "element");
		}
		else n.insertBefore(t), this.remove();
		return !0;
	}
	getValue() {
		return this.getLatest().__value;
	}
	setValue(e) {
		let t = this.getWritable();
		return t.__value = e, t;
	}
	getChecked() {
		let e = this.getLatest(), t, n = this.getParent();
		return X(n) && (t = n.getListType()), t === "check" ? !!e.__checked : void 0;
	}
	setChecked(e) {
		let t = this.getWritable();
		return t.__checked = e, t;
	}
	toggleChecked() {
		let e = this.getWritable();
		return e.setChecked(!e.__checked);
	}
	getIndent() {
		let e = this.getParent();
		if (e === null || !this.isAttached()) return this.getLatest().__indent;
		let t = e.getParentOrThrow(), n = 0;
		for (; Y(t);) t = t.getParentOrThrow().getParentOrThrow(), n++;
		return n;
	}
	setIndent(e) {
		typeof e != "number" && im(117), (e = Math.floor(e)) >= 0 || im(199);
		let t = this.getIndent();
		for (; t !== e;) t < e ? (gm(this), t++) : (_m(this), t--);
		return this;
	}
	canInsertAfter(e) {
		return Y(e);
	}
	canReplaceWith(e) {
		return Y(e);
	}
	canMergeWith(e) {
		return Y(e) || vs(e);
	}
	extractWithChild(e, t) {
		if (!P(t)) return !1;
		let n = t.anchor.getNode(), r = t.focus.getNode();
		return this.isParentOf(n) && this.isParentOf(r) && this.getTextContent().length === t.getTextContent().length;
	}
	isParentRequired() {
		return !0;
	}
	createParentElementNode() {
		return Om("bullet");
	}
	canMergeWhenEmpty() {
		return !0;
	}
};
function bm(e) {
	if (e.classList.contains("task-list-item")) {
		for (let t of e.children) if (t.tagName === "INPUT") return xm(t);
	}
	if (e.classList.contains("joplin-checkbox")) {
		for (let t of e.children) if (t.classList.contains("checkbox-wrapper") && t.children.length > 0 && t.children[0].tagName === "INPUT") return xm(t.children[0]);
	}
	let t = e.getAttribute("aria-checked"), n = Cm(t === "true" || t !== "false" && void 0);
	return al(n, e), {
		after: Sm.bind(null, n),
		node: il(n, e)
	};
}
function xm(e) {
	if (e.getAttribute("type") !== "checkbox") return { node: null };
	let t = Cm(e.hasAttribute("checked"));
	return {
		after: Sm.bind(null, t),
		node: t
	};
}
function Sm(e, t) {
	let n = t[0];
	return t.length === 1 && vs(n) && !e.getFormatType() && n.getFormatType() ? (e.setFormat(n.getFormatType()), n.getChildren()) : t;
}
function Cm(e) {
	return Nc(new ym(void 0, e));
}
function Y(e) {
	return e instanceof ym;
}
var wm = class extends as {
	__tag;
	__start;
	__listType;
	$config() {
		return this.config("list", {
			$transform: (e) => {
				(function(e) {
					let t = e.getNextSibling();
					X(t) && e.getListType() === t.getListType() && pm(e, t);
				})(e), hm(e);
			},
			extends: as,
			importDOM: fa({
				ol: () => ({
					conversion: Em,
					priority: 0
				}),
				ul: () => ({
					conversion: Em,
					priority: 0
				})
			})
		});
	}
	constructor(e = "number", t = 1, n) {
		super(n);
		let r = Dm[e] || e;
		this.__listType = r, this.__tag = r === "number" ? "ol" : "ul", this.__start = t;
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__listType = e.__listType, this.__tag = e.__tag, this.__start = e.__start;
	}
	getTag() {
		return this.getLatest().__tag;
	}
	setListType(e) {
		let t = this.getWritable();
		return t.__listType = e, t.__tag = e === "number" ? "ol" : "ul", t;
	}
	getListType() {
		return this.getLatest().__listType;
	}
	getStart() {
		return this.getLatest().__start;
	}
	setStart(e) {
		let t = this.getWritable();
		return t.__start = e, t;
	}
	createDOM(e, t) {
		let n = this.__tag, r = document.createElement(n);
		return this.__start !== 1 && r.setAttribute("start", String(this.__start)), r.__lexicalListType = this.__listType, Tm(r, e.theme, this), r;
	}
	updateDOM(e, t, n) {
		return e.__tag !== this.__tag || e.__listType !== this.__listType || (Tm(t, n.theme, this), e.__start !== this.__start && t.setAttribute("start", String(this.__start)), !1);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setListType(e.listType).setStart(e.start);
	}
	exportDOM(e) {
		let t = this.createDOM(e._config, e);
		return W(t) && (this.__start !== 1 && t.setAttribute("start", String(this.__start)), this.__listType === "check" && t.setAttribute("__lexicalListType", "check")), { element: t };
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			listType: this.getListType(),
			start: this.getStart(),
			tag: this.getTag()
		};
	}
	canBeEmpty() {
		return !1;
	}
	canIndent() {
		return !1;
	}
	splice(e, t, n) {
		let r = n;
		for (let e = 0; e < n.length; e++) {
			let t = n[e];
			Y(t) || (r === n && (r = [...n]), r[e] = this.createListItemNode().append(!L(t) || X(t) || t.isInline() ? t : qa(t.getTextContent())));
		}
		return super.splice(e, t, r);
	}
	extractWithChild(e) {
		return Y(e);
	}
	createListItemNode() {
		return Cm();
	}
};
function Tm(e, t, n) {
	let r = [], i = [], a = t.list;
	if (a !== void 0) {
		let e = a[`${n.__tag}Depth`] || [], t = am(n) - 1, o = t % e.length, s = e[o], c = a[n.__tag], l, u = a.nested, d = a.checklist;
		if (u !== void 0 && u.list && (l = u.list), c !== void 0 && r.push(c), d !== void 0 && n.__listType === "check" && r.push(d), s !== void 0) {
			r.push(...lu(s));
			for (let t = 0; t < e.length; t++) t !== o && i.push(n.__tag + t);
		}
		if (l !== void 0) {
			let e = lu(l);
			t > 1 ? r.push(...e) : i.push(...e);
		}
	}
	i.length > 0 && du(e, ...i), r.length > 0 && uu(e, ...r);
}
function Em(e) {
	let t;
	if (function(e) {
		return W(e) && e.nodeName.toLowerCase() === "ol";
	}(e)) {
		let n = e.start;
		t = Om("number", n);
	} else t = function(e) {
		if (e.getAttribute("__lexicallisttype") === "check" || e.classList.contains("contains-task-list") || e.getAttribute("data-is-checklist") === "1") return !0;
		for (let t of e.childNodes) if (W(t) && t.hasAttribute("aria-checked")) return !0;
		return !1;
	}(e) ? Om("check") : Om("bullet");
	return il(t, e), {
		after: (e) => function(e, t) {
			let n = t.createListItemNode.bind(t), r = [];
			for (let t = 0; t < e.length; t++) {
				let i = e[t];
				if (Y(i)) {
					r.push(i);
					let e = i.getChildren();
					e.length > 1 && e.forEach((e) => {
						X(e) && r.push(n().append(e));
					});
				} else r.push(n().append(i));
			}
			return r;
		}(e, t),
		node: t
	};
}
var Dm = {
	ol: "number",
	ul: "bullet"
};
function Om(e = "number", t = 1) {
	return Nc(new wm(e, t));
}
function X(e) {
	return e instanceof wm;
}
var km = M("UPDATE_LIST_START_COMMAND"), Am = M("INSERT_UNORDERED_LIST_COMMAND"), jm = M("INSERT_ORDERED_LIST_COMMAND"), Mm = M("REMOVE_LIST_COMMAND");
function Nm(e, t) {
	return fu(e.registerCommand(jm, () => (um("number"), !0), 1), e.registerCommand(km, (e) => {
		let { listNodeKey: t, newStart: n } = e, r = B(t);
		return !!X(r) && (r.getListType() === "number" && (r.setStart(n), hm(r)), !0);
	}, 1), e.registerCommand(Am, () => (um("bullet"), !0), 1), e.registerCommand(Mm, () => (mm(), !0), 1), e.registerCommand(Br, () => vm(!!(t && t.restoreNumbering)), 1), e.registerNodeTransform(ym, (e) => {
		let t = e.getFirstChild();
		if (t) {
			if (N(t)) {
				let n = t.getStyle(), r = t.getFormat();
				e.getTextStyle() !== n && e.setTextStyle(n), e.getTextFormat() !== r && e.setTextFormat(r);
			}
		} else {
			let t = F();
			P(t) && (t.style !== e.getTextStyle() || t.format !== e.getTextFormat()) && t.isCollapsed() && e.is(t.anchor.getNode()) && e.setTextStyle(t.style).setTextFormat(t.format);
		}
	}), e.registerNodeTransform(Ra, (e) => {
		let t = e.getParent();
		if (Y(t) && e.is(t.getFirstChild())) {
			let n = e.getStyle(), r = e.getFormat();
			n === t.getTextStyle() && r === t.getTextFormat() || t.setTextStyle(n).setTextFormat(r);
		}
	}));
}
function Pm(e) {
	let t = (e) => {
		let t = e.getParent();
		if (X(e.getFirstChild()) || !X(t)) return;
		let n = ul(e, (e) => Y(e) && X(e.getParent()) && Y(e.getPreviousSibling()));
		if (n === null && e.getIndent() > 0) e.setIndent(0);
		else if (Y(n)) {
			let r = n.getPreviousSibling();
			if (Y(r)) {
				let n = function(e) {
					let t = e, n = t.getFirstChild();
					for (; X(n);) {
						let e = n.getLastChild();
						if (!Y(e)) break;
						t = e, n = t.getFirstChild();
					}
					return t;
				}(r).getParent();
				if (X(n)) {
					let r = am(n);
					r + 1 < am(t) && e.setIndent(r);
				}
			}
		}
	};
	return e.registerNodeTransform(wm, (e) => {
		let n = [e];
		for (; n.length > 0;) {
			let e = n.shift();
			if (X(e)) {
				for (let r of e.getChildren()) if (Y(r)) {
					t(r);
					let e = r.getFirstChild();
					X(e) && n.push(e);
				}
			}
		}
	});
}
Kf.tag("ol", "ul"), Kf.tag("li"), Kf.tag("li").classAll("task-list-item"), Kf.tag("li").classAll("joplin-checkbox");
//#endregion
//#region node_modules/@lexical/react/dist/LexicalListPlugin.prod.mjs
function Fm({ hasStrictIndent: e = !1, shouldPreserveNumbering: t = !1 }) {
	let [n] = kt();
	return c(() => {
		if (!n.hasNodes([wm, ym])) throw Error("ListPlugin: ListNode and/or ListItemNode not registered on editor");
	}, [n]), c(() => fu(Nm(n, { restoreNumbering: t }), e ? Pm(n) : () => {}), [
		n,
		e,
		t
	]), function(e) {
		c(() => Nm(e), [e]);
	}(n), null;
}
//#endregion
//#region node_modules/@lexical/link/dist/LexicalLink.prod.mjs
var Im = new Set([
	"http:",
	"https:",
	"mailto:",
	"sms:",
	"tel:"
]), Lm = class e extends as {
	__url;
	__target;
	__rel;
	__title;
	static getType() {
		return "link";
	}
	static clone(t) {
		return new e(t.__url, {
			rel: t.__rel,
			target: t.__target,
			title: t.__title
		}, t.__key);
	}
	constructor(e = "", t = {}, n) {
		super(n);
		let { target: r = null, rel: i = null, title: a = null } = t;
		this.__url = e, this.__target = r, this.__rel = i, this.__title = a;
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__url = e.__url, this.__rel = e.__rel, this.__target = e.__target, this.__title = e.__title;
	}
	createDOM(e) {
		let t = document.createElement("a");
		return this.updateLinkDOM(null, t, e), uu(t, e.theme.link), t;
	}
	updateLinkDOM(e, t, n) {
		if (Bc(t)) {
			e && e.__url === this.__url || (t.href = this.sanitizeUrl(this.__url));
			for (let n of [
				"target",
				"rel",
				"title"
			]) {
				let r = `__${n}`, i = this[r];
				e && e[r] === i || (i ? t[n] = i : t.removeAttribute(n));
			}
		}
	}
	updateDOM(e, t, n) {
		return this.updateLinkDOM(e, t, n), !1;
	}
	static importDOM() {
		return { a: (e) => ({
			conversion: Vm,
			priority: 1
		}) };
	}
	static importJSON(e) {
		return Hm().updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setURL(e.url).setRel(e.rel || null).setTarget(e.target || null).setTitle(e.title || null);
	}
	sanitizeUrl(e) {
		e = Zm(e);
		try {
			let t = new URL(Zm(e));
			if (!Im.has(t.protocol)) return "about:blank";
		} catch {
			return e;
		}
		return e;
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			rel: this.getRel(),
			target: this.getTarget(),
			title: this.getTitle(),
			url: this.getURL()
		};
	}
	getURL() {
		return this.getLatest().__url;
	}
	setURL(e) {
		let t = this.getWritable();
		return t.__url = e, t;
	}
	getTarget() {
		return this.getLatest().__target;
	}
	setTarget(e) {
		let t = this.getWritable();
		return t.__target = e, t;
	}
	getRel() {
		return this.getLatest().__rel;
	}
	setRel(e) {
		let t = this.getWritable();
		return t.__rel = e, t;
	}
	getTitle() {
		return this.getLatest().__title;
	}
	setTitle(e) {
		let t = this.getWritable();
		return t.__title = e, t;
	}
	insertNewAfter(e, t = !0) {
		let n = Mc(this);
		return this.insertAfter(n, t), n;
	}
	canInsertTextBefore() {
		return !1;
	}
	canInsertTextAfter() {
		return !1;
	}
	canBeEmpty() {
		return !1;
	}
	isInline() {
		return !0;
	}
	extractWithChild(e, t, n) {
		if (!P(t)) return !1;
		let r = t.anchor.getNode(), i = t.focus.getNode();
		return this.isParentOf(r) && this.isParentOf(i) && t.getTextContent().length > 0;
	}
	isEmailURI() {
		return this.__url.startsWith("mailto:");
	}
	isWebSiteURI() {
		return this.__url.startsWith("https://") || this.__url.startsWith("http://");
	}
	shouldMergeAdjacentLink(e) {
		return this.getType() === e.getType() && this.__url === e.__url && this.__target === e.__target && this.__rel === e.__rel && this.__title === e.__title;
	}
};
function Rm(e) {
	let t = Ul(e, "next");
	return [t, t.getFlipped()];
}
function zm(e, t) {
	for (let n of t) if (n.origin.isAttached()) {
		Wl(e, Ql(n));
		return;
	}
}
function Bm(e) {
	let t = F(), n = null, r = null;
	function i() {
		P(t) && (zm(t.anchor, n), zm(t.focus, r), Un(t));
	}
	P(t) && (n = Rm(t.anchor), r = Rm(t.focus));
	let a = !1;
	for (let t of kl(e, "next")) {
		let n = t.origin;
		if (L(n) && !n.isInline()) {
			let r = n.getChildren();
			if (r.length > 0) {
				let t = Mc(e);
				t.append(...r), n.append(t), a = !0;
			}
			Ru(n, Jl(t), { $shouldSplit: () => !1 });
		}
	}
	function o(e, t, n) {
		let [r, i] = e, a = (e) => xl(e) && e.origin.is(t);
		if (!a(r) && !a(i)) return e;
		let o = Ql(kl(n, "next"));
		return [o, o.getFlipped()];
	}
	if (e.isAttached()) {
		let t = e.getPreviousSibling();
		if (Um(t) && t.shouldMergeAdjacentLink(e)) return n &&= o(n, t, e), r &&= o(r, t, e), t.append(...e.getChildren()), e.remove(), void i();
		let s = e.getNextSibling();
		Um(s) && e.shouldMergeAdjacentLink(s) && (n &&= o(n, e, s), r &&= o(r, e, s), e.append(...s.getChildren()), s.remove(), a = !0);
	}
	if (a) {
		if (!e.canBeEmpty() && e.isEmpty()) {
			let t = e.getParent();
			e.remove(), t && t.isEmpty() && t.remove();
		}
		i();
	}
}
function Vm(e) {
	let t = null;
	if (Bc(e)) {
		let n = e.textContent;
		(n !== null && n !== "" || e.children.length > 0) && (t = Hm(e.getAttribute("href") || "", {
			rel: e.getAttribute("rel"),
			target: e.getAttribute("target"),
			title: e.getAttribute("title")
		}));
	}
	return { node: t };
}
function Hm(e = "", t) {
	return Nc(new Lm(e, t));
}
function Um(e) {
	return e instanceof Lm;
}
var Wm = class e extends Lm {
	__isUnlinked;
	constructor(e = "", t = {}, n) {
		super(e, t, n), this.__isUnlinked = t.isUnlinked !== void 0 && t.isUnlinked !== null && t.isUnlinked;
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__isUnlinked = e.__isUnlinked;
	}
	static getType() {
		return "autolink";
	}
	static clone(t) {
		return new e(t.__url, {
			isUnlinked: t.__isUnlinked,
			rel: t.__rel,
			target: t.__target,
			title: t.__title
		}, t.__key);
	}
	shouldMergeAdjacentLink(e) {
		return !1;
	}
	getIsUnlinked() {
		return this.__isUnlinked;
	}
	setIsUnlinked(e) {
		let t = this.getWritable();
		return t.__isUnlinked = e, t;
	}
	createDOM(e) {
		return this.__isUnlinked ? document.createElement("span") : super.createDOM(e);
	}
	updateDOM(e, t, n) {
		return super.updateDOM(e, t, n) || e.__isUnlinked !== this.__isUnlinked;
	}
	static importJSON(e) {
		return Gm().updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setIsUnlinked(e.isUnlinked || !1);
	}
	static importDOM() {
		return null;
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			isUnlinked: this.__isUnlinked
		};
	}
	insertNewAfter(e, t = !0) {
		let n = Gm(this.__url, {
			isUnlinked: this.__isUnlinked,
			rel: this.__rel,
			target: this.__target,
			title: this.__title
		});
		return this.insertAfter(n, t), n;
	}
};
function Gm(e = "", t) {
	return Nc(new Wm(e, t));
}
function Km(e) {
	return e instanceof Wm;
}
var qm = M("TOGGLE_LINK_COMMAND");
function Jm(e, t) {
	if (e.type === "element") {
		let n = e.getNode();
		return L(n) || function(e, ...t) {
			let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
			r.append("code", e);
			for (let e of t) r.append("v", e);
			throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
		}(252), n.getChildren()[e.offset + t] || null;
	}
	return null;
}
function Ym(e, t = {}) {
	let n;
	if (e && typeof e == "object") {
		let { url: r, ...i } = e;
		n = r, t = {
			...i,
			...t
		};
	} else n = e;
	let { target: r, title: i } = t, a = t.rel === void 0 ? "noreferrer" : t.rel, o = F();
	if (o === null || !P(o) && !io(o)) return;
	if (io(o)) {
		let e = o.getNodes();
		if (e.length === 0) return;
		e.forEach((e) => {
			if (n === null) {
				let t = ul(e, (e) => !Km(e) && Um(e));
				t && (t.insertBefore(e), t.getChildren().length === 0 && t.remove());
			} else {
				let t = ul(e, (e) => !Km(e) && Um(e));
				if (t) t.setURL(n), r !== void 0 && t.setTarget(r), a !== void 0 && t.setRel(a);
				else {
					let t = Hm(n, {
						rel: a,
						target: r
					});
					e.insertBefore(t), t.append(e);
				}
			}
		});
		return;
	}
	if (o.isCollapsed() && n === null) for (let e of o.getNodes()) {
		let t = ul(e, (e) => !Km(e) && Um(e));
		t !== null && (t.getParentOrThrow().splice(t.getIndexWithinParent(), 0, t.getChildren()), t.remove());
		return;
	}
	let s = o.extract();
	if (n === null) {
		let e = /* @__PURE__ */ new Set();
		s.forEach((t) => {
			let n = ul(t, (e) => !Km(e) && Um(e));
			if (n !== null) {
				let t = n.getKey();
				if (e.has(t)) return;
				(function(e, t) {
					let n = new Set(t.filter((t) => e.isParentOf(t)).map((e) => e.getKey())), r = e.getChildren(), i = (r) => n.has(r.getKey()) || L(r) && t.some((t) => e.isParentOf(t) && r.isParentOf(t)), a = r.filter(i);
					if (a.length === r.length) return r.forEach((t) => e.insertBefore(t)), void e.remove();
					let o = r.findIndex(i), s = r.findLastIndex(i), c = o === 0, l = s === r.length - 1;
					if (c) a.forEach((t) => e.insertBefore(t));
					else if (l) for (let t = a.length - 1; t >= 0; t--) e.insertAfter(a[t]);
					else {
						for (let t = a.length - 1; t >= 0; t--) e.insertAfter(a[t]);
						let t = r.slice(s + 1);
						if (t.length > 0) {
							let n = Mc(e);
							a[a.length - 1].insertAfter(n), t.forEach((e) => n.append(e));
						}
					}
				})(n, s), e.add(t);
			}
		});
		return;
	}
	let c = /* @__PURE__ */ new Set(), l = (e) => {
		c.has(e.getKey()) || (c.add(e.getKey()), e.setURL(n), r !== void 0 && e.setTarget(r), a !== void 0 && e.setRel(a), i !== void 0 && e.setTitle(i));
	};
	if (s.length === 1) {
		let e = s[0], t = ul(e, Um);
		if (t !== null) return l(t);
	}
	(function(e) {
		let t = F();
		if (!P(t)) return e();
		let n = Un(t), r = n.isBackward(), i = Jm(n.anchor, r ? -1 : 0), a = Jm(n.focus, r ? 0 : -1);
		if (e(), i || a) {
			let e = F();
			if (P(e)) {
				let t = e.clone();
				if (i) {
					let e = i.getParent();
					e && t.anchor.set(e.getKey(), i.getIndexWithinParent() + +!!r, "element");
				}
				if (a) {
					let e = a.getParent();
					e && t.focus.set(e.getKey(), a.getIndexWithinParent() + +!r, "element");
				}
				nc(Un(t));
			}
		}
	})(() => {
		let e = null;
		for (let t of s) {
			if (!t.isAttached()) continue;
			let o = ul(t, Um);
			if (o) {
				l(o);
				continue;
			}
			if (L(t)) {
				if (!t.isInline()) continue;
				if (Um(t)) {
					if (!(Km(t) || e !== null && e.getParentOrThrow().isParentOf(t))) {
						l(t), e = t;
						continue;
					}
					for (let e of t.getChildren()) t.insertBefore(e);
					t.remove();
					continue;
				}
			}
			let s = t.getPreviousSibling();
			Um(s) && s.is(e) ? s.append(t) : (e = Hm(n, {
				rel: a,
				target: r,
				title: i
			}), t.insertAfter(e), e.append(t));
		}
	});
}
var Xm = /^\+?[0-9\s()-]{5,}$/;
function Zm(e) {
	return e.match(/^[a-z][a-z0-9+.-]*:/i) || e.match(/^[/#.]/) ? e : e.includes("@") ? `mailto:${e}` : Xm.test(e) ? `tel:${e}` : `https://${e}`;
}
function Qm(e, t) {
	return fu(e.registerNodeTransform(Lm, Bm), e.registerCommand(qm, (e) => {
		let n = t.validateUrl.peek(), r = t.attributes.peek();
		if (e === null) return Ym(null), !0;
		if (typeof e == "string") return !(n !== void 0 && !n(e)) && (Ym(e, r), !0);
		{
			let { url: t, target: n, rel: i, title: a } = e;
			return Ym(t, {
				...r,
				rel: i,
				target: n,
				title: a
			}), !0;
		}
	}, 0), sd(() => {
		let n = t.validateUrl.value;
		if (!n) return;
		let r = t.attributes.value;
		return e.registerCommand(Hr, (t) => {
			let i = F();
			if (!P(i) || i.isCollapsed() || !zu(t, ClipboardEvent) || t.clipboardData === null) return !1;
			let a = t.clipboardData.getData("text");
			return !!n(a) && !i.getNodes().some((e) => L(e)) && (e.dispatchCommand(qm, {
				...r,
				url: a
			}), t.preventDefault(), !0);
		}, 1);
	}));
}
Kf.tag("a");
//#endregion
//#region node_modules/@lexical/react/dist/LexicalLinkPlugin.prod.mjs
function $m({ validateUrl: e, attributes: t }) {
	let [n] = kt();
	return c(() => {
		if (!n.hasNodes([Lm])) throw Error("LinkPlugin: LinkNode not registered on editor");
	}), c(() => Qm(n, cd({
		attributes: t,
		validateUrl: e
	})), [
		n,
		e,
		t
	]), null;
}
//#endregion
//#region node_modules/@lexical/history/dist/LexicalHistory.prod.mjs
function eh(e, t, n, r, i) {
	if (e === null || n.size === 0 && r.size === 0 && !i) return 0;
	let a = t._selection, o = e._selection;
	if (i) return 1;
	if (!(P(a) && P(o) && o.isCollapsed() && a.isCollapsed())) return 0;
	let s = function(e, t, n) {
		let r = e._nodeMap, i = [];
		for (let e of t) {
			let t = r.get(e);
			t !== void 0 && i.push(t);
		}
		for (let [e, t] of n) {
			if (!t) continue;
			let n = r.get(e);
			n === void 0 || ls(n) || i.push(n);
		}
		return i;
	}(t, n, r);
	if (s.length === 0) return 0;
	if (s.length > 1) {
		let n = t._nodeMap, r = n.get(a.anchor.key), i = n.get(o.anchor.key);
		return r && i && !e._nodeMap.has(r.__key) && N(r) && r.__text.length === 1 && a.anchor.offset === 1 ? 2 : 0;
	}
	let c = s[0], l = e._nodeMap.get(c.__key);
	if (!N(l) || !N(c) || l.__mode !== c.__mode) return 0;
	let u = l.__text, d = c.__text;
	if (u === d) return 0;
	let f = a.anchor, p = o.anchor;
	if (f.key !== p.key || f.type !== "text") return 0;
	let m = f.offset, h = p.offset, g = d.length - u.length;
	return g === 1 && h === m - 1 ? 2 : g === -1 && h === m + 1 ? 3 : g === -1 && h === m ? 4 : 0;
}
function th(e, t, n) {
	let r = n(), i = 0, a = r, o = 0, s = null;
	return (c, l, u, d, f, p) => {
		let m = n();
		if (p.has("composition-start") && (a = r, o = i, s = c), p.has("historic")) return i = 0, r = m, 2;
		p.has("composition-end") && s && (r = a, i = o, c = s);
		let h = eh(c, l, d, f, e.isComposing()), g = (() => {
			let n = u === null || u.editor === e, a = p.has(_a);
			if (!a && n && p.has("history-merge")) return 0;
			if (h === 1) return 2;
			if (c === null) return 1;
			let o = l._selection;
			if (!(d.size > 0 || f.size > 0)) return o === null ? 2 : 0;
			let s = typeof t == "number" ? t : t.peek();
			return !1 === a && h !== 0 && h === i && m < r + s && n || d.size === 1 && function(e, t, n) {
				let r = t._nodeMap.get(e), i = n._nodeMap.get(e), a = t._selection, o = n._selection;
				return !(P(a) && P(o) && a.anchor.type === "element" && a.focus.type === "element" && o.anchor.type === "text" && o.focus.type === "text" || !N(r) || !N(i) || r.__parent !== i.__parent) && JSON.stringify(t.read(() => r.exportJSON())) === JSON.stringify(n.read(() => i.exportJSON()));
			}(Array.from(d)[0], c, l) ? 0 : 1;
		})();
		return r = m, i = h, g;
	};
}
function nh(e, t) {
	e.undoStack = [], e.redoStack = [], e.current = null, t && t(e);
}
function rh(e, t, n, r = Date.now, i, a = null) {
	let o = th(e, n, r), s = () => {
		i && i(t);
	};
	return s(), fu(e.registerCommand(qr, () => (function(e, t, n) {
		let r = t.redoStack, i = t.undoStack;
		if (i.length !== 0) {
			let a = t.current, o = i.pop();
			a !== null && (r.push(a), e.dispatchCommand(xi, !0)), i.length === 0 && e.dispatchCommand(Si, !1), t.current = o || null, n && n(t), o && o.editor.setEditorState(o.editorState, { tag: "historic" });
		}
	}(e, t, i), !0), 0), e.registerCommand(Jr, () => (function(e, t, n) {
		let r = t.redoStack, i = t.undoStack;
		if (r.length !== 0) {
			let a = t.current;
			a !== null && (i.push(a), e.dispatchCommand(Si, !0));
			let o = r.pop();
			r.length === 0 && e.dispatchCommand(xi, !1), t.current = o || null, n && n(t), o && o.editor.setEditorState(o.editorState, { tag: "historic" });
		}
	}(e, t, i), !0), 0), e.registerCommand(yi, () => (nh(t, i), !1), 0), e.registerCommand(bi, () => (nh(t, i), e.dispatchCommand(xi, !1), e.dispatchCommand(Si, !1), !0), 0), e.registerUpdateListener(({ editorState: n, prevEditorState: r, dirtyLeaves: i, dirtyElements: c, tags: l }) => {
		let u = t.current, d = t.redoStack, f = t.undoStack, p = u === null ? null : u.editorState;
		if (u !== null && n === p) return;
		let m = o(r, n, u, i, c, l);
		if (m === 1) {
			if (d.length !== 0 && (t.redoStack = [], e.dispatchCommand(xi, !1)), u !== null) {
				f.push({ ...u });
				let t = typeof a == "number" || a === null ? a : a.peek();
				t !== null && f.length > t && f.splice(0, f.length - t), e.dispatchCommand(Si, !0);
			}
		} else if (m === 2) return;
		t.current = {
			editor: e,
			editorState: n
		}, s();
	}));
}
function ih() {
	return {
		current: null,
		redoStack: [],
		undoStack: []
	};
}
Date.now;
//#endregion
//#region node_modules/@lexical/react/dist/LexicalHistoryPlugin.prod.mjs
function ah({ delay: e, externalHistoryState: t }) {
	let [n] = kt();
	return function(e, t, n = 1e3) {
		let r = d(() => t || ih(), [t]);
		c(() => rh(e, r, n), [
			n,
			e,
			r
		]);
	}(n, t, e), null;
}
//#endregion
//#region node_modules/react-error-boundary/dist/react-error-boundary.js
var oh = r(null), sh = {
	didCatch: !1,
	error: null
}, ch = class extends t {
	constructor(e) {
		super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = sh;
	}
	static getDerivedStateFromError(e) {
		return {
			didCatch: !0,
			error: e
		};
	}
	resetErrorBoundary(...e) {
		let { error: t } = this.state;
		t !== null && (this.props.onReset?.({
			args: e,
			reason: "imperative-api"
		}), this.setState(sh));
	}
	componentDidCatch(e, t) {
		this.props.onError?.(e, t);
	}
	componentDidUpdate(e, t) {
		let { didCatch: n } = this.state, { resetKeys: r } = this.props;
		n && t.error !== null && lh(e.resetKeys, r) && (this.props.onReset?.({
			next: r,
			prev: e.resetKeys,
			reason: "keys"
		}), this.setState(sh));
	}
	render() {
		let { children: e, fallbackRender: t, FallbackComponent: n, fallback: r } = this.props, { didCatch: a, error: o } = this.state, s = e;
		if (a) {
			let e = {
				error: o,
				resetErrorBoundary: this.resetErrorBoundary
			};
			if (typeof t == "function") s = t(e);
			else if (n) s = i(n, e);
			else if (r !== void 0) s = r;
			else throw o;
		}
		return i(oh.Provider, { value: {
			didCatch: a,
			error: o,
			resetErrorBoundary: this.resetErrorBoundary
		} }, s);
	}
};
function lh(e = [], t = []) {
	return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]));
}
//#endregion
//#region node_modules/@lexical/react/dist/LexicalErrorBoundary.prod.mjs
function uh({ children: e, onError: t }) {
	let n = o((e, n) => {
		t(e instanceof Error ? e : Error(String(e), { cause: e }), n);
	}, [t]);
	return (0, b.jsx)(ch, {
		fallback: (0, b.jsx)("div", {
			style: {
				border: "1px solid #f00",
				color: "#f00",
				padding: "8px"
			},
			children: "An error was thrown."
		}),
		onError: n,
		children: e
	});
}
//#endregion
//#region src/components/inspector/LexicalEditor.tsx
var dh = [
	"Arial",
	"Georgia",
	"Verdana",
	"Tahoma",
	"Times New Roman",
	"Courier New",
	"Trebuchet MS"
], fh = [
	"Inter",
	"Roboto",
	"Outfit",
	"Poppins",
	"Lato",
	"Montserrat",
	"Open Sans",
	"Nunito",
	"Raleway",
	"Playfair Display",
	"Merriweather",
	"Lora",
	"Oswald",
	"Roboto Condensed",
	"Source Sans Pro",
	"PT Sans",
	"Noto Sans",
	"Rubik",
	"Kanit",
	"Work Sans",
	"Quicksand"
], ph = [...dh, ...fh], mh = [
	8,
	9,
	10,
	11,
	12,
	14,
	16,
	18,
	20,
	22,
	24,
	28,
	32,
	36,
	40,
	48,
	56,
	64,
	72,
	96
], hh = {
	namespace: "LexicalEditor",
	nodes: [
		wm,
		ym,
		Lm,
		Wm,
		Pp,
		Mp
	],
	onError: (e) => {
		console.error(e);
	}
};
function gh(e) {
	let [t, n] = p({
		isBold: !1,
		isItalic: !1,
		isUnderline: !1,
		isStrikethrough: !1
	});
	return c(() => e.registerUpdateListener(() => {
		e.getEditorState().read(() => {
			let e = F();
			P(e) && n({
				isBold: e.hasFormat("bold"),
				isItalic: e.hasFormat("italic"),
				isUnderline: e.hasFormat("underline"),
				isStrikethrough: e.hasFormat("strikethrough")
			});
		});
	}), [e]), t;
}
function _h({ active: e, onClick: t, disabled: n, title: r, children: i }) {
	return /* @__PURE__ */ (0, b.jsx)("button", {
		type: "button",
		onClick: t,
		disabled: n,
		title: r,
		className: `p-1 rounded-md text-xs min-w-[26px] h-[26px] flex items-center justify-center cursor-pointer transition-all disabled:opacity-40 ${e ? "bg-bg-panel text-primary shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"}`,
		children: i
	});
}
function vh({ label: e, onClick: t, active: n, style: r }) {
	return /* @__PURE__ */ (0, b.jsxs)("button", {
		type: "button",
		onClick: t,
		className: `w-full text-left px-2.5 py-1.5 text-xs flex items-center gap-2 hover:bg-bg-hover transition-colors cursor-pointer ${n ? "bg-bg-hover text-text-primary" : "text-text-secondary"}`,
		style: r,
		children: [n && /* @__PURE__ */ (0, b.jsx)(_e, {
			size: 12,
			className: "shrink-0"
		}), /* @__PURE__ */ (0, b.jsx)("span", {
			className: n ? "" : "ml-5",
			style: r,
			children: e
		})]
	});
}
function yh({ editor: e, disabled: t }) {
	let [n, r] = p(!1), i = f(null);
	c(() => {
		let e = (e) => {
			i.current && !i.current.contains(e.target) && r(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, []);
	let a = o((t) => {
		e.update(() => {
			let e = F();
			P(e) && Eu(e, { "font-family": t });
		}), r(!1);
	}, [e]);
	return /* @__PURE__ */ (0, b.jsxs)("div", {
		ref: i,
		className: "relative",
		children: [/* @__PURE__ */ (0, b.jsxs)("button", {
			type: "button",
			onClick: () => !t && r(!n),
			disabled: t,
			className: "flex items-center gap-1 px-1.5 py-1 rounded-md text-xs text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-all disabled:opacity-40 cursor-pointer min-w-[80px]",
			children: [/* @__PURE__ */ (0, b.jsx)("span", {
				className: "truncate max-w-[60px]",
				children: "Font"
			}), /* @__PURE__ */ (0, b.jsx)(ve, { size: 12 })]
		}), n && /* @__PURE__ */ (0, b.jsx)("div", {
			className: "absolute top-full left-0 mt-1 bg-bg-panel border border-border-color rounded-md shadow-lg z-50 max-h-[220px] overflow-y-auto min-w-[160px]",
			children: ph.map((e) => /* @__PURE__ */ (0, b.jsx)(vh, {
				label: e,
				onClick: () => a(e),
				style: { fontFamily: e }
			}, e))
		})]
	});
}
function bh({ editor: e, disabled: t }) {
	let [n, r] = p(!1), i = f(null);
	c(() => {
		let e = (e) => {
			i.current && !i.current.contains(e.target) && r(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, []);
	let a = o((t) => {
		e.update(() => {
			let e = F();
			P(e) && Eu(e, { "font-size": `${t}px` });
		}), r(!1);
	}, [e]);
	return /* @__PURE__ */ (0, b.jsxs)("div", {
		ref: i,
		className: "relative",
		children: [/* @__PURE__ */ (0, b.jsxs)("button", {
			type: "button",
			onClick: () => !t && r(!n),
			disabled: t,
			className: "flex items-center gap-1 px-1.5 py-1 rounded-md text-xs text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-all disabled:opacity-40 cursor-pointer min-w-[48px]",
			children: [/* @__PURE__ */ (0, b.jsx)("span", { children: "16" }), /* @__PURE__ */ (0, b.jsx)(ve, { size: 12 })]
		}), n && /* @__PURE__ */ (0, b.jsx)("div", {
			className: "absolute top-full left-0 mt-1 bg-bg-panel border border-border-color rounded-md shadow-lg z-50 max-h-[220px] overflow-y-auto min-w-[80px]",
			children: mh.map((e) => /* @__PURE__ */ (0, b.jsx)(vh, {
				label: `${e}`,
				onClick: () => a(e)
			}, e))
		})]
	});
}
function xh({ disabled: e }) {
	let [t] = kt(), n = gh(t), r = o((e) => {
		t.dispatchCommand(e === "bullet" ? Am : jm, void 0);
	}, [t]), i = o(() => {
		let e = window.prompt("URL del enlace");
		e !== null && (e === "" ? t.dispatchCommand(qm, null) : t.dispatchCommand(qm, e));
	}, [t]), a = o(() => {
		t.update(() => {
			let e = F();
			P(e) && e.removeText();
		});
	}, [t]);
	return /* @__PURE__ */ (0, b.jsxs)("div", {
		className: "flex flex-wrap items-center gap-0.5 p-1 border-b border-border-color bg-bg-hover",
		children: [
			/* @__PURE__ */ (0, b.jsx)(_h, {
				active: n.isBold,
				onClick: () => t.dispatchCommand(Kr, "bold"),
				disabled: e,
				title: "Negrita",
				children: /* @__PURE__ */ (0, b.jsx)(me, { size: 14 })
			}),
			/* @__PURE__ */ (0, b.jsx)(_h, {
				active: n.isItalic,
				onClick: () => t.dispatchCommand(Kr, "italic"),
				disabled: e,
				title: "Cursiva",
				children: /* @__PURE__ */ (0, b.jsx)(Pe, { size: 14 })
			}),
			/* @__PURE__ */ (0, b.jsx)(_h, {
				active: n.isUnderline,
				onClick: () => t.dispatchCommand(Kr, "underline"),
				disabled: e,
				title: "Subrayado",
				children: /* @__PURE__ */ (0, b.jsx)(yt, { size: 14 })
			}),
			/* @__PURE__ */ (0, b.jsx)(_h, {
				active: n.isStrikethrough,
				onClick: () => t.dispatchCommand(Kr, "strikethrough"),
				disabled: e,
				title: "Tachado",
				children: /* @__PURE__ */ (0, b.jsx)(ct, { size: 14 })
			}),
			/* @__PURE__ */ (0, b.jsx)("span", { className: "w-px h-4 bg-border-color mx-1" }),
			/* @__PURE__ */ (0, b.jsx)(_h, {
				onClick: () => r("bullet"),
				disabled: e,
				title: "Lista desordenada",
				children: /* @__PURE__ */ (0, b.jsx)(He, { size: 14 })
			}),
			/* @__PURE__ */ (0, b.jsx)(_h, {
				onClick: () => r("ordered"),
				disabled: e,
				title: "Lista ordenada",
				children: /* @__PURE__ */ (0, b.jsx)(Ve, { size: 14 })
			}),
			/* @__PURE__ */ (0, b.jsx)("span", { className: "w-px h-4 bg-border-color mx-1" }),
			/* @__PURE__ */ (0, b.jsx)(_h, {
				onClick: () => t.update(() => {
					let e = F();
					P(e) && Eu(e, { "text-align": "left" });
				}),
				disabled: e,
				title: "Alinear izquierda",
				children: /* @__PURE__ */ (0, b.jsx)(gt, { size: 14 })
			}),
			/* @__PURE__ */ (0, b.jsx)(_h, {
				onClick: () => t.update(() => {
					let e = F();
					P(e) && Eu(e, { "text-align": "center" });
				}),
				disabled: e,
				title: "Centrar",
				children: /* @__PURE__ */ (0, b.jsx)(mt, { size: 14 })
			}),
			/* @__PURE__ */ (0, b.jsx)(_h, {
				onClick: () => t.update(() => {
					let e = F();
					P(e) && Eu(e, { "text-align": "right" });
				}),
				disabled: e,
				title: "Alinear derecha",
				children: /* @__PURE__ */ (0, b.jsx)(pt, { size: 14 })
			}),
			/* @__PURE__ */ (0, b.jsx)("span", { className: "w-px h-4 bg-border-color mx-1" }),
			/* @__PURE__ */ (0, b.jsx)(yh, {
				editor: t,
				disabled: e
			}),
			/* @__PURE__ */ (0, b.jsx)(bh, {
				editor: t,
				disabled: e
			}),
			/* @__PURE__ */ (0, b.jsx)("span", { className: "w-px h-4 bg-border-color mx-1" }),
			/* @__PURE__ */ (0, b.jsx)(_h, {
				onClick: i,
				disabled: e,
				title: "Enlace",
				children: /* @__PURE__ */ (0, b.jsx)(ze, { size: 14 })
			}),
			/* @__PURE__ */ (0, b.jsx)(_h, {
				onClick: a,
				disabled: e,
				title: "Limpiar formato",
				children: /* @__PURE__ */ (0, b.jsx)(Qe, { size: 14 })
			})
		]
	});
}
function Sh({ html: e, onChange: t }) {
	let [n] = kt(), r = f("");
	return c(() => {
		n.update(() => {
			if (Xf(n) === e) return;
			let t = V();
			if (t.clear(), e) {
				let r = Jf(n, new DOMParser().parseFromString(`<body>${e}</body>`, "text/html"));
				for (let e of r) t.append(e);
			}
		});
	}, [e, n]), c(() => n.registerUpdateListener(({ editorState: e }) => {
		e.read(() => {
			let e = Xf(n);
			e !== r.current && (r.current = e, t(e));
		}, { editor: n });
	}), [n, t]), null;
}
var Ch = ({ value: e, onChange: t, disabled: n = !1 }) => /* @__PURE__ */ (0, b.jsx)("div", {
	className: "flex flex-col border border-border-color rounded-lg overflow-hidden bg-bg-panel text-text-primary",
	children: /* @__PURE__ */ (0, b.jsxs)(hu, {
		initialConfig: hh,
		children: [
			/* @__PURE__ */ (0, b.jsx)(Sh, {
				html: e,
				onChange: t
			}),
			/* @__PURE__ */ (0, b.jsx)(wh, { disabled: n }),
			/* @__PURE__ */ (0, b.jsx)(xh, { disabled: n }),
			/* @__PURE__ */ (0, b.jsx)("div", {
				className: "p-3 min-h-[120px] max-h-[260px] overflow-y-auto outline-none text-sm leading-relaxed lexical-content",
				children: /* @__PURE__ */ (0, b.jsx)(Yp, {
					contentEditable: /* @__PURE__ */ (0, b.jsx)(tm, {
						className: "outline-none min-h-[80px]",
						dir: "ltr"
					}),
					placeholder: /* @__PURE__ */ (0, b.jsx)("div", {
						className: "text-text-muted text-sm pointer-events-none",
						children: "Escribe aquí tu texto..."
					}),
					ErrorBoundary: uh
				})
			}),
			/* @__PURE__ */ (0, b.jsx)(Fm, {}),
			/* @__PURE__ */ (0, b.jsx)($m, {}),
			/* @__PURE__ */ (0, b.jsx)(ah, {})
		]
	})
});
function wh({ disabled: e }) {
	let [t] = kt();
	return c(() => {
		t.setEditable(!e);
	}, [t, e]), null;
}
//#endregion
//#region src/components/inspector/ColorPicker.tsx
var Z = ({ value: e = "#ffffff", onChange: t, allowAlpha: n = !0, presets: r = [
	"#ffffff",
	"#000000",
	"#ff0000",
	"#00ff00",
	"#0000ff",
	"#ffff00",
	"#ff00ff",
	"#00ffff",
	"#4f46e5",
	"#f59e0b"
], disabled: i = !1 }) => {
	let [a, o] = p(!1), s = f(null), l = f(null), u = f(null), d = f(null), [m, h] = p({
		h: 0,
		s: 0,
		v: 1,
		a: 1
	});
	c(() => {
		h(g(e));
	}, [e]), c(() => {
		let e = (e) => {
			s.current && !s.current.contains(e.target) && o(!1);
		};
		return a && document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [a]), c(() => {
		if (!a || !l.current) return;
		let e = l.current, t = e.getContext("2d");
		if (!t) return;
		let n = e.width, r = e.height;
		t.fillStyle = `hsl(${m.h}, 100%, 50%)`, t.fillRect(0, 0, n, r);
		let i = t.createLinearGradient(0, 0, n, 0);
		i.addColorStop(0, "rgba(255,255,255,1)"), i.addColorStop(1, "rgba(255,255,255,0)"), t.fillStyle = i, t.fillRect(0, 0, n, r);
		let o = t.createLinearGradient(0, r, 0, 0);
		o.addColorStop(0, "rgba(0,0,0,1)"), o.addColorStop(1, "rgba(0,0,0,0)"), t.fillStyle = o, t.fillRect(0, 0, n, r);
	}, [a, m.h]);
	let g = (e) => {
		let t = 255, n = 255, r = 255, i = 1;
		if (e.startsWith("#")) {
			let a = e.substring(1);
			a.length === 3 ? (t = parseInt(a[0] + a[0], 16), n = parseInt(a[1] + a[1], 16), r = parseInt(a[2] + a[2], 16)) : a.length === 6 ? (t = parseInt(a.substring(0, 2), 16), n = parseInt(a.substring(2, 4), 16), r = parseInt(a.substring(4, 6), 16)) : a.length === 8 && (t = parseInt(a.substring(0, 2), 16), n = parseInt(a.substring(2, 4), 16), r = parseInt(a.substring(4, 6), 16), i = parseInt(a.substring(6, 8), 16) / 255);
		} else if (e.startsWith("rgba") || e.startsWith("rgb")) {
			let a = e.match(/\d+(\.\d+)?/g);
			a && (t = parseInt(a[0]), n = parseInt(a[1]), r = parseInt(a[2]), a[3] && (i = parseFloat(a[3])));
		}
		return _(t, n, r, i);
	}, _ = (e, t, n, r) => {
		e /= 255, t /= 255, n /= 255;
		let i = Math.max(e, t, n), a = Math.min(e, t, n), o = 0, s = 0, c = i, l = i - a;
		if (s = i === 0 ? 0 : l / i, i !== a) {
			switch (i) {
				case e:
					o = (t - n) / l + (t < n ? 6 : 0);
					break;
				case t:
					o = (n - e) / l + 2;
					break;
				case n:
					o = (e - t) / l + 4;
					break;
			}
			o /= 6;
		}
		return {
			h: Math.round(o * 360),
			s,
			v: c,
			a: r
		};
	}, v = (e, t, n, r) => {
		let i = 0, a = 0, o = 0, s = Math.floor(e / 360 * 6), c = e / 360 * 6 - s, l = n * (1 - t), u = n * (1 - c * t), d = n * (1 - (1 - c) * t);
		switch (s % 6) {
			case 0:
				i = n, a = d, o = l;
				break;
			case 1:
				i = u, a = n, o = l;
				break;
			case 2:
				i = l, a = n, o = d;
				break;
			case 3:
				i = l, a = u, o = n;
				break;
			case 4:
				i = d, a = l, o = n;
				break;
			case 5:
				i = n, a = l, o = u;
				break;
		}
		return {
			r: Math.round(i * 255),
			g: Math.round(a * 255),
			b: Math.round(o * 255),
			a: r
		};
	}, y = (e, t, n, r) => {
		let i = (e) => e.toString(16).padStart(2, "0");
		return r < 1 ? `#${i(e)}${i(t)}${i(n)}${i(Math.round(r * 255))}` : `#${i(e)}${i(t)}${i(n)}`;
	}, x = (e, n, r, i) => {
		let a = v(e, n, r, i);
		t(i < 1 ? `rgba(${a.r}, ${a.g}, ${a.b}, ${a.a.toFixed(2)})` : y(a.r, a.g, a.b, a.a));
	}, S = (e) => {
		if (i || !l.current) return;
		let t = (e) => {
			let t = l.current.getBoundingClientRect(), n = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)), r = Math.max(0, Math.min(1, (e.clientY - t.top) / t.height)), i = n, a = 1 - r;
			h((e) => {
				let t = {
					...e,
					s: i,
					v: a
				};
				return x(t.h, t.s, t.v, t.a), t;
			});
		};
		t(e.nativeEvent);
		let n = (e) => t(e), r = () => {
			window.removeEventListener("mousemove", n), window.removeEventListener("mouseup", r);
		};
		window.addEventListener("mousemove", n), window.addEventListener("mouseup", r);
	}, ee = (e) => {
		if (i || !u.current) return;
		let t = (e) => {
			let t = u.current.getBoundingClientRect(), n = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)), r = Math.round(n * 360);
			h((e) => {
				let t = {
					...e,
					h: r
				};
				return x(t.h, t.s, t.v, t.a), t;
			});
		};
		t(e.nativeEvent);
		let n = (e) => t(e), r = () => {
			window.removeEventListener("mousemove", n), window.removeEventListener("mouseup", r);
		};
		window.addEventListener("mousemove", n), window.addEventListener("mouseup", r);
	}, te = (e) => {
		if (i || !d.current) return;
		let t = (e) => {
			let t = d.current.getBoundingClientRect(), n = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)), r = parseFloat(n.toFixed(2));
			h((e) => {
				let t = {
					...e,
					a: r
				};
				return x(t.h, t.s, t.v, t.a), t;
			});
		};
		t(e.nativeEvent);
		let n = (e) => t(e), r = () => {
			window.removeEventListener("mousemove", n), window.removeEventListener("mouseup", r);
		};
		window.addEventListener("mousemove", n), window.addEventListener("mouseup", r);
	}, ne = (e) => {
		let n = e.target.value;
		t(n);
	}, C = v(m.h, m.s, m.v, m.a);
	return /* @__PURE__ */ (0, b.jsxs)("div", {
		className: "relative w-full",
		ref: s,
		children: [/* @__PURE__ */ (0, b.jsxs)("div", {
			className: "flex gap-2 w-full items-center",
			children: [/* @__PURE__ */ (0, b.jsx)("button", {
				type: "button",
				disabled: i,
				onClick: () => o(!a),
				className: "w-9 h-9 rounded-md border border-border-color shrink-0 cursor-pointer overflow-hidden flex items-center justify-center relative focus:ring-1 focus:ring-primary outline-none disabled:opacity-50",
				style: { background: `linear-gradient(to right, ${e}, ${e}), repeating-conic-gradient(#ccc 0% 25%, #fff 0% 50%) 50% / 8px 8px` },
				title: "Seleccionar color",
				id: `cp-btn-${e.replace(/[^a-zA-Z0-9]/g, "")}`,
				children: /* @__PURE__ */ (0, b.jsx)(Ye, {
					size: 14,
					className: "mix-blend-difference text-white opacity-80"
				})
			}), /* @__PURE__ */ (0, b.jsx)("input", {
				type: "text",
				value: e,
				onChange: ne,
				disabled: i,
				placeholder: "#ffffff",
				className: "bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full font-mono disabled:opacity-55",
				id: `cp-input-${e.replace(/[^a-zA-Z0-9]/g, "")}`
			})]
		}), a && /* @__PURE__ */ (0, b.jsxs)("div", {
			className: "absolute right-0 top-11 bg-bg-panel border border-border-color rounded-lg shadow-xl p-3 z-50 flex flex-col gap-3 w-56 animate-in fade-in slide-in-from-top-2 duration-150",
			children: [
				/* @__PURE__ */ (0, b.jsx)("canvas", {
					ref: l,
					width: 200,
					height: 120,
					onMouseDown: S,
					className: "cursor-crosshair rounded-md border border-border-color/30"
				}),
				/* @__PURE__ */ (0, b.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, b.jsx)("span", {
						className: "text-[10px] text-text-muted font-medium uppercase",
						children: "Tono"
					}), /* @__PURE__ */ (0, b.jsx)("div", {
						ref: u,
						onMouseDown: ee,
						className: "h-3.5 rounded-full relative cursor-pointer border border-border-color/30 overflow-visible",
						style: { background: "linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)" },
						children: /* @__PURE__ */ (0, b.jsx)("div", {
							className: "absolute top-0 w-3.5 h-3.5 rounded-full bg-white border border-gray-400 shadow-md transform -translate-x-1/2",
							style: { left: `${m.h / 360 * 100}%` }
						})
					})]
				}),
				n && /* @__PURE__ */ (0, b.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, b.jsxs)("span", {
						className: "text-[10px] text-text-muted font-medium uppercase",
						children: [
							"Opacidad (",
							Math.round(m.a * 100),
							"%)"
						]
					}), /* @__PURE__ */ (0, b.jsx)("div", {
						ref: d,
						onMouseDown: te,
						className: "h-3.5 rounded-full relative cursor-pointer border border-border-color/30 overflow-visible",
						style: { background: `linear-gradient(to right, rgba(${C.r},${C.g},${C.b},0) 0%, rgba(${C.r},${C.g},${C.b},1) 100%), repeating-conic-gradient(#ccc 0% 25%, #fff 0% 50%) 50% / 8px 8px` },
						children: /* @__PURE__ */ (0, b.jsx)("div", {
							className: "absolute top-0 w-3.5 h-3.5 rounded-full bg-white border border-gray-400 shadow-md transform -translate-x-1/2",
							style: { left: `${m.a * 100}%` }
						})
					})]
				}),
				/* @__PURE__ */ (0, b.jsxs)("div", {
					className: "flex flex-col gap-1.5 border-t border-border-color/30 pt-2",
					children: [/* @__PURE__ */ (0, b.jsx)("span", {
						className: "text-[10px] text-text-muted font-medium uppercase",
						children: "Paleta"
					}), /* @__PURE__ */ (0, b.jsx)("div", {
						className: "grid grid-cols-5 gap-1.5",
						children: r.map((e, n) => /* @__PURE__ */ (0, b.jsx)("button", {
							type: "button",
							onClick: () => t(e),
							className: "h-6 w-full rounded-md border border-border-color/30 hover:scale-105 active:scale-95 transition-all cursor-pointer",
							style: { backgroundColor: e },
							title: e
						}, n))
					})]
				})
			]
		})]
	});
}, Th = ({ value: e, options: t = [
	"left",
	"center",
	"right",
	"justify"
], onChange: n, disabled: r = !1 }) => {
	let i = (e) => {
		switch (e) {
			case "left": return /* @__PURE__ */ (0, b.jsx)(gt, { size: 16 });
			case "center": return /* @__PURE__ */ (0, b.jsx)(mt, { size: 16 });
			case "right": return /* @__PURE__ */ (0, b.jsx)(pt, { size: 16 });
			case "justify": return /* @__PURE__ */ (0, b.jsx)(ht, { size: 16 });
			default: return null;
		}
	};
	return /* @__PURE__ */ (0, b.jsx)("div", {
		className: "flex border border-border-color rounded-md overflow-hidden bg-bg-hover w-max",
		children: t.map((t) => /* @__PURE__ */ (0, b.jsx)("button", {
			type: "button",
			disabled: r,
			onClick: () => n(t),
			className: `p-2 px-3 flex items-center justify-center cursor-pointer transition-all border-none outline-none disabled:opacity-50 ${e === t ? "bg-primary text-white font-bold" : "text-text-secondary hover:bg-bg-panel hover:text-text-primary"}`,
			title: `Alineación ${t}`,
			id: `align-btn-${t}`,
			children: i(t)
		}, t))
	});
}, Eh = (e, t = "px") => {
	if (e == null) return {
		value: 0,
		unit: t
	};
	let n = String(e).trim(), r = parseFloat(n);
	return isNaN(r) ? {
		value: 0,
		unit: t
	} : {
		value: r,
		unit: n.replace(String(r), "").trim() || t
	};
}, Dh = ({ value: e, onChange: t, min: n = 0, max: r = 1e3, step: i = 1, unit: a = "px", allowedUnits: o = [
	"px",
	"em",
	"rem",
	"%"
], disabled: s = !1 }) => {
	let { value: l, unit: u } = Eh(e, a), [d, m] = p(!1), h = f(null);
	return c(() => {
		let e = (e) => {
			h.current && !h.current.contains(e.target) && m(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, []), /* @__PURE__ */ (0, b.jsxs)("div", {
		className: "flex items-center border border-border-color rounded-md overflow-hidden bg-bg-hover w-full max-w-[200px]",
		children: [
			/* @__PURE__ */ (0, b.jsx)("button", {
				type: "button",
				disabled: s || l <= n,
				onClick: () => {
					s || t(`${Math.max(n, l - i)}${u}`);
				},
				className: "p-2 px-3 border-none bg-transparent hover:bg-bg-panel text-text-secondary cursor-pointer transition-all disabled:opacity-30 outline-none flex items-center justify-center",
				id: "stepper-dec",
				children: /* @__PURE__ */ (0, b.jsx)(We, { size: 14 })
			}),
			/* @__PURE__ */ (0, b.jsx)("input", {
				type: "text",
				value: l,
				onChange: (e) => {
					let i = parseFloat(e.target.value);
					isNaN(i) ? e.target.value === "" && t(`0${u}`) : t(`${Math.max(n, Math.min(r, i))}${u}`);
				},
				disabled: s,
				className: "bg-transparent border-none text-text-primary text-center text-xs font-semibold w-full outline-none py-2",
				id: "stepper-input"
			}),
			/* @__PURE__ */ (0, b.jsxs)("div", {
				className: "relative shrink-0 border-l border-border-color/50 px-2 flex items-center h-full select-none",
				ref: h,
				children: [/* @__PURE__ */ (0, b.jsxs)("button", {
					type: "button",
					disabled: s,
					onClick: () => m(!d),
					className: "bg-transparent border-none text-[10px] text-text-muted font-bold cursor-pointer hover:text-text-primary uppercase flex items-center gap-0.5",
					children: [
						u,
						" ",
						/* @__PURE__ */ (0, b.jsx)("span", {
							className: "text-[7px]",
							children: "▼"
						})
					]
				}), d && /* @__PURE__ */ (0, b.jsx)("div", {
					className: "absolute right-0 top-full mt-1 bg-bg-panel border border-border-color rounded-md shadow-lg z-[999] flex flex-col min-w-[55px] overflow-hidden",
					children: o.map((e) => /* @__PURE__ */ (0, b.jsx)("button", {
						type: "button",
						onClick: () => {
							t(`${l}${e}`), m(!1);
						},
						className: `px-2 py-1.5 text-[10px] text-left hover:bg-bg-hover cursor-pointer border-none bg-transparent ${e === u ? "text-primary font-bold bg-primary/10" : "text-text-secondary"}`,
						children: e
					}, e))
				})]
			}),
			/* @__PURE__ */ (0, b.jsx)("button", {
				type: "button",
				disabled: s || l >= r,
				onClick: () => {
					s || t(`${Math.min(r, l + i)}${u}`);
				},
				className: "p-2 px-3 border-none bg-transparent hover:bg-bg-panel text-text-secondary cursor-pointer transition-all disabled:opacity-30 outline-none flex items-center justify-center",
				id: "stepper-inc",
				children: /* @__PURE__ */ (0, b.jsx)(Xe, { size: 14 })
			})
		]
	});
}, Oh = (e, t = "px") => {
	if (e == null) return {
		value: 0,
		unit: t
	};
	let n = String(e).trim(), r = parseFloat(n);
	return isNaN(r) ? {
		value: 0,
		unit: t
	} : {
		value: r,
		unit: n.replace(String(r), "").trim() || t
	};
}, kh = ({ value: e, onChange: t, min: n = 0, max: r = 100, step: i = 1, unit: a = "px", allowedUnits: o = [
	"px",
	"em",
	"rem",
	"%"
], disabled: s = !1 }) => {
	let { value: l, unit: u } = Oh(e, a), [d, m] = p(!1), h = f(null);
	return c(() => {
		let e = (e) => {
			h.current && !h.current.contains(e.target) && m(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, []), /* @__PURE__ */ (0, b.jsxs)("div", {
		className: "flex items-center gap-3 w-full",
		children: [/* @__PURE__ */ (0, b.jsx)("input", {
			type: "range",
			min: n,
			max: r,
			step: i,
			value: l,
			onChange: (e) => {
				t(`${Number(e.target.value)}${u}`);
			},
			disabled: s,
			className: "flex-1 h-1 bg-border-color rounded-lg appearance-none cursor-pointer accent-primary disabled:opacity-50",
			id: "slider-range"
		}), /* @__PURE__ */ (0, b.jsxs)("div", {
			className: "flex items-center border border-border-color rounded-md bg-bg-hover px-2 py-1 shrink-0 w-[85px]",
			children: [/* @__PURE__ */ (0, b.jsx)("input", {
				type: "text",
				value: l,
				onChange: (e) => {
					let i = parseFloat(e.target.value);
					isNaN(i) ? e.target.value === "" && t(`0${u}`) : t(`${Math.max(n, Math.min(r, i))}${u}`);
				},
				disabled: s,
				className: "bg-transparent border-none text-text-primary text-right text-xs font-semibold w-full outline-none mr-1",
				id: "slider-num-input"
			}), /* @__PURE__ */ (0, b.jsxs)("div", {
				className: "relative shrink-0 border-l border-border-color/50 pl-1.5 flex items-center select-none",
				ref: h,
				children: [/* @__PURE__ */ (0, b.jsxs)("button", {
					type: "button",
					disabled: s,
					onClick: () => m(!d),
					className: "bg-transparent border-none text-[9px] text-text-muted font-bold cursor-pointer hover:text-text-primary uppercase flex items-center gap-0.5",
					children: [
						u,
						" ",
						/* @__PURE__ */ (0, b.jsx)("span", {
							className: "text-[6px]",
							children: "▼"
						})
					]
				}), d && /* @__PURE__ */ (0, b.jsx)("div", {
					className: "absolute right-0 top-full mt-1 bg-bg-panel border border-border-color rounded-md shadow-lg z-[999] flex flex-col min-w-[55px] overflow-hidden",
					children: o.map((e) => /* @__PURE__ */ (0, b.jsx)("button", {
						type: "button",
						onClick: () => {
							t(`${l}${e}`), m(!1);
						},
						className: `px-2 py-1.5 text-[10px] text-left hover:bg-bg-hover cursor-pointer border-none bg-transparent ${e === u ? "text-primary font-bold bg-primary/10" : "text-text-secondary"}`,
						children: e
					}, e))
				})]
			})]
		})]
	});
}, Ah = (e, t = "px") => {
	let n = e.match(/[a-zA-Z%]+/);
	return n ? n[0] : t;
}, Q = ({ value: e = "10px", onChange: t, disabled: n = !1 }) => {
	let [r, i] = p(!0), [a, o] = p({
		top: 10,
		right: 10,
		bottom: 10,
		left: 10
	}), [s, l] = p(!1), u = f(null), d = Ah(e, "px"), m = [
		"px",
		"em",
		"rem",
		"%"
	];
	c(() => {
		let e = (e) => {
			u.current && !u.current.contains(e.target) && l(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, []), c(() => {
		let t = e.split(" ").map((e) => parseFloat(e) || 0), n = 0, r = 0, a = 0, s = 0;
		t.length === 1 ? n = r = a = s = t[0] : t.length === 2 ? (n = a = t[0], r = s = t[1]) : t.length === 3 ? (n = t[0], r = s = t[1], a = t[2]) : t.length === 4 && ([n, r, a, s] = t), o({
			top: n,
			right: r,
			bottom: a,
			left: s
		}), i(n === r && r === a && a === s);
	}, [e]);
	let h = (e) => {
		let n = {
			...a,
			...e
		};
		o(n), t(r ? `${Object.values(e)[0] ?? 0}${d}` : `${n.top}${d} ${n.right}${d} ${n.bottom}${d} ${n.left}${d}`);
	}, g = () => {
		if (i(!r), !r) {
			let e = a.top;
			t(`${e}${d}`);
		}
	}, _ = (e) => {
		t(r ? `${a.top}${e}` : `${a.top}${e} ${a.right}${e} ${a.bottom}${e} ${a.left}${e}`), l(!1);
	};
	return /* @__PURE__ */ (0, b.jsxs)("div", {
		className: "flex flex-col gap-3 bg-bg-hover border border-border-color rounded-lg p-3 w-full",
		children: [/* @__PURE__ */ (0, b.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border-color/30 pb-2 select-none",
			children: [/* @__PURE__ */ (0, b.jsx)("span", {
				className: "text-[10px] text-text-muted font-bold uppercase",
				children: "Espaciado (Padding)"
			}), /* @__PURE__ */ (0, b.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, b.jsxs)("div", {
					className: "relative",
					ref: u,
					children: [/* @__PURE__ */ (0, b.jsxs)("button", {
						type: "button",
						disabled: n,
						onClick: () => l(!s),
						className: "bg-bg-panel border border-border-color text-[10px] text-text-muted font-bold px-1.5 py-0.5 rounded-sm cursor-pointer hover:text-text-primary uppercase flex items-center gap-0.5 outline-none",
						children: [
							d,
							" ",
							/* @__PURE__ */ (0, b.jsx)("span", {
								className: "text-[6px]",
								children: "▼"
							})
						]
					}), s && /* @__PURE__ */ (0, b.jsx)("div", {
						className: "absolute right-0 top-full mt-1 bg-bg-panel border border-border-color rounded-md shadow-lg z-[999] flex flex-col min-w-[55px] overflow-hidden",
						children: m.map((e) => /* @__PURE__ */ (0, b.jsx)("button", {
							type: "button",
							onClick: () => _(e),
							className: `px-2 py-1 text-[10px] text-left hover:bg-bg-hover cursor-pointer border-none bg-transparent ${e === d ? "text-primary font-bold bg-primary/10" : "text-text-secondary"}`,
							children: e
						}, e))
					})]
				}), /* @__PURE__ */ (0, b.jsx)("button", {
					type: "button",
					disabled: n,
					onClick: g,
					className: `p-1 rounded-sm cursor-pointer transition-all border-none outline-none ${r ? "bg-primary/15 text-primary" : "text-text-muted hover:text-text-primary"}`,
					title: r ? "Valores vinculados" : "Valores independientes",
					id: "pad-link-btn",
					children: r ? /* @__PURE__ */ (0, b.jsx)(Be, { size: 14 }) : /* @__PURE__ */ (0, b.jsx)(Re, { size: 14 })
				})]
			})]
		}), r ? /* @__PURE__ */ (0, b.jsxs)("div", {
			className: "flex flex-col gap-1",
			children: [/* @__PURE__ */ (0, b.jsx)("label", {
				className: "text-[10px] text-text-muted",
				children: "Todos los lados"
			}), /* @__PURE__ */ (0, b.jsx)(kh, {
				value: a.top,
				onChange: (e) => h({
					top: parseFloat(e),
					right: parseFloat(e),
					bottom: parseFloat(e),
					left: parseFloat(e)
				}),
				min: 0,
				max: 100,
				unit: d,
				disabled: n
			})]
		}) : /* @__PURE__ */ (0, b.jsxs)("div", {
			className: "flex flex-col gap-3",
			children: [
				/* @__PURE__ */ (0, b.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, b.jsx)("label", {
						className: "text-[10px] text-text-muted",
						children: "Arriba (Top)"
					}), /* @__PURE__ */ (0, b.jsx)(kh, {
						value: a.top,
						onChange: (e) => h({ top: parseFloat(e) }),
						min: 0,
						max: 100,
						unit: d,
						disabled: n
					})]
				}),
				/* @__PURE__ */ (0, b.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, b.jsx)("label", {
						className: "text-[10px] text-text-muted",
						children: "Derecha (Right)"
					}), /* @__PURE__ */ (0, b.jsx)(kh, {
						value: a.right,
						onChange: (e) => h({ right: parseFloat(e) }),
						min: 0,
						max: 100,
						unit: d,
						disabled: n
					})]
				}),
				/* @__PURE__ */ (0, b.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, b.jsx)("label", {
						className: "text-[10px] text-text-muted",
						children: "Abajo (Bottom)"
					}), /* @__PURE__ */ (0, b.jsx)(kh, {
						value: a.bottom,
						onChange: (e) => h({ bottom: parseFloat(e) }),
						min: 0,
						max: 100,
						unit: d,
						disabled: n
					})]
				}),
				/* @__PURE__ */ (0, b.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, b.jsx)("label", {
						className: "text-[10px] text-text-muted",
						children: "Izquierda (Left)"
					}), /* @__PURE__ */ (0, b.jsx)(kh, {
						value: a.left,
						onChange: (e) => h({ left: parseFloat(e) }),
						min: 0,
						max: 100,
						unit: d,
						disabled: n
					})]
				})
			]
		})]
	});
}, jh = (e, t = "px") => {
	let n = e.match(/[a-zA-Z%]+/);
	return n ? n[0] : t;
}, Mh = ({ value: e = "0px", onChange: t, disabled: n = !1 }) => {
	let [r, i] = p(!0), [a, o] = p({
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	}), [s, l] = p(!1), u = f(null), d = jh(e, "px"), m = [
		"px",
		"em",
		"rem",
		"%"
	];
	c(() => {
		let e = (e) => {
			u.current && !u.current.contains(e.target) && l(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, []), c(() => {
		let t = e.split(" ").map((e) => parseFloat(e) || 0), n = 0, r = 0, a = 0, s = 0;
		t.length === 1 ? n = r = a = s = t[0] : t.length === 2 ? (n = a = t[0], r = s = t[1]) : t.length === 3 ? (n = t[0], r = s = t[1], a = t[2]) : t.length === 4 && ([n, r, a, s] = t), o({
			top: n,
			right: r,
			bottom: a,
			left: s
		}), i(n === r && r === a && a === s);
	}, [e]);
	let h = (e) => {
		let n = {
			...a,
			...e
		};
		o(n), t(r ? `${Object.values(e)[0] ?? 0}${d}` : `${n.top}${d} ${n.right}${d} ${n.bottom}${d} ${n.left}${d}`);
	}, g = () => {
		if (i(!r), !r) {
			let e = a.top;
			t(`${e}${d}`);
		}
	}, _ = (e) => {
		t(r ? `${a.top}${e}` : `${a.top}${e} ${a.right}${e} ${a.bottom}${e} ${a.left}${e}`), l(!1);
	};
	return /* @__PURE__ */ (0, b.jsxs)("div", {
		className: "flex flex-col gap-3 bg-bg-hover border border-border-color rounded-lg p-3 w-full",
		children: [/* @__PURE__ */ (0, b.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border-color/30 pb-2 select-none",
			children: [/* @__PURE__ */ (0, b.jsx)("span", {
				className: "text-[10px] text-text-muted font-bold uppercase",
				children: "Margen (Margin)"
			}), /* @__PURE__ */ (0, b.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, b.jsxs)("div", {
					className: "relative",
					ref: u,
					children: [/* @__PURE__ */ (0, b.jsxs)("button", {
						type: "button",
						disabled: n,
						onClick: () => l(!s),
						className: "bg-bg-panel border border-border-color text-[10px] text-text-muted font-bold px-1.5 py-0.5 rounded-sm cursor-pointer hover:text-text-primary uppercase flex items-center gap-0.5 outline-none",
						children: [
							d,
							" ",
							/* @__PURE__ */ (0, b.jsx)("span", {
								className: "text-[6px]",
								children: "▼"
							})
						]
					}), s && /* @__PURE__ */ (0, b.jsx)("div", {
						className: "absolute right-0 top-full mt-1 bg-bg-panel border border-border-color rounded-md shadow-lg z-[999] flex flex-col min-w-[55px] overflow-hidden",
						children: m.map((e) => /* @__PURE__ */ (0, b.jsx)("button", {
							type: "button",
							onClick: () => _(e),
							className: `px-2 py-1 text-[10px] text-left hover:bg-bg-hover cursor-pointer border-none bg-transparent ${e === d ? "text-primary font-bold bg-primary/10" : "text-text-secondary"}`,
							children: e
						}, e))
					})]
				}), /* @__PURE__ */ (0, b.jsx)("button", {
					type: "button",
					disabled: n,
					onClick: g,
					className: `p-1 rounded-sm cursor-pointer transition-all border-none outline-none ${r ? "bg-primary/15 text-primary" : "text-text-muted hover:text-text-primary"}`,
					title: r ? "Valores vinculados" : "Valores independientes",
					id: "margin-link-btn",
					children: r ? /* @__PURE__ */ (0, b.jsx)(Be, { size: 14 }) : /* @__PURE__ */ (0, b.jsx)(Re, { size: 14 })
				})]
			})]
		}), r ? /* @__PURE__ */ (0, b.jsxs)("div", {
			className: "flex flex-col gap-1",
			children: [/* @__PURE__ */ (0, b.jsx)("label", {
				className: "text-[10px] text-text-muted",
				children: "Todos los lados"
			}), /* @__PURE__ */ (0, b.jsx)(kh, {
				value: a.top,
				onChange: (e) => h({
					top: parseFloat(e),
					right: parseFloat(e),
					bottom: parseFloat(e),
					left: parseFloat(e)
				}),
				min: 0,
				max: 100,
				unit: d,
				disabled: n
			})]
		}) : /* @__PURE__ */ (0, b.jsxs)("div", {
			className: "flex flex-col gap-3",
			children: [
				/* @__PURE__ */ (0, b.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, b.jsx)("label", {
						className: "text-[10px] text-text-muted",
						children: "Arriba (Top)"
					}), /* @__PURE__ */ (0, b.jsx)(kh, {
						value: a.top,
						onChange: (e) => h({ top: parseFloat(e) }),
						min: 0,
						max: 100,
						unit: d,
						disabled: n
					})]
				}),
				/* @__PURE__ */ (0, b.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, b.jsx)("label", {
						className: "text-[10px] text-text-muted",
						children: "Derecha (Right)"
					}), /* @__PURE__ */ (0, b.jsx)(kh, {
						value: a.right,
						onChange: (e) => h({ right: parseFloat(e) }),
						min: 0,
						max: 100,
						unit: d,
						disabled: n
					})]
				}),
				/* @__PURE__ */ (0, b.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, b.jsx)("label", {
						className: "text-[10px] text-text-muted",
						children: "Abajo (Bottom)"
					}), /* @__PURE__ */ (0, b.jsx)(kh, {
						value: a.bottom,
						onChange: (e) => h({ bottom: parseFloat(e) }),
						min: 0,
						max: 100,
						unit: d,
						disabled: n
					})]
				}),
				/* @__PURE__ */ (0, b.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, b.jsx)("label", {
						className: "text-[10px] text-text-muted",
						children: "Izquierda (Left)"
					}), /* @__PURE__ */ (0, b.jsx)(kh, {
						value: a.left,
						onChange: (e) => h({ left: parseFloat(e) }),
						min: 0,
						max: 100,
						unit: d,
						disabled: n
					})]
				})
			]
		})]
	});
}, Nh = (e, t = "px") => {
	let n = String(e).match(/[a-zA-Z%]+/);
	return n ? n[0] : t;
}, Ph = ({ value: e = "0px", onChange: t, disabled: n = !1 }) => {
	let [r, i] = p(!1), [a, o] = p({
		topLeft: 0,
		topRight: 0,
		bottomRight: 0,
		bottomLeft: 0
	}), [s, l] = p(!1), u = f(null), d = Nh(e, "px"), m = [
		"px",
		"em",
		"rem",
		"%"
	];
	c(() => {
		let e = (e) => {
			u.current && !u.current.contains(e.target) && l(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, []), c(() => {
		let t = String(e).split(" ").map((e) => parseFloat(e) || 0), n = 0, r = 0, a = 0, s = 0;
		t.length === 1 ? n = r = a = s = t[0] : t.length === 2 ? (n = a = t[0], r = s = t[1]) : t.length === 3 ? (n = t[0], r = s = t[1], a = t[2]) : t.length === 4 && ([n, r, a, s] = t), o({
			topLeft: n,
			topRight: r,
			bottomRight: a,
			bottomLeft: s
		}), i(!(n === r && r === a && a === s));
	}, [e]);
	let h = (e) => {
		let n = {
			...a,
			...e
		};
		o(n), t(r ? `${n.topLeft}${d} ${n.topRight}${d} ${n.bottomRight}${d} ${n.bottomLeft}${d}` : `${Object.values(e)[0] ?? 0}${d}`);
	}, g = () => {
		let e = !r;
		i(e), e || t(`${a.topLeft}${d}`);
	}, _ = (e) => {
		t(r ? `${a.topLeft}${e} ${a.topRight}${e} ${a.bottomRight}${e} ${a.bottomLeft}${e}` : `${a.topLeft}${e}`), l(!1);
	};
	return /* @__PURE__ */ (0, b.jsxs)("div", {
		className: "flex flex-col gap-3 bg-bg-hover border border-border-color rounded-lg p-3 w-full",
		children: [/* @__PURE__ */ (0, b.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border-color/30 pb-2 select-none",
			children: [/* @__PURE__ */ (0, b.jsx)("span", {
				className: "text-[10px] text-text-muted font-bold uppercase",
				children: "Bordes Redondeados"
			}), /* @__PURE__ */ (0, b.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, b.jsxs)("div", {
					className: "relative",
					ref: u,
					children: [/* @__PURE__ */ (0, b.jsxs)("button", {
						type: "button",
						disabled: n,
						onClick: () => l(!s),
						className: "bg-bg-panel border border-border-color text-[10px] text-text-muted font-bold px-1.5 py-0.5 rounded-sm cursor-pointer hover:text-text-primary uppercase flex items-center gap-0.5 outline-none",
						children: [
							d,
							" ",
							/* @__PURE__ */ (0, b.jsx)("span", {
								className: "text-[6px]",
								children: "▼"
							})
						]
					}), s && /* @__PURE__ */ (0, b.jsx)("div", {
						className: "absolute right-0 top-full mt-1 bg-bg-panel border border-border-color rounded-md shadow-lg z-[999] flex flex-col min-w-[55px] overflow-hidden",
						children: m.map((e) => /* @__PURE__ */ (0, b.jsx)("button", {
							type: "button",
							onClick: () => _(e),
							className: `px-2 py-1 text-[10px] text-left hover:bg-bg-hover cursor-pointer border-none bg-transparent ${e === d ? "text-primary font-bold bg-primary/10" : "text-text-secondary"}`,
							children: e
						}, e))
					})]
				}), /* @__PURE__ */ (0, b.jsxs)("label", {
					className: "flex items-center gap-1.5 cursor-pointer text-[10px] text-text-muted font-semibold",
					children: [/* @__PURE__ */ (0, b.jsx)("input", {
						type: "checkbox",
						checked: r,
						onChange: g,
						disabled: n,
						className: "rounded text-primary focus:ring-primary h-3.5 w-3.5 border-border-color",
						id: "br-individual-checkbox"
					}), /* @__PURE__ */ (0, b.jsx)("span", { children: "Personalizar esquinas" })]
				})]
			})]
		}), r ? /* @__PURE__ */ (0, b.jsxs)("div", {
			className: "flex flex-col gap-3",
			children: [
				/* @__PURE__ */ (0, b.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, b.jsx)("label", {
						className: "text-[10px] text-text-muted",
						children: "Superior Izquierda (Top-Left)"
					}), /* @__PURE__ */ (0, b.jsx)(kh, {
						value: a.topLeft,
						onChange: (e) => h({ topLeft: parseFloat(e) }),
						min: 0,
						max: 100,
						unit: d,
						disabled: n
					})]
				}),
				/* @__PURE__ */ (0, b.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, b.jsx)("label", {
						className: "text-[10px] text-text-muted",
						children: "Superior Derecha (Top-Right)"
					}), /* @__PURE__ */ (0, b.jsx)(kh, {
						value: a.topRight,
						onChange: (e) => h({ topRight: parseFloat(e) }),
						min: 0,
						max: 100,
						unit: d,
						disabled: n
					})]
				}),
				/* @__PURE__ */ (0, b.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, b.jsx)("label", {
						className: "text-[10px] text-text-muted",
						children: "Inferior Derecha (Bottom-Right)"
					}), /* @__PURE__ */ (0, b.jsx)(kh, {
						value: a.bottomRight,
						onChange: (e) => h({ bottomRight: parseFloat(e) }),
						min: 0,
						max: 100,
						unit: d,
						disabled: n
					})]
				}),
				/* @__PURE__ */ (0, b.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, b.jsx)("label", {
						className: "text-[10px] text-text-muted",
						children: "Inferior Izquierda (Bottom-Left)"
					}), /* @__PURE__ */ (0, b.jsx)(kh, {
						value: a.bottomLeft,
						onChange: (e) => h({ bottomLeft: parseFloat(e) }),
						min: 0,
						max: 100,
						unit: d,
						disabled: n
					})]
				})
			]
		}) : /* @__PURE__ */ (0, b.jsxs)("div", {
			className: "flex flex-col gap-1",
			children: [/* @__PURE__ */ (0, b.jsx)("label", {
				className: "text-[10px] text-text-muted",
				children: "Todas las esquinas"
			}), /* @__PURE__ */ (0, b.jsx)(kh, {
				value: a.topLeft,
				onChange: (e) => h({
					topLeft: parseFloat(e),
					topRight: parseFloat(e),
					bottomRight: parseFloat(e),
					bottomLeft: parseFloat(e)
				}),
				min: 0,
				max: 100,
				unit: d,
				disabled: n
			})]
		})]
	});
}, Fh = ({ value: e, options: t, onChange: n, disabled: r = !1, renderOption: i }) => {
	let [a, o] = p(!1), [s, l] = p(-1), u = f(null), d = t.find((t) => t.value === e) || t[0];
	c(() => {
		let e = (e) => {
			u.current && !u.current.contains(e.target) && o(!1);
		};
		return a && document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [a]);
	let m = (i) => {
		if (!r) {
			if (!a) {
				if (i.key === "Enter" || i.key === "ArrowDown" || i.key === "ArrowUp") {
					i.preventDefault(), o(!0);
					let n = t.findIndex((t) => t.value === e);
					l(n >= 0 ? n : 0);
				}
				return;
			}
			switch (i.key) {
				case "Escape":
					o(!1);
					break;
				case "ArrowDown":
					i.preventDefault(), l((e) => (e + 1) % t.length);
					break;
				case "ArrowUp":
					i.preventDefault(), l((e) => (e - 1 + t.length) % t.length);
					break;
				case "Enter":
					i.preventDefault(), s >= 0 && s < t.length && (n(t[s].value), o(!1));
					break;
			}
		}
	}, h = (e) => {
		n(e), o(!1);
	};
	return /* @__PURE__ */ (0, b.jsxs)("div", {
		ref: u,
		onKeyDown: m,
		tabIndex: r ? -1 : 0,
		className: `relative w-full outline-none focus:ring-1 focus:ring-primary rounded-md ${r ? "opacity-55 pointer-events-none" : ""}`,
		children: [/* @__PURE__ */ (0, b.jsxs)("button", {
			type: "button",
			disabled: r,
			onClick: () => o(!a),
			className: "w-full flex items-center justify-between bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs cursor-pointer text-left outline-none hover:border-border-color/85",
			id: `select-trigger-${e}`,
			children: [/* @__PURE__ */ (0, b.jsx)("span", {
				style: d?.previewStyle,
				className: d?.previewClass,
				children: d ? d.label : "Seleccionar..."
			}), /* @__PURE__ */ (0, b.jsx)(ve, {
				size: 14,
				className: "text-text-muted shrink-0 ml-1"
			})]
		}), a && /* @__PURE__ */ (0, b.jsx)("ul", {
			className: "absolute left-0 right-0 mt-1 max-h-60 overflow-y-auto bg-bg-panel border border-border-color rounded-md shadow-xl p-1 z-50 list-none m-0 animate-in fade-in slide-in-from-top-1 duration-100",
			id: `select-options-${e}`,
			role: "listbox",
			children: t.map((t, n) => {
				let r = t.value === e;
				return /* @__PURE__ */ (0, b.jsxs)("li", {
					onClick: () => h(t.value),
					onMouseEnter: () => l(n),
					className: `flex items-center justify-between p-2 px-3 text-xs rounded-xs cursor-pointer select-none ${r ? "bg-primary/10 text-primary font-semibold" : "text-text-primary"} ${n === s && !r ? "bg-bg-hover" : ""}`,
					role: "option",
					"aria-selected": r,
					children: [i ? i(t) : /* @__PURE__ */ (0, b.jsx)("span", {
						style: t.previewStyle,
						className: t.previewClass,
						children: t.label
					}), r && /* @__PURE__ */ (0, b.jsx)(_e, {
						size: 14,
						className: "text-primary shrink-0 ml-1"
					})]
				}, t.value);
			})
		})]
	});
}, Ih = [
	"Arial",
	"Georgia",
	"Verdana",
	"Tahoma",
	"Times New Roman",
	"Courier New",
	"Trebuchet MS"
], Lh = [
	"Inter",
	"Roboto",
	"Outfit",
	"Poppins",
	"Lato",
	"Montserrat",
	"Open Sans",
	"Nunito",
	"Raleway",
	"Playfair Display",
	"Merriweather",
	"Lora",
	"Oswald",
	"Roboto Condensed",
	"Source Sans Pro",
	"PT Sans",
	"Noto Sans",
	"Rubik",
	"Kanit",
	"Work Sans",
	"Quicksand"
], Rh = ({ value: e, onChange: t, disabled: n = !1, googleFonts: r }) => {
	let [i, a] = p(""), o = r || Lh;
	c(() => {
		if (o.length === 0) return;
		let e = "gfonts-picker-preview", t = document.getElementById(e);
		t || (t = document.createElement("link"), t.id = e, t.rel = "stylesheet", document.head.appendChild(t));
		let n = o.map((e) => e.replace(/\s+/g, "+")).join("|");
		t.href = `https://fonts.googleapis.com/css?family=${n}&display=swap`;
	}, [o]);
	let s = [...Ih.map((e) => ({
		label: e,
		value: e,
		group: "Web-safe"
	})), ...o.map((e) => ({
		label: e,
		value: e,
		group: "Google Fonts"
	}))].filter((e) => e.label.toLowerCase().includes(i.toLowerCase())).map((e) => ({
		label: e.label,
		value: e.value,
		previewStyle: { fontFamily: e.value }
	}));
	return /* @__PURE__ */ (0, b.jsxs)("div", {
		className: "flex flex-col gap-2 w-full",
		children: [/* @__PURE__ */ (0, b.jsxs)("div", {
			className: "flex items-center border border-border-color rounded-md px-2 py-1 bg-bg-hover",
			children: [/* @__PURE__ */ (0, b.jsx)($e, {
				size: 14,
				className: "text-text-muted mr-1 shrink-0"
			}), /* @__PURE__ */ (0, b.jsx)("input", {
				type: "text",
				value: i,
				onChange: (e) => a(e.target.value),
				disabled: n,
				placeholder: "Buscar fuente...",
				className: "bg-transparent border-none text-text-primary text-xs outline-none w-full",
				id: "font-search"
			})]
		}), /* @__PURE__ */ (0, b.jsx)(Fh, {
			value: e,
			options: s.length > 0 ? s : [{
				label: e,
				value: e
			}],
			onChange: t,
			disabled: n,
			renderOption: (e) => /* @__PURE__ */ (0, b.jsx)("span", {
				style: { fontFamily: e.value },
				className: "text-xs",
				children: e.label
			})
		})]
	});
}, zh = ({ value: e = "", onChange: t, showTime: n = !0, disabled: r = !1 }) => {
	let [i, a] = p(!1), o = f(null), [s, l] = p(() => {
		let t = e ? new Date(e) : /* @__PURE__ */ new Date();
		return isNaN(t.getTime()) ? /* @__PURE__ */ new Date() : t;
	}), [u, d] = p(() => new Date(s.getFullYear(), s.getMonth(), 1)), [m, h] = p(s.getHours()), [g, _] = p(s.getMinutes());
	c(() => {
		let t = e ? new Date(e) : /* @__PURE__ */ new Date();
		isNaN(t.getTime()) || (l(t), d(new Date(t.getFullYear(), t.getMonth(), 1)), h(t.getHours()), _(t.getMinutes()));
	}, [e]), c(() => {
		let e = (e) => {
			o.current && !o.current.contains(e.target) && a(!1);
		};
		return i && document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [i]);
	let v = (e) => new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate(), y = (e) => {
		let t = new Date(e.getFullYear(), e.getMonth(), 1).getDay();
		return t === 0 ? 6 : t - 1;
	}, x = [
		"Enero",
		"Febrero",
		"Marzo",
		"Abril",
		"Mayo",
		"Junio",
		"Julio",
		"Agosto",
		"Septiembre",
		"Octubre",
		"Noviembre",
		"Diciembre"
	], S = () => {
		d(new Date(u.getFullYear(), u.getMonth() - 1, 1));
	}, ee = () => {
		d(new Date(u.getFullYear(), u.getMonth() + 1, 1));
	}, te = (e) => {
		let r = new Date(u.getFullYear(), u.getMonth(), e, m, g);
		l(r), n || (t(`${r.getFullYear()}-${String(r.getMonth() + 1).padStart(2, "0")}-${String(r.getDate()).padStart(2, "0")}`), a(!1));
	}, ne = () => {
		let e = s.getFullYear(), r = String(s.getMonth() + 1).padStart(2, "0"), i = String(s.getDate()).padStart(2, "0"), o = String(m).padStart(2, "0"), c = String(g).padStart(2, "0");
		t(n ? `${e}-${r}-${i}T${o}:${c}:00` : `${e}-${r}-${i}`), a(!1);
	}, C = () => {
		t(""), a(!1);
	}, re = [], ie = y(u), ae = v(u);
	for (let e = 0; e < ie; e++) re.push(null);
	for (let e = 1; e <= ae; e++) re.push(e);
	return /* @__PURE__ */ (0, b.jsxs)("div", {
		className: "relative w-full",
		ref: o,
		children: [/* @__PURE__ */ (0, b.jsxs)("button", {
			type: "button",
			disabled: r,
			onClick: () => a(!i),
			className: "w-full flex items-center gap-2 bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs cursor-pointer text-left outline-none hover:border-border-color/85 disabled:opacity-50",
			id: `dtp-btn-${e.replace(/[^a-zA-Z0-9]/g, "")}`,
			children: [/* @__PURE__ */ (0, b.jsx)(ge, {
				size: 14,
				className: "text-text-muted shrink-0"
			}), /* @__PURE__ */ (0, b.jsx)("span", {
				className: "flex-1",
				children: (() => {
					if (!e) return "Seleccionar fecha...";
					let t = new Date(e);
					return isNaN(t.getTime()) ? e : `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}` + (n ? ` ${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}` : "");
				})()
			})]
		}), i && /* @__PURE__ */ (0, b.jsxs)("div", {
			className: "absolute right-0 top-11 bg-bg-panel border border-border-color rounded-lg shadow-xl p-3 z-50 flex flex-col gap-3 w-64 animate-in fade-in slide-in-from-top-2 duration-150",
			children: [
				/* @__PURE__ */ (0, b.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border-color/30 pb-2",
					children: [
						/* @__PURE__ */ (0, b.jsx)("button", {
							type: "button",
							onClick: S,
							className: "p-1 hover:bg-bg-hover rounded-full transition-all cursor-pointer border-none text-text-primary",
							id: "dtp-prev-month",
							children: /* @__PURE__ */ (0, b.jsx)(ye, { size: 16 })
						}),
						/* @__PURE__ */ (0, b.jsxs)("span", {
							className: "text-xs font-semibold text-text-primary",
							children: [
								x[u.getMonth()],
								" ",
								u.getFullYear()
							]
						}),
						/* @__PURE__ */ (0, b.jsx)("button", {
							type: "button",
							onClick: ee,
							className: "p-1 hover:bg-bg-hover rounded-full transition-all cursor-pointer border-none text-text-primary",
							id: "dtp-next-month",
							children: /* @__PURE__ */ (0, b.jsx)(be, { size: 16 })
						})
					]
				}),
				/* @__PURE__ */ (0, b.jsx)("div", {
					className: "grid grid-cols-7 gap-1 text-center",
					children: [
						"L",
						"M",
						"X",
						"J",
						"V",
						"S",
						"D"
					].map((e, t) => /* @__PURE__ */ (0, b.jsx)("span", {
						className: "text-[10px] text-text-muted font-bold",
						children: e
					}, t))
				}),
				/* @__PURE__ */ (0, b.jsx)("div", {
					className: "grid grid-cols-7 gap-1",
					children: re.map((e, t) => e === null ? /* @__PURE__ */ (0, b.jsx)("div", {}, `empty-${t}`) : /* @__PURE__ */ (0, b.jsx)("button", {
						type: "button",
						onClick: () => te(e),
						className: `h-7 w-7 rounded-md text-xs flex items-center justify-center transition-all cursor-pointer border-none outline-none ${s.getDate() === e && s.getMonth() === u.getMonth() && s.getFullYear() === u.getFullYear() ? "bg-primary text-white font-bold" : "text-text-primary hover:bg-bg-hover"}`,
						id: `dtp-day-${e}`,
						children: e
					}, e))
				}),
				n && /* @__PURE__ */ (0, b.jsxs)("div", {
					className: "flex items-center justify-between border-t border-border-color/30 pt-2.5",
					children: [/* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex items-center gap-1.5 text-text-muted text-[11px] font-medium",
						children: [/* @__PURE__ */ (0, b.jsx)(Se, { size: 12 }), /* @__PURE__ */ (0, b.jsx)("span", { children: "Hora:" })]
					}), /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex items-center gap-1 text-xs",
						children: [
							/* @__PURE__ */ (0, b.jsx)("input", {
								type: "number",
								min: "0",
								max: "23",
								value: m,
								onChange: (e) => {
									let t = Math.max(0, Math.min(23, parseInt(e.target.value) || 0));
									h(t), l(new Date(s.getFullYear(), s.getMonth(), s.getDate(), t, g));
								},
								className: "w-10 text-center bg-bg-hover border border-border-color rounded-sm p-1 text-text-primary outline-none",
								id: "dtp-hour"
							}),
							/* @__PURE__ */ (0, b.jsx)("span", {
								className: "font-bold text-text-muted",
								children: ":"
							}),
							/* @__PURE__ */ (0, b.jsx)("input", {
								type: "number",
								min: "0",
								max: "59",
								value: g,
								onChange: (e) => {
									let t = Math.max(0, Math.min(59, parseInt(e.target.value) || 0));
									_(t), l(new Date(s.getFullYear(), s.getMonth(), s.getDate(), m, t));
								},
								className: "w-10 text-center bg-bg-hover border border-border-color rounded-sm p-1 text-text-primary outline-none",
								id: "dtp-minute"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, b.jsxs)("div", {
					className: "flex gap-2 border-t border-border-color/30 pt-2.5",
					children: [/* @__PURE__ */ (0, b.jsx)("button", {
						type: "button",
						onClick: C,
						className: "flex-1 bg-transparent hover:bg-bg-hover text-text-secondary border border-border-color text-[11px] font-medium p-1.5 rounded-md cursor-pointer transition-all",
						id: "dtp-clear",
						children: "Limpiar"
					}), /* @__PURE__ */ (0, b.jsx)("button", {
						type: "button",
						onClick: ne,
						className: "flex-1 bg-primary hover:bg-primary/90 text-white text-[11px] font-medium p-1.5 rounded-md cursor-pointer transition-all border-none",
						id: "dtp-confirm",
						children: "Confirmar"
					})]
				})
			]
		})]
	});
}, Bh = ({ value: e = "", onChange: t, disabled: n = !1 }) => {
	let [r, i] = p("url"), [a, o] = p("");
	c(() => {
		e.startsWith("mailto:") ? (i("email"), o(e.substring(7))) : e.startsWith("tel:") ? (i("tel"), o(e.substring(4))) : e.startsWith("#") ? (i("anchor"), o(e.substring(1))) : (i("url"), o(e));
	}, [e]);
	let s = (e) => {
		o(e), u(r, e);
	}, l = (e) => {
		i(e), u(e, a);
	}, u = (e, n) => {
		if (!n) {
			t("");
			return;
		}
		switch (e) {
			case "email":
				t(`mailto:${n}`);
				break;
			case "tel":
				t(`tel:${n}`);
				break;
			case "anchor":
				t(`#${n}`);
				break;
			default:
				t(n);
				break;
		}
	};
	return /* @__PURE__ */ (0, b.jsxs)("div", {
		className: "flex flex-col gap-2 w-full",
		children: [/* @__PURE__ */ (0, b.jsxs)("div", {
			className: "flex items-center border border-border-color rounded-md px-2 py-1 bg-bg-hover",
			children: [/* @__PURE__ */ (0, b.jsx)(Be, {
				size: 14,
				className: "text-text-muted mr-1.5 shrink-0"
			}), /* @__PURE__ */ (0, b.jsx)("input", {
				type: "text",
				value: a,
				onChange: (e) => s(e.target.value),
				disabled: n,
				placeholder: r === "email" ? "ejemplo@correo.com" : r === "tel" ? "+34600112233" : r === "anchor" ? "nombre-seccion" : "https://ejemplo.com",
				className: "bg-transparent border-none text-text-primary text-xs outline-none w-full font-mono",
				id: `link-input-${e.replace(/[^a-zA-Z0-9]/g, "")}`
			})]
		}), /* @__PURE__ */ (0, b.jsx)("div", {
			className: "flex border border-border-color rounded-md overflow-hidden bg-bg-hover text-[10px] font-bold w-full select-none",
			children: [
				"url",
				"email",
				"tel",
				"anchor"
			].map((e) => {
				let t = r === e, i = e === "url" ? "Web" : e === "email" ? "Email" : e === "tel" ? "Tel" : "Ancla";
				return /* @__PURE__ */ (0, b.jsx)("button", {
					type: "button",
					disabled: n,
					onClick: () => l(e),
					className: `flex-1 p-1 text-center cursor-pointer transition-all border-none outline-none ${t ? "bg-primary text-white" : "text-text-secondary hover:bg-bg-panel hover:text-text-primary"}`,
					id: `link-type-${e}`,
					children: i
				}, e);
			})
		})]
	});
}, Vh = ({ desktop: e, mobile: t, onChange: n, disabled: r = !1 }) => /* @__PURE__ */ (0, b.jsxs)("div", {
	className: "flex flex-col gap-2 bg-bg-hover border border-border-color rounded-lg p-3 w-full",
	children: [/* @__PURE__ */ (0, b.jsx)("span", {
		className: "text-[10px] text-text-muted font-bold uppercase",
		children: "Visibilidad por Dispositivo"
	}), /* @__PURE__ */ (0, b.jsxs)("div", {
		className: "flex gap-2",
		children: [/* @__PURE__ */ (0, b.jsxs)("button", {
			type: "button",
			disabled: r,
			onClick: () => n(!e, t),
			className: `flex-1 flex items-center justify-center gap-1.5 p-2 rounded-md border text-xs font-semibold cursor-pointer transition-all ${e ? "bg-primary/10 text-primary border-primary/20" : "bg-bg-panel text-text-muted border-border-color"}`,
			id: "toggle-vis-desktop",
			children: [/* @__PURE__ */ (0, b.jsx)(Ge, { size: 14 }), /* @__PURE__ */ (0, b.jsxs)("span", { children: ["Escritorio: ", e ? "ON" : "OFF"] })]
		}), /* @__PURE__ */ (0, b.jsxs)("button", {
			type: "button",
			disabled: r,
			onClick: () => n(e, !t),
			className: `flex-1 flex items-center justify-center gap-1.5 p-2 rounded-md border text-xs font-semibold cursor-pointer transition-all ${t ? "bg-primary/10 text-primary border-primary/20" : "bg-bg-panel text-text-muted border-border-color"}`,
			id: "toggle-vis-mobile",
			children: [/* @__PURE__ */ (0, b.jsx)(it, { size: 14 }), /* @__PURE__ */ (0, b.jsxs)("span", { children: ["Móvil: ", t ? "ON" : "OFF"] })]
		})]
	})]
}), Hh = ({ selectedNode: e, onUpdateProperties: t, onDeleteNode: n, readOnly: r = !1, onOpenAssetManager: i, onOpenVideoManager: a, googleFonts: o }) => {
	let { t: s } = te(), [c, l] = p("general");
	if (!e) return /* @__PURE__ */ (0, b.jsx)("aside", {
		className: "w-[300px] bg-bg-panel border-l border-border-color flex items-center justify-center h-full",
		children: /* @__PURE__ */ (0, b.jsxs)("div", {
			className: "text-center text-text-muted p-5 flex flex-col items-center gap-2.5",
			children: [/* @__PURE__ */ (0, b.jsx)(rt, { size: 32 }), /* @__PURE__ */ (0, b.jsx)("p", {
				className: "text-xs",
				children: s("noElementSelected")
			})]
		})
	});
	let u = c === "mobile", d = u ? {
		...e.properties,
		...e.mobileProperties || {}
	} : e.properties, f = (n, r) => {
		t(e.id, { [n]: r }, u);
	}, m = (n, r) => {
		t(e.id, {
			desktop: n,
			mobile: r
		}, !1);
	}, h = (t, n) => /* @__PURE__ */ (0, b.jsxs)("div", {
		className: "flex items-center justify-between select-none",
		children: [/* @__PURE__ */ (0, b.jsx)("label", {
			className: "text-[11.5px] font-medium text-text-secondary",
			children: t
		}), u && e.mobileProperties?.[n] !== void 0 && /* @__PURE__ */ (0, b.jsx)("span", {
			className: "bg-primary text-white text-[9px] font-bold px-1 py-0.5 rounded-xs uppercase",
			title: "Sobrescrito en móvil",
			children: "Móvil"
		})]
	}), g = (e, t) => {
		let n = d[t] || "";
		return /* @__PURE__ */ (0, b.jsxs)("div", {
			className: "flex flex-col gap-1.5",
			children: [h(e, t), /* @__PURE__ */ (0, b.jsxs)("div", {
				className: "flex gap-1.5 w-full items-center",
				children: [/* @__PURE__ */ (0, b.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, b.jsx)(Bh, {
						value: n,
						onChange: (e) => f(t, e),
						disabled: r
					})
				}), i && /* @__PURE__ */ (0, b.jsx)("button", {
					type: "button",
					onClick: () => i(n, (e) => f(t, e)),
					className: "p-2 border border-border-color bg-bg-hover text-text-secondary hover:text-text-primary rounded-md flex items-center justify-center cursor-pointer shrink-0 transition-all hover:bg-bg-panel",
					title: "Abrir gestor de archivos",
					children: "📁"
				})]
			})]
		});
	};
	return /* @__PURE__ */ (0, b.jsxs)("aside", {
		className: "w-[300px] bg-bg-panel border-l border-border-color flex flex-col overflow-y-auto h-full",
		children: [/* @__PURE__ */ (0, b.jsxs)("div", {
			className: "flex border-b border-border-color shrink-0",
			children: [/* @__PURE__ */ (0, b.jsx)("button", {
				className: `flex-1 bg-transparent border-none border-b-2 p-3 text-xs font-semibold cursor-pointer transition-all hover:text-text-primary flex items-center justify-center ${c === "general" ? "border-b-primary text-primary" : "border-b-transparent text-text-secondary"}`,
				onClick: () => l("general"),
				children: s("properties")
			}), /* @__PURE__ */ (0, b.jsxs)("button", {
				className: `flex-1 bg-transparent border-none border-b-2 p-3 text-xs font-semibold cursor-pointer transition-all hover:text-text-primary flex items-center justify-center ${c === "mobile" ? "border-b-primary text-primary" : "border-b-transparent text-text-secondary"}`,
				onClick: () => l("mobile"),
				children: [/* @__PURE__ */ (0, b.jsx)(it, {
					size: 14,
					style: { marginRight: "4px" }
				}), s("mobileOverrides")]
			})]
		}), /* @__PURE__ */ (0, b.jsxs)("div", {
			className: "p-5 flex flex-col gap-4 overflow-y-auto flex-1",
			children: [(() => {
				let t = d;
				switch (e.type) {
					case "section": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, b.jsx)("h3", {
								className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
								children: "Sección"
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Color de Fondo", "backgroundColor"), /* @__PURE__ */ (0, b.jsx)(Z, {
									value: t.backgroundColor || "#ffffff",
									onChange: (e) => f("backgroundColor", e),
									disabled: r
								})]
							}),
							g("Fondo de Imagen (URL)", "backgroundImage"),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Posición del Fondo", "backgroundPosition"), /* @__PURE__ */ (0, b.jsx)(Fh, {
									value: t.backgroundPosition || "center",
									options: [
										{
											label: "Centro",
											value: "center"
										},
										{
											label: "Superior",
											value: "top"
										},
										{
											label: "Inferior",
											value: "bottom"
										},
										{
											label: "Cubrir (Cover)",
											value: "cover"
										}
									],
									onChange: (e) => f("backgroundPosition", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Ancho Máximo", "width"), /* @__PURE__ */ (0, b.jsx)(Dh, {
									value: t.width || 600,
									onChange: (e) => f("width", e),
									min: 300,
									max: 800,
									unit: "px",
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Q, {
									value: t.padding || "20px",
									onChange: (e) => f("padding", e),
									disabled: r
								})
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Mh, {
									value: t.margin || "0px",
									onChange: (e) => f("margin", e),
									disabled: r
								})
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Ph, {
									value: t.borderRadius || "0px",
									onChange: (e) => f("borderRadius", e),
									disabled: r
								})
							}),
							!u && /* @__PURE__ */ (0, b.jsx)(Vh, {
								desktop: t.desktop !== !1,
								mobile: t.mobile !== !1,
								onChange: m,
								disabled: r
							})
						]
					});
					case "column": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, b.jsx)("h3", {
								className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
								children: "Columna"
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Ancho (%)", "width"), /* @__PURE__ */ (0, b.jsx)(kh, {
									value: t.width || 100,
									onChange: (e) => f("width", e),
									min: 10,
									max: 100,
									unit: "%",
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Alineación Vertical", "verticalAlign"), /* @__PURE__ */ (0, b.jsx)(Fh, {
									value: t.verticalAlign || "top",
									options: [
										{
											label: "Superior",
											value: "top"
										},
										{
											label: "Centrado",
											value: "middle"
										},
										{
											label: "Inferior",
											value: "bottom"
										}
									],
									onChange: (e) => f("verticalAlign", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Color de Fondo", "backgroundColor"), /* @__PURE__ */ (0, b.jsx)(Z, {
									value: t.backgroundColor || "transparent",
									onChange: (e) => f("backgroundColor", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Q, {
									value: t.padding || "0px",
									onChange: (e) => f("padding", e),
									disabled: r
								})
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Mh, {
									value: t.margin || "0px",
									onChange: (e) => f("margin", e),
									disabled: r
								})
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Ph, {
									value: t.borderRadius || "0px",
									onChange: (e) => f("borderRadius", e),
									disabled: r
								})
							})
						]
					});
					case "text":
					case "heading":
					case "paragraph": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, b.jsxs)("h3", {
								className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
								children: ["Propiedades de ", e.type === "heading" ? "Encabezado" : e.type === "text" ? "Texto Libre" : "Párrafo"]
							}),
							e.type === "heading" && /* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Nivel de Encabezado", "level"), /* @__PURE__ */ (0, b.jsx)(Fh, {
									value: t.level || "h1",
									options: [
										{
											label: "Título 1 (H1)",
											value: "h1"
										},
										{
											label: "Título 2 (H2)",
											value: "h2"
										},
										{
											label: "Título 3 (H3)",
											value: "h3"
										},
										{
											label: "Título 4 (H4)",
											value: "h4"
										},
										{
											label: "Título 5 (H5)",
											value: "h5"
										},
										{
											label: "Título 6 (H6)",
											value: "h6"
										}
									],
									onChange: (e) => {
										f("level", e), f("fontSize", {
											h1: "32px",
											h2: "24px",
											h3: "20px",
											h4: "18px",
											h5: "16px",
											h6: "14px"
										}[e] || "24px");
									},
									disabled: r
								})]
							}),
							!u && /* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Contenido", "content"), e.type === "text" ? /* @__PURE__ */ (0, b.jsx)(Ch, {
									value: t.content || "",
									onChange: (e) => f("content", e),
									disabled: r
								}) : /* @__PURE__ */ (0, b.jsx)("textarea", {
									value: t.content || "",
									onChange: (e) => {
										f("content", e.target.value.replace(/<\/?[^>]+(>|$)/g, ""));
									},
									disabled: r,
									className: "bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55",
									rows: 4
								})]
							}),
							e.type !== "text" && /* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Tipografía", "fontFamily"), /* @__PURE__ */ (0, b.jsx)(Rh, {
									value: t.fontFamily || "Arial",
									onChange: (e) => f("fontFamily", e),
									disabled: r,
									googleFonts: o
								})]
							}),
							e.type !== "text" && /* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Tamaño de Texto", "fontSize"), /* @__PURE__ */ (0, b.jsx)(Dh, {
									value: t.fontSize || 16,
									onChange: (e) => f("fontSize", e),
									min: 8,
									max: 96,
									unit: "px",
									disabled: r
								})]
							}),
							e.type !== "text" && /* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Estilo / Formato", "fontWeight"), /* @__PURE__ */ (0, b.jsxs)("div", {
									className: "flex bg-bg-hover p-1 rounded-md border border-border-color/80 w-full shrink-0 select-none gap-1",
									children: [
										/* @__PURE__ */ (0, b.jsx)("button", {
											type: "button",
											onClick: () => f("fontWeight", t.fontWeight === "bold" || t.fontWeight === "700" ? "normal" : "bold"),
											className: `flex-1 text-center py-1 text-xs font-bold rounded-md cursor-pointer transition-all border-none ${t.fontWeight === "bold" || t.fontWeight === "700" ? "bg-bg-panel text-primary shadow-sm" : "text-text-secondary bg-transparent hover:text-text-primary"}`,
											disabled: r,
											children: "B"
										}),
										/* @__PURE__ */ (0, b.jsx)("button", {
											type: "button",
											onClick: () => f("fontStyle", t.fontStyle === "italic" ? "normal" : "italic"),
											className: `flex-1 text-center py-1 text-xs italic rounded-md cursor-pointer transition-all border-none ${t.fontStyle === "italic" ? "bg-bg-panel text-primary shadow-sm" : "text-text-secondary bg-transparent hover:text-text-primary"}`,
											disabled: r,
											children: "I"
										}),
										/* @__PURE__ */ (0, b.jsx)("button", {
											type: "button",
											onClick: () => f("textDecoration", t.textDecoration === "underline" ? "none" : "underline"),
											className: `flex-1 text-center py-1 text-xs underline rounded-md cursor-pointer transition-all border-none ${t.textDecoration === "underline" ? "bg-bg-panel text-primary shadow-sm" : "text-text-secondary bg-transparent hover:text-text-primary"}`,
											disabled: r,
											children: "U"
										})
									]
								})]
							}),
							e.type !== "text" && /* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Alineación", "align"), /* @__PURE__ */ (0, b.jsx)(Th, {
									value: t.align || "left",
									options: [
										"left",
										"center",
										"right",
										"justify"
									],
									onChange: (e) => f("align", e),
									disabled: r
								})]
							}),
							e.type !== "text" && /* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Color", "color"), /* @__PURE__ */ (0, b.jsx)(Z, {
									value: t.color || "#1a1a1a",
									onChange: (e) => f("color", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Q, {
									value: t.padding || "10px 20px",
									onChange: (e) => f("padding", e),
									disabled: r
								})
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Mh, {
									value: t.margin || "0px",
									onChange: (e) => f("margin", e),
									disabled: r
								})
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Ph, {
									value: t.borderRadius || "0px",
									onChange: (e) => f("borderRadius", e),
									disabled: r
								})
							})
						]
					});
					case "image": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, b.jsx)("h3", {
								className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
								children: "Propiedades de Imagen"
							}),
							!u && g("URL de Imagen", "url"),
							!u && /* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Texto Alternativo", "altText"), /* @__PURE__ */ (0, b.jsx)("input", {
									type: "text",
									value: t.altText || "",
									onChange: (e) => f("altText", e.target.value),
									disabled: r,
									className: "bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Alineación", "align"), /* @__PURE__ */ (0, b.jsx)(Th, {
									value: t.align || "center",
									options: [
										"left",
										"center",
										"right"
									],
									onChange: (e) => f("align", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Ph, {
									value: t.borderRadius || "8px",
									onChange: (e) => f("borderRadius", e),
									disabled: r
								})
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Q, {
									value: t.padding || "0px",
									onChange: (e) => f("padding", e),
									disabled: r
								})
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Mh, {
									value: t.margin || "0px",
									onChange: (e) => f("margin", e),
									disabled: r
								})
							})
						]
					});
					case "button": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, b.jsx)("h3", {
								className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
								children: "Propiedades de Botón"
							}),
							!u && /* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Texto del Botón", "content"), /* @__PURE__ */ (0, b.jsx)("input", {
									type: "text",
									value: t.content || "",
									onChange: (e) => {
										f("content", e.target.value.replace(/<\/?[^>]+(>|$)/g, ""));
									},
									disabled: r,
									className: "bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
								})]
							}),
							!u && /* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Destino (URL/Email)", "url"), /* @__PURE__ */ (0, b.jsx)(Bh, {
									value: t.url || "",
									onChange: (e) => f("url", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Tipografía", "fontFamily"), /* @__PURE__ */ (0, b.jsx)(Rh, {
									value: t.fontFamily || "Arial",
									onChange: (e) => f("fontFamily", e),
									disabled: r,
									googleFonts: o
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Tamaño de Texto", "fontSize"), /* @__PURE__ */ (0, b.jsx)(Dh, {
									value: t.fontSize || 16,
									onChange: (e) => f("fontSize", e),
									min: 8,
									max: 96,
									unit: "px",
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Color de Botón", "backgroundColor"), /* @__PURE__ */ (0, b.jsx)(Z, {
									value: t.backgroundColor || "#4f46e5",
									onChange: (e) => f("backgroundColor", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Color de Texto", "color"), /* @__PURE__ */ (0, b.jsx)(Z, {
									value: t.color || "#ffffff",
									onChange: (e) => f("color", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Ph, {
									value: t.borderRadius || "6px",
									onChange: (e) => f("borderRadius", e),
									disabled: r
								})
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Alineación", "align"), /* @__PURE__ */ (0, b.jsx)(Th, {
									value: t.align || "center",
									options: [
										"left",
										"center",
										"right"
									],
									onChange: (e) => f("align", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Q, {
									value: t.padding || "12px 24px",
									onChange: (e) => f("padding", e),
									disabled: r
								})
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Mh, {
									value: t.margin || "0px",
									onChange: (e) => f("margin", e),
									disabled: r
								})
							})
						]
					});
					case "divider": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, b.jsx)("h3", {
								className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
								children: "Línea Divisora"
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Color de Línea", "color"), /* @__PURE__ */ (0, b.jsx)(Z, {
									value: t.color || "#cccccc",
									onChange: (e) => f("color", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Grosor (Thickness)", "thickness"), /* @__PURE__ */ (0, b.jsx)(Dh, {
									value: t.thickness || 2,
									onChange: (e) => f("thickness", e),
									min: 1,
									max: 20,
									unit: "px",
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Estilo de Borde", "style"), /* @__PURE__ */ (0, b.jsx)(Fh, {
									value: t.style || "solid",
									options: [
										{
											label: "Sólido",
											value: "solid"
										},
										{
											label: "Guiones (Dashed)",
											value: "dashed"
										},
										{
											label: "Puntos (Dotted)",
											value: "dotted"
										}
									],
									onChange: (e) => f("style", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Q, {
									value: t.padding || "10px",
									onChange: (e) => f("padding", e),
									disabled: r
								})
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Mh, {
									value: t.margin || "0px",
									onChange: (e) => f("margin", e),
									disabled: r
								})
							})
						]
					});
					case "spacer": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [/* @__PURE__ */ (0, b.jsx)("h3", {
							className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
							children: "Espaciador"
						}), /* @__PURE__ */ (0, b.jsxs)("div", {
							className: "flex flex-col gap-1.5",
							children: [h("Altura", "height"), /* @__PURE__ */ (0, b.jsx)(kh, {
								value: t.height || 20,
								onChange: (e) => f("height", e),
								min: 5,
								max: 200,
								unit: "px",
								disabled: r
							})]
						})]
					});
					case "social": {
						let e = t.networks || [
							{
								id: "facebook",
								name: "facebook",
								href: "https://facebook.com",
								enabled: !0
							},
							{
								id: "twitter",
								name: "twitter",
								href: "https://twitter.com",
								enabled: !0
							},
							{
								id: "instagram",
								name: "instagram",
								href: "https://instagram.com",
								enabled: !0
							},
							{
								id: "linkedin",
								name: "linkedin",
								href: "https://linkedin.com",
								enabled: !1
							},
							{
								id: "youtube",
								name: "youtube",
								href: "https://youtube.com",
								enabled: !1
							}
						], n = (t, n, r) => {
							let i = [...e];
							i[t] = {
								...i[t],
								[n]: r
							}, f("networks", i);
						};
						return /* @__PURE__ */ (0, b.jsxs)("div", {
							className: "flex flex-col gap-4",
							children: [
								/* @__PURE__ */ (0, b.jsx)("h3", {
									className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
									children: "Redes Sociales"
								}),
								/* @__PURE__ */ (0, b.jsx)("div", {
									className: "flex flex-col gap-3 border border-border-color rounded-md p-3 bg-bg-panel/50",
									children: e.map((e, t) => /* @__PURE__ */ (0, b.jsxs)("div", {
										className: "flex flex-col gap-2 border-b border-border-color pb-3 last:border-0 last:pb-0",
										children: [/* @__PURE__ */ (0, b.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, b.jsx)("span", {
												className: "text-xs font-semibold capitalize text-text-primary",
												children: e.name
											}), /* @__PURE__ */ (0, b.jsxs)("label", {
												className: "flex items-center cursor-pointer relative",
												children: [
													/* @__PURE__ */ (0, b.jsx)("input", {
														type: "checkbox",
														checked: e.enabled,
														onChange: (e) => n(t, "enabled", e.target.checked),
														disabled: r,
														className: "sr-only"
													}),
													/* @__PURE__ */ (0, b.jsx)("div", { className: `w-8 h-4 bg-bg-hover rounded-full shadow-inner transition-colors ${e.enabled ? "bg-primary" : ""}` }),
													/* @__PURE__ */ (0, b.jsx)("div", { className: `absolute w-3 h-3 bg-white rounded-full shadow inset-y-0.5 left-0.5 transition-transform ${e.enabled ? "transform translate-x-4" : ""}` })
												]
											})]
										}), e.enabled && /* @__PURE__ */ (0, b.jsx)("div", {
											className: "flex flex-col gap-1.5",
											children: /* @__PURE__ */ (0, b.jsx)("input", {
												type: "text",
												value: e.href,
												onChange: (e) => n(t, "href", e.target.value),
												placeholder: "URL",
												disabled: r,
												className: "bg-bg-hover border border-border-color text-text-primary p-1.5 px-2 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
											})
										})]
									}, e.id))
								}),
								/* @__PURE__ */ (0, b.jsxs)("div", {
									className: "flex flex-col gap-1.5",
									children: [h("Alineación", "align"), /* @__PURE__ */ (0, b.jsx)(Th, {
										value: t.align || "center",
										options: [
											"left",
											"center",
											"right"
										],
										onChange: (e) => f("align", e),
										disabled: r
									})]
								}),
								/* @__PURE__ */ (0, b.jsx)("div", {
									className: "flex flex-col gap-1.5",
									children: /* @__PURE__ */ (0, b.jsx)(Q, {
										value: t.padding || "10px",
										onChange: (e) => f("padding", e),
										disabled: r
									})
								}),
								/* @__PURE__ */ (0, b.jsx)("div", {
									className: "flex flex-col gap-1.5",
									children: /* @__PURE__ */ (0, b.jsx)(Mh, {
										value: t.margin || "0px",
										onChange: (e) => f("margin", e),
										disabled: r
									})
								})
							]
						});
					}
					case "video": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, b.jsx)("h3", {
								className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
								children: "Elemento de Vídeo"
							}),
							!u && g("Miniatura (Thumbnail)", "thumbnailUrl"),
							!u && /* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Enlace de Vídeo", "videoUrl"), /* @__PURE__ */ (0, b.jsxs)("div", {
									className: "flex gap-1.5 w-full items-center",
									children: [/* @__PURE__ */ (0, b.jsx)("div", {
										className: "flex-1",
										children: /* @__PURE__ */ (0, b.jsx)(Bh, {
											value: t.videoUrl || "",
											onChange: (e) => f("videoUrl", e),
											disabled: r
										})
									}), a && /* @__PURE__ */ (0, b.jsx)("button", {
										type: "button",
										onClick: () => a(t.videoUrl || "", (e) => f("videoUrl", e)),
										className: "p-2 border border-border-color bg-bg-hover text-text-secondary hover:text-text-primary rounded-md flex items-center justify-center cursor-pointer shrink-0 transition-all hover:bg-bg-panel",
										title: "Abrir gestor de videos",
										children: "🎥"
									})]
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Alineación", "align"), /* @__PURE__ */ (0, b.jsx)(Th, {
									value: t.align || "center",
									options: [
										"left",
										"center",
										"right"
									],
									onChange: (e) => f("align", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Q, {
									value: t.padding || "10px",
									onChange: (e) => f("padding", e),
									disabled: r
								})
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Mh, {
									value: t.margin || "0px",
									onChange: (e) => f("margin", e),
									disabled: r
								})
							})
						]
					});
					case "custom_html": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [/* @__PURE__ */ (0, b.jsx)("h3", {
							className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
							children: "HTML Personalizado"
						}), !u && /* @__PURE__ */ (0, b.jsxs)("div", {
							className: "flex flex-col gap-1.5",
							children: [h("Código HTML", "htmlContent"), /* @__PURE__ */ (0, b.jsx)("textarea", {
								value: t.htmlContent || "",
								onChange: (e) => f("htmlContent", e.target.value),
								disabled: r,
								className: "bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full font-mono disabled:opacity-55",
								rows: 8
							})]
						})]
					});
					case "countdown": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, b.jsx)("h3", {
								className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
								children: "Contador Regresivo"
							}),
							!u && /* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Fecha Límite", "endTime"), /* @__PURE__ */ (0, b.jsx)(zh, {
									value: t.endTime || "",
									onChange: (e) => f("endTime", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Color de Texto", "color"), /* @__PURE__ */ (0, b.jsx)(Z, {
									value: t.color || "#ffffff",
									onChange: (e) => f("color", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Color de Fondo", "backgroundColor"), /* @__PURE__ */ (0, b.jsx)(Z, {
									value: t.backgroundColor || "#333333",
									onChange: (e) => f("backgroundColor", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Alineación", "align"), /* @__PURE__ */ (0, b.jsx)(Th, {
									value: t.align || "center",
									options: [
										"left",
										"center",
										"right"
									],
									onChange: (e) => f("align", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Q, {
									value: t.padding || "10px",
									onChange: (e) => f("padding", e),
									disabled: r
								})
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Mh, {
									value: t.margin || "0px",
									onChange: (e) => f("margin", e),
									disabled: r
								})
							})
						]
					});
					case "accordion": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, b.jsx)("h3", {
								className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
								children: "Acordeón"
							}),
							!u && /* @__PURE__ */ (0, b.jsxs)(b.Fragment, { children: [/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Título", "title"), /* @__PURE__ */ (0, b.jsx)("input", {
									type: "text",
									value: t.title || "",
									onChange: (e) => {
										f("title", e.target.value.replace(/<\/?[^>]+(>|$)/g, ""));
									},
									disabled: r,
									className: "bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
								})]
							}), /* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Contenido", "content"), /* @__PURE__ */ (0, b.jsx)("textarea", {
									value: t.content || "",
									onChange: (e) => {
										f("content", e.target.value.replace(/<\/?[^>]+(>|$)/g, ""));
									},
									disabled: r,
									className: "bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55",
									rows: 4
								})]
							})] }),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Q, {
									value: t.padding || "10px",
									onChange: (e) => f("padding", e),
									disabled: r
								})
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Mh, {
									value: t.margin || "0px",
									onChange: (e) => f("margin", e),
									disabled: r
								})
							})
						]
					});
					case "carousel": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, b.jsx)("h3", {
								className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
								children: "Carrusel"
							}),
							!u && /* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Imágenes (URLs por comas)", "images"), /* @__PURE__ */ (0, b.jsx)("textarea", {
									value: t.images || "",
									onChange: (e) => f("images", e.target.value),
									disabled: r,
									className: "bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55",
									rows: 4,
									placeholder: "URL1, URL2, URL3"
								})]
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Q, {
									value: t.padding || "10px",
									onChange: (e) => f("padding", e),
									disabled: r
								})
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Mh, {
									value: t.margin || "0px",
									onChange: (e) => f("margin", e),
									disabled: r
								})
							})
						]
					});
					case "icon": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, b.jsx)("h3", {
								className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
								children: "Icono"
							}),
							!u && /* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Nombre de Icono", "iconName"), /* @__PURE__ */ (0, b.jsx)(Fh, {
									value: t.iconName || "Star",
									options: [
										{
											label: "★ Estrella",
											value: "Star"
										},
										{
											label: "❤ Corazón",
											value: "Heart"
										},
										{
											label: "☺ Emoji Sonrisa",
											value: "Smile"
										},
										{
											label: "⚙ Tuerca",
											value: "Settings"
										},
										{
											label: "✉ Correo",
											value: "Mail"
										},
										{
											label: "ℹ Info",
											value: "Info"
										}
									],
									onChange: (e) => f("iconName", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Tamaño", "size"), /* @__PURE__ */ (0, b.jsx)(Dh, {
									value: t.size || 24,
									onChange: (e) => f("size", e),
									min: 16,
									max: 128,
									unit: "px",
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Color", "color"), /* @__PURE__ */ (0, b.jsx)(Z, {
									value: t.color || "#4f46e5",
									onChange: (e) => f("color", e),
									disabled: r
								})]
							}),
							!u && /* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Enlace (Opcional)", "url"), /* @__PURE__ */ (0, b.jsx)(Bh, {
									value: t.url || "",
									onChange: (e) => f("url", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Alineación", "align"), /* @__PURE__ */ (0, b.jsx)(Th, {
									value: t.align || "center",
									options: [
										"left",
										"center",
										"right"
									],
									onChange: (e) => f("align", e),
									disabled: r
								})]
							})
						]
					});
					case "nav_menu": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, b.jsx)("h3", {
								className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
								children: "Menú de Navegación"
							}),
							!u && /* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Items (JSON)", "items"), /* @__PURE__ */ (0, b.jsx)("textarea", {
									value: typeof t.items == "string" ? t.items : JSON.stringify(t.items || [
										{
											label: "Inicio",
											url: "#"
										},
										{
											label: "Servicios",
											url: "#"
										},
										{
											label: "Contacto",
											url: "#"
										}
									], null, 2),
									onChange: (e) => {
										try {
											f("items", JSON.parse(e.target.value));
										} catch {
											f("items", e.target.value);
										}
									},
									disabled: r,
									className: "bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full font-mono disabled:opacity-55",
									rows: 5
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Color de Enlaces", "color"), /* @__PURE__ */ (0, b.jsx)(Z, {
									value: t.color || "#4f46e5",
									onChange: (e) => f("color", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Color de Fondo", "backgroundColor"), /* @__PURE__ */ (0, b.jsx)(Z, {
									value: t.backgroundColor || "transparent",
									onChange: (e) => f("backgroundColor", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Tipografía", "fontFamily"), /* @__PURE__ */ (0, b.jsx)(Rh, {
									value: t.fontFamily || "Arial",
									onChange: (e) => f("fontFamily", e),
									disabled: r,
									googleFonts: o
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Tamaño de Texto", "fontSize"), /* @__PURE__ */ (0, b.jsx)(Dh, {
									value: t.fontSize || 14,
									onChange: (e) => f("fontSize", e),
									min: 10,
									max: 24,
									unit: "px",
									disabled: r
								})]
							}),
							!u && /* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Separador", "separator"), /* @__PURE__ */ (0, b.jsx)("input", {
									type: "text",
									value: t.separator || " | ",
									onChange: (e) => f("separator", e.target.value),
									disabled: r,
									className: "bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Alineación", "align"), /* @__PURE__ */ (0, b.jsx)(Th, {
									value: t.align || "center",
									options: [
										"left",
										"center",
										"right"
									],
									onChange: (e) => f("align", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Q, {
									value: t.padding || "10px",
									onChange: (e) => f("padding", e),
									disabled: r
								})
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Mh, {
									value: t.margin || "0px",
									onChange: (e) => f("margin", e),
									disabled: r
								})
							})
						]
					});
					case "image_text": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, b.jsx)("h3", {
								className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
								children: "Imagen + Texto"
							}),
							!u && g("URL de Imagen", "imageUrl"),
							!u && /* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Contenido de Texto", "text"), /* @__PURE__ */ (0, b.jsx)("textarea", {
									value: t.text || "",
									onChange: (e) => {
										f("text", e.target.value.replace(/<\/?[^>]+(>|$)/g, ""));
									},
									disabled: r,
									className: "bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55",
									rows: 4
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Posición de Imagen", "imagePosition"), /* @__PURE__ */ (0, b.jsx)(Fh, {
									value: t.imagePosition || "left",
									options: [{
										label: "Izquierda",
										value: "left"
									}, {
										label: "Derecha",
										value: "right"
									}],
									onChange: (e) => f("imagePosition", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Ancho de Imagen", "imageWidth"), /* @__PURE__ */ (0, b.jsx)(kh, {
									value: t.imageWidth || 40,
									onChange: (e) => f("imageWidth", e),
									min: 20,
									max: 80,
									unit: "%",
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Tipografía", "fontFamily"), /* @__PURE__ */ (0, b.jsx)(Rh, {
									value: t.fontFamily || "Arial",
									onChange: (e) => f("fontFamily", e),
									disabled: r,
									googleFonts: o
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Tamaño de Texto", "fontSize"), /* @__PURE__ */ (0, b.jsx)(Dh, {
									value: t.fontSize || 14,
									onChange: (e) => f("fontSize", e),
									min: 10,
									max: 32,
									unit: "px",
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Color de Texto", "color"), /* @__PURE__ */ (0, b.jsx)(Z, {
									value: t.color || "#333333",
									onChange: (e) => f("color", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Q, {
									value: t.padding || "10px",
									onChange: (e) => f("padding", e),
									disabled: r
								})
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Mh, {
									value: t.margin || "0px",
									onChange: (e) => f("margin", e),
									disabled: r
								})
							})
						]
					});
					case "product_card": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, b.jsx)("h3", {
								className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
								children: "Tarjeta de Producto"
							}),
							!u && g("URL de Imagen", "imageUrl"),
							!u && /* @__PURE__ */ (0, b.jsxs)(b.Fragment, { children: [
								/* @__PURE__ */ (0, b.jsxs)("div", {
									className: "flex flex-col gap-1.5",
									children: [h("Título de Producto", "title"), /* @__PURE__ */ (0, b.jsx)("input", {
										type: "text",
										value: t.title || "",
										onChange: (e) => {
											f("title", e.target.value.replace(/<\/?[^>]+(>|$)/g, ""));
										},
										disabled: r,
										className: "bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
									})]
								}),
								/* @__PURE__ */ (0, b.jsxs)("div", {
									className: "flex flex-col gap-1.5",
									children: [h("Precio", "price"), /* @__PURE__ */ (0, b.jsx)("input", {
										type: "text",
										value: t.price || "",
										onChange: (e) => {
											f("price", e.target.value.replace(/<\/?[^>]+(>|$)/g, ""));
										},
										disabled: r,
										className: "bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
									})]
								}),
								/* @__PURE__ */ (0, b.jsxs)("div", {
									className: "flex flex-col gap-1.5",
									children: [h("Texto del Botón", "buttonText"), /* @__PURE__ */ (0, b.jsx)("input", {
										type: "text",
										value: t.buttonText || "",
										onChange: (e) => {
											f("buttonText", e.target.value.replace(/<\/?[^>]+(>|$)/g, ""));
										},
										disabled: r,
										className: "bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
									})]
								}),
								/* @__PURE__ */ (0, b.jsxs)("div", {
									className: "flex flex-col gap-1.5",
									children: [h("Destino Botón", "buttonUrl"), /* @__PURE__ */ (0, b.jsx)(Bh, {
										value: t.buttonUrl || "",
										onChange: (e) => f("buttonUrl", e),
										disabled: r
									})]
								})
							] }),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Color del Botón", "color"), /* @__PURE__ */ (0, b.jsx)(Z, {
									value: t.color || "#4f46e5",
									onChange: (e) => f("color", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Color de Fondo", "backgroundColor"), /* @__PURE__ */ (0, b.jsx)(Z, {
									value: t.backgroundColor || "#ffffff",
									onChange: (e) => f("backgroundColor", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Ph, {
									value: t.borderRadius || "8px",
									onChange: (e) => f("borderRadius", e),
									disabled: r
								})
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Q, {
									value: t.padding || "15px",
									onChange: (e) => f("padding", e),
									disabled: r
								})
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Mh, {
									value: t.margin || "0px",
									onChange: (e) => f("margin", e),
									disabled: r
								})
							})
						]
					});
					case "quote": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, b.jsx)("h3", {
								className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
								children: "Testimonial / Cita"
							}),
							!u && /* @__PURE__ */ (0, b.jsxs)(b.Fragment, { children: [
								/* @__PURE__ */ (0, b.jsxs)("div", {
									className: "flex flex-col gap-1.5",
									children: [h("Texto de la Cita", "text"), /* @__PURE__ */ (0, b.jsx)("textarea", {
										value: t.text || "",
										onChange: (e) => {
											f("text", e.target.value.replace(/<\/?[^>]+(>|$)/g, ""));
										},
										disabled: r,
										className: "bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55",
										rows: 4
									})]
								}),
								/* @__PURE__ */ (0, b.jsxs)("div", {
									className: "flex flex-col gap-1.5",
									children: [h("Autor", "author"), /* @__PURE__ */ (0, b.jsx)("input", {
										type: "text",
										value: t.author || "",
										onChange: (e) => {
											f("author", e.target.value.replace(/<\/?[^>]+(>|$)/g, ""));
										},
										disabled: r,
										className: "bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
									})]
								}),
								g("Avatar (URL)", "avatarUrl")
							] }),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Color de Texto", "color"), /* @__PURE__ */ (0, b.jsx)(Z, {
									value: t.color || "#555555",
									onChange: (e) => f("color", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Color de Fondo", "backgroundColor"), /* @__PURE__ */ (0, b.jsx)(Z, {
									value: t.backgroundColor || "#f9f9f9",
									onChange: (e) => f("backgroundColor", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Ph, {
									value: t.borderRadius || "4px",
									onChange: (e) => f("borderRadius", e),
									disabled: r
								})
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Q, {
									value: t.padding || "15px",
									onChange: (e) => f("padding", e),
									disabled: r
								})
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Mh, {
									value: t.margin || "0px",
									onChange: (e) => f("margin", e),
									disabled: r
								})
							})
						]
					});
					case "table": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, b.jsx)("h3", {
								className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
								children: "Propiedades de Tabla"
							}),
							!u && /* @__PURE__ */ (0, b.jsxs)(b.Fragment, { children: [
								/* @__PURE__ */ (0, b.jsxs)("div", {
									className: "flex flex-col gap-1.5",
									children: [h("Filas", "rows"), /* @__PURE__ */ (0, b.jsx)(Dh, {
										value: t.rows || 3,
										onChange: (e) => f("rows", e),
										min: 1,
										max: 50,
										disabled: r
									})]
								}),
								/* @__PURE__ */ (0, b.jsxs)("div", {
									className: "flex flex-col gap-1.5",
									children: [h("Columnas", "cols"), /* @__PURE__ */ (0, b.jsx)(Dh, {
										value: t.cols || 3,
										onChange: (e) => f("cols", e),
										min: 1,
										max: 12,
										disabled: r
									})]
								}),
								/* @__PURE__ */ (0, b.jsx)("div", {
									className: "flex flex-col gap-1.5",
									children: /* @__PURE__ */ (0, b.jsxs)("label", {
										className: "flex items-center gap-2 cursor-pointer",
										children: [/* @__PURE__ */ (0, b.jsx)("input", {
											type: "checkbox",
											checked: t.showHeaders !== !1,
											onChange: (e) => f("showHeaders", e.target.checked),
											disabled: r,
											className: "accent-primary"
										}), /* @__PURE__ */ (0, b.jsx)("span", {
											className: "text-xs font-semibold text-text-secondary",
											children: "Mostrar Cabeceras (th)"
										})]
									})
								})
							] }),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Alineación", "align"), /* @__PURE__ */ (0, b.jsx)(Th, {
									value: t.align || "center",
									options: [
										"left",
										"center",
										"right"
									],
									onChange: (e) => f("align", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Color de Borde", "borderColor"), /* @__PURE__ */ (0, b.jsx)(Z, {
									value: t.borderColor || "#e5e7eb",
									onChange: (e) => f("borderColor", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Q, {
									value: t.padding || "10px",
									onChange: (e) => f("padding", e),
									disabled: r
								})
							})
						]
					});
					case "wrapper": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, b.jsx)("h3", {
								className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
								children: "Propiedades de Wrapper"
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Color de Fondo", "backgroundColor"), /* @__PURE__ */ (0, b.jsx)(Z, {
									value: t.backgroundColor || "transparent",
									onChange: (e) => f("backgroundColor", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Q, {
									value: t.padding || "20px 0px",
									onChange: (e) => f("padding", e),
									disabled: r
								})
							})
						]
					});
					case "group": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, b.jsx)("h3", {
								className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
								children: "Propiedades de Grupo"
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Alineación Vertical", "verticalAlign"), /* @__PURE__ */ (0, b.jsx)(Fh, {
									value: t.verticalAlign || "top",
									options: [
										{
											label: "Superior",
											value: "top"
										},
										{
											label: "Medio",
											value: "middle"
										},
										{
											label: "Inferior",
											value: "bottom"
										}
									],
									onChange: (e) => f("verticalAlign", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Ancho", "width"), /* @__PURE__ */ (0, b.jsx)("input", {
									type: "text",
									value: t.width || "100%",
									onChange: (e) => f("width", e.target.value),
									disabled: r,
									className: "bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
								})]
							})
						]
					});
					case "hero": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, b.jsx)("h3", {
								className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
								children: "Propiedades de Hero"
							}),
							!u && /* @__PURE__ */ (0, b.jsxs)(b.Fragment, { children: [
								/* @__PURE__ */ (0, b.jsxs)("div", {
									className: "flex flex-col gap-1.5",
									children: [h("Modo", "mode"), /* @__PURE__ */ (0, b.jsx)(Fh, {
										value: t.mode || "fluid-height",
										options: [{
											label: "Altura Fluida",
											value: "fluid-height"
										}, {
											label: "Altura Fija",
											value: "fixed-height"
										}],
										onChange: (e) => f("mode", e),
										disabled: r
									})]
								}),
								g("Imagen de Fondo (URL)", "backgroundImageUrl"),
								/* @__PURE__ */ (0, b.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, b.jsxs)("div", {
										className: "flex-1 flex flex-col gap-1.5",
										children: [h("Ancho Fondo", "backgroundWidth"), /* @__PURE__ */ (0, b.jsx)("input", {
											type: "text",
											value: t.backgroundWidth || "600px",
											onChange: (e) => f("backgroundWidth", e.target.value),
											disabled: r,
											className: "bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
										})]
									}), /* @__PURE__ */ (0, b.jsxs)("div", {
										className: "flex-1 flex flex-col gap-1.5",
										children: [h("Alto Fondo", "backgroundHeight"), /* @__PURE__ */ (0, b.jsx)("input", {
											type: "text",
											value: t.backgroundHeight || "400px",
											onChange: (e) => f("backgroundHeight", e.target.value),
											disabled: r,
											className: "bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
										})]
									})]
								})
							] }),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Color de Fondo", "backgroundColor"), /* @__PURE__ */ (0, b.jsx)(Z, {
									value: t.backgroundColor || "#000000",
									onChange: (e) => f("backgroundColor", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Q, {
									value: t.padding || "100px 0px",
									onChange: (e) => f("padding", e),
									disabled: r
								})
							})
						]
					});
					case "slider": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, b.jsx)("h3", {
								className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
								children: "Slider (Swiper)"
							}),
							!u && /* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Imágenes (URLs por comas)", "images"), /* @__PURE__ */ (0, b.jsx)("textarea", {
									value: t.images || "",
									onChange: (e) => f("images", e.target.value),
									disabled: r,
									className: "bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55",
									rows: 4,
									placeholder: "URL1, URL2, URL3"
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Auto-play Delay (ms)", "delay"), /* @__PURE__ */ (0, b.jsx)(Dh, {
									value: t.delay || 3e3,
									onChange: (e) => f("delay", e),
									min: 1e3,
									max: 1e4,
									step: 500,
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Diapositivas Visibles", "slidesPerView"), /* @__PURE__ */ (0, b.jsx)(Dh, {
									value: t.slidesPerView || 1,
									onChange: (e) => f("slidesPerView", e),
									min: 1,
									max: 5,
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Q, {
									value: t.padding || "0px",
									onChange: (e) => f("padding", e),
									disabled: r
								})
							})
						]
					});
					case "gallery": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, b.jsx)("h3", {
								className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
								children: "Galería (PhotoSwipe)"
							}),
							!u && /* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Imágenes (URLs por comas)", "images"), /* @__PURE__ */ (0, b.jsx)("textarea", {
									value: t.images || "",
									onChange: (e) => f("images", e.target.value),
									disabled: r,
									className: "bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55",
									rows: 4,
									placeholder: "URL1, URL2, URL3"
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Columnas", "columns"), /* @__PURE__ */ (0, b.jsx)(Dh, {
									value: t.columns || 3,
									onChange: (e) => f("columns", e),
									min: 1,
									max: 6,
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Espaciado (Gap)", "gap"), /* @__PURE__ */ (0, b.jsx)(Dh, {
									value: t.gap || 10,
									onChange: (e) => f("gap", e),
									min: 0,
									max: 50,
									unit: "px",
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Q, {
									value: t.padding || "10px",
									onChange: (e) => f("padding", e),
									disabled: r
								})
							})
						]
					});
					case "flex_layout": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, b.jsx)("h3", {
								className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
								children: "Flex Layout"
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Dirección", "direction"), /* @__PURE__ */ (0, b.jsx)(Fh, {
									value: t.direction || "row",
									options: [{
										label: "Fila (Row)",
										value: "row"
									}, {
										label: "Columna (Col)",
										value: "column"
									}],
									onChange: (e) => f("direction", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Alineación Principal", "justifyContent"), /* @__PURE__ */ (0, b.jsx)(Fh, {
									value: t.justifyContent || "flex-start",
									options: [
										{
											label: "Inicio",
											value: "flex-start"
										},
										{
											label: "Centro",
											value: "center"
										},
										{
											label: "Separación",
											value: "space-between"
										}
									],
									onChange: (e) => f("justifyContent", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Alineación Transversal", "alignItems"), /* @__PURE__ */ (0, b.jsx)(Fh, {
									value: t.alignItems || "flex-start",
									options: [
										{
											label: "Inicio",
											value: "flex-start"
										},
										{
											label: "Centro",
											value: "center"
										},
										{
											label: "Estirar",
											value: "stretch"
										}
									],
									onChange: (e) => f("alignItems", e),
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Espaciado (Gap)", "gap"), /* @__PURE__ */ (0, b.jsx)(Dh, {
									value: t.gap || 16,
									onChange: (e) => f("gap", e),
									min: 0,
									max: 100,
									unit: "px",
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Q, {
									value: t.padding || "10px",
									onChange: (e) => f("padding", e),
									disabled: r
								})
							})
						]
					});
					case "grid_layout": return /* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, b.jsx)("h3", {
								className: "text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2",
								children: "Grid Layout"
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Columnas", "columns"), /* @__PURE__ */ (0, b.jsx)(Dh, {
									value: t.columns || 2,
									onChange: (e) => f("columns", e),
									min: 1,
									max: 12,
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [h("Espaciado (Gap)", "gap"), /* @__PURE__ */ (0, b.jsx)(Dh, {
									value: t.gap || 16,
									onChange: (e) => f("gap", e),
									min: 0,
									max: 100,
									unit: "px",
									disabled: r
								})]
							}),
							/* @__PURE__ */ (0, b.jsx)("div", {
								className: "flex flex-col gap-1.5",
								children: /* @__PURE__ */ (0, b.jsx)(Q, {
									value: t.padding || "10px",
									onChange: (e) => f("padding", e),
									disabled: r
								})
							})
						]
					});
					default: return null;
				}
			})(), !r && /* @__PURE__ */ (0, b.jsx)("div", {
				className: "mt-6 border-t border-border-color pt-5 shrink-0",
				children: /* @__PURE__ */ (0, b.jsxs)("button", {
					onClick: () => n(e.id),
					className: "w-full bg-red-500/10 text-danger border border-red-500/20 p-2.5 rounded-md text-xs font-semibold cursor-pointer flex items-center justify-center gap-2 transition-all hover:bg-danger hover:text-white hover:border-danger",
					children: [/* @__PURE__ */ (0, b.jsx)(_t, { size: 16 }), /* @__PURE__ */ (0, b.jsx)("span", { children: s("deleteBlock") })]
				})
			})]
		})]
	});
}, Uh = ({ htmlContent: e, deviceMode: t, onSelectNode: n, onDropElement: r, onDeleteNode: i, onCloneNode: a, onUpdateNodeContent: o, onUpdateNodeProperties: s, onDoubleClickImage: l }) => {
	let u = f(null), d = f("");
	return c(() => {
		let e = (e) => {
			e.data && (e.data.type === "SELECT_ELEMENT" ? n(e.data.id) : e.data.type === "DROP_ELEMENT" ? r?.(e.data.blockType, e.data.targetId) : e.data.type === "DELETE_ELEMENT" ? i?.(e.data.id) : e.data.type === "CLONE_ELEMENT" ? a?.(e.data.id) : e.data.type === "UPDATE_CONTENT" ? o?.(e.data.id, e.data.content, e.data.propName) : e.data.type === "UPDATE_PROPERTIES" ? s?.(e.data.id, e.data.properties) : e.data.type === "DOUBLE_CLICK_IMAGE" && l?.(e.data.id));
		};
		return window.addEventListener("message", e), () => {
			window.removeEventListener("message", e);
		};
	}, [
		n,
		r,
		i,
		a,
		o,
		s,
		l
	]), c(() => {
		let t = u.current;
		if (!t) return;
		let n = t.contentDocument || t.contentWindow?.document;
		if (!d.current || !n || !n.body || n.body.innerHTML.trim() === "") {
			t.srcdoc = e, d.current = e, setTimeout(() => {
				t.contentDocument || t.contentWindow?.document;
			}, 300);
			return;
		}
		try {
			let r = new DOMParser().parseFromString(e, "text/html"), i = Array.from(n.querySelectorAll("[data-id]")), a = Array.from(r.querySelectorAll("[data-id]")), o = i.map((e) => e.getAttribute("data-id")), s = a.map((e) => e.getAttribute("data-id"));
			if (o.length === s.length && o.every((e, t) => e === s[t]) && i.length > 0) {
				let o = /* @__PURE__ */ new Set(), s = [];
				a.forEach((e, t) => {
					let n = i[t];
					n.outerHTML !== e.outerHTML && (s.push({
						current: n,
						new: e
					}), o.add(n.getAttribute("data-id") || ""));
				}), s.forEach(({ current: r, new: i }) => {
					if (s.some(({ current: e }) => e !== r && r.contains(e))) return;
					let a = i.getAttribute("data-id");
					if (!(window.document.activeElement && (window.document.activeElement.tagName === "INPUT" || window.document.activeElement.tagName === "TEXTAREA" || window.document.activeElement.tagName === "SELECT")) && n.activeElement && (r === n.activeElement || r.contains(n.activeElement))) return;
					r.outerHTML = i.outerHTML, !n.querySelector(`[data-id="${a}"]`) && a && (console.warn("[Canvas] outerHTML replacement failed for", a, "- reloading iframe"), t.srcdoc = e);
					let o = n.querySelector(`[data-id="${a}"] [data-prop="content"]`);
					if (o) {
						let e = i.querySelector("[data-prop=\"content\"]");
						e && o.textContent !== e.textContent && (o.textContent = e.textContent);
					}
				});
				let c = n.querySelector("head style"), l = r.querySelector("head style");
				c && l && c.innerHTML !== l.innerHTML && (c.innerHTML = l.innerHTML);
				let u = r.body.getAttribute("style");
				n.body.getAttribute("style") !== u && n.body.setAttribute("style", u || "");
				let d = r.body.getAttribute("class");
				n.body.getAttribute("class") !== d && n.body.setAttribute("class", d || "");
			} else t.srcdoc = e;
		} catch (n) {
			console.warn("DOM patching failed, reloading iframe", n), t.srcdoc = e;
		}
		d.current = e;
	}, [e]), /* @__PURE__ */ (0, b.jsx)("main", {
		className: "flex-1 bg-bg-app flex items-center justify-center p-6 overflow-hidden h-full",
		children: /* @__PURE__ */ (0, b.jsxs)("div", {
			className: "bg-bg-panel border border-border-color rounded-xl shadow-lg flex flex-col h-full overflow-hidden relative",
			style: {
				width: (() => {
					switch (t) {
						case "mobile": return "375px";
						case "tablet": return "600px";
						default: return "100%";
					}
				})(),
				maxWidth: "100%",
				transition: "width 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
			},
			children: [/* @__PURE__ */ (0, b.jsx)("div", {
				className: "h-8 bg-bg-hover border-b border-border-color flex items-center justify-center px-4",
				children: /* @__PURE__ */ (0, b.jsxs)("span", {
					className: "text-[10px] font-semibold font-mono text-text-muted uppercase",
					children: [
						t === "desktop" && "100% (Desktop)",
						t === "tablet" && "600px x 800px (Tablet)",
						t === "mobile" && "375px x 667px (Mobile)"
					]
				})
			}), /* @__PURE__ */ (0, b.jsx)("iframe", {
				ref: u,
				title: "Email Builder Canvas",
				sandbox: "allow-same-origin allow-scripts",
				className: "flex-1 border-none w-full h-full bg-[#f8fafc]",
				onLoad: () => {
					let e = u.current;
					if (!e) return;
					let t = e.contentDocument || e.contentWindow?.document;
					if (!t) return;
					let n = t.body;
					n.addEventListener("dragover", (e) => {
						e.preventDefault();
						let n = e.target.closest("[data-id]");
						n && (t.querySelectorAll(".drag-hover").forEach((e) => e.classList.remove("drag-hover")), n.classList.add("drag-hover"));
					}), n.addEventListener("dragleave", (e) => {
						let t = e.target.closest("[data-id]");
						t && t.classList.remove("drag-hover");
					}), n.addEventListener("drop", (e) => {
						e.preventDefault(), t.querySelectorAll(".drag-hover").forEach((e) => e.classList.remove("drag-hover"));
						let n = e.dataTransfer?.getData("text/plain");
						if (!n) return;
						let r = e.target.closest("[data-id]"), i = r ? r.getAttribute("data-id") : null;
						window.parent.postMessage({
							type: "DROP_ELEMENT",
							blockType: n,
							targetId: i
						}, "*");
					});
				}
			})]
		})
	});
}, Wh = ({ mjmlCode: e, htmlCode: t, isOpen: n, onToggle: r }) => {
	let { t: i } = te(), [a, o] = p("mjml"), [s, c] = p(!1), l = new Blob([t]).size, u = (l / 1024).toFixed(2), d = l > 102400, f = () => {
		let n = a === "mjml" ? e : t;
		navigator.clipboard.writeText(n), c(!0), setTimeout(() => c(!1), 2e3);
	}, m = (e) => {
		if (!e) return "";
		let t = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
		return t = t.replace(/&lt;(\/?[a-zA-Z0-9:-]+)/g, "&lt;<span class=\"text-[#f43f5e] font-semibold\">$1</span>"), t = t.replace(/(\s)([a-zA-Z0-9:-]+)(=)/g, "$1<span class=\"text-[#fb923c]\">$2</span>$3"), t = t.replace(/("[^"]*")/g, "<span class=\"text-[#a3e635]\">$1</span>"), t = t.replace(/(&lt;!--[\s\S]*?--&gt;)/g, "<span class=\"text-[#9ca3af] italic\">$1</span>"), t;
	}, h = (a === "mjml" ? e : t).split("\n");
	return /* @__PURE__ */ (0, b.jsxs)("div", {
		className: `bg-bg-panel border-t border-border-color flex flex-col absolute bottom-0 left-[344px] right-[300px] z-40 shadow-lg builder-code-drawer ${n ? "h-[300px]" : "h-10"}`,
		children: [/* @__PURE__ */ (0, b.jsxs)("div", {
			className: "h-10 px-4 flex items-center justify-between cursor-pointer bg-bg-hover shrink-0",
			onClick: r,
			children: [/* @__PURE__ */ (0, b.jsxs)("div", {
				className: "flex items-center gap-2 flex-1 min-w-0",
				children: [
					/* @__PURE__ */ (0, b.jsx)(ft, {
						size: 16,
						className: "text-primary shrink-0"
					}),
					/* @__PURE__ */ (0, b.jsx)("h2", {
						className: "text-xs font-semibold shrink-0",
						children: i("codeView")
					}),
					/* @__PURE__ */ (0, b.jsxs)("span", {
						className: `font-mono text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0 ${d ? "bg-red-500/15 text-danger" : "bg-green-500/15 text-success"}`,
						children: [u, " KB"]
					}),
					/* @__PURE__ */ (0, b.jsx)("span", {
						className: "text-[11px] text-text-secondary truncate max-w-[200px] md:max-w-md hidden sm:inline",
						children: i(d ? "gmailWarning" : "gmailOk")
					})
				]
			}), /* @__PURE__ */ (0, b.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, b.jsx)("button", {
					onClick: (e) => {
						e.stopPropagation(), f();
					},
					className: "bg-transparent border-none text-text-secondary p-1 cursor-pointer rounded hover:bg-border-color hover:text-text-primary flex items-center justify-center",
					title: "Copiar código",
					id: "btn-copy-code",
					children: s ? /* @__PURE__ */ (0, b.jsx)(_e, {
						size: 14,
						className: "text-success"
					}) : /* @__PURE__ */ (0, b.jsx)(Ee, { size: 14 })
				}), /* @__PURE__ */ (0, b.jsx)("button", {
					className: "bg-transparent border-none text-text-secondary p-1 cursor-pointer rounded hover:bg-border-color hover:text-text-primary flex items-center justify-center",
					children: n ? /* @__PURE__ */ (0, b.jsx)(ve, { size: 16 }) : /* @__PURE__ */ (0, b.jsx)(xe, { size: 16 })
				})]
			})]
		}), n && /* @__PURE__ */ (0, b.jsxs)("div", {
			className: "flex-1 flex flex-col overflow-hidden",
			children: [/* @__PURE__ */ (0, b.jsxs)("div", {
				className: "flex border-b border-border-color bg-bg-panel shrink-0",
				children: [/* @__PURE__ */ (0, b.jsx)("button", {
					className: `bg-transparent border-none border-b-2 p-2 px-4 text-[11px] font-semibold cursor-pointer ${a === "mjml" ? "border-b-primary text-primary" : "border-b-transparent text-text-secondary"}`,
					onClick: () => o("mjml"),
					id: "tab-btn-mjml",
					children: "MJML"
				}), /* @__PURE__ */ (0, b.jsx)("button", {
					className: `bg-transparent border-none border-b-2 p-2 px-4 text-[11px] font-semibold cursor-pointer ${a === "html" ? "border-b-primary text-primary" : "border-b-transparent text-text-secondary"}`,
					onClick: () => o("html"),
					id: "tab-btn-html",
					children: "HTML"
				})]
			}), /* @__PURE__ */ (0, b.jsxs)("div", {
				className: "flex-1 bg-[#0f172a] text-[#e2e8f0] overflow-auto p-4 flex font-mono text-xs select-text",
				children: [/* @__PURE__ */ (0, b.jsx)("div", {
					className: "select-none text-right pr-3 border-r border-[#334155] text-[#64748b] shrink-0 flex flex-col font-mono text-xs",
					children: h.map((e, t) => /* @__PURE__ */ (0, b.jsx)("span", {
						className: "block h-5 leading-5 min-w-[24px]",
						children: t + 1
					}, t))
				}), /* @__PURE__ */ (0, b.jsx)("div", {
					className: "pl-3 overflow-x-auto flex-1 flex flex-col font-mono text-xs",
					children: h.map((e, t) => /* @__PURE__ */ (0, b.jsx)("span", {
						className: "block h-5 leading-5 whitespace-pre",
						dangerouslySetInnerHTML: { __html: m(e) || "&nbsp;" }
					}, t))
				})]
			})]
		})]
	});
}, Gh = [
	"arial",
	"georgia",
	"verdana",
	"tahoma",
	"times new roman",
	"courier new",
	"trebuchet ms",
	"sans-serif",
	"serif",
	"monospace",
	"system-ui",
	"-apple-system"
], Kh = (e, t) => {
	let n = /* @__PURE__ */ new Set();
	t && n.add(t);
	let r = (e) => {
		e.properties?.fontFamily && n.add(e.properties.fontFamily), e.children && e.children.forEach(r);
	};
	return e.forEach(r), Array.from(n);
}, qh = (e, t) => {
	let n = Kh(e, t?.globalFontFamily).filter((e) => !Gh.includes(e.toLowerCase())), r = "";
	n.forEach((e) => {
		let t = e.replace(/\s+/g, "+");
		r += `    <mj-font name="${e}" href="https://fonts.googleapis.com/css?family=${t}" />\n`;
	});
	let i = t?.title ? `    <mj-title>${t.title}</mj-title>\n` : "", a = t?.previewText ? `    <mj-preview>${t.previewText}</mj-preview>\n` : "", o = t?.globalFontFamily ? ` font-family="${t.globalFontFamily}"` : " font-family=\"system-ui, -apple-system, sans-serif\"", s = t?.globalTextColor ? ` color="${t.globalTextColor}"` : "", c = t?.breakpoint ? `    <mj-breakpoint width="${t.breakpoint}" />\n` : "", l = t?.globalBackgroundColor ? ` background-color="${t.globalBackgroundColor}"` : "", u = `<mjml>\n  <mj-head>\n${i}${a}${c}${r}    <mj-attributes>\n      <mj-all${o}${s} />\n    </mj-attributes>\n  </mj-head>\n  <mj-body${l}>\n`, d = (e, t = "    ") => {
		let n = e.properties, r = (e, t) => n[e] === void 0 ? "" : ` ${t}="${n[e]}"`, i = ` data-b-type="${e.type}" data-b-props="${JSON.stringify(n).replace(/"/g, "&quot;")}"`;
		switch (e.type) {
			case "section": {
				let r = `${t}<mj-section${n.backgroundColor ? ` background-color="${n.backgroundColor}"` : ""}${n.padding ? ` padding="${n.padding}"` : ""}${i}>\n`;
				return e.children && e.children.forEach((e) => {
					r += d(e, t + "  ");
				}), r += `${t}</mj-section>\n`, r;
			}
			case "column": {
				let r = `${t}<mj-column${n.width ? ` width="${n.width}"` : ""}${n.padding ? ` padding="${n.padding}"` : ""}${i}>\n`;
				return e.children && e.children.forEach((e) => {
					r += d(e, t + "  ");
				}), r += `${t}</mj-column>\n`, r;
			}
			case "text":
			case "heading":
			case "paragraph": return `${t}<mj-text${r("color", "color")}${r("fontSize", "font-size")}${r("align", "align")}${r("padding", "padding")}${r("fontFamily", "font-family")}${r("fontWeight", "font-weight")}${r("fontStyle", "font-style")}${r("textDecoration", "text-decoration")}${i}>${n.content || ""}</mj-text>\n`;
			case "image": return `${t}<mj-image${n.url ? ` src="${n.url}"` : " src=\"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60\""}${n.altText ? ` alt="${n.altText}"` : " alt=\"image\""}${r("align", "align")}${r("padding", "padding")}${r("borderRadius", "border-radius")}${i} />\n`;
			case "button": return `${t}<mj-button${n.url ? ` href="${n.url}"` : " href=\"#\""}${r("backgroundColor", "background-color")}${r("color", "color")}${r("borderRadius", "border-radius")}${r("padding", "padding")}${r("align", "align")}${r("fontFamily", "font-family")}${r("fontSize", "font-size")}${i}>${n.content || ""}</mj-button>\n`;
			case "divider": return `${t}<mj-divider${r("color", "border-color")}${r("thickness", "border-width")}${r("padding", "padding")}${i} />\n`;
			case "spacer": return `${t}<mj-spacer${r("height", "height")}${i} />\n`;
			case "social": {
				let e = n.align ? ` align="${n.align}"` : "", r = n.padding ? ` padding="${n.padding}"` : "", a = n.networks || [
					{
						id: "facebook",
						name: "facebook",
						href: "https://facebook.com",
						enabled: !0
					},
					{
						id: "twitter",
						name: "twitter",
						href: "https://twitter.com",
						enabled: !0
					},
					{
						id: "instagram",
						name: "instagram",
						href: "https://instagram.com",
						enabled: !0
					}
				], o = "";
				return a.forEach((e) => {
					e.enabled && (o += `${t}  <mj-social-element name="${e.name}" href="${e.href}" />\n`);
				}), `${t}<mj-social${e}${r}${i}>\n${o}${t}</mj-social>\n`;
			}
			case "video": return `${t}<mj-image${n.thumbnailUrl ? ` src="${n.thumbnailUrl}"` : " src=\"https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60\""}${n.videoUrl ? ` href="${n.videoUrl}"` : " href=\"#\""}${r("align", "align")}${r("padding", "padding")}${i} />\n`;
			case "custom_html": return `${t}<mj-raw${i}>${n.htmlContent || "<div style=\"padding: 20px; text-align: center;\">HTML Personalizado</div>"}</mj-raw>\n`;
			case "countdown": return `${t}<mj-text${r("align", "align")}${r("padding", "padding")}${r("color", "color")} font-size="20px"${i}>Contador: ${n.endTime || "2026-12-31"}</mj-text>\n`;
			case "accordion": return `${t}<mj-accordion${i}>
${t}  <mj-accordion-element>
${t}    <mj-accordion-title>${n.title || "Título del Acordeón"}</mj-accordion-title>
${t}    <mj-accordion-text>${n.content || "Detalles del acordeón..."}</mj-accordion-text>
${t}  </mj-accordion-element>
${t}</mj-accordion>\n`;
			case "carousel": {
				let e = n.images ? n.images.split(",") : ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60", "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60"], r = `${t}<mj-carousel${i}>\n`;
				return e.forEach((e) => {
					r += `${t}  <mj-carousel-image src="${e.trim()}" />\n`;
				}), r += `${t}</mj-carousel>\n`, r;
			}
			case "icon": {
				let e = n.iconName || "Star", r = n.size || 24, a = n.color || "#4f46e5";
				return `${t}<mj-text align="${n.align || "center"}" color="${a}" font-size="${r}px"${n.url ? ` href="${n.url}"` : ""}${i}>${e === "Star" ? "★" : e === "Heart" ? "♥" : e === "Smile" ? "☺" : e === "Settings" ? "⚙" : e === "Mail" ? "✉" : "ℹ"}</mj-text>\n`;
			}
			case "nav_menu": {
				let e = n.align || "center", r = n.color || "#4f46e5", a = Array.isArray(n.items) ? n.items : [], o = `${t}<mj-navbar align="${e}"${i}>\n`;
				return a.forEach((e) => {
					o += `${t}  <mj-navbar-link href="${e.url || "#"}" color="${r}">${e.label || "Link"}</mj-navbar-link>\n`;
				}), o += `${t}</mj-navbar>\n`, o;
			}
			case "image_text": {
				let e = n.imageUrl || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60", r = n.text || "Texto descriptivo al lado de la imagen.", a = n.imageWidth || 40, o = n.imagePosition || "left", s = `${t}  <mj-column width="${a}%"><mj-image src="${e}" /></mj-column>\n`, c = `${t}  <mj-column width="${100 - a}%"><mj-text>${r}</mj-text></mj-column>\n`;
				return `${t}<mj-section${i}>\n${o === "left" ? s + c : c + s}${t}</mj-section>\n`;
			}
			case "product_card": {
				let e = n.imageUrl || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60", r = n.title || "Título Producto", a = n.price || "$10.00", o = n.buttonText || "Comprar", s = n.buttonUrl || "#", c = n.color || "#4f46e5";
				return `${t}<mj-section background-color="${n.backgroundColor || "#ffffff"}" padding="${n.padding || "15px"}"${i}>
${t}  <mj-column>
${t}    <mj-image src="${e}" width="150px" />
${t}    <mj-text align="center" font-size="16px" font-weight="bold">${r}</mj-text>
${t}    <mj-text align="center" font-size="14px" color="${c}">${a}</mj-text>
${t}    <mj-button href="${s}" background-color="${c}">${o}</mj-button>
${t}  </mj-column>
${t}</mj-section>\n`;
			}
			case "quote": {
				let e = n.text || "Esta es una excelente cita o testimonio.", r = n.author || "Autor de Cita", a = n.color || "#555555";
				return `${t}<mj-section background-color="${n.backgroundColor || "#f9f9f9"}" padding="${n.padding || "15px"}"${i}>
${t}  <mj-column>
${t}    <mj-text font-style="italic" color="${a}" align="center">"${e}"</mj-text>
${t}    <mj-text font-weight="bold" align="center">- ${r}</mj-text>
${t}  </mj-column>
${t}</mj-section>\n`;
			}
			case "wrapper": {
				let r = `${t}<mj-wrapper${n.backgroundColor ? ` background-color="${n.backgroundColor}"` : ""}${n.padding ? ` padding="${n.padding}"` : ""}${i}>\n`;
				return e.children && e.children.forEach((e) => {
					r += d(e, t + "  ");
				}), r += `${t}</mj-wrapper>\n`, r;
			}
			case "group": {
				let r = `${t}<mj-group${n.width ? ` width="${n.width}"` : ""}${n.verticalAlign ? ` vertical-align="${n.verticalAlign}"` : ""}${i}>\n`;
				return e.children && e.children.forEach((e) => {
					r += d(e, t + "  ");
				}), r += `${t}</mj-group>\n`, r;
			}
			case "hero": {
				let r = `${t}<mj-hero${n.mode ? ` mode="${n.mode}"` : ""}${n.backgroundImageUrl ? ` background-url="${n.backgroundImageUrl}"` : ""}${n.backgroundColor ? ` background-color="${n.backgroundColor}"` : ""}${n.backgroundWidth ? ` background-width="${n.backgroundWidth}"` : ""}${n.backgroundHeight ? ` background-height="${n.backgroundHeight}"` : ""}${n.padding ? ` padding="${n.padding}"` : ""}${i}>\n`;
				return e.children && e.children.forEach((e) => {
					r += d(e, t + "  ");
				}), r += `${t}</mj-hero>\n`, r;
			}
			default: return "";
		}
	};
	return e.forEach((e) => {
		u += d(e);
	}), u += "  </mj-body>\n</mjml>", u;
}, Jh = (e, t = null, n = !1, r) => {
	let i = (e, t, r) => n && e.mobileProperties && e.mobileProperties[t] !== void 0 ? e.mobileProperties[t] : e.properties[t] === void 0 ? r : e.properties[t], a = (e) => {
		if (e == null) return "0px";
		let t = String(e);
		return t ? /^\d+$/.test(t) ? `${t}px` : t : "0px";
	}, o = (e) => {
		let r = e.id === t ? " builder-element-selected" : "", s = e.properties, c = ` data-b-type="${e.type}" data-b-props="${JSON.stringify(s).replace(/"/g, "&quot;")}"`, l = `data-id="${e.id}" class="builder-element${r}"${c}`, u = "          ";
		switch (e.type) {
			case "section": return `
          <table ${l} border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: ${i(e, "backgroundColor", "transparent")}; padding: ${i(e, "padding", "20px 0px")}; box-sizing: border-box;">
            <tr>
              <td align="center" style="font-size: 0;">
                <!--[if mso]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                  <tr>
                    <td align="center" valign="top" width="600">
                <![endif]-->
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="display: flex; flex-direction: ${n ? "column" : "row"}; width: 100%;">
                      ${e.children ? e.children.map(o).join("") : ""}
                    </td>
                  </tr>
                </table>
                <!--[if mso]>
                    </td>
                  </tr>
                </table>
                <![endif]-->
              </td>
            </tr>
          </table>
        `;
			case "column": {
				let t = i(e, "width", "100%"), r = i(e, "padding", "10px");
				return `
          <div ${l} style="flex: 1; min-width: ${n ? "100%" : "0"}; width: ${n ? "100%" : t}; padding: ${r}; box-sizing: border-box;">
            ${e.children ? e.children.map(o).join("") : ""}
          </div>
        `;
			}
			case "text":
			case "heading":
			case "paragraph": {
				let t = i(e, "fontFamily", "Arial");
				return `
          <div ${l} data-prop="content" style="color: ${i(e, "color", "#1a1a1a")}; font-size: ${i(e, "fontSize", "16px")}; text-align: ${i(e, "align", "left")}; padding: ${i(e, "padding", "10px 20px")}; margin: ${i(e, "margin", "0px")}; border-radius: ${i(e, "borderRadius", "0px")}; line-height: 1.5; font-family: ${t}; font-weight: ${i(e, "fontWeight", e.type.startsWith("heading") ? "bold" : "normal")}; font-style: ${i(e, "fontStyle", "normal")}; text-decoration: ${i(e, "textDecoration", "none")}; box-sizing: border-box;">
            ${s.content || "Escribe aquí tu texto..."}
          </div>
        `;
			}
			case "image": {
				let t = i(e, "url", "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60"), n = i(e, "altText", "image");
				return `
          <div ${l} style="text-align: ${i(e, "align", "center")}; padding: ${i(e, "padding", "10px 20px")}; box-sizing: border-box;">
            <img src="${t}" alt="${n}" style="max-width: 100%; height: auto; border-radius: ${a(i(e, "borderRadius", "8px"))}; display: inline-block; vertical-align: middle;" />
          </div>
        `;
			}
			case "button": {
				let t = i(e, "fontFamily", "Arial"), n = i(e, "backgroundColor", "#4F46E5"), r = i(e, "color", "#ffffff"), o = a(i(e, "borderRadius", "6px")), c = i(e, "padding", "12px 24px"), u = i(e, "align", "center"), d = i(e, "fontSize", "16px"), f = s.content || "Haga clic aquí";
				return `
          <div ${l} style="text-align: ${u}; padding: 10px 20px; box-sizing: border-box;">
            <a href="${s.url || "#"}" style="background-color: ${n}; color: ${r}; border-radius: ${o}; padding: ${c}; display: inline-block; text-decoration: none; font-weight: 500; font-family: ${t}; font-size: ${d};" target="_blank">
              <span data-prop="content">${f}</span>
            </a>
          </div>
        `;
			}
			case "divider": {
				let t = i(e, "color", "#e5e7eb"), n = i(e, "thickness", "2px");
				return `
          <div ${l} style="padding: ${i(e, "padding", "15px 20px")}; box-sizing: border-box;">
            <hr style="border: none; border-top: ${n} solid ${t}; margin: 0; padding: 0;" />
          </div>
        `;
			}
			case "spacer": {
				let t = i(e, "height", "30px");
				return `
          <div ${l} style="height: ${t}; min-height: ${t}; font-size: 0; line-height: 0; box-sizing: border-box;">
            &nbsp;
          </div>
        `;
			}
			case "social": {
				let e = s.padding ? `padding: ${s.padding};` : "padding: 15px 20px;", t = s.align || "center", n = s.networks || [
					{
						id: "facebook",
						name: "facebook",
						href: "https://facebook.com",
						enabled: !0
					},
					{
						id: "twitter",
						name: "twitter",
						href: "https://twitter.com",
						enabled: !0
					},
					{
						id: "instagram",
						name: "instagram",
						href: "https://instagram.com",
						enabled: !0
					}
				], r = "";
				return n.forEach((e) => {
					e.enabled && (r += `<a href="${e.href}" style="display:inline-block; margin: 0 4px; text-decoration: none;"><div style="width:24px; height:24px; background:#4b5563; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; color:white; font-size:10px;">${e.name.substring(0, 1).toUpperCase()}</div></a>`);
				}), `
${u}<table border="0" cellpadding="0" cellspacing="0" width="100%">
${u}  <tr>
${u}    <td style="${e} text-align: ${t}; cursor: pointer;" ${l}>
${u}      ${r}
${u}    </td>
${u}  </tr>
${u}</table>`;
			}
			case "video": {
				let t = i(e, "thumbnailUrl", "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60");
				return `
          <div ${l} style="text-align: ${i(e, "align", "center")}; padding: ${i(e, "padding", "10px 20px")}; box-sizing: border-box;">
            <div style="position: relative; display: inline-block; cursor: pointer; max-width: 100%;">
              <img src="${t}" style="max-width: 100%; height: auto; border-radius: 8px; display: block;" />
              <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 64px; height: 64px; background: rgba(0,0,0,0.7); border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white;">
                <div style="width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-left: 16px solid white; margin-left: 6px;"></div>
              </div>
            </div>
          </div>
        `;
			}
			case "custom_html": {
				let t = e.properties.htmlContent || "<div style=\"padding: 20px; text-align: center; border: 2px dashed #ccc; font-family: sans-serif; font-size: 13px; color: #666;\">HTML Personalizado</div>";
				return `
          <div data-id="${e.id}" class="builder-element${r}" style="box-sizing: border-box;">
            ${t}
          </div>
        `;
			}
			case "countdown": {
				let t = i(e, "align", "center"), n = i(e, "padding", "15px 20px"), a = e.properties.endTime || "2026-12-31";
				return `
          <div data-id="${e.id}" class="builder-element${r}" style="text-align: ${t}; padding: ${n}; box-sizing: border-box; font-family: sans-serif;">
            <div style="display: inline-flex; gap: 8px; justify-content: ${t === "center" ? "center" : t === "right" ? "flex-end" : "flex-start"};">
              <div style="background: #111827; color: white; padding: 8px 12px; border-radius: 4px; text-align: center; min-width: 50px;">
                <span style="font-size: 18px; font-weight: bold; display: block;">02</span>
                <span style="font-size: 9px; opacity: 0.7; text-transform: uppercase;">días</span>
              </div>
              <div style="background: #111827; color: white; padding: 8px 12px; border-radius: 4px; text-align: center; min-width: 50px;">
                <span style="font-size: 18px; font-weight: bold; display: block;">05</span>
                <span style="font-size: 9px; opacity: 0.7; text-transform: uppercase;">horas</span>
              </div>
              <div style="background: #111827; color: white; padding: 8px 12px; border-radius: 4px; text-align: center; min-width: 50px;">
                <span style="font-size: 18px; font-weight: bold; display: block;">34</span>
                <span style="font-size: 9px; opacity: 0.7; text-transform: uppercase;">mins</span>
              </div>
              <div style="background: #111827; color: white; padding: 8px 12px; border-radius: 4px; text-align: center; min-width: 50px;">
                <span style="font-size: 18px; font-weight: bold; display: block;">12</span>
                <span style="font-size: 9px; opacity: 0.7; text-transform: uppercase;">segs</span>
              </div>
            </div>
            <div style="font-size: 10px; color: #6b7280; margin-top: 6px;">Termina el: ${a}</div>
          </div>
        `;
			}
			case "accordion": {
				let t = e.properties.title || "Título del Acordeón", n = e.properties.content || "Detalles del acordeón...", a = i(e, "padding", "10px 20px");
				return `
          <div data-id="${e.id}" class="builder-element${r}" style="padding: ${a}; box-sizing: border-box; font-family: sans-serif;">
            <details style="border: 1px solid #e5e7eb; border-radius: 6px; padding: 10px; background: white;" open>
              <summary style="font-weight: 600; cursor: pointer; outline: none; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                <span data-prop="title">${t}</span>
                <span style="font-size: 12px; opacity: 0.5;">▼</span>
              </summary>
              <div data-prop="content" style="margin-top: 8px; color: #4b5563; font-size: 14px; line-height: 1.5;">
                ${n}
              </div>
            </details>
          </div>
        `;
			}
			case "carousel": {
				let t = e.properties.images || "", n = t ? t.split(",") : ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60", "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60"], a = i(e, "padding", "10px 20px");
				return `
          <div data-id="${e.id}" class="builder-element${r}" style="padding: ${a}; box-sizing: border-box; text-align: center;">
            <div style="display: flex; gap: 8px; justify-content: center; overflow: hidden; max-width: 100%;">
              ${n.map((e) => `
                <img src="${e.trim()}" style="width: 80px; height: 60px; object-fit: cover; border-radius: 4px; border: 1px solid #e5e7eb;" />
              `).join("")}
            </div>
            <div style="font-size: 9px; color: #9ca3af; margin-top: 4px;">Carrusel de ${n.length} imágenes (Vista Compacta)</div>
          </div>
        `;
			}
			case "icon": {
				let t = e.properties.iconName || "Star", n = i(e, "size", "24px"), a = i(e, "color", "#4f46e5"), o = i(e, "align", "center"), s = e.properties.url || "#", c = t === "Star" ? "★" : t === "Heart" ? "♥" : t === "Smile" ? "☺" : t === "Settings" ? "⚙" : t === "Mail" ? "✉" : "ℹ";
				return `
          <div data-id="${e.id}" class="builder-element${r}" style="text-align: ${o}; padding: 10px 20px; box-sizing: border-box;">
            <a href="${s}" style="text-decoration: none; color: ${a}; font-size: ${n};" target="_blank">
              ${c}
            </a>
          </div>
        `;
			}
			case "nav_menu": {
				let t = i(e, "align", "center"), n = i(e, "color", "#4f46e5"), a = i(e, "backgroundColor", "transparent"), o = i(e, "fontFamily", "Arial"), s = i(e, "fontSize", "14px"), c = e.properties.separator || " | ", l = i(e, "padding", "10px"), u = Array.isArray(e.properties.items) ? e.properties.items : [];
				return `
          <div data-id="${e.id}" class="builder-element${r}" style="text-align: ${t}; background-color: ${a}; padding: ${l}; font-family: ${o}; font-size: ${s}; box-sizing: border-box;">
            ${u.map((e, t) => `
              <a href="${e.url || "#"}" style="color: ${n}; text-decoration: none; font-weight: 500;">${e.label || "Link"}</a>
              ${t < u.length - 1 ? `<span style="color: #9ca3af; margin: 0 4px;">${c}</span>` : ""}
            `).join("")}
          </div>
        `;
			}
			case "image_text": {
				let t = i(e, "imageUrl", "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60"), a = e.properties.text || "Texto descriptivo de ejemplo.", o = i(e, "imageWidth", "40"), s = e.properties.imagePosition || "left", c = i(e, "fontFamily", "Arial"), l = i(e, "fontSize", "14px"), u = i(e, "color", "#333333"), d = i(e, "padding", "10px"), f = s === "right";
				return `
          <div data-id="${e.id}" class="builder-element${r}" style="padding: ${d}; box-sizing: border-box; font-family: ${c}; font-size: ${l}; color: ${u}; display: flex; flex-direction: ${n ? "column" : f ? "row-reverse" : "row"}; align-items: center; gap: 15px;">
            <div style="width: ${n ? "100%" : o + "%"}; shrink: 0;">
              <img src="${t}" style="max-width: 100%; height: auto; border-radius: 4px; display: block;" />
            </div>
            <div data-prop="text" style="flex: 1; min-width: 0;">
              ${a}
            </div>
          </div>
        `;
			}
			case "product_card": {
				let t = i(e, "imageUrl", "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60"), n = e.properties.title || "Título Producto", o = e.properties.price || "$10.00", s = e.properties.buttonText || "Comprar", c = e.properties.buttonUrl || "#", l = i(e, "color", "#4f46e5"), u = i(e, "backgroundColor", "#ffffff"), d = a(i(e, "borderRadius", "8px")), f = i(e, "padding", "15px");
				return `
          <div data-id="${e.id}" class="builder-element${r}" style="padding: ${f}; box-sizing: border-box;">
            <div style="background-color: ${u}; border-radius: ${d}; border: 1px solid #e5e7eb; padding: 15px; text-align: center; font-family: Arial, sans-serif;">
              <img src="${t}" style="max-width: 150px; height: auto; border-radius: 4px; margin: 0 auto 10px; display: block;" />
              <h4 data-prop="title" style="margin: 0 0 5px; font-size: 16px; color: #1f2937; font-weight: bold;">${n}</h4>
              <p data-prop="price" style="margin: 0 0 12px; font-size: 14px; color: #6b7280;">${o}</p>
              <a href="${c}" data-prop="buttonText" style="background-color: ${l}; color: #ffffff; padding: 8px 16px; border-radius: 4px; display: inline-block; text-decoration: none; font-size: 13px; font-weight: 500;" target="_blank">
                ${s}
              </a>
            </div>
          </div>
        `;
			}
			case "quote": {
				let t = e.properties.text || "Esta es una excelente cita o testimonio.", n = e.properties.author || "Autor de Cita", o = i(e, "color", "#555555"), s = i(e, "backgroundColor", "#f9f9f9"), c = a(i(e, "borderRadius", "4px")), l = i(e, "padding", "15px");
				return `
          <div data-id="${e.id}" class="builder-element${r}" style="padding: ${l}; box-sizing: border-box;">
            <div style="background-color: ${s}; border-radius: ${c}; padding: 20px; text-align: center; font-family: Arial, sans-serif; border-left: 4px solid #4f46e5;">
              <p data-prop="text" style="margin: 0 0 8px; font-style: italic; color: ${o}; font-size: 15px; line-height: 1.5;">"${t}"</p>
              <h5 data-prop="author" style="margin: 0; font-size: 13px; color: #1f2937; font-weight: bold;">- ${n}</h5>
            </div>
          </div>
        `;
			}
			case "table": {
				let t = s.rows || 3, n = s.cols || 3, a = s.showHeaders !== !1, o = i(e, "borderColor", "#e5e7eb"), c = i(e, "padding", "10px"), l = i(e, "align", "center"), u = i(e, "width", "100%"), d = "<table style=\"width: 100%; border-collapse: collapse;\">";
				for (let e = 0; e < t; e++) {
					d += "<tr>";
					for (let t = 0; t < n; t++) {
						let n = e === 0 && a, r = n ? "th" : "td";
						d += `<${r} style="border: 1px solid ${o}; padding: 8px; background-color: ${n ? "#f3f4f6" : "transparent"}; font-weight: ${n ? "bold" : "normal"}; text-align: ${l};">Celda ${e + 1}-${t + 1}</${r}>`;
					}
					d += "</tr>";
				}
				return d += "</table>", `
          <div data-id="${e.id}" class="builder-element${r}" style="padding: ${c}; box-sizing: border-box; width: ${u}; margin: ${l === "center" ? "0 auto" : l === "right" ? "0 0 0 auto" : "0 auto 0 0"};">
            ${d}
          </div>
        `;
			}
			case "wrapper": {
				let t = i(e, "backgroundColor", "transparent"), n = i(e, "padding", "20px 0px"), a = "";
				return e.children && (a = e.children.map(o).join("")), `
          <div data-id="${e.id}" class="builder-element${r}" style="background-color: ${t}; padding: ${n}; box-sizing: border-box; width: 100%;">
            ${a}
          </div>
        `;
			}
			case "group": {
				let t = i(e, "width", "100%"), n = i(e, "verticalAlign", "top"), a = {
					top: "flex-start",
					middle: "center",
					bottom: "flex-end"
				}, s = "";
				return e.children && (s = e.children.map(o).join("")), `
          <div data-id="${e.id}" class="builder-element${r}" style="display: flex; flex-direction: row; flex-wrap: wrap; align-items: ${a[n] || "flex-start"}; width: ${t}; box-sizing: border-box;">
            ${s}
          </div>
        `;
			}
			case "hero": {
				let t = i(e, "backgroundColor", "#000000"), n = i(e, "backgroundImageUrl", ""), a = i(e, "padding", "100px 0px"), s = i(e, "backgroundHeight", "400px"), c = "";
				return e.children && (c = e.children.map(o).join("")), `
          <div data-id="${e.id}" class="builder-element${r}" style="background-color: ${t}; background-image: url('${n}'); background-size: cover; background-position: center; padding: ${a}; min-height: ${s}; box-sizing: border-box; width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            ${c}
          </div>
        `;
			}
			case "flex_layout": {
				let t = i(e, "direction", "row"), n = i(e, "justifyContent", "flex-start"), a = i(e, "alignItems", "flex-start"), s = i(e, "gap", 16), c = i(e, "padding", "10px"), l = "";
				return e.children && (l = e.children.map(o).join("")), `
          <div data-id="${e.id}" class="builder-element${r}" style="display: flex; flex-direction: ${t}; justify-content: ${n}; align-items: ${a}; gap: ${s}px; padding: ${c}; box-sizing: border-box; width: 100%;">
            ${l}
          </div>
        `;
			}
			case "grid_layout": {
				let t = i(e, "columns", 2), n = i(e, "gap", 16), a = i(e, "padding", "10px"), s = "";
				return e.children && (s = e.children.map(o).join("")), `
          <div data-id="${e.id}" class="builder-element${r}" style="display: grid; grid-template-columns: repeat(${t}, 1fr); gap: ${n}px; padding: ${a}; box-sizing: border-box; width: 100%;">
            ${s}
          </div>
        `;
			}
			case "slider": {
				let t = i(e, "images", ""), n = t ? t.split(",").map((e) => e.trim()).filter(Boolean) : [], a = i(e, "padding", "0px"), o = "<div style=\"display: flex; overflow-x: auto; gap: 10px; padding-bottom: 10px;\">";
				return n.forEach((e) => {
					o += `<img src="${e}" style="height: 200px; object-fit: cover; border-radius: 8px; flex-shrink: 0;" />`;
				}), n.length === 0 && (o += "<div style=\"padding: 20px; background: #eee; width: 100%; text-align: center;\">Agrega imágenes al slider</div>"), o += "</div>", `
          <div data-id="${e.id}" class="builder-element${r}" style="padding: ${a}; box-sizing: border-box; width: 100%;">
            ${o}
          </div>
        `;
			}
			case "gallery": {
				let t = i(e, "images", ""), n = t ? t.split(",").map((e) => e.trim()).filter(Boolean) : [], a = i(e, "padding", "10px"), o = `<div style="display: grid; grid-template-columns: repeat(${i(e, "columns", 3)}, 1fr); gap: ${i(e, "gap", 10)}px;">`;
				return n.forEach((e) => {
					o += `<img src="${e}" style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 4px;" />`;
				}), n.length === 0 && (o += "<div style=\"padding: 20px; background: #eee; grid-column: 1 / -1; text-align: center;\">Agrega imágenes a la galería</div>"), o += "</div>", `
          <div data-id="${e.id}" class="builder-element${r}" style="padding: ${a}; box-sizing: border-box; width: 100%;">
            ${o}
          </div>
        `;
			}
			default: return "";
		}
	}, s = e.map(o).join(""), c = Kh(e, r?.globalFontFamily).filter((e) => !Gh.includes(e.toLowerCase())), l = "";
	c.forEach((e) => {
		let t = e.replace(/\s+/g, "+");
		l += `      <link href="https://fonts.googleapis.com/css2?family=${t}:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />\n`;
	});
	let u = r?.title || "Email Preview", d = r?.previewText ? `\n      <div style="display: none; max-height: 0px; overflow: hidden;">${r.previewText}</div>` : "", f = r?.globalBackgroundColor || "#f7f9fa", p = r?.globalFontFamily ? `${r.globalFontFamily}, system-ui, sans-serif` : "system-ui, -apple-system, sans-serif", m = r?.globalTextColor ? `color: ${r.globalTextColor};` : "";
	return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${u}</title>
${l}
      <style>
        body {
          margin: 0;
          padding: 20px 10px;
          background-color: ${f};
          font-family: ${p};
          ${m}
          box-sizing: border-box;
          min-height: 100vh;
        }
        
        /* Interactive overlay styles for builder elements */
        .builder-element {
          position: relative;
          outline: 1px dashed rgba(79, 70, 229, 0.25);
          outline-offset: -1px;
          cursor: pointer;
          transition: outline 0.15s ease-in-out, background-color 0.15s ease-in-out;
        }
        
        .builder-element:hover {
          outline: 2px solid #4F46E5;
          outline-offset: -2px;
          background-color: rgba(79, 70, 229, 0.03);
        }
        
        .builder-element-selected {
          outline: 2px solid #4F46E5 !important;
          outline-offset: -2px !important;
          background-color: rgba(79, 70, 229, 0.06) !important;
        }

        /* Float labels for builder elements on hover/selection */
        .builder-element::before {
          content: "";
          position: absolute;
          top: -18px;
          left: 8px;
          background: #4F46E5;
          color: #ffffff;
          font-size: 9px;
          font-family: system-ui, sans-serif;
          font-weight: bold;
          padding: 2px 6px;
          border-radius: 4px 4px 0 0;
          pointer-events: none;
          z-index: 99;
          display: none;
          white-space: nowrap;
          text-transform: uppercase;
        }

        .builder-element:hover::before,
        .builder-element-selected::before {
          display: block;
        }

        /* Specify labels based on data-id prefix */
        [data-id^="section-"]::before { content: "Sección"; }
        [data-id^="column-"]::before { content: "Columna"; }
        [data-id^="text-"]::before { content: "Texto Libre"; }
        [data-id^="heading-"]::before { content: "Título"; }
        [data-id^="paragraph-"]::before { content: "Párrafo"; }
        [data-id^="image-"]::before { content: "Imagen"; }
        [data-id^="button-"]::before { content: "Botón"; }
        [data-id^="divider-"]::before { content: "Divisor"; }
        [data-id^="spacer-"]::before { content: "Espaciador"; }
        [data-id^="social-"]::before { content: "Redes"; }
        [data-id^="video-"]::before { content: "Vídeo"; }
        [data-id^="custom_html-"]::before { content: "HTML"; }
        [data-id^="countdown-"]::before { content: "Contador"; }
        [data-id^="accordion-"]::before { content: "Acordeón"; }
        [data-id^="carousel-"]::before { content: "Carrusel"; }
        [data-id^="icon-"]::before { content: "Icono"; }
        [data-id^="nav_menu-"]::before { content: "Menú Nav"; }
        [data-id^="image_text-"]::before { content: "Img + Texto"; }
        [data-id^="product_card-"]::before { content: "Producto"; }
        [data-id^="quote-"]::before { content: "Cita"; }

        /* 8-point selection handles */
        .builder-element-selected::after {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border: 2px solid #4F46E5;
          pointer-events: none;
          z-index: 98;
          background-image: 
            radial-gradient(circle, #ffffff 3px, #4F46E5 3px, #4F46E5 4px, transparent 4px),
            radial-gradient(circle, #ffffff 3px, #4F46E5 3px, #4F46E5 4px, transparent 4px),
            radial-gradient(circle, #ffffff 3px, #4F46E5 3px, #4F46E5 4px, transparent 4px),
            radial-gradient(circle, #ffffff 3px, #4F46E5 3px, #4F46E5 4px, transparent 4px),
            radial-gradient(circle, #ffffff 3px, #4F46E5 3px, #4F46E5 4px, transparent 4px),
            radial-gradient(circle, #ffffff 3px, #4F46E5 3px, #4F46E5 4px, transparent 4px),
            radial-gradient(circle, #ffffff 3px, #4F46E5 3px, #4F46E5 4px, transparent 4px),
            radial-gradient(circle, #ffffff 3px, #4F46E5 3px, #4F46E5 4px, transparent 4px);
          background-position: 
            0% 0%, 50% 0%, 100% 0%,
            0% 50%, 100% 50%,
            0% 100%, 50% 100%, 100% 100%;
          background-size: 10px 10px;
          background-repeat: no-repeat;
          margin: -2px;
        }

        .drag-hover {
          outline: 2px dashed #4F46E5 !important;
          outline-offset: -2px !important;
          background-color: rgba(79, 70, 229, 0.08) !important;
        }

        /* Responsive utilities */
        @media only screen and (max-width: 480px) {
          .builder-element {
            outline-color: rgba(79, 70, 229, 0.15);
          }
        }
      </style>
    </head>
    <body>${d}
      <div id="builder-canvas-wrapper" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-radius: 8px; overflow: hidden; min-height: 400px; border: 1px solid #e5e7eb;">
        ${s}
      </div>

      <script>
        // Prevent all anchor navigation in the builder preview
        document.body.addEventListener('click', function(e) {
          const link = e.target.closest('a[href]');
          if (link) e.preventDefault();
        }, true);

        // Send selected ID back to parent window
        document.body.addEventListener('click', function(e) {
          // If clicking toolbar elements, ignore selection
          if (e.target.closest('#builder-inline-toolbar')) {
            return;
          }
          const el = e.target.closest('[data-id]');
          if (el) {
            const id = el.getAttribute('data-id');
            const hasProp = e.target.hasAttribute('data-prop') || e.target.closest('[data-prop]');
            if (!hasProp) {
              e.preventDefault();
            }
            e.stopPropagation();
            window.parent.postMessage({
              type: 'SELECT_ELEMENT',
              id: id
            }, '*');
          }
        }, true);

        // Double click on images
        document.body.addEventListener('dblclick', function(e) {
          const el = e.target.closest('[data-id]');
          if (el) {
            const id = el.getAttribute('data-id');
            if (id && id.startsWith('image-')) {
              window.parent.postMessage({
                type: 'DOUBLE_CLICK_IMAGE',
                id: id
              }, '*');
            }
          }
        }, true);

        // Manage floating toolbar and inline editing
        const updateToolbar = () => {
          let toolbar = document.getElementById('builder-inline-toolbar');
          if (!toolbar) {
            toolbar = document.createElement('div');
            toolbar.id = 'builder-inline-toolbar';
            toolbar.style.cssText = 'position: absolute; display: none; background: #1f2937; color: white; flex-direction: row; gap: 4px; padding: 4px; border-radius: 6px; z-index: 99999; font-size: 11px; font-family: system-ui, sans-serif; pointer-events: auto; box-shadow: 0 4px 15px rgba(0,0,0,0.25); border: 1px solid #374151; align-items: center;';
            toolbar.innerHTML = 
              '  <div id="tb-drag" class="tb-icon-btn" style="cursor: move;" title="Mover">' +
              '    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="5" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="19" r="1"/></svg>' +
              '  </div>' +
              '  <button id="tb-clone" type="button" class="tb-icon-btn" title="Duplicar">' +
              '    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>' +
              '  </button>' +
              '  <button id="tb-delete" type="button" class="tb-icon-btn" id="tb-delete" style="color: #ef4444;" title="Eliminar">' +
              '    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>' +
              '  </button>';
            document.body.appendChild(toolbar);

            // Style hover transitions
            const styles = document.createElement('style');
            styles.innerHTML = 
              '.tb-btn { background: transparent; border: none; color: #d1d5db; padding: 3px 6px; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: bold; display: flex; align-items: center; justify-content: center; transition: all 0.1s ease; }' +
              '.tb-btn:hover { background: #374151; color: white; }' +
              '.tb-btn.active { background: #4f46e5; color: white; }' +
              '.tb-icon-btn { background: transparent; border: none; color: #9ca3af; padding: 4px; border-radius: 4px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s ease; width: 22px; height: 22px; }' +
              '.tb-icon-btn:hover { background: #374151; color: #ffffff; }' +
              '.tb-icon-btn#tb-delete:hover { background: #ef4444; color: #ffffff; }';
            document.head.appendChild(styles);

            toolbar.addEventListener('click', (e) => e.stopPropagation());

            toolbar.querySelector('#tb-delete').addEventListener('click', () => {
              const id = toolbar.getAttribute('data-target-id');
              if (id) window.parent.postMessage({ type: 'DELETE_ELEMENT', id }, '*');
            });

            toolbar.querySelector('#tb-clone').addEventListener('click', () => {
              const id = toolbar.getAttribute('data-target-id');
              if (id) window.parent.postMessage({ type: 'CLONE_ELEMENT', id }, '*');
            });
          }

          const selected = document.querySelector('.builder-element-selected');
          if (selected) {
            const rect = selected.getBoundingClientRect();
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            const scrollX = window.scrollX || document.documentElement.scrollLeft;

            // Positioning toolbar right above selected element
            toolbar.style.top = (rect.top + scrollY - (selected.getAttribute('data-id') && (selected.getAttribute('data-id').startsWith('text-') || selected.getAttribute('data-id').startsWith('heading') || selected.getAttribute('data-id').startsWith('paragraph') || selected.getAttribute('data-id').startsWith('button-')) ? 55 : 32)) + 'px';
            toolbar.style.left = (rect.left + scrollX) + 'px';
            toolbar.style.display = 'flex';
            toolbar.setAttribute('data-target-id', selected.getAttribute('data-id'));

            // Check if it is a text-editing node
            const id = selected.getAttribute('data-id');
            const isText = id && (id.startsWith('text-') || id.startsWith('heading') || id.startsWith('paragraph') || id.startsWith('button-'));
            const editableElements = selected.hasAttribute('data-prop') ? [selected] : Array.from(selected.querySelectorAll('[data-prop]'));
            if (isText) {
              editableElements.forEach(target => {
                target.setAttribute('contenteditable', 'true');
                target.style.outline = 'none';

                if (!target.getAttribute('data-editable-bound')) {
                  target.setAttribute('data-editable-bound', 'true');
                  target.addEventListener('input', () => {
                    const prop = target.getAttribute('data-prop');
                    let rawVal = target.innerText;
                    if (prop === 'text') {
                      rawVal = rawVal.replace(/^"|"$/g, '');
                    } else if (prop === 'author') {
                      rawVal = rawVal.replace(/^- /, '');
                    }
                    window.parent.postMessage({
                      type: 'UPDATE_CONTENT',
                      id,
                      propName: prop,
                      content: rawVal
                    }, '*');
                  });
                }
              });
            }
          } else {
            toolbar.style.display = 'none';
          }
        };

        // Watch DOM mutations to reposition toolbar or bound editable events
        window.addEventListener('load', updateToolbar);
        const observer = new MutationObserver(() => requestAnimationFrame(updateToolbar));
        observer.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['class'], childList: true });
        window.addEventListener('scroll', updateToolbar);
        window.addEventListener('resize', updateToolbar);
      <\/script>
    </body>
    </html>
  `;
}, $ = (e) => `${e}-${Math.random().toString(36).substr(2, 9)}`, Yh = (e) => {
	let t = {}, n = (n, r) => {
		e.hasAttribute(n) && (t[r] = e.getAttribute(n));
	};
	return n("background-color", "backgroundColor"), n("padding", "padding"), n("align", "align"), n("color", "color"), n("font-size", "fontSize"), n("font-family", "fontFamily"), n("border-radius", "borderRadius"), n("width", "width"), n("height", "height"), t;
}, Xh = (e) => {
	let t = e.tagName.toLowerCase(), n = Yh(e), r = () => {
		let t = [];
		return Array.from(e.children).forEach((e) => {
			let n = Xh(e);
			n && t.push(n);
		}), t;
	};
	if (e.hasAttribute("data-b-type")) {
		let t = e.getAttribute("data-b-type"), n = {};
		try {
			n = JSON.parse(e.getAttribute("data-b-props") || "{}");
		} catch {
			console.warn("Error parsing data-b-props for", t);
		}
		return {
			id: $(t),
			type: t,
			properties: n,
			children: r()
		};
	}
	switch (t) {
		case "mj-body": return null;
		case "mj-section":
		case "section": return {
			id: $("section"),
			type: "section",
			properties: n,
			children: r()
		};
		case "mj-column":
		case "column": return {
			id: $("column"),
			type: "column",
			properties: n,
			children: r()
		};
		case "mj-text": return {
			id: $("text"),
			type: "text",
			properties: {
				...n,
				content: e.innerHTML.trim()
			}
		};
		case "mj-image": return {
			id: $("image"),
			type: "image",
			properties: {
				...n,
				url: e.getAttribute("src") || "",
				alt: e.getAttribute("alt") || "",
				href: e.getAttribute("href") || ""
			}
		};
		case "mj-button": return {
			id: $("button"),
			type: "button",
			properties: {
				...n,
				content: e.innerHTML.trim(),
				url: e.getAttribute("href") || ""
			}
		};
		case "mj-divider": return {
			id: $("divider"),
			type: "divider",
			properties: {
				...n,
				color: e.getAttribute("border-color") || "#cccccc",
				thickness: e.getAttribute("border-width") || "1px"
			}
		};
		case "mj-spacer": return {
			id: $("spacer"),
			type: "spacer",
			properties: n
		};
		case "mj-social": {
			let t = [];
			return Array.from(e.children).forEach((e) => {
				e.tagName.toLowerCase() === "mj-social-element" && t.push({
					id: e.getAttribute("name") || "facebook",
					name: e.getAttribute("name") || "facebook",
					href: e.getAttribute("href") || "#",
					enabled: !0
				});
			}), {
				id: $("social"),
				type: "social",
				properties: {
					...n,
					networks: t.length > 0 ? t : void 0
				}
			};
		}
		case "mj-accordion": {
			let t = e.querySelector("mj-accordion-element"), r = t?.querySelector("mj-accordion-title")?.innerHTML || "", i = t?.querySelector("mj-accordion-text")?.innerHTML || "";
			return {
				id: $("accordion"),
				type: "accordion",
				properties: {
					...n,
					title: r.trim(),
					content: i.trim()
				}
			};
		}
		case "mj-carousel": {
			let t = [];
			return Array.from(e.children).forEach((e) => {
				if (e.tagName.toLowerCase() === "mj-carousel-image") {
					let n = e.getAttribute("src");
					n && t.push(n);
				}
			}), {
				id: $("carousel"),
				type: "carousel",
				properties: {
					...n,
					images: t.join(",")
				}
			};
		}
		case "mj-navbar": {
			let t = [];
			return Array.from(e.children).forEach((e) => {
				e.tagName.toLowerCase() === "mj-navbar-link" && t.push({
					label: e.innerHTML.trim(),
					url: e.getAttribute("href") || "#"
				});
			}), {
				id: $("nav_menu"),
				type: "nav_menu",
				properties: {
					...n,
					items: t.length > 0 ? t : void 0
				}
			};
		}
		case "mj-wrapper": return {
			id: $("wrapper"),
			type: "wrapper",
			properties: n,
			children: r()
		};
		case "mj-group": return {
			id: $("group"),
			type: "group",
			properties: {
				...n,
				verticalAlign: e.getAttribute("vertical-align") || "top"
			},
			children: r()
		};
		case "mj-hero": return {
			id: $("hero"),
			type: "hero",
			properties: {
				...n,
				mode: e.getAttribute("mode") || "fluid-height",
				backgroundImageUrl: e.getAttribute("background-url") || "",
				backgroundWidth: e.getAttribute("background-width") || "",
				backgroundHeight: e.getAttribute("background-height") || ""
			},
			children: r()
		};
		case "table": return e.getAttribute("data-mj-table") === "true" ? {
			id: $("table"),
			type: "table",
			properties: {
				...n,
				htmlContent: e.innerHTML
			}
		} : {
			id: $("custom_html"),
			type: "custom_html",
			properties: { htmlContent: e.outerHTML }
		};
		case "mj-raw": return {
			id: $("custom_html"),
			type: "custom_html",
			properties: { htmlContent: e.innerHTML }
		};
		case "div": return e.querySelector("table, img, h1, h2, h3, p") ? {
			id: $("custom_html"),
			type: "custom_html",
			properties: { htmlContent: e.outerHTML }
		} : null;
		case "table": return {
			id: $("custom_html"),
			type: "custom_html",
			properties: { htmlContent: e.outerHTML }
		};
		default: return [
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6",
			"p",
			"span",
			"strong",
			"em",
			"b",
			"i"
		].includes(t) ? {
			id: $("text"),
			type: "text",
			properties: { content: e.outerHTML }
		} : {
			id: $("custom_html"),
			type: "custom_html",
			properties: { htmlContent: e.outerHTML }
		};
	}
}, Zh = (e, t) => {
	let n = e;
	t === "mjml" && (n = n.replace(/<mj-([a-zA-Z0-9-]+)([^>]*?)\/>/gi, "<mj-$1$2></mj-$1>"), n = n.replace(/<mj-table([^>]*)>/gi, "<table data-mj-table=\"true\"$1>"), n = n.replace(/<\/mj-table>/gi, "</table>"));
	let r = new DOMParser().parseFromString(`<div>${n}</div>`, "text/html").body.firstElementChild;
	if (!r) return [];
	let i = [];
	return Array.from(r.children).forEach((e) => {
		if (e.tagName.toLowerCase() === "mj-body") Array.from(e.children).forEach((e) => {
			let t = Xh(e);
			t && i.push(t);
		});
		else {
			let t = Xh(e);
			t && i.push(t);
		}
	}), i;
}, Qh = [
	{
		id: "sec-1",
		type: "section",
		properties: {
			backgroundColor: "#ffffff",
			padding: "20px 10px"
		},
		children: [{
			id: "col-1-1",
			type: "column",
			properties: {
				width: "100%",
				padding: "10px"
			},
			children: [{
				id: "txt-1-1-1",
				type: "text",
				properties: {
					content: "<h1 style=\"margin: 0; font-size: 28px; font-weight: 800; color: #4F46E5; text-align: center;\">BUILDERXD</h1><p style=\"margin: 5px 0 0; text-align: center; color: #6b7280;\">El editor de correos definitivo</p>",
					color: "#000000",
					fontSize: "16px",
					align: "center",
					padding: "10px"
				}
			}]
		}]
	},
	{
		id: "sec-2",
		type: "section",
		properties: {
			backgroundColor: "#f3f4f6",
			padding: "30px 10px"
		},
		children: [{
			id: "col-2-1",
			type: "column",
			properties: {
				width: "100%",
				padding: "10px"
			},
			children: [{
				id: "img-2-1-1",
				type: "image",
				properties: {
					url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
					altText: "Mockup Promo",
					align: "center",
					borderRadius: "8px",
					padding: "10px 20px"
				}
			}]
		}]
	},
	{
		id: "sec-3",
		type: "section",
		properties: {
			backgroundColor: "#ffffff",
			padding: "30px 10px"
		},
		children: [{
			id: "col-3-1",
			type: "column",
			properties: {
				width: "100%",
				padding: "10px"
			},
			children: [{
				id: "txt-3-1-1",
				type: "text",
				properties: {
					content: "<h2 style=\"font-size: 20px; font-weight: 700; text-align: center;\">Crea plantillas increíbles en minutos</h2><p style=\"color: #4b5563; text-align: center;\">Diseña correos completamente responsivos e interactivos sin escribir código complejo. Compatible con MJML e integraciones avanzadas.</p>",
					color: "#1f2937",
					fontSize: "16px",
					align: "center",
					padding: "10px 20px"
				},
				mobileProperties: {
					fontSize: "14px",
					padding: "5px 10px"
				}
			}, {
				id: "btn-3-1-2",
				type: "button",
				properties: {
					content: "Comenzar Ahora",
					url: "https://example.com",
					backgroundColor: "#4F46E5",
					color: "#ffffff",
					fontSize: "16px",
					borderRadius: "6px",
					align: "center",
					padding: "12px 24px"
				}
			}]
		}]
	},
	{
		id: "sec-4",
		type: "section",
		properties: {
			backgroundColor: "#111827",
			padding: "20px 10px"
		},
		children: [{
			id: "col-4-1",
			type: "column",
			properties: {
				width: "100%",
				padding: "10px"
			},
			children: [{
				id: "divider-4-1-1",
				type: "divider",
				properties: {
					color: "#374151",
					thickness: "1px",
					padding: "10px 20px"
				}
			}, {
				id: "soc-4-1-2",
				type: "social",
				properties: {
					align: "center",
					padding: "10px"
				}
			}]
		}]
	}
], $h = a(({ initialNodes: t = [], onSave: n, onExport: r, onTemplateChange: i, mode: a, defaultMode: o = "mjml", readOnly: s = !1, theme: u, fileManagerProviders: d = [], espIntegrations: m = [], uiConfig: h, assetManagerComponent: g, videoManagerComponent: _, fileManagerComponent: v, googleFonts: y }, x) => {
	let { t: S } = te(), { setTheme: ee } = re(), ne = () => t.length > 0 ? t : Qh, [C, ie] = p(ne), [ae, oe] = p(null), [se, ce] = p("desktop"), [le, ue] = p(!1), [de, fe] = p(a ?? o), w = a ? (e) => {} : fe, [pe, me] = p(!1), [he, ge] = p(null), [_e, ve] = p(!1), [ye, be] = p(null), [xe, Se] = p(!1), [Ce, we] = p(null);
	c(() => {
		u?.darkMode !== void 0 && ee(u.darkMode ? "dark" : "light");
	}, [u?.darkMode, ee]), l(x, () => ({
		getNodes: () => C,
		setNodes: (e) => T(e),
		getHTML: () => bt,
		getMJML: () => vt,
		toggleDarkMode: () => ee(u?.darkMode ? "light" : "dark"),
		importTemplate: (e, t) => {
			let n = Zh(e, t);
			n && n.length > 0 ? T(n) : console.warn("BuilderXD: No valid nodes could be extracted from the imported code.");
		},
		exportTemplate: async (e) => e === "mjml" ? vt : bt,
		sendTest: (e) => {
			Ve(e.join(", ")), Fe(!0), setTimeout(() => {
				Rt();
			}, 500);
		}
	}));
	let Te = {
		"--primary": u?.primaryColor || "#4F46E5",
		"--primary-hover": "#4338ca",
		"--accent-color": "#aa3bff",
		"--border-radius-val": "8px"
	}, [Ee, De] = p([ne()]), [Oe, ke] = p(0), [Ae, je] = p(!1), [Me, Ne] = p(!1), [Pe, Fe] = p(!1), [Ie, Le] = p(""), [Re, ze] = p(""), [Be, Ve] = p(""), [He, Ue] = p(""), [We, Ge] = p(null), [Ke, qe] = p("/"), [Je, Ye] = p([]), [Xe, Ze] = p(!1), [Qe, $e] = p(""), [et, tt] = p(null), [nt, rt] = p(null), [it, ot] = p(!1), [st, ct] = p(""), [lt, ut] = p(""), [dt, ft] = p(""), pt = async (e, t) => {
		Ze(!0), $e(""), tt(null);
		try {
			if (e.onBrowse) {
				let n = await e.onBrowse(t);
				n && Array.isArray(n) ? Ye(n) : n && n.files && Array.isArray(n.files) ? Ye(n.files) : Ye([]);
			}
		} catch (e) {
			$e(e.message || "Error loading files");
		} finally {
			Ze(!1);
		}
	};
	c(() => {
		We && pt(We, Ke);
	}, [We, Ke]);
	let mt = (e) => {
		if (e) if (e.content) try {
			let t = JSON.parse(e.content);
			Array.isArray(t) ? (T(t), Ge(null)) : $e("Invalid template format in file");
		} catch {
			$e("Failed to parse file JSON");
		}
		else e.name && e.name.endsWith(".json") ? e.name === "newsletter-2026.json" ? (T(Qh), Ge(null)) : $e("Selected file cannot be read directly.") : $e("Please select a valid template file (.json).");
	}, ht = async (e) => {
		let t = e.target.files?.[0];
		if (!(!t || !We || !We.onUpload)) {
			Ze(!0), $e("");
			try {
				let e = await We.onUpload(t, Ke);
				alert(`File uploaded successfully: ${e}`), pt(We, Ke);
			} catch (e) {
				$e(e.message || "Upload failed");
			} finally {
				Ze(!1);
			}
		}
	}, gt = async () => {
		if (!(!nt || !nt.onPush)) {
			ot(!0), ct(""), ut("");
			try {
				await nt.onPush(bt, vt), ct(`Template successfully pushed to ${nt.name}!`);
			} catch (e) {
				ut(e.message || "Failed to push template");
			} finally {
				ot(!1);
			}
		}
	}, _t = async () => {
		if (!(!nt || !nt.onPull || !dt.trim())) {
			ot(!0), ct(""), ut("");
			try {
				let e = await nt.onPull(dt);
				e && e.html ? (e.nodes ? T(e.nodes) : e.mjml && alert("Imported MJML template from ESP successfully."), ct(`Template ${dt} successfully pulled and loaded!`), setTimeout(() => {
					rt(null), ft("");
				}, 1500)) : ut("Invalid template response");
			} catch (e) {
				ut(e.message || "Failed to pull template");
			} finally {
				ot(!1);
			}
		}
	}, [vt, yt] = p(() => qh(ne())), [bt, xt] = p(() => Jh(ne(), null, se === "mobile")), St = f(null);
	c(() => (St.current = new Worker(new URL(
		/* @vite-ignore */
		"/assets/compiler.worker-BtGWHE6P.js",
		"" + import.meta.url
	), { type: "module" }), St.current.onmessage = (e) => {
		e.data.success && (yt(e.data.mjml), xt(e.data.html));
	}, () => {
		St.current?.terminate();
	}), []), c(() => {
		St.current?.postMessage({
			nodes: C,
			selectedId: ae,
			isMobile: se === "mobile"
		});
	}, [
		C,
		ae,
		se
	]);
	let T = (e) => {
		let t = Ee.slice(0, Oe + 1);
		De([...t, e]), ke(t.length), ie(e);
	}, Tt = () => {
		Oe > 0 && (ke(Oe - 1), ie(Ee[Oe - 1]));
	}, Dt = () => {
		Oe < Ee.length - 1 && (ke(Oe + 1), ie(Ee[Oe + 1]));
	}, Ot = (e, t = C) => {
		for (let n of t) {
			if (n.id === e) return n;
			if (n.children) {
				let t = Ot(e, n.children);
				if (t) return t;
			}
		}
		return null;
	}, kt = ae ? (() => {
		let e = Ot(ae);
		return e || console.warn("[App] findNode: ID not found:", ae), e;
	})() : null, E = (e) => {
		switch (e) {
			case "section": return {
				backgroundColor: "#ffffff",
				padding: "20px 10px",
				width: 600
			};
			case "column": return {
				width: "100%",
				padding: "10px"
			};
			case "text": return {
				content: "Escribe aquí tu texto...",
				color: "#1a1a1a",
				fontSize: "16px",
				align: "left",
				padding: "10px 20px",
				fontFamily: "Arial",
				fontWeight: "normal"
			};
			case "heading": return {
				content: "Título Principal",
				level: "h1",
				color: "#111827",
				fontSize: "32px",
				align: "left",
				padding: "10px 20px",
				fontFamily: "Arial",
				fontWeight: "bold"
			};
			case "paragraph": return {
				content: "Este es un bloque de párrafo. Puedes escribir texto detallado y descriptivo aquí...",
				color: "#4b5563",
				fontSize: "16px",
				align: "left",
				padding: "10px 20px",
				fontFamily: "Arial",
				fontWeight: "normal"
			};
			case "image": return {
				url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
				altText: "Image description",
				align: "center",
				borderRadius: "8px",
				padding: "10px 20px"
			};
			case "button": return {
				content: "Comenzar Ahora",
				url: "https://example.com",
				backgroundColor: "#4F46E5",
				color: "#ffffff",
				fontSize: "16px",
				borderRadius: "6px",
				align: "center",
				padding: "12px 24px"
			};
			case "divider": return {
				color: "#e5e7eb",
				thickness: "2px",
				padding: "15px 20px",
				style: "solid"
			};
			case "spacer": return { height: "30px" };
			case "social": return {
				align: "center",
				padding: "15px 20px"
			};
			case "video": return {
				thumbnailUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60",
				videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
				align: "center",
				padding: "10px 20px"
			};
			case "custom_html": return { htmlContent: "<div style=\"padding: 20px; text-align: center; border: 2px dashed #ccc; font-family: sans-serif; font-size: 13px; color: #666;\">HTML Personalizado</div>" };
			case "countdown": return {
				endTime: "2026-12-31T18:00:00",
				color: "#111827",
				align: "center",
				padding: "15px 20px"
			};
			case "accordion": return {
				title: "Título del Acordeón",
				content: "Detalles del acordeón...",
				padding: "10px 20px"
			};
			case "carousel": return {
				images: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60",
				padding: "10px 20px"
			};
			case "icon": return {
				iconName: "Star",
				size: 24,
				color: "#4f46e5",
				align: "center",
				url: ""
			};
			case "nav_menu": return {
				items: [
					{
						label: "Inicio",
						url: "#"
					},
					{
						label: "Servicios",
						url: "#"
					},
					{
						label: "Contacto",
						url: "#"
					}
				],
				color: "#4f46e5",
				align: "center",
				separator: " | ",
				padding: "10px"
			};
			case "image_text": return {
				imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
				text: "Texto descriptivo de ejemplo al lado de la imagen.",
				imageWidth: 40,
				imagePosition: "left",
				fontFamily: "Arial",
				fontSize: "14px",
				color: "#333333",
				padding: "10px"
			};
			case "product_card": return {
				imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
				title: "Producto de Ejemplo",
				price: "$99.99",
				buttonText: "Comprar Ahora",
				buttonUrl: "#",
				color: "#4f46e5",
				backgroundColor: "#ffffff",
				borderRadius: 8,
				padding: "15px"
			};
			case "quote": return {
				text: "Esta es una excelente recomendación o testimonio de un cliente satisfecho.",
				author: "Juan Pérez",
				color: "#555555",
				backgroundColor: "#f9f9f9",
				borderRadius: 4,
				padding: "15px"
			};
			case "table": return {
				rows: 3,
				cols: 3,
				showHeaders: !0,
				borderColor: "#e5e7eb",
				padding: "10px",
				align: "center",
				width: "100%"
			};
			case "wrapper": return {
				backgroundColor: "transparent",
				padding: "20px 0px"
			};
			case "group": return {
				width: "100%",
				verticalAlign: "top"
			};
			case "hero": return {
				mode: "fluid-height",
				backgroundColor: "#000000",
				backgroundImageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60",
				backgroundWidth: "600px",
				backgroundHeight: "400px",
				padding: "100px 0px"
			};
			case "slider": return {
				images: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60",
				delay: 3e3,
				slidesPerView: 1,
				padding: "0px"
			};
			case "gallery": return {
				images: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60",
				columns: 3,
				gap: 10,
				padding: "10px"
			};
			case "flex_layout": return {
				direction: "row",
				justifyContent: "space-between",
				alignItems: "center",
				gap: 16,
				padding: "10px"
			};
			case "grid_layout": return {
				columns: 2,
				gap: 16,
				padding: "10px"
			};
			default: return {};
		}
	}, At = (e) => {
		if (s) return;
		let t = `${e}-${Math.random().toString(36).substr(2, 9)}`, n = {
			id: t,
			type: e,
			properties: E(e)
		};
		if (e === "section") {
			n.children = [{
				id: `col-${Math.random().toString(36).substr(2, 9)}`,
				type: "column",
				properties: {
					width: "100%",
					padding: "10px"
				},
				children: []
			}], T([...C, n]), oe(t);
			return;
		}
		let r = !1, i = (e) => e.map((e) => (e.id === ae ? e.type === "column" ? (e.children = [...e.children || [], n], r = !0) : e.type === "section" && (e.children && e.children.length > 0 ? e.children[0].children = [...e.children[0].children || [], n] : e.children = [{
			id: `col-${Math.random().toString(36).substr(2, 9)}`,
			type: "column",
			properties: {
				width: "100%",
				padding: "10px"
			},
			children: [n]
		}], r = !0) : e.children &&= i(e.children), e)), a = i([...C]);
		if (r) T(a);
		else if (a.length > 0 && a[0].children && a[0].children.length > 0) a[0].children[0].children = [...a[0].children[0].children || [], n], T(a);
		else {
			let e = {
				id: `sec-${Math.random().toString(36).substr(2, 9)}`,
				type: "section",
				properties: {
					backgroundColor: "#ffffff",
					padding: "20px 10px"
				},
				children: [{
					id: `col-${Math.random().toString(36).substr(2, 9)}`,
					type: "column",
					properties: {
						width: "100%",
						padding: "10px"
					},
					children: [n]
				}]
			};
			T([...C, e]);
		}
		oe(t);
	}, D = (e, t, n) => {
		if (s) return;
		let r = (i) => i.map((i) => (i.id === e ? n ? i.mobileProperties = {
			...i.mobileProperties || {},
			...t
		} : i.properties = {
			...i.properties,
			...t
		} : i.children &&= r(i.children), i));
		T(r([...C]));
	}, jt = (e) => {
		if (s) return;
		let t = (n) => n.filter((t) => t.id !== e).map((e) => (e.children &&= t(e.children), e));
		T(t([...C])), ae === e && oe(null);
	}, Mt = () => {
		if (s) return;
		let e = h?.confirmClearPrompt || "¿Está seguro de que desea limpiar todo el contenido del lienzo? Esta acción no se puede deshacer.";
		window.confirm(e) && (T([]), oe(null));
	}, Nt = (e, t) => {
		let n = [];
		for (let r of e) if (r.id === t) {
			let e = (t) => {
				let n = `${t.type}-${Math.random().toString(36).substr(2, 9)}`;
				return {
					...t,
					id: n,
					children: t.children ? t.children.map(e) : void 0
				};
			};
			n.push(r), n.push(e(r));
		} else {
			let e = { ...r };
			r.children && (e.children = Nt(r.children, t)), n.push(e);
		}
		return n;
	}, Pt = (e) => {
		s || T(Nt(C, e));
	}, Ft = (e, t, n) => {
		s || D(e, { [n || "content"]: t }, !1);
	}, It = (e, t) => {
		if (s) return;
		let n = (r) => {
			let i = r.findIndex((t) => t.id === e);
			if (i !== -1) {
				let e = [...r], n = t === "up" ? i - 1 : i + 1;
				if (n >= 0 && n < e.length) {
					let t = e[i];
					e[i] = e[n], e[n] = t;
				}
				return e;
			}
			return r.map((e) => (e.children &&= n(e.children), e));
		};
		T(n([...C]));
	}, Lt = () => {
		try {
			let e = JSON.parse(Ie);
			Array.isArray(e) ? (T(e), je(!1), ze(""), oe(null)) : ze(S("invalidJSON"));
		} catch {
			ze(S("invalidJSON"));
		}
	}, Rt = () => {
		Be.trim() && (Ue(`${S("testEmailSent")} ${Be}`), setTimeout(() => {
			Ue(""), Fe(!1), Ve("");
		}, 3e3));
	};
	return c(() => {
		i?.(vt, bt);
	}, [
		vt,
		bt,
		i
	]), c(() => {
		n?.({
			nodes: C,
			mjml: vt,
			html: bt
		});
	}, [
		C,
		vt,
		bt,
		n
	]), /* @__PURE__ */ (0, b.jsxs)("div", {
		className: "flex flex-col h-screen w-screen overflow-hidden bg-bg-app text-text-primary",
		style: Te,
		children: [
			/* @__PURE__ */ (0, b.jsx)(wt, {
				deviceMode: se,
				setDeviceMode: ce,
				canUndo: Oe > 0,
				canRedo: Oe < Ee.length - 1,
				onUndo: Tt,
				onRedo: Dt,
				onImportClick: () => {
					Le(JSON.stringify(C, null, 2)), je(!0);
				},
				onExportClick: () => {
					r?.({
						nodes: C,
						mjml: vt,
						html: bt
					}), Ne(!0);
				},
				onSendTestClick: () => Fe(!0),
				fileManagerProviders: d,
				espIntegrations: m,
				onFileManagerClick: (e) => {
					v ? (we(() => (e) => {
						let t = e?.[0];
						if (t) {
							if (t.content) try {
								let e = JSON.parse(t.content);
								Array.isArray(e) && T(e);
							} catch {
								alert("Formato de plantilla inválido");
							}
							else t.url && he && he(t.url);
							Se(!1);
						}
					}), Se(!0)) : (qe("/"), Ge(e));
				},
				onESPClick: (e) => {
					ct(""), ut(""), rt(e);
				},
				uiConfig: h
			}),
			/* @__PURE__ */ (0, b.jsxs)("div", {
				className: "flex flex-1 h-[calc(100vh-60px)] overflow-hidden relative",
				children: [
					/* @__PURE__ */ (0, b.jsx)(Et, {
						onAddComponent: At,
						nodes: C,
						selectedId: ae,
						onSelectNode: oe,
						onDeleteNode: jt,
						onMoveNode: It,
						readOnly: s,
						templateMode: de,
						setTemplateMode: w,
						fixedMode: a,
						onClearCanvas: Mt,
						uiConfig: h
					}),
					/* @__PURE__ */ (0, b.jsx)("div", {
						className: `flex-1 flex transition-all duration-300 ${le ? "pb-[260px]" : "pb-10"}`,
						children: /* @__PURE__ */ (0, b.jsx)(Uh, {
							htmlContent: bt,
							deviceMode: se,
							onSelectNode: oe,
							onDropElement: (e, t) => {
								if (s) return;
								let n = `${e}-${Math.random().toString(36).substr(2, 9)}`, r = {
									id: n,
									type: e,
									properties: E(e)
								};
								if (e === "section") {
									r.children = [{
										id: `col-${Math.random().toString(36).substr(2, 9)}`,
										type: "column",
										properties: {
											width: "100%",
											padding: "10px"
										},
										children: []
									}], T([...C, r]), oe(n);
									return;
								}
								if (!t) {
									let e = C[0];
									if (e && e.children && e.children.length > 0) {
										let t = e.children[0];
										t.children = [...t.children || [], r], T([...C]), oe(n);
									}
									return;
								}
								let i = !1, a = (e) => e.map((e) => {
									if (e.id === t) [
										"column",
										"wrapper",
										"group",
										"hero",
										"flex_layout",
										"grid_layout"
									].includes(e.type) ? (e.children = [...e.children || [], r], i = !0) : e.type === "section" && (e.children && e.children.length > 0 ? e.children[0].children = [...e.children[0].children || [], r] : e.children = [{
										id: `col-${Math.random().toString(36).substr(2, 9)}`,
										type: "column",
										properties: {
											width: "100%",
											padding: "10px"
										},
										children: [r]
									}], i = !0);
									else if (e.children) {
										let n = e.children.findIndex((e) => e.id === t);
										if (n !== -1 && [
											"column",
											"wrapper",
											"group",
											"hero",
											"flex_layout",
											"grid_layout"
										].includes(e.type)) {
											let t = [...e.children];
											t.splice(n + 1, 0, r), e.children = t, i = !0;
										} else e.children = a(e.children);
									}
									return e;
								}), o = a([...C]);
								i && (T(o), oe(n));
							},
							onDeleteNode: jt,
							onCloneNode: Pt,
							onUpdateNodeContent: Ft,
							onUpdateNodeProperties: (e, t) => D(e, t, !1),
							onDoubleClickImage: (e) => {
								g ? (ge(() => (t) => D(e, { url: t }, !1)), me(!0)) : d.length > 0 ? (qe("/"), Ge(d[0])) : alert("No hay un gestor de archivos configurado.");
							}
						})
					}),
					/* @__PURE__ */ (0, b.jsx)(Hh, {
						selectedNode: kt,
						onUpdateProperties: D,
						onDeleteNode: jt,
						readOnly: s,
						googleFonts: y,
						onOpenAssetManager: (e, t) => {
							g ? (ge(() => t), me(!0)) : d.length > 0 ? (qe("/"), Ge(d[0])) : alert("No hay un gestor de archivos configurado.");
						},
						onOpenVideoManager: (e, t) => {
							_ ? (be(() => t), ve(!0)) : alert("No hay un gestor de videos configurado.");
						}
					}),
					/* @__PURE__ */ (0, b.jsx)(Wh, {
						mjmlCode: vt,
						htmlCode: bt,
						isOpen: le,
						onToggle: () => ue(!le)
					})
				]
			}),
			pe && g && /* @__PURE__ */ (0, b.jsx)("div", {
				className: "modal-overlay z-50",
				children: /* @__PURE__ */ (0, b.jsxs)("div", {
					className: "modal-content max-w-lg w-full bg-bg-panel border border-border-color rounded-lg p-5",
					children: [/* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex justify-between items-center border-b border-border-color pb-3 mb-4",
						children: [/* @__PURE__ */ (0, b.jsx)("h3", {
							className: "text-sm font-bold text-text-primary",
							children: "Gestor de Archivos"
						}), /* @__PURE__ */ (0, b.jsx)("button", {
							onClick: () => me(!1),
							className: "bg-transparent border-none text-text-muted hover:text-text-primary cursor-pointer text-lg font-bold",
							children: "×"
						})]
					}), /* @__PURE__ */ (0, b.jsx)("div", {
						className: "modal-body",
						children: e.isValidElement(g) ? e.cloneElement(g, {
							onSelect: (e) => {
								he && he(e), me(!1);
							},
							onClose: () => me(!1)
						}) : g
					})]
				})
			}),
			_e && _ && /* @__PURE__ */ (0, b.jsx)("div", {
				className: "modal-overlay z-50",
				children: /* @__PURE__ */ (0, b.jsxs)("div", {
					className: "modal-content max-w-lg w-full bg-bg-panel border border-border-color rounded-lg p-5",
					children: [/* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex justify-between items-center border-b border-border-color pb-3 mb-4",
						children: [/* @__PURE__ */ (0, b.jsx)("h3", {
							className: "text-sm font-bold text-text-primary",
							children: "Gestor de Videos"
						}), /* @__PURE__ */ (0, b.jsx)("button", {
							onClick: () => ve(!1),
							className: "bg-transparent border-none text-text-muted hover:text-text-primary cursor-pointer text-lg font-bold",
							children: "×"
						})]
					}), /* @__PURE__ */ (0, b.jsx)("div", {
						className: "modal-body",
						children: e.isValidElement(_) ? e.cloneElement(_, {
							onSelect: (e) => {
								ye && ye(e), ve(!1);
							},
							onClose: () => ve(!1)
						}) : _
					})]
				})
			}),
			xe && v && /* @__PURE__ */ (0, b.jsx)("div", {
				className: "modal-overlay z-50",
				children: /* @__PURE__ */ (0, b.jsxs)("div", {
					className: "modal-content max-w-4xl w-full bg-bg-panel border border-border-color rounded-lg p-5",
					children: [/* @__PURE__ */ (0, b.jsxs)("div", {
						className: "flex justify-between items-center border-b border-border-color pb-3 mb-4",
						children: [/* @__PURE__ */ (0, b.jsx)("h3", {
							className: "text-sm font-bold text-text-primary",
							children: "Gestor de Archivos"
						}), /* @__PURE__ */ (0, b.jsx)("button", {
							onClick: () => Se(!1),
							className: "bg-transparent border-none text-text-muted hover:text-text-primary cursor-pointer text-lg font-bold",
							children: "×"
						})]
					}), /* @__PURE__ */ (0, b.jsx)("div", {
						className: "modal-body",
						children: e.isValidElement(v) ? e.cloneElement(v, {
							onInsert: (e) => {
								Ce && Ce(e);
							},
							onClose: () => Se(!1)
						}) : v
					})]
				})
			}),
			Ae && /* @__PURE__ */ (0, b.jsx)("div", {
				className: "modal-overlay",
				children: /* @__PURE__ */ (0, b.jsxs)("div", {
					className: "modal-content",
					children: [
						/* @__PURE__ */ (0, b.jsxs)("div", {
							className: "modal-header",
							children: [/* @__PURE__ */ (0, b.jsx)("h2", { children: S("importTitle") }), /* @__PURE__ */ (0, b.jsx)("button", {
								onClick: () => je(!1),
								className: "modal-close-btn",
								children: /* @__PURE__ */ (0, b.jsx)(Ct, { size: 18 })
							})]
						}),
						/* @__PURE__ */ (0, b.jsxs)("div", {
							className: "modal-body",
							children: [/* @__PURE__ */ (0, b.jsx)("textarea", {
								value: Ie,
								onChange: (e) => Le(e.target.value),
								placeholder: S("importPlaceholder"),
								className: "bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full font-mono text-[11px]",
								rows: 12
							}), Re && /* @__PURE__ */ (0, b.jsx)("span", {
								className: "text-danger text-xs",
								children: Re
							})]
						}),
						/* @__PURE__ */ (0, b.jsxs)("div", {
							className: "modal-footer",
							children: [/* @__PURE__ */ (0, b.jsx)("button", {
								onClick: () => je(!1),
								className: "border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-bg-hover text-text-primary border border-border-color hover:bg-border-color/50",
								children: S("close")
							}), /* @__PURE__ */ (0, b.jsx)("button", {
								onClick: Lt,
								className: "border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-primary hover:bg-primary-hover text-white",
								children: S("load")
							})]
						})
					]
				})
			}),
			Me && /* @__PURE__ */ (0, b.jsx)("div", {
				className: "modal-overlay",
				children: /* @__PURE__ */ (0, b.jsxs)("div", {
					className: "modal-content !w-[600px]",
					children: [
						/* @__PURE__ */ (0, b.jsxs)("div", {
							className: "modal-header",
							children: [/* @__PURE__ */ (0, b.jsx)("h2", { children: S("export") }), /* @__PURE__ */ (0, b.jsx)("button", {
								onClick: () => Ne(!1),
								className: "modal-close-btn",
								children: /* @__PURE__ */ (0, b.jsx)(Ct, { size: 18 })
							})]
						}),
						/* @__PURE__ */ (0, b.jsxs)("div", {
							className: "modal-body",
							children: [/* @__PURE__ */ (0, b.jsx)("p", {
								className: "text-xs text-text-secondary",
								children: S("exportSuccess")
							}), /* @__PURE__ */ (0, b.jsxs)("div", {
								className: "flex gap-2 mt-2.5",
								children: [/* @__PURE__ */ (0, b.jsx)("button", {
									onClick: () => {
										let e = new Blob([vt], { type: "text/plain;charset=utf-8" }), t = URL.createObjectURL(e), n = document.createElement("a");
										n.href = t, n.download = "template.mjml", n.click();
									},
									className: "flex-1 border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-bg-hover text-text-primary border border-border-color hover:bg-border-color/50",
									children: "Download MJML"
								}), /* @__PURE__ */ (0, b.jsx)("button", {
									onClick: () => {
										let e = new Blob([bt], { type: "text/html;charset=utf-8" }), t = URL.createObjectURL(e), n = document.createElement("a");
										n.href = t, n.download = "template.html", n.click();
									},
									className: "flex-1 border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-primary hover:bg-primary-hover text-white",
									children: "Download HTML"
								})]
							})]
						}),
						/* @__PURE__ */ (0, b.jsx)("div", {
							className: "modal-footer",
							children: /* @__PURE__ */ (0, b.jsx)("button", {
								onClick: () => Ne(!1),
								className: "border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-bg-hover text-text-primary border border-border-color hover:bg-border-color/50",
								children: S("close")
							})
						})
					]
				})
			}),
			Pe && /* @__PURE__ */ (0, b.jsx)("div", {
				className: "modal-overlay",
				children: /* @__PURE__ */ (0, b.jsxs)("div", {
					className: "modal-content",
					children: [
						/* @__PURE__ */ (0, b.jsxs)("div", {
							className: "modal-header",
							children: [/* @__PURE__ */ (0, b.jsx)("h2", { children: S("sendTest") }), /* @__PURE__ */ (0, b.jsx)("button", {
								onClick: () => Fe(!1),
								className: "modal-close-btn",
								children: /* @__PURE__ */ (0, b.jsx)(Ct, { size: 18 })
							})]
						}),
						/* @__PURE__ */ (0, b.jsxs)("div", {
							className: "modal-body",
							children: [
								/* @__PURE__ */ (0, b.jsx)("label", {
									className: "text-[11.5px] font-medium text-text-secondary",
									children: S("enterTestEmails")
								}),
								/* @__PURE__ */ (0, b.jsx)("input", {
									type: "text",
									placeholder: "test@example.com, user@domain.com",
									value: Be,
									onChange: (e) => Ve(e.target.value),
									className: "bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full"
								}),
								He && /* @__PURE__ */ (0, b.jsxs)("div", {
									className: "p-2 px-3 bg-green-500/15 text-success rounded-md text-xs flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, b.jsx)(at, { size: 14 }), /* @__PURE__ */ (0, b.jsx)("span", { children: He })]
								})
							]
						}),
						/* @__PURE__ */ (0, b.jsxs)("div", {
							className: "modal-footer",
							children: [/* @__PURE__ */ (0, b.jsx)("button", {
								onClick: () => Fe(!1),
								className: "border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-bg-hover text-text-primary border border-border-color hover:bg-border-color/50",
								children: S("close")
							}), /* @__PURE__ */ (0, b.jsx)("button", {
								onClick: Rt,
								className: "border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-accent-color text-white hover:opacity-90 disabled:opacity-55 disabled:cursor-not-allowed",
								disabled: !Be.trim(),
								children: S("send")
							})]
						})
					]
				})
			}),
			We && /* @__PURE__ */ (0, b.jsx)("div", {
				className: "modal-overlay",
				children: /* @__PURE__ */ (0, b.jsxs)("div", {
					className: "modal-content !w-[650px]",
					children: [
						/* @__PURE__ */ (0, b.jsxs)("div", {
							className: "modal-header",
							children: [/* @__PURE__ */ (0, b.jsxs)("h2", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, b.jsx)(at, {
									size: 18,
									className: "text-primary animate-pulse"
								}), /* @__PURE__ */ (0, b.jsx)("span", { children: We.name })]
							}), /* @__PURE__ */ (0, b.jsx)("button", {
								onClick: () => Ge(null),
								className: "modal-close-btn",
								children: /* @__PURE__ */ (0, b.jsx)(Ct, { size: 18 })
							})]
						}),
						/* @__PURE__ */ (0, b.jsxs)("div", {
							className: "modal-body",
							children: [
								/* @__PURE__ */ (0, b.jsxs)("div", {
									className: "flex items-center justify-between border-b border-border-color pb-2.5",
									children: [/* @__PURE__ */ (0, b.jsxs)("span", {
										className: "text-xs font-mono text-text-secondary",
										children: ["Path: ", Ke]
									}), /* @__PURE__ */ (0, b.jsxs)("div", {
										className: "flex gap-2",
										children: [Ke !== "/" && /* @__PURE__ */ (0, b.jsx)("button", {
											onClick: () => {
												let e = Ke.split("/").filter(Boolean);
												e.pop(), qe("/" + e.join("/"));
											},
											className: "border border-border-color p-1.5 px-3 rounded-md text-[11px] font-semibold cursor-pointer transition-all bg-bg-hover text-text-primary hover:bg-border-color/50",
											children: "Volver"
										}), /* @__PURE__ */ (0, b.jsxs)("label", {
											className: "border border-border-color p-1.5 px-3 rounded-md text-[11px] font-semibold cursor-pointer transition-all bg-primary hover:bg-primary-hover text-white flex items-center gap-1",
											children: [/* @__PURE__ */ (0, b.jsx)("span", { children: "Subir archivo" }), /* @__PURE__ */ (0, b.jsx)("input", {
												type: "file",
												className: "hidden",
												onChange: ht
											})]
										})]
									})]
								}),
								Qe && /* @__PURE__ */ (0, b.jsx)("div", {
									className: "p-2 px-3 bg-red-500/15 text-danger rounded-md text-xs",
									children: Qe
								}),
								/* @__PURE__ */ (0, b.jsx)("div", {
									className: "border border-border-color rounded-lg max-h-[300px] overflow-y-auto bg-bg-app",
									children: Xe ? /* @__PURE__ */ (0, b.jsxs)("div", {
										className: "flex items-center justify-center p-8 text-xs text-text-secondary gap-2",
										children: [/* @__PURE__ */ (0, b.jsx)("div", { className: "animate-spin w-4 h-4 border-2 border-primary border-t-transparent rounded-full" }), "Cargando archivos..."]
									}) : Je.length === 0 ? /* @__PURE__ */ (0, b.jsx)("div", {
										className: "p-8 text-center text-xs text-text-muted",
										children: "No se encontraron archivos en este directorio."
									}) : /* @__PURE__ */ (0, b.jsx)("div", {
										className: "divide-y divide-border-color",
										children: Je.map((e, t) => {
											let n = e.type === "dir";
											return /* @__PURE__ */ (0, b.jsxs)("div", {
												onClick: () => {
													n ? qe(Ke === "/" ? `/${e.name}` : `${Ke}/${e.name}`) : tt(e);
												},
												className: `flex items-center justify-between p-2.5 px-4 cursor-pointer transition-all text-xs hover:bg-bg-hover ${et?.id === e.id ? "bg-primary/10 border-l-2 border-primary font-semibold" : ""}`,
												children: [/* @__PURE__ */ (0, b.jsxs)("div", {
													className: "flex items-center gap-2.5",
													children: [/* @__PURE__ */ (0, b.jsx)("span", {
														className: "text-base",
														children: n ? "📁" : "📄"
													}), /* @__PURE__ */ (0, b.jsx)("span", {
														className: "text-text-primary",
														children: e.name
													})]
												}), /* @__PURE__ */ (0, b.jsx)("span", {
													className: "text-[10px] text-text-muted capitalize",
													children: e.type
												})]
											}, e.id || t);
										})
									})
								})
							]
						}),
						/* @__PURE__ */ (0, b.jsxs)("div", {
							className: "modal-footer",
							children: [/* @__PURE__ */ (0, b.jsx)("button", {
								onClick: () => Ge(null),
								className: "border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-bg-hover text-text-primary border border-border-color hover:bg-border-color/50",
								children: "Cerrar"
							}), /* @__PURE__ */ (0, b.jsx)("button", {
								onClick: () => mt(et),
								disabled: !et,
								className: "border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-primary hover:bg-primary-hover text-white disabled:opacity-50 disabled:cursor-not-allowed",
								children: "Cargar Plantilla"
							})]
						})
					]
				})
			}),
			nt && /* @__PURE__ */ (0, b.jsx)("div", {
				className: "modal-overlay",
				children: /* @__PURE__ */ (0, b.jsxs)("div", {
					className: "modal-content",
					children: [
						/* @__PURE__ */ (0, b.jsxs)("div", {
							className: "modal-header",
							children: [/* @__PURE__ */ (0, b.jsxs)("h2", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, b.jsx)(at, {
									size: 18,
									className: "text-accent-color animate-pulse"
								}), /* @__PURE__ */ (0, b.jsxs)("span", { children: ["Sync con ", nt.name] })]
							}), /* @__PURE__ */ (0, b.jsx)("button", {
								onClick: () => rt(null),
								className: "modal-close-btn",
								children: /* @__PURE__ */ (0, b.jsx)(Ct, { size: 18 })
							})]
						}),
						/* @__PURE__ */ (0, b.jsxs)("div", {
							className: "modal-body",
							children: [
								/* @__PURE__ */ (0, b.jsxs)("p", {
									className: "text-xs text-text-secondary",
									children: [
										"Sincroniza directamente tus plantillas de correo con ",
										nt.name,
										"."
									]
								}),
								st && /* @__PURE__ */ (0, b.jsx)("div", {
									className: "p-2 px-3 bg-green-500/15 text-success rounded-md text-xs",
									children: st
								}),
								lt && /* @__PURE__ */ (0, b.jsx)("div", {
									className: "p-2 px-3 bg-red-500/15 text-danger rounded-md text-xs",
									children: lt
								}),
								/* @__PURE__ */ (0, b.jsxs)("div", {
									className: "border border-border-color rounded-lg p-4 bg-bg-hover flex flex-col gap-2.5",
									children: [
										/* @__PURE__ */ (0, b.jsx)("h3", {
											className: "text-xs font-bold text-text-primary",
											children: "Subir plantilla actual"
										}),
										/* @__PURE__ */ (0, b.jsxs)("p", {
											className: "text-[11px] text-text-muted",
											children: [
												"Sube el diseño HTML actual directamente a tu cuenta de ",
												nt.name,
												"."
											]
										}),
										/* @__PURE__ */ (0, b.jsxs)("button", {
											onClick: gt,
											disabled: it,
											className: "border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-primary hover:bg-primary-hover text-white disabled:opacity-50 flex items-center justify-center gap-2",
											children: [it && /* @__PURE__ */ (0, b.jsx)("div", { className: "animate-spin w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full" }), /* @__PURE__ */ (0, b.jsxs)("span", { children: ["Exportar a ", nt.name] })]
										})
									]
								}),
								/* @__PURE__ */ (0, b.jsxs)("div", {
									className: "border border-border-color rounded-lg p-4 bg-bg-hover flex flex-col gap-2.5",
									children: [
										/* @__PURE__ */ (0, b.jsx)("h3", {
											className: "text-xs font-bold text-text-primary",
											children: "Importar plantilla"
										}),
										/* @__PURE__ */ (0, b.jsxs)("p", {
											className: "text-[11px] text-text-muted",
											children: [
												"Introduce el ID de una plantilla existente en ",
												nt.name,
												" para cargarla."
											]
										}),
										/* @__PURE__ */ (0, b.jsxs)("div", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, b.jsx)("input", {
												type: "text",
												placeholder: "ID de plantilla (ej. tmp_1234)",
												value: dt,
												onChange: (e) => ft(e.target.value),
												className: "flex-1 bg-bg-panel border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary"
											}), /* @__PURE__ */ (0, b.jsx)("button", {
												onClick: _t,
												disabled: it || !dt.trim(),
												className: "border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-accent-color text-white hover:opacity-90 disabled:opacity-50",
												children: /* @__PURE__ */ (0, b.jsx)("span", { children: "Importar" })
											})]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, b.jsx)("div", {
							className: "modal-footer",
							children: /* @__PURE__ */ (0, b.jsx)("button", {
								onClick: () => rt(null),
								className: "border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-bg-hover text-text-primary border border-border-color hover:bg-border-color/50",
								children: "Cerrar"
							})
						})
					]
				})
			})
		]
	});
}), eg = class extends t {
	constructor(e) {
		super(e), this.state = {
			hasError: !1,
			error: null
		};
	}
	static getDerivedStateFromError(e) {
		return {
			hasError: !0,
			error: e
		};
	}
	componentDidCatch(e, t) {
		console.error("[ErrorBoundary] Caught:", e, t);
	}
	render() {
		return this.state.hasError ? /* @__PURE__ */ (0, b.jsxs)("div", {
			className: "flex flex-col items-center justify-center h-screen w-screen bg-bg-app text-text-primary p-8",
			children: [
				/* @__PURE__ */ (0, b.jsx)("h2", {
					className: "text-lg font-bold mb-2",
					children: "Algo salió mal"
				}),
				/* @__PURE__ */ (0, b.jsx)("pre", {
					className: "text-xs text-danger max-w-xl overflow-auto border border-border-color rounded-lg p-4 bg-bg-hover",
					children: this.state.error?.message
				}),
				/* @__PURE__ */ (0, b.jsx)("button", {
					onClick: () => {
						this.setState({
							hasError: !1,
							error: null
						}), window.location.reload();
					},
					className: "mt-4 border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-primary hover:bg-primary-hover text-white",
					children: "Recargar"
				})
			]
		}) : this.props.children;
	}
}, tg = a((e, t) => /* @__PURE__ */ (0, b.jsx)(eg, { children: /* @__PURE__ */ (0, b.jsx)(C, { children: /* @__PURE__ */ (0, b.jsx)(ee, {
	initialLang: e.lang,
	children: /* @__PURE__ */ (0, b.jsx)($h, {
		...e,
		ref: t
	})
}) }) }));
//#endregion
export { tg as BuilderXD, tg as default };
