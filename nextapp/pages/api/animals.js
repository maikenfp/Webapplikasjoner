// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const animals = [
  {animal : "Løve"},
  {animal : "Elefant"}
]

export default function handler(req, res) {
  if(req.method === 'POST'){

      const {animal} = req.body
      animals.push(animal)
      res.status(201).json(animals)
      }
      else {

      res.status(200).json(animals)

  }
}
