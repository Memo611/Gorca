using API.Comun;
using API.Comun.Interfaz;
using API.Entidades;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/[Controller]")]
[ApiController]

public class ClientesController : ControllerBase
{
    private readonly IApliacacionBdContexto _contexto;

    public ClientesController(IApliacacionBdContexto contexto)
    {
        _contexto = contexto;
    }
    
    //GET
    [HttpGet]
    public IEnumerable<itemCliente> Get()
    {
        var listaClientes = (from c in _contexto.Clientes
            where c.Habilitado == true
            select new itemCliente
            {
                idCliente = c.ID_Cli,
                RSocial = c.Razon_Social_Cli,
                RegFiscal = c.Regimen_Fiscal_Cli,
                CFDI = c.Uso_CFDI_Cli,
                Calle = c.Calle_Cli,
                DirNumero = c.Numero_Cli,
                DirColonia = c.Colonia_Cli,
                DirCiudad = c.Ciudad_Cli,
                CP = c.CP_Cli,
                DirPais = c.Pais_Cli

            }).ToArray();
        return listaClientes;
        }
    
    // GET Individual
    [HttpGet("{id}")]
    public itemCliente Get(int id)
    {
        var cliente = (from c in _contexto.Clientes
            where c.ID_Cli == id
            select new itemCliente()
            {
                idCliente = c.ID_Cli,
                RSocial = c.Razon_Social_Cli,
                RegFiscal = c.Regimen_Fiscal_Cli,
                CFDI = c.Uso_CFDI_Cli,
                Calle = c.Calle_Cli,
                DirNumero = c.Numero_Cli,
                DirColonia = c.Colonia_Cli,
                DirCiudad = c.Ciudad_Cli,
                CP = c.CP_Cli,
                DirPais = c.Pais_Cli
            }).FirstOrDefault();

        return cliente;
    }
    
    // POST 
    [HttpPost]
    public ActionResult Post([FromBody] itemCliente nuevoCliente)
    {
        if (nuevoCliente.idCliente > 0)
            return BadRequest();

        var cliente = new Clientes();
        cliente.RFC_Cli = nuevoCliente.RFC;

        _contexto.Clientes.Add(cliente);
        _contexto.SaveChanges();

        return Ok();
    }

    // PUT 
    [HttpPut("{id}")]
    public ActionResult Put(int id, [FromBody] itemCliente cliente)
    {
        var clienteModificar = _contexto.Clientes.Find(id);

        if (cliente == null)
            return BadRequest();

        clienteModificar.RFC_Cli = cliente.RFC;
        _contexto.SaveChanges();

        return Ok();
    }

    // DELETE 
    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
        var cliente = _contexto.Clientes.Find(id);

        if(cliente != null)
            cliente.Habilitado = !cliente.Habilitado;

        _contexto.SaveChanges();

        return Ok();
    }
}