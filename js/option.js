// JavaScript Code
        // README: When adding new questions make sure to change the class and name to the real role!
        function pointTotal(){ 
            let points = new Array(0, 0, 0, 0, 0); // The order of points is Product Owner, Scrum Master, QA, Tech Lead, Tech Chaser
            var productOwner = document.getElementsByClassName("ProductOwner");
            var ScrumMaster = document.getElementsByClassName("ScrumMaster");
            var QA = document.getElementsByClassName("QA");
            var TechLead = document.getElementsByClassName("TechLead");
            var TechChaser = document.getElementsByClassName("TechChaser");
            for(i = 0; i < productOwner.length; i++)
                if(productOwner[i].checked)
                    points[0] += parseInt(productOwner[i].value, 10);
            for(i = 0; i < ScrumMaster.length; i++)
                if(ScrumMaster[i].checked)
                    points[1] += parseInt(ScrumMaster[i].value, 10);
            for(i = 0; i < QA.length; i++)
                if(QA[i].checked)
                    points[2] += parseInt(QA[i].value, 10);
            for(i = 0; i < TechLead.length; i++)
                if(TechLead[i].checked)
                    points[3] += parseInt(TechLead[i].value, 10);
            for(i = 0; i < TechChaser.length; i++)
                if(TechChaser[i].checked)
                    points[4] += parseInt(TechChaser[i].value, 10);
            var highestIndex = 0;
            for(i = 1; i < 5; i++) // Single Highest Role
                if(points[i] > points[highestIndex])
                    highestIndex = i;
            var roles = new Array("Product Owner", "Scrum Master", "QA", "Tech Lead", "Tech Chaser");
            document.getElementById("result").innerHTML = "Result: Your best suited role(s) is " + roles[highestIndex];
            for(i = 0; i < 5; i++) // Multiple Highest Role
                if(points[i] == points[highestIndex] && highestIndex != i)
                    document.getElementById("result").innerHTML += ", " + roles[i];
            document.getElementById("result").innerHTML += '!';
    }