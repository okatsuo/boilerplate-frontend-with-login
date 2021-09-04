import Swal, { SweetAlertOptions } from 'sweetalert2'

const sweetAlert = async (
  props: SweetAlertOptions
) => {
  return (
    await Swal.fire({
      width: 'auto',
      ...props
    })
  )
}

export default sweetAlert
