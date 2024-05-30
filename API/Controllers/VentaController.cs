using API.Comun;
using API.Comun.Interfaz;
using API.Entidades;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class VentaController
{
    private readonly IApliacacionBdContexto _contexto;

    public VentaController(IApliacacionBdContexto contexto)
    {
        _contexto = contexto;
    }

    [HttpPost]
    public JsonResult RealizarVenta(ItemVenta item)
    {
        
        Factura factura = new Factura
        {
             Version = item.Ver,
             Folio = item.Fol,
             Num_certif = item.NumCer,
             ID_Cli = item.idCliente,
             Fecha_Emision_Fac = DateTime.Now,
             Forma_Pago = item.ForPago,
             Subtotal_Fac = item.Subt,
             IVA_Fac = item.IVA,
             Total_Fac = item.Tot,
             Habilitado =true,
              Producto = _contexto.Producto.Where(x => x.ID_Prod == item.idProd).ToList()
        };
        
        Det_Fac detfac = new Det_Fac()
        {
            Factura = factura,
            Producto = factura.Producto.FirstOrDefault(),
            Cantidad_Fac = item.cant,
            PMV_Fac = item.pmv,
            Importe_Fac = item.importe

        };

        var prod = _contexto.Producto.Find(item.idProd);
        prod.Cant_Exist = prod.Cant_Exist - item.cant;
        
        
        _contexto.DetalleFactura.Add(detfac);
        _contexto.Factura.Add(factura);
        _contexto.SaveChanges();
        
        return new JsonResult("Listo");
    }
    /*
    private void AplicarPromocion(ItemVenta item, Promocion promocion)
    {
        // Check if the product is eligible for the promotion
        if (!promocion.ProductosAplicables.Contains(item.idProd))
        {
            return;
        }

        // Apply the promotion discount to the item's price
        item.importe = item.pmv * (1 - promocion.Descuento);

        // Update the item's total price
        item.Tot = item.cant * item.importe;
    }
*/
}