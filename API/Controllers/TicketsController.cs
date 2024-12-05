
using API.Comun;
using API.Comun.Interfaz;
using API.Entidades;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[EnableCors("PoliticasCors")]
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
        var listaTickets = (from t in _contexto.Ticket
            where t.Habilitado == true
            select new ItemTicket()
            {
                idTicket = t.ID_Ticket,
                FecEmision = t.Fecha_Emision_Tic,
                HoraEmi = t.Hora_Emision_Tic,
                Subt = t.Subtotal_Tic,
                IVA = t.IVA_Tic,
                Tot = t.Total_Tic

            }).ToArray();
        return listaTickets;
    }
    
    // GET Individual
    [HttpGet("{id}")]
    public ItemTicket Get(int id)
    {
        var ticket = (from t in _contexto.Ticket
            where t.ID_Ticket == id
            select new ItemTicket()
            {
                idTicket = t.ID_Ticket,
                FecEmision = t.Fecha_Emision_Tic,
                HoraEmi = t.Hora_Emision_Tic,
                Subt = t.Subtotal_Tic,
                IVA = t.IVA_Tic,
                Tot = t.Total_Tic
            }).FirstOrDefault();

        return ticket;
    }
    
    // POST 
    [HttpPost]
    public ActionResult Post([FromBody] ItemTicket nuevoTicket)
    {
        if (nuevoTicket.idTicket > 0)
            return BadRequest();

        var ticket = new Ticket();
        ticket.ID_Ticket = nuevoTicket.idTicket;

        _contexto.Ticket.Add(ticket);
        _contexto.SaveChanges();

        return Ok();
    }

    // PUT
    [HttpPut("{id}")]
    public ActionResult Put(int id, [FromBody] ItemTicket ticket)
    {
        var ticketModificar = _contexto.Ticket.Find(id);

        if (ticket == null)
            return BadRequest();

        ticketModificar.ID_Ticket = ticket.idTicket;
        _contexto.SaveChanges();

        return Ok();
    }

    // DELETE
    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
        var ticket = _contexto.Ticket.Find(id);

        if(ticket != null)
            ticket.Habilitado = !ticket.Habilitado;

        _contexto.SaveChanges();

        return Ok();
    }
}
