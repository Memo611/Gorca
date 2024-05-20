using API.Comun;
using API.Comun.Interfaz;
using API.Entidades;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/[Controller]")]
[ApiController]

public class TicketsController : ControllerBase
{
    private readonly IApliacacionBdContexto _contexto;

    public TicketsController(IApliacacionBdContexto contexto)
    {
        _contexto = contexto;
    }
    
    // GET
    [HttpGet]
    public IEnumerable<ItemTicket> Get()
    {
        var listaTickets = (from t in _contexto.TicketVentas
            where t.Habilitado == true
            select new ItemTicket()
            {
                idTicket = t.ID_ticket,
                FecEmision = t.Fecha_emision,
                Subt = t.Subtotal,
                IVA = t.IVA,
                Tot = t.Total

            }).ToArray();
        return listaTickets;
    }
    
    // GET Individual
    [HttpGet("{id}")]
    public ItemTicket Get(int id)
    {
        var ticket = (from t in _contexto.TicketVentas
            where t.ID_ticket == id
            select new ItemTicket()
            {
                idTicket = t.ID_ticket,
                FecEmision = t.Fecha_emision,
                Subt = t.Subtotal,
                IVA = t.IVA,
                Tot = t.Total
            }).FirstOrDefault();

        return ticket;
    }
    
    // POST 
    [HttpPost]
    public ActionResult Post([FromBody] ItemTicket nuevoTicket)
    {
        if (nuevoTicket.idTicket > 0)
            return BadRequest();

        var ticket = new Ticket_venta();
        ticket.ID_ticket = nuevoTicket.idTicket;

        _contexto.TicketVentas.Add(ticket);
        _contexto.SaveChanges();

        return Ok();
    }

    // PUT
    [HttpPut("{id}")]
    public ActionResult Put(int id, [FromBody] ItemTicket ticket)
    {
        var ticketModificar = _contexto.TicketVentas.Find(id);

        if (ticket == null)
            return BadRequest();

        ticketModificar.ID_ticket = ticket.idTicket;
        _contexto.SaveChanges();

        return Ok();
    }

    // DELETE
    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
        var ticket = _contexto.TicketVentas.Find(id);

        if(ticket != null)
            ticket.Habilitado = !ticket.Habilitado;

        _contexto.SaveChanges();

        return Ok();
    }
}