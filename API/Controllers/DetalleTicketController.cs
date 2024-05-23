/*
using API.Comun;
using API.Comun.Interfaz;
using API.Entidades;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/[Controller]")]
[ApiController]

public class DetTicketController : ControllerBase
{
    private readonly IApliacacionBdContexto _contexto;

    public DetTicketController(IApliacacionBdContexto contexto)
    {
        _contexto = contexto;
    }
    
    // GET
    [HttpGet]
    public IEnumerable<ItemDetalleTicket> Get()
    {
        var listaDetTick = (from dt in _contexto.DetalleTickets
            where dt.Habilitado == true
            select new ItemDetalleTicket()
            {
                idProd = dt.ID_Prod,
                idTick = dt.ID_Ticket,
                Cant = dt.Cantidad_Tic,
                Pmv = dt.PMV_Tic,
                Import = dt.Importe_Tic,
                Descu = dt.Descuento_Tic

            }).ToArray();
        return listaDetTick;
        }
    
    // GET Individual
    [HttpGet("{id}")]
    public ItemDetalleTicket Get(int id)
    {
        var dettick = (from dt in _contexto.DetalleTickets
            where dt.ID_Ticket == id
            select new ItemDetalleTicket()
            {
                idProd = dt.ID_Prod,
                idTick = dt.ID_Ticket,
                Cant = dt.Cantidad_Tic,
                Pmv = dt.PMV_Tic,
                Import = dt.Importe_Tic,
                Descu = dt.Descuento_Tic
            }).FirstOrDefault();

        return dettick;
    }
    
    // POST
    [HttpPost]
    public ActionResult Post([FromBody] ItemDetalleTicket nuevoDetTick)
    {
        if (nuevoDetTick.idTick > 0)
            return BadRequest();

        var detTick = new Det_Tick();
        detTick.ID_Ticket = nuevoDetTick.idTick;

        _contexto.DetalleTickets.Add(detTick);
        _contexto.SaveChanges();

        return Ok();
    }

    // PUT 
    [HttpPut("{id}")]
    public ActionResult Put(int id, [FromBody] ItemDetalleTicket dettick)
    {
        var dettickModificar = _contexto.DetalleTickets.Find(id);

        if (dettick == null)
            return BadRequest();

        dettickModificar.ID_Ticket = dettick.idTick;
        _contexto.SaveChanges();

        return Ok();
    }

    // DELETE
    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
        var dettick = _contexto.DetalleTickets.Find(id);

        if(dettick != null)
            dettick.Habilitado = !dettick.Habilitado;

        _contexto.SaveChanges();

        return Ok();
    }
}
*/