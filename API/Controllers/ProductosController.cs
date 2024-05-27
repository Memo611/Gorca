
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
                idProd = p.ID_Prod,
                Marc = p.Marca,
                Vol = p.Volumen,
                FecFresc = p.Fecha_Max_Frescura,
                Sabo = p.Sabor,
                Sku = p.SKU,
                Prec = p.Precio,
                ObjImpu = p.Obj_Impu,
                ClavUni = p.Clave_Unidad,
                ClavProd = p.Clave_Prod_Serv,
                BaseMan = p.Base_Manual,
                Desc = p.Descripcion,
                Existencia = p.Cant_Exist,
                StockMin = p.Stock_Min,
                StockMax =p.Stock_Max 
                    

            }).ToArray();
        return listaProductos;
    }
    
    // GET Individual
    [HttpGet("{id}")]
    public ItemProducto Get(int id)
    {
        var producto = (from p in _contexto.Producto
            where p.ID_Prod == id
            select new ItemProducto()
            {
                idProd = p.ID_Prod,
                Marc = p.Marca,
                Vol = p.Volumen,
                FecFresc = p.Fecha_Max_Frescura,
                Sabo = p.Sabor,
                Sku = p.SKU,
                Prec = p.Precio,
                ObjImpu = p.Obj_Impu,
                ClavUni = p.Clave_Unidad,
                ClavProd = p.Clave_Prod_Serv,
                BaseMan = p.Base_Manual,
                Desc = p.Descripcion,
                Existencia = p.Cant_Exist,
                StockMin = p.Stock_Min,
                StockMax =p.Stock_Max 
            }).FirstOrDefault();

        return producto;
    }
    
    // POST 
    [HttpPost]
    public ActionResult Post([FromBody] ItemProducto nuevoProducto)
    {
        if (nuevoProducto.idProd > 0)
            return BadRequest();

        var producto = new Producto();
        producto.ID_Prod = nuevoProducto.idProd;

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

        productoModificar.ID_Prod = producto.idProd;
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
