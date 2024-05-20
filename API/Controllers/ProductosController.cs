using API.Comun;
using API.Comun.Interfaz;
using API.Entidades;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/[Controller]")]
[ApiController]

public class ProductosController : ControllerBase
{
    private readonly IApliacacionBdContexto _contexto;

    public ProductosController(IApliacacionBdContexto contexto)
    {
        _contexto = contexto;
    }
    
    // GET
    [HttpGet]
    public IEnumerable<ItemProducto> Get()
    {
        var listaProductos = (from p in _contexto.Producto
            where p.Habilitado == true
            select new ItemProducto()
            {
                idProd = p.ID_prod,
                Marc = p.Marca,
                Vol = p.Volumen,
                FecFresc = p.Fecha_max_fresc,
                Sabo = p.Sabor,
                Prec = p.Precio,
                ObjImpu = p.Objeto_impu,
                ClavUni = p.Clave_unidad,
                ClavProd = p.Clave_prod_serv,
                BaseMan = p.Base_manual,
                Desc = p.Descripcion,
                Uni = p.Unidad,
                StockMin = p.Stock_min,
                StockMax =p.Stock_max 
                    

            }).ToArray();
        return listaProductos;
    }
    
    // GET Individual
    [HttpGet("{id}")]
    public ItemProducto Get(int id)
    {
        var producto = (from p in _contexto.Producto
            where p.ID_prod == id
            select new ItemProducto()
            {
                idProd = p.ID_prod,
                Marc = p.Marca,
                Vol = p.Volumen,
                FecFresc = p.Fecha_max_fresc,
                Sabo = p.Sabor,
                Prec = p.Precio,
                ObjImpu = p.Objeto_impu,
                ClavUni = p.Clave_unidad,
                ClavProd = p.Clave_prod_serv,
                BaseMan = p.Base_manual,
                Desc = p.Descripcion,
                Uni = p.Unidad,
                StockMin = p.Stock_min,
                StockMax =p.Stock_max 
            }).FirstOrDefault();

        return producto;
    }
    
    // POST 
    [HttpPost]
    public ActionResult Post([FromBody] ItemProducto nuevoProducto)
    {
        if (nuevoProducto.idProd > 0)
            return BadRequest();

        var producto = new Productos();
        producto.ID_prod = nuevoProducto.idProd;

        _contexto.Producto.Add(producto);
        _contexto.SaveChanges();

        return Ok();
    }

    // PUT
    [HttpPut("{id}")]
    public ActionResult Put(int id, [FromBody] ItemProducto producto)
    {
        var productoModificar = _contexto.Producto.Find(id);

        if (producto == null)
            return BadRequest();

        productoModificar.ID_prod = producto.idProd;
        _contexto.SaveChanges();

        return Ok();
    }

    // DELETE
    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
        var producto = _contexto.Producto.Find(id);

        if(producto != null)
            producto.Habilitado = !producto.Habilitado;

        _contexto.SaveChanges();

        return Ok();
    }
}