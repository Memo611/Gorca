
using API.Comun;
using API.Comun.Interfaz;
using API.Entidades;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/[Controller]")]
[ApiController]

public class EmpleadosController : ControllerBase
{
    private readonly IApliacacionBdContexto _contexto;

    public EmpleadosController(IApliacacionBdContexto contexto)
    {
        _contexto = contexto;
    }
    
    // GET
    [HttpGet]
    public IEnumerable<ItemEmpleado> Get()
    {
        var listaEmpleados = (from e in _contexto.Empleado

            select new ItemEmpleado()
            {
                idEmp = e.ID_Emp,
                Rfc = e.RFC_Emp,
                Curp = e.CURP_Emp,
                NomEmp = e.Nombre_Pila,
                ApeP = e.Apellido_P,
                ApeM = e.Apellido_M,
                Naci = e.Fecha_nac,
                NumSoci = e.NSS,
                PuestEmp = e.Puesto,
                SalEmp = e.Salario,
                Contrat = e.Fecha_contrato

            }).ToArray();
        return listaEmpleados;
        }
    
    // GET Individual
    [HttpGet("{id}")]
    public ItemEmpleado Get(int id)
    {
        var empleado = (from e in _contexto.Empleado
            where e.ID_Emp == id
            select new ItemEmpleado()
            {
                idEmp = e.ID_Emp,
                Rfc = e.RFC_Emp,
                Curp = e.CURP_Emp,
                NomEmp = e.Nombre_Pila,
                ApeP = e.Apellido_P,
                ApeM = e.Apellido_M,
                Naci = e.Fecha_nac,
                NumSoci = e.NSS,
                PuestEmp = e.Puesto,
                SalEmp = e.Salario,
                Contrat = e.Fecha_contrato
            }).FirstOrDefault();

        return empleado;
    }
    
    // POST
    [HttpPost]
    public ActionResult Post([FromBody] ItemEmpleado nuevoEmpleado)
    {
        if (nuevoEmpleado.idEmp > 0)
            return BadRequest();

        var empleado = new Empleado();
        empleado.RFC_Emp = nuevoEmpleado.Rfc;

        _contexto.Empleado.Add(empleado);
        _contexto.SaveChanges();

        return Ok();
    }

    // PUT 
    [HttpPut("{id}")]
    public ActionResult Put(int id, [FromBody] ItemEmpleado empleado)
    {
        var empleadoModificar = _contexto.Empleado.Find(id);

        if (empleado == null)
            return BadRequest();

        empleadoModificar.RFC_Emp = empleado.Rfc;
        _contexto.SaveChanges();

        return Ok();
    }

    // DELETE
    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
        var empleado = _contexto.Empleado.Find(id);

        if(empleado != null)
            empleado.Habilitado = !empleado.Habilitado;

        _contexto.SaveChanges();

        return Ok();
    }
}
