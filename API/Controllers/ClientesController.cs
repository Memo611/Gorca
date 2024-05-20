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
        var listaClientes = (from c in _contexto.Cliente
            where c.Habilitado == true
            select new itemCliente
            {
                idCliente = c.ID_Cliente,
                RSocial = c.Razon_social,
                RegFiscal = c.Regimen_fiscal,
                CFDI = c.Uso_CFDI,
                DirNumero = c.Numero,
                DirColonia = c.Colonia,
                DirCiudad = c.Ciudad,
                DirPais = c.Pais,
                Tel = c.Telefono

            }).ToArray();
        return listaClientes;
        }
    
    // GET Individual
    [HttpGet("{id}")]
    public itemCliente Get(int id)
    {
        var cliente = (from c in _contexto.Cliente
            where c.ID_Cliente == id
            select new itemCliente()
            {
                idCliente = c.ID_Cliente,
                RSocial = c.Razon_social,
                RegFiscal = c.Regimen_fiscal,
                CFDI = c.Uso_CFDI,
                DirNumero = c.Numero,
                DirColonia = c.Colonia,
                DirCiudad = c.Ciudad,
                DirPais = c.Pais,
                Tel = c.Telefono
            }).FirstOrDefault();

        return cliente;
    }
    
    // POST 
    [HttpPost]
    public ActionResult Post([FromBody] itemCliente nuevoCliente)
    {
        if (nuevoCliente.idCliente > 0)
            return BadRequest();

        var cliente = new Cliente();
        cliente.RFC = nuevoCliente.RFC;

        _contexto.Cliente.Add(cliente);
        _contexto.SaveChanges();

        return Ok();
    }

    // PUT 
    [HttpPut("{id}")]
    public ActionResult Put(int id, [FromBody] itemCliente cliente)
    {
        var clienteModificar = _contexto.Cliente.Find(id);

        if (cliente == null)
            return BadRequest();

        clienteModificar.RFC = cliente.RFC;
        _contexto.SaveChanges();

        return Ok();
    }

    // DELETE 
    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
        var cliente = _contexto.Cliente.Find(id);

        if(cliente != null)
            cliente.Habilitado = !cliente.Habilitado;

        _contexto.SaveChanges();

        return Ok();
    }
}