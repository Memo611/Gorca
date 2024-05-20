using API.Comun;
using API.Comun.Interfaz;
using API.Entidades;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/[Controller]")]
[ApiController]

public class ProveedoresController : ControllerBase
{
    private readonly IApliacacionBdContexto _contexto;

    public ProveedoresController(IApliacacionBdContexto contexto)
    {
        _contexto = contexto;
    }
    
    // GET
    [HttpGet]
    public IEnumerable<ItemProveedor> Get()
    {
        var listaProveedores = (from pro in _contexto.Proveedor
            where pro.Habilitado == true
            select new ItemProveedor()
            {
                idEmpr = pro.ID_empresa,
                Rfc = pro.RFC,
                RegFis = pro.Regimen_fiscal,
                NomCom = pro.Nombre_comercial,
                Calle = pro.Calle,
                Num = pro.Numero,
                Col = pro.Colonia,
                Ciud = pro.Ciudad,
                CP = pro.CP,
                Pais = pro.Pais,
                Tel = pro.Telefono
                    

            }).ToArray();
        return listaProveedores;
    }
    
    // GET Individual
    [HttpGet("{id}")]
    public ItemProveedor Get(int id)
    {
        var proveedor = (from pro in _contexto.Proveedor
            where pro.ID_empresa == id
            select new ItemProveedor()
            {
                idEmpr = pro.ID_empresa,
                Rfc = pro.RFC,
                RegFis = pro.Regimen_fiscal,
                NomCom = pro.Nombre_comercial,
                Calle = pro.Calle,
                Num = pro.Numero,
                Col = pro.Colonia,
                Ciud = pro.Ciudad,
                CP = pro.CP,
                Pais = pro.Pais,
                Tel = pro.Telefono
            }).FirstOrDefault();

        return proveedor;
    }
    
    // POST 
    [HttpPost]
    public ActionResult Post([FromBody] ItemProveedor nuevoProveedor)
    {
        if (nuevoProveedor.idEmpr > 0)
            return BadRequest();

        var proveedor = new Proveedores();
        proveedor.ID_empresa = nuevoProveedor.idEmpr;

        _contexto.Proveedor.Add(proveedor);
        _contexto.SaveChanges();

        return Ok();
    }

    // PUT
    [HttpPut("{id}")]
    public ActionResult Put(int id, [FromBody] ItemProveedor proveedor)
    {
        var proveedorModificar = _contexto.Proveedor.Find(id);

        if (proveedor == null)
            return BadRequest();

        proveedorModificar.ID_empresa = proveedor.idEmpr;
        _contexto.SaveChanges();

        return Ok();
    }

    // DELETE
    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
        var proveedor = _contexto.Proveedor.Find(id);

        if(proveedor != null)
            proveedor.Habilitado = !proveedor.Habilitado;

        _contexto.SaveChanges();

        return Ok();
    }
}