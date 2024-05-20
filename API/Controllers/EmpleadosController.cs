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
        var listaEmpleados = (from e in _contexto.Empleados
            where e.Habilitado == true
            select new ItemEmpleado()
            {
                idEmp = e.ID_emp,
                Rfc = e.RFC,
                Curp = e.CURP,
                NomEmp = e.Nombre,
                Naci = e.Fecha_nac,
                NumSoci = e.NSS,
                PuestEmp = e.Puesto,
                SalEmp = e.Salario,
                Contrat = e.Fecha_contrat,
                Tel = e.Telefono

            }).ToArray();
        return listaEmpleados;
        }
    
    // GET Individual
    [HttpGet("{id}")]
    public ItemEmpleado Get(int id)
    {
        var empleado = (from e in _contexto.Empleados
            where e.ID_emp == id
            select new ItemEmpleado()
            {
                idEmp = e.ID_emp,
                Rfc = e.RFC,
                Curp = e.CURP,
                NomEmp = e.Nombre,
                Naci = e.Fecha_nac,
                NumSoci = e.NSS,
                PuestEmp = e.Puesto,
                SalEmp = e.Salario,
                Contrat = e.Fecha_contrat,
                Tel = e.Telefono
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
        empleado.RFC = nuevoEmpleado.Rfc;

        _contexto.Empleados.Add(empleado);
        _contexto.SaveChanges();

        return Ok();
    }

    // PUT 
    [HttpPut("{id}")]
    public ActionResult Put(int id, [FromBody] ItemEmpleado empleado)
    {
        var empleadoModificar = _contexto.Empleados.Find(id);

        if (empleado == null)
            return BadRequest();

        empleadoModificar.RFC = empleado.Rfc;
        _contexto.SaveChanges();

        return Ok();
    }

    // DELETE
    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
        var empleado = _contexto.Empleados.Find(id);

        if(empleado != null)
            empleado.Habilitado = !empleado.Habilitado;

        _contexto.SaveChanges();

        return Ok();
    }
}