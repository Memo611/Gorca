using API.Comun;
using API.Comun.Interfaz;
using API.Entidades;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

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
        var listaFacturas = (from f in _contexto.Facturas
            where f.Habilitado == true
            select new ItemFactura()
            {
                Fol = f.Folio,
                Ver = f.Version,
                MetPago = f.Metodo_pago,
                NumCer = f.Num_certif,
                ForPago = f.Forma_pago,
                FecEmi = f.Fecha_emision,
                Subt = f.Subtotal,
                IVA = f.IVA,
                Tot = f.Total

            }).ToArray();
        return listaFacturas;
        }
    
    // GET Individual
    [HttpGet("{id}")]
    public ItemFactura Get(int id)
    {
        var factura = (from f in _contexto.Facturas
            where f.Folio == id
            select new ItemFactura()
            {
                Fol = f.Folio,
                Ver = f.Version,
                MetPago = f.Metodo_pago,
                NumCer = f.Num_certif,
                ForPago = f.Forma_pago,
                FecEmi = f.Fecha_emision,
                Subt = f.Subtotal,
                IVA = f.IVA,
                Tot = f.Total
                
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

        _contexto.Facturas.Add(factura);
        _contexto.SaveChanges();

        return Ok();
    }

    // PUT
    [HttpPut("{id}")]
    public ActionResult Put(int id, [FromBody] ItemFactura factura)
    {
        var facturaModificar = _contexto.Facturas.Find(id);

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
        var factura = _contexto.Facturas.Find(id);

        if(factura != null)
            factura.Habilitado = !factura.Habilitado;

        _contexto.SaveChanges();

        return Ok();
    }
}