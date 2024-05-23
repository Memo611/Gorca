/*
using API.Comun;
using API.Comun.Interfaz;
using API.Entidades;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/[Controller]")]
[ApiController]

public class DetFacController : ControllerBase
{
    private readonly IApliacacionBdContexto _contexto;

    public DetFacController(IApliacacionBdContexto contexto)
    {
        _contexto = contexto;
    }
    
    //GET
    [HttpGet]
    public IEnumerable<ItemDetalleFactura> Get()
    {
        var listaClientes = (from df in _contexto.DetalleFactura
            where df.Habilitado == true
            select new ItemDetalleFactura()
            {
                idProd = df.ID_Prod,
                Fol = df.Folio,
                Cant = df.Cantidad_Fac,
                Pmv = df.PMV_Fac,
                Import = df.Importe_Fac,
                Descu = df.Descuento_Fac

            }).ToArray();
        return listaClientes;
        }
    
    // GET Individual
    [HttpGet("{id}")]
    public ItemDetalleFactura Get(int id)
    {
        var detfac = (from df in _contexto.DetalleFactura
            where df.Folio == id
            select new ItemDetalleFactura()
            {
                idProd = df.ID_Prod,
                Fol = df.Folio,
                Cant = df.Cantidad_Fac,
                Pmv = df.PMV_Fac,
                Import = df.Importe_Fac,
                Descu = df.Descuento_Fac
            }).FirstOrDefault();

        return detfac;
    }
    
    // POST 
    [HttpPost]
    public ActionResult Post([FromBody] ItemDetalleFactura nuevoDetFac)
    {
        if (nuevoDetFac.Fol > 0)
            return BadRequest();

        var detfac = new Det_Fac();
        detfac.Folio = nuevoDetFac.Fol;

        _contexto.DetalleFactura.Add(detfac);
        _contexto.SaveChanges();

        return Ok();
    }

    // PUT 
    [HttpPut("{id}")]
    public ActionResult Put(int id, [FromBody] ItemDetalleFactura detfac)
    {
        var detfacModificarModificar = _contexto.DetalleFactura.Find(id);

        if (detfac == null)
            return BadRequest();

        detfacModificarModificar.Folio = detfac.Fol;
        _contexto.SaveChanges();

        return Ok();
    }

    // DELETE 
    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
        var detfac = _contexto.DetalleFactura.Find(id);

        if(detfac != null)
            detfac.Habilitado = !detfac.Habilitado;

        _contexto.SaveChanges();

        return Ok();
    }
}
*/