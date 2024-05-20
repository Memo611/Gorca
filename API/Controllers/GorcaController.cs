using API.Comun;
using API.Comun.Interfaz;
using API.Entidades;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/[Controller]")]
[ApiController]

public class GorcaController : ControllerBase
{
    private readonly IApliacacionBdContexto _contexto;

    public GorcaController(IApliacacionBdContexto contexto)
    {
        _contexto = contexto;
    }
    
    // GET
    [HttpGet]
    public IEnumerable<ItemGORCA> Get()
    {
        var listaEmpresas = (from g in _contexto.Gorca
            where g.Habilitado == true
            select new ItemGORCA()
            {
                idEmpr = g.ID_empresa,
                Rfc = g.RFC,
                RegFis = g.Regimen_fiscal,
                NomCom = g.Nombre_comercial,
                Calle = g.Calle,
                Num = g.Numero,
                Col = g.Colonia,
                Ciud = g.Ciudad,
                CP = g.CP,
                Pais = g.Pais,
                Tel = g.Telefono

            }).ToArray();
        return listaEmpresas;
    }
    
    // GET Individual
    [HttpGet("{id}")]
    public ItemGORCA Get(int id)
    {
        var empresa = (from g in _contexto.Gorca
            where g.ID_empresa == id
            select new ItemGORCA()
            {
                idEmpr = g.ID_empresa,
                Rfc = g.RFC,
                RegFis = g.Regimen_fiscal,
                NomCom = g.Nombre_comercial,
                Calle = g.Calle,
                Num = g.Numero,
                Col = g.Colonia,
                Ciud = g.Ciudad,
                CP = g.CP,
                Pais = g.Pais,
                Tel = g.Telefono
            }).FirstOrDefault();

        return empresa;
    }
    
    // POST 
    [HttpPost]
    public ActionResult Post([FromBody] ItemGORCA nuevaEmpresa)
    {
        if (nuevaEmpresa.idEmpr > 0)
            return BadRequest();

        var empresa = new GORCA();
        empresa.ID_empresa = nuevaEmpresa.idEmpr;

        _contexto.Gorca.Add(empresa);
        _contexto.SaveChanges();

        return Ok();
    }

    // PUT 
    [HttpPut("{id}")]
    public ActionResult Put(int id, [FromBody] ItemGORCA empresa)
    {
        var empresaModificar = _contexto.Gorca.Find(id);

        if (empresa == null)
            return BadRequest();

        empresaModificar.ID_empresa = empresa.idEmpr;
        _contexto.SaveChanges();

        return Ok();
    }

    // DELETE 
    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
        var empresa = _contexto.Gorca.Find(id);

        if(empresa != null)
            empresa.Habilitado = !empresa.Habilitado;

        _contexto.SaveChanges();

        return Ok();
    }
}