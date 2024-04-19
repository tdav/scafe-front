<template>
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
        tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add note</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Enter order note</label>
                            <input type="text" class="form-control" id="recipient-name"
                                placeholder="Write your order note here...">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="boredr border-1" data-bs-dismiss="modal"
                        style="width: 229px; height: 55px; border-color: #FF5C00; border-radius: 30px; background-color: white; border: solid #FF5C00;">Cancel</button>
                    <button type="button"
                        style="width: 229px; background-color: #FF5C00; border: none; height: 55px; border-radius: 30px; color: white;">Add
                        to order</button>
                </div>
            </div>
        </div>
    </div>
    <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open modal</a>
</template>