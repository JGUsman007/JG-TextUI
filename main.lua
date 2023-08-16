
function Show(title,input,description)
    SendNUIMessage({
        type = 'showui',
        title = title,
        input = input,
        description = description
    })
end


function Click()
    SendNUIMessage({
        type = 'click'
    }) 
end


function Hide()
    SendNUIMessage({
        type = 'hideui'
    })
end