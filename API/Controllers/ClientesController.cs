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
                            where c.Habilitado
                            select new itemCliente
                            {
                                idCliente = c.ID_Cli,
                                RFC = c.RFC_Cli,
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
        //Validacion de que traega algo en el RFC
        if (string.IsNullOrEmpty(nuevoCliente.RFC))
            return BadRequest();
        //Validacion para ver si existe un RFC igual en la base de datos
        var existe = (from c in _contexto.Clientes
                      where c.RFC_Cli == nuevoCliente.RFC
                      select c).Any();
        //Respuesta de validacion
        if(existe)
            return BadRequest();
        //Creamos un nuevo cliente si no existe ninguno
        var cliente = new Clientes()
        {
            Razon_Social_Cli = nuevoCliente.RSocial,
            Regimen_Fiscal_Cli = nuevoCliente.RegFiscal,
            RFC_Cli = nuevoCliente.RFC,
            CP_Cli = nuevoCliente.CP,
            Colonia_Cli =  nuevoCliente.DirColonia,
            Ciudad_Cli = nuevoCliente.DirCiudad,
            Calle_Cli = nuevoCliente.Calle,
            Numero_Cli =  nuevoCliente.DirNumero,
            Pais_Cli = nuevoCliente.DirPais,
            Habilitado = true,
            Uso_CFDI_Cli = nuevoCliente.CFDI
        };
        //Se añade el nuevo a la base de datos
        _contexto.Clientes.Add(cliente);
        //Se guardan los cambios hechos en la base de datos
        _contexto.SaveChanges();

        return Ok();
    }

    // PUT 
    [HttpPut("{id}")]
    public ActionResult Put(int id, [FromBody] itemCliente cliente)
    {
        if (id > 0)
        {
            var clienteModificar = _contexto.Clientes.Find(id);

            if (cliente == null)
                return BadRequest();

            clienteModificar.RFC_Cli = cliente.RFC;
            clienteModificar.Razon_Social_Cli = cliente.RSocial;
            clienteModificar.Regimen_Fiscal_Cli = cliente.RegFiscal;
            clienteModificar.Uso_CFDI_Cli = cliente.CFDI;
            clienteModificar.Calle_Cli = cliente.Calle;
            clienteModificar.Numero_Cli = cliente.DirNumero;
            clienteModificar.Colonia_Cli = cliente.DirColonia;
            clienteModificar.Ciudad_Cli = cliente.DirCiudad;          
            clienteModificar.CP_Cli = cliente.CP;
            clienteModificar.Pais_Cli = cliente.DirPais;
            clienteModificar.Habilitado = true;        

            _contexto.SaveChanges();

            return Ok();
        }
        else { 
            
            return BadRequest(); 
        }
    }

    // DELETE 
    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
        var cliente = _contexto.Clientes.Find(id);

        if (cliente != null)
            cliente.Habilitado = false;

        _contexto.Clientes.Remove(cliente);
        _contexto.SaveChanges();

        return Ok();
    }
}