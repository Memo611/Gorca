
using API.Comun;
using API.Comun.Interfaz;
using API.Entidades;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;
[EnableCors("PoliticasCors")]
[Route("api/[Controller]")]
[ApiController]

public class FacturasController : ControllerBase
{
    private readonly IApliacacionBdContexto _contexto;

    public FacturasController(IApliacacionBdContexto contexto)
    {
        _contexto = contexto;
    }
    
    // GET
    [HttpGet]
    public IEnumerable<ItemFactura> Get()
    {
        var listaFacturas = (from f in _contexto.Factura
            where f.Habilitado == true
            select new ItemFactura()
            {
                Fol = f.Folio,
                Ver = f.Version,
                MetPago = f.Metodo_Pago,
                NumCer = f.Num_certif,
                ForPago = f.Forma_Pago,
                FecEmi = f.Fecha_Emision_Fac,
                HoraEmi = f.Hora_Emision_Fac,
                Subt = f.Subtotal_Fac,
                IVA = f.IVA_Fac,
                Tot = f.Total_Fac

            }).ToArray();
        return listaFacturas;
        }
    
    // GET Individual
    [HttpGet("{id}")]
    public ItemFactura Get(int id)
    {
        var factura = (from f in _contexto.Factura
            where f.Folio == id
            select new ItemFactura()
            {
                Fol = f.Folio,
                Ver = f.Version,
                MetPago = f.Metodo_Pago,
                NumCer = f.Num_certif,
                ForPago = f.Forma_Pago,
                FecEmi = f.Fecha_Emision_Fac,
                HoraEmi = f.Hora_Emision_Fac,
                Subt = f.Subtotal_Fac,
                IVA = f.IVA_Fac,
                Tot = f.Total_Fac
                
            }).FirstOrDefault();

        return factura;
    }
    
    // POST 
    [HttpPost]
    public ActionResult Post([FromBody] ItemFactura nuevaFactura)
    {
        if (nuevaFactura.Fol > 0)
            return BadRequest();

        var factura = new Factura();
        factura.Folio = nuevaFactura.Fol;

        _contexto.Factura.Add(factura);
        _contexto.SaveChanges();

        return Ok();
    }

    // PUT
    [HttpPut("{id}")]
    public ActionResult Put(int id, [FromBody] ItemFactura factura)
    {
        var facturaModificar = _contexto.Factura.Find(id);

        if (factura == null)
            return BadRequest();

        facturaModificar.Folio = factura.Fol;
        _contexto.SaveChanges();

        return Ok();
    }

    // DELETE
    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
        var factura = _contexto.Factura.Find(id);

        if(factura != null)
            factura.Habilitado = !factura.Habilitado;

        _contexto.SaveChanges();

        return Ok();
    }
}
