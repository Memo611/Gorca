
using API.Comun;
using API.Comun.Interfaz;
using API.Entidades;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;
[EnableCors("PoliticasCors")]
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
        var listaProveedores = (from pro in _contexto.Proveedores
            where pro.Habilitado == true
            select new ItemProveedor()
            {
                idEmpr = pro.ID_Prov,
                Rfc = pro.RFC_Prov,
                RazSoc = pro.Razon_Social_Prov,
                RegFis = pro.Regimen_Fiscal_Prov,
                NomCom = pro.Nombre_Comercial_Prov,
                Calle = pro.Calle_Prov,
                Num = pro.Numero_Prov,
                Col = pro.Colonia_Prov,
                Ciud = pro.Ciudad_Prov,
                CP = pro.CP_Prov,
                Pais = pro.Pais_Prov
                    

            }).ToArray();
        return listaProveedores;
    }
    
    // GET Individual
    [HttpGet("{id}")]
    public ItemProveedor Get(int id)
    {
        var proveedor = (from pro in _contexto.Proveedores
            where pro.ID_Prov == id
            select new ItemProveedor()
            {
                idEmpr = pro.ID_Prov,
                Rfc = pro.RFC_Prov,
                RazSoc = pro.Razon_Social_Prov,
                RegFis = pro.Regimen_Fiscal_Prov,
                NomCom = pro.Nombre_Comercial_Prov,
                Calle = pro.Calle_Prov,
                Num = pro.Numero_Prov,
                Col = pro.Colonia_Prov,
                Ciud = pro.Ciudad_Prov,
                CP = pro.CP_Prov,
                Pais = pro.Pais_Prov
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
        proveedor.ID_Prov = nuevoProveedor.idEmpr;

        _contexto.Proveedores.Add(proveedor);
        _contexto.SaveChanges();

        return Ok();
    }

    // PUT
    [HttpPut("{id}")]
    public ActionResult Put(int id, [FromBody] ItemProveedor proveedor)
    {
        var proveedorModificar = _contexto.Proveedores.Find(id);

        if (proveedor == null)
            return BadRequest();

        proveedorModificar.ID_Prov = proveedor.idEmpr;
        _contexto.SaveChanges();

        return Ok();
    }

    // DELETE
    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
        var proveedor = _contexto.Proveedores.Find(id);

        if(proveedor != null)
            proveedor.Habilitado = !proveedor.Habilitado;

        _contexto.SaveChanges();

        return Ok();
    }
}
