import  { type Doc, type APISpaceXResponse } from "src/types/api";


export const getLaunchBy = async ({ id }: { id: string }) => {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);

    const launch = (await res.json()) as Doc;

    return launch;
}

export const getLaunchesByName = async (name: string) => {
    // Lógica para obtener lanzamientos por nombre desde tu servicio
    const res = await fetch(`https://api.spacexdata.com/v5/launches/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: {
          'name': { '$regex': `.*${name}.*`, '$options': 'i' } // Búsqueda por nombre
        },
        options: {
          limit: 12 // Limitar a un solo resultado
        },
      })
    });
  
    const { docs: launches } = await res.json() as APISpaceXResponse;
    return launches; // Devolver todos los resultados
  };
  

export const getLastestLaunches = async () => {
    const res = await fetch('https://api.spacexdata.com/v5/launches/query',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: {},// Búsqueda por nombre,
                options: {
                    sort: {
                        date_unix: 'asc'
                    },
                    limit: 12
                },
            })

        }
    )
    const { docs: launches } = (await res.json()) as APISpaceXResponse;

    return launches;

}

