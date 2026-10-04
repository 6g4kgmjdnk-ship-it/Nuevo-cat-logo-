:root{--y:#FFD91A}
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
body{margin:0;background:#000;color:var(--y);font:15px/1.9 "Courier New",Courier,monospace;
  text-transform:uppercase;letter-spacing:.14em}
button{font:inherit;letter-spacing:inherit;text-transform:inherit;color:inherit;cursor:pointer}
a{color:inherit;text-decoration:none}
:focus-visible{outline:2px solid var(--y);outline-offset:2px}

.barra{height:14px;background:#9b1c14}
header{position:sticky;top:0;z-index:5;background:#000;display:grid;
  grid-template-columns:1fr auto 1fr;align-items:center;padding:12px 18px}
.logo{justify-self:center}
.logo img{height:62px;display:block}
.icono{background:none;border:0;padding:6px;fill:var(--y);position:relative}
#btn-menu{justify-self:start}
#btn-carrito{justify-self:end}
#contador{position:absolute;top:-4px;right:-6px;min-width:22px;height:22px;border-radius:11px;
  background:var(--y);color:#000;font-size:12px;line-height:22px;text-align:center;letter-spacing:0}

#grid{display:grid;grid-template-columns:1fr 1fr;gap:26px 8px;padding:6px 8px 40px}
.item{text-align:center;cursor:pointer}
.item img{width:100%;aspect-ratio:3/4;object-fit:cover;display:block;background:#0d0d0d;
  filter:drop-shadow(0 0 10px rgba(255,255,255,.12))}
.item h3{font:inherit;margin:14px 0 0;padding:0 4px}
.item p{margin:0}
.agotado{opacity:.45}

#velo{position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:10}
.panel{position:fixed;top:0;bottom:0;width:min(86vw,380px);background:#000;z-index:11;
  padding:18px;overflow-y:auto;display:flex;flex-direction:column;transition:transform .3s}
.izq{left:0;transform:translateX(-105%);border-right:3px solid var(--y)}
.der{right:0;transform:translateX(105%);border-left:3px solid var(--y)}
.panel.on{transform:none}
.x{align-self:flex-end;background:none;border:0;font-size:26px;padding:4px 8px}
h2{font-size:18px;font-weight:400;margin:4px 0 16px}
#cats button,#menu a{display:block;width:100%;text-align:left;background:none;border:0;
  border-top:1px solid #333;padding:14px 0}
#cats button.on{background:var(--y);color:#000;padding-left:10px}

.fila{display:grid;grid-template-columns:64px 1fr;gap:12px;padding:14px 0;border-bottom:1px solid #333;font-size:13px;line-height:1.6}
.fila img{width:64px;height:84px;object-fit:cover;background:#0d0d0d}
.cant{display:flex;gap:10px;align-items:center;margin-top:6px}
.cant button{width:32px;height:32px;background:none;border:2px solid var(--y);letter-spacing:0}
.cant .q{width:auto;padding:0 10px;margin-left:auto;font-size:12px}
.pie{margin-top:auto;padding-top:16px}
.total{display:flex;justify-content:space-between;margin:0 0 12px}
.vacio{text-align:center;font-size:13px;padding:30px 0}

.btn{display:block;width:100%;padding:16px 8px;background:#000;border:3px solid var(--y);font-size:14px;text-align:center}
.btn:active{background:var(--y);color:#000}
.btn:disabled{opacity:.4}

#detalle{position:fixed;inset:0;z-index:12;background:#000;overflow-y:auto;padding:14px 18px 40px;text-align:center}
#detalle[hidden]{display:none}
#detalle .x{position:sticky;top:0;float:right;background:#000}
#d-img{width:100%;max-width:520px;aspect-ratio:3/4;object-fit:cover;background:#0d0d0d;clear:both;display:block;margin:0 auto 16px}
#d-nombre{font:inherit;font-size:16px;margin:0}
#d-precio{margin:0 0 10px}
#d-desc{font-size:13px;text-transform:none;letter-spacing:.05em;margin:0 0 14px}
#d-tallas{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-bottom:18px}
#d-tallas button{min-width:48px;padding:8px;background:none;border:2px solid var(--y);letter-spacing:0}
#d-tallas button.on{background:var(--y);color:#000}
#d-agregar{max-width:520px;margin:0 auto}

#aviso{position:fixed;left:50%;bottom:24px;transform:translate(-50%,30px);background:var(--y);color:#000;
  padding:10px 18px;font-size:13px;opacity:0;pointer-events:none;transition:.25s;z-index:30}
#aviso.ver{opacity:1;transform:translate(-50%,0)}

@media(min-width:760px){#grid{grid-template-columns:repeat(4,1fr);max-width:1200px;margin:0 auto}}
