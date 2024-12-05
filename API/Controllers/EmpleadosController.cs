
using API.Comun;
using API.Comun.Interfaz;
using API.Entidades;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;
[EnableCors("PoliticasCors")]
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
                              where e.Habilitado
                              select new ItemEmpleado
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
        if (string.IsNullOrEmpty(nuevoEmpleado.Rfc))
            return BadRequest();

        var existe = (from e in _contexto.Empleado
                      where e.RFC_Emp == nuevoEmpleado.Rfc
                      select e).Any();

        if (existe)
            return BadRequest();

        var empleado = new Empleado()
        {
            RFC_Emp = nuevoEmpleado.Rfc,
            CURP_Emp = nuevoEmpleado.Curp,
            Nombre_Pila = nuevoEmpleado.NomEmp,
            Apellido_P = nuevoEmpleado.ApeP,
            Apellido_M = nuevoEmpleado.ApeM,
            Fecha_nac = nuevoEmpleado.Naci,
            NSS = nuevoEmpleado.NumSoci,
            Puesto = nuevoEmpleado.PuestEmp,
            Salario = nuevoEmpleado.SalEmp,
            Habilitado = true,
            Fecha_contrato = nuevoEmpleado.Contrat
        };

        _contexto.Empleado.Add(empleado);
        _contexto.SaveChanges();

        return Ok();
    }

    // PUT 
    [HttpPut("{id}")]
    public ActionResult Put(int id, [FromBody] ItemEmpleado empleado)
    {
        if (id > 0) 
        {
            var empleadoModificar = _contexto.Empleado.Find(id);
            if (empleado == null)          
                return BadRequest();
            empleadoModificar.RFC_Emp = empleado.Rfc;
            empleadoModificar.CURP_Emp = empleado.Curp;
            empleadoModificar.Nombre_Pila = empleado.NomEmp;
            empleadoModificar.Apellido_P = empleado.ApeP;
            empleadoModificar.Apellido_M = empleado.ApeM;
            empleadoModificar.Fecha_nac = empleado.Naci;
            empleadoModificar.NSS = empleado.NumSoci;
            empleadoModificar.Puesto = empleado.PuestEmp;
            empleadoModificar.Salario = empleado.SalEmp;
            empleadoModificar.Fecha_contrato = empleado.Contrat;

            _contexto.SaveChanges();
            return Ok();
        }
        else
        {
            return BadRequest();
        }
    }

    // DELETE
    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
        var empleado = _contexto.Empleado.Find(id);

        if (empleado != null)
            empleado.Habilitado = false;

        _contexto.Empleado.Remove(empleado);
        _contexto.SaveChanges();

        return Ok();
    }
}
