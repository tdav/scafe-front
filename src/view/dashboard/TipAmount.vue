<template>
    <div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
            data-bs-whatever="@mdo">Open modal</button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Tip Amount</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body pb-0">
                        <form>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="recipient-name" placeholder="Input amount" style="height: 78px;">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="boredr border-1" data-bs-dismiss="modal" style="width: 229px; height: 55px; border-color: #FF5C00; border-radius: 30px; background-color: white; border: #FF5C00 solid;">Cancel</button>
                        <button type="button" style="width: 229px; background-color: #FF5C00; border: none; height: 55px; border-radius: 30px; color: white;">Add to order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>