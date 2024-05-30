
using API.Comun;
using API.Comun.Interfaz;
using API.Entidades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Text.RegularExpressions;

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
                StockMax = p.Stock_Max,
                CatProd = p.Categoria.ID_Cat,
                Provedor = p.Proveedores.ID_Prov

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
        if (string.IsNullOrEmpty(nuevoProducto.Marc))
            return BadRequest();

        // Verificar si la categoría proporcionada es válida
        var categoria = _contexto.Categoria.Find(nuevoProducto.CatProd);
        if (categoria == null)
            return BadRequest("La categoría especificada no es válida.");
        // Verificar si el proveedor proporcionado es válido
        var Provedor = _contexto.Proveedores.Find(nuevoProducto.Provedor);
        if (Provedor == null)
            return BadRequest("El proveedor especificado no es válido.");

        var existe = (from p in _contexto.Producto
                      where p.Marca == nuevoProducto.Marc && p.Volumen == nuevoProducto.Vol
                      select p).Any();

        if (existe)
            return BadRequest();

        var producto = new Producto()
        {
            Marca = nuevoProducto.Marc,
            Volumen = nuevoProducto.Vol,
            Fecha_Max_Frescura= nuevoProducto.FecFresc,
            Sabor = nuevoProducto.Sabo,
            SKU = nuevoProducto.Sku,
            Precio = nuevoProducto.Prec,
            Obj_Impu = nuevoProducto.ObjImpu,
            Clave_Unidad = nuevoProducto.ClavUni,
            Clave_Prod_Serv = nuevoProducto.ClavProd,
            Base_Manual = nuevoProducto.BaseMan,
            Descripcion = nuevoProducto.Desc,
            Cant_Exist = nuevoProducto.Existencia,
            Stock_Min = nuevoProducto.StockMin,
            Stock_Max = nuevoProducto.StockMax,
            Habilitado = true,
            Categoria = categoria, // Asignar la categoría al producto
            Proveedores = Provedor
        };
        
        _contexto.Producto.Add(producto);
        _contexto.SaveChanges();

        return Ok();
    }

    // PUT
    [HttpPut("{id}")]
    public ActionResult Put(int id, [FromBody] ItemProducto producto)
    {
        if (id > 0)
        {
            var productoModificar = _contexto.Producto.Find(id);

            if (producto == null)
                return BadRequest();

            productoModificar.ID_Prod = producto.idProd;
            productoModificar.Marca = producto.Marc;
            productoModificar.Volumen = producto.Vol;
            productoModificar.Fecha_Max_Frescura = producto.FecFresc;
            productoModificar.Sabor = producto.Sabo;
            productoModificar.SKU = producto.Sku;
            productoModificar.Precio = producto.Prec;
            productoModificar.Obj_Impu = producto.ObjImpu;
            productoModificar.Clave_Unidad = producto.ClavUni;
            productoModificar.Clave_Prod_Serv = producto.ClavProd;
            productoModificar.Base_Manual = producto.BaseMan;
            productoModificar.Descripcion = producto.Desc;
            productoModificar.Cant_Exist = producto.Existencia;
            productoModificar.Stock_Min = producto.StockMin;
            productoModificar.Stock_Max = producto.StockMax;

            _contexto.SaveChanges();

            return Ok();
        }
        else
        {
            return BadRequest();
        }
    }

    // DELETE
    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
        var producto = _contexto.Producto.Find(id);

        if (producto != null)
            producto.Habilitado = false;

        _contexto.Producto.Remove(producto);
        _contexto.SaveChanges();

        return Ok();
    }
}
