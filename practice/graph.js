class graph{
    constructor(){
        this.adjacencyList={}
    }


    addVertex(vertex){
        console.log('adding ver',vertex);
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[]
        }
    }

    edge(v1,v2){
        if(this.adjacencyList[v1] && this.adjacencyList[v2]){
            this.adjacencyList[v1].push(v2)
            this.adjacencyList[v2].push(v1)
        }else{
            console.log('not found vertext');
            
        }
    }



    display(){
        for(let vertext in this.adjacencyList){
            console.log(vertext,'->',this.adjacencyList[vertext].join(","));
            
        }
    }
}



let g=new graph()

g.addVertex(30)
g.addVertex(24)
g.addVertex(39)
g.edge(30,24)
g.edge(24,39)
g.edge(39,24)
g.display()
